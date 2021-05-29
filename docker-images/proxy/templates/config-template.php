<?php
    $dynamic = explode(",", getenv('DYNAMIC_APP'));
    $static = explode(",", getenv('STATIC_APP'));
?>
<VirtualHost *:80>

    ServerName demo.res.ch

    #ErrorLog ${APACHE_LOG_DIR}/error.log
    #CustomLog ${APACHE_LOG_DIR}/access.log combined

    Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED

    <Proxy "balancer://dynamic">
    <?php
        foreach ($dynamic as $host) {
            if($host==""){continue;}
        ?>
        BalancerMember http://<?php print "$host";?>:3000

        <?php
        }
        ?>
        
        ProxySet lbmethod=byrequests
    </Proxy>

    <Proxy "balancer://static">
        <?php
        foreach ($static as $host) {
            if($host==""){continue;}
        ?>
        BalancerMember http://<?php print "$host";?>:80 route=<?php print explode(".", $host)[3];?>

        <?php
        }
        ?>

        ProxySet stickysession=ROUTEID
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
