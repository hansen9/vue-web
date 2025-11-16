# Logic Complexity Sorted List

This document sorts all logic features in the portfolio by **complexity**, considering both **development** and **maintenance/improvement** difficulty.

---

## 🟢 Low Complexity (easy to build & easy to improve)

| Feature                 | Page       | Notes                        |     |
| ----------------------- | ---------- | ---------------------------- | --- |
| Show featured           | 🏠 Home    | Simple flag or tag check     | [x] |
| Display call-to-action  | 🏠 Home    | Conditional UI visibility    | [x] |
| Available for work      | 🏠 Home    | Single boolean flag          | [x] |
| Show download CV        | 👤 About   | Single button or link        | [ ] |
| Hide old roles          | 👤 About   | Filter list items by rule    | [ ] |
| Show social media links | ✉️ Contact | Static data render           | [ ] |
| Thank you page          | ✉️ Contact | Redirect or modal after send | [ ] |

---

## 🟡 Medium Complexity (some integration or state logic)

| Feature                                      | Page       | Notes                           |     |
| -------------------------------------------- | ---------- | ------------------------------- | --- |
| Form validation logic                        | ✉️ Contact | Client + server validation sync | [ ] |
| Disable send until required fields are valid | ✉️ Contact | Form state dependency           | [ ] |
| Status feedback logic                        | ✉️ Contact | Async feedback handling         | [ ] |
| Show CAPTCHA                                 | ✉️ Contact | External library/API            | [ ] |
| Tag filtering                                | 🏠 Home    | UI filtering + dynamic render   | [x] |
| Recent activity                              | 🏠 Home    | Time-based list refresh         | [ ] |
| Certification data                           | 👤 About   | Schema-driven rendering         | [x] |
| Auto-updated bio stats                       | 👤 About   | Uses data or API updates        | [x] |
| Audience parameter                           | 👤 About   | Affects what’s shown to who     | [ ] |
| Localized language display                   | 🏠 Home    | i18n logic and content mapping  | [x] |

---

## 🟠 High Complexity (multi-layer dependencies)

| Feature                                 | Page                  | Notes                              |     |
| --------------------------------------- | --------------------- | ---------------------------------- | --- |
| Featured project selections             | 🏠 Home               | API + highlighting logic           | [ ] |
| Offline handling                        | ✉️ Contact            | Requires service worker or cache   | [ ] |
| Rate limiting                           | ✉️ Contact            | Backend throttle logic             | [ ] |
| Central `userProfile.json` or API       | ⚙️ Shared (All Pages) | Global data schema for all content | [ ] |
| SEO metadata generation per page        | ⚙️ Shared (All Pages) | Dynamic `<head>` updates           | [ ] |
| Cookie consent logic                    | ⚙️ Shared (All Pages) | Persistent state + UX              | [ ] |
| Versioning rule (“Last updated” banner) | ⚙️ Shared (All Pages) | Data timestamp comparison          | [ ] |

---

## 🔴 Very High Complexity (cross-page state, scalability, ripple effects)

| Feature                                       | Page                       | Notes                                |     |
| --------------------------------------------- | -------------------------- | ------------------------------------ | --- |
| Dynamic skill categorization                  | 👤 About                   | Requires taxonomy & sorting logic    | [x] |
| Dynamic theme management and persistent state | ⚙️ Shared (All Pages)      | Context, localStorage, CSS variables | [ ] |
| Theme or mode selection logic                 | 🏠 Home (linked to Shared) | Cross-component styling system       | [x] |
| Global site mode (`isPublic`)                 | ⚙️ Shared (All Pages)      | Conditional rendering across routes  | [ ] |

---

**Complexity Key**  
🟢 = Simple logic or toggle  
🟡 = Requires UI + data coordination  
🟠 = Involves multiple systems or APIs  
🔴 = Global logic affecting multiple components or persistent user states
