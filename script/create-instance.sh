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


# code deploy
# https://github.com/aws/aws-codedeploy-agent/issues/301
sudo apt-get update
sudo apt-get install ruby-full ruby-webrick wget -y
cd /tmp
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/releases/codedeploy-agent_1.3.2-1902_all.deb
mkdir codedeploy-agent_1.3.2-1902_ubuntu22
dpkg-deb -R codedeploy-agent_1.3.2-1902_all.deb codedeploy-agent_1.3.2-1902_ubuntu22
sed 's/Depends:.*/Depends:ruby3.0/' -i ./codedeploy-agent_1.3.2-1902_ubuntu22/DEBIAN/control
dpkg-deb -b codedeploy-agent_1.3.2-1902_ubuntu22/
sudo dpkg -i codedeploy-agent_1.3.2-1902_ubuntu22.deb
systemctl list-units --type=service | grep codedeploy
sudo service codedeploy-agent status