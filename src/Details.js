// react portfolio template by pavamg
// Enter all your detials in this file
// Logo images
import logogradient from "./assets/ryfrialogo.svg";
import logo from "./assets/ryfrialogo.svg";
// Profile Image
import profile from "./assets/Ryriaaa.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import ruijie from "./assets/techstack/ruijie.png";
import python from "./assets/techstack/python.png";
import js from "./assets/techstack/js.png";
import huawei from "./assets/techstack/huawei.png";
import fortinet from "./assets/techstack/fortiget.png";
import juniper from "./assets/techstack/juniper.png";
import cisco from "./assets/techstack/cisco.png";
import mikrotik from "./assets/techstack/mikrotik.png";
import php from "./assets/techstack/php.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import winbox from "./assets/techstack/winbox.png";
import putty from "./assets/techstack/putty.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "ARISTOTELES",
  tagline: "I build things for Web, Network Engineer & Machine Learning",
  img: profile,
  about: `Highly motivated and proactive IT professional with extensive experience in the Internet Service Provider (ISP) industry and a strong background in networking, machine learning, and web development. Holds a Bachelor's degree in Computer Science and Information Technology, along with certifications in Juniper, Cisco, and Mikrotik Routing & Switching, as well as Security Basics.

Proficient in network systems administration, cloud computing, and cybersecurity, with additional expertise in developing web applications and implementing machine learning solutions to enhance system efficiency and automation. Adept at managing and optimizing complex IT infrastructures while ensuring high availability, scalability, and security.

Currently seeking a role in network administration, system administration, or IT infrastructure within a reputable organization that values innovation and continuous professional growth. Committed to delivering high-quality solutions while aligning with company objectives and maintaining a high level of professionalism.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/aris-toteles",
  github: "https://github.com/Ryfria",
  twitter: "https://twitter.com/SouoRyria",
  instagram: "https://www.instagram.com/aristls22_/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "DevOps Engineer",
    Company: `Ryfria Project`,
    Location: "Bekasi Utara, Jawa Barat",
    Type: "Full Time",
    Duration: "Nov 2024 - Present",
  },
  {
    Position: "IP Core",
    Company: `PT. Victory Network Indonesia`,
    Location: "Kebon Jeruk, Jakarta Barat",
    Type: "Full Time",
    Duration: "April 2022 - Present",
  },
  {
    Position: "Network Operation Centre",
    Company: `PT. Lintas Jaringan Nusantara`,
    Location: "Bekasi Utara, Jawa Barat",
    Type: "Full Time",
    Duration: "Aug 2021 - March 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Backend Development",
    Company: "University Bhayangkara Jaya Raya, YouTube, Google, Medium",
    Location: "Offline",
    Type: "Full Time",
    Duration: "Sept 2022 - Present",
  },
  {
    Position: "CCNP - ENT",
    Company: `Cisco`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Sept 2024 - Present",
  },
  {
    Position: "JNCIS - SP",
    Company: `Juniper Networks`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Sept 2024 - Present",
  },
  {
    Position: "MTCINE",
    Company: `Mikrotik`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Aug 2021 - Aug 2023",
  },
  {
    Position: "HCIP - Routing & Switching",
    Company: `Huawei`,
    Location: "Online",
    Type: "Full Time",
    Duration: "june 2024 - Present",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  juniper: juniper,
  huawei: huawei,
  cisco: cisco,
  mikrotik: mikrotik,
  ruijie: ruijie,
  python: python,
  php: php,
  fortinet: fortinet,
  bootstrap: bootstrap,
  vscode: vscode,
  winbox: winbox,
  npm: npm,
  git: git,
  github: github,
  putty: putty,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Ryfria Project - INTELLIGENT AGENT FOR IMAGE CLASSIFICATION SYSTEM FOR BARCODE AND QR CODE BASED ON CNN",
    image: projectImage1,
    description: `Pada era digital saat ini, teknologi kecerdasan buatan (Artificial Intelligence) memainkan peran penting dalam berbagai aspek kehidupan, termasuk pada pengolahan data visual untuk mempermudah tugas-tugas manusia. Salah satu bentuk implementasi kecerdasan buatan yang semakin populer adalah agen cerdas berbasis jaringan saraf tiruan (Neural Networks), yang dirancang untuk memproses informasi secara otomatis dan efisien.
