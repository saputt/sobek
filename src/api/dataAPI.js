export const fetchSticky = async () => {
    const res = await fetch("https://pabcl.codelabspace.or.id/social-posts", {
        method : "GET"
    })
    return res.json()
}