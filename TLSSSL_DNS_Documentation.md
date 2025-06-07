# 🔒 SSL/TLS & 🌐 DNS Documentation – ICT171 Project

### 📌 Project Info
- **Student Name**: Saad Maqbool  
- **Student ID**: 35305448  
- **Domain**: [https://ictstudies.com](https://ictstudies.com)  
- **Public IP**: 3.106.240.229  

---

## 🔐 SSL/TLS Setup (HTTPS)

### 🎯 Purpose

Adding HTTPS protects users by encrypting communication between the browser and your website.  
It also builds trust and ensures your domain appears secure with a padlock symbol.

---

### ⚙️ Steps to Install SSL using Certbot

1. **Install Certbot on EC2 Ubuntu**
   ```bash
   sudo apt update
   sudo apt install certbot python3-certbot-apache -y

Stop Apache temporarily
sudo systemctl stop apache2

Run Certbot
sudo certbot --apache


Enter your domain name: ictstudies.com

Select the option to redirect all traffic to HTTPS

Restart Apache
sudo systemctl start apache2

Verify

Open your browser and go to:
https://ictstudies.com

You should see a secure padlock icon

🔁 SSL Renewal (Every 90 Days)
To renew automatically:  sudo certbot renew



🌐 DNS Configuration

🎯 Purpose
DNS (Domain Name System) connects your domain name to your EC2 server's public IP, allowing users to access your site via https://ictstudies.com.

⚙️ Steps to Link Domain to EC2
Register a domain via provider (e.g., Namecheap, GoDaddy)

 i prefer goDaddy

Go to DNS Management Panel

Create an A Record:

Host: @

Value / IP: 3.106.240.229 (your EC2 IP)

TTL: Default (usually 600 seconds)

Save changes and wait 5–15 minutes for DNS propagation

Test by visiting:
http://ictstudies.com → should redirect to → https://ictstudies.com


## 📚 References:

Electronic Frontier Foundation. (2023). *Certbot documentation*. https://certbot.eff.org/instructions

Let’s Encrypt. (2024). *Getting started with HTTPS*. https://letsencrypt.org/getting-started/

GoDaddy. (2024). *Add an A record to your DNS zone file*. GoDaddy Help Center. https://au.godaddy.com/help/add-an-a-record-19238

Ubuntu. (2023). *Apache HTTPS configuration*. Ubuntu Documentation. https://ubuntu.com/server/docs/security-https

