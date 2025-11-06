# 🏠 Home Page

### **Domain Logic**

- Featured project selections
- Recent activity
- Tag filtering: filter projects by technology(react ,spring boot, vue)
- ~~Theme or mode selection logic~~ polish this feature

### **Business Rules**

- ~~Available for work~~
- ~~Display call-to-action("hire me", "download resume") on public pages~~
- Localized language display
- ~~Show featured~~

---

# 👤 About Page

### **Domain Logic**

- ~~Dynamic skill categorization~~
- Certification data
- Auto-updated bio stats

### **Business Rules**

- Show download CV and show newest CV
- Hide old roles
- Audience parameter

---

# ✉️ Contact Page

### **Domain Logic**

- Form validation logic
- Rate limiting
- Status feedback logic
- Offline handling

### **Business Rules**

- Disable send until required fields are valid
- Show social media links
- Thank you page
- Show CAPTCHA

---

# ⚙️ Optional Shared Logic (All Pages)

### **Domain Logic**

- Central `userProfile.json` or API defines projects, skills, achievements, and contact info
- Dynamic theme management and persistent state (e.g., dark/light mode stored in `localStorage`)
- SEO metadata generation per page (title, description, canonical link)

### **Business Rules**

- Global site mode (e.g., hide contact/email if `isPublic === false`)
- Cookie consent logic (show once per session)
- Versioning rule — display “Last updated on [date]” banner when portfolio data changes
