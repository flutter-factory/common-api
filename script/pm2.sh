# start app
pm2 start dist/src/main.js --name flutter-api --log ../logs/flutter-api.log

# reload
pm2 reload app_name

# stop
pm2 stop app_name

# delete
pm2 delete app_name