#!/bin/bash

source local.settings.sh

echo "Exporting Database"

echo " - Dumping Database"
mysqldump -h localhost -u$MYSQL_USER -p$MYSQL_PASSWORD $DATABASE > ../db/db.sql
echo " - Compressing file"
gzip -9 -f ../db/db.sql
