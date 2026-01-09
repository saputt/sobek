export const StickyNote = (data, color, rotate) => {
    return `
        <div 
            class="sticky-note"
            style="background: ${color.linear}; rotate: ${rotate}deg"
            onclick="openDetail('${data.id}','${color.color}', '${rotate}')"
        >
            <div class="tape"></div>
            <div class="sticky-note-info">
                <h3 class="sticky-note-title">${data.title}</h3>
                <p class="sticky-note-username">${data.username}</p>
                <p class="sticky-note-content">${data.content}</p>
            </div>
        </div>
    `
}
