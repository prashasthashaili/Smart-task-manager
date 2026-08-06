# 🚀 Smart Task Manager

A cloud-based task management application built using **React.js** and **AWS Serverless Services**. The application enables users to efficiently organize, prioritize, and manage tasks through a responsive interface backed by a scalable serverless architecture.

## 🌐 Live Demo

**Live Application:** https://smart-task-manager-delta-pink.vercel.app

---

## 📌 Features

- ✅ Create new tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 🎯 Assign task priority (High, Medium, Low)
- 📅 Set task deadlines
- 📊 Track task status (Added, Started, Completed)
- 🔄 Drag-and-drop task management
- 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6)
- HTML5
- CSS3

### Backend
- AWS Lambda
- Amazon API Gateway

### Database
- Amazon DynamoDB

### Deployment
- Vercel

### Tools
- Git
- GitHub
- Postman

---

## 🏗️ Architecture

```
                   React.js
                       │
                       ▼
               Amazon API Gateway
                       │
                       ▼
                 AWS Lambda
                       │
                       ▼
              Amazon DynamoDB
```

---

## 📂 Project Structure

```
Smart-task-manager
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/prashasthashaili/Smart-task-manager.git
```

Move into the project directory

```bash
cd Smart-task-manager
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm start
```

Open

```
http://localhost:3000
```

---

## 📖 How It Works

1. Users create and manage tasks through the React interface.
2. Requests are sent through Amazon API Gateway.
3. AWS Lambda processes the business logic.
4. Task information is stored in Amazon DynamoDB.
5. Updated task information is displayed instantly.

---

## 🎯 Skills Demonstrated

- React.js Development
- JavaScript (ES6)
- REST API Integration
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Serverless Computing
- Cloud Deployment
- Git & GitHub

---

## 🚀 Future Enhancements

- User Authentication
- Task Categories
- Search and Filters
- Email Notifications
- Dark Mode
- Recurring Tasks
- Unit Testing
- CI/CD with GitHub Actions

---

## 👩‍💻 Author

**Prashastha Shaili**

---
## 📄 License

This project is developed for educational and portfolio purposes.
