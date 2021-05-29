FROM php:7.4-apache

COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates
COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_balancer proxy_http proxy_connect lbmethod_byrequests lbmethod_bytraffic lbmethod_bybusyness lbmethod_heartbeat headers
RUN a2ensite 000-* 001-*
