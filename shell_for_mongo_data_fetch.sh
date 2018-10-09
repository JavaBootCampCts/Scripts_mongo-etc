while read -r input;
do
/apps/mongodb/bin/mongo "mongodb://<host>:<port>,<host>:<port>,<host>:<port>/dbname?replicaSet=<replicasetname>" --ssl --authenticationDatabase <db> --username <username> --password <password> --quiet --eval "var uid='$input'" identity.js |grep -v "NETWORK">>backup.txt 
done<input.txt
