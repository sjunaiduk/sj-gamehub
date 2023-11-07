
const CropImage = (url: string) => {
    //https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg

    const target = 'media/'
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + 'crop/600/400/' +  url.slice(index)
}

export default CropImage;