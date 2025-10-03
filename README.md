# 🍽️ Recipe Finder App

A responsive web app that helps users find recipes based on the ingredients they already have.  
Powered by the **Spoonacular API**, it offers smart suggestions, dietary filtering, recipe details, and a favorites feature.
Built with accessibility and user experience in mind, Recipe Finder offers:
- Ingredient-based dynamic search.
- Multiple dietary preferences filter.
- Recipe detail modals with ingredient lists and instructions.
- Persistent favorites saved locally.
- Responsive, clean, and elegant UI with smooth interactions.

---

## 📌 Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [How It Works](#how-it-works)  
- [Screenshots](#screenshots)  
- [Installation & Setup](#installation--setup)  
- [Live Deployment](#live-deployment)  
- [Future Enhancements](#future-enhancements)  
- [Acknowledgements](#acknowledgements)  
- [Author](#author)

---

## 🎬 Demo  
Here is a working live version of the app:  
🔗 [Live Demo Link](https://armanzaki.github.io/Recipe-Finder/)  
 
---

## ✅ Features

- 🔍 **Ingredient Search** – Input what ingredients you have, get relevant recipes instantly.  
- 🥗 **Diet-Based Filtering** – Filter results by dietary preferences such as Vegan, Keto, Gluten-Free, etc.  
- ⭐ **Favorites Management** – Save or remove recipes in your browser’s LocalStorage for later viewing.  
- 📖 **Recipe Details in Modal** – See summary, ingredients list, and cooking steps without leaving the page.  
- 📱 **Responsive Design** – Works smoothly on desktop, tablet, and mobile.

---

## 🛠 Tech Stack

| Layer         | Technology / Tool              |
|----------------|-------------------------------|
| Frontend      | HTML5, CSS3, JavaScript (ES6)  |
| API           | Spoonacular Recipe API         |
| Storage       | Browser LocalStorage           |
| Deployment    | GitHub Pages                   |

---

## 📂 Project Structure

Recipe-Finder
│
├── index.html # Main HTML structure
├── styles.css # Custom styles and design
├── script.js # Logic, API calls, modal management
├── README.md # Project documentation

---

## ⚙️ How It Works

1. **User Input & API Request** — Enter ingredients (and optionally a diet). The app sends a fetch request to Spoonacular.  
2. **Response & Rendering** — The API returns recipe data in JSON. The app displays them as cards containing image, title, and a ★ icon.  
3. **Recipe Details & Favorites** — Clicking a card opens a modal with full details. Clicking the ★ toggles that recipe in your favorites (in LocalStorage).  
4. **Favorites & Clear** — You can view all saved favorites. A **Clear** button resets search input, results, and messages.

---

## 📸 Screenshots

- Home  <img width="1896" height="906" alt="Screenshot 2025-10-03 113957" src="https://github.com/user-attachments/assets/befd2d11-e88d-4af8-a756-18654778a6bf" />
- Search <img width="1900" height="907" alt="Screenshot 2025-10-03 114036" src="https://github.com/user-attachments/assets/d43d886a-e9cb-481f-8e23-e9f25f638c6c" />
- Recipe cards displayed  <img width="1528" height="889" alt="Screenshot 2025-10-03 190259" src="https://github.com/user-attachments/assets/ecd527e1-4efa-493f-9934-4d63e492a514" />
- Modal showing recipe details <img width="1896" height="906" alt="Screenshot 2025-10-03 114102" src="https://github.com/user-attachments/assets/5ba86e2f-0531-4a4f-aba6-e3cb998a869d" />  
- Favorites page  <img width="1901" height="907" alt="Screenshot 2025-10-03 114140" src="https://github.com/user-attachments/assets/0ade6ebe-e963-4898-ae70-b3dc50d7dccc" />

---

## 🧰 Installation & Setup

1. Clone the repo:  
   ```bash
   git clone https://github.com/ArmanZaki/Recipe-Finder.git
2. Navigate to the folder:
   cd recipe-finder
3. Open index.html in your browser to see it running locally

---

## 🌐 Live Deployment
This project is hosted via GitHub Pages, making it public and accessible.

---

## 🔮 Future Enhancements

- Add user authentication and remote storage for favorites.
- Build meal planners & grocery list generators.
- Include voice search and multilingual support.
- Develop a mobile application version (React Native / Flutter).

---

## 🙏 Acknowledgements

**Spoonacular API** [Link](https://spoonacular.com/food-api)– recipe data source
**MDN Web Docs**[Link](https://developer.mozilla.org)– core HTML, CSS, JavaScript references
**Stack Overflow**[Link](https://stackoverflow.com/)– community knowledge & debugging help

---

## 👤 Author

Developed by **Arman Zaki**
Virtual Internship – Web Development Project

---

*Thank you for visiting and happy cooking!* 
