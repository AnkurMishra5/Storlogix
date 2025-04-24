# 📦 Storlogix - Inventory & Order Management Dashboard

Storlogix is a modern and responsive inventory and order management dashboard built using **Next.js** and **TypeScript**. It is designed to streamline warehouse operations, track inventory and manage orders efficiently with real-time data capabilities.

---

## 🚀 Live Demo

🌐 [storlogix.vercel.app] (deployed via Vercel)

---

## 🔧 Features

- 📊 Dashboard Overview
- 📦 Inventory Uploads via Excel
- 📦 Real-time Stock Management
- 🧾 Order Processing and Status
- 📈 Analytics and Reports (coming soon)
- 👥 Buyer/Client Management

---

## 🛠 Tech Stack

### Frontend:
- ⚡ Next.js 14
- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🔄 Redux Toolkit
- 📊 SheetJS
- 📁 React Dropzone
- 🌐 Next.js App Router

### Backend:
- 🐍 FastAPI (Python)
- 🗃️ SQLAlchemy
- 🛢️ PostgreSQL

---

## 📁 Available Scripts

In the project directory, you can run:

### `npm run dev`
🚀 Runs the app in development mode.\
📱 Open [http://localhost:3000] to view it in the browser.\
🔄 The page will automatically reload if you make edits.\
⚠️ You will also see any lint errors in the console.

### `npm run build`
📦 Builds the app for production.\
⚡ It correctly bundles Next.js in production mode and optimizes the build for the best performance.\
🔨 The build is minified and ready for deployment.

### `npm start`
🌐 Runs the built app in production mode.\
✨ Open [http://localhost:3000] to view it.

### `npm run lint`
🔍 Runs the Next.js linter to check for code issues.\
🛠️ Will show any linting errors or warnings in your code.

---

## �� Project Structure

storlogix/
├── app/ # Next.js App Router directory
│ ├── dashboard/ # Dashboard pages
│ ├── inventory/ # Inventory management
│ ├── orders/ # Order processing
│ ├── buyers/ # Buyer management
│ └── reports/ # Analytics & reports
├── components/ # Reusable React components
├── lib/ # Utility functions and helpers
└── public/ # Static assets