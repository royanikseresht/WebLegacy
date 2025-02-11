# **Web Legacy: A History of the UK’s Digital Revolution**  

## **Overview**  

**Web Legacy** is a university web development project that explores the history and evolution of the internet in the United Kingdom. This website presents key milestones, the digital revolution, how the internet has shaped modern society in the UK, and more.  

The project is built using **HTML, CSS, JavaScript, and JSON data**, with a structured layout, responsive design, and a clean user experience.  

---

## **Project Structure**  

```
web-legacy-project/
│
├── images/                # Folder for all project images (logos, hero images, etc.)
├── css/                   # Folder for stylesheets
│   └── styles.css         # Main stylesheet for the website
├── js/                    # Folder for JavaScript files
│   └── news.js            # Handles fetching and displaying news articles
├── data.json              # Folder for JSON data
├── index.html             # Home page
├── introduction.html      # Page introducing UK internet history
├── milestones.html        # Key milestones in UK's internet evolution
├── evolution.html         # Evolution of the internet in the UK
├── developers.html        # Personal details about the project developer
├── blog.html              # Blog section covering articles about internet history
├── resources.html         # Additional reading materials and references
├── support.html           # Contact support page for inquiries
├── news.html              # Displays the latest internet-related news with a dynamic layout using Handlebars templates.
├── README.md              # Documentation file (this file)
```

---

## **Pages Overview**  

### **1. Home Page (`index.html`)**  
- An overview of the project, including a **hero section** with an introduction to the UK’s internet history.  
- A **navigation bar** with links to all pages.  
- A **featured image** representing the internet's impact in the UK.  

### **2. Introduction Page (`introduction.html`)**  
- Provides a **detailed history** of how the internet was introduced in the UK.  
- Discusses **early networking**, government policies, and major players in the UK's internet growth.  

### **3. Milestones Page (`milestones.html`)**  
- A **timeline or structured list** of key milestones in the UK's internet development.  
- Covers events like **the first internet connection, broadband adoption, mobile internet, and fiber-optic expansion**.  

### **4. Evolution Page (`evolution.html`)**  
- Showcases **technological advancements** and how the internet evolved in the UK.  
- Discusses topics such as **the rise of social media, cybersecurity, and the impact of 5G**.  

### **5. Blog Page (`blog.html`)**  
- A section dedicated to **articles, stories, and discussions** about the UK’s digital history.  
- Covers **personal experiences, expert insights, and future trends** in internet development.  

### **6. Resources Page (`resources.html`)**  
- A **collection of useful links, references, and external resources** related to the project.  
- Provides **educational materials, historical archives, and GitHub repositories**.  

### **7. Support Page (`support.html`)**  
- A **contact support page** where users can submit inquiries or request help.  
- Contains a **contact form** for reaching out to the developer.  

### **8. Developers Page (`developers.html`)**  
- A section **introducing the developer (you!)**, including your **name, age, and picture**.  
- The layout features **a circular image on the left and personal details on the right**.  

### **9. News Page (`news.html`)**  
- Displays **real-time internet-related news** fetched dynamically using the News API.  
- Uses **Handlebars templates** for rendering news articles in a structured format.  
- Includes **pagination support** to browse multiple pages of news articles.  

---

## **Features**  

✅ **Responsive Design** – The website adapts to different screen sizes, ensuring usability on desktops, tablets, and mobile devices.  
✅ **Dynamic Content** – JSON data is used for managing external resources and references.  
✅ **Favicon Support** – A favicon is included to improve branding in the browser tab.  
✅ **Interactive Layout** – Information is structured for easy navigation and readability.  
✅ **SEO Optimization** – Proper meta tags and structured content enhance visibility in search engines.  
✅ **Web Accessibility** – Designed with accessibility in mind, making the content usable for all users.  
✅ **Live News Updates** – The **news.html** page fetches and displays the latest internet-related news.  
✅ **Pagination System** – Users can navigate through multiple pages of news articles.  
✅ **Interactive Timeline** – Implement a timeline feature to showcase internet history dynamically.  
✅ **VR Integration** – Potentially incorporate a VR experience for a more immersive historical journey.  
✅ **Multimedia Content** – Adding videos, podcasts, and interviews about the internet’s evolution.  
✅ **User Feedback System** – Implement a form where visitors can share thoughts or suggest improvements.  
✅ **Enhanced Accessibility** – Further improvements for users with disabilities, including better screen reader support.  

---

## **Technologies Used**  

- **HTML5** – Structuring the web pages.  
- **CSS3** – Styling the layout, colors, and responsive design.  
- **JavaScript** – Handling interactivity and dynamic content rendering.  
- **JSON** – Managing structured data like references and external links.  
- **News API** – Fetching and displaying the latest internet-related news.  
- **Handlebars.js** – Rendering dynamic content efficiently on the news page.  

---

## **Setup Instructions**  

To run the project locally, follow these steps:  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/royanikseresht/WebLegacy.git
   cd web-legacy
   ```

2. **Install dependencies**:  
   - No additional dependencies are required; the project runs as a static site.  

3. **Open the project in a browser**:  
   - Simply **open `index.html`** in any modern web browser.  

---

## **Resources and References**  

Here are some useful external resources referenced in the project:  

```json
"resources": [
            {
                "title": "IPv6 deployment",
                "description": "Information on the adoption and deployment of IPv6 in the UK and worldwide, including technical details and policy impacts.",
                "link": "https://en.wikipedia.org/wiki/IPv6_deployment"
            },
            {
                "title": "Internet in the United Kingdom",
                "description": "An overview of how the internet evolved in the UK, from early networks to broadband.",
                "link": "https://en.wikipedia.org/wiki/Internet_in_the_United_Kingdom"
            },
            {
                "title": "How Britain got its first internet connection – by the late pioneer who made it happen",
                "description": "An article about the late pioneer who helped bring the first internet connection to the UK.",
                "link": "https://theconversation.com/how-britain-got-its-first-internet-connection-by-the-late-pioneer-who-made-it-happen-45404"
            },
            {
                "title": "Latest News related to Internet",
                "description": "Stay updated with the latest news and trends related to the internet.",
                "link": "https://www.cnbc.com/internet/"
            },
            {
                "title": "GitHub Repository for VR feature",
                "description": "Explore the GitHub repository containing the code for the VR feature in the internet history project.",
                "link": "https://github.com/ZigaoWang/internet-history-3d/tree/main"
            },
            {
                "title": "GitHub Repository (Cheatsheet)",
                "description": "A collection of useful cheatsheets for various programming languages and tools, available on GitHub.",
                "link": "https://github.com/rstacruz/cheatsheets"
            }
        ]   
```

---

## **Contributing**  

Contributions are welcome! If you'd like to improve the project, feel free to fork the repository, make changes, and submit a **pull request**.  

---

## **License**  

This project is NOT open source.  

---

## **Contact**  

For any inquiries or suggestions, feel free to reach out:  

- **Developer**: Roya Nikseresht  
- **Email**: rn211@student.london.ac.uk  
- **GitHub**: royanikseresht  

