# 🐧 Script Documentation – ICT171 Project

### 📌 Project Info
- **Student Name**: Saad Maqbool  
- **Student ID**: 35305448  
- **Domain**: [https://ictstudies.com](https://ictstudies.com)  
- **Public IP**: 3.106.240.229  

---

## 🎯 Purpose of the Script

This Bash script is included in the ICT171 project to demonstrate **basic Linux scripting skills**.  
It runs a live-updating **digital clock** in the terminal using system commands such as `date`, `sleep`, and `clear`.  
It reflects learning outcomes related to command-line automation and Bash fundamentals in a Linux environment.

---

## 💻 Script Code

```bash
#!/bin/bash
while true
do
  clear
  echo "🕒 Current Time:"
  date +"%T"
  sleep 1
done


Line-by-Line Explanation
#!/bin/bash: Tells the OS to use Bash shell to run this script

while true: Creates an infinite loop

clear: Clears the terminal window for a clean display

echo: Prints a label "🕒 Current Time:"

date +"%T": Displays the current time in HH:MM:SS format

sleep 1: Pauses for 1 second before repeating


 How to Use the Script
Follow these steps to run the script on an Ubuntu server:

Open Terminal on your EC2 instance or local Linux system

Create the script file:
nano script.sh
Paste the script code, then press Ctrl + O, Enter, and Ctrl + X to save and exit

Make the script executable:
chmod +x script.sh
Run the script:
./script.sh
Stop the script at any time with:
Ctrl + C


 Reference (APA Style)
DigitalOcean. (2023). How to Write a Bash Script on Linux. https://www.digitalocean.com/community/tutorials/how-to-write-bash-scripts-on-ubuntu
