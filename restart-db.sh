#!/bin/bash

echo "RESTARTING THE DATABASE"
source drop-db.sh
source create-db.sh
source import-empty-db.sh