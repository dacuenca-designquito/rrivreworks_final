#!/bin/bash

source local.settings.sh

echo "Deleting the database (DROP DB)"
mysql -u$MYSQL_ROOT -p$MYSQL_ROOT_PASSWORD -e "DROP DATABASE $DATABASE;"
