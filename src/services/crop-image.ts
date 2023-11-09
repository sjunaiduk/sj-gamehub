
const CropImage = (url: string) => {
    //https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg
    if (!url) return "https://www.scotsman.com/webimg/b25lY21zOjA0NDEwNDNjLWUwYzktNGU5Yi05ZGYwLWFkNzk5MjliYWM1NTpkYzRlM2UyZi1mMTI1LTRkNmQtYTcxOC0zYjJlNDcwMTE5Nzc=.jpg?width=1200&enable=upscale";
    const target = 'media/'
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + 'crop/600/400/' +  url.slice(index)
}

export default CropImage;