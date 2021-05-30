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

### Dockerfile

