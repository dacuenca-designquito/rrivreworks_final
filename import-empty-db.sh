#!/bin/bash

source local.settings.sh

echo "Importing empty database"

echo " - Uncompressing file"
gunzip -c ../db/db.sql.gz > ../db/db.sql
echo " - Restoring database"
mysql -u$MYSQL_USER -p$MYSQL_PASSWORD -D $DATABASE < ../db/db.sql
echo " - Deleting uncompressed file"
rm ../db/db.sql
