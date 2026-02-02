// ===== MENU TOGGLE =====
let menuIcon = document.querySelector('#bx-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== ACTIVE NAV LINK =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                  .querySelector('header nav a[href*=' + id + ']')
                  .classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ===== SCROLL REVEAL =====
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ===== TYPED TEXT =====
const typed = new Typed('.mp-text', {
    strings: ['Mern Stack Developer', 'UI/UX Designer', 'Full Stack Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ===== PROJECT DATA =====
const projects = [
       {
        title: "E-ZENVY E-COMMERCE PAGE",
        image: "images/image.png",
        description: `"e-Zenvy is a modern e-commerce web application designed to provide users with a seamless and engaging online shopping experience.
Built using React.js, the project features dynamic product rendering, cart functionality, responsive layouts, and smooth UI interactions.
The application follows component-based architecture and best frontend development practices, ensuring scalability and maintainability."`,
        tools: ["React JS", "Node JS", "OpenAI API", "Tailwind CSS"],
        live: "https://premium-ui-e-zenvy.vercel.app/"
    },
    
    {
        title: "E-ZENVY E-COMMERCE PAGE",
        image: "images/image.png",
        description: `"e-Zenvy is a modern e-commerce web application designed to provide users with a seamless and engaging online shopping experience.
Built using React.js, the project features dynamic product rendering, cart functionality, responsive layouts, and smooth UI interactions.
The application follows component-based architecture and best frontend development practices, ensuring scalability and maintainability."`,
        tools: ["React JS", "Node JS", "OpenAI API", "Tailwind CSS"],
        live: "https://premium-ui-e-zenvy.vercel.app/"
    },
    {
        title: "VictuRush",
        image: "images/image copy 2.png",
        description: `Rapchik is a social media web application inspired by popular platforms like Instagram, developed with a strong focus on UI/UX and responsiveness.
It features a clean layout, user-friendly navigation, and interactive components such as post feeds, profile sections, likes, and comments UI.
The project follows a component-based architecture and modern frontend best practices, making it scalable and easy to maintain.`,
        tools: ["JavaScript", "React.JS", "HTLM5", "CSS3","Git" , "GitHub", "Vercel" ,"Vs Code"],
        live: "https://rapchik.vercel.app/"
    },
    {
        title: "Amazon Clone",
        image: "images/image copy 6.png",
        description: `🛍 Amazon Clone — Fully responsive front-end using HTML, CSS & JS. Product listings, cart UI, clean design, no backend.`,
        tools: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/YOUR-ID/amazon-clone",
        live: "https://amazon-clone-live.com"
    },
    {
        title: "Flipkart Clone",
        image: "images/image copy 7.png",
        description: `Flipkart Clone — Fully responsive front-end with HTML, CSS & JS. Functional UI mockup of Flipkart.`,
        tools: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/YOUR-ID/flipkart-clone",
        live: "https://flipkart-clone-live.com"
    }
    // Add more projects as needed
];
// ===== OPEN PROJECT MODAL (Enhanced) =====
function openProjectLinks(index) {
    const project = projects[index];
    if (!project) return;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "project-modal";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;
    overlay.style.overflowY = "auto";
    overlay.style.padding = "20px";

    // Map tools to icons (Font Awesome example)
    const toolIcons = {
        "React JS": "<i class='fab fa-react'></i>",
        "Node JS": "<i class='fab fa-node-js'></i>",
        "OpenAI API": "<i class='fas fa-robot'></i>",
        "Tailwind CSS": "<i class='fas fa-wave-square'></i>",
        "HTML": "<i class='fab fa-html5'></i>",
        "CSS": "<i class='fab fa-css3-alt'></i>",
        "JavaScript": "<i class='fab fa-js'></i>"
    };

    const toolsHTML = project.tools.map(tool => {
        return `<span style="display:inline-flex; align-items:center; gap:5px; background:#2b2f3a; padding:5px 10px; border-radius:5px; margin:5px; font-size:14px;">
                    ${toolIcons[tool] || ""} ${tool}
                </span>`;
    }).join("");

    // Create modal content
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#1f242d";
    modalContent.style.padding = "30px";
    modalContent.style.borderRadius = "15px";
    modalContent.style.maxWidth = "650px";
    modalContent.style.width = "95%";
    modalContent.style.position = "relative";
    modalContent.style.textAlign = "center";
    modalContent.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
    modalContent.style.color = "#fff";
    modalContent.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="max-width:100%; border-radius:12px; margin-bottom:20px; box-shadow:0 0 15px rgba(0,0,0,0.6);">
        <h2 style="font-size:28px; margin-bottom:15px; font-weight:700; color:#00bfff;">${project.title}</h2>
        <p style="font-size:16px; line-height:1.6; margin-bottom:20px; color:#ccc;">${project.description}</p>
        <div style="display:flex; flex-wrap:wrap; justify-content:center; margin-bottom:25px;">${toolsHTML}</div>
        <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
            <a href="${project.github}" target="_blank" style="padding:10px 25px; background:#333; color:#fff; text-decoration:none; border-radius:8px; font-weight:500; transition:0.3s;">GitHub</a>
            <a href="${project.live}" target="_blank" style="padding:10px 25px; background:#007bff; color:#fff; text-decoration:none; border-radius:8px; font-weight:500; transition:0.3s;">Live Demo</a>
        </div>
        <span id="closeModal" style="position:absolute; top:12px; right:20px; cursor:pointer; font-size:26px; color:#fff;">&times;</span>
    `;

    overlay.appendChild(modalContent);
    document.body.appendChild(overlay);

    // Close modal
    document.getElementById("closeModal").addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// ===== ATTACH MODAL TO ARROWS =====
const arrows = document.querySelectorAll(".portfolio-layer a");
arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", (e) => {
        e.preventDefault();
        openProjectLinks(index);
    });
});

// ===== CONTACT FORM =====
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Full Name"]').value;
    const email = contactForm.querySelector('input[placeholder="Email Address"]').value;
    const phone = contactForm.querySelector('input[placeholder="Mobile Number"]').value;
    const subject = contactForm.querySelector('input[placeholder="Email Subject"]').value;
    const message = contactForm.querySelector('textarea').value;

    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1&to=vinitabind1923@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      )}`;

    window.open(gmailURL, "_blank");
});
