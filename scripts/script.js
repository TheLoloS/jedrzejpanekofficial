//variable that store status od menu
let toggledMenu = false;

//add DOM elements to vaiables
let menuBtn = document.querySelector(".button_menu");
let buttonToggle = document.querySelectorAll(".button_menu_table");
let btns = document.querySelectorAll(".btn_menu");
let transp = document.getElementById("transp");
let menu = document.getElementById("menu");
let allContentArr = [
  document.getElementById("first_contant"),
  document.getElementById("examples"),
  document.getElementById("social"),
  document.getElementById("contact"),
];
let lastAtMainContent = 0;
let cursor = document.querySelector("#cursor");
let texts = [
  "Autor: Piotr TheLoloS Sałaga 2020. Wszystkie prawa zastrzeżone ©",
];
const el = cursor.cloneNode(true);
let hoverSatus = false;
let fotterParent = document.querySelector(".fotter");
let fotter = document.querySelector(".fotter > p");
let hoverElements = [
  document.querySelector("#button_menu"),
  ...document.querySelectorAll("#menu > ul > li"),
  document.querySelector("#text_1"),
  document.querySelector("#text_2"),
  document.querySelector("#text_3"),
  document.querySelector("#form_btn"),
  document.querySelector("#examples > p > a"),
];
const mailBtn = document.querySelector("#form_btn");
//better consol.log func
function c(a) {
  console.log("%c" + a, "color: red; font-size: 4vh");
}

