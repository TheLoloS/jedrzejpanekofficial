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

function toMainContent(e, i) {
    allContentArr[lastAtMainContent].classList.add("toMainOutContent");
    document.querySelector(".toMainOutContent").addEventListener("animationend", () => {
        document.querySelector(".toMainOutContent").classList.contains("toMainOutContent") ? document.querySelector(".toMainOutContent").classList.remove("toMainOutContent") : null;

    })
    c(i)
    allContentArr.forEach((a, b) => {
        (i == b) ? a.classList.add("toMainContent"): a.classList.remove("toMainContent");
        (i == b) ? lastAtMainContent = i: null;
    })
}

btns.forEach((e, i) => {
    e.addEventListener("click", () => {
        toMainContent(e, i)
        hideMenu();
    })
})

// btns[3].addEventListener("click", function przycisk4() {
//     alert("3")
//     document.getElementById("spolecznosci").setAttribute("style", "Display: none;");
//     document.getElementById("first_contant").setAttribute("style", "Display: none;");
//     document.getElementById("mojatworczosc").setAttribute("style", "Display: none;");
//     document.getElementById("contact").setAttribute("style", "Display: block;");


//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("menu").setAttribute("id", "menu_toggled");
//         document.getElementById("transp").setAttribute("class", "transp_toggled");

//     } else {
//         document.getElementById("menu_toggled").setAttribute("id", "menu");
//         document.getElementById("transp").setAttribute("class", "transp");
//     }
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("table_1").setAttribute("id", "table_1_toggled");
//         document.getElementById("table_2").setAttribute("id", "table_2_toggled");
//         document.getElementById("table_3").setAttribute("id", "table_3_toggled");
//     } else {
//         document.getElementById("table_1_toggled").setAttribute("id", "table_1");
//         document.getElementById("table_2_toggled").setAttribute("id", "table_2");
//         document.getElementById("table_3_toggled").setAttribute("id", "table_3");
//     }
// });

// btns[2].addEventListener("click", function przycisk3() {
//     document.getElementById("spolecznosci").setAttribute("style", "Display: block;");
//     document.getElementById("first_contant").setAttribute("style", "Display: none;");
//     document.getElementById("mojatworczosc").setAttribute("style", "Display: none;");
//     document.getElementById("contact").setAttribute("style", "Display: none;");
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("menu").setAttribute("id", "menu_toggled");
//         document.getElementById("transp").setAttribute("class", "transp_toggled");

//     } else {
//         document.getElementById("menu_toggled").setAttribute("id", "menu");
//         document.getElementById("transp").setAttribute("class", "transp");
//     }
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("table_1").setAttribute("id", "table_1_toggled");
//         document.getElementById("table_2").setAttribute("id", "table_2_toggled");
//         document.getElementById("table_3").setAttribute("id", "table_3_toggled");
//     } else {
//         document.getElementById("table_1_toggled").setAttribute("id", "table_1");
//         document.getElementById("table_2_toggled").setAttribute("id", "table_2");
//         document.getElementById("table_3_toggled").setAttribute("id", "table_3");
//     }
// });



// btns[1].addEventListener("click", function przycisk2() {
//     document.getElementById("mojatworczosc").setAttribute("style", "Display: inline-block;");
//     document.getElementById("first_contant").setAttribute("style", "Display: none;");
//     document.getElementById("spolecznosci").setAttribute("style", "Display: none;");
//     document.getElementById("contact").setAttribute("style", "Display: none;");
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("menu").setAttribute("id", "menu_toggled");
//         document.getElementById("transp").setAttribute("class", "transp_toggled");


//     } else {
//         document.getElementById("menu_toggled").setAttribute("id", "menu");
//         document.getElementById("transp").setAttribute("class", "transp");
//     }
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("table_1").setAttribute("id", "table_1_toggled");
//         document.getElementById("table_2").setAttribute("id", "table_2_toggled");
//         document.getElementById("table_3").setAttribute("id", "table_3_toggled");
//     } else {
//         document.getElementById("table_1_toggled").setAttribute("id", "table_1");
//         document.getElementById("table_2_toggled").setAttribute("id", "table_2");
//         document.getElementById("table_3_toggled").setAttribute("id", "table_3");
//     }
// });

// btns[0].addEventListener("click", function przycisk1() {
//     document.getElementById("mojatworczosc").setAttribute("style", "Display: none;");
//     document.getElementById("spolecznosci").setAttribute("style", "Display: none;");
//     document.getElementById("first_contant").setAttribute("style", "Display: ;");
//     document.getElementById("contact").setAttribute("style", "Display: none;");
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("menu").setAttribute("id", "menu_toggled");
//         document.getElementById("transp").setAttribute("class", "transp_toggled");

//     } else {
//         document.getElementById("menu_toggled").setAttribute("id", "menu");
//         document.getElementById("transp").setAttribute("class", "transp");
//     }
//     if (buttonToggle.getAttribute("id") == "table_1") {
//         document.getElementById("table_1").setAttribute("id", "table_1_toggled");
//         document.getElementById("table_2").setAttribute("id", "table_2_toggled");
//         document.getElementById("table_3").setAttribute("id", "table_3_toggled");
//     } else {
//         document.getElementById("table_1_toggled").setAttribute("id", "table_1");
//         document.getElementById("table_2_toggled").setAttribute("id", "table_2");
//         document.getElementById("table_3_toggled").setAttribute("id", "table_3");
//     }
// });