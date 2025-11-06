# 🌐 Portfolio Website Logic Structure (Detailed Explanation)

This document describes the **domain logic** and **business rules** for each page of a personal portfolio website, intended for professional use (e.g., showcasing skills on LinkedIn, JobStreet, or other job platforms).

---

## 🏠 Home Page

### **Domain Logic**
1. **Featured Project Selections**  
   Logic to dynamically select and display a curated set of projects. Could be based on tags, recency, or manual curation.  
   Example: Highlight 3 most relevant projects depending on your current role or job-seeking focus.

2. **Recent Activity**  
   Displays your latest professional updates or GitHub commits fetched from APIs.  
   Keeps your portfolio looking “alive” and up-to-date automatically.

3. **Tag Filtering**  
   Enables users to filter projects by tags like `Web`, `Backend`, `AI`, or `UI`.  
   This logic ensures efficient client-side filtering or query-based rendering.

4. **Theme or Mode Selection Logic**  
   Handles theme toggling (e.g., dark/light) and persists the user’s choice via local storage.  
   This logic operates globally but typically starts in the homepage.

### **Business Rules**
1. **Available for Work**  
   Determines if you’re currently open to new job opportunities. A flag that can be toggled in your site config or backend.

2. **Display Call-to-Action (CTA)**  
   Rules that decide *when and where* to display CTAs like “Let’s work together” or “Contact me.”  
   For instance, only show when `availableForWork = true` or after scrolling through your featured projects.

3. **Localized Language Display**  
   Renders the homepage content in the visitor’s preferred language (detected via browser or manual toggle).  
   Ensures text and date formats adapt to locale.

4. **Show Featured**  
   Defines criteria for which projects count as “featured.” Could be a manual tag or automatic selection based on metrics (like stars or recent commits).

---

## 👤 About Page

### **Domain Logic**
1. **Dynamic Skill Categorization**  
   Automatically groups your skills by type (frontend, backend, tools, soft skills).  
   Makes adding new skills easy — the page auto-classifies them.

2. **Certification Data**  
   Fetches and displays certifications dynamically from a JSON file or API.  
   Ensures new certifications appear automatically without manual layout edits.

3. **Auto-Updated Bio Stats**  
   Dynamically calculates and updates your experience (e.g., “3+ years as full-stack developer”) based on date values.  
   Keeps content relevant without manual rewriting.

### **Business Rules**
1. **Show Download CV and Show Newest CV**  
   Always show the latest résumé available for download. Older versions are hidden.  
   If new CV uploaded, replace links automatically.

2. **Hide Old Roles**  
   Only display relevant or recent work experience. Older roles beyond a time threshold are hidden by default.

3. **Audience Parameter**  
   Adjusts tone or visibility depending on who’s viewing the page. For instance, show detailed tech info for recruiters, or summary view for general audience.

---

## ✉️ Contact Page

### **Domain Logic**
1. **Form Validation Logic**  
   Ensures all required fields (name, email, message) are valid before enabling the send button.  
   Includes client-side and (optionally) backend validation.

2. **Rate Limiting**  
   Prevents spam or abuse by limiting the number of submissions per user per minute.  
   Implemented via backend or local cache logic.

3. **Status Feedback Logic**  
   Handles real-time feedback like “Message sent successfully” or “Error: please try again later.”  
   Gives clear user experience signals.

4. **Offline Handling**  
   Detects when user is offline and queues messages or disables sending gracefully.  
   Improves usability under unstable network conditions.

### **Business Rules**
1. **Disable Send Until Valid**  
   Enforces form completeness before allowing submission.  
   Reduces spam and incomplete form entries.

2. **Show Social Media Links**  
   Ensures visitors always have an alternative contact option.  
   Displayed based on configuration and audience context.

3. **Thank You Page**  
   Displays after successful submission — can include auto-redirect, confetti animation, or next-step suggestion (e.g., “Follow me on LinkedIn”).

4. **Show CAPTCHA**  
   Adds human verification step for spam prevention.  
   Only appears after repeated submissions or when suspicious behavior is detected.

---

## ⚙️ Optional Shared Logic (All Pages)

### **Domain Logic**
1. **Centralized Data Source (`userProfile.json` or API)**  
   Defines projects, skills, achievements, and contact info in one place.  
   Makes the site data-driven and easy to update programmatically.

2. **Dynamic Theme Management**  
   Controls dark/light modes and saves user preferences in `localStorage` or cookies.

3. **SEO Metadata Generation**  
   Automatically generates per-page metadata: titles, descriptions, canonical URLs, and social tags for better search ranking and link previews.

### **Business Rules**
1. **Global Site Mode**  
   Enables or disables visibility of contact/email based on a `isPublic` flag.  
   Example: When `isPublic = false`, hide sensitive personal info.

2. **Cookie Consent Logic**  
   Displays a cookie consent banner once per session.  
   Required for GDPR or similar compliance if you use analytics.

3. **Versioning Rule**  
   Displays a small “Last updated on [date]” banner whenever portfolio data changes.  
   Keeps your site looking maintained and trustworthy.

---

### 🧭 Summary
This logic structure separates **how** your site operates (domain logic) from **why** and **when** it acts (business rules).  
Together, they ensure your portfolio remains dynamic, relevant, and tailored for your professional goals.
