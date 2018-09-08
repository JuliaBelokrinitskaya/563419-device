var contactsBtn = document.querySelector(".contacts__btn");
var modalWriteUs = document.querySelector(".modal--write-us");
var modalWriteUsClose = modalWriteUs.querySelector(".modal__close");
var mapLink = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal--map");
var modalMapClose = modalMap.querySelector(".modal__close");

if (contactsBtn && modalWriteUs) {
  contactsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal--opened");
    // if (storageName) {
    //   writeUsName.value = storageName;
    //   if (storageEmail) {
    //     writeUsEmail.value = storageEmail;
    //     writeUsMessage.focus();
    //   } else {
    //     writeUsEmail.focus();
    //   };
    // } else {
    //   writeUsName.focus();
    // };
  });
};

if (mapLink && modalMap) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("modal--opened");
  });
};

if (modalWriteUsClose && modalWriteUs) {
  modalWriteUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal--opened");
    // modalWriteUs.classList.remove("modal-invalid");
  });
};

if (modalMapClose && modalMap) {
  modalMapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal--opened");
  });
};
