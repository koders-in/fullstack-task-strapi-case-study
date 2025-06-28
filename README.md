📌 Project Title

CMS Integration with Strapi – Case Studies Management (Internship Task)

📖 About the Project

This project is a full stack implementation demonstrating integration between a CMS (Strapi) and a React-based frontend for dynamically managing and displaying case studies. This task was part of my internship assignment provided by the company, where I was responsible for both backend setup and frontend development.

⚙️ Backend Setup (Strapi CMS)

Installed and Configured Strapi:

Initialized a Strapi project using the official CLI.

Set up local development environment with appropriate database (SQLite by default).

Created Collection Types & Components:

Built a collection type called case-study.

Inside this, structured multiple custom components and fields such as:

Title, Slug, Excerpt, Tags

Card Image, Conclusion, Publisher Info

Company Info (Logo, Name, About, Size, Industry, HQ, Founded Year)

Massive Use Cases (List)

Key Features (List)

Contact Section (with headings/subheadings/content)

Made Sample Entries:

Entered multiple sample case studies with full data to test frontend rendering.

Enabled CORS in Middleware:

Edited ./config/middlewares.js to enable cross-origin access:

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5173'], 
    },
  },
  // other middleware...
];

Started Backend Server:

Ran Strapi on http://localhost:1337/admin.

🌐 Frontend Setup (React)

Initialized React App:

Used Vite + Tailwind CSS for a fast and styled frontend.

Structured the layout for listing and detailing case studies.

Fetched Data Using Axios:

Installed axios and made GET requests to Strapi’s API.

Dynamically displayed content like case study cards, brand info, quotes, and more.

Responsive Design & Components:

Created reusable UI components for sections like:

Case Study Card

Brand Info Sidebar

Company Features & Use Cases

Contact Section

Deployed on Localhost:

Backend served on http://localhost:1337

Frontend served on http://localhost:5173

🎥 ![Demo Video](./rec.mp4)




🛠️ Tech Stack

Frontend: React, Vite, Tailwind CSS, Axios

Backend: Strapi CMS

Database: SQLite (default from Strapi)

📦 Installation & Usage

# Backend (Strapi)
cd strapi-backend
npm install
npm run develop

# Frontend (React)
cd case-study-frontend
npm install
npm run dev

📌 Notes

Ensure CORS is properly set in Strapi when working across different ports.

All API requests must point to the correct Strapi base URL.

Make sure to publish the case studies in Strapi for them to be available via API.