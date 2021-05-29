// Create WebSocket connection.
const socket = new WebSocket('ws://' + location.host);

var rpNode = {}

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log(event.data)
    data = JSON.parse(event.data)
    console.log(data)
    switch (data.type) {
        case "rp":
            rpNode = data.data
            console.log(rpNode)
            if(rpNode.ip == null){
                console.log("OFFLINE")
                $('#rpState').text("OFFLINE")
                $('#rpUptime').text("OFFLINE")
                $('#rpState').addClass("rpError")
                $('#rpState').removeClass("rpSuccess")
            } else{
                $('#rpState').text(rpNode.ip)
                $('#rpUptime').text(rpNode.status.replace("Up ", ""))
                $('#rpState').removeClass("rpError")
                $('#rpState').addClass("rpSuccess")
            }
            break;
        case "nodes":
            setupNodes(data.data)
            break;
        default:
            break;
    }
});

// Connection opened
socket.addEventListener('open', function (event) {
    console.log("SEND")
    socket.send(JSON.stringify({
        type: "getRP"
    }));
    socket.send(JSON.stringify({
        type: "getNodes"
    }));
});


$( "#rpStart" ).click(function() {
    socket.send(JSON.stringify({
        type: "startRP"
    }));
});

$( "#rpStop" ).click(function() {
    socket.send(JSON.stringify({
        type: "stopRP"
    }));
});

$( "#addStatic" ).click(function() {
    socket.send(JSON.stringify({
        type: "addNode",
        nodeType: "res/apache_php"
    }));
});

$( "#addDynamic" ).click(function() {
    socket.send(JSON.stringify({
        type: "addNode",
        nodeType: "res/express_quotes"
    }));
});



function setupNodes(nodes) {
    var staticNodes = 0
    var dynamicNodes = 0

    $('#staticList').empty()
    $('#dynamicList').empty()
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        var content = `
        <tr>
            <th scope="row">
            ${node.name}
            </th>
            <td>
            ${node.ip}
            </td>
            <td>
            ${node.status.replace("Up ", "")}
            </td>
            <td style="text-align: center;">
            <a href="#!" class="btn btn-sm btn-danger node-stop" data-id="${node.id}">
                <i class="fas fa-stop"></i>
            </a>
            </td>
        </tr>
        `
        switch (node.image) {
            case "res/apache_php":
                $('#staticList').append(content);
                staticNodes++;
                break;
            case "res/express_quotes":
                $('#dynamicList').append(content);
                dynamicNodes++;
                break;
            default:
                break;
        }
    }
    $('#staticCounter').text(staticNodes);
    $('#dynamicCounter').text(dynamicNodes);


    $( ".node-stop" ).click(function() {
        console.log("CLICK")
        $(this).html("<i class=\"fas fa-circle-notch fa-spin\"></i>")
        var id = $(this).data("id")
        console.log(id)
        socket.send(JSON.stringify({
            type: "stopNode",
            id: id
        }));
    });
}