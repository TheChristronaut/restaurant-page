export function loadHomeContent() {
    const content = document.querySelector("#content");
    const menuBtn = document.querySelector("#menu");
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    homeBtn.addEventListener("click", () => {

        homeBtn.classList.add("active-btn");

        menuBtn.classList.remove("active-btn");
        aboutBtn.classList.remove("active-btn");
        
        content.textContent = "";

        const title = document.createElement("div");
        title.classList.add("page-title");
        title.textContent = "The Cosmic Christronaut's Cosmic Cafe";
        content.appendChild(title);

        const intro = document.createElement("div");
        intro.classList.add("page-content-container");
        intro.textContent = `"The Cosmic Christronaut does not know how to cook well at all, but compared to all the other cuisine options in the vast emptiness of space, this restaurant isn't so bad." - Old Joe`;
        content.appendChild(intro);
        
        const hours = document.createElement("div");
        hours.classList.add("page-content-container");
        const hoursHeading = document.createElement("div");
        hoursHeading.classList.add("heading");
        hoursHeading.textContent = "Hours";
        const hoursContent = document.createElement("div");
        hoursContent.classList.add("page-content");
        hoursContent.textContent = "The Cafe is open every day from Space Station hour 12 to hour 8 except on Sundays and during meteor showers.";
        hours.appendChild(hoursHeading);
        hours.appendChild(hoursContent);
        content.appendChild(hours);

        const location = document.createElement("div");
        location.classList.add("page-content-container");
        const locationHeading = document.createElement("div");
        locationHeading.classList.add("heading");
        locationHeading.textContent = "Location";
        const locationContent = document.createElement("div");
        locationContent.classList.add("page-content");
        locationContent.textContent = "The Space Station tries to maintain course between Mars and Deimos. The Cafe is on Station Level 4, Unit 2";
        hours.appendChild(locationHeading);
        hours.appendChild(locationContent);
        content.appendChild(location);
    })
}

export function initialLoadHomeContent() {
    const content = document.querySelector("#content");
    const menuBtn = document.querySelector("#menu");
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");

    homeBtn.classList.add("active-btn");

    menuBtn.classList.remove("active-btn");
    aboutBtn.classList.remove("active-btn");
        
    content.textContent = "";

    const title = document.createElement("div");
    title.classList.add("page-title");
    title.textContent = "The Cosmic Christronaut's Cosmic Cafe";
    content.appendChild(title);

    const intro = document.createElement("div");
    intro.classList.add("page-content-container");
    intro.textContent = `"The Cosmic Christronaut does not know how to cook well at all, but compared to all the other cuisine options in the vast emptiness of space, this restaurant isn't so bad." - Old Joe`;
    content.appendChild(intro);
        
    const hours = document.createElement("div");
    hours.classList.add("page-content-container");
    const hoursHeading = document.createElement("div");
    hoursHeading.classList.add("heading");
    hoursHeading.textContent = "Hours";
    const hoursContent = document.createElement("div");
    hoursContent.classList.add("page-content");
    hoursContent.textContent = "The Cafe is open every day from Space Station hour 12 to hour 8 except on Sundays and during meteor showers.";
    hours.appendChild(hoursHeading);
    hours.appendChild(hoursContent);
    content.appendChild(hours);

    const location = document.createElement("div");
    location.classList.add("page-content-container");
    const locationHeading = document.createElement("div");
    locationHeading.classList.add("heading");
    locationHeading.textContent = "Location";
    const locationContent = document.createElement("div");
    locationContent.classList.add("page-content");
    locationContent.textContent = "The Space Station tries to maintain course between Mars and Deimos. The Cafe is on Station Level 4, Unit 2";
    hours.appendChild(locationHeading);
    hours.appendChild(locationContent);
    content.appendChild(location);
}