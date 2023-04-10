const FileValidChecker = (img) => {
    console.log(img, 'image')
    if (!img.includes(".jpg") && !img.includes(".png")) {
        return true;
    }
    return false;
}

export default FileValidChecker;