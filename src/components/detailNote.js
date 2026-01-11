export const detailNote = (data, color, rotate, randomLike) => {
    return `
        <section class="detail-note-cont">
            <article
                class="detail-note"
                style="background-color : ${color}; rotate : ${rotate}deg"
            >   
                <div class="binder-clip"></div>
                <div class="detail-info">
                    <h1 class="detail-note-title">${data.title}</h1>
                    <p class="detail-note-username">${data.username}</p>
                    <div class="detail-note-content-cont">
                        <p class="detail-note-content">${data.content}</p>
                    </div>
                </div>
                <div class="loveCont">
                    <svg class="svgHeart" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" style="cursor:pointer"  onClick="loveClick(${randomLike})">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span id="like-num">${randomLike}</span>
                </div>
                <div class="close-note" onclick="closeDetail()">X</div>
            </article>
        </section>
    `
}