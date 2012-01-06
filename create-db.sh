#!/bin/bash

source local.settings.sh

echo "Creating a database"
mysql -u$MYSQL_ROOT -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE $DATABASE;" 
mysql -u$MYSQL_ROOT -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL ON $DATABASE.* to '$MYSQL_USER'@'locahost' IDENTIFIED BY '$MYSQL_PASSWORD';"
