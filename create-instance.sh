# ubuntu 20

# 기본 업데이트
sudo apt-get update
sudo apt-get grade -y

# mysql 설치
sudo apt-get install mysql-server -y
# 포트 오픈
sudo ufw allow mysql
# 실행
sudo systemctl start mysql
# 자동 재시작
sudo systemctl enable mysql
# 접속
sudo /usr/bin/mysql -u root -p


# jdk
apt-cache search openjdk
sudo apt-get install openjdk-17-jdk
 
 
# jenkins
sudo service jenkins restart
sudo systemctl status jenkins
sudo cat /var/lib/jenkins/secrets/initialAdminPassword


# node
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source /home/ubuntu/.bashrc
nvm install --lts
nvm use --lts

# git
sudo apt install git -y

# pm2
npm install pm2 -g