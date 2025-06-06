## 🌐 Portfolio Website

Visit my website: [https://ictstudies.com](https://ictstudies.com)  
https://ictstudies.com/

---

**Student Name:** Saad Maqbool  
**Student ID:** 35305448  
**Unit:** ICT171 – Introduction to Web and Cloud Computing  

---

## 📁 Project Description

This project hosts my personal portfolio website on an AWS EC2 instance using Apache.  
The website includes HTML, CSS, JavaScript, and a simple Linux Bash script to demonstrate scripting functionality.  
The full source code is uploaded in this repository.

---

## ⚙️ How to Rebuild the Server

Follow these steps to rebuild the server from scratch:

1. Launch an Ubuntu EC2 instance on AWS
2. Update package lists and install Apache:
   ```bash
   sudo apt update
   sudo apt install apache2
   ```
3. Open required ports in the AWS security group:
   - TCP 22 (SSH)
   - TCP 80 (HTTP)
   - TCP 443 (HTTPS)

4. Clone this GitHub repository:
   ```bash
   git clone https://github.com/maqboolsaad/Project-ict-171.git
   ```

5. Copy the website files to the Apache root directory:
   ```bash
   sudo cp -r Project-ict-171/* /var/www/html/
   ```

6. Set file permissions (optional but recommended):
   ```bash
   sudo chmod -R 755 /var/www/html
   ```

7. Install Certbot and enable SSL (HTTPS):
   ```bash
   sudo apt install certbot python3-certbot-apache
   sudo certbot --apache
   ```

8. Restart Apache if needed:
   ```bash
   sudo systemctl restart apache2
   ```

9. Visit your live website:  
   [https://ictstudies.com](https://ictstudies.com)

---

## 🧪 Testing and Troubleshooting

- Visit your site using a web browser: [https://ictstudies.com](https://ictstudies.com)
- Check Apache status:
  ```bash
  sudo systemctl status apache2
  ```

---

## 📝 Linux Bash Script Example

Below is a simple Bash script included in the website that displays a live clock:

```bash
#!/bin/bash
while true; do
   clear
   date
   sleep 1
done
```

---

## 📜 License

This project is released under the MIT License.
---

## 📚 Sources of Code & Script

Parts of the HTML, CSS, JavaScript, and Linux Bash scripting were generated and refined using ChatGPT by OpenAI – [https://chat.openai.com/](https://chat.openai.com/)

Referenced examples and documentation from Mozilla Developer Network (MDN Web Docs) – [https://developer.mozilla.org/](https://developer.mozilla.org/)

Bash scripting syntax and Linux command usage were verified using Ubuntu Manpages – [https://manpages.ubuntu.com/](https://manpages.ubuntu.com/)

Hosting and web server setup were guided by Apache HTTP Server Documentation – [https://httpd.apache.org/docs/](https://httpd.apache.org/docs/)

SSL/TLS configuration used instructions from Let’s Encrypt / Certbot – [https://certbot.eff.org/](https://certbot.eff.org/)
