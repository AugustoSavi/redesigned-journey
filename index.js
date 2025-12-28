
let qrcode = null;
let selectTab = null;
let isMobile = window.innerWidth <= 768;

// Dados
const TELEFONE = "5548996651185";
const MENSAGEM_CONFIRMACAO = "Olá, Confirmo minha presença no casamento!";
const MESSAGE_NEGATIVA = "Olá, Infelizmente não poderei comparecer ao casamento, mas desejo toda a felicidade ao casal!";

const gifts = [
    {
        name: "Tigrinho, só que nesse caso só é bom para os noivos",
        image: "public/fortune-tiger.png",
        price: 250,
        livre: false,
        aleatorio: true,
        description: "Teste sua sorte pegando um valor aleatório entre 50 e 250! 🍀🐯"
    },
        {
        name: "Tapete para Sala",
        image: "public/home.jpeg",
        price: 59,
        livre: false,
        aleatorio: false,
        description: "Conforto e estilo para o dia a dia 🏡"
    },
    {
        name: "Almofadas Personalizadas",
        image: "public/almofada.jpeg",
        price: 122,
        livre: false,
        aleatorio: false,
        description: "Porque até o sofá merece carinho 🛋️"
    },
    {
        name: "Cota viagem para o Mexico",
        image: "https://images.unsplash.com/photo-1640130958318-7e9ae39bcf6f",
        price: 149,
        livre: false,
        aleatorio: false,
        description: "Essa contribuição vai direto para a lua de mel dos noivos no México 🌴🇲🇽"
    },
    {
        name: "Vinhos para Adega",
        image: "https://images.unsplash.com/photo-1562601579-599dec564e06",
        price: 137,
        livre: false,
        aleatorio: false,
        description: "Para começar a adega dos sonhos e brindar muitas conquistas 🍷"
    },
    {
        name: "Passeio de Barco",
        image: "https://plus.unsplash.com/premium_photo-1661864602947-f5ed38119403",
        price: 199,
        livre: false,
        aleatorio: false,
        description: "Um passeio inesquecível para criar memórias a dois 🌊"
    },
    {
        name: "Diária no Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        price: 289,
        livre: false,
        aleatorio: false,
        description: "Uma pausa merecida em algum lugar especial 🏨✨"
    },
    {
        name: "Café da Manhã na Cama",
        image: "https://images.unsplash.com/photo-1675125530909-15213f01a9e1",
        price: 119,
        livre: false,
        aleatorio: false,
        description: "Porque acordar bem acompanhado e com café é outro nível ☕❤️"
    },
    {
        name: "Massagem para Casal",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
        price: 276,
        livre: false,
        aleatorio: false,
        description: "Relaxar juntos depois da correria do casamento 💆‍♂️💆‍♀️"
    },
    {
        name: "Kit Casa Nova",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd",
        price: 180,
        livre: false,
        aleatorio: false,
        description: "Ajuda essencial para deixar a casa com cara de lar 🏡"
    },
    {
        name: "Jogo de Panelas",
        image: "https://images.unsplash.com/photo-1587741011081-d85296fa2b2b",
        price: 397,
        livre: false,
        aleatorio: false,
        description: "Para as receitas que ainda vão dar muito certo… e as que não 😅🍳"
    },
    {
        name: "Máquina de Café",
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
        price: 278,
        livre: false,
        aleatorio: false,
        description: "Combustível oficial do casal ☕⚡"
    },
    {
        name: "Conjunto de Toalhas",
        image: "https://images.unsplash.com/photo-1523471826770-c437b4636fe6",
        price: 168,
        livre: false,
        aleatorio: false,
        description: "Toalhas novas para uma nova fase 🛁"
    },
    {
        name: "Roupa de Cama",
        image: "https://images.unsplash.com/photo-1564019472231-4586c552dc27",
        price: 219,
        livre: false,
        aleatorio: false,
        description: "Conforto garantido para boas noites de sono 😴"
    },
    {
        name: "Aparelho de Jantar",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1",
        price: 337,
        livre: false,
        aleatorio: false,
        description: "Para receber amigos e família em grande estilo 🍽️"
    },
    {
        name: "Faqueiro Inox",
        image: "https://images.unsplash.com/photo-1584269600519-112d071b35e6",
        price: 198,
        livre: false,
        aleatorio: false,
        description: "Porque comer bem começa pelos detalhes ✨"
    },
    {
        name: "Aspirador",
        image: "https://plus.unsplash.com/premium_photo-1729006559482-d289e4385b1e",
        price: 222,
        livre: false,
        aleatorio: false,
        description: "Limpeza mais rápida, mais tempo juntos 🤖"
    },
    {
        name: "Kit Churrasco",
        image: "https://images.unsplash.com/photo-1504564321107-4aa3efddb5bd",
        price: 334,
        livre: false,
        aleatorio: false,
        description: "Churrasco liberado na casa nova 🔥🥩"
    },
    {
        name: "Adega de Vinhos",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
        price: 443,
        livre: false,
        aleatorio: false,
        description: "Para guardar vinhos… se resistirem a beber antes 🍷"
    },
    {
        name: "Decoração para Sala",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        price: 249,
        livre: false,
        aleatorio: false,
        description: "Deixar o cantinho do casal com a cara deles 🖼️"
    },
    {
        name: "Quadros Decorativos",
        image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1",
        price: 178,
        livre: false,
        aleatorio: false,
        description: "Detalhes que contam histórias 🎨"
    },
    {
        name: "Habilitação Arrais-Amador e Motonauta",
        image: "https://images.unsplash.com/photo-1505867798796-639ec7e8cdf5",
        price: 1100,
        livre: false,
        aleatorio: false,
        description: "Um sonho antigo do noivo… e diversão garantida para todo mundo depois 😎🚤"
    },
    {
        name: "Contribuição Livre",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
        price: 100,
        livre: true,
        aleatorio: false,
        description: "Contribua com o valor que fizer sentido para você 💖"
    }
];

