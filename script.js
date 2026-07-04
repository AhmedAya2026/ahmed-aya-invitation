document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("weddingEnvelope");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const mainContent = document.getElementById("mainContent");

    // حدث النقر لفتح الظرف والانتقال للمحتوى الأساسي مثل الفيديو
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
        // الانتظار حتى تكتمل حركة خروج الكارت الصغير ثم اخفاء الواجهة وظهور الدعوة بالكامل
        setTimeout(() => {
            envelopeWrapper.classList.add("fade-out");
            
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                mainContent.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 1000);
            
        }, 1200);
    });

    // كود العداد التنازلي التلقائي لميعاد الفرح المحدد 31 يوليو 2026 الساعة 8:00 مساءً (20:00)
    const weddingTarget = new Date("July 31, 2026 20:00:00").getTime();

    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const timeLeft = weddingTarget - currentTime;

        if (timeLeft < 0) {
            document.querySelector(".countdown-container").innerHTML = "<div style='width:100%; padding:20px; text-align:center; color:#b08d57; font-family:Cinzel, serif;'>THE WEDDING HAS BEGUN 🎉</div>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    };

    // تحديث فوري وتشغيل التكرار كل ثانية واحدة
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
