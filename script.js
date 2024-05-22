// Пример простого JavaScript-кода для демонстрации
document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт загружен и готов к работе");
});
// JavaScript для галереи
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
