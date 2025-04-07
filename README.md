# 🧠 Quirkboard - Real-Time Collaborative Whiteboard

**Quirkboard** is a full-stack real-time collaborative whiteboard application that allows multiple users to interact, draw, and chat in shared rooms. Built with **React**, **Node.js**, **Socket.IO**, and **MongoDB**, it’s designed to be scalable, modular, and ready for advanced features like authentication, admin control, logging, and rate-limiting.

---

## 🔧 Features

- 🎨 Real-time collaborative drawing on canvas
- 🔐 Room-based access with password support
- 💬 Real-time chat with MongoDB persistence
- 👨‍💼 Admin panel (Planned)
- 🔒 Authentication system (Planned: JWT + OAuth2)
- ⛔ Rate limiting for abusive users (Planned)
- 📜 Logging module for user activity (Planned)

---

## ⚙️ Tech Stack

| Layer        | Tech                                  |
|--------------|----------------------------------------|
| Frontend     | React.js, Tailwind CSS                 |
| Backend      | Node.js, Express.js                    |
| Real-time    | Socket.IO                              |
| Database     | MongoDB (Mongoose)                     |
| Authentication | JWT (Upcoming), OAuth2 (Google)    |
| Deployment   | Render.com                             |

---

## 🗃️ System Modules

1. **Authentication Module**  
   - Register/Login with JWT/OAuth
   - Protected routes
   - Role-based access (admin/user)

2. **User Module**  
   - Room entry
   - Drawing tools, eraser, color picker
   - Chat system

3. **Admin Module (Planned)**  
   - View logs, active rooms, connected users
   - Moderate abusive activity

4. **Rate Limiting & Logging**  
   - Daily usage tracking
   - Middleware to block high-usage/abusive users

---

## 📁 Directory Structure

```bash
Quirkboard/
👉 client/           # React frontend
👉   ├— components/
👉   └— pages/
👉 server/           # Express + Socket.IO backend
👉   ├— models/
👉   ├— routes/
👉   └— controllers/
👉 .env
👉 README.md
```

---

## 🛠️ Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/Divyanshu1712/Quirkboard
   ```

2. Set up backend  
   ```bash
   cd server
   npm install
   npm start
   ```

3. Set up frontend  
   ```bash
   cd client
   npm install
   npm start
   ```

4. Environment File (`.env`)
   ```env
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

---

## ✨ Roadmap

- [x] Drawing canvas with real-time sync
- [x] Room creation and joining
- [x] Chat system
- [ ] Admin Panel
- [ ] JWT-based Auth
- [ ] OAuth2 (Google, GitHub)
- [ ] Rate limiting middleware
- [ ] Session logs

---

## 📌 Deployment

- Deployed with **Render**
- Setup with `npm install` and Node server
- Publish Directory: `client/build` (for frontend)

---

## 👨‍💼 Author

**Divyanshu Srivastava**  
[GitHub](https://github.com/Divyanshu1712) | [LinkedIn](https://www.linkedin.com/in/divyanshu1712)

---

## 📃 License

Licensed under the [MIT License](LICENSE)
