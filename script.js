document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("weddingEnvelope");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const mainContent = document.getElementById("mainContent");

    // تفعيل حدث فتح غلاف الظرف والانتقال الانسيابي لصفحات الدعوة الممتدة
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
        setTimeout(() => {
            envelopeWrapper.classList.add("fade-out");
            
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                mainContent.classList.remove("hidden");
                
                // التوجيه الفوري لبداية الصفحة الأولى بنعومة تامة وسلاسة
                window.scrollTo({ top: 0, behavior: "instant" });
                
                // تشغيل نظام مراقبة ظهور الأقسام بعد فتح الظرف مباشرة
                startScrollAnimation();
            }, 1000);
            
        }, 1200);
    });

    // كود تحريك الشاشة السينمائي (Fade-in / Fade-out لبيانات كل صفحة عند ظهورها)
    function startScrollAnimation() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // تفعيل التأثير عندما يظهر 20% من كارت الصفحة بداخل الشاشة
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // إزالة الكلاس عند الخروج لإعادة تشغيل الحركة التلقائية الفخمة صعوداً ونزولاً
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // إعداد وقت وتوقيت العداد التنازلي التلقائي (31 يوليو 2026 الساعة 8:00 مساءً)
    const weddingTarget = new Date("July 31, 2026 20:00:00").getTime();

    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const timeLeft = weddingTarget - currentTime;

        if (timeLeft < 0) {
            document.querySelector(".countdown-container-square").innerHTML = "<div style='grid-column: span 2; padding:15px; text-align:center; color:#600018; font-family:Cinzel, serif; font-weight:900; font-size:1.4rem;'>THE WEDDING HAS BEGUN 🎉</div>";
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
