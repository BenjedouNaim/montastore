// ==========================================================================
// 1. DATA (PRODUCTS DEFINITION & IMAGES)
// ==========================================================================
const UNSPLASH_IMAGES = {
  haut: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop"
  ],
  vestes: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
  ],
  bas: [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop"
  ],
  chaussures: [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
  ],
  accessoires: [
    "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583209814683-c023de294ca0?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop"
  ]
};

const PRODUCTS = [
  {
    id: 1,
    name: "Hoodie Archive Noir",
    category: "haut",
    price: 129,
    oldPrice: null,
    badge: "Nouveau",
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.haut[0],
    description: "Un classique indémodable confectionné dans un molleton lourd de coton bio. Finitions bord-côte renforcées et coupe boxy inspirée des archives streetwear."
  },
  {
    id: 2,
    name: "Parka Éditorial Sable",
    category: "vestes",
    price: 289,
    oldPrice: null,
    badge: "Nouveau",
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.vestes[0],
    description: "Parka longue à l'esthétique minimaliste. Toile déperlante haute performance, multiples poches intérieures et capuche tempête ajustable."
  },
  {
    id: 3,
    name: "Cargo Contact Nuit",
    category: "bas",
    price: 159,
    oldPrice: 199,
    badge: "Promo",
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.bas[0],
    description: "Pantalon cargo technique en ripstop résistant. Poches 3D asymétriques et chevilles ajustables par cordons élastiques."
  },
  {
    id: 4,
    name: "Runner Contact 90 Blanc",
    category: "chaussures",
    price: 249,
    oldPrice: null,
    badge: "Nouveau",
    sizes: ["40", "41", "42", "43", "44"],
    img: UNSPLASH_IMAGES.chaussures[0],
    description: "Silhouettes rétro-running revisitées. Tige en mesh alvéolé et empiècements en suède haut de gamme. Confort optimal au quotidien."
  },
  {
    id: 5,
    name: "Casquette Studio Noir",
    category: "accessoires",
    price: 59,
    oldPrice: null,
    badge: null,
    sizes: ["Unique"],
    img: UNSPLASH_IMAGES.accessoires[0],
    description: "Casquette 6-panels minimale en gabardine de coton lavé. Broderie ton sur ton à l'arrière et sangle de serrage métallique."
  },
  {
    id: 6,
    name: "Sweat Col Rond Volume",
    category: "haut",
    price: 119,
    oldPrice: null,
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.haut[1],
    description: "Sweatshirt à col rond à la coupe ultra-oversized. Emmanchures basses et coton bouclé gratté pour une douceur incomparable."
  },
  {
    id: 7,
    name: "Veste Varsity Metlaoui",
    category: "vestes",
    price: 349,
    oldPrice: null,
    badge: "Nouveau",
    sizes: ["M", "L", "XL"],
    img: UNSPLASH_IMAGES.vestes[1],
    description: "L'expression ultime du style universitaire. Corps en laine lourde et manches contrastées. Finitions contrastées aux poignets."
  },
  {
    id: 8,
    name: "Jean Droit Brut",
    category: "bas",
    price: 139,
    oldPrice: null,
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.bas[1],
    description: "Denim rigide 14oz à la coupe droite intemporelle. Toile japonaise teintée à l'indigo naturel qui patinera avec le temps."
  },
  {
    id: 9,
    name: "Sneaker Court Contact",
    category: "chaussures",
    price: 219,
    oldPrice: null,
    badge: null,
    sizes: ["40", "41", "42", "43", "44"],
    img: UNSPLASH_IMAGES.chaussures[1],
    description: "Sneaker basse d'inspiration tennis rétro. Cuir pleine fleur pleine épaisseur avec semelle cuvette cousue ultra-résistante."
  },
  {
    id: 10,
    name: "Sac Essentials Sable",
    category: "accessoires",
    price: 79,
    oldPrice: 109,
    badge: "Promo",
    sizes: ["Unique"],
    img: UNSPLASH_IMAGES.accessoires[1],
    description: "Sac bandoulière compact en nylon technique résistant à l'abrasion. Compartiment principal zippé pour vos essentiels du jour."
  },
  {
    id: 11,
    name: "T-Shirt Boxy Signature",
    category: "haut",
    price: 69,
    oldPrice: null,
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.haut[2],
    description: "T-shirt épais à col montant côtelé. Coupe large et tombé rigide, parfait pour superposer les couches."
  },
  {
    id: 12,
    name: "Bomber Volume Neutre",
    category: "vestes",
    price: 269,
    oldPrice: null,
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.vestes[2],
    description: "Blouson aviateur à la coupe contemporaine et épurée. Doublure matelassée chaude et finitions imperméabilisées."
  },
  {
    id: 13,
    name: "Pantalon Jogger Studio",
    category: "bas",
    price: 109,
    oldPrice: null,
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.bas[2],
    description: "Pantalon jogger en coton molletonné haut de gamme. Cordons de serrage avec embouts métalliques gravés et poches zippées invisibles."
  },
  {
    id: 14,
    name: "Chaussettes Archive Set",
    category: "accessoires",
    price: 39,
    oldPrice: null,
    badge: null,
    sizes: ["Unique"],
    img: UNSPLASH_IMAGES.accessoires[2],
    description: "Lot de trois paires de chaussettes de sport en maille côtelée épaisse. Confort supérieur et ajustement parfait."
  },
  {
    id: 15,
    name: "Doudoune Sans Manche Édition",
    category: "vestes",
    price: 189,
    oldPrice: 229,
    badge: "Promo",
    sizes: ["S", "M", "L", "XL"],
    img: UNSPLASH_IMAGES.vestes[3],
    description: "Gilet matelassé sans manche rembourré en duvet synthétique haute densité. Léger, chaud et doté d'une fermeture double curseur."
  },
  {
    id: 16,
    name: "Runner Contact 90 Noir",
    category: "chaussures",
    price: 249,
    oldPrice: null,
    badge: null,
    sizes: ["40", "41", "42", "43", "44"],
    img: UNSPLASH_IMAGES.chaussures[2],
    description: "Version monochrome noire de notre modèle phare Runner 90. Idéale pour parfaire un total look streetwear minimaliste."
  }
];