// --- Navegação ---
function switchTab(tabId) {
    if (!tabId || tabId === selectTab) return;
    if (tabId === 'locations' && selectTab !== 'locations') {
        // volta para a home e scrolla para a seção de locations
        switchTab('home');
        setTimeout(() => {
            const locSection = document.getElementById('locations');
            if (locSection) {
                locSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
        selectTab = 'locations';
        return;
    }

    ['home', 'gifts', 'rsvp'].forEach(t => {
        document.getElementById('tab-' + t).style.display = (t === tabId) ? 'block' : 'none';

        const btn = document.getElementById('btn-' + t);
        const icon = btn.querySelector('i');
        if (t === tabId) {
            btn.className = "nav-btn flex items-center gap-2 px-4 md:px-6 py-2 rounded-md transition-all duration-500 border bg-sage-600 text-white font-medium border-sage-600 shadow-sm";
            if (tabId === 'home' && icon && icon.classList) {
                icon.classList.add('fill-current');
            }
        } else {
            btn.className = "nav-btn flex items-center gap-2 px-4 md:px-6 py-2 rounded-md transition-all duration-500 border text-rustic-600 border-transparent hover:text-sage-700 hover:bg-rustic-100";
            if (tabId === 'home' && icon && icon.classList) {
                icon.classList.remove('fill-current');
            }
        }
    });
    lucide.createIcons();
    window.scrollTo(0, 0);
    selectTab = tabId;
}

// --- Renderizar Presentes ---
function renderGifts() {
    const container = document.getElementById('gift-grid-container');
    let html = '';
    for (let i = 0; i < gifts.length; i++) {
        const title = gifts[i].name || `Presente ${i + 1}`;
        const price = gifts[i].aleatorio ? Math.floor(Math.random() * (500 - 50 + 1) + 50) : gifts[i].price;
        const img = (gifts[i].image || "https://images.unsplash.com/photo-1513885535751-8b9238bd345a") + "?q=80&w=400&h=300&auto=format&fit=crop";
        const description = gifts[i].description || "Ajude os noivos a realizarem este sonho.";
        const aleatorio = gifts[i].aleatorio;

        html += `
                <div class="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-rustic-100">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img src="${img}" alt="${title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter sepia-[10%]">
                    </div>
                    <div class="p-6 flex flex-col flex-grow text-center">
                        <h3 class="font-serif text-xl text-rustic-800 mb-2 break-words">${title}</h3>
                        <p class="text-xs text-rustic-500 mb-6 line-clamp-2 min-h-[2.5em] tracking-wide">${description}</p>
                        <div class="mt-auto space-y-4 pt-4 border-t border-rustic-50">
                            <p class="text-2xl font-medium text-sage-700 font-serif ${aleatorio ? "hidden" : ""}">R$ ${price.toFixed(2).replace('.', ',')}</p>
                            <button onclick="openModal('${title}', ${price}, ${aleatorio})" class="w-full bg-rustic-700 text-rustic-50 py-3 px-4 rounded-sm hover:bg-sage-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-[0.1em] font-medium">
                                <i data-lucide="shopping-bag" class="w-4 h-4"></i> Presentear
                            </button>
                        </div>
                    </div>
                </div>`;
    }
    container.innerHTML = html;
}

// --- Modal ---
function openModal(title, price, aleatorio) {
    if (aleatorio) {
        // valor aleatório entre 50 e 250
        price = Math.floor(Math.random() * (250 - 50 + 1) + 50);
    }
    let PIX_KEY = gerarPix(price);

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = `R$ ${price.toFixed(2).replace('.', ',')}`;
    document.getElementById('modal-pix-key').value = PIX_KEY;
    if (qrcode) {
        qrcode.makeCode(PIX_KEY);
    } else {
        qrcode = new QRCode(document.getElementById("modal-qr"), {
            text: PIX_KEY,
            width: 200,
            height: 200
        });
    }
    // document.getElementById('modal-qr').src = qrcode

    document.getElementById('payment-modal').classList.remove('hidden');
    lucide.createIcons();

    gerarConfetti()
}

function gerarConfetti() {
    confetti({
        particleCount: 400,
        spread: 100,
        origin: { y: 0.6 }
    });
}

function closeModal() {
    document.getElementById('payment-modal').classList.add('hidden');
    // Reset button style
    const btn = document.getElementById('copy-btn');
    btn.className = "w-full py-4 px-4 rounded-sm flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 text-sm uppercase bg-rustic-800 text-rustic-50 hover:bg-rustic-700 shadow-md hover:shadow-lg";
    btn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i><span>Copiar Código Pix</span>`;
    lucide.createIcons();
}

function copyPix() {
    const key = document.getElementById('modal-pix-key').value;
    navigator.clipboard.writeText(key).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.className = "w-full py-4 px-4 rounded-sm flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 text-sm uppercase bg-sage-100 text-sage-800 border border-sage-200";
        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>Código Copiado!</span>`;
        lucide.createIcons();
    });
}

// --- RSVP ---
function toggleGuestsField() {
    const val = document.getElementById('attending').value;
    const container = document.getElementById('guests-container');
    container.style.display = (val === 'yes') ? 'block' : 'none';
}

function checkRSVP() {
    if (localStorage.getItem('wedding_rsvp_completed')) {
        showRSVPSuccess(true);
    }
}

function showRSVPSuccess(already) {
    document.getElementById('rsvp-form').classList.add('hidden');
    const box = document.getElementById('rsvp-success');
    box.classList.remove('hidden');
    box.classList.add('flex');

    if (already) {
        document.getElementById('rsvp-title').innerText = "Presença Já Confirmada";
        document.getElementById('rsvp-message').innerText = "Você já confirmou sua presença anteriormente. Nos vemos lá!";
        document.getElementById('rsvp-warning').classList.remove('hidden');

        const iconBox = document.getElementById('rsvp-icon-box');
        iconBox.className = "w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white bg-sage-100";
        iconBox.innerHTML = `<i data-lucide="check-circle" class="w-10 h-10 text-sage-600"></i>`;
    }
    lucide.createIcons();
}

function ConfirmarWhatsApp(presenca) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const texto = encodeURIComponent(presenca === 'yes' ? MENSAGEM_CONFIRMACAO : MESSAGE_NEGATIVA);
    const url = isMobile
        ? `https://wa.me/${TELEFONE}?text=${texto}`
        : `https://web.whatsapp.com/send?phone=${TELEFONE}&text=${texto}`;

    window.open(url, "_blank");
}

