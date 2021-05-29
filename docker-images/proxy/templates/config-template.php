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
