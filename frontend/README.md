<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.2-06B6D4?logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Axios-HTTP-blueviolet?logo=axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-Auth-success?logo=jsonwebtokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Build-NPM-red?logo=npm&logoColor=white"/>
</p>

<h1 align="center">🎨 JobboardX Frontend</h1>
<p align="center"><i>
A modern, responsive React + TailwindCSS web client for the JobboardX microservice platform.
</i></p>



Designed to deliver a seamless experience for job seekers and recruiters.  It connects with the JobboardX backend microservices to enable authentication, job postings, and real-time data visualization.

---

## 🚀 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Framework** | React.js (CRA) |
| **Styling** | TailwindCSS, PostCSS |
| **State Management** | React Hooks |
| **API Layer** | Axios |
| **Authentication** | JWT (JSON Web Token) |
| **Build Tooling** | NPM / Node.js |
| **Environment** | `.env` configuration for API endpoints |

---

## 🧱 Folder Structure
frontend/<br>
├── public/<br>
│ ├── index.html<br>
│ └── manifest.json<br>
├── src/<br>
│ ├── api/<br>
│ │ └── client.js # Axios base configuration<br>
│ ├── assets/<br>
│ │ └── bg.png<br>
│ ├── pages/<br>
│ │ └── LoginPage.jsx # User login interface<br>
│ ├── App.js<br>
│ ├── index.js<br>
│ ├── App.css<br>
│ └── index.css<br>
├── package.json<br>
├── tailwind.config.js<br>
├── postcss.config.js<br>
└── README.md<br>

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js ≥ 18.x  
- NPM ≥ 9.x  
- Backend server (Auth + Job services) running locally or on cloud  

### 2️⃣ Installation
```bash
cd frontend
npm install
```
### 3️⃣ Run the App
```bash
npm start
```
The app runs at 👉 http://localhost:3000

### 🔐 Environment Variables
Create a .env file in the frontend folder:
```bash
REACT_APP_API_BASE_URL=http://localhost:8080/api/v1
```
(Update the base URL to match your backend gateway)

### 🔄Integration Roadmap
| Feature                          | Status         |
| -------------------------------- | -------------- |
| Basic UI Setup                   | ✅ Done         |
| Auth Service Integration (Login) | ⚙️ In Progress |
| Job Listings & Filters           | 🔜 Planned     |
| Token-based Authorization        | 🔜 Planned     |
| Deployment (Vercel / Netlify)    | 🔜 Planned     |

### 🪄 UI Preview
<img width="1919" height="862" alt="Screenshot 2025-10-28 144118" src="https://github.com/user-attachments/assets/94f99c95-0e2c-4d88-8274-49d2781d55dc" />


