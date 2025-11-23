"use client";

import Image from "next/image";
import { HeroVideoDialog } from "./components/ui/hero-video-dialog";
import { Marquee } from "./components/marquee";
import { ShimmerButton } from "./components/ui/shimmer-button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Todas as perguntas sem duplicatas
  const allQuestions = [
    {
      question: "O que é a Aldeia Singular?",
      answer: "A Aldeia Singular é uma comunidade de acolhimento, aprendizado e apoio para mães, pais e familiares de crianças e adolescentes com Altas Habilidades e Superdotação (AHSD). Um espaço seguro para trocar experiências, fortalecer vínculos e aprender com especialistas convidados pela Dra. Angela Virgolim."
    },
    {
      question: "Posso participar mesmo que meu filho ainda não tenha sido identificado?",
      answer: "Sim. A Aldeia acolhe mães e pais que desconfiam, estão em processo de investigação ou já têm filhos identificados com AHSD."
    },
    {
      question: "Entrando agora, terei acesso aos conteúdos anteriores?",
      answer: "Sim! Você terá acesso imediato a todos os encontros e materiais já gravados."
    },
    {
      question: "O conteúdo é conduzido pela Dra. Angela Virgolim?",
      answer: "Sim. A Dra. Angela está presente na condução dos conteúdos e encontros, além de liderar toda a curadoria dos materiais e convidados."
    },
    {
      question: "A Aldeia substitui uma avaliação formal de AHSD?",
      answer: "Não. A Aldeia é um espaço de orientação e apoio, mas não realiza avaliações clínicas. Para identificação formal, é essencial procurar profissionais especializados."
    },
    {
      question: "Como posso interagir com outras mães e pais da Aldeia?",
      answer: "Você pode se conectar com outros membros da sua tribo, participar dos encontros online e interagir em um grupo digital exclusivo, criado especialmente para troca, acolhimento e aprendizado contínuo."
    },
    {
      question: "Meu filho já é adolescente (ou quase adulto). A Aldeia também serve para mim?",
      answer: "Sim. Nossos conteúdos abordam o desenvolvimento e os desafios das diferentes fases, da infância à adolescência, ajudando você a compreender e apoiar seu filho em cada etapa."
    },
    {
      question: "Como funciona o acesso à plataforma?",
      answer: "Assim que você entra para a Aldeia Singular, recebe imediatamente suas credenciais e o link para o grupo exclusivo da sua tribo."
    },
    {
      question: "Posso acessar o conteúdo no meu tempo?",
      answer: "Sim. Todos os conteúdos são gravados e ficam disponíveis na plataforma 24 horas por dia, para que você possa assistir no seu ritmo."
    },
    {
      question: "O conteúdo é atualizado?",
      answer: "Sim. Novos encontros e materiais são adicionados todos os meses, acompanhando as mais recentes pesquisas e descobertas sobre AHSD."
    },
    {
      question: "Como funciona o acervo digital?",
      answer: "Nosso acervo reúne vídeos, cursos, artigos e livros cuidadosamente selecionados pela Dra. Angela e sua equipe."
    },
    {
      question: "Quantos encontros acontecem por mês?",
      answer: "Temos um encontro por semana, em diferentes formatos: Plantões de Dúvidas, Rodas de Conversa, Trilhas de Conhecimento e encontros especiais com convidados."
    },
    {
      question: "O que são os Plantões de Dúvidas?",
      answer: "Acontecem a cada duas semanas, em formato ao vivo e coletivo. Antes de cada plantão, você pode enviar suas dúvidas sobre o tema proposto. O especialista convidado responde ao vivo, em um momento de escuta e orientação acolhedora."
    },
    {
      question: "O que são as Rodas de Conversa?",
      answer: "São encontros mensais, com temas que conectam as experiências das famílias e o olhar de especialistas convidados pela Dra. Angela."
    },
    {
      question: "Se eu não puder participar ao vivo, posso assistir depois?",
      answer: "Sim. Todos os encontros são gravados e disponibilizados na plataforma em até 48 horas."
    },
    {
      question: "Há encontros presenciais?",
      answer: "Sim. Os grupos locais podem organizar encontros presenciais, fortalecendo as conexões entre as famílias."
    },
    {
      question: "Como funcionam os grupos exclusivos?",
      answer: "Os grupos são organizados por região e perfil, com cerca de 30 membros cada. Eles promovem trocas próximas, acolhedoras e encontros locais entre mães e pais que vivem desafios semelhantes."
    },
    {
      question: "Há suporte para famílias com mais de um filho com AHSD?",
      answer: "Sim. Temos conteúdos e estratégias específicas para quem vive essa realidade."
    },
    {
      question: "E se meu filho tiver dupla condição ou dupla excepcionalidade (como AHSD + TDAH ou TEA)?",
      answer: "Esses temas são tratados em nossas trilhas de conhecimento e encontros com especialistas e fazem parte do conteúdo teórico e prático abordados na Aldeia Singular."
    },
    {
      question: "Os conteúdos têm base científica?",
      answer: "Sim. Todo o conteúdo é desenvolvido com base em pesquisas científicas e experiência clínica da Dra. Angela e de profissionais especializados."
    },
    {
      question: "Com a Aldeia, ainda preciso procurar outros especialistas?",
      answer: "Sim. A Aldeia não substitui o acompanhamento individual. Ela complementa o trabalho dos profissionais, oferecendo informação, apoio emocional e orientação prática."
    },
    {
      question: "Terei acesso a consultas individuais?",
      answer: "Não realizamos atendimentos clínicos. Nossos encontros são coletivos, como os Plantões de Dúvidas e Rodas de Conversa, que oferecem espaço para orientação e esclarecimento."
    },
    {
      question: "Como posso tirar dúvidas específicas?",
      answer: "Você pode participar dos Plantões de Dúvidas, enviar perguntas pelo seu grupo exclusivo ou conversar com nossa equipe de suporte."
    },
    {
      question: "Há suporte técnico disponível?",
      answer: "Sim. Nosso suporte funciona em horário comercial pelo WhatsApp, para ajudar com qualquer dificuldade de acesso ou uso da plataforma."
    },
    {
      question: "Posso cancelar minha assinatura?",
      answer: "Sim. Você pode cancelar a qualquer momento pela plataforma Hotmart."
    },
    {
      question: "Tenho algum período de garantia?",
      answer: "Sim. Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor investido."
    }
  ];

  // Primeiras 6 perguntas são os destaques
  const highlights = allQuestions.slice(0, 6);
  // Resto das perguntas
  const moreQuestions = allQuestions.slice(6);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 md:mb-8">
          Dúvidas frequentes
        </h2>

        {/* Destaques */}
        <div className="mb-6 md:mb-8">
          <div className="space-y-3 md:space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md border-2 border-[#FF7167]">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <p className="text-base md:text-lg font-semibold text-gray-900">{item.question}</p>
                  <svg 
                    className={`w-5 h-5 md:w-6 md:h-6 text-[#FF7167] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ver mais perguntas */}
        {!showMore && (
          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="text-[#450655] hover:text-[#450655]/80 text-sm md:text-base"
            >
              Ver mais perguntas
            </button>
          </div>
        )}

        {/* Todas as outras perguntas */}
        {showMore && (
          <div className="space-y-3 md:space-y-4">
            {moreQuestions.map((item, index) => {
              const globalIndex = highlights.length + index;
              return (
                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md border-2 border-[#FF7167]">
                  <button
                    onClick={() => toggleQuestion(globalIndex)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <p className="text-base md:text-lg font-semibold text-gray-900">{item.question}</p>
                    <svg 
                      className={`w-5 h-5 md:w-6 md:h-6 text-[#FF7167] flex-shrink-0 transition-transform ${openIndex === globalIndex ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === globalIndex && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const depoimentos = Array.from({ length: 10 }, (_, i) => i + 1);

  // Suporte para swipe em mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentTestimonial((prev) => (prev === depoimentosTextos.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentTestimonial((prev) => (prev === 0 ? depoimentosTextos.length - 1 : prev - 1));
    }
  };
  
  // Depoimentos reais com textos do depoimentos.md - Todos os 10
  const depoimentosTextos = [
    {
      texto: "Amo te ouvir! Sempre aprendo! Muito bom ter a oportunidade de estar ao seu lado! Obrigada pela generosidade de compartilhar seu conhecimento!",
      autor: "@aceciliamelo",
      imagem: 1,
      destaque: true
    },
    {
      texto: "Construiu sólidas contribuições em documentos oficiais, escreveu livros, teóricos e de práticas, formou e forma profissionais e, continua atuante por meio da práxis a relevante função de atender, ensinar, enriquecer",
      autor: "@biacamposlara",
      imagem: 2,
      destaque: false
    },
    {
      texto: "Maravilhosa! Pioneira nos estudos das AH/SD no Brasil! Autoridade no assunto! Você me inspira muito, querida! Muito mesmo!",
      autor: "@synapsis_neuroaprendizagem",
      imagem: 3,
      destaque: true
    },
    {
      texto: "Tem sido maravilhoso acompanhar seu conteúdo aqui e poder compartilhar nos grupos de pais. Minha admiração, brotada da leitura de alguns dos seus escritos - robustos, claros e de ampla visão - só aumenta! Obrigada por essa importante iniciativa!",
      autor: "@acarolinaina",
      imagem: 4,
      destaque: false
    },
    {
      texto: "Tão maravilhosa! Tive o prazer de fazer o curso com aquela riqueza do pipocas. Mudei muito minha prática em sala de recursos e também meu comportamento com meu filho. A história teve novos rumos com mais alegria e criatividade por aqui depois de te conhecer.",
      autor: "@mcececipsividalev",
      imagem: 5,
      destaque: true
    },
    {
      texto: "Maravilhosa!! Excelente profissional e pessoa excepcional!! Agradeço todos os ensinamentos e por ter cruzado meu caminho!",
      autor: "@gabrielicorcino",
      imagem: 6,
      destaque: false
    },
    {
      texto: "Dra. Ângela dentre todas as coisas que já foram ditas destaco sua amabilidade, simplesmente e afetividade que aliadas à ciência produzem resultados muito maiores. Grande beijo!!",
      autor: "@helenssanz",
      imagem: 7,
      destaque: true
    },
    {
      texto: "Uma grande amiga do Programa de Atendimento às Altas Habilidades da Secretaria de Educação do DF! Sempre presente na formação dos profissionais que atuam nas salas de recursos da rede pública. Temos muita gratidão e admiração por você!",
      autor: "@superdotacao_em_casa",
      imagem: 8,
      destaque: false
    },
    {
      texto: "Que belíssima trajetória! Uma profissional que reúne a profundidade teórica, a aplicabilidade dos conceitos e, principalmente, a sensibilidade na condução e orientação de pais, professores e crianças para que possam compreender as AHSD e colocá-la a serviço da vida. Sou eternamente grata pelos ensinamentos recebidos.",
      autor: "@psimellissafguimaraes",
      imagem: 9,
      destaque: true
    },
    {
      texto: "Que linda a sua trajetória! Vejo a grande necessidade desse apoio às famílias de crianças e jovens AH/SD. Parabéns Dra. Ângela pelo belo trabalho que desenvolveu nessa área. Sou admiradora sua e leitora dos seus livros e materiais sobre AH/SD.",
      autor: "@juliana_fac",
      imagem: 10,
      destaque: false
    }
  ];

  const cardsData = [
    {
      image: "/imagem_card/trilhas de conhecimento.jpg",
      icon: "/icones/montanha_icone.png",
      title: "Trilhas de<br />Conhecimento",
      description: "Participe dos encontros ao vivo<br />ou assista às gravações que<br />ajudam você a entender o que<br />são Altas Habilidades e Superdotação,<br />compreender melhor o seu filho e se<br />fortalecer como mãe ou pai.",
    },
    {
      image: "/imagem_card/entrevistas com especialistas.jpg",
      icon: "/icones/rodas_icone.png",
      title: "Entrevistas com<br />especialistas",
      description: "A Dra. Angela convida mensalmente<br />especialistas para conversas ao<br />vivo sobre temas como identificação,<br />escola, convivência, autocuidado e o<br />papel da família.",
    },
    {
      image: "/imagem_card/plantões de súvidas.jpg",
      icon: "/icones/plantao_icone.png",
      title: "Plantões de<br />Dúvidas",
      description: "Duas vezes por mês, encontros<br />coletivos com especialistas para<br />responder dúvidas reais<br />dos membros.",
    },
    {
      image: "/imagem_card/acervo digital.jpg",
      icon: "/icones_preço/livros.png",
      title: "Acervo<br />Digital",
      description: "Acesso a uma biblioteca completa<br />de materiais, artigos, livros e<br />recursos exclusivos para apoiar<br />sua jornada como pai ou mãe<br />de criança AHSD.",
      iconOpacity: "opacity-0",
    },
    {
      image: "/imagem_card/grupos locais.jpg",
      icon: "/icones_cards/grupos.png",
      title: "Grupos<br />Locais",
      description: "Conecte-se com outros pais<br />da sua região através de grupos<br />locais organizados, criando<br />uma rede de apoio próxima<br />e acolhedora.",
    },
    {
      image: "/imagem_card/ferramentas praticas.jpg",
      icon: "/icones_cards/ferramentas.png",
      title: "Ferramentas<br />Práticas",
      description: "Estratégias e ferramentas aplicáveis<br />no dia a dia para lidar com<br />desafios específicos, desde<br />comunicação até organização<br />da rotina familiar.",
      imagePosition: "object-left",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1f2] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col overflow-hidden bg-[#f7f1f2]">
        {/* Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex-1 flex items-center py-12 md:py-16 lg:py-20">
          <div className="w-full">
            <div className="text-center space-y-6 md:space-y-12">
              {/* Logo */}
              <div className="flex justify-center">
                <Image
                  src="/amarela.png"
                  alt="Aldeia Singular"
                  width={200}
                  height={60}
                  priority
                  className="h-auto w-40 md:w-48 lg:w-56"
                />
              </div>
              
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#FFAF24]">
                  A jornada com um filho <span className="text-[#FF7167] underline decoration-[#FF7167] decoration-2 underline-offset-4">AHSD</span> não precisa ser solitária.
                </span>
              </h1>
              
              {/* Subtítulo */}
              <div className="flex justify-center">
                <ShimmerButton
                  borderRadius="100px"
                  shimmerDuration="3s"
                  className="font-semibold text-sm md:text-base"
                >
                  Assista ao vídeo antes de seguir
                </ShimmerButton>
              </div>
              
              {/* Video da Dra. Angela */}
              <div className="w-full max-w-4xl mx-auto">
                <HeroVideoDialog
                  videoSrc="https://player.vimeo.com/video/1135528791?autoplay=1"
                  thumbnailSrc="/thumb.jpg"
                  thumbnailAlt="Apresentação da Dra. Angela Virgolim"
                  animationStyle="from-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 2: A Ponte Emocional */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-left">
            {/* Título Principal */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Para que seu filho possa brilhar, <span className="text-[#FF7167]">você precisa estar forte.</span>
            </h2>
            
            {/* Texto de Apoio */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
              A jornada com Altas Habilidades é desafiadora. Identificar os sinais é apenas o começo; a verdadeira batalha acontece no dia a dia, quando a teoria encontra a realidade.
            </p>
            
            {/* Gancho Final */}
            <p className="text-lg md:text-xl text-gray-900 font-bold italic">
              Se você se identifica com as situações abaixo, a Aldeia foi feita para você:
            </p>
          </div>
        </div>
      </section>

      {/* DOBRA 3: O "Sanduíche de Solução" */}
      <section className="py-12 md:py-20 px-6 bg-[#f7f1f2]">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Par 1: Escola */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* A Dor */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✕
                </div>
                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium">
                  Cansada de lutar com a escola que rotula seu filho como "birrento" ou "desatento"?
                </p>
              </div>
            </div>
            
            {/* Seta de Transição */}
            <div className="flex justify-center bg-white py-2">
              <div className="text-3xl text-[#FF7167]">⬇</div>
            </div>
            
            {/* A Solução */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-[#450655] font-bold text-sm uppercase tracking-wide mb-2">Na Aldeia</p>
                  <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                    Você ganha guias práticos para "falar a língua" da escola e construir uma parceria que funcione.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Par 2: Emoções */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* A Dor */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✕
                </div>
                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium">
                  Angustiada com a intensidade emocional dele e sem saber como acalmar?
                </p>
              </div>
            </div>
            
            {/* Seta de Transição */}
            <div className="flex justify-center bg-white py-2">
              <div className="text-3xl text-[#FF7167]">⬇</div>
            </div>
            
            {/* A Solução */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-[#450655] font-bold text-sm uppercase tracking-wide mb-2">Na Aldeia</p>
                  <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                    Aulas diretas com a Dra. Angela para decodificar essa intensidade e gerar conexão real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Par 3: Solidão */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* A Dor */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✕
                </div>
                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium">
                  Sentindo-se sozinha, rodeada de pessoas que não entendem o que você passa?
                </p>
              </div>
            </div>
            
            {/* Seta de Transição */}
            <div className="flex justify-center bg-white py-2">
              <div className="text-3xl text-[#FF7167]">⬇</div>
            </div>
            
            {/* A Solução */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-[#450655] font-bold text-sm uppercase tracking-wide mb-2">Na Aldeia</p>
                  <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                    Uma tribo 24/7. Você será compreendida antes mesmo de terminar de falar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Par 4: Confiança */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* A Dor */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✕
                </div>
                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium">
                  Perdida no excesso de informações duvidosas da internet?
                </p>
              </div>
            </div>
            
            {/* Seta de Transição */}
            <div className="flex justify-center bg-white py-2">
              <div className="text-3xl text-[#FF7167]">⬇</div>
            </div>
            
            {/* A Solução */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-[#450655] font-bold text-sm uppercase tracking-wide mb-2">Na Aldeia</p>
                  <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                    Um caminho seguro com conhecimento validado por uma das maiores especialistas do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section - Carrossel */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12 leading-tight">
            O que acontece quando você finalmente <span className="text-[#FF7167]">encontra sua tribo...</span>
          </h2>

          {/* Carrossel Container */}
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Card do Depoimento Atual com Animações */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border-2 border-[#FF7167]/30 p-6 md:p-8 min-h-[400px] md:min-h-[450px] flex flex-col"
              >
                {/* Ícone de aspas */}
                <div className="absolute top-4 left-4 text-[#FF7167]/20">
                  <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Badge decorativo */}
                <div className="absolute top-4 right-4 bg-[#FF7167] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  ⭐ Depoimento Real
                </div>

                {/* Conteúdo do depoimento */}
                <div className="relative pt-16 md:pt-20 flex-1 flex flex-col justify-between">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium flex-1"
                  >
                    "{depoimentosTextos[currentTestimonial].texto}"
                  </motion.p>
                  
                  {/* Autor */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 pt-4 border-t-2 border-[#FF7167]/20"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-[#FF7167] flex-shrink-0">
                      <Image
                        src={`/depoimentos/Editados/${depoimentosTextos[currentTestimonial].imagem}.png`}
                        alt={depoimentosTextos[currentTestimonial].autor}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#450655] font-semibold text-sm md:text-base">
                        {depoimentosTextos[currentTestimonial].autor}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botões de Navegação */}
            <motion.button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? depoimentosTextos.length - 1 : prev - 1))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#FF7167] w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center z-10 backdrop-blur-sm"
              aria-label="Depoimento anterior"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => setCurrentTestimonial((prev) => (prev === depoimentosTextos.length - 1 ? 0 : prev + 1))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#FF7167] w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center z-10 backdrop-blur-sm"
              aria-label="Próximo depoimento"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {depoimentosTextos.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentTestimonial ? 32 : 8,
                    backgroundColor: index === currentTestimonial ? '#FF7167' : '#D1D5DB'
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full cursor-pointer"
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-0 leading-tight">
            O que tem dentro da Aldeia?
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl text-[#FF7167] font-bold text-center mb-4 mt-0 leading-tight">Descubra tudo que te espera na nossa comunidade.</p>
          <p className="text-base md:text-lg text-gray-700 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Uma plataforma exclusiva criada especialmente para apoiar pais na jornada de criar filhos com altas habilidades e superdotação.
          </p>
        </div>

        {/* Plataforma Autoral Exclusiva - Full Width Orange Section */}
        <div className="w-screen bg-[#FF7167] relative overflow-visible pt-12 md:pt-20 lg:pt-10 pb-16 md:pb-24 lg:pb-20 -mx-4 md:mx-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center">
              {/* Video */}
              <div className="relative rounded-2xl overflow-visible aspect-video bg-transparent w-full max-w-4xl">
                <HeroVideoDialog
                  videoSrc="https://player.vimeo.com/video/1139764781?autoplay=1"
                  thumbnailSrc="/mockup.png"
                  thumbnailAlt="Plataforma Desktop e Mobile - Aldeia Singular"
                  animationStyle="from-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intuitive Navigation Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF7167] text-center mb-6 md:mb-8 leading-tight">
            Você encontra tudo de forma intuitiva em um só lugar:
          </h2>

          {/* Mobile Stack */}
          <div className="md:hidden mb-8 md:mb-12 flex flex-col gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-6 shadow-lg border-2 border-[#FF7167] overflow-hidden min-h-[350px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className={`object-cover scale-110 ${card.imagePosition || ""}`}
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center h-full flex flex-col justify-center">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={card.icon}
                      alt=""
                      width={80}
                      height={80}
                      className={`h-16 w-16 object-contain ${card.iconOpacity || ""}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FF7167] mb-3">
                    {card.title.split("<br />").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.title.split("<br />").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-sm text-white leading-relaxed">
                    {card.description.split("<br />").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.description.split("<br />").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative rounded-3xl md:rounded-4xl p-6 md:p-8 shadow-lg border-2 md:border-4 border-[#FF7167] overflow-hidden min-h-[350px] md:min-h-[400px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className={`object-cover scale-110 ${card.imagePosition || ""}`}
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center h-full flex flex-col justify-center">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={card.icon}
                      alt=""
                      width={80}
                      height={80}
                      className={`h-16 w-16 md:h-20 md:w-20 object-contain ${card.iconOpacity || ""}`}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FF7167] mb-3 md:mb-4">
                    {card.title.split("<br />").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.title.split("<br />").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    {card.description.split("<br />").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.description.split("<br />").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center">
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ACESSAR A PLATAFORMA
            </a>
          </div> */}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8 leading-tight">
            Quanto tenho que investir para<span className="text-[#FF7167]"> fazer parte da Aldeia?</span>
          </h2>

          <div className="max-w-5xl mx-auto bg-[#f7f1f2] rounded-2xl shadow-2xl overflow-visible">
            <div className="grid md:grid-cols-2">
              {/* Left Column - Benefits */}
              <div className="bg-white pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 text-gray-900 overflow-visible order-1 md:order-1">
                <div className="mb-0 -mt-12 md:-mt-12 lg:-mt-20">
                  <Image
                    src="/mockup.png"
                    alt="Plataforma Aldeia Singular"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold mb-2 text-center md:text-left leading-tight">
                  Acolher é o primeiro passo para transformar
                </h3>
                <div className="flex justify-center mb-4 md:mb-6">
                  <Image 
                    src="/sublinhado.png" 
                    alt="" 
                    width={500} 
                    height={8}
                    className="h-auto w-full max-w-[300px] md:max-w-[500px]"
                    style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(90%) saturate(3000%) hue-rotate(260deg) brightness(0.6) contrast(1.2)' }}
                  />
                </div>
                <ul className="space-y-3 md:space-y-4 text-[#450655]">
                  {[
                    { text: " Acesso à Plataforma Exclusiva<br />Aldeia Singular", icon: "/icones_preço/celular.png" },
                    { text: "+ 50 encontros ao vivo por ano", icon: "/icones_preço/55encontros.png" },
                    { text: "+ 110h de conteúdos e conhecimento", icon: "/icones_preço/110horas.png" },
                    { text: "Curso PAPAiS Express – Programa de Apoio aos Pais de Superdotados", icon: "/icones_preço/curso_papais.png" },
                    { text: "Livros, artigos, lives e materiais complementares.", icon: "/icones_preço/livros.png" },
                    { text: "Ferramentas e estratégias aplicáveis", icon: "/icones_preço/ferramentas.png" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 md:gap-3">
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
                      />
                      <span className="text-sm md:text-base lg:text-lg">
                        {item.text.split("<br />").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < item.text.split("<br />").length - 1 && <br />}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Price */}
              <div className="p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-[#450655] order-2 md:order-2">
                <div className="mb-4 md:mb-6">
                  <Image
                    src="/icone.svg"
                    alt="Ícone"
                    width={80}
                    height={80}
                    className="w-64 h-16 md:w-80 md:h-20"
                  />
                </div>
                <div className="text-center mb-6 md:mb-8 bg-white rounded-3xl md:rounded-4xl py-4 md:py-6 px-4 md:px-6 border-2 border-[#FF7167] w-full">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF7167] mb-2">
                    TUDO ISSO POR APENAS
                  </p>
                  <p className="text-3xl md:text-4xl lg:text-5xl text-[#FF7167] mb-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#450655]">12x de </span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic">R$ 98</span>
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-[#450655]">ou R$ 947,58 à vista</p>
                </div>
                <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors w-full max-w-md shadow-lg border-2 border-white inline-block text-center whitespace-nowrap">
                 ENTRAR PARA A ALDEIA SINGULAR
                </a>
                <div className="mt-4 md:mt-6 flex flex-col items-center">
                  <Image
                    src="/escudo.png"
                    alt="Escudo"
                    width={40}
                    height={40}
                    className="mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10"
                  />
                  <p className="text-white text-center text-xs md:text-sm">
                    Garantia incondicional de 7 dias .<br />
                    Cancelamento fácil e transparente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section - Test Purple */}
      <section className="py-12 md:py-20 px-4 bg-[#450655]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 md:mb-8 uppercase leading-tight">
            VOCÊ NÃO ESTÁ INVESTINDO NA COMUNIDADE...
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-10 leading-relaxed px-4">
            Está investindo no seu bem-estar, da sua família. No futuro do seu filho, na tranquilidade da sua casa. Pois esse é o lema da nossa comunidade:
          </p>
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-10 leading-relaxed px-4">
            <p><span className="text-[#F9B214]">Pais</span> acolhidos.</p>
            <p><span className="text-[#F9B214]">Filhos</span> compreendidos.</p>
            <p><span className="text-[#F9B214]">Lares</span> fortalecidos.</p>
          </div>
          <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg border-2 border-white inline-block">
            QUERO ENTRAR PARA A ALDEIA SINGULAR
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#450655] to-[#6B1A7F] text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 md:mb-6 flex justify-center">
            <Image
                  src="/amarela.png"
                  alt="Aldeia Singular"
                  width={180}
                  height={54}
              className="h-auto w-32 md:w-40 lg:w-48"
                />
              </div>
          
          {/* WhatsApp Button and CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 md:mb-8">
            <a
              href="https://wa.me/5561999093760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-4 py-2 md:px-6 md:py-3 transition-colors text-sm md:text-base flex items-center gap-2"
              aria-label="Fale conosco no WhatsApp"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Fale conosco</span>
            </a>
            <a
              href="https://pay.hotmart.com/L102866611N"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg border-2 border-white inline-block"
            >
              ENTRAR PARA A ALDEIA SINGULAR
            </a>
          </div>

          <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
                © 2025 Aldeia Singular. Todos os direitos reservados.
              </p>
          
          {/* Subrodapé */}
          <div className="border-t border-white/20 pt-6 md:pt-8 space-y-3 md:space-y-4">
            <p className="text-white/80 text-xs md:text-sm max-w-3xl mx-auto px-4">
              A Aldeia Singular não substitui as avaliações para identificação de Altas Habilidades e Superdotação e outras Neurodivergências. Somos uma comunidade de mães e pais de filhos de AHSD, que buscam desenvolvimento pessoal, educação parental e bem-estar.
            </p>
            <p className="text-white font-bold text-sm md:text-base">
              Desenvolvido por Aldeia Singular
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
