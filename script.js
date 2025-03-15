const tabs = document.querySelectorAll("[data-tabs]");
const tabClicker = document.querySelectorAll("[data-tabClicker]");
(function getItems() {
  tabClicker.forEach((items) => {
    items.addEventListener("click", (e) => {
      receiveItemsID(items.id);
      items.querySelector("[data-select]").classList.remove("after:bg-none");
      items.querySelector("[data-select]").classList.add("after:bg-softRed");
      tabClicker.forEach((items2) => {
        if (items !== items2) {
          items2.querySelector("[data-select]").classList.add("after:bg-none");
          items2
            .querySelector("[data-select]")
            .classList.remove("after:bg-softRed");
        }
      });
    });
  });
})();

function receiveItemsID(itemsID) {
  tabs.forEach((elems) => {
    if (itemsID === elems.id) {
      elems.classList.remove("hidden");
    } else {
      elems.classList.add("hidden");
    }
  });
}
