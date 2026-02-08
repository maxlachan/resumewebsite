$ ssh -i /c/Users/Steve/Music/anuanand.pem ubuntu@
sudo apt update
sudo apt install nodejs
sudo apt install npm
git clone https://github.com/maxlachan/resumewebsite-nodejs-app.git

ls
cd resumewebsite-nodejs-app/

npm install
npm run start

--------------------
edit security group

add inbound rules

tcp 3000    0.0.0.0/0   anywhere ipv4

to check 

git --version
node -v
