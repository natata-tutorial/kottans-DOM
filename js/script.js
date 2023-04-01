"use strict";

import contentObj from "./content.js";

document.addEventListener("DOMContentLoaded", generateSidebarList);

function generateSidebarList() {
   const sideNav = document.querySelector(".sidenav");
   const list = document.createElement("ul");
   list.classList.add("sidenav__list");
   const listHtml = contentObj
      .map((item) => {
         return `<li>
         <a href="#" class="sidenav__item" 
         id="${item.id}" > ${item.styleTitle}
         </a>
         </li>`;
      })
      .join("");
   list.innerHTML = listHtml;
   sideNav.append(list);
   sideNav.addEventListener("click", changeContentItem);
}

function changeContentItem(event) {
   const burgerButton = document.querySelector(".burger__button");
   const sideNavList = document.querySelector(".sidenav__list");
   if (event.target.closest(".sidenav__item")) {
      const currentItem = event.target.closest(".sidenav__item");
      if (!currentItem.classList.contains("active")) {
         const activeItem = sideNavList.querySelector(".active");
         if (activeItem) activeItem.classList.remove("active");
         currentItem.classList.add("active");
         renderContent(currentItem.id);
      }
      event.preventDefault();
      burgerButton.click();
   }
}

function renderContent(contentId) {

   const newContent = contentObj.find(el => el.id === contentId);
   const contentSection = document.querySelector(".content__seciton");

   contentSection.innerHTML = `
      <h2 class="content__title">${newContent.styleTitle}</h2>
      <img
         class="content__picture"
         src="${newContent.stylePicture}"
         />
      <div class="content__text">
      ${newContent.styleDescription}
      </div>`;

}
