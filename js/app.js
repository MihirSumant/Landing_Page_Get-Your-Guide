window.onload = function () {
  let modalState = false;

  let modal = document.getElementsByClassName("modal")[0];

  let downloadButton = document.getElementsByClassName("download-button")[0];

  let closeButton = document.getElementsByClassName("close-button")[0];

  let getGuideButton = document.getElementsByClassName("get-guide-button")[0];

  let emailInput = document.getElementsByClassName("email-input")[0];

  let invalidEmail = document.getElementsByClassName("invalid-email")[0];

  let guideSent = document.getElementsByClassName("guide-sent")[0];

  let downloadState = false;

  let showModal = () => {
    if (modalState == false) {
      modal.classList.add("modal--visible");
      modalState = true;
    }
  };

  let hideModal = () => {
    modal.classList.remove("modal--visible");
    modalState = false;
  };

  let addErrors = () => {
    emailInput.classList.add("error-highlight");
    invalidEmail.classList.add("invalid-email-show");
  };

  let removeErrors = () => {
    emailInput.classList.remove("error-highlight");
    invalidEmail.classList.remove("invalid-email-show");
  };

  function emailIsValid(email) {
    console.log(email);
    console.log(/\S+@\S+\.\S+/.test(email));
    return /\S+@\S+\.\S+/.test(email);
  }

  let modalReset = () => {
    removeErrors();
    guideSent.classList.remove("guide-sent-show");
    emailInput.value = null;
    getGuideButton.removeAttribute("disabled");
    getGuideButton.classList.remove("button-disabled");
    document
      .getElementsByClassName("button-container")[1]
      .classList.remove("hover-disabled");
  };

  downloadButton.addEventListener("click", () => {
    showModal();
  });

  closeButton.addEventListener("click", () => {
    hideModal();
    if (downloadState == true) {
      modalReset();
      downloadState = false;
    }
  });

  emailInput.addEventListener("click", () => {
    modalReset();
  });

  let handleGuideButtonClick = () => {
    console.log("click");
    if (emailIsValid(emailInput.value)) {
      removeErrors();
      downloadState = true;
      getGuideButton.classList.add("button-disabled");
      getGuideButton.setAttribute("disabled", false);
      document
        .getElementsByClassName("button-container")[1]
        .classList.add("hover-disabled");
      guideSent.classList.add("guide-sent-show");
    } else if (emailInput.value == null) {
      addErrors();
    } else {
      addErrors();
    }
  };

  getGuideButton.addEventListener("click", handleGuideButtonClick);
};
