// ===== INIT & NAMESPACE =====
const MONTA = {
  cart: [],
  currentCategory: 'all',
  currentSort: 'newest'
};

// ===== UTILS =====
const esc = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
};

const formatPrice = (price) => `${price} TND`;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== TOAST SYSTEM =====
let toastContainer;
const showToast = (message) => {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    Object.assign(toastContainer.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      pointerEvents: 'none'
    });
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  Object.assign(toast.style, {
    backgroundColor: 'var(--acid)',
    color: 'var(--void)',
    padding: '12px 24px',
    borderRadius: '2px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    opacity: '0',
    transform: 'translateY(20px)',
    transition: 'all 0.3s ease'
  });
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });
  
  // Animate out and remove
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2500);
};

// ===== DATA =====
const PRODUCTS = [
  { id: 1, name: "Hoodie Blackout Graphite", category: "haut", price: 129, oldPrice: null, badge: "Nouveau", sizes: ["S","M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp", description: "Le hoodie ultime pour les nuits fraîches. Coton lourd, coupe oversize, branding subtil." },
  { id: 2, name: "Veste Varsity Nightshift", category: "vestes", price: 249, oldPrice: 299, badge: "Promo", sizes: ["S","M","L"], img: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp", description: "Style universitaire revisité pour la rue. Manches en cuir synthétique, patchs brodés." },
  { id: 3, name: "Cargo Tech Sable Nuit", category: "bas", price: 149, oldPrice: null, badge: null, sizes: ["S","M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp", description: "Multi-poches, tissu déperlant, coupe tactique. Parfait pour l'exploration urbaine." },
  { id: 4, name: "Runner Signal 90 Blanc", category: "chaussures", price: 219, oldPrice: null, badge: "Nouveau", sizes: ["40","41","42","43","44"], img: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp", description: "Inspirée des années 90, semelle épaisse, détails réfléchissants pour briller dans le noir." },
  { id: 5, name: "Casquette Snapback Néon", category: "accessoires", price: 39, oldPrice: null, badge: null, sizes: ["Unique"], img: "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp", description: "L'accessoire indispensable. Logo brodé au fil néon réagissant à la lumière noire." },
  { id: 6, name: "T-Shirt Boxy Acid", category: "haut", price: 59, oldPrice: null, badge: null, sizes: ["S","M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp", description: "Coupe carrée ultra moderne, coton premium, lavage effet vintage." },
  { id: 7, name: "Doudoune Puffer Void", category: "vestes", price: 349, oldPrice: null, badge: "Nouveau", sizes: ["M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp", description: "Isolation maximale, finition mate. Quand le mercure chute, le style reste." },
  { id: 8, name: "Jean Baggy Stonewash", category: "bas", price: 119, oldPrice: 149, badge: "Promo", sizes: ["S","M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp", description: "Coupe très ample, denim robuste, délavage travaillé à la main." },
  { id: 9, name: "Sneakers High-Top Onyx", category: "chaussures", price: 239, oldPrice: null, badge: null, sizes: ["41","42","43"], img: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp", description: "Silhouette montante profilée, cuir premium noir profond." },
  { id: 10, name: "Sac Banane Utility", category: "accessoires", price: 69, oldPrice: null, badge: "Nouveau", sizes: ["Unique"], img: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp", description: "Porté croisé, sangles ajustables, nylon balistique ultra-résistant." },
  { id: 11, name: "Sweat Col Rond Signature", category: "haut", price: 89, oldPrice: null, badge: null, sizes: ["S","M","L"], img: "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp", description: "Le basique parfait. Molleton gratté à l'intérieur pour un confort absolu." },
  { id: 12, name: "Coupe-Vent Reflective", category: "vestes", price: 179, oldPrice: null, badge: null, sizes: ["S","M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp", description: "Léger, entièrement réfléchissant la nuit pour un maximum d'impact." },
  { id: 13, name: "Jogger Fleece Asphalt", category: "bas", price: 99, oldPrice: 129, badge: "Promo", sizes: ["S","M","L"], img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp", description: "Confort extrême, coupe fittée, chevilles élastiquées." },
  { id: 14, name: "Chaussettes Tube Logo (x3)", category: "accessoires", price: 45, oldPrice: null, badge: null, sizes: ["Unique"], img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp", description: "Pack de 3 paires, molletonnées, logo contrasté." },
  { id: 15, name: "Polo Oversize Grid", category: "haut", price: 79, oldPrice: null, badge: null, sizes: ["M","L","XL"], img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp", description: "Le polo réinventé façon streetwear, manches tombantes." },
  { id: 16, name: "Baskets Chunky Beton", category: "chaussures", price: 259, oldPrice: null, badge: null, sizes: ["40","41","42","44"], img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp", description: "Proportions exagérées, mix de matières, semelle tout-terrain." }
];

// ===== RENDER & FILTER =====
const renderProducts = () => {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  
  let filtered = PRODUCTS.filter(p => MONTA.currentCategory === 'all' || p.category === MONTA.currentCategory);
  
  if (MONTA.currentSort === 'newest') {
    // Keep original order, but put 'Nouveau' badges first
    filtered.sort((a, b) => {
      if (a.badge === 'Nouveau' && b.badge !== 'Nouveau') return -1;
      if (a.badge !== 'Nouveau' && b.badge === 'Nouveau') return 1;
      return 0;
    });
  } else if (MONTA.currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (MONTA.currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 3rem; text-align: center; color: var(--smoke);">Rien par ici pour l'instant — check une autre catégorie.</div>`;
    return;
  }
  
  grid.innerHTML = filtered.map((p, index) => {
    const badgeHTML = p.badge ? `<span class="badge">${esc(p.badge)}</span>` : '';
    const priceHTML = p.oldPrice 
      ? `<span style="text-decoration: line-through; color: var(--smoke); font-size: 0.8em; margin-right: 0.5rem;">${formatPrice(p.oldPrice)}</span>${formatPrice(p.price)}`
      : formatPrice(p.price);
      
    // Apply stagger animation style
    const animDelay = prefersReducedMotion() ? 0 : index * 0.05;
    const animStyle = `animation: reveal-up 0.6s ease forwards ${animDelay}s; opacity: 0; transform: translateY(20px);`;
      
    return `
      <article class="product-card" data-category="${esc(p.category)}" data-price="${p.price}" style="${prefersReducedMotion() ? '' : animStyle}">
        <div class="product-media">
          <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">
          ${badgeHTML}
          <button class="quick-add" data-id="${p.id}" aria-label="Ajouter au panier">+ Panier</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${esc(p.name)}</h3>
          <p class="product-cat">${esc(p.category)}</p>
          <p class="product-price">${priceHTML}</p>
        </div>
      </article>
    `;
  }).join('');
};

// ===== CART LOGIC =====
const saveCart = () => {
  try {
    localStorage.setItem('monta_cart', JSON.stringify(MONTA.cart));
  } catch (e) {
    console.warn('LocalStorage unavailable');
  }
  renderCart();
};

const loadCart = () => {
  try {
    const saved = localStorage.getItem('monta_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // Filter out any corrupted items that could cause NaN
        MONTA.cart = parsed.filter(i => 
          i && 
          i.id && 
          typeof i.qty === 'number' && !isNaN(i.qty) && 
          typeof i.price === 'number' && !isNaN(i.price)
        );
      }
    }
  } catch (e) {
    console.warn('LocalStorage unavailable or corrupted');
  }
  renderCart();
};

const addToCart = (id, size, qty = 1) => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  
  const validQty = (typeof qty === 'number' && !isNaN(qty) && qty > 0) ? qty : 1;
  
  const existingItem = MONTA.cart.find(i => i.id === id && i.size === size);
  if (existingItem) {
    existingItem.qty += validQty;
  } else {
    MONTA.cart.push({ id, size, qty: validQty, price: product.price, name: product.name, img: product.img });
  }
  saveCart();
  
  // Animation on badge
  const badge = document.getElementById('cart-count');
  if (badge && !prefersReducedMotion()) {
    badge.classList.remove('cart-update-pulse');
    void badge.offsetWidth; // trigger reflow
    badge.classList.add('cart-update-pulse');
  }
};

const changeQty = (id, size, delta) => {
  const item = MONTA.cart.find(i => i.id === id && i.size === size);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      MONTA.cart = MONTA.cart.filter(i => !(i.id === id && i.size === size));
    }
    saveCart();
  }
};

const removeFromCart = (id, size) => {
  MONTA.cart = MONTA.cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
};

const renderCart = () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const cartCountEl = document.getElementById('cart-count');
  
  if (!cartItemsContainer || !cartTotalEl || !cartCountEl) return;
  
  const totalQty = MONTA.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = MONTA.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  if (totalQty === 0) {
    cartCountEl.style.display = 'none';
    cartItemsContainer.innerHTML = `<div style="text-align: center; color: var(--smoke); padding: 2rem;">Votre panier est vide.</div>`;
  } else {
    cartCountEl.style.display = 'flex';
    cartCountEl.textContent = totalQty;
    
    cartItemsContainer.innerHTML = MONTA.cart.map(item => `
      <div class="cart-item" style="display: flex; gap: 1rem; border-bottom: 1px solid var(--steel); padding-bottom: 1rem;">
        <img src="${esc(item.img)}" alt="${esc(item.name)}" style="width: 70px; height: 90px; object-fit: cover; border-radius: 2px;">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h4 style="font-size: 0.95rem; margin-bottom: 0.2rem; font-family: var(--font-body);">${esc(item.name)}</h4>
            <p style="color: var(--smoke); font-size: 0.85rem;">Taille: ${esc(item.size)}</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; border: 1px solid var(--steel); border-radius: 2px; overflow: hidden;">
              <button class="qty-btn minus" data-id="${item.id}" data-size="${esc(item.size)}" style="padding: 0.2rem 0.6rem; background: var(--steel); color: var(--paper);">-</button>
              <span style="padding: 0 0.8rem; font-size: 0.9rem;">${item.qty}</span>
              <button class="qty-btn plus" data-id="${item.id}" data-size="${esc(item.size)}" style="padding: 0.2rem 0.6rem; background: var(--steel); color: var(--paper);">+</button>
            </div>
            <div style="font-family: var(--font-display); color: var(--acid); font-size: 1.1rem;">${formatPrice(item.price * item.qty)}</div>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}" data-size="${esc(item.size)}" aria-label="Supprimer" style="color: var(--smoke); align-self: flex-start; padding: 0.2rem; transition: color 0.2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `).join('');
  }
  
  cartTotalEl.textContent = formatPrice(totalPrice);
};

// ===== WHATSAPP CHECKOUT =====
const checkoutWhatsApp = (e) => {
  e.preventDefault();
  if (MONTA.cart.length === 0) {
    showToast('Votre panier est vide');
    return;
  }
  
  let msg = `🛍️ *Nouvelle commande — MONTA*\n\n`;
  let total = 0;
  
  MONTA.cart.forEach((item, index) => {
    msg += `${index + 1}. ${item.name} (${item.size}) ×${item.qty} — ${item.price * item.qty} TND\n`;
    total += item.price * item.qty;
  });
  
  msg += `\n💰 *Total : ${total} TND*\n\nNom :\nAdresse de livraison :\nTéléphone :`;
  
  const encodedMsg = encodeURIComponent(msg);
  window.open(`https://wa.me/21624361489?text=${encodedMsg}`, '_blank');
};

// ===== UI MODAL & DRAWER =====
const toggleDrawer = (forceState) => {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  const toggleBtn = document.getElementById('cart-toggle');
  if (!drawer || !overlay) return;
  
  const isOpen = forceState !== undefined ? forceState : !drawer.classList.contains('open');
  
  if (isOpen) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Trap focus basic implementation
    setTimeout(() => {
      const closeBtn = document.getElementById('close-cart');
      if (closeBtn) closeBtn.focus();
    }, 100);
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
};

const openProductModal = (product) => {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  
  const priceHTML = product.oldPrice 
    ? `<span style="text-decoration: line-through; color: var(--smoke); font-size: 0.7em; margin-right: 0.5rem;">${formatPrice(product.oldPrice)}</span>${formatPrice(product.price)}`
    : formatPrice(product.price);
    
  const sizeRadios = product.sizes.map((s, i) => `
    <label style="cursor: pointer; display: inline-flex;">
      <input type="radio" name="modal-size" value="${esc(s)}" ${i === 0 ? 'checked' : ''} class="sr-only">
      <span style="display: inline-block; padding: 0.4rem 0.8rem; border: 1px solid var(--steel); border-radius: 2px; color: var(--paper); transition: all 0.2s;" class="size-pill">${esc(s)}</span>
    </label>
  `).join('');
  
  const styleStr = `
    .modal-layout { display: flex; flex-direction: column; height: 100%; max-height: 90vh; }
    @media (min-width: 768px) { .modal-layout { flex-direction: row; } }
    .size-pill:hover { border-color: var(--smoke) !important; }
    input[name="modal-size"]:checked + .size-pill { background-color: var(--acid); color: var(--void) !important; border-color: var(--acid) !important; font-weight: bold; }
    input[name="modal-size"]:focus-visible + .size-pill { outline: 2px solid var(--acid); outline-offset: 2px; }
  `;
  
  modal.innerHTML = `
    <style>${styleStr}</style>
    <div class="modal-layout">
      <button class="close-modal" aria-label="Fermer" style="position: absolute; top: 1rem; right: 1rem; z-index: 10; color: var(--paper); background: rgba(11,12,16,0.5); border: none; border-radius: 50%; padding: 0.5rem; transition: color 0.2s; cursor: pointer;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div style="flex: 1; overflow: hidden; min-height: 300px; display: flex;">
        <img src="${esc(product.img)}" alt="${esc(product.name)}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="flex: 1; padding: 2rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <p style="color: var(--smoke); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; font-family: var(--font-body);">${esc(product.category)}</p>
          <h2 id="modal-title" style="font-family: var(--font-body); text-transform: none; font-size: 1.8rem; margin-bottom: 0.5rem; letter-spacing: normal;">${esc(product.name)}</h2>
          <div style="font-family: var(--font-display); color: var(--acid); font-size: 2rem;">${priceHTML}</div>
        </div>
        
        <p style="color: var(--paper); line-height: 1.6;">${esc(product.description)}</p>
        
        <div>
          <h3 style="font-size: 1rem; margin-bottom: 0.8rem; font-family: var(--font-body); text-transform: none;">Taille</h3>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${sizeRadios}
          </div>
        </div>
        
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 1rem; padding-top: 1.5rem;">
          <div style="display: flex; gap: 1rem;">
            <div style="display: flex; align-items: center; border: 1px solid var(--steel); border-radius: 2px;">
              <button id="modal-qty-minus" style="padding: 0.8rem 1rem; color: var(--paper); background: transparent; border: none;">-</button>
              <input type="number" id="modal-qty" value="1" min="1" max="10" style="width: 3rem; text-align: center; background: transparent; border: none; color: var(--paper); font-size: 1rem;" readonly>
              <button id="modal-qty-plus" style="padding: 0.8rem 1rem; color: var(--paper); background: transparent; border: none;">+</button>
            </div>
            <button id="modal-add-btn" class="btn btn-primary" style="flex: 1;">Ajouter au panier</button>
          </div>
          
          <a href="#" id="modal-wa-btn" class="btn" style="background: transparent; border: 1px solid var(--wa-green); color: var(--wa-green); text-align: center;">
            Commander direct sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
  
  // Handlers for modal
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => modal.close());
  
  const qtyInput = modal.querySelector('#modal-qty');
  modal.querySelector('#modal-qty-minus').addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });
  modal.querySelector('#modal-qty-plus').addEventListener('click', () => {
    qtyInput.value = Math.min(10, parseInt(qtyInput.value) + 1);
  });
  
  modal.querySelector('#modal-add-btn').addEventListener('click', () => {
    const checkedSize = modal.querySelector('input[name="modal-size"]:checked').value;
    const qty = parseInt(qtyInput.value);
    addToCart(product.id, checkedSize, qty);
    modal.close();
    showToast('Ajouté au panier');
  });
  
  modal.querySelector('#modal-wa-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const checkedSize = modal.querySelector('input[name="modal-size"]:checked').value;
    const qty = parseInt(qtyInput.value);
    const msg = `🛍️ *Nouvelle commande directe — MONTA*\n\n1. ${product.name} (${checkedSize}) ×${qty} — ${product.price * qty} TND\n\nNom :\nAdresse de livraison :\nTéléphone :`;
    window.open(`https://wa.me/21624361489?text=${encodeURIComponent(msg)}`, '_blank');
    modal.close();
  });
  
  modal.showModal();
};

// ===== INIT DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', () => {
  // 1. Ticker Fix
  const track = document.querySelector('.ticker-track');
  if (track && track.children.length < 2) {
    const clone = track.innerHTML;
    track.innerHTML += clone + clone; // ensure it's long enough
  }

  // 2. Mobile Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        navLinks.classList.add('open');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Sticky Header
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
      header.style.borderBottomColor = 'var(--acid)';
    } else {
      header.classList.remove('scrolled');
      header.style.borderBottomColor = 'var(--steel)';
    }
  }, { passive: true });

  // 4. Scroll Reveal with IntersectionObserver
  if (!prefersReducedMotion() && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.category-card, .look-card, .section-title, .about-text').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // 5. Shop Filters & Sorting
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterBar.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-pressed', 'true');
        
        MONTA.currentCategory = e.target.getAttribute('data-filter') || 'all';
        renderProducts();
      }
    });
  }
  
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      MONTA.currentSort = e.target.value;
      renderProducts();
    });
  }

  // 6. Product Grid Delegation
  const grid = document.getElementById('product-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.quick-add');
      if (addBtn) {
        e.stopPropagation();
        const id = parseInt(addBtn.getAttribute('data-id'), 10);
        const product = PRODUCTS.find(p => p.id === id);
        if (product && product.sizes.length > 0) {
          addToCart(id, product.sizes[0], 1);
          showToast('Ajouté au panier');
        }
        return;
      }
      
      const card = e.target.closest('.product-card');
      if (card) {
        const urlId = card.querySelector('.quick-add')?.getAttribute('data-id');
        const id = parseInt(urlId, 10);
        const product = PRODUCTS.find(p => p.id === id);
        if (product) openProductModal(product);
      }
    });
  }

  // 7. Cart Events
  const cartToggle = document.getElementById('cart-toggle');
  const cartOverlay = document.getElementById('cart-overlay');
  const closeCartBtn = document.getElementById('close-cart');
  const checkoutBtn = document.getElementById('checkout-whatsapp');
  const cartItems = document.getElementById('cart-items');
  
  if (cartToggle) cartToggle.addEventListener('click', () => toggleDrawer());
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleDrawer(false));
  
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutWhatsApp);
  
  if (cartItems) {
    cartItems.addEventListener('click', (e) => {
      const minusBtn = e.target.closest('.minus');
      const plusBtn = e.target.closest('.plus');
      const removeBtn = e.target.closest('.remove-item');
      
      if (minusBtn) {
        const id = parseInt(minusBtn.getAttribute('data-id'), 10);
        const size = minusBtn.getAttribute('data-size');
        changeQty(id, size, -1);
      } else if (plusBtn) {
        const id = parseInt(plusBtn.getAttribute('data-id'), 10);
        const size = plusBtn.getAttribute('data-size');
        changeQty(id, size, 1);
      } else if (removeBtn) {
        const id = parseInt(removeBtn.getAttribute('data-id'), 10);
        const size = removeBtn.getAttribute('data-size');
        removeFromCart(id, size);
      }
    });
  }

  // 8. Global Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleDrawer(false);
      const modal = document.getElementById('product-modal');
      if (modal && modal.hasAttribute('open')) modal.close();
    }
  });

  // 9. Modal backdrop click close
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      // If click is directly on the dialog backdrop, not the inner div
      if (e.target === modal) modal.close();
    });
  }

  // 10. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
      }
    });
  });

  // Init
  loadCart();
  renderProducts();
});