// ==========================================================================
// 2. STATE & STORAGE MANAGEMENT
// ==========================================================================
let cart = {};
let currentFilter = 'all';
let currentSort = 'newest';

function loadCart() {
  try {
    const stored = localStorage.getItem('monta_cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      cart = {};
      Object.keys(parsed).forEach(key => {
        const item = parsed[key];
        if (item && item.id) {
          const cleanQty = parseInt(item.qty, 10);
          const cleanPrice = parseInt(item.price, 10);
          if (!isNaN(cleanQty) && !isNaN(cleanPrice)) {
            cart[key] = {
              id: parseInt(item.id, 10),
              name: item.name || "Article",
              category: item.category || "haut",
              price: cleanPrice,
              size: item.size || "M",
              qty: cleanQty,
              img: item.img || ""
            };
          }
        }
      });
    }
  } catch (err) {
    console.warn("Storage local non disponible, fonctionnement en mémoire seule.", err);
    cart = {};
  }
}

function saveCart() {
  try {
    localStorage.setItem('monta_cart', JSON.stringify(cart));
  } catch (err) {
    console.warn("Échec d'enregistrement du panier dans localStorage.", err);
  }
}

// ==========================================================================
// 3. UTILITIES
// ==========================================================================
function esc(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function capitalizeCategory(cat) {
  const map = {
    'haut': 'Haut',
    'vestes': 'Vestes',
    'bas': 'Bas',
    'chaussures': 'Chaussures',
    'accessoires': 'Accessoires'
  };
  return map[cat] || cat;
}

// Stately Toast System
function showToast(message) {
  let container = document.querySelector('.monta-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'monta-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'monta-toast';
  toast.textContent = message;
  container.appendChild(toast);

  // Trigger stagger slide fade in
  setTimeout(() => {
    toast.classList.add('show');
  }, 20);

  // Stately dismiss
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 2500);
}

// Lock / Unlock Page scroll during overlays
function toggleScrollLock(lock) {
  if (lock) {
    document.body.style.overflow = 'hidden';
  } else {
    // Only unlock if both modal and cart drawer are closed
    const cartOpen = document.getElementById('cart-drawer')?.classList.contains('open');
    const modalOpen = document.getElementById('product-modal')?.hasAttribute('open');
    if (!cartOpen && !modalOpen) {
      document.body.style.overflow = '';
    }
  }
}

// ==========================================================================
// 4. RENDERING AND SHOP CONTROLS
// ==========================================================================
function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-grid-msg" style="grid-column:1/-1; text-align:center; padding:64px 24px; font-family:var(--font-sans); font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:var(--gray-40); border:1px dashed var(--gray-40);">
        Rien à afficher dans cette rubrique pour le moment.
      </div>
    `;
    return;
  }

  list.forEach((product, index) => {
    const frameIndex = String(index + 1).padStart(2, '0');
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-price', product.price);

    card.innerHTML = `
      <div class="product-media">
        <span class="product-frame-index">${frameIndex}</span>
        <img src="${product.img}" alt="${esc(product.name)}" loading="lazy">
        ${product.badge ? `<span class="badge">${esc(product.badge)}</span>` : ''}
        <button class="quick-add" data-id="${product.id}" aria-label="Ajouter au panier: ${esc(product.name)}">+ Panier</button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${esc(product.name)}</h3>
        <p class="product-cat">${esc(capitalizeCategory(product.category))}</p>
        <p class="product-price">
          ${product.oldPrice ? `<span class="product-old-price" style="text-decoration: line-through; color: var(--gray-40); font-weight: normal; margin-right: 8px; font-size: 0.9em;">${product.oldPrice} TND</span>` : ''}
          ${product.price} TND
        </p>
      </div>
    `;

    grid.appendChild(card);

    // Apply fade stagger animation safely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      card.classList.add('in');
    } else {
      setTimeout(() => {
        card.classList.add('in');
      }, index * 40);
    }
  });
}

function updateShop() {
  let list = [...PRODUCTS];

  // Composed Filtering
  if (currentFilter !== 'all') {
    list = list.filter(p => p.category === currentFilter);
  }

  // Composed Sorting
  if (currentSort === 'newest') {
    list.sort((a, b) => {
      const aNew = a.badge === 'Nouveau' ? 1 : 0;
      const bNew = b.badge === 'Nouveau' ? 1 : 0;
      if (aNew !== bNew) {
        return bNew - aNew;
      }
      return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
    });
  } else if (currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  }

  renderProducts(list);
}

// ==========================================================================
// 5. CART ENGINE & DRAWER ACTUATORS
// ==========================================================================
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartToggle = document.getElementById('cart-toggle');

function openCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  if (cartOverlay) {
    cartOverlay.classList.add('open');
    cartOverlay.setAttribute('aria-hidden', 'false');
  }
  if (cartToggle) {
    cartToggle.setAttribute('aria-expanded', 'true');
  }
  toggleScrollLock(true);

  // Accessibility Focus Trap setup
  setTimeout(() => {
    const focusables = cartDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusables.length > 0) {
      focusables[0].focus();
    }
  }, 50);
}

function closeCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  if (cartOverlay) {
    cartOverlay.classList.remove('open');
    cartOverlay.setAttribute('aria-hidden', 'true');
  }
  if (cartToggle) {
    cartToggle.setAttribute('aria-expanded', 'false');
  }
  toggleScrollLock(false);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalAmountEl = document.querySelector('#cart-total .total-amount');
  const countBadge = document.getElementById('cart-count');

  if (!container) return;

  const keys = Object.keys(cart);
  let grandTotal = 0;
  let itemCount = 0;

  if (keys.length === 0) {
    container.innerHTML = `<p class="empty-message">Votre panier est vide.</p>`;
  } else {
    let html = '';
    keys.forEach(key => {
      const item = cart[key];
      const cleanPrice = parseInt(item.price, 10) || 0;
      const cleanQty = parseInt(item.qty, 10) || 0;
      const linePrice = cleanPrice * cleanQty;
      grandTotal += linePrice;
      itemCount += cleanQty;

      html += `
        <div class="cart-item" data-key="${key}">
          <img src="${item.img}" alt="${esc(item.name)}" class="cart-item-img">
          <div class="cart-item-details">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="cart-item-name">${esc(item.name)}</span>
              <button class="cart-item-remove" data-key="${key}" aria-label="Retirer ${esc(item.name)} taille ${esc(item.size)}">&times;</button>
            </div>
            <div style="font-size:11px; text-transform:uppercase; color:var(--gray-40); margin-top:2px;">Taille: ${esc(item.size)}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
              <div class="cart-item-stepper">
                <button class="stepper-btn minus" data-key="${key}" aria-label="Diminuer la quantité">&minus;</button>
                <span class="stepper-val">${cleanQty}</span>
                <button class="stepper-btn plus" data-key="${key}" aria-label="Augmenter la quantité">&plus;</button>
              </div>
              <span class="cart-item-price">${linePrice} TND</span>
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // Update total prices
  if (totalAmountEl) {
    totalAmountEl.textContent = `${grandTotal} TND`;
  }

  // Update badge counter quietly
  if (countBadge) {
    countBadge.textContent = itemCount;
    countBadge.style.display = itemCount === 0 ? 'none' : 'inline-flex';
  }
}

