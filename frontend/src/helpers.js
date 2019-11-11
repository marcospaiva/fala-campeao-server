
const shareFB = {
    url: "https://facebook.com/sharer/sharer.php",
    param: "u"
}

const shareTW = {
    url: "https://twitter.com/share",
    param: {
        url: "",
        text: "",
        hashtags: "",
        via: "",
        related: "",
        in_reply_to: "",
    }
}

const shareWA = {
    url: "whatsapp://send",
    param: "text"
}

export { shareFB, shareTW, shareWA };