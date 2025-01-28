# 🌐 GitHub Finder

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue.svg" alt="React Badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0.0-green.svg" alt="Tailwind Badge" />
  <img src="https://img.shields.io/badge/API-GitHub%20API-black" alt="API Badge" />
</p>

---

## 🚀 About the Project

**GitHub Finder** is a React-based web application that allows users to search for GitHub profiles, retrieve detailed information about users, and view their repositories, followers, and more. It utilizes the **GitHub API** for real-time data fetching and provides a sleek, responsive UI powered by **TailwindCSS**.

![Github_Finder](https://github.com/user-attachments/assets/cb0f75c5-809c-4ca9-8a7d-6515f8d3078b)

---

## ✨ Features

- 🔍 **Search GitHub Profiles**: Quickly search for any GitHub user by their username.
- 👤 **User Details**: View detailed user information, including bio, followers, following, public repositories, and public gists.
- 📦 **Repository Details**: View repositories with information like stars, forks, issues, and watchers.
- ⚡ **Responsive Design**: Fully responsive and compatible across devices.
- 🎨 **Interactive UI**: Modern animations, hover effects, and dynamic updates.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **API**: GitHub REST API

---

## ⚙️ Setup and Installation

Follow these steps to run the project on your local system:

### Prerequisites

- Node.js (v14+)
- NPM or Yarn
- GitHub Personal Access Token (for API requests)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/CodeTirtho97/Github-Finder.git
   cd github-finder
2. **Install Dependencies**:
   ```bash
   npm install
3. **Set Up Environment Variables**:
    Create a .env file in the project root:
    ```bash
    REACT_APP_GITHUB_URL=https://api.github.com
    REACT_APP_GITHUB_TOKEN=your_personal_access_token
4. **Start the Development Server**:
    ```bash
    npm start

The app will run on http://localhost:3000.

---

## 📂 Project Structure
    github-finder/
    ├── public/              # Static assets
    ├── src/
    │   ├── components/
    │   │   ├── layout/      # Navbar, Footer, Spinner
    │   │   ├── users/       # User-related components
    │   │   ├── repos/       # Repo-related components
    │   ├── context/
    │   │   ├── github/      # Context API for GitHub state management
    │   │   ├── alert/       # Context API for alert state management
    │   ├── pages/           # Home, About, and NotFound pages
    │   ├── App.js           # Main app component
    │   ├── index.js         # Entry point
    ├── .env                 # Environment variables
    ├── package.json         # Project dependencies and scripts
    └── README.md            # Project documentation


---

## 🌟 Features Breakdown

### 🖼️ Pages

#### **Home Page**:
- User search bar with auto-clear functionality.
- Displays a grid of user profiles retrieved from the API.

![image](https://github.com/user-attachments/assets/f6b12c97-300d-443b-95dc-7d66a201c7d8)

#### **About Page**:
- Overview of the application with an animated GitHub logo and version details.

![image](https://github.com/user-attachments/assets/08348536-fa71-47c9-b127-7058719bf203)

#### **Not Found Page**:
- Displayed when a user navigates to an invalid route.

![image](https://github.com/user-attachments/assets/2a569408-2c3e-4e44-9fe1-5f936f479627)

---

### ⚙️ Components

#### **Navbar**:
- Persistent navigation bar with a responsive gradient background.

#### **Footer**:
- A footer with gradient styling that dynamically updates the current year.

#### **User Search**:
- Allows users to search for GitHub profiles.
- Displays a "no users found" message when no results match.

#### **User Results**:
- Displays search results in a responsive grid layout.

#### **User Details**:
- Fetches and displays details for a specific GitHub user.
- Includes repository list with real-time data.

#### **Repository Item**:
- Displays detailed information about individual repositories, including:
  - 🌟 **Stars**
  - 🍴 **Forks**
  - 👀 **Watchers**
  - 🛠️ **Open Issues**

---

## 📄 License

This project is licensed under the **MIT License**. 