function addToCart(id, size, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const key = `${id}-${size}`;
  const parsedQty = parseInt(qty, 10) || 1;
  const productPrice = parseInt(product.price, 10) || 89;

  if (cart[key]) {
    const existingQty = parseInt(cart[key].qty, 10) || 0;
    cart[key].qty = existingQty + parsedQty;
  } else {
    cart[key] = {
      id: product.id,
      name: product.name,
      category: product.category,
      price: productPrice,
      size: size,
      qty: parsedQty,
      img: product.img
    };
  }

  saveCart();
  renderCart();
  openCartDrawer();
  showToast("Article ajouté au panier");
}

function removeFromCart(key) {
  if (cart[key]) {
    delete cart[key];
    saveCart();
    renderCart();
    showToast("Article retiré du panier");
  }
}

function changeQty(key, delta) {
  if (cart[key]) {
    const parsedQty = parseInt(cart[key].qty, 10) || 0;
    const parsedDelta = parseInt(delta, 10) || 0;
    cart[key].qty = parsedQty + parsedDelta;
    if (cart[key].qty <= 0) {
      delete cart[key];
      showToast("Article retiré du panier");
    }
    saveCart();
    renderCart();
  }
}

// Focus Trapping engine in Drawer
if (cartDrawer) {
  cartDrawer.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = cartDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// ==========================================================================
// 6. PRODUCT QUICK-VIEW DIALOG MODAL
// ==========================================================================
const productModal = document.getElementById('product-modal');

function openProductModal(product) {
  if (!productModal) return;
  const body = document.getElementById('modal-body');
  if (!body) return;

  let sizeOptionsHtml = '';
  product.sizes.forEach((size, idx) => {
    sizeOptionsHtml += `
      <label style="cursor:pointer;">
        <input type="radio" name="modal-size" value="${esc(size)}" ${idx === 0 ? 'checked' : ''} class="sr-only">
        <span class="size-btn">${esc(size)}</span>
      </label>
    `;
  });

  body.innerHTML = `
    <div class="modal-grid">
      <div class="modal-media">
        <img src="${product.img}" alt="${esc(product.name)}">
      </div>
      <div class="modal-details">
        <h2 class="modal-title" id="modal-title">${esc(product.name)}</h2>
        <div class="modal-price">
          ${product.oldPrice ? `<span style="text-decoration: line-through; color: var(--gray-40); font-weight: normal; margin-right: 12px; font-size: 0.9em;">${product.oldPrice} TND</span>` : ''}
          <span>${product.price} TND</span>
        </div>
        
        <p class="modal-desc">${esc(product.description)}</p>
        
        <div class="modal-spec-sheet">
          <div class="spec-row">
            <span class="spec-label">Rubrique</span>
            <span class="spec-value">${esc(capitalizeCategory(product.category))}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Origine</span>
            <span class="spec-value">Metlaoui, TN</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Référence</span>
            <span class="spec-value">MNT-${product.id.toString().padStart(4, '0')}</span>
          </div>
        </div>
        
        <div class="modal-size-select-wrapper">
          <label>Sélectionner la Taille</label>
          <div class="modal-size-options">
            ${sizeOptionsHtml}
          </div>
        </div>
        
        <div class="modal-qty-wrapper" style="margin-bottom:32px;">
          <label for="modal-qty" style="display:block; font-family:var(--font-sans); font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--gray-40); margin-bottom:8px;">Quantité</label>
          <input type="number" id="modal-qty" value="1" min="1" style="border:1px solid var(--noir); padding:8px 12px; font-family:var(--font-sans); font-size:13px; width:70px; background-color:var(--blanc); color:var(--noir); outline:none;">
        </div>
        
        <button id="modal-add-btn" class="btn modal-add-to-cart" aria-label="Ajouter cet article au panier">Ajouter au panier</button>
        
        <a href="#" id="modal-wa-checkout" class="contact-link" style="margin-top:20px; text-align:center; display:block;" target="_blank" rel="noopener noreferrer">
          Commander direct sur WhatsApp
        </a>
      </div>
    </div>
  `;

  // Bind active size radio styling triggers
  const sizeInputs = body.querySelectorAll('input[name="modal-size"]');
  const sizeSpans = body.querySelectorAll('.size-btn');

  function refreshActiveRadioClass() {
    sizeInputs.forEach((input, index) => {
      if (input.checked) {
        sizeSpans[index].classList.add('active');
      } else {
        sizeSpans[index].classList.remove('active');
      }
    });
  }

  refreshActiveRadioClass();
  sizeInputs.forEach(input => input.addEventListener('change', refreshActiveRadioClass));

  // Add to cart inside modal handler
  const addBtn = body.querySelector('#modal-add-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const selectedInput = body.querySelector('input[name="modal-size"]:checked');
      const sizeVal = selectedInput ? selectedInput.value : product.sizes[0];
      const qtyInput = body.querySelector('#modal-qty');
      const qtyVal = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

      addToCart(product.id, sizeVal, qtyVal);
      productModal.close();
    });
  }

  // Deep linked Whatsapp checkout handler
  const waBtn = body.querySelector('#modal-wa-checkout');
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedInput = body.querySelector('input[name="modal-size"]:checked');
      const sizeVal = selectedInput ? selectedInput.value : product.sizes[0];
      const qtyInput = body.querySelector('#modal-qty');
      const qtyVal = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

      const orderText = `🛍️ *Commande Directe — MONTA*\n\nJe souhaite commander :\n- ${product.name} (Taille : ${sizeVal}) ×${qtyVal}\n\n💰 Prix : ${product.price * qtyVal} TND\n\nMerci de me confirmer la disponibilité.`;
      window.open(`https://wa.me/21624361489?text=${encodeURIComponent(orderText)}`, '_blank');
    });
  }

  productModal.showModal();
  toggleScrollLock(true);
}