Proyek ini bertujuan untuk merancang dan mengimplementasikan agen cerdas untuk klasifikasi barcode dan kode QR menggunakan Convolutional Neural Network (CNN). Sistem ini dirancang untuk mengenali jenis barcode atau QR code secara visual dari citra yang diunggah oleh pengguna atau ditangkap langsung melalui kamera perangkat.`,
    techstack: "HTML/CSS, Python",
  },
  {
    title: "Ryfria Project - INTELLIGENT AGENT FOR QUALITY CONTROL (QC) MONITORING BASED ON AI USING A RULE-BASED METHOD",
    image: projectImage2,
    description: `Dalam industri modern, kualitas produk adalah penentu utama keberhasilan dan daya saing perusahaan. Di sektor manufaktur, Quality Control (QC) merupakan proses penting yang memastikan produk memenuhi standar serta aman bagi konsumen. Dalam produksi massal, setiap penyimpangan pada tahap produksi dapat berdampak luas terhadap kualitas produk, menimbulkan kerugian finansial, merusak reputasi perusahaan, dan membahayakan konsumen. Oleh karena itu, sistem pemantauan kualitas secara real-time menjadi krusial untuk menjaga standar tinggi yang diinginkan.
Seiring dengan meningkatnya kompleksitas produksi dan tuntutan konsumen, teknologi kecerdasan buatan (AI) muncul sebagai solusi inovatif dalam pengawasan kualitas.`,
    techstack: "HTML/CSS, Python",
  },
  {
    title: "The Herta Project - AI BASED INTELLIGENT AGENT FOR NETWORK MONITORING USING MACHINE LEARNING & ANOMALY DETECTION",
    image: projectImage3,
    description: `Dalam era digitalisasi yang semakin berkembang, jaringan komputer telah menjadi komponen yang sangat penting bagi perusahaan dan penyedia layanan internet. Infrastruktur jaringan yang andal dan aman menjadi kebutuhan mendesak untuk mendukung kegiatan bisnis sehari-hari. Pemantauan jaringan secara real-time tidak hanya penting untuk memastikan ketersediaan layanan tetapi juga untuk menghindari terjadinya downtime, kelebihan beban (overload), dan serangan siber yang dapat mengakibatkan kerugian finansial dan reputasi perusahaan.
Meskipun ada berbagai sistem pemantauan jaringan yang tersedia, banyak dari mereka masih memerlukan pengawasan manual atau memiliki keterbatasan dalam mendeteksi ancaman yang kompleks.`,
    techstack: "HTML/CSS, Python",
  },
  {
    title: "WEB-BASED MOBILE CREDIT SALES MANAGEMENT",
    image: projectImage4,
    description: `Dalam era globalisasi dan transformasi digital, kebutuhan masyarakat akan teknologi telekomunikasi semakin meningkat. Salah satu kebutuhan mendasar dalam dunia telekomunikasi adalah pulsa. Pulsa tidak hanya menjadi sarana untuk melakukan panggilan atau mengirim pesan, tetapi juga sebagai metode pembayaran digital dan akses layanan data internet.
Pengelolaan pulsa secara manual sering kali menghadapi berbagai kendala, seperti risiko human error, keterlambatan transaksi, dan kurangnya transparansi dalam pengelolaan stok serta penjualan. Oleh karena itu, pengembangan Aplikasi Penjualan Pulsa yang berbasis teknologi menjadi solusi strategis untuk meningkatkan efisiensi dan kepuasan pelanggan.
Makalah ini akan membahas pengembangan aplikasi penjualan pulsa yang memanfaatkan teknologi berbasis web dengan antarmuka yang user-friendly. Aplikasi ini dirancang untuk membantu pengguna dalam melakukan transaksi secara cepat, mudah, dan aman. Dengan fitur-fitur unggulan, aplikasi ini diharapkan mampu memenuhi kebutuhan pasar dan memberikan pengalaman pengguna yang optimal.`,
    techstack: "HTML/CSS, PHP, MySQL",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aristoteles2211@gmail.com",
  phone: "+6281916399017",
};
