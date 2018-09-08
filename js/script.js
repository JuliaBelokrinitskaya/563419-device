var contactsBtn = document.querySelector(".contacts__btn");
var modalWriteUs = document.querySelector(".modal--write-us");
var modalWriteUsClose = modalWriteUs.querySelector(".modal__close");
var writeUsForm = modalWriteUs.querySelector(".write-us__form");
var writeUsName = writeUsForm.querySelector("[name=name]");
var writeUsEmail = writeUsForm.querySelector("[name=email]");
var writeUsMessage = writeUsForm.querySelector("[name=message]");
var mapLink = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal--map");
var modalMapClose = modalMap.querySelector(".modal__close");

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