function crc16(payload) {
    let polinomio = 0x1021;
    let resultado = 0xFFFF;

    for (let i = 0; i < payload.length; i++) {
        resultado ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            resultado = (resultado & 0x8000)
                ? (resultado << 1) ^ polinomio
                : resultado << 1;
        }
    }

    return (resultado & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

function campo(id, valor) {
    return id + valor.length.toString().padStart(2, '0') + valor;
}

function gerarPix(price) {
    const chavePix = "de8bf5e6-c3b0-4f5c-8b9c-902e4e57af58";
    const nome = "CAROLINI DOMINGOS";
    const cidade = "SAO PAULO";
    const valor = price.toFixed(2);

    let payload =
        campo("00", "01") +
        campo("26",
            campo("00", "BR.GOV.BCB.PIX") +
            campo("01", chavePix)
        ) +
        campo("52", "0000") +
        campo("53", "986") +
        campo("54", valor) +
        campo("58", "BR") +
        campo("59", nome.substring(0, 25)) +
        campo("60", cidade.substring(0, 15)) +
        campo("62",
            campo("05", "***")
        ) +
        "6304";

    payload += crc16(payload);

    return payload;
}

// --- Form Submission ---
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = `<span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Acessando...`;

    const val = document.getElementById('attending').value;
    ConfirmarWhatsApp(val);

    setTimeout(() => {
        localStorage.setItem('wedding_rsvp_completed', 'true');
        showRSVPSuccess(false);
    }, 1500);
});

