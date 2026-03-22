function calcular() {
    let metros = document.getElementById("metros").value;
    let precio = document.getElementById("precio").value;
    let tipo = document.getElementById("tipo").value;

    if (metros === "" || precio === "") {
        document.getElementById("resultado").innerHTML = "<p style='color: #ef4444;'>Por favor, ingresa todos los datos requeridos.</p>";
        return;
    }

    let baseTotal = metros * precio;
    let total = baseTotal * tipo;

    document.getElementById("resultado").innerHTML = `
        <div style="text-align: left;">
            <p><strong>Precio base:</strong> €${baseTotal.toLocaleString()}</p>
            <p><strong>Multiplicador:</strong> ${tipo}x</p>
            <p><strong>Precio total estimado:</strong> €${total.toLocaleString()}</p>
            <p style="font-size: 0.9em; opacity: 0.8; margin-top: 10px;">*Este es un cálculo aproximado. Contacta con nosotros para una cotización precisa.</p>
        </div>
    `;
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form submission (basic)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Modal de tarjetas de propiedad
const modal = document.getElementById('property-modal');
const modalClose = document.querySelector('.modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalFeatures = document.getElementById('modal-features');

function openPropertyModal(card) {
    const img = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const descText = card.querySelector('p').textContent;

    modalImg.src = img;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalPrice.textContent = descText;
    modalDesc.textContent = card.querySelector('.info p')?.textContent || 'Descripción completa de la propiedad no disponible.';

    // Crear tags de características
    modalFeatures.innerHTML = '';
    card.querySelectorAll('.features span').forEach(item => {
        const span = document.createElement('span');
        span.textContent = item.textContent;
        modalFeatures.appendChild(span);
    });

    modal.classList.add('active');
}

function closePropertyModal() {
    modal.classList.remove('active');
}

document.querySelectorAll('.btn-open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        if (card) openPropertyModal(card);
    });
});

modalClose?.addEventListener('click', closePropertyModal);
modal?.addEventListener('click', (e) => {
    if (e.target === modal) closePropertyModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePropertyModal();
});