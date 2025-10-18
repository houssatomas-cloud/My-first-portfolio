document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // 🍔 Menu Burger
  // ==========================
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  const pawContainer = document.querySelector(".paw-prints");

  if (burger && navMenu && pawContainer) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navMenu.classList.toggle("active");

      if (navMenu.classList.contains("active")) {
        pawContainer.innerHTML = "";
        pawContainer.style.opacity = 1;

        for (let i = 0; i < 6; i++) {
          const paw = document.createElement("span");
          paw.textContent = "🐾";
          paw.style.top = `${i * 40}px`;
          paw.style.left = `${i * 35 - (i % 2 === 0 ? 0 : 20)}px`;
          paw.style.transform = i % 2 === 0 ? "rotate(-20deg)" : "rotate(20deg)";
          paw.style.animationDelay = `${i * 0.2}s, ${i * 0.2 + 2}s`;
          pawContainer.appendChild(paw);
        }

        setTimeout(() => {
          pawContainer.style.opacity = 0;
          pawContainer.innerHTML = "";
        }, 5000);
      } else {
        pawContainer.style.opacity = 0;
        pawContainer.innerHTML = "";
      }
    });
  }

  // ==========================
  // 🌙 Night Theme Toggle with Memory
  // ==========================
  const themeToggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "night") {
    document.body.classList.add("night-theme");
    if (themeToggle) themeToggle.textContent = "☀️ Day";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("night-theme");
      const isNight = document.body.classList.contains("night-theme");
      themeToggle.textContent = isNight ? "☀️ Day" : "🌙 Night";
      localStorage.setItem("theme", isNight ? "night" : "day");
    });
  }

  // ==========================
  // 💬 Commission Popup
  // ==========================
  const comsPopup = document.getElementById("ComsPopupW");
  const openComsBtn = document.getElementById("comsPopupOpen");
  const closeComsBtn = document.getElementById("comsPopupClose");

  if (comsPopup && openComsBtn && closeComsBtn) {
    openComsBtn.addEventListener("click", () => {
      comsPopup.style.display = "flex";
    });

    closeComsBtn.addEventListener("click", () => {
      comsPopup.style.display = "none";
    });

    comsPopup.addEventListener("click", (e) => {
      if (e.target === comsPopup) {
        comsPopup.style.display = "none";
      }
    });
  }

  // ==========================
  // 🔗 Social Popup (draggable)
  // ==========================
  const socialPopup = document.getElementById("social-popup");
  const openSocialBtn = document.getElementById("open-popup");
  const closeSocialBtn = document.getElementById("close-popup");
  const popupHeader = document.getElementById("popup-drag");

  if (socialPopup && openSocialBtn && closeSocialBtn) {
    openSocialBtn.addEventListener("click", () => {
      socialPopup.style.display = "block";
    });

    closeSocialBtn.addEventListener("click", () => {
      socialPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === socialPopup) {
        socialPopup.style.display = "none";
      }
    });

    if (popupHeader) {
      let isDragging = false;
      let offsetX, offsetY;

      popupHeader.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - socialPopup.offsetLeft;
        offsetY = e.clientY - socialPopup.offsetTop;
      });

      document.addEventListener("mouseup", () => (isDragging = false));

      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          socialPopup.style.left = e.clientX - offsetX + "px";
          socialPopup.style.top = e.clientY - offsetY + "px";
          socialPopup.style.transform = "none";
          socialPopup.style.position = "absolute";
        }
      });
    }
  }


});
