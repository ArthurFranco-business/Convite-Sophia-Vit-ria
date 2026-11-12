/**
 * ====================================================================
 * CONFIGURAÇÃO DO SITE DE CONVITE DIGITAL - 15 ANOS SOPHIA VITÓRIA
 * ====================================================================
 * Todos os links externos e caminhos de imagens estão centralizados aqui.
 * Para alterar qualquer informação, basta editar os valores abaixo.
 */

const CONFIG = {
  // Dados da Debutante e Evento
  debutante: "Sophia Vitória",
  dataEvento: "16/01/2027",
  horarioEvento: "19:00h",
  local: {
    nome: "Salão Antonieta Eventos",
    endereco: "Rua Orlando Dei Santi, 2112",
    cidade: "Americana",
    estado: "São Paulo",
    cep: "13477-150"
  },

  // BOTÃO 1 - Link do Google Maps
  mapsUrl: "https://www.google.com/maps/place/R.+Orlando+Dei+Santi,+2112+-+Campo+Limpo,+Americana+-+SP,+13477-150/@-22.7296836,-47.2978015,17z/data=!4m16!1m9!3m8!1s0x94c89a05fb22242b:0xc89dd355345f5184!2sR.+Orlando+Dei+Santi,+2112+-+Campo+Limpo,+Americana+-+SP,+13477-150!3b1!8m2!3d-22.7299308!4d-47.2977154!10e5!16s%2Fg%2F11gcz3f_62!3m5!1s0x94c89a05fb22242b:0xc89dd355345f5184!8m2!3d-22.7299308!4d-47.2977154!16s%2Fg%2F11gcz3f_62?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D",

  // BOTÃO 3 - Link de Confirmação de Presença (RSVP)
  // Altere aqui sempre que precisar atualizar o link definitivo
  rsvpUrl: "https://assessoriavip.com.br/rsvpUnico/f71be860-ab0a-11f1-ad8f-bb8af7109401",

  // Caminhos das Imagens Oficiais
  images: {
    convitePrincipal: "assets/images/convite-principal.jpg",
    sugestoesPresentes: "assets/images/sugestoes-presentes.jpg",
    manualConvidado: "assets/images/manual-convidado.jpg"
  },

  // Páginas do projeto
  pages: {
    home: "index.html",
    presentes: "presentes.html",
    manual: "manual.html"
  },

  // Dados auxiliares para cópia do PIX (facilidade aos convidados)
  pix: {
    chaveCelular: "19998924831",
    chaveCelularFormatada: "(19) 99892-4831",
    chaveCpf: "45164376865",
    chaveCpfFormatada: "451.643.768-65"
  }
};

// Congela o objeto de configuração para evitar alterações acidentais em tempo de execução
if (typeof Object.freeze === "function") {
  Object.freeze(CONFIG);
  Object.freeze(CONFIG.local);
  Object.freeze(CONFIG.images);
  Object.freeze(CONFIG.pages);
  Object.freeze(CONFIG.pix);
}
