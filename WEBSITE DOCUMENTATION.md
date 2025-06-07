# 📘 ICT171 Project Documentation – Personal Portfolio Website

### 📌 Project Info
- **Student Name**: Saad Maqbool  
- **Student ID**: 35305448  
- **Domain**: [https://ictstudies.com](https://ictstudies.com)  
- **Public IP**: 3.106.240.229  

---

## 🌐 **Project Overview**

This project is a personal portfolio website hosted on an Amazon EC2 instance (Ubuntu server).  
It includes a digital clock, Linux Bash script, and secure HTTPS connection. A custom domain was configured to access the site.

---

## ⚙️ Technologies Used


- HTML, CSS, JavaScript – Website design and clock  
- Apache – Web server  
- Bash – Linux scripting  
- Certbot – SSL certificate installer  
- AWS EC2 – Cloud server hosting  
- DNS – Links domain to EC2  
- GitHub – Code version control

---

## 📁 Folder Structure

/var/www/html/
├── index.html
├── style.css
├── clock.js
├── script.sh
├── assets/
├── screenshots/





## 🔁 **STEP BY STEP PROCESS**


---

### ✅ 1. Create an AWS Account**
- Go to [https://aws.amazon.com](https://aws.amazon.com) and create a free account.
- Verify with email, phone, and payment details.

---

### ✅ 2. **Launch an EC2 Instance**
- Open the AWS Management Console → EC2.
- Click **"Launch Instance"**.
- Choose **Ubuntu 22.04** (or latest).
- Select **t2.micro (free tier)**.
- Allow **HTTP (80)** and **HTTPS (443)** in security group.
- Launch and download the **.pem key pair**.

---

### ✅ 3. **Connect to the EC2 Server**
- Use terminal or Git Bash:
  ```bash
  ssh -i "your-key.pem" ubuntu@your-ec2-ip

## 🚀 **How It Works**

1. HTML is used for structure and CSS for design.  
2. JavaScript (`clock.js`) shows a live digital clock.  
3. Bash script (`script.sh`) displays current time in terminal.  
4. Apache serves the website using EC2’s IP address.  
5. Certbot is used to install a free SSL certificate.  
6. DNS settings connect the domain `ictstudies.com` to the EC2 instance.

---

🔐 **SSL/TLS Setup
**
Steps followed:

1-Installed Certbot on the EC2 instance.

2-Stopped Apache temporarily using sudo systemctl stop apache2.

3-Ran sudo certbot --apache to install the certificate.

4-Restarted Apache and verified HTTPS.

5-The site now loads securely with a padlock symbol at:
https://ictstudies.com


🌍 **Domain (DNS) Setup**
The domain name ictstudies.com was purchased and connected to the EC2 instance using these steps:

Logged into domain provider's dashboard.

Set an A Record pointing to IP: 3.106.240.229.

Waited for DNS to propagate.

Accessed website via browser using the domain name.


💡 **Future Improvements
**
Add project gallery and images

Include downloadable resume

Add form submission with email

Improve theme and design


## 🕒 **Linux Script
**

```bash
#!/bin/bash
while true
do
  clear
  echo "🕒 Current Time:"
  date +"%T"
  sleep 1
done

Purpose: This Bash script shows the current system time every second in the terminal.
It runs in an infinite loop and clears the screen on each update.














📚 **References:
**
Apache Software Foundation. (2023). Apache HTTP Server Documentation. https://httpd.apache.org/docs/

**DigitalOcean**. (2023). How to Use Bash Scripts on Linux. https://www.digitalocean.com/community/tutorials/

**GeeksforGeeks**. (2023). Digital Clock using JavaScript. https://www.geeksforgeeks.org/how-to-create-a-digital-clock-using-javascript/

Let’s Encrypt. (2024). Getting Started. https://letsencrypt.org/getting-started/

Namecheap. (2024). How to Point a Domain to a Server. https://www.namecheap.com/support/knowledgebase/







