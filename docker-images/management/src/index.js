var Docker = require('dockerode');
const express = require('express')
const ws = require('ws')

var docker = new Docker({socketPath: '/var/run/docker.sock'});

const targetImages = ["res/apache_php", "res/express_quotes"]

var rpNode = {}

async function getRP() {
    var containers = await docker.listContainers()
    for (let i = 0; i < containers.length; i++) {
        const c = containers[i]
        if(c.Image == "res/apache_rp" && c.State == 'running')
            return {
                id: c.Id,
                name: c.Names[0],
                image: c.Image,
                ip: c.NetworkSettings.Networks.bridge.IPAddress,
                status: c.Status
            } 
    }
    return {};
}

async function getRunning() {
    var containers = await docker.listContainers()
    var cts = []
    containers.forEach(c => {
        if(targetImages.indexOf(c.Image) > -1)
            cts.push({
                id: c.Id,
                name: c.Names[0],
                image: c.Image,
                ip: c.NetworkSettings.Networks.bridge.IPAddress,
                status: c.Status
            })
    });
    return cts
}

async function startNode(type) {
    container = await docker.createContainer({Image: type, Env: ["RP_IP=" + rpNode.ip]});
    await container.start();
    return container.id;
}

async function stopNode(id) {
    await docker.getContainer(id).stop();
    console.log("Stopped", id)
}

async function startRP() {
    container = await docker.createContainer({Image: 'res/apache_rp', HostConfig: {PortBindings: {'80/tcp': [{ HostPort: '8080' }]}}});
    await container.start()
}


const app = express();

app.use(express.static(__dirname + '/public'))

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
    console.log("New connection")
  socket.on('message', message => {
      handleMessage(message, socket)
  });
});

const server = app.listen(3000);
console.log("Listening onport 3000")
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});

async function handleMessage(message, socket) {
    data = JSON.parse(message)
    switch (data.type) {
        case "getNodes":
            var nodes = await getRunning();
            socket.send(JSON.stringify({
                type: "nodes",
                data: nodes
            }))
            break;

        case "getRP":
            socket.send(JSON.stringify({
                type: "rp",
                data: await getRP()
            }))
            break;

        case "addNode":
            await startNode(data.nodeType)
            var nodes = await getRunning();
            socket.send(JSON.stringify({
                type: "nodes",
                data: nodes
            }))
            break;
        
        case "stopNode":
            await stopNode(data.id)
            var nodes = await getRunning();
            socket.send(JSON.stringify({
                type: "nodes",
                data: nodes
            }))
            break;

            

        case "startRP":
            await startRP()
            rpNode = await getRP()
            socket.send(JSON.stringify({
                type: "rp",
                data: await getRP()
            }))
            break;

        case "stopRP":
            await stopNode(rpNode.id)
            rpNode = await getRP()
            socket.send(JSON.stringify({
                type: "rp",
                data: await getRP()
            }))
            break;
    
        default:
            break;
    }
}