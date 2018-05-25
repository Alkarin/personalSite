# personalSite


#### Local Installation

- Clone to directory: ```/var/www/html```

- Enter apache directory: ```cd /etc/apache2/sites-available```

##### Create new conf file: 

Copy and rename default conf file

 ```cp 000-default.conf personal-site.conf```
 
 
Add or edit the following lines to match:


            ServerName personal-site.local
            ServerAlias www.personal-site.local
            DocumentRoot /var/www/html/personalSite/public

        
        
Enable/add site to apache

```sudo a2ensite personal-site.conf```
       
##### Add site to hosts     
1. ```sudo vim /etc/hosts```

2. Give local IP address

```127.0.0.1       personal-site.local```

##### Navigate to site in browser: http://personal-site.local/