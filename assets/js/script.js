'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Liste de tes projets
const projects = [
  {
    title: "Multi-Cloud Infrastructure Provisioning",
    img: "./assets/images/projet-0.png",
    desc: "Complete Infrastructure as Code (IaC) solution for deploying high-availability multi-cloud architecture with Terraform. This project demonstrates DevOps best practices for managing cloud resources across AWS, Azure, and GCP in a unified manner.",
    link: "https://github.com/Rania1808/terraform-multicloud-infra/blob/main/README.md"
  },
  {
    title: "NextJS Production-Ready CI/CD Pipeline",
    img: "./assets/images/projet-1.jpg",
    desc: "Modern production-ready CI/CD pipeline for Next.js application deployed on Azure Kubernetes Service (AKS) with GitOps, Nexus caching, and automated security scanning.",
    link: "https://github.com/Rania1808/nextflow-azure/blob/main/README.md"
  },
  {
    title: "Automated Monitoring & Scaling Trigger for Magento Server",
    img: "./assets/images/projet-2.PNG",
    desc: "A smart monitoring and alerting system for a Magento production server hosted on Hypernode. Using Prometheus, Alertmanager, Flask Webhook, and Ansible automation, the system monitors server performance and triggers automatic corrective actions — laying the foundation for future autoscaling.",
    link: "https://github.com/Rania1808/devops-automation/blob/main/README.md"
  },
  {
    title: "CI/CD Automation with GitHub Actions and Azure",
    img: "./assets/images/projet-3.jpg",
    desc: "A complete CI/CD pipeline implementation for deploying containerized web applications to Azure using GitHub Actions, with automated deployment to both development and production environments.",
    link: "https://github.com/Rania1808/azure-webapp-cicd-pipeline/blob/main/README.md"
  },
  {
    title: "CI/CD Pipeline for Magento E-Commerce Platform",
    img: "./assets/images/projet-4.png",
    desc: "a complete CI/CD pipeline for a Magento e-commerce application using Jenkins, focusing on automation, code quality, secure artifact management, and reliable deployment using Ansible.",
    link: "https://github.com/Rania1808/Magento-CI-CD-Pipeline-/blob/main/README.md"
  },
  {
    title: "Spring Boot CI/CD Pipeline with Jenkins, Docker & Monitoring",
    img: "./assets/images/projet-5.png",
    desc: "Built a complete CI/CD pipeline for a Spring Boot application with MySQL using Jenkins, Maven, SonarQube, JaCoCo, Nexus, Docker, and Docker Compose. The pipeline automates code testing, artifact management, image creation, and deployment, with Prometheus and Grafana for monitoring and Jenkins for notifications, improving code quality, deployment reliability, and delivery speed.",
    link: "https://github.com/Rania1808/devops-cicd-pipeline/blob/main/README.md"
  },
  {
    title: "Openstack iaas cloud",
    img: "./assets/images/projet-6.png",
    desc: "Infrastructure IaaS avec Open Stack et application web basés sur des microservices avec Angular et Spring Boot. Configuration de clusters Kubernetes et intégration de Docker pour un déploiement évolutif",
    link: "https://github.com/Rania1808"
  },

];

// Popup
const popup = document.getElementById("popup");

// Pour chaque icône
document.querySelectorAll(".openPopup").forEach(btn => {
  btn.addEventListener("click", () => {
    const project = projects[btn.dataset.id];

    // Remplir le popup
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-img").src = project.img;
    document.getElementById("project-desc").textContent = project.desc;
    document.getElementById("project-link").href = project.link;

    popup.style.display = "block";
  });
});

function closePopup() {
  popup.style.display = "none";
}