// --- Init ---
window.addEventListener('DOMContentLoaded', () => {
    renderGifts();
    checkRSVP();
    lucide.createIcons();
});

function initSlide() {
    let loaded = 0;
    let current = 0;
    let active = 1;

    const images = [
        { src: 'public/IMG_1.jpg', y: '30%', mobileX: '50%' },
        { src: 'public/IMG_3.jpg', y: '30%', mobileX: '65%' },
        { src: 'public/IMG_4.jpg', y: '30%', mobileX: '50%' },
        { src: 'public/IMG_5.jpg', y: '70%', mobileX: '50%' },
        { src: 'public/IMG_6.jpg', y: '50%', mobileX: '70%' },
        { src: 'public/IMG_7.jpg', y: '30%', mobileX: '50%' },
    ];

    const bg1 = document.getElementById('hero-bg-1');
    const bg2 = document.getElementById('hero-bg-2');

    const isMobile = window.innerWidth < 768;

    bg1.style.backgroundImage = `url('${images[0].src}')`;
    bg1.style.backgroundPosition = `50% ${images[0].y}`;

    // preload
    images.forEach(img => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
            loaded++;
            if (loaded === images.length) {
                startSlideshow();
            }
        };
    });

    function startSlideshow() {
        setInterval(() => {
            current = (current + 1) % images.length;
            const img = images[current];
            const mobileX = isMobile ? img.mobileX : '50%';

            const incoming = active === 1 ? bg2 : bg1;
            const outgoing = active === 1 ? bg1 : bg2;

            // prepara a próxima imagem
            incoming.style.backgroundImage = `url('${img.src}')`;
            incoming.style.backgroundPosition = `${mobileX} ${img.y}`;
            incoming.classList.remove('opacity-0');
            incoming.classList.add('opacity-100');

            // esconde a atual
            outgoing.classList.remove('opacity-100');
            outgoing.classList.add('opacity-0');

            active = active === 1 ? 2 : 1;
        }, 6000);
    }
}

initSlide();