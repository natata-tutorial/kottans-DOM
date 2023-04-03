"use strict";

import contentObj from "./content.js";

const burgerButton = document.querySelector(".burger__button");
const sideNav = document.querySelector(".sidenav");
const list = document.querySelector(".sidenav__list");
const contentSection = document.querySelector(".content__seciton");

document.addEventListener("DOMContentLoaded", createSidebarList);

function createSidebarList() {
   if (list && burgerButton && contentSection) {
      const listHtml = contentObj
         .map(({ id, styleTitle }) => {
            return `<li>
            <a href="#" class="sidenav__item" 
            id="${id}" > ${styleTitle}
            </a>
            </li>`;
         })
         .join("");

      list.innerHTML = listHtml;

      sideNav.addEventListener("click", handleSidebarItemClick);
   }
}

function handleSidebarItemClick(event) {
   const currentItem = event.target.closest(".sidenav__item");

   if (currentItem) {
      if (!currentItem.classList.contains("active")) {
         const activeItem = this.querySelector(".active");

         if (activeItem) activeItem.classList.remove("active");

         currentItem.classList.add("active");
         const newContent = contentObj.find((el) => el.id === currentItem.id);

         if (newContent) {
            renderContent(newContent);
         }
      }
   }

   burgerButton.click();
}

function renderContent(newContent) {
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
