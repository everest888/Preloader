$(document).ready(function () { 

    let imageCount = $('img').length; // все картинки
    let percentPerImage = 100 / imageCount;// кол-во % на 1 картинке
    let loadedImg = 0; //кол-во загруженных каринок
    let progress = 0; // прогресс процентов в прелоадоре
    let page = $('body');

    page.css('overflow','hidden');

    console.log(imageCount);
    console.log(percentPerImage);

    $('.preloader').circularProgress({
        line_width: 10,
        percent: 0,
        height: "200px",
        width: "200px",
        color: "blue",
    });

    //последовательная обработка загрузки 
    for (let i = 0; i < imageCount; i++) {
        let currentImg = new Image();
        currentImg.onload = loadImg;
        currentImg.onerror = loadImg;
        currentImg.src = document.images[i].src;
    }

    // считает загруженные картинки и выводит обнавленные
    function loadImg() {
        progress = progress + percentPerImage;
        loadedImg++;
        console.log(progress);
        $('.preloader').circularProgress('animate', progress, 300)
        
        if (loadedImg == imageCount || progress > 99) {
            $('.preloader-wrap').delay(600).fadeOut(400, function () {
                page.css('overflow', '');//вернет вертикальный скролл
            });
        }
    }
    

});