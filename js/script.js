var contactsBtn = document.querySelector(".contacts__btn");
var modalWriteUs = document.querySelector(".modal--write-us");

var mapLink = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal--map");

var searchFormInput = document.querySelector(".search-form__input");
var searchFormBtn = document.querySelector(".search-form__btn");

var dropdownMenu = document.querySelector(".page-header__catalog-dropdown");
var menuItems = dropdownMenu.querySelectorAll(".catalog-menu__link");

var catalogItems = document.querySelectorAll(".catalog__item");

var storageSupported = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  storageSupported = false;
}

if (contactsBtn && modalWriteUs) {
  var modalWriteUsClose = modalWriteUs.querySelector(".modal__close");
  var writeUsForm = modalWriteUs.querySelector(".write-us__form");
  var writeUsName = writeUsForm.querySelector("[name=name]");
  var writeUsEmail = writeUsForm.querySelector("[name=email]");
  var writeUsMessage = writeUsForm.querySelector("[name=message]");

  contactsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal--opened");
    if (storageName) {
      writeUsName.value = storageName;
      if (storageEmail) {
        writeUsEmail.value = storageEmail;
        writeUsMessage.focus();
      } else {
        writeUsEmail.focus();
      }
    } else {
      writeUsName.focus();
    }
  });

  modalWriteUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal--opened");
    modalWriteUs.classList.remove("modal--invalid");
  });

  writeUsForm.addEventListener("submit", function(evt) {
    if (writeUsName.value && writeUsEmail.value && writeUsMessage.value) {
      if (storageSupported) {
        localStorage.setItem("name", writeUsName.value);
        localStorage.setItem("email", writeUsEmail.value);
      }
    } else {
      evt.preventDefault();
      modalWriteUs.classList.remove("modal--invalid");
      modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
      modalWriteUs.classList.add("modal--invalid");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalWriteUs.classList.contains("modal--opened")) {
        modalWriteUs.classList.remove("modal--opened");
        modalWriteUs.classList.remove("modal--invalid");
      }
    }
  });
}

if (mapLink && modalMap) {
  var modalMapClose = modalMap.querySelector(".modal__close");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("modal--opened");
  });

  modalMapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal--opened");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal--opened")) {
        modalMap.classList.remove("modal--opened");
      }
    }
  });
}

searchFormBtn.addEventListener("focus", function (evt) {
  searchFormInput.classList.add("search-form__input--focus");
});
searchFormBtn.addEventListener("blur", function (evt) {
  searchFormInput.classList.remove("search-form__input--focus");
});

[].forEach.call(menuItems, function (menuItem) {
  menuItem.addEventListener("focus", function (evt) {
    dropdownMenu.classList.add("dropdown--hover");
  });
  menuItem.addEventListener("blur", function (evt) {
    dropdownMenu.classList.remove("dropdown--hover");
  });
});

[].forEach.call(catalogItems, function (catalogItem) {
  var catalogCartBtn = catalogItem.querySelector(".catalog__btn");
  var catalogCompareBtn = catalogItem.querySelector(".catalog__compare-btn");

  catalogCartBtn.addEventListener("focus", function (evt) {
    catalogItem.classList.add("catalog__item--hover");
  });
  catalogCompareBtn.addEventListener("focus", function (evt) {
    catalogItem.classList.add("catalog__item--hover");
  });
  catalogCartBtn.addEventListener("blur", function (evt) {
    catalogItem.classList.remove("catalog__item--hover");
  });
  catalogCompareBtn.addEventListener("blur", function (evt) {
    catalogItem.classList.remove("catalog__item--hover");
  });
});
