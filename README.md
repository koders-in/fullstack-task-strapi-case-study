# 🚀 Full Stack Intern Task: CMS-Driven Case Studies with Strapi

## 📌 Task Title:
**CMS Integration — Strapi Setup + Case Studies Management (Full Stack Task)**

---

## 📝 Task Description:
You are required to set up **Strapi** as a **Headless CMS** and build a **CMS-powered Case Studies section** using **React with Vite + Tailwind CSS** for the frontend. This includes:

- The **Case Studies section on the homepage**
- The **Case Study detail/read page**

The layout should **exactly match the attached screenshots**.

All content (titles, descriptions, images, categories, tags, etc.) should be managed dynamically via Strapi and rendered through API calls on the frontend.

🖼️ **Design Reference:** See the attached screenshots:
- `Case Studies - Home.png`
- `Case Studies - Read.png`

---

## ✅ Task Requirements:

### 🔧 Backend (Strapi):
- Install and configure **Strapi v4** (locally or hosted).
- Create appropriate **content types** for managing all fields used in the screenshots:
  - Title
  - Description
  - Category
  - Tags
  - Company Info (Logo, Name, Industry, etc.)
  - Image Assets
  - Testimonials (if applicable)
- Add sample content (minimum 2–3 case studies).
- Enable CORS and public API access for the frontend to fetch data.

### 💻 Frontend (React + Vite + Tailwind):
- Use **React + Vite** as the framework.
- Use **Tailwind CSS** for styling.
- Build the **Case Studies section on the home page** and the **Case Study detail/read page**.
- Ensure pixel-perfect implementation — spacing, fonts, layout, tags, and icons must match the screenshots.
- Case study data should be **fetched from Strapi** (not hardcoded).
- Ensure the components are **responsive** and **reusable**.

---

## 📁 Folder/Code Structure Guidelines:
```bash
backend/             # Strapi project files
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## 🔍 Evaluation Criteria:
- 🔹 Pixel-perfect implementation of the layout
- 🔹 Clean and modular code (both frontend and backend)
- 🔹 Proper integration of dynamic content via Strapi
- 🔹 Responsive layout
- 🔹 Reusable components and maintainable structure

---

## 📦 Deliverables:
1. Create a **new branch** in this repository.
2. Push both the `frontend` and `backend` folders to your branch.
3. **Create a Pull Request (PR)** to the `main` branch in this same repo with:
   - Your **Full Name**
   - Your **Role** (e.g., *Full Stack Intern*)
   - A short description of what you have implemented
   - Screenshots or Loom video (optional but appreciated)

**Example PR Title:**  
`[Full Stack Intern] Case Studies Home + Read Page - Jane Doe`

---

## 🕒 Timeline:
- ⏰ **3 Days**
- Complete the **Case Studies section (home + read)** with pixel-perfect accuracy

---

## 🚫 Common Mistakes to Avoid:
- Hardcoding instead of using CMS data
- Inconsistent fonts, colors, or padding
- Poor folder/component structure
- Ignoring responsiveness or accessibility
- Failing to replicate layout exactly from screenshots
