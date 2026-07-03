// ==========================================================================
// MONTA STREETWEAR — CLIENT-SIDE LOGIC (ZERO DEPENDENCIES)
// ==========================================================================

(function () {
  'use strict';

  // ===== DATA =====
  const PRODUCTS = [
    {
      id: 1,
      name: "Hoodie Oversize Graphite",
      category: "haut",
      price: 89,
      oldPrice: null,
      badge: "Nouveau",
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Hoodie coupe oversize ultra confortable en coton lourd brossé. Coloris gris anthracite minéral délavé, parfait pour un style streetwear affirmé."
    },
    {
      id: 2,
      name: "Veste Varsity Classique",
      category: "vestes",
      price: 189,
      oldPrice: null,
      badge: "Nouveau",
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Veste universitaire intemporelle en laine mélangée avec manches en similicuir grainé contrasté. Broderie rétro cousue poitrine."
    },
    {
      id: 3,
      name: "Cargo Tech Noir",
      category: "bas",
      price: 119,
      oldPrice: 149,
      badge: "Promo",
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Pantalon cargo technique déperlant avec poches tactiques 3D, sangles ajustables et chevilles élastiquées."
    },
    {
      id: 4,
      name: "Sneakers Runner Pro",
      category: "chaussures",
      price: 249,
      oldPrice: null,
      badge: "Nouveau",
      sizes: ["40", "41", "42", "43", "44"],
      img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Sneakers running au look urbain moderne. Semelle amortissante épaisse blanche, empiècements mesh gris et détails réfléchissants."
    },
    {
      id: 5,
      name: "Casquette Snapback Noir",
      category: "accessoires",
      price: 45,
      oldPrice: null,
      badge: null,
      sizes: ["Unique"],
      img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Casquette snapback classique avec visière plate, fermeture arrière réglable et broderie relief ton sur ton."
    },
    {
      id: 6,
      name: "T-Shirt Graphic Desert",
      category: "haut",
      price: 49,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&h=750&q=80",
      description: "T-shirt col rond coupe boxy avec print graphique inspiré des paysages minéraux du désert tunisien."
    },
    {
      id: 7,
      name: "Doudoune Puffer Matelassée",
      category: "vestes",
      price: 219,
      oldPrice: 289,
      badge: "Promo",
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Doudoune courte matelassée coupe boxy. Rembourrage thermique haute densité et revêtement coupe-vent imperméable."
    },
    {
      id: 8,
      name: "Jogger Fleece Sable",
      category: "bas",
      price: 79,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Pantalon de jogging en molleton de coton lourd. Coloris ocre/sable texturé avec cordons de serrage."
    },
    {
      id: 9,
      name: "Sneakers Retro Low",
      category: "chaussures",
      price: 199,
      oldPrice: null,
      badge: null,
      sizes: ["40", "41", "42", "43", "44"],
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Sneakers basses style skate rétro. Tige en cuir grainé blanc cassé et semelle gomme cuite naturelle."
    },
    {
      id: 10,
      name: "Sacoche Bandoulière Utility",
      category: "accessoires",
      price: 59,
      oldPrice: null,
      badge: "Nouveau",
      sizes: ["Unique"],
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Sacoche bandoulière robuste en nylon Cordura. Compartiments multiples zippés et passants Molle tactiques."
    },
    {
      id: 11,
      name: "Sweat Crewneck Mineral",
      category: "haut",
      price: 79,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Sweatshirt col rond classique en coton molletonné lourd, délavage minéral à l'aspect brut."
    },
    {
      id: 12,
      name: "Coupe-Vent Tech Orange",
      category: "vestes",
      price: 139,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Veste technique coupe-vent zippée et respirante. Coloris ocre désertique affirmé avec capuche ajustable."
    },
    {
      id: 13,
      name: "Jean Denim Loose Brut",
      category: "bas",
      price: 99,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Jean loose décontracté en denim lourd non lavé. Silhouette brutalist street avec finitions surpiquées."
    },
    {
      id: 14,
      name: "Chaussures Trail Altitude",
      category: "chaussures",
      price: 279,
      oldPrice: 349,
      badge: "Promo",
      sizes: ["40", "41", "42", "43", "44"],
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Chaussures hybrides running/trail adaptées à la rue. Semelle crantée tout-terrain ocre et système de laçage rapide."
    },
    {
      id: 15,
      name: "Bonnet Knit Ocre",
      category: "accessoires",
      price: 39,
      oldPrice: null,
      badge: null,
      sizes: ["Unique"],
      img: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Bonnet court en grosse maille côtelée ocre. Chaleur, douceur et silhouette urbaine irréprochable."
    },
    {
      id: 16,
      name: "Polo Street Maille",
      category: "haut",
      price: 69,
      oldPrice: null,
      badge: null,
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&h=750&q=80",
      description: "Polo moderne à fermeture éclair invisible en maille texturée. Parfait pour structurer une silhouette décontractée."
    }
  ];

  // ===== STATE =====
  let cart = [];
  let currentFilter = 'all';
  let currentSort = 'latest';
  let scrollObserver = null;

  // ===== HELPERS =====
  function esc(str) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Toast System
  let toastContainer = null;
  function showToast(message) {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // ===== LOCAL STORAGE =====
  function loadCart() {
    try {
      const saved = localStorage.getItem('monta_cart');
      cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Storage inaccessible. Session temporaire activée.", e);
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('monta_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn("Impossible de sauvegarder la commande.", e);
    }
  }

  function loadCustomerDetails() {
    try {
      const name = localStorage.getItem('monta_checkout_name') || '';
      const phone = localStorage.getItem('monta_checkout_phone') || '';
      const address = localStorage.getItem('monta_checkout_address') || '';

      const nameInput = document.getElementById('checkout-name');
      const phoneInput = document.getElementById('checkout-phone');
      const addressInput = document.getElementById('checkout-address');

      if (nameInput) nameInput.value = name;
      if (phoneInput) phoneInput.value = phone;
      if (addressInput) addressInput.value = address;
    } catch (e) {
      console.warn("Storage inaccessible. Détails utilisateur non récupérés.", e);
    }
  }

  function saveCustomerDetails() {
    try {
      const nameInput = document.getElementById('checkout-name');
      const phoneInput = document.getElementById('checkout-phone');
      const addressInput = document.getElementById('checkout-address');

      if (nameInput) localStorage.setItem('monta_checkout_name', nameInput.value.trim());
      if (phoneInput) localStorage.setItem('monta_checkout_phone', phoneInput.value.trim());
      if (addressInput) localStorage.setItem('monta_checkout_address', addressInput.value.trim());
    } catch (e) {
      console.warn("Storage inaccessible. Impossible de sauvegarder les détails.", e);
    }
  }

  // ===== CART OPERATIONS =====
  function addToCart(productId, size, quantity = 1) {
    productId = parseInt(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.productId === productId && item.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, size, quantity });
    }

    saveCart();
    updateCartUI();
    showCartBadgePop();
    showToast(`${product.name} (${size}) ajouté.`);
  }

  function removeFromCart(productId, size) {
    productId = parseInt(productId);
    cart = cart.filter(item => !(item.productId === productId && item.size === size));
    saveCart();
    updateCartUI();
    showCartBadgePop();
  }

  function changeQty(productId, size, delta) {
    productId = parseInt(productId);
    const item = cart.find(item => item.productId === productId && item.size === size);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      saveCart();
      updateCartUI();
      showCartBadgePop();
    }
  }

  function updateCartUI() {
    const itemsContainer = document.getElementById('cart-items');
    const totalAmount = document.querySelector('#cart-total .total-amount');
    const badge = document.getElementById('cart-count');
    
    if (!itemsContainer) return;

    let grandTotal = 0;
    let totalQty = 0;

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <p>Votre panier est vide.</p>
          <a href="#shop" class="btn btn-primary btn-sm" id="continue-shopping">Boutique</a>
        </div>
      `;
      if (totalAmount) totalAmount.textContent = '0 TND';
      if (badge) {
        badge.textContent = '0';
        badge.style.display = 'none';
      }
      return;
    }

    let html = '';
    cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return;

      const lineTotal = product.price * item.quantity;
      grandTotal += lineTotal;
      totalQty += item.quantity;

      html += `
        <div class="cart-item" data-id="${product.id}" data-size="${esc(item.size)}">
          <img class="cart-item-img" src="${esc(product.img)}" alt="${esc(product.name)}">
          <div class="cart-item-info">
            <div class="cart-item-title">${esc(product.name)}</div>
            <div style="font-size: 12px; color: var(--concrete); font-weight: 700;">Taille: ${esc(item.size)}</div>
            <div class="qty-stepper">
              <button class="qty-btn qty-minus" data-id="${product.id}" data-size="${esc(item.size)}" aria-label="Diminuer">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-id="${product.id}" data-size="${esc(item.size)}" aria-label="Augmenter">+</button>
            </div>
            <span class="cart-item-remove" data-id="${product.id}" data-size="${esc(item.size)}">Supprimer</span>
          </div>
          <div class="cart-item-price">${lineTotal} TND</div>
        </div>
      `;
    });

    itemsContainer.innerHTML = html;
    if (totalAmount) totalAmount.textContent = `${grandTotal} TND`;
    if (badge) {
      badge.textContent = totalQty;
      badge.style.display = totalQty > 0 ? 'flex' : 'none';
    }
  }

  function showCartBadgePop() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    badge.classList.remove('pop');
    void badge.offsetWidth; // Reflow
    badge.classList.add('pop');
  }

  // Drawer Toggling
  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const toggle = document.getElementById('cart-toggle');
    if (!drawer || !overlay) return;

    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus close btn
    const closeBtn = document.getElementById('cart-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const toggle = document.getElementById('cart-toggle');
    if (!drawer || !overlay) return;

    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function trapCartFocus(e) {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer || !drawer.classList.contains('open')) return;

    if (e.key === 'Tab') {
      const focusable = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  }

  // Quick Add handler
  function handleQuickAdd(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const defaultSize = product.sizes[0];
    addToCart(productId, defaultSize, 1);
    openCartDrawer();
  }

  // ===== WHATSAPP CHECKOUT =====
  function checkoutWhatsApp() {
    if (cart.length === 0) {
      showToast("Votre panier est vide.");
      return;
    }

    const nameInput = document.getElementById('checkout-name');
    const phoneInput = document.getElementById('checkout-phone');
    const addressInput = document.getElementById('checkout-address');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';

    if (!name) {
      showToast("Veuillez entrer votre Nom et Prénom.");
      if (nameInput) {
        openCartDrawer();
        nameInput.focus();
      }
      return;
    }
    if (!phone) {
      showToast("Veuillez entrer votre Numéro de Téléphone.");
      if (phoneInput) {
        openCartDrawer();
        phoneInput.focus();
      }
      return;
    }
    if (!address) {
      showToast("Veuillez entrer votre Adresse.");
      if (addressInput) {
        openCartDrawer();
        addressInput.focus();
      }
      return;
    }

    let msg = "🛍️ *Nouvelle commande — MONTA*\n\n";
    let grandTotal = 0;

    cart.forEach((item, index) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return;
      const lineTotal = product.price * item.quantity;
      grandTotal += lineTotal;
      msg += `${index + 1}. ${product.name} (${item.size}) ×${item.quantity} — ${lineTotal} TND\n`;
    });

    msg += `\n💰 *Total : ${grandTotal} TND*\n\n`;
    msg += `👤 *Client :* ${name}\n`;
    msg += `📞 *Téléphone :* ${phone}\n`;
    msg += `📍 *Adresse de livraison :* ${address}`;

    const url = `https://wa.me/21624361489?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // ===== PRODUCT MODAL (QUICK VIEW) =====
  function openProductModal(productId) {
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const priceHTML = product.oldPrice
      ? `<span class="price-old" style="text-decoration: line-through; color: var(--concrete); margin-right: 12px;">${product.oldPrice} TND</span> ${product.price} TND`
      : `${product.price} TND`;

    const sizesHTML = product.sizes.map((size, index) => `
      <label class="size-pill">
        <input type="radio" name="modal-size" value="${esc(size)}" ${index === 0 ? 'checked' : ''}>
        <span>${esc(size)}</span>
      </label>
    `).join('');

    modal.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" aria-label="Fermer la vue produit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div class="modal-media">
          <img src="${esc(product.img)}" alt="${esc(product.name)}">
        </div>
        
        <div class="modal-details">
          <span class="modal-cat">${esc(product.category.toUpperCase())}</span>
          <h2 class="modal-title">${esc(product.name)}</h2>
          <div class="modal-price">${priceHTML}</div>
          <p class="modal-desc">${esc(product.description)}</p>
          
          <div class="modal-options" style="margin-bottom: 24px;">
            <h4 style="font-family: var(--font-body); font-size: 11px; text-transform: uppercase; color: var(--concrete); margin-bottom: 12px; font-weight: 800; letter-spacing:0.05em;">Taille</h4>
            <div class="modal-sizes-grid" style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${sizesHTML}
            </div>
          </div>
          
          <div class="modal-qty-wrapper" style="margin-bottom: 32px; display: flex; align-items: center; gap: 16px;">
            <h4 style="font-family: var(--font-body); font-size: 11px; text-transform: uppercase; color: var(--concrete); font-weight: 800; letter-spacing:0.05em;">Quantité</h4>
            <div class="qty-stepper">
              <button class="qty-btn" id="modal-qty-minus" aria-label="Diminuer">-</button>
              <span class="qty-val" id="modal-qty-val">1</span>
              <button class="qty-btn" id="modal-qty-plus" aria-label="Augmenter">+</button>
            </div>
          </div>
          
          <div class="modal-actions">
            <button class="btn btn-primary" id="modal-add-to-cart">Ajouter au panier</button>
            <a href="#" class="btn btn-secondary" id="modal-wa-direct" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    `;

    let quantity = 1;
    const qtyDisplay = modal.querySelector('#modal-qty-val');
    const waLink = modal.querySelector('#modal-wa-direct');

    const updateWaLink = () => {
      const selectedSize = modal.querySelector('input[name="modal-size"]:checked')?.value || product.sizes[0];
      
      const savedName = localStorage.getItem('monta_checkout_name') || '';
      const savedPhone = localStorage.getItem('monta_checkout_phone') || '';
      const savedAddress = localStorage.getItem('monta_checkout_address') || '';

      let msg = `🛍️ *Commande Directe — MONTA*\n\n`;
      msg += `Article : ${product.name}\n`;
      msg += `Taille : ${selectedSize}\n`;
      msg += `Quantité : ${quantity}\n`;
      msg += `Prix total : ${product.price * quantity} TND\n\n`;
      msg += `👤 *Client :* ${savedName || '[Entrez votre nom dans le panier]'}\n`;
      msg += `📞 *Téléphone :* ${savedPhone || '[Entrez votre téléphone dans le panier]'}\n`;
      msg += `📍 *Adresse :* ${savedAddress || '[Entrez votre adresse dans le panier]'}`;
      
      waLink.href = `https://wa.me/21624361489?text=${encodeURIComponent(msg)}`;
    };

    modal.querySelector('#modal-qty-minus').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
        updateWaLink();
      }
    });

    modal.querySelector('#modal-qty-plus').addEventListener('click', () => {
      quantity++;
      qtyDisplay.textContent = quantity;
      updateWaLink();
    });

    modal.querySelectorAll('input[name="modal-size"]').forEach(input => {
      input.addEventListener('change', updateWaLink);
    });

    modal.querySelector('#modal-add-to-cart').addEventListener('click', () => {
      const selectedSize = modal.querySelector('input[name="modal-size"]:checked')?.value || product.sizes[0];
      addToCart(product.id, selectedSize, quantity);
      modal.close();
    });

    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.close();
    });

    updateWaLink();
    modal.showModal();
  }

  // ===== PRODUCTS RENDER & FILTER =====
  function getFilteredAndSorted() {
    let list = [...PRODUCTS];

    if (currentFilter !== 'all') {
      list = list.filter(p => p.category === currentFilter);
    }

    if (currentSort === 'latest') {
      list.sort((a, b) => {
        const aNew = a.badge === 'Nouveau' ? 1 : 0;
        const bNew = b.badge === 'Nouveau' ? 1 : 0;
        if (aNew !== bNew) return bNew - aNew;
        return a.id - b.id;
      });
    } else if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }

  function renderProducts(list) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--concrete); font-weight: 700; text-transform: uppercase; font-size: 14px; border: 1px dashed var(--concrete);">Aucun article disponible pour cette sélection.</div>`;
      return;
    }

    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    grid.innerHTML = list.map((product, idx) => {
      const badgeHTML = product.badge ? `<span class="badge">${esc(product.badge)}</span>` : '';
      const priceHTML = product.oldPrice
        ? `<span class="price-old" style="text-decoration: line-through; color: var(--concrete); margin-right: 8px; font-size: 0.95em;">${product.oldPrice} TND</span> ${product.price} TND`
        : `${product.price} TND`;

      const delay = hasReducedMotion ? 0 : idx * 50;
      const inlineStyle = hasReducedMotion ? '' : `style="animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards; opacity:0;"`;

      return `
        <article class="product-card" data-category="${esc(product.category)}" data-price="${product.price}" data-id="${product.id}" ${inlineStyle}>
          <div class="product-media">
            <img src="${esc(product.img)}" alt="${esc(product.name)}" loading="lazy">
            ${badgeHTML}
            <button class="quick-add" data-id="${product.id}">+ Panier</button>
          </div>
          <div class="product-info">
            <h3 class="product-name">${esc(product.name)}</h3>
            <p class="product-cat">${esc(product.category.toUpperCase())}</p>
            <p class="product-price">${priceHTML}</p>
          </div>
        </article>
      `;
    }).join('');

    // Re-observe newly loaded products
    if (scrollObserver) {
      grid.querySelectorAll('.product-card').forEach(card => scrollObserver.observe(card));
    }
  }

  // ===== UI POLISH =====
  function initScrollReveal() {
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) {
      document.querySelectorAll('.category-card, .product-card, .look-card, .section-title, .about-content, .about-image').forEach(el => {
        el.classList.add('in-view');
      });
      return;
    }

    scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.category-card, .look-card, .section-title, .about-content, .about-image').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  // ===== INITIALIZATION =====
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject styles dynamically for scroll reveal & modals
    const style = document.createElement('style');
    style.textContent = `
      .category-card, .product-card, .look-card, .section-title, .about-content, .about-image {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .category-card.in-view, .product-card.in-view, .look-card.in-view, .section-title.in-view, .about-content.in-view, .about-image.in-view {
        opacity: 1;
        transform: translateY(0);
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .size-pill {
        cursor: pointer;
      }
      .size-pill input {
        display: none;
      }
      .size-pill span {
        display: inline-block;
        padding: 8px 16px;
        border: 1px solid var(--concrete);
        font-size: 13px;
        font-weight: 700;
        transition: var(--transition-smooth);
        border-radius: 2px;
        background-color: var(--card);
        text-transform: uppercase;
      }
      .size-pill input:checked + span {
        background-color: var(--ochre);
        border-color: var(--ochre);
        color: var(--ink);
      }

      #toast-container {
        position: fixed;
        bottom: 30px;
        left: 30px;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      }
      .toast {
        background-color: var(--ink);
        color: var(--bone);
        padding: 14px 24px;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border: 1px solid var(--concrete);
        border-radius: 2px;
        box-shadow: 6px 6px 0 rgba(201, 123, 44, 0.25);
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        pointer-events: auto;
      }
      .toast.show {
        transform: translateY(0);
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    // 2. Load Cart & Customer Details
    loadCart();
    updateCartUI();
    loadCustomerDetails();

    // Auto-save customer details
    const nameInput = document.getElementById('checkout-name');
    const phoneInput = document.getElementById('checkout-phone');
    const addressInput = document.getElementById('checkout-address');

    [nameInput, phoneInput, addressInput].forEach(input => {
      if (input) {
        input.addEventListener('input', saveCustomerDetails);
      }
    });

    // 3. Render Shop Items
    const initialList = getFilteredAndSorted();
    renderProducts(initialList);

    // 4. Setup Observers
    initScrollReveal();

    // 5. Hero Reveal Stagger lines trigger
    document.querySelectorAll('.hero-line').forEach(line => {
      line.classList.add('reveal');
    });

    // 6. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      });

      mobileMenu.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
        });
      });
    }

    // 7. Sticky Header scroll trigger
    window.addEventListener('scroll', () => {
      const header = document.getElementById('site-header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // 8. Filter Bar click delegates
    const filterBar = document.getElementById('filter-bar');
    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentFilter = btn.getAttribute('data-filter');
        renderProducts(getFilteredAndSorted());
      });
    }

    // 9. Sort Select changed trigger
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts(getFilteredAndSorted());
      });
    }

    // 10. Category cards navigation filter setup
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        currentFilter = cat;

        const fBar = document.getElementById('filter-bar');
        if (fBar) {
          fBar.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-filter') === cat) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          });
        }

        renderProducts(getFilteredAndSorted());

        // Smooth scroll to boutique shop
        const shop = document.getElementById('shop');
        if (shop) {
          const headerHeight = document.getElementById('site-header')?.offsetHeight || 70;
          const pos = shop.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });

    // 11. Product Grid Click delegation (Quick Add & Modal open)
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
      productGrid.addEventListener('click', (e) => {
        const quickAddBtn = e.target.closest('.quick-add');
        if (quickAddBtn) {
          e.stopPropagation();
          const id = parseInt(quickAddBtn.getAttribute('data-id'));
          handleQuickAdd(id);
          return;
        }

        const card = e.target.closest('.product-card');
        if (card) {
          const id = parseInt(card.getAttribute('data-id'));
          openProductModal(id);
        }
      });
    }

    // 12. Cart Items Actions delegation
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
      cartItems.addEventListener('click', (e) => {
        const target = e.target;
        const id = parseInt(target.getAttribute('data-id'));
        const size = target.getAttribute('data-size');

        if (target.classList.contains('qty-minus')) {
          changeQty(id, size, -1);
        } else if (target.classList.contains('qty-plus')) {
          changeQty(id, size, 1);
        } else if (target.classList.contains('cart-item-remove')) {
          removeFromCart(id, size);
        } else if (target.id === 'continue-shopping') {
          closeCartDrawer();
        }
      });
    }

    // 13. Cart Panel Open/Close hooks
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('checkout-whatsapp');

    if (cartToggle) {
      cartToggle.addEventListener('click', () => {
        const drawer = document.getElementById('cart-drawer');
        if (drawer && drawer.classList.contains('open')) {
          closeCartDrawer();
        } else {
          openCartDrawer();
        }
      });
    }

    if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutWhatsApp);

    // 14. Dialog backdrop click close setup
    const productModal = document.getElementById('product-modal');
    if (productModal) {
      productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
          productModal.close();
        }
      });
    }

    // Keyboard Accessibility Esc & Trap Focus
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
      }
      trapCartFocus(e);
    });

    // 15. Smooth internal link scroll helper
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('##')) return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.getElementById('site-header')?.offsetHeight || 70;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  });

  // ===== EXPOSE GLOBAL OBJECT =====
  window.MONTA = {
    PRODUCTS,
    getCart: () => cart,
    addToCart,
    removeFromCart,
    changeQty,
    checkoutWhatsApp,
    openProductModal,
    showToast,
    openCartDrawer,
    closeCartDrawer
  };
})();
