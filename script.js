// Inizializza AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Movimento Cursore e Luce Sfondo
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // Sposta Cursore
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1
    });

    // Sposta Luce Sfondo
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

// Effetto Hover sui link
document.querySelectorAll('a, .project-card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 3, backgroundColor: "rgba(0, 210, 255, 0.1)", border: "none" });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "transparent", border: "2px solid var(--accent)" });
    });
});// Funzione facoltativa per inviare a WhatsApp
const quizForm = document.getElementById('quiz-form');

// Se vuoi che invii a WA invece che email, sblocca questo codice:
/*
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    const nome = formData.get('nome');
    const settore = formData.get('settore');
    const msg = formData.get('messaggio');
    
    const testoWA = `Ciao Samuele! Mi chiamo ${nome}. Ho un'attività nel settore ${settore} e vorrei un preventivo. Idea: ${msg}`;
    window.open(`https://wa.me/39TUONUMERO?text=${encodeURIComponent(testoWA)}`, '_blank');
});
*/window.addEventListener('load', () => {
    gsap.to("#loader", { opacity: 0, duration: 0.5, onComplete: () => {
        document.getElementById("loader").style.display = "none";
    }});
});