-- https://velog.io/@seungsang00/Ubuntu-우분투에-MySQL-설치하기

SELECT User, Host, authentication_string FROM mysql.user;
CREATE DATABASE TESTDB;
SHOW DATABASES;
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'mysql비번';
FLUSH PRIVILEGES;
SELECT User, Host, authentication_string FROM mysql.user;

CREATE USER 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON 데이터베이스이름.* TO 'testuser'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
SHOW GRANTS FOR'testuser'@'%';
SELECT User, Host, authentication_string FROM mysql.user;

-- 버전 확인
show variables like "%version%";

-- 비밀번호 변경
alter user 'root'@'localhost' identified with mysql_native_password by 'new password';