const abrirCarta = document.getElementById("abrirCarta");
const inicio = document.getElementById("inicio");
const site = document.getElementById("site");

abrirCarta.addEventListener("click", () => {

    inicio.classList.add("saindo");

    setTimeout(() => {
        site.classList.remove("escondido");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

    criarCoracoes(15);
});


/* =========================
   POPUP DAS MENSAGENS
========================= */

const botoes = document.querySelectorAll(".botao-coracao");

const popup = document.getElementById("popup");
const mensagemPopup = document.getElementById("mensagemPopup");
const fecharPopup = document.getElementById("fecharPopup");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const mensagem = botao.dataset.mensagem;

        mensagemPopup.textContent = mensagem;

        popup.classList.add("ativo");

        criarCoracoes(8);

    });

});


fecharPopup.addEventListener("click", () => {
    popup.classList.remove("ativo");
});


popup.addEventListener("click", (evento) => {

    if (evento.target === popup) {
        popup.classList.remove("ativo");
    }

});


/* =========================
   BOTÃO FINAL
========================= */

const botaoCoracoes = document.getElementById("coracoes");

botaoCoracoes.addEventListener("click", () => {

    criarCoracoes(80);

});


/* =========================
   CRIAR CORAÇÕES
========================= */

function criarCoracoes(quantidade) {

    const simbolos = ["💙", "💜", "🩵", "♡", "♥"];

    for (let i = 0; i < quantidade; i++) {

        setTimeout(() => {

            const coracao = document.createElement("div");

            coracao.classList.add("coracao-flutuante");

            coracao.textContent =
                simbolos[Math.floor(Math.random() * simbolos.length)];

            coracao.style.left =
                Math.random() * 100 + "vw";

            coracao.style.bottom =
                Math.random() * 30 + "px";

            coracao.style.setProperty(
                "--x",
                (Math.random() * 200 - 100) + "px"
            );

            coracao.style.animationDuration =
                (1.5 + Math.random() * 1.5) + "s";

            document.body.appendChild(coracao);

            setTimeout(() => {
                coracao.remove();
            }, 3500);

        }, i * 50);

    }

}


/* =========================
   PARTÍCULAS NO FUNDO
========================= */

const particles = document.getElementById("particles");

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("div");

    particle.style.position = "fixed";
    particle.style.width = Math.random() * 5 + 2 + "px";
    particle.style.height = particle.style.width;

    particle.style.borderRadius = "50%";

    particle.style.background =
        i % 2 === 0
            ? "#79cbd1"
            : "#a78bda";

    particle.style.opacity =
        Math.random() * .25;

    particle.style.pointerEvents = "none";

    particle.style.zIndex = "0";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animation =
        `flutuar ${5 + Math.random() * 8}s infinite alternate ease-in-out`;

    particles.appendChild(particle);
}


/* =========================
   ANIMAÇÃO DAS PARTÍCULAS
========================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes flutuar {

    from {
        transform: translate(0, 0);
    }

    to {
        transform:
            translate(
                ${Math.random() * 80 - 40}px,
                ${Math.random() * 80 - 40}px
            );
    }

}

`;

document.head.appendChild(style);


/* =========================
   CLICAR EM QUALQUER FOTO
========================= */

const fotos = document.querySelectorAll(".foto-card");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        criarCoracoes(12);

    });

});


/* =========================
   EFEITO DE MOVIMENTO
   NO MOUSE
========================= */

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - .5) * 10;
    const y = (e.clientY / window.innerHeight - .5) * 10;

    const brilho = document.querySelector(".brilho");

    if (brilho) {

        brilho.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});
