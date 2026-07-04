document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("weddingEnvelope");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const mainContent = document.getElementById("mainContent");

    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
        setTimeout(() => {
            envelopeWrapper.classList.add("fade-out");
            
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                mainContent.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 1000);
            
        }, 1200);
    });

    const weddingTarget = new Date("July 31, 2026 20:00:00").getTime();

    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const timeLeft = weddingTarget - currentTime;

        if (timeLeft < 0) {
            document.querySelector(".countdown-container").innerHTML = "<div style='width:100%; padding:20px; text-align:center; color:#600018; font-family:Cinzel, serif; font-weight:700; font-size:1.4rem;'>THE WEDDING HAS BEGUN 🎉</div>";
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

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