//vh && vw func
function vh(v) {
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function vw(v) {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

allContentArr[0].classList.add("toMainContent");

// add onclick to menu-show/hide button
menuBtn.addEventListener("click", () => {
  toggledMenu ? hideMenu() : showMenu();
});

//show blur effect when open menu
function showBlurEffect(a) {
  a ? (transp.className = "transp") : (transp.className = "transp_toggled");
}

//func that show menu
function showMenu() {
  menu.className = "menuToggled";
  showBlurEffect(false);
  if (!toggledMenu) {
    buttonToggle.forEach((e, i) => {
      e.classList.add(`table_${i + 1}`);
    });
    toggledMenu = !toggledMenu;
  }
}

//func that hide menu
function hideMenu() {
  menu.className = "menu";
  showBlurEffect(true);

  if (toggledMenu) {
    buttonToggle.forEach((e, i) => {
      e.classList.remove(`table_${i + 1}`);
    });
  }
  toggledMenu = !toggledMenu;
}

//func that change main content
function toMainContentR(e, i) {
  allContentArr[lastAtMainContent].classList.add("toMainOutContent");
  document
    .querySelector(".toMainOutContent")
    .addEventListener("animationend", () => {
      document.querySelector(".toMainOutContent")
        ? document
            .querySelector(".toMainOutContent")
            .classList.remove("toMainOutContent")
        : null;
    });
  //scan all content boxes and toggle classes
  allContentArr.forEach((a, b) => {
    i == b
      ? a.classList.add("toMainContent")
      : a.classList.remove("toMainContent");
    a.classList.add("toMainContentL") || a.classList.remove("toMainContentL");
    i == b ? (lastAtMainContent = i) : null;
    i == b ? changedots(b) : null;
  });
}
function toMainContentL(e, i) {
  allContentArr[lastAtMainContent].classList.add("toMainOutContentL");
  document
    .querySelector(".toMainOutContentL")
    .addEventListener("animationend", () => {
      document.querySelector(".toMainOutContentL")
        ? document
            .querySelector(".toMainOutContentL")
            .classList.remove("toMainOutContentL")
        : null;
    });
  allContentArr.forEach((a, b) => {
    i == b
      ? a.classList.add("toMainContentL")
      : a.classList.remove("toMainContentL");
    a.classList.add("toMainContent") || a.classList.remove("toMainContent");
    i == b ? (lastAtMainContent = i) : null;
    i == b ? changedots(b) : null;
  });
}

//add interactive actions to menu
btns.forEach((e, i) => {
  e.addEventListener("click", () => {
    toMainContentR(e, i);
    hideMenu();
  });
});

//script for change info dots

function changedots(num) {
  let selectDot = document.querySelector(`#list > div:nth-child(${num + 1})`);
  let allDots = document.querySelectorAll("#list > div");
  [...allDots].map((e, i) => {
    try {
      e.classList.remove("selectedDot");
    } catch (err) {
      console.warn(err);
    }
  });
  selectDot.classList.add("selectedDot");
}

//add event on scroll pc
document.body.addEventListener("wheel", (e) => {
  let selectedDot = document.querySelector(".selectedDot");
  let a = selectedDot.getAttribute("n");
  if (e.wheelDelta > 0) {
    let x;
    (Number(a) - 1) % 4 == -1 ? (x = 3) : (x = (Number(a) - 1) % 4);

    changedots(x);
    toMainContentL(selectedDot, x);
  } else {
    let x;
    (Number(a) + 1) % 4 == 0 ? (x = 0) : (x = (Number(a) + 1) % 4);
    changedots(x);
    toMainContentR(selectedDot, x);
  }
});

//When menu is toggled its add click event to transparent element that's toggle off menu.

transp.addEventListener("click", () => {
  menu.classList == "transp_toggled" || hideMenu();
});

// iframe cursor bugfix
[...document.querySelectorAll("iframe")].forEach((e, i) => {
  e.addEventListener("mouseenter", () => {
    cursor.remove();
  });
  e.addEventListener("mouseout", () => {
    cursor = el;
    document.querySelector(".background").appendChild(cursor);
  });
});

//add custom cursor && check mobile
!mobileStatus
  ? window.addEventListener("mousemove", (event) => {
      cursor.setAttribute(
        "style",
        `transform: translate(${event.clientX - vh(1.25)}px, ${
          event.clientY - vh(1.25)
        }px);`
      );
    })
  : (cursor.style.display = "none");
//add click event
window.addEventListener("click", clickEffect);

function clickEffect(e) {
  let d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.querySelector(".background").appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}

//add fotter hideing animation for mobile

mobileStatus
  ? fotterParent.addEventListener("click", () => {
      fotter.textContent = texts[0];
      fotterParent.classList.add("fotterShow");
      setTimeout(() => {
        fotterParent.classList.remove("fotterShow");
        fotterParent.classList.add("fotterHide");
        setTimeout(() => {
          fotter.textContent = "ℹ";
          fotterParent.classList.remove("fotterHide");
        }, 1000);
      }, 3000);
    })
  : (fotter.textContent = texts[0]);

//add slide effeckt on mobile
document.body.addEventListener("touchstart", handleTouchStart, false);
document.body.addEventListener("touchmove", handleTouchMove, false);

//on mobile slide with toutch event
function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  //condition that check is toutch move isn't perfect
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      let selectedDot = document.querySelector(".selectedDot");
      let a = selectedDot.getAttribute("n");
      let x;
      (Number(a) + 1) % 4 == 0 ? (x = 0) : (x = (Number(a) + 1) % 4);
      changedots(x);
      toMainContentR(selectedDot, x);
    } else {
      let selectedDot = document.querySelector(".selectedDot");
      let a = selectedDot.getAttribute("n");
      let x;
      (Number(a) - 1) % 4 == -1 ? (x = 3) : (x = (Number(a) - 1) % 4);

      changedots(x);
      toMainContentL(selectedDot, x);
    }
  }
  xDown = null;
  yDown = null;
}

//add hover effect on elements

hoverElements.map((e) => {
  e.addEventListener("mouseover", () => {
    hoverSatus = true;
  });
  e.addEventListener("mouseout", () => {
    hoverSatus = false;
  });
});

//mail send

mailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = "thelolos3031@gmail.com";
  const title = document.querySelector("#text_2").value;
  const content = document.querySelector("#text_3").value;
  window.open(`mailto:${email}?subject=${title}&body=${content}`);
});
