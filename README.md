# 🏃‍♂️ Men's 100m World Ranking - Full Stack Project

A modern, responsive web application that displays the latest **Men's 100m race world rankings**, powered by a custom-built API using **Node.js**, **Express**, and **MongoDB**. This project showcases both frontend and backend development, delivering a complete, real-world solution.

---

## 🚀 Live Links

- 🔗 **Frontend Live:** [https://rankrush2024-25.netlify.app/](https://rankrush2024-25.netlify.app/)   
- 🔗 **API Live:** [https://olympic.up.railway.app/mens](https://olympic.up.railway.app/mens) *(built and deployed by me on Railway)*  

---

## 🛠️ Tech Stack

### Frontend:
- **React**  
- **Styled Components**  
- **Axios** (for API calls)  
- **Vite**  

### Backend (API):
- **Node.js**  
- **Express.js**  
- **MongoDB Atlas** (Cloud Database)  
- **Mongoose**  
- **Railway** for deployment  
- **CORS** configured for safe API usage  

---


## 🌐 About the API

The backend API for this project was built entirely by me using **Node.js**, **Express**, and **MongoDB Atlas**. The API follows REST principles and provides structured data for the leaderboard.

### 🔧 Key API Details:
- 📍 Hosted on **Railway**  
- 🔗 Accessible at: [https://olympic.up.railway.app/mens](https://olympic.up.railway.app/mens)  
- 💾 Data stored in MongoDB Atlas  
- ✅ Supports Create, Read, Update, Delete (CRUD) operations *(admin side)*  
- 🔒 CORS implemented for frontend-backend communication  

This separation of concerns between **frontend (React)** and **backend (Express)** demonstrates a real-world **full stack development workflow**.

---

## 📁 Folder Structure (Frontend)

```bash
├── public/ # Static files
├── src/
│ ├── API/ # API call functions
│ ├── components/ # Reusable components (Card etc.)
│ ├── App.jsx # Main app component
│ ├── main.jsx # React entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---

## 🏁 Future Improvements

- Search athletes by name or country  
- Filter by country or ranking range  
- Historical performance data  
- Admin dashboard to add/update rankings  
- Better animations for leaderboard transitions  
- Progressive Web App (PWA) support  


---

## ⚡ Note

This project is for learning and demonstration purposes only. It simulates live rankings for the Men's 100m sprint using mock or demo data stored in MongoDB.

---