// Bind modal closing triggers to unlock scroll
if (productModal) {
  productModal.addEventListener('close', () => {
    toggleScrollLock(false);
  });

  productModal.addEventListener('click', (e) => {
    const rect = productModal.getBoundingClientRect();
    const clickInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                           rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!clickInDialog) {
      productModal.close();
    }
  });

  const modalCloseBtn = document.getElementById('modal-close');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => productModal.close());
  }
}


// ==========================================================================
// 7. API DATA LOADER (MEN'S CLOTHING ONLY)
// ==========================================================================
async function loadAPIProducts() {
  let apiProducts = [];
  
  // 1. Attempt to fetch from Platzi Fake Store API
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=80');
    if (res.ok) {
      const data = await res.json();
      const feminineRegex = /women|woman|girl|lady|dress|skirt|female|heels|purse|makeup|pink/i;
      const clothingCategoryIds = [1, 4]; // Clothes (1), Shoes (4)
      
      apiProducts = data
        .filter(item => {
          const catId = item.category ? item.category.id : 0;
          if (!clothingCategoryIds.includes(catId)) return false;
          if (feminineRegex.test(item.title) || feminineRegex.test(item.description)) return false;
          return true;
        })
        .map(item => {
          const titleLower = item.title.toLowerCase();
          const catId = item.category ? item.category.id : 0;
          let category = 'haut';
          
          if (titleLower.includes('shoe') || titleLower.includes('runner') || titleLower.includes('sneaker') || catId === 4) {
            category = 'chaussures';
          } else if (titleLower.includes('jacket') || titleLower.includes('coat') || titleLower.includes('parka') || titleLower.includes('vest') || titleLower.includes('bomber')) {
            category = 'vestes';
          } else if (titleLower.includes('pant') || titleLower.includes('cargo') || titleLower.includes('jean') || titleLower.includes('jogger') || titleLower.includes('trouser') || titleLower.includes('shorts')) {
            category = 'bas';
          } else if (titleLower.includes('cap') || titleLower.includes('hat') || titleLower.includes('bag') || titleLower.includes('sock') || titleLower.includes('belt')) {
            category = 'accessoires';
          }
          
          let imgUrl = item.images && item.images[0] ? item.images[0] : '';
          if (imgUrl.startsWith('[') || imgUrl.startsWith('"')) {
            try {
              const parsed = JSON.parse(imgUrl);
              imgUrl = Array.isArray(parsed) ? parsed[0] : parsed;
            } catch (e) {
              imgUrl = imgUrl.replace(/[\[\]"']/g, '');
            }
          }
          
          const isBrokenHost = /placeimg|imgur|picsum|placeholder/i.test(imgUrl);
          if (!imgUrl || !imgUrl.startsWith('http') || isBrokenHost) {
            const list = UNSPLASH_IMAGES[category] || UNSPLASH_IMAGES.haut;
            imgUrl = list[item.id % list.length];
          }
          
          let sizes = ['S', 'M', 'L', 'XL'];
          if (category === 'chaussures') {
            sizes = ['40', '41', '42', '43', '44'];
          } else if (category === 'accessoires') {
            sizes = ['Unique'];
          }
          
          const price = Math.round(item.price * 3.2) || 89;
          const oldPrice = Math.random() > 0.8 ? Math.round(price * 1.25) : null;
          const badge = oldPrice ? "Promo" : (Math.random() > 0.85 ? "Nouveau" : null);
          
          return {
            id: item.id + 1000,
            name: item.title,
            category: category,
            price: price,
            oldPrice: oldPrice,
            badge: badge,
            sizes: sizes,
            img: imgUrl,
            description: item.description
          };
        });
    }
  } catch (err) {
    console.warn("Impossible de charger de Platzi Fake Store API, tentative suivante...", err);
  }
  
  // 2. Fallback to Fake Store API
  if (apiProducts.length === 0) {
    try {
      const res = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      if (res.ok) {
        const data = await res.json();
        apiProducts = data.map(item => {
          const titleLower = item.title.toLowerCase();
          let category = 'haut';
          if (titleLower.includes('jacket') || titleLower.includes('coat')) {
            category = 'vestes';
          }
          
          const price = Math.round(item.price * 3.2) || 99;
          return {
            id: item.id + 2000,
            name: item.title,
            category: category,
            price: price,
            oldPrice: null,
            badge: Math.random() > 0.5 ? "Nouveau" : null,
            sizes: ["S", "M", "L", "XL"],
            img: item.image || `https://placehold.co/600x750/FAF9F6/0E0D0C?text=${encodeURIComponent(item.title)}`,
            description: item.description
          };
        });
      }
    } catch (err) {
      console.warn("Impossible de charger de Fake Store API:", err);
    }
  }
  
  // 3. Merge or Apply
  if (apiProducts.length > 0) {
    const fallbackProducts = [...PRODUCTS];
    PRODUCTS.length = 0;
    PRODUCTS.push(...apiProducts.slice(0, 16), ...fallbackProducts);
    updateShop();
    showToast("Catalogue mis à jour avec succès depuis l'API");
  }
}

// ==========================================================================
// 8. INITIALIZATION AND ROUTER HOOKS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Inject scroll staggers & reveal CSS rules dynamically
  const dynamicCssStyle = document.createElement('style');
  dynamicCssStyle.textContent = `
    /* Restrained Stagger & Reveal CSS definitions */
    .product-card {
      opacity: 0;
      transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .product-card.in {
      opacity: 1;
    }
    
    /* Scroll Reveal Transitions */
    .category-card,
    .look-card,
    .section-rubric,
    .about-media,
    .about-editorial,
    .contact-masthead,
    .contact-details {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                  transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .category-card.in-view,
    .look-card.in-view,
    .section-rubric.in-view,
    .about-media.in-view,
    .about-editorial.in-view,
    .contact-masthead.in-view,
    .contact-details.in-view {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Toast Styling */
    .monta-toast-container {
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
    }
    .monta-toast {
      background-color: var(--noir);
      color: var(--blanc);
      border: 1px solid var(--gray-40);
      padding: 12px 20px;
      font-family: var(--font-sans);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: auto;
    }
    .monta-toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(dynamicCssStyle);

  // Initialize Cart and Grid
  loadCart();
  renderCart();
  updateShop();

  // Load API products asynchronously
  loadAPIProducts();

  // Category index numbering
  document.querySelectorAll('.category-card').forEach((card, idx) => {
    const indexSpan = card.querySelector('.cat-index');
    if (indexSpan) {
      indexSpan.textContent = String(idx + 1).padStart(2, '0');
    }
  });

  // Shop filter bar controller triggers
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (btn) {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        updateShop();
      }
    });
  }

  // Sort dropdown selector triggers
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      updateShop();
    });
  }

  // Header Search Input filters dynamically
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      let list = [...PRODUCTS];

      if (currentFilter !== 'all') {
        list = list.filter(p => p.category === currentFilter);
      }

      if (query !== '') {
        list = list.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
      }

      // Sort
      if (currentSort === 'newest') {
        list.sort((a, b) => {
          const aNew = a.badge === 'Nouveau' ? 1 : 0;
          const bNew = b.badge === 'Nouveau' ? 1 : 0;
          if (aNew !== bNew) return bNew - aNew;
          return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
        });
      } else if (currentSort === 'price-asc') {
        list.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-desc') {
        list.sort((a, b) => b.price - a.price);
      }

      renderProducts(list);
    });
  }

  // Header Search Drawer toggling
  const searchToggle = document.getElementById('search-toggle');
  const searchContainer = document.getElementById('search-container');
  if (searchToggle && searchContainer) {
    searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = searchToggle.getAttribute('aria-expanded') === 'true';
      searchToggle.setAttribute('aria-expanded', !isExpanded);
      searchContainer.classList.toggle('open');
      searchContainer.setAttribute('aria-hidden', isExpanded);
      if (!isExpanded) {
        const input = searchContainer.querySelector('input');
        if (input) input.focus();
      }
    });
  }

  // Product Grid delegation hooks (Cart additions and modal triggers)
  const productGrid = document.getElementById('product-grid');
  if (productGrid) {
    productGrid.addEventListener('click', (e) => {
      const quickAddBtn = e.target.closest('.quick-add');
      if (quickAddBtn) {
        e.stopPropagation();
        const id = parseInt(quickAddBtn.getAttribute('data-id'), 10);
        const product = PRODUCTS.find(p => p.id === id);
        if (product) {
          addToCart(product.id, product.sizes[0]);
        }
        return;
      }

      const card = e.target.closest('.product-card');
      if (card) {
        const qa = card.querySelector('.quick-add');
        if (qa) {
          const id = parseInt(qa.getAttribute('data-id'), 10);
          const product = PRODUCTS.find(p => p.id === id);
          if (product) {
            openProductModal(product);
          }
        }
      }
    });
  }

  // Cart Drawer opening and closing listeners
  if (cartToggle) {
    cartToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartDrawer && cartDrawer.classList.contains('open')) {
        closeCartDrawer();
      } else {
        openCartDrawer();
      }
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => closeCartDrawer());
  }

  const closeCartBtn = document.getElementById('cart-close');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => closeCartDrawer());
  }

  // Cart Drawer Delegation (Steppers, Removals)
  const cartItemsBox = document.getElementById('cart-items');
  if (cartItemsBox) {
    cartItemsBox.addEventListener('click', (e) => {
      const plusBtn = e.target.closest('.stepper-btn.plus');
      const minusBtn = e.target.closest('.stepper-btn.minus');
      const removeBtn = e.target.closest('.cart-item-remove');

      if (plusBtn) {
        const key = plusBtn.getAttribute('data-key');
        changeQty(key, 1);
      } else if (minusBtn) {
        const key = minusBtn.getAttribute('data-key');
        changeQty(key, -1);
      } else if (removeBtn) {
        const key = removeBtn.getAttribute('data-key');
        removeFromCart(key);
      }
    });
  }

  // Cart checkout Whatsapp URL builders
  const checkoutBtn = document.getElementById('checkout-whatsapp');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const keys = Object.keys(cart);
      if (keys.length === 0) {
        showToast("Votre panier est vide");
        return;
      }

      let orderText = `🛍️ *Nouvelle commande — MONTA*\n\n`;
      keys.forEach((key, index) => {
        const item = cart[key];
        const lineTotal = item.price * item.qty;
        orderText += `${index + 1}. ${item.name} (${item.size}) ×${item.qty} — ${lineTotal} TND\n`;
      });

      const grandTotal = keys.reduce((total, key) => total + cart[key].price * cart[key].qty, 0);
      orderText += `\n💰 *Total : ${grandTotal} TND*\n\n`;
      orderText += `Nom :\n`;
      orderText += `Adresse de livraison :\n`;
      orderText += `Téléphone :`;

      const whatsappLink = `https://wa.me/21624361489?text=${encodeURIComponent(orderText)}`;
      window.open(whatsappLink, '_blank');
    });
  }

  // Mobile Menu actuator
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });

    mobileMenu.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Sticky header transition trigger
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

  // Hero fade-in reveal triggers
  const heroLines = document.querySelectorAll('.hero-line');
  heroLines.forEach((line, index) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      line.style.opacity = '1';
      line.style.transform = 'none';
      return;
    }
    line.style.opacity = '0';
    line.style.transform = 'translateY(24px)';
    line.style.transition = 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
    
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'none';
    }, 300 + index * 400);
  });

  // Category Index Quick-routing to filter and shop sections
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const catVal = card.getAttribute('data-category');
      if (catVal) {
        e.preventDefault();

        // Switch filter bar selection
        const filterButton = document.querySelector(`.filter-btn[data-filter="${catVal}"]`);
        if (filterButton) {
          filterButton.click();
        }

        // Smooth scroll to shop grid
        const shopSection = document.getElementById('shop');
        if (shopSection) {
          const offsetHeight = document.getElementById('site-header').offsetHeight || 80;
          const pos = shopSection.getBoundingClientRect().top + window.pageYOffset - offsetHeight;
          window.scrollTo({
            top: pos,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          });
        }
      }
    });
  });

  // Scroll Reveal Intersection Observer triggers
  const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
          return;
        }
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.category-card, .look-card, .section-rubric, .about-media, .about-editorial, .contact-masthead, .contact-details').forEach(el => {
    scrollRevealObserver.observe(el);
  });

  // Smooth scroll links with Header Offset adjustments
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        const offsetHeight = document.getElementById('site-header').offsetHeight || 80;
        const pos = targetElement.getBoundingClientRect().top + window.pageYOffset - offsetHeight;

        window.scrollTo({
          top: pos,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    });
  });

  // Esc Key trigger drawer close actuator
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const isDrawerOpen = cartDrawer && cartDrawer.classList.contains('open');
      if (isDrawerOpen) {
        closeCartDrawer();
      }
    }
  });
});

// ==========================================================================
// 8. GLOBAL EXPOSURE FOR DEBUGGING
// ==========================================================================
window.MONTA = {
  products: PRODUCTS,
  cart: cart,
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  changeQty: changeQty,
  openProductModal: openProductModal,
  showToast: showToast
};
