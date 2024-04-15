export function loadMenuContent() {
    const content = document.querySelector("#content");
    const menuBtn = document.querySelector("#menu");
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    menuBtn.addEventListener("click", () => {

        menuBtn.classList.add("active-btn");      

        homeBtn.classList.remove("active-btn");
        aboutBtn.classList.remove("active-btn");

        content.textContent = "";

        const title = document.createElement("div");
        title.classList.add("page-title");
        title.textContent = "Menu";
        content.appendChild(title);

        const beverageTitle = document.createElement("div");
        beverageTitle.classList.add("menu-heading");
        beverageTitle.textContent = "Beverages";
        content.appendChild(beverageTitle);

        const coffee = document.createElement("div");
        coffee.classList.add("page-content-container");
        const coffeeHeading = document.createElement("div");
        coffeeHeading.classList.add("heading");
        coffeeHeading.textContent = "Coffee";
        const coffeeContent = document.createElement("div");
        coffeeContent.classList.add("page-content");
        coffeeContent.textContent = "We have many coffee options available as long as it's an iced vanilla late. We source our vanilla from Madagascar on Earth and our ice comes from moisture harvesters in the atmosphere of Jupiter.";
        const coffeePrice = document.createElement("div");
        coffeePrice.classList.add("price");
        coffeePrice.textContent = "7 Sol Credits";
        coffee.appendChild(coffeeHeading);
        coffee.appendChild(coffeeContent);
        coffee.appendChild(coffeePrice);
        content.appendChild(coffee);

        const milk = document.createElement("div");
        milk.classList.add("page-content-container");
        const milkHeading = document.createElement("div");
        milkHeading.classList.add("heading");
        milkHeading.textContent = "Milk";
        const milkContent = document.createElement("div");
        milkContent.classList.add("page-content");
        milkContent.textContent = "We have milk and several optional flavors, our milk comes from dairy farmers in Europe on Earth. That's what you can tell yourself anyway.";
        const milkPrice = document.createElement("div");
        milkPrice.classList.add("price");
        milkPrice.textContent = "5 Sol Credits";
        milk.appendChild(milkHeading);
        milk.appendChild(milkContent);
        milk.appendChild(milkPrice);
        content.appendChild(milk);

        const juice = document.createElement("div");
        juice.classList.add("page-content-container");
        const juiceHeading = document.createElement("div");
        juiceHeading.classList.add("heading");
        juiceHeading.textContent = "Juice";
        const juiceContent = document.createElement("div");
        juiceContent.classList.add("page-content");
        juiceContent.textContent = "Our juice is made with exotic tropical fruits imported from another star system, juice type depends on latest shipment.";
        const juicePrice = document.createElement("div");
        juicePrice.classList.add("price");
        juicePrice.textContent = "4 Sol Credits";
        juice.appendChild(juiceHeading);
        juice.appendChild(juiceContent);
        juice.appendChild(juicePrice);
        content.appendChild(juice);

        const snacksTitle = document.createElement("div");
        snacksTitle.classList.add("menu-heading");
        snacksTitle.textContent = "Snacks";
        content.appendChild (snacksTitle);

        const exotic = document.createElement("div");
        exotic.classList.add("page-content-container");
        const exoticHeading = document.createElement("div");
        exoticHeading.classList.add("heading");
        exoticHeading.textContent = "Space Octopus";
        const exoticContent = document.createElement("div");
        exoticContent.classList.add("page-content");
        exoticContent.textContent = "When human expansion in space first started, The Christronaut's Cafe was at the forefront of innovative food ideas beyond our pale blue dot. The Chrsitronaut himself discovered the space octopus hoards in the lower atmosphere of Neptune. We now have many options for exotic space snacks offered by these creatures that cannot be found anywhere else. See our counter for the full selection.";
        const exoticPrice = document.createElement("div");
        exoticPrice.classList.add("price");
        exoticPrice.textContent = "3 - 7 Sol Credits";
        exotic.appendChild(exoticHeading);
        exotic.appendChild(exoticContent);
        exotic.appendChild(exoticPrice);
        content.appendChild(exotic);

        const donuts = document.createElement("div");
        donuts.classList.add("page-content-container");
        const donutsHeading = document.createElement("div");
        donutsHeading.classList.add("heading");
        donutsHeading.textContent = "Donuts";
        const donutsContent = document.createElement("div");
        donutsContent.classList.add("page-content");
        donutsContent.textContent = "Earth donuts are sweet. Our space donuts are savory, they are flavored by minerals that can only be sourced from the rings of Saturn.";
        const donutsPrice = document.createElement("div");
        donutsPrice.classList.add("price");
        donutsPrice.textContent = "3 Sol Credits";
        donuts.appendChild(donutsHeading);
        donuts.appendChild(donutsContent);
        donuts.appendChild(donutsPrice);
        content.appendChild(donuts);
    })
}