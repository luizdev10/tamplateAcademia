// =====================================================================
// CONFIGURAÇÃO CENTRAL DO SITE
// Tudo o que muda de cliente para cliente fica aqui.
// Campos vazios ("") fazem o elemento correspondente sumir da tela.
// TODOS os valores abaixo são FICTÍCIOS (dados de exemplo).
// =====================================================================

const site = {
  // ---------- Marca ----------
  // O nome é dividido em duas partes: a segunda recebe a cor de destaque.
  nome: { inicio: "Academia", destaque: "Exemplo" },
  nomeCompleto: "Academia Exemplo",
  tituloDaPagina: "Academia Exemplo - Demonstração",
  slogan: "Saúde e bem-estar todos os dias",
  descricaoRodape:
    "Sua academia de alta performance em Cidade Exemplo. Focados em resultados reais e bem-estar constante.",
  anoCopyright: 2026,

  // ---------- Contato ----------
  telefone: "(00) 00000-0000", // texto exibido
  telefoneLink: "00000000000", // somente números, usado no tel:
  whatsapp: "5500000000000", // formato internacional, somente números
  email: "contato@exemplo.com.br",

  // ---------- Endereço ----------
  endereco: {
    rua: "Rua Exemplo, 123",
    bairro: "Centro",
    cidade: "Cidade Exemplo",
    uf: "UF",
    cep: "00000-000",
  },
  linkMapa: "", // ex.: link do Google Maps (vazio = não mostra)

  // ---------- Registros ----------
  cnpj: "00.000.000/0001-00",

  // ---------- Redes sociais (vazio = não mostra o botão) ----------
  redes: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },

  // ---------- Home ----------
  home: {
    tituloLinha1: "Proporcionando",
    tituloDestaque: "Saúde e Bem Estar",
    textoAntesDoNome: "Transforme sua rotina com um treinamento de alta performance. Na ",
    textoDepoisDoNome:
      " temos acompanhamento especializado para você superar seus limites todos os dias.",
  },

  servicos: [
    {
      titulo: "Musculação",
      desc: "Supere seus limites com treinos de força de alta performance.",
      cor: "border-orange-500",
    },
    {
      titulo: "Perda de Peso",
      desc: "Alcance sua melhor versão com foco em queima calórica e saúde.",
      cor: "border-red-500",
    },
    {
      titulo: "Reabilitação",
      desc: "Recupere sua mobilidade com acompanhamento especializado.",
      cor: "border-blue-500",
    },
  ],

  contatoSecao: {
    titulo: "Entre em contato conosco",
    subtitulo: "Escolha sua rede preferida e fale com a nossa equipe",
  },

  // ---------- Planos ----------
  planos: [
    {
      periodo: "Mensal",
      status: "Mais Popular",
      preco: "R$ 00",
      corBorda: "border-orange-500",
      corBotao: "bg-orange-500",
      corTexto: "text-orange-500",
      beneficios: ["30 Dias de acesso", "Acesso total", "Avaliação Física", "Parceiros de benefício"],
    },
    {
      periodo: "Quinzenal",
      status: "Básico",
      preco: "R$ 00",
      corBorda: "border-green-500",
      corBotao: "bg-green-500",
      corTexto: "text-green-500",
      beneficios: ["15 Dias de acesso", "Acesso total", "Avaliação Física", "", "", ""],
    },
    {
      periodo: "Semanal",
      status: "Comum",
      preco: "R$ 00",
      corBorda: "border-blue-500",
      corBotao: "bg-blue-500",
      corTexto: "text-blue-500",
      beneficios: ["7 Dias de acesso", "Acesso total", "", "", "", "", "", ""],
    },
  ],

  horario: {
    titulo: "Horário de funcionamento",
    texto:
      "Aqui, acreditamos que podemos extrair de você sua melhor versão. Venha nos visitar e faça uma aula experimental.",
    linhas: [
      { dias: "Segunda a Sexta", horas: "00:00 às 00:00" },
      { dias: "Sábado", horas: "00:00 às 00:00" },
    ],
  },

  faq: [
    { pergunta: "Quais as formas de pagamento?", resposta: "Aceitamos Pix, cartão, dinheiro ou débito." },
    { pergunta: "Tem taxa de matrícula ou anuidade?", resposta: "Exemplo: não temos taxa, apenas o valor da mensalidade." },
    { pergunta: "Preciso de contrato de fidelidade?", resposta: "Exemplo: não é necessário contrato de fidelidade." },
    { pergunta: "Os professores ajudam a montar a ficha?", resposta: "Sim, temos profissionais prontos para ajudar nos seus treinos." },
    { pergunta: "Quais os horários de pico?", resposta: "Exemplo: início da manhã e final da tarde." },
    { pergunta: "Aceitam convênios de academia?", resposta: "Exemplo: sim, consulte os parceiros disponíveis." },
  ],

  // ---------- Nutrição ----------
  nutricao: {
    etiqueta: "Consultoria Especializada",
    tituloInicio: "Sua meta é",
    tituloDestaque: "Resultado?",
    texto:
      "O treino constrói, mas a nutrição define. Tenha um plano alimentar estratégico desenhado para o seu metabolismo e rotina.",
    mensagemWhatsapp: "Olá! Gostaria de agendar uma consulta nutricional.",
    profissional: {
      nome: "Dr. Nome Exemplo",
      especialidade: "Nutrição Esportiva & Performance",
      registro: "CRN 0000", // vazio = não mostra
      fotoAlt: "Foto de exemplo do profissional de nutrição",
    },
    pilares: [
      {
        titulo: "Bioimpedância",
        descricao:
          "Análise detalhada da sua composição corporal, medindo gordura, massa muscular e hidratação.",
      },
      {
        titulo: "Plano Alimentar",
        descricao:
          "Protocolos nutricionais individualizados e flexíveis, pensados para a sua rotina e as suas preferências.",
      },
      {
        titulo: "Performance",
        descricao:
          "Estratégias de suplementação e nutrição pré/pós treino para maximizar sua força e acelerar sua recuperação.",
      },
    ],
    acompanhamento: [
      "Consulta Presencial ou Online",
      "Acesso ao App com sua Dieta",
      "Suporte via WhatsApp para dúvidas",
      "Guia de Compras no Supermercado",
      "Ebook de Receitas Fit exclusivas",
    ],
  },
};

// ---------- Helpers ----------
export const linkWhatsapp = (mensagem = "") =>
  `https://wa.me/${site.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ""}`;

export const enderecoLinhas = () => {
  const { rua, bairro, cidade, uf, cep } = site.endereco;
  return [rua, [bairro, [cidade, uf].filter(Boolean).join(" - ")].filter(Boolean).join(", "), cep && `CEP: ${cep}`].filter(Boolean);
};

export default site;
