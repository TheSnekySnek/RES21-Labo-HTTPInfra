# Teaching-HEIGVD-RES-2021-Labo-HTTPInfra

## Objectives

The first objective of this lab is to get familiar with software tools that will allow us to build a **complete web infrastructure**. By that, we mean that we will build an environment that will allow us to serve **static and dynamic content** to web browsers. To do that, we will see that the **apache httpd server** can act both as a **HTTP server** and as a **reverse proxy**. We will also see that **express.js** is a JavaScript framework that makes it very easy to write dynamic web apps.

The second objective is to implement a simple, yet complete, **dynamic web application**. We will create **HTML**, **CSS** and **JavaScript** assets that will be served to the browsers and presented to the users. The JavaScript code executed in the browser will issue asynchronous HTTP requests to our web infrastructure (**AJAX requests**) and fetch content generated dynamically.

The third objective is to practice our usage of **Docker**. All the components of the web infrastructure will be packaged in custom Docker images (we will create at least 3 different images).

## General instructions

* This is a **BIG** lab and you will need a lot of time to complete it. 
* We have prepared webcasts for a big portion of the lab (**what can get you the "base" grade of 4.5**).
* Be aware that the webcasts have been recorded in 2016. There is no change in the list of tasks to be done, but of course **there are some differences in the details**. For instance, the Docker images that we use to implement the solution have changed a bit and you will need to do **some adjustments to the scripts**. This is part of the work and we ask you to document what the required adaptations in your report.
* The webcasts present one solution. Feeling adventurous and want to propose another one (for instance, by using nginx instead apache httpd, or django instead of express.js)? Go ahead, we **LOVE** that. Make sure to document your choices in the report. If you are not sure if your choice is compatible with the list of acceptance criteria? Not sure about what needs to be done to get the extra points? Reach out to the teaching team. **Learning to discuss requirements with a "customer"** (even if this one pays you with a grade and not with money) is part of the process!
* To get **additional points**, you will need to do research in the documentation by yourself (we are here to help, but we will not give you step-by-step instructions!). To get the extra points, you will also need to be creative (do not expect complete guidelines).
* The lab can be done in **groups of 2 students**. You will learn very important skills and tools, which you will need to next year's courses. You cannot afford to skip this content if you want to survive next year. Essentially, this means that it's a pretty bad idea to only have one person in the group doing the job...
* Read carefully all the **acceptance criteria**.
* We will request demos as needed. When you do your **demo**, be prepared to that you can go through the procedure quickly (there are a lot of solutions to evaluate!)
* **You have to write a report. Please do that directly in the repo, in one or more markdown files. Start in the README.md file at the root of your directory.**
* The report must contain the procedure that you have followed to prove that your configuration is correct (what you would do if you were doing a demo).
* Check out the **due dates** on the main repo for the course.


## Step 1: Static HTTP server with apache httpd

### Webcasts

