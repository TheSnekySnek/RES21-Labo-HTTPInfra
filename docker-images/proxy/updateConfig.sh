#!/bin/sh

# Update the new env variables with the members
export DYNAMIC_APP=$(serf members -tag role=dynamic -status alive | awk '{print $2}' | cut -d: -f1 | paste -sd "," -)
export STATIC_APP=$(serf members -tag role=static -status alive | awk '{print $2}' | cut -d: -f1 | paste -sd "," -)

#Update the template
php /var/apache2/templates/config-template.php > '/etc/apache2/sites-available/001-reverse-proxy.conf'

# Reload the config
/etc/init.d/apache2 reload
