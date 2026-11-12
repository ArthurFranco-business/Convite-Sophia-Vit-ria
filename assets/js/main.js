/**
 * ====================================================================
 * SCRIPT PRINCIPAL - CONVITE DIGITAL 15 ANOS SOPHIA VITÓRIA
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initLinks();
  preloadImages();
  setupPixButtons();
});

/**
 * Conecta dinamicamente os links da central de configuração (config.js)
 * aos botões da página atual.
 */
function initLinks() {
  if (typeof CONFIG === "undefined") {
    console.error("Arquivo config.js não foi carregado!");
    return;
  }

  // 1. Botão Localização no Maps
  const btnMaps = document.getElementById("btn-maps");
  if (btnMaps && CONFIG.mapsUrl) {
    btnMaps.href = CONFIG.mapsUrl;
  }

  // 2. Botão Sugestões de Presentes
  const btnPresentes = document.getElementById("btn-presentes");
  if (btnPresentes && CONFIG.pages?.presentes) {
    btnPresentes.href = CONFIG.pages.presentes;
  }

  // 3. Botão Confirmar Presença (RSVP)
  const btnRsvp = document.getElementById("btn-rsvp");
  if (btnRsvp && CONFIG.rsvpUrl) {
    btnRsvp.href = CONFIG.rsvpUrl;
  }

  const btnRsvpFooter = document.getElementById("btn-rsvp-footer");
  if (btnRsvpFooter && CONFIG.rsvpUrl) {
    btnRsvpFooter.href = CONFIG.rsvpUrl;
  }

  // 4. Botão Manual do Convidado
  const btnManual = document.getElementById("btn-manual");
  if (btnManual && CONFIG.pages?.manual) {
    btnManual.href = CONFIG.pages.manual;
  }

  // Botões de Voltar
  const btnBack = document.querySelectorAll(".btn-back");
  btnBack.forEach((btn) => {
    btn.href = CONFIG.pages?.home || "index.html";
  });
}

/**
 * Pré-carrega as imagens secundárias em segundo plano
 * para que a abertura de Presentes e Manual seja instantânea.
 */
function preloadImages() {
  if (typeof CONFIG === "undefined" || !CONFIG.images) return;

  const imagesToPreload = [
    CONFIG.images.convitePrincipal,
    CONFIG.images.sugestoesPresentes,
    CONFIG.images.manualConvidado
  ];

  imagesToPreload.forEach((src) => {
    if (src) {
      const img = new Image();
      img.src = src;
    }
  });
}

/**
 * Configura os botões de copiar chave PIX (quando presentes na página)
 */
function setupPixButtons() {
  const btnPixPhone = document.getElementById("btn-copy-pix-phone");
  const btnPixCpf = document.getElementById("btn-copy-pix-cpf");

  if (btnPixPhone && CONFIG.pix?.chaveCelular) {
    btnPixPhone.addEventListener("click", () => {
      copyToClipboard(CONFIG.pix.chaveCelular, "Chave Pix (Telefone) copiada!");
    });
  }

  if (btnPixCpf && CONFIG.pix?.chaveCpf) {
    btnPixCpf.addEventListener("click", () => {
      copyToClipboard(CONFIG.pix.chaveCpf, "Chave Pix (CPF) copiada!");
    });
  }
}

/**
 * Função utilitária para copiar texto para a área de transferência
 * com fallback para navegadores antigos e celulares.
 */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    alert("Chave Pix: " + text);
  }
  document.body.removeChild(textArea);
}

/**
 * Exibe notificação flutuante suave (Toast)
 */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    toast.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span id="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }

  const messageSpan = toast.querySelector("#toast-message");
  if (messageSpan) messageSpan.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
