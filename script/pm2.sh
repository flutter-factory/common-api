# code deploy logs 
/var/log/aws/codedeploy-agent/

# start app
pm2 start /home/ubuntu/project/flutter-api/dist/src/main.js --name flutter-api --log /home/ubuntu/project/logs/flutter-api.log

# reload
pm2 reload app_name

# stop
pm2 stop app_name

# delete
pm2 delete app_name

# 모니터링
pm2 monit
