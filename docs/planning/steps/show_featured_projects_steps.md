# Implementing "Show Featured Projects"

This guide outlines the steps to implement the **Show Featured Projects** feature on the **Home Page** of your portfolio.

---

## 1. Define the Data Source

Determine where the featured projects will come from.

### Options
- **Static JSON**: (easiest to start) e.g. `userProfile.json` or `projects.json` in your `/data` folder.
- **API Endpoint**: e.g. `/api/projects?featured=true` (for backend integration later).

**Example structure:**
```json
{
  "id": "project-1",
  "title": "AI Chatbot Demo",
  "description": "Interactive chatbot using GPT and Spring Boot",
  "image": "/images/chatbot.png",
  "tags": ["AI", "Spring Boot", "React"],
  "featured": true
}
```

---

## 2. Implement the Domain Logic

The domain logic fetches and filters the data.

**Example (pseudocode):**
```js
const allProjects = fetchProjects();
const featuredProjects = allProjects.filter(project => project.featured);
```

This can live in:
- A **Vue composable** (e.g. `useFeaturedProjects.js`)
- A **React hook** (e.g. `useFeaturedProjects.js`)

---

## 3. Implement the Business Rule (Display Layer)

Decide when and how to show featured projects.

**Rules:**
- Show only if there’s at least one featured project.
- Limit to top 3 or 4.
- Include “See All Projects” button linking to `/projects`.

**UI Example:**
```html
<section id="featured">
  <h2>Featured Projects</h2>
  <div class="project-grid">
    <ProjectCard v-for="p in featuredProjects" :key="p.id" :project="p" />
  </div>
</section>
```

---

## 4. Make It Dynamic

Integrate with your shared `userProfile.json` or API.

**Example structure:**
```json
{
  "projects": [
    { "title": "Portfolio Site", "featured": true },
    { "title": "Library Management System", "featured": false }
  ]
}
```

---

## 5. Add Visual Styling

Use a grid or carousel layout. Add badges such as “⭐ Featured” or highlight them with a special style.

---

## 6. Optional Enhancements

- Add `featuredOrder` field for custom ordering.
- Add a toggle in CMS/JSON for quick updates.
- Lazy-load images for better performance.

---

**Result:**  
When a visitor lands on the home page, they will see a curated section of featured projects automatically populated from your portfolio data source.
