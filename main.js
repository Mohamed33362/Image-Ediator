let staurate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayScale = document.getElementById("grayscale")
let bluR = document.getElementById("blur")
let hueRotate = document.getElementById("hue-rotate")
let download= document.getElementById("download")
let upload = document.getElementById("upload")
let img = document.getElementById("img")
let imgBox = document.querySelector(".img-box")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d",)

function resetValue() {
    img.style.filter = "none"
    staurate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "100";
    grayScale.value = "0"
    bluR.value = "0"
    hueRotate.value = "0"
}

window.onload = function () {
    reset.style.display = "none"
    download.style.display = "none"
    imgBox.style.display = "none"
}
upload.onchange = function () {
    resetValue()
        reset.style.display = "block"
    download.style.display = "block"
    imgBox.style.display = "block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result
    }
    img.onload = function () {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = "none"
    }
}
let filters = document.querySelectorAll("ul li input")
filters.forEach( filter => {
    filter.addEventListener("input",()=>{
        ctx.filter = `
        saturate(${staurate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayScale.value})
        blur(${bluR.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
})

download.onclick = function () {
    download.href = canvas.toDataURL()
}