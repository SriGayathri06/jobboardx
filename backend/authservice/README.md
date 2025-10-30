<p align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.2.5-brightgreen?logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/REST%20API-Design-blue?logo=swagger&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange?logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-API%20Testing-FF6C37?logo=postman&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-NoSQL%20Database-green?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/AI%20Powered-Developer%20Productivity-purple?logo=openai&logoColor=white" />
</p>

# ⚙️ JobBoardX – Authentication Microservice (`authservice`)

### 🚀 Overview
This is the **Authentication and Authorization microservice** of the **JobBoardX** ecosystem, a modern, scalable **Spring Boot** backend built for secure user management using **JWT tokens**, **BCrypt password hashing**, and **MongoDB persistence**.

It is fully production-ready with structured API design, error handling, and CORS-enabled integration with the React frontend.

---

### 🧩 Key Features
- **JWT-based Authentication** — stateless, secure login/logout.
- **User Registration & Login APIs** using Spring Boot REST controllers.
- **BCrypt password encryption** for strong credential safety.
- **MongoDB repository layer** with Spring Data abstraction.
- **Spring Security configuration** with fine-grained endpoint protection.
- **Global Exception Handling** for clean error responses.
- **CORS Configuration** to allow React frontend access from `localhost:3000`.
- **Postman-tested** and **Swagger-ready** endpoints for easy validation.

---

### 🧠 AI-Driven Developer Productivity
Leveraged **AI coding assistants** like **ChatGPT**, **Cursor**, and **GitHub Copilot** to:
- Accelerate **JWT filter design** and **Spring Security debugging** by 60%.
- Auto-generate **Postman test cases** and API contract documentation.
- Receive intelligent **error diagnosis and refactoring suggestions** for 401/403 flows.
- Maintain clean, modular codebase across microservices through AI-assisted reviews.

This allowed the project to move from prototype → production-grade in under **48 hours** with full CI/CD readiness.

---

### 🏗️ Architecture Diagram (Conceptual)
[ React Frontend ]
→ (CORS)
[ Spring Boot AuthService ]
→
[ JWT Token + MongoDB Persistence ]
---

### 📂 Project Structure
authservice/<br>
├── src/<br>
│ ├── main/java/com/jobboardx/authservice/<br>
│ │ ├── controller/ → AuthController.java<br>
│ │ ├── service/ → AuthService.java<br>
│ │ ├── security/ → JwtUtil.java, JwtAuthenticationFilter.java<br>
│ │ ├── config/ → SecurityConfig.java<br>
│ │ ├── repository/ → UserRepository.java<br>
│ │ ├── model/ → User.java<br>
│ │ └── AuthServiceApplication.java<br>
│ └── resources/<br>
│ └── application.properties<br>
└── pom.xml


---

### 📡 REST Endpoints Summary

| Endpoint | Method | Description | Auth Required |
|-----------|--------|--------------|---------------|
| `/api/auth/register` | `POST` | Register new user | ❌ |
| `/api/auth/login` | `POST` | Login and generate JWT | ❌ |
| `/api/protected/hello` | `GET` | Protected test route | ✅ |

---

### ⚡ Quick Start

#### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/jobboardX.git
cd jobboardX/backend/authservice
```
#### 2️⃣ Build & Run
```bash
mvn clean package
mvn spring-boot:run
```
####3️⃣ Test APIs via Postman
Base URL: http://localhost:9090/api/auth

| Action   | Endpoint    | Example Body                                                                  |
| -------- | ----------- | ----------------------------------------------------------------------------- |
| Register | `/register` | `{ "email": "sai@example.com", "username": "sai", "password": "MyPass@123" }` |
| Login    | `/login`    | `{ "email": "sai@example.com", "password": "MyPass@123" }`                    |

<img width="1739" height="658" alt="Screenshot 2025-10-25 160707" src="https://github.com/user-attachments/assets/895f8f8f-f7b0-416d-b29d-d446a63b9033" />

#### 🔎Login request when password is right
<img width="1740" height="729" alt="Screenshot 2025-10-25 161215" src="https://github.com/user-attachments/assets/6ade2bd4-cc35-4aff-9402-ca2281a90f45" />

#### 🔎Database
<img width="1628" height="769" alt="Screenshot 2025-10-25 161342" src="https://github.com/user-attachments/assets/ccd8c659-fa8e-47ea-9d26-6eb7f75733db" />

#### 🔎Login request when password is wrong
<img width="1764" height="764" alt="Screenshot 2025-10-25 162941" src="https://github.com/user-attachments/assets/171343f7-b487-47eb-8085-be1d7eb73ee1" />

#### 🔎JWT Filter testing
Before adding Autherization
<img width="1754" height="795" alt="Screenshot 2025-10-27 151546" src="https://github.com/user-attachments/assets/21ea7ac7-0dd7-4051-9be6-f1bd5611e6de" />

#### 🔎After adding Autherization
<img width="1756" height="646" alt="Screenshot 2025-10-27 152614" src="https://github.com/user-attachments/assets/00937004-c16f-4a52-b506-e535b1ca0c8f" />

---

### 🧰 Tech Stack
| Layer             | Technology               |
| ----------------- | ------------------------ |
| **Language**      | Java 17                  |
| **Framework**     | Spring Boot 3.2+         |
| **Security**      | Spring Security + JWT    |
| **Database**      | MongoDB                  |
| **Build Tool**    | Maven                    |
| **Testing**       | Postman / Swagger        |
| **AI Tools Used** | ChatGPT, Cursor, Copilot |

### 💪 Production-Level Enhancements
- Configurable secrets & ports via .env or application.properties.
- Scalable microservice-ready structure.
- Centralized error logging and CORS handling.
- JWT verification filter implemented for all protected routes.
- Secure password handling with BCrypt (10 rounds salt).


