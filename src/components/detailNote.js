export const detailNote = (data, color, rotate) => {
    return `
        <div class="detail-note-cont">
            <div 
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
                <div class="close-note" onclick="closeDetail()">X</div>
            </div>
        </div>
    `
}