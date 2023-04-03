"use strict";

import contentObj from "./content.js";

document.addEventListener("DOMContentLoaded", createSidebarList);

function createSidebarList() {
   const sideNav = document.querySelector(".sidenav");
   const list = document.createElement("ul");
   list.classList.add("sidenav__list");

   const listHtml = contentObj
      .map((item) => {
         const { id, styleTitle } = item;
         return `<li>
         <a href="#" class="sidenav__item" 
         id="${id}" > ${styleTitle}
         </a>
         </li>`;
      })
      .join("");
   list.innerHTML = listHtml;
   sideNav.append(list);
   sideNav.addEventListener("click", handleSidebarItemClick);
}

function handleSidebarItemClick(event) {

   const burgerButton = document.querySelector(".burger__button");
   const currentItem = event.target.closest(".sidenav__item");

   if (currentItem) {
      if (!currentItem.classList.contains("active")) {
         const activeItem = this.querySelector(".active");
         if (activeItem) activeItem.classList.remove("active");
         currentItem.classList.add("active");
         displayContent(currentItem.id);
      }

      burgerButton.click();
   }
}

function displayContent(contentId) {

   const newContent = contentObj.find((el) => el.id === contentId);
   if (newContent) {

      const contentSection = document.querySelector(".content__seciton");

      const { styleTitle, stylePicture, styleDescription } = newContent;

      contentSection.innerHTML = `
         <h2 class="content__title">${styleTitle}</h2>
         <img
            class="content__picture"
            src="${stylePicture}"
            alt="${styleTitle}"
            />
         <div class="content__text">
         ${styleDescription}
         </div>`;
   }
}
