export function loadAboutContent() {
    const content = document.querySelector("#content");
    const menuBtn = document.querySelector("#menu");
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    aboutBtn.addEventListener("click", () => {

        aboutBtn.classList.add("active-btn");

        menuBtn.classList.remove("active-btn");
        homeBtn.classList.remove("active-btn");
        
        content.textContent = "";

        const title = document.createElement("div");
        title.classList.add("page-title");
        title.textContent = "About the Cafe";
        content.appendChild(title);

        const about = document.createElement("div");
        about.classList.add("page-content-container");
        about.textContent = "The Cosmic Christronaut's Cosmic Cafe is a fictional establishment; it doesn't exist in reality. Through this project, my aim is to showcase proficiency in developing a web application using webpack for efficient file assembly and dependency management. An observable feature is the seamless tab-switching functionality at the page's header. Rather than fetching separate HTML documents, JavaScript seamlessly manages the transitions within the webpage.";
        content.appendChild(about);
    })
}