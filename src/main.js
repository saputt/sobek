import { fetchSticky } from "./api/dataAPI.js"
import { StickyNote } from "./components/stickyNote.js"
import { detailNote } from "./components/detailNote.js"
import { shuffle } from "./utils/shuffle.js"
import { createNote } from "./components/createNote.js"
import { randomColor } from "./utils/randomColor.js"
import { playSound } from "./utils/playSound.js"
import { randomRotate } from "./utils/randomRotate.js"
import { aboutUs } from "./components/aboutUs.js"
import { scrollToTop } from "./utils/scrollToTop.js"

const detail = document.querySelector(".detail")
const navCreate = document.querySelector(".nav-create")
const stickyBoardCont = document.querySelector(".sticky-board-cont")
const form = document.querySelector('#form-note')
const filterCont = document.querySelector('.filter-cont')
const mansoryCont = document.querySelector('.mansory-cont')

let earlyPost = []
let allPost = []



const renderSticky = (data) => {
    mansoryCont.innerHTML = data.map(note => {
        const color = randomColor()
        const rotate = randomRotate(2, -2)
        return StickyNote(note, color, rotate)
    }).join("")
    scrollToTop()
}

const init = async () => {
    earlyPost = await fetchSticky()
    allPost = shuffle(earlyPost.data)
    renderSticky(allPost)
}

const openDetail = (id, color, rotate) => {
    playSound("scrol.mp3")
    const randomLike = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    const noteDetail = allPost?.find(note => note.id === id)
    detail.innerHTML = detailNote(noteDetail, color, rotate, randomLike)
}

const openCreate = () => {
    const color = randomColor()
    detail.innerHTML = createNote(color)
}

const openAboutUs = () => {
    detail.innerHTML = aboutUs()
}

const closeDetail = () => {
    playSound("teat.mp3")
    detail.innerHTML = ""
    init()
}

const closeCreate = () => {
    playSound("teat.mp3")
    detail.innerHTML = ""
    init()
}

const playWrite = () => {
    playSound("write.mp3")
}

const saveNote = async () => {
    const title = document.querySelector('.create-note-title-input');
    const username = document.querySelector('.create-note-username-input');
    const content = document.querySelector('.create-note-content-input');
    const boardAlert = document.querySelector('#board-alert-id')

    if (title.value === '' && username.value === '' && content.value === '') {
        boardAlert.classList.remove("board-alert-hidd")
        boardAlert.classList.add("board-alert")
        boardAlert.textContent = "Please fill all the form"
        return
    }

    if (title.value === '') {
        boardAlert.classList.remove("board-alert-hidd")
        boardAlert.classList.add("board-alert")
        boardAlert.textContent = "Please fill a title"
        return
    }

    if (username.value === '') {
        boardAlert.classList.remove("board-alert-hidd")
        boardAlert.classList.add("board-alert")
        boardAlert.textContent = "Please fill a username"
        return
    }

    if (content.value === '') {
        boardAlert.classList.remove("board-alert-hidd")
        boardAlert.classList.add("board-alert")
        boardAlert.textContent = "Please fill a content"
        return
    }

    const dataNote = {
        title: title.value,
        username: username.value,
        content: content.value,
    };

    try {
        const response = await fetch('https://pabcl.codelabspace.or.id/social-posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataNote)
        });

        const result = await response.json();

        console.log(result)

        if (result.success === true) {
            closeCreate();
        }
    } catch (error) {
        console.error('Gagal kirim data:', error);
    }
}

const loveCLick = (likess) => {
    const currentLike = likess
    const svg = document.querySelector('.svgHeart');
    const likes = document.querySelector('#like-num');
    if (!likes.classList.contains("is-active")) {
        likes.classList.add("is-active");
        likess = likess + 1;
    } else {
        likes.classList.remove("is-active");
        likess = currentLike;
    }
    likes.textContent = likess;
    const isActive = svg.getAttribute('fill') === '#F06292';
    svg.setAttribute('fill', isActive ? 'none' : '#F06292');
    svg.setAttribute('stroke', isActive ? 'black' : '#F06292');
};

const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-active');


    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.onclick = toggleSidebar;
        document.body.appendChild(overlay);
    }

    overlay.classList.toggle('active');
};

window.onload = () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1000);
};

const handleInput = element => {
    playWrite()
    const boardAlert = document.querySelector('#board-alert-id')
    const currentLength = element.value.length;
    console.log(currentLength)
    const maxLength = element.getAttribute('maxlength');

    if (currentLength >= maxLength) {
        element.style.textDecoration = "line-through";
        element.style.color = "#c04f4fff";
        element.style.fontWeight = "bold";
        boardAlert.classList.add("board-alert")
        boardAlert.classList.remove("board-alert-hidd")
        boardAlert.textContent = "Char to long"
    } else if (currentLength >= maxLength * 0.8) {
        element.style.color = "#ffa500";
    } else {
        element.style.color = "#2c352e";
        boardAlert.classList.add("board-alert-hidd")
        element.style.textDecoration = "none";
        element.style.fontWeight = "normal";
    }
}

window.handleInput = handleInput
document.addEventListener("DOMContentLoaded", init)
window.openDetail = openDetail
window.openCreate = openCreate
window.closeDetail = closeDetail
window.saveNote = saveNote;
window.loveClick = loveCLick;
window.playWrite = playWrite;
window.openAboutUs = openAboutUs;
window.toggleSidebar = toggleSidebar;
