document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("weddingEnvelope");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const mainContent = document.getElementById("mainContent");

    // حدث النقر لفتح الظرف والانتقال لصفحات الدعوة المفتوحة
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
        setTimeout(() => {
            envelopeWrapper.classList.add("fade-out");
            
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                mainContent.classList.remove("hidden");
                
                // التوجيه الفوري لبداية المحتوى المفتوح
                window.scrollTo({ top: 0, behavior: "instant" });
                
                // تشغيل المراقب الذكي لحركات الظهور والاختفاء الناعمة فوراً
                initScrollObserver();
            }, 1000);
            
        }, 1200);
    });

    // كود حركة الانتقال السينمائية (Fade-in / Fade-out) التلقائية عند سحب الشاشة
    function initScrollObserver() {
        const sections = document.querySelectorAll('.animate-section');
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.35 // يتم تفعيل وفتح التأثير الفخم عندما يظهر 35% من محتوى الصفحة بداخل الشاشة
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-view');
                } else {
                    // إزالة الكلاس عند الخروج لإعادة توليد الحركة الانسيابية صعوداً ونزولاً كالفيديو تماماً
                    entry.target.classList.remove('active-view');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // برمجة توقيت العداد التنازلي التلقائي لبياناتك الاصلية (31 يوليو 2026 الساعة 8:00 مساءً)
    const weddingDate = new Date("July 31, 2026 20:00:00").getTime();

    const runCountdown = () => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        if (diff < 0) {
            document.querySelector(".countdown-container-square").innerHTML = "<div style='grid-column: span 2; padding:20px; text-align:center; color:#600018; font-family:Cinzel, serif; font-weight:900; font-size:1.3rem;'>THE WEDDING HAS BEGUN 🎉</div>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d < 10 ? "0" + d : d;
        document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
        document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
        document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;
    };

    runCountdown();
    setInterval(runCountdown, 1000);
});
