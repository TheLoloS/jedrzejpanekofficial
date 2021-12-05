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
let cursor = document.querySelector("#cursor");

document.body.addEventListener("touchmove", (e)=>{
    console.log(e)
}, false);

//better consol.log func
function c(a) {
    console.log("%c" + a, "color: red; font-size: 4vh")
}

//vh && vw func
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
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
function toMainContentR(e, i) {
    allContentArr[lastAtMainContent].classList.add("toMainOutContent");
    document.querySelector(".toMainOutContent").addEventListener("animationend", () => {
        (document.querySelector(".toMainOutContent")) ? document.querySelector(".toMainOutContent").classList.remove("toMainOutContent") : null;

    })
    //scan all content boxes and toggle classes
    allContentArr.forEach((a, b) => {
        (i == b) ? a.classList.add("toMainContent"): a.classList.remove("toMainContent");
        (a.classList.add("toMainContentL")) || a.classList.remove("toMainContentL");
        (i == b) ? lastAtMainContent = i: null;
        (i == b) ? changedots(b): null;

    })
}
function toMainContentL(e, i) {
    allContentArr[lastAtMainContent].classList.add("toMainOutContentL");
    document.querySelector(".toMainOutContentL").addEventListener("animationend", () => {
        (document.querySelector(".toMainOutContentL")) ? document.querySelector(".toMainOutContentL").classList.remove("toMainOutContentL") : null;

    })
    allContentArr.forEach((a, b) => {
        (i == b) ? a.classList.add("toMainContentL"): a.classList.remove("toMainContentL");
        (a.classList.add("toMainContent")) || a.classList.remove("toMainContent");
        (i == b) ? lastAtMainContent = i: null;
        (i == b) ? changedots(b): null;

    })
}

//add interactive actions to menu
btns.forEach((e, i) => {
    e.addEventListener("click", () => {
        toMainContentR(e, i)
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

//add event on scroll pc
document.body.addEventListener('wheel', (e) => {
    c(e.wheelDelta)
    let selectedDot = document.querySelector(".selectedDot");
    let a = selectedDot.getAttribute("n");
    if (e.wheelDelta > 0) {
        let x;
        ((Number(a) - 1) % 4) == -1 ? x = 3 : x = (Number(a) - 1) % 4;

        changedots(x);
        toMainContentL(selectedDot, x)

    } else {
        let x;
        ((Number(a) + 1) % 4) == 0 ? x = 0 : x = (Number(a) + 1) % 4;
        changedots(x);
        toMainContentR(selectedDot, x)

    }
    // c(a)

});

//TODO:add event on scroll mobile



//When menu is toggled its add click event to transparent element that's toggle off menu.

transp.addEventListener("click", () => {
    menu.classList == "transp_toggled" || hideMenu();
})

//add custom cursor 
let hoverSatus = false;
document.body.addEventListener("mousemove", (event) => {
    !hoverSatus ? cursor.setAttribute("style", `transform: translate(${event.clientX - vh(1.25)}px, ${event.clientY - vh(1.25)}px);`) :
        cursor.setAttribute("style", `transform: translate(${event.clientX - vh(1.25)}px, ${event.clientY - vh(1.25)}px) scale(1.5);`);
})

//add hover effect on elements
let hoverElements = [document.querySelector("#button_menu"), ...document.querySelectorAll("#menu > ul > li")];
hoverElements.map((e) => {
    e.addEventListener("mouseover", () => {
        hoverSatus = true;
    })
    e.addEventListener("mouseout", () => {
        hoverSatus = false;
    })
})