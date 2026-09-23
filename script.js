/* Địa chỉ website mà mã QR sẽ mở. Nếu đổi tên repository, sửa dòng này. */
const QR_URL = "https://duonghaiau271106-sketch.github.io/QR-THANH-TIEN/";

function createQR() {
    new QRCode(document.getElementById("qrcode"), {
        text: QR_URL,
        width: 190,
        height: 190,
        colorDark: "#111827",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function startExperience() {
    document.getElementById("qrScreen").style.display = "none";
    document.getElementById("experience").style.display = "block";

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape").catch(function () {});
    }

    setTimeout(function () {
        document.getElementById("loveScene").style.display = "none";
        document.getElementById("moonScene").style.display = "none";
        const end = document.getElementById("endScene");
        end.style.visibility = "visible";
        end.style.opacity = "1";
    }, 15000);
}

function isPhone() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.addEventListener("load", function () {
    createQR();

    if (isPhone()) {
        startExperience();
        return;
    }

    /* Test trên máy tính bằng cách thêm ?play vào cuối link. */
    if (window.location.search.indexOf("play") !== -1) {
        startExperience();
    }
});
