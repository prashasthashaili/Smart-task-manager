# Smart Task Manager

A cloud-native task management application built with **React.js** and **AWS Serverless Services**. The application allows users to create, update, and manage tasks through a responsive web interface while leveraging AWS services for scalable backend processing.

---

## Features

- Create, update, and delete tasks
- Responsive and user-friendly interface
- Serverless backend architecture
- REST API integration
- Cloud-based data storage
- Fast and scalable deployment

---

## Tech Stack

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

## System Architecture

```
+-------------+
|  React App  |
+-------------+
       |
       | HTTP Requests
       ▼
+------------------+
|  API Gateway     |
+------------------+
       |
       ▼
+------------------+
|   AWS Lambda     |
+------------------+
       |
       ▼
+------------------+
| Amazon DynamoDB  |
+------------------+
```

---

## Project Structure

```
Smart-task-manager/
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

## Installation

Clone the repository

```bash
git clone https://github.com/prashasthashaili/Smart-task-manager.git
```

Navigate to the project directory

```bash
cd Smart-task-manager
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## How It Works

1. Users interact with the React frontend.
2. Requests are sent through Amazon API Gateway.
3. AWS Lambda processes business logic.
4. Task data is stored and retrieved from Amazon DynamoDB.
5. The frontend displays updated task information in real time.

---

## Future Enhancements

- User authentication with Amazon Cognito
- Task categories and labels
- Due dates and reminders
- File attachments
- Task search and filtering
- Dark mode
- Email notifications
- Unit and integration testing

---

## Skills Demonstrated

- React.js Development
- Serverless Application Development
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- REST API Integration
- Cloud Deployment
- Git & GitHub

---

## Author

**Prashastha Shaili**