* [Labo HTTP (1): Serveur apache httpd "dockerisé" servant du contenu statique](https://www.youtube.com/watch?v=XFO4OmcfI3U)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image.
* You can do a demo, where you build the image, run a container and access content from a browser.
* You have used a nice looking web template, different from the one shown in the webcast.
* You are able to explain what you do in the Dockerfile.
* You are able to show where the apache config files are located (in a running container).
* You have **documented** your configuration in your report.

## Step 2: Dynamic HTTP server with express.js

### Webcasts

* [Labo HTTP (2a): Application node "dockerisée"](https://www.youtube.com/watch?v=fSIrZ0Mmpis)
* [Labo HTTP (2b): Application express "dockerisée"](https://www.youtube.com/watch?v=o4qHbf_vMu0)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image.
* You can do a demo, where you build the image, run a container and access content from a browser.
* You generate dynamic, random content and return a JSON payload to the client.
* You cannot return the same content as the webcast (you cannot return a list of people).
* You don't have to use express.js; if you want, you can use another JavaScript web framework or event another language.
* You have **documented** your configuration in your report.


## Step 3: Reverse proxy with apache (static configuration)

### Webcasts

* [Labo HTTP (3a): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=WHFlWdcvZtk)
* [Labo HTTP (3b): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=fkPwHyQUiVs)
* [Labo HTTP (3c): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=UmiYS_ObJxY)


### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image for the container.
* You can do a demo, where you start from an "empty" Docker environment (no container running) and where you start 3 containers: static server, dynamic server and reverse proxy; in the demo, you prove that the routing is done correctly by the reverse proxy.
* You can explain and prove that the static and dynamic servers cannot be reached directly (reverse proxy is a single entry point in the infra). 
* You are able to explain why the static configuration is fragile and needs to be improved.
* You have **documented** your configuration in your report.


## Step 4: AJAX requests with JQuery

### Webcasts

* [Labo HTTP (4): AJAX avec JQuery](https://www.youtube.com/watch?v=fgpNEbgdm5k)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the various images.
* You can do a complete, end-to-end demonstration: the web page is dynamically updated every few seconds (with the data coming from the dynamic backend).
* You are able to prove that AJAX requests are sent by the browser and you can show the content of th responses.
* You are able to explain why your demo would not work without a reverse proxy (because of a security restriction).
* You have **documented** your configuration in your report.

## Step 5: Dynamic reverse proxy configuration

### Webcasts

* [Labo HTTP (5a): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=iGl3Y27AewU)
* [Labo HTTP (5b): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=lVWLdB3y-4I)
* [Labo HTTP (5c): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=MQj-FzD-0mE)
* [Labo HTTP (5d): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=B_JpYtxoO_E)
* [Labo HTTP (5e): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=dz6GLoGou9k)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the various images.
* You have found a way to replace the static configuration of the reverse proxy (hard-coded IP adresses) with a dynamic configuration.
* You may use the approach presented in the webcast (environment variables and PHP script executed when the reverse proxy container is started), or you may use another approach. The requirement is that you should not have to rebuild the reverse proxy Docker image when the IP addresses of the servers change.
* You are able to do an end-to-end demo with a well-prepared scenario. Make sure that you can demonstrate that everything works fine when the IP addresses change!
* You are able to explain how you have implemented the solution and walk us through the configuration and the code.
* You have **documented** your configuration in your report.

## Additional steps to get extra points on top of the "base" grade

### Load balancing: multiple server nodes (0.5pt)

* You extend the reverse proxy configuration to support **load balancing**. 
* You show that you can have **multiple static server nodes** and **multiple dynamic server nodes**. 
* You prove that the **load balancer** can distribute HTTP requests between these nodes.
* You have **documented** your configuration and your validation procedure in your report.

### Load balancing: round-robin vs sticky sessions (0.5 pt)

* You do a setup to demonstrate the notion of sticky session.
* You prove that your load balancer can distribute HTTP requests in a round-robin fashion to the dynamic server nodes (because there is no state).
* You prove that your load balancer can handle sticky sessions when forwarding HTTP requests to the static server nodes.
* You have documented your configuration and your validation procedure in your report.

### Dynamic cluster management (0.5 pt)

* You develop a solution, where the server nodes (static and dynamic) can appear or disappear at any time.
* You show that the load balancer is dynamically updated to reflect the state of the cluster.
* You describe your approach (are you implementing a discovery protocol based on UDP multicast? are you using a tool such as serf?)
* You have documented your configuration and your validation procedure in your report.

### Management UI (0.5 pt)

* You develop a web app (e.g. with express.js) that administrators can use to monitor and update your web infrastructure.
* You find a way to control your Docker environment (list containers, start/stop containers, etc.) from the web app. For instance, you use the Dockerode npm module (or another Docker client library, in any of the supported languages).
* You have documented your configuration and your validation procedure in your report.


# Report

## Build and Management UI
The `build.sh` file can be used to build the images of the static, dynamic, reverse proxy and management ui.

The management UI can be started via the `startUI.sh` script and accessed at http://localhost:3000.

## Step 1: Static HTTP server with apache httpd
### Docker Image
The docker image for the static HTTP server is `res/apache_php`. It is based on the `php:7.4-apache` image and serves the content of the src directory.

The server uses the port 80 inside the container and can be published to the host via the -p flag. 

### Template used
The template used for the the website is this one [`Techie`](https://bootstrapmade.com/techie-free-skin-bootstrap-3/)

### Configuration
No configuration was modified in apache. The default site is used is serving the contents of `/var/www/html`

The content of the Dockerfile is the following
```
FROM php:7.4-apache

COPY src/ /var/www/html/
```

### Validation
By building the image with the following command
```
docker build -t res/apache_php .
```

And starting the container after publishing the port 80 to 8080 on our host
```
docker run -p 8080:80 res/apache_php
```

We can access the website via the localhost:8080 url.


## Step 2: Dynamic HTTP server with express.js
### Docker Image
This image is based of the `node:14-alpine image`. I decided to use the LTS vbersion of node as it was probably the most stable and compatible with the most modules.

The image will copy the content of `src` to the `/opt/app` directory and start the node with the `index.js` file.

### Dynamic content
I decided to make a service that provided quotes each time it was called cia an api. 
I used the `random-quotes` module to get the quotes as well as `express` to listen and respond to requests.

Each Get request on the root will generate a quote consisting of a JSON object containing the quote and the author.

### Configuration
The Dockerfile consists of the following
```
FROM node:14-alpine

COPY src /opt/app

CMD ["node", "/opt/app/index.js"]
```

### Verfification
We build the image with the following command
```
docker build -t res/express_quotes .
```

And start the container with port 3000 published to port 3000 on our host
```
docker run -p 3000:3000 res/express_quotes
```

We making a request to `localhost:3000` the server responds with a new quote

## Step 3: Reverse proxy with apache (static configuration)
### Docker Image
The reverse proxy is image `res/apache_rp` and is based of the same image as the static server `php:7.4-apache`. The goal of this container is to make the previous ones accessible via the same entry point.

The image copies the configuration files for the default site and reverse proxy to the sites-available folder. It then loads the proxy modules `a2enmod proxy proxy_http` and enables the sites via the command `a2ensite 000-* 001-*`.

### Reverse Proxy Configuration
This is the configuration of the revrerse proxy
```
<VirtualHost *:80>

    ServerName demo.res.ch

    #ErrorLog ${APACHE_LOG_DIR}/error.log
    #CustomLog ${APACHE_LOG_DIR}/access.log combined
    
    ProxyPass "/api/quotes/" "http://172.17.0.2:3000/"
    ProxyPassReverse "/api/quotes/" "http://172.17.0.2:3000/"

    ProxyPass "/" "http://172.17.0.3:80/"
    ProxyPassReverse "/" "http://172.17.0.3:80/"

</VirtualHost>
```

We start by defining the `ServerName`. This tells apache that if the host header corresponds to this it should apply the following config.

The 2 next lines are for the `error` and `access` logs. They are currently disabled.

`ProxyPass` let's us map incoming requests to the right backend server. Here we assign the route `/api/quotes/` to redirect to `http://172.17.0.2:3000/` and the route `/` to `"http://172.17.0.3:80/"`.

We also need to specify the `proxyPassReverse` to rewrite the `Location:` headers generated by the backend so they point to the reverse proxy and not themselves.

### Problems
The Problem with this configurations is that the ip of the dynamic and static servers are hardcoded into it.

If we start the containers in a different order or if the ip is already taken, the system won't work.

### Validation
To test this setup we can start both static and dynamic containers.
```
docker run res/apache_php 
docker run res/express_quotes 
```

We can then  build and run the reverse proxy.
```
docker build -t res/apache_rp .
docker run -p 8080:80 res/apache_rp
```

This ensures we have the rights ip for each container.

We also need to add `demo.res.ch` to point to localhost in the `hosts` file

We can now visit `demo.res.ch:8080/` and get redirected to the static server. If we visit `demo.res.ch:8080/api/quotes/` we can get our dynamicaly generated quotes.

## Step 4: AJAX requests with JQuery
### Modifying the template
I had to edit the template to be able to address the main title and subtitle on the front page.

I did this by adding the `id=title1` and `id=title2` for the title and subtitle.

### Fetch Code
```
function fetchQuotes(){
    fetch('/api/quotes/')  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Status Code: ' + response.status);  
          return;  
        }  
        response.json().then(function(data) {  
          console.log(data);
          document.getElementById("title1").innerText = data.body;
          document.getElementById("title2").innerText = data.author;
        });  
      }  
    )  
    .catch(function(err) {  
      console.log(err);  
    });
}

setInterval(() => {
    fetchQuotes()
}, 2000);
```

I used the `Fetch Api` that replaces the old `Ajax` requests and I simply replaced the text for the title to the quote and the subtitle with the author.

I then run this function every 4 seconds using `setInterval`

### Verification
To verify the modification, we have to rebuild the static server and start it.

```
docker build -t res/apache_php .
docker run res/apache_php
```

We can then got to `demo.res.ch:8080/` and see that the title and subtitle get updated every 4 seconds with a new quote.

## Step 5: Dynamic reverse proxy configuration
To fix the problem with the static configuration file we need to be able to pass the ip address of both the static and dynamic server to the reverse proxy container when starting it.

To do this I decided to use the `-e` flag to set the ip addresses as environment variables inside the container.

### Template
To insert the ip addresses dynamicaly inside the configuration file, we need to create a php template that will take our environment variables and output the config file with them embeded.
```
<?php
    $dynamic = getenv('DYNAMIC_APP');
    $static = getenv('STATIC_APP');
?>
<VirtualHost *:80>

    ServerName demo.res.ch

    #ErrorLog ${APACHE_LOG_DIR}/error.log
    #CustomLog ${APACHE_LOG_DIR}/access.log combined

    ProxyPass "/api/quotes/" "http://<?php print "$dynamic";?>/"
    ProxyPassReverse "/api/quotes/" "http://<?php print "$dynamic";?>/"

    ProxyPass "/" "http://<?php print "$static";?>/"
    ProxyPassReverse "/" "http://<?php print "$static";?>/"

</VirtualHost>
```

### Running the Template

To be able to use the template we first need to run it using php and save the output to the sites-available folder.
To do this we need to replace the `apache2-foreground` script that is called by the original php image.
I added the following to call php on the template before starting apache in the foreground.
```
php /var/apache2/templates/config-template.php > '/etc/apache2/sites-available/001-reverse-proxy.conf'
```

### Dockerfile
We also need to copy the `apache2-foreground` script as well as the new template to our container.
This is the state of the Dockerfile now.

```
FROM php:7.4-apache

COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates
COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
```

### Verification
We can verify the setup by starting the static and dynamic containers, preferably in a different order so they get another ip on each.
We then rebuild the image and start the container with the ip of each server on the `-e` tag.

```
docker build -t res/apache_php 
docker run -e STATIC_APP=172.17.0.2 -e DYNAMIC_APP=172.17.0.3 -p 8080:80 res/apache_rp
```

We can check that new configuration worked by visiting the website and we can also use docker exec to interact with the container via a shell and check the content of the config file.

```
sudo docker exec -it e8c02728e3e2 /bash/bin
cat /etc/apache2/sites-available/001-*
```

## Step 6: Load balancing with multiple server nodes
For this part we need to enable the load balancer in apache. To do this, we need to modify our template file to declare 2 balancer, one for the static server and another for the dynamic server. We then need to add BalancerMember for each server of this type.
We also set the distribution method as round-robin which corresponds ProxySet `lbmethod=byrequests`.
```
<Proxy "balancer://dynamic">
    <?php
        foreach ($dynamic as $host) {
        ?>
        BalancerMember http://<?php print "$host";?>
        <?php
        }
        ?>

        ProxySet lbmethod=byrequests
    </Proxy>

    <Proxy "balancer://static">
        <?php
        foreach ($static as $host) {
        ?>
        BalancerMember http://<?php print "$host";?>
        <?php
        }
        ?>

        ProxySet lbmethod=byrequests
    </Proxy>

    BalancerPersist On
```
We also need to change the ProxyPass and ProxyPassReverse to point to our 2 new balancers
```
ProxyPass "/api/quotes" "balancer://dynamic/"
ProxyPassReverse "/api/quotes" "balancer://dynamic/"

ProxyPass "/" "balancer://static/"
ProxyPassReverse "/" "balancer://static/"
```

We can also enable the balancer manager as well as the status.
```
<Location "/balancer">
    SetHandler balancer-manager
</Location>

<Location "/status">
    SetHandler server-status
</Location>

ProxyPass        /balancer    !
ProxyPass        /status      !
```

I also decided to be able to provide multiple ip for each server type by using coma separated values. The php code to extract them is as follows.
```
<?php
    $dynamic = explode(",", getenv('DYNAMIC_APP'));
    $static = explode(",", getenv('STATIC_APP'));
?>
```
### Dockerfile
We need to enable the load balancer as well as other modules to make the load balancer work properly. We so this by modifying the `RUN a2enmod` like follows.
```
RUN a2enmod proxy proxy_balancer proxy_http proxy_connect lbmethod_byrequests lbmethod_bytraffic lbmethod_bybusyness lbmethod_heartbeat headers
```

### Verification
To verfiy the config we do this exact same steps as previously.
```
docker build -t res/apache_php 
docker run -e STATIC_APP=172.17.0.2 -e DYNAMIC_APP=172.17.0.3 -p 8080:80 res/apache_rp
```

```
sudo docker exec -it e8c02728e3e2 /bash/bin
cat /etc/apache2/sites-available/001-*
```
We can also check the balancer by going to the balancer endpoint on the server.
IMG

## Step 7: Load balancing, round-robin vs sticky sessions
Since the previous step was already using round-robin, we just need to add the sticky sessions for the static load balancer.
To do this we need to add the route id as a cookie for the clients with the folowing line in the template.
```
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
```

We also add a route for each member of our balancer.
```
<Proxy "balancer://static">
    <?php
    $routeId = 1;
    foreach ($static as $host) {
    ?>
    BalancerMember http://<?php print "$host";?> route=<?php print "$routeId";?>

    <?php
    $routeId++;
    }
    ?>

    ProxySet stickysession=ROUTEID
</Proxy>
```
With this setup, each client making a new request to the static endpoint will receive a cookie containing a routeID that corresponds to the server that picked up the request. That way every new request will be directed towards that server so that it can keep a session for the user, since other servers won't have the data for that session.

## Step 8: Dynamic cluster management
### Clustering using Serf
To be able to add members to each cluster dynamically I decided to use Serf. That way each member can assign itself a role, dynamic or static, and join the cluster hosted by the reverse proxy.

We need to copy the serf binary to each container. We also need to copy the apache2-foreground from the reverse proxy and use it to run serf and not the template, we also need to make a custom script for the dynamic node to start serf and then start node.

the script running Serf on the dynamic and static servers does the following
 - Start the Serf agent in the background
 - Set the Serf role tag as static or dynamic
 - Join the serf master using the ip provided as an environment variable

```
serf agent &
sleep 2

# Set serf role as dynamic
echo "Setting role as static"
serf tags -set role=static

# Use serf to join the cluster with the dynamic tag
echo "Joining cluster"
serf join $RP_IP
```

On the reverse proxy side, we listen for member join, update, or leave events and load the members in the cluster, we then start a script that check for static members by looking at the nodes with a static role and add them to to the static members of the balancer. We do the same for the dynamic nodes and finish by reloading the apache config so that there is no downtime.

```
#!/bin/sh 
 
# Update the new env variables with the members
export DYNAMIC_APP=$(serf members -tag role=dynamic -status alive | awk '{print $2}' | cut -d: -f1 | paste -sd "," -)
export STATIC_APP=$(serf members -tag role=static -status alive | awk '{print $2}' | cut -d: -f1 | paste -sd "," -)

#Update the template
php /var/apache2/templates/config-template.php > '/etc/apache2/sites-available/001-reverse-proxy.conf'

# Reload the config
/etc/init.d/apache2 reload
```
 
### Preventing the routes from changing
Because We assign each route by their indx in the list, we might have a time when the first node stops so all the rest get their indexes reduced by one making the whole system lose the client's session.
 
To remedy this, We use the ip address of the node as the route id. This way even if a node stops the others will keep the same id. With this approach we are limited to 254 routes but could use more if we took the other part of the ip as an index too.
```
<Proxy "balancer://static">
    <?php
    foreach ($static as $host) {
        if($host==""){continue;}
    ?>
    BalancerMember http://<?php print "$host";?> route=<?php print explode(".", $host)[3];?>:80

    <?php
    }
    ?>

    ProxySet stickysession=ROUTEID
</Proxy>
```

### Verification
We need to rebuild al lthe containers first.
```
docker build -t res/apache_php
docker build -t res/express_quotes
docker build -t res/apache_rp
docker run -e STATIC_APP=172.17.0.2 -e DYNAMIC_APP=172.17.0.3 -p 8080:80 res/apache_rp
```

We then need to start the revers proxy
```
docker run -p 8080:80 res/apache_rp
```

And now we can start multiple servers of both type
```
docker run -d -e RP_IP=172.17.0.2 res/apache_php
docker run -d -e RP_IP=172.17.0.2 res/apache_php

docker run -d -e RP_IP=172.17.0.2 res/express_quotes
docker run -d -e RP_IP=172.17.0.2 res/express_quotes
```

We should start to see join events on the reverse proxy. If we look at the balancer endpoint, we can see the nodes getting added to their respective balancer.
IMG
We can then go to the root website and check that everything works correctly.

## Step 9: Management UI
IMG

For this part, I decided to build my own management UI since I like using express and websockets and thought this would be a very good fit.


###Technologies used
I decided to use NodeJS for the backend as it's easy to code and provides a lot of useful modules. The modules I decided to use were the following:
 - Dockerode: To control Docker via the Docker Socket, enabling me to start and stop containers
 - Express:   To Serve the dashboard
 - WS:        This is a Websocket server library that will let me send and receive messages without fetching querying the backend each time.

To access the Docker Socket from inside a running container we need to mount a volume on it linking the host Docker Socket to the container when we run it.
```
docker run -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock res/express_management
```

### Dashboard
The dashboard let's the user know if the reverse proxy is online and it's ip. The user can also start and stop the reverse proxy via this interface.

The user can also add and stop static or dynamic nodes from the two tables present in the middle of the page. This makes it a single click to spin or stop a node and get it added to the cluster automaticaly which isn't the case for a prebuilt docker managment UI.

The UI is very dynamic and provides information like uptime noe ip addresses and names.

### Verification
We can check that everything works by running the start UI script
```
sudo ./startUI.sh
```

We can then go to http://localhost:3000 to see the UI.

IMG

We start by launching the reverse proxy by clicking the play button on the top bar.

IMG

We ca nsee that the UI updates instantly with the new information.

We can then start by adding at least a static and a dynamic node. By going to the website http://demo.res.ch:8080.

IMG

We can see that it works correctly. We can also go to the balancer endpoint and see that our nodes have been correctly added to the balancer.

IMG

If we try starting new nodes from the management UI we can see them apear in the balancer page after a couple of seconds.

IMG
