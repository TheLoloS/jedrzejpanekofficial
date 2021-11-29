//variable that store status od menu
let toggledMenu = false;

//add DOM elements to vaiables
let menuBtn = document.querySelector(".button_menu");
let buttonToggle = document.querySelectorAll(".button_menu_table");
let btns = document.querySelectorAll(".btn_menu");
let transp = document.getElementById("transp");
let menu = document.getElementById("menu");
let allContentArr = [document.getElementById("first_contant"), document.getElementById("mojatworczosc"), document.getElementById("spolecznosci"), document.getElementById("contact")]
let lastAtMainContent = 0;

function c(a) {
    console.log("%c" + a, "color: red; font-size: 4vh")
}

allContentArr[0].classList.add("toMainContent");

// add onclick to menu-show/hide button
menuBtn.addEventListener("click", () => {
    toggledMenu ? hideMenu() : showMenu();
})

//show blur effect when open menu
function showBlurEffect(a) {
    a ? transp.className = "transp" : transp.className = "transp_toggled";
}

//func that show menu
function showMenu() {
    menu.className = "menuToggled";
    showBlurEffect(false);
    console.log("showMenu")
    if (!toggledMenu) {
        buttonToggle.forEach((e, i) => {
            e.classList.add(`table_${i+1}`);
        })
        toggledMenu = !toggledMenu;
    };
};

//func that hide menu
function hideMenu() {
    menu.className = "menu";
    showBlurEffect(true)

    if (toggledMenu) {
        buttonToggle.forEach((e, i) => {
            e.classList.remove(`table_${i+1}`);
        })
    }
    toggledMenu = !toggledMenu;
};

//func that change main content 
function toMainContent(e, i) {
    allContentArr[lastAtMainContent].classList.add("toMainOutContent");
    document.querySelector(".toMainOutContent").addEventListener("animationend", () => {
        document.querySelector(".toMainOutContent").classList.contains("toMainOutContent") ? document.querySelector(".toMainOutContent").classList.remove("toMainOutContent") : null;

    })
    c(i)
    allContentArr.forEach((a, b) => {
        (i == b) ? a.classList.add("toMainContent"): a.classList.remove("toMainContent");
        (i == b) ? lastAtMainContent = i: null;
        (i == b) ? changedots(b): null;

    })
}

//add interactive actions to menu
btns.forEach((e, i) => {
    e.addEventListener("click", () => {
        toMainContent(e, i)
        hideMenu();
    })
})

//script for change info dots

function changedots(num) {
    let selectDot = document.querySelector(`#list > div:nth-child(${num+1})`);
    let allDots = document.querySelectorAll("#list > div");
    [...allDots].map((e, i) => {
        try {
            e.classList.remove("selectedDot");
        } catch (err) {
            c(err)
        }
    })
    selectDot.classList.add("selectedDot");
}
document.body.addEventListener('wheel', (e) => {

    let selectedDot = document.querySelector(".selectedDot");
    let a = selectedDot.getAttribute("n");
    if (e.wheelDelta > 0) {
        changedots((Number(a) - 1) % 4);
        toMainContent(selectedDot, (Number(a) - 1) % 4)
    } else {
        let x;
        ((Number(a) + 1) % 4) == 0 ? x = 1 : x = (Number(a) + 1) % 4;
        changedots(x);
        toMainContent(selectedDot, (Number(a) + 1) % 4)
    }
    c(a)

});