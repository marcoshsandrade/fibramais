/* Site Cinematográfico · © 2026 Labrego IA · LBG-SC-2026-v1 */
window.SITE = {
  nome: "Fibramais",
  assinatura: "LBG-SC-20261029-B530304764",

  whatsapp: {
    numero: "5585985328200", // só dígitos, ex.: 5511999998888
    mensagem: "Olá! Quero saber mais sobre os planos da Fibramais.",
  },

  contato: {
    email: "{{EMAIL_DESTINO}}", // PENDENTE: e-mail que recebe o formulário
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "",
    assunto: "Novo contato pelo site Fibramais",
  },

  frames: {
    total: 160, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
  },
};
