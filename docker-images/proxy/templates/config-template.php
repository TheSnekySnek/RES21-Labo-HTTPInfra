<?php
    $dynamic = explode(",", getenv('DYNAMIC_APP'));
    $static = explode(",", getenv('STATIC_APP'));
?>
<VirtualHost *:80>

    ServerName demo.res.ch

    #ErrorLog ${APACHE_LOG_DIR}/error.log
    #CustomLog ${APACHE_LOG_DIR}/access.log combined

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

    <Location "/balancer">
        SetHandler balancer-manager
    </Location>
    
    <Location "/status">
        SetHandler server-status
    </Location>

    ProxyPass        /balancer    !
    ProxyPass        /status      !
    
    ProxyPass "/api/quotes" "balancer://dynamic/"
    ProxyPassReverse "/api/quotes" "balancer://dynamic/"

    ProxyPass "/" "balancer://static/"
    ProxyPassReverse "/" "balancer://static/"

</VirtualHost>
