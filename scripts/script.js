//check kind of device
window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const mobileStatus = window.mobileAndTabletCheck();

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
  document.getElementById("mojatworczosc"),
  document.getElementById("spolecznosci"),
  document.getElementById("contact"),
];
let lastAtMainContent = 0;
let cursor = document.querySelector("#cursor");
let texts = [
  "Autor: Piotr TheLoloS Sałaga 2020. Wykonał dla Jędrzej Panek. Wszystkie prawa zastrzeżone ©",
];
const el = cursor.cloneNode(true);
let hoverSatus = false;
let fotterParent = document.querySelector(".fotter");
let fotter = document.querySelector(".fotter > p");
let hoverElements = [
  document.querySelector("#button_menu"),
  ...document.querySelectorAll("#menu > ul > li"),
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

// iframe cursot bugfix
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
      !hoverSatus
        ? cursor.setAttribute(
            "style",
            `transform: translate(${event.clientX - vh(1.25)}px, ${
              event.clientY - vh(1.25)
            }px);`
          )
        : cursor.setAttribute(
            "style",
            `transform: translate(${event.clientX - vh(1.25)}px, ${
              event.clientY - vh(1.25)
            }px) scale(1.5);`
          );
    })
  : (cursor.style.display = "none");

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
  : null;

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
