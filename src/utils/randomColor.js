export const randomColor = () => {
    const colors = [
        {
            linear : "linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 100%)",
            color : "#FFF9C4"
        },
        {
            linear : "linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)",
            color : "#B3E5FC"
        },
        {
            linear : "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
            color : "#C8E6C9"
        },
        {
            linear : "linear-gradient(135deg, #FFF0F3 0%, #FFD1DC 100%)",
            color : "#FFD1DC"
        },
    ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor
}