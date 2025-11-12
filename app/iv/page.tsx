"use client";

import Image from "next/image";
import { HeroVideoDialog } from "../components/ui/hero-video-dialog";
import { Marquee } from "../components/marquee";
import CardsCarousel from "../components/CardsCarousel";
import { useState } from "react";

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
      answer: "Sim. Esses temas são tratados em nossas trilhas de conhecimento e encontros com especialistas."
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

export default function IV() {
  const depoimentos = Array.from({ length: 10 }, (_, i) => i + 1);

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
      {/* Top Bar */}
      <div className="bg-white py-3 px-4">
        <div className="flex items-center justify-center gap-3">
          <p className="text-[#450655] text-sm md:text-base font-medium">
            Uma parceria Aldeia Singular e Instituto Virgolim
          </p>
          <Image
            src="/icones/parceiro.png"
            alt="Parceiro"
            width={40}
            height={40}
            className="h-6 w-6 md:h-8 md:w-8 object-contain"
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col overflow-hidden">
        {/* Background - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/mobile.jpg"
            alt="Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Background - Desktop */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/imagehero.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex-1 flex items-center py-12 md:py-16 lg:py-20">
          <div className="w-full">
            {/* Content Container */}
            <div className="text-left space-y-6 md:space-y-8 max-w-3xl">
              {/* Logo */}
              <div>
                <Image
                  src="/logo.png"
                  alt="Aldeia Singular"
                  width={200}
                  height={60}
                  priority
                  className="h-auto w-40 md:w-48 lg:w-56"
                />
              </div>
              
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                A jornada com um filho <span className="text-[#FF7167]">AHSD</span> não precisa ser solitária.
              </h1>
              
              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                A Aldeia Singular é uma comunidade que <span className="bg-gradient-to-r from-[#FF7167] to-[#FF9A8B] bg-clip-text text-transparent font-semibold">acolhe e fortalece mães e pais de crianças e adolescentes com Altas Habilidades e Superdotação</span>, identificados ou em processo de identificação. Criada e guiada pela Dra. Angela Virgolim, <span className="font-bold italic">é um espaço de pertencimento, aprendizado e transformação.</span>
              </p>
              
              {/* CTA Button */}
              <div className="pt-2">
                <a 
                  href="#precos" 
                  className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg border-2 border-white inline-block"
                >
                  QUERO FAZER PARTE DA COMUNIDADE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden md:overflow-visible aspect-[3/4] p-0 md:p-4 order-1 md:order-1">
            <div className="relative w-full h-full scale-100 md:scale-100">
              <Image
                src="/segundadobra.png"
                alt="Criança sorrindo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 text-left order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF7167] leading-tight mb-2 -mt-12 text-left">
              Para que seu filho possa brilhar, você precisa estar forte.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
              A jornada com Altas Habilidades é desafiadora: identificar os sinais, encontrar profissionais confiáveis, enfrentar preconceito na escola, falta de apoio familiar. É solidão, incerteza e <strong>gastos</strong> que não param.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
              No meio dessa batalha diária, descobrimos a peça que faltava:
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FF7167] text-left">
              Quem cuida de você?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
              Como você pode ser o porto-seguro do seu filho, se você também está sobrecarregado(a), incompreendido(a) e sem apoio?
            </p>
            <div className="flex justify-start">
              <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-8 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO FAZER PARTE DA COMUNIDADE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 border-2 md:border-4 border-[#FF7167] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12">
            {/* Left Card - Problems */}
            <div className="bg-[#450655] p-4 md:p-8 border-b-2 md:border-b-0 md:border-r-4 border-[#FF7167]">
              <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-2 text-center">Se você se sente...</h3>
              <div className="flex justify-center mb-4 md:mb-6">
                <Image 
                  src="/sublinhado.png" 
                  alt="" 
                  width={500} 
                  height={8}
                  className="h-auto w-full max-w-[300px] md:max-w-[500px]"
                />
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "...angustiada(o) com a intensidade emocional e a hipersensibilidade do seu filho, sem saber como agir ou acalmar.",
                  "...esgotada(o) de lutar com a escola, que rotula seu filho como \"birrento\", \"desatento\" ou \"antissocial\".",
                  "...perdida(o) e sobrecarregada(a) com o excesso de informações duvidosas e a dificuldade de encontrar profissionais confiáveis.",
                  "Com medo de ver o potencial brilhante do seu filho se transformar em frustração, tristeza ou apatia.",
                  "Completamente sozinha(o), mesmo rodeada(o) de pessoas, por ninguém entender o que você realmente passa."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <Image 
                      src="/nocheck.png" 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card - Solutions */}
            <div className="bg-[#450655] p-4 md:p-8">
              <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#FF7167] mb-2 text-center">Na Aldeia você...</h3>
              <div className="flex justify-center mb-4 md:mb-6">
                <Image 
                  src="/sublinhado.png" 
                  alt="" 
                  width={500} 
                  height={8}
                  className="h-auto w-full max-w-[300px] md:max-w-[500px]"
                />
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "...encontra aulas, trilhas e encontros ao vivo com a Dra. Angela para decodificar essa intensidade, transformando o que parecia \"difícil\" em potência e conexão.",
                  "...ganha ferramentas e guias práticos para \"falar a língua\" da escola, sabendo escolher o ambiente, exatamente o que pedir e como construir uma parceria que funcione.",
                  "...encontra um caminho seguro, um acervo de conhecimento validado por uma das maiores especialistas do Brasil e uma rede de profissionais indicados pela comunidade.",
                  "...aprende a nutrir a singularidade dele, ganhando confiança para tomar as decisões certas que garantem um futuro saudável e feliz.",
                  "...encontra sua tribo. Um acolhimento imediato na nossa comunidade 24/7, onde você é compreendida antes mesmo de terminar de falar."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <Image 
                      src="/check.png" 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ESSA TRANSFORMAÇÃO
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section Title */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-0 leading-tight">
          O que acontece quando você finalmente <span className="text-[#FF7167]">encontra sua tribo...</span>
        </h2>
      </div>

      {/* Testimonials Section */}
      <section 
        className="py-6 md:py-12 px-0 relative"
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full relative z-10">
          <div className="relative w-full">
            {/* Blur nas laterais */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#FFF0F5] via-[#FFF0F5]/60 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#FFF0F5] via-[#FFF0F5]/60 to-transparent z-10 pointer-events-none"></div>
            
            {/* Primeira linha - 5 primeiros depoimentos - entra da esquerda */}
            <div className="mb-4 md:mb-8 w-full">
              <Marquee pauseOnHover pauseOnTouch className="[--duration:40s] w-full" reverse={false}>
                {depoimentos.slice(0, 5).map((num) => (
                  <div key={num} className="flex-shrink-0 mx-4 md:mx-4">
                    <Image
                      src={`/depoimentos/Editados/${num}.png`}
                      alt={`Depoimento ${num}`}
                      width={400}
                      height={300}
                      className="rounded-xl md:rounded-2xl object-cover h-auto w-auto max-w-[400px] md:max-w-[400px]"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
            
            {/* Segunda linha - 5 últimos depoimentos - entra da direita */}
            <div className="w-full">
              <Marquee pauseOnHover pauseOnTouch className="[--duration:40s] w-full" reverse={true}>
                {depoimentos.slice(5, 10).map((num) => (
                  <div key={num} className="flex-shrink-0 mx-4 md:mx-4">
                    <Image
                      src={`/depoimentos/Editados/${num}.png`}
                      alt={`Depoimento ${num}`}
                      width={400}
                      height={300}
                      className="rounded-xl md:rounded-2xl object-cover h-auto w-auto max-w-[400px] md:max-w-[400px]"
                    />
                  </div>
                ))}
              </Marquee>
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
        <div className="w-screen bg-[#FF7167] relative overflow-hidden md:overflow-visible py-12 md:py-20 lg:py-10 -mx-4 md:mx-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden md:overflow-visible aspect-video bg-transparent -mt-12 md:-my-8 lg:-my-12 order-1 md:order-1">
                <Image
                  src="/mockup.png"
                  alt="Plataforma Desktop e Mobile"
                  fill
                  className="object-contain scale-150 md:scale-[2]"
                />
            </div>

            {/* Text Content */}
              <div className="space-y-4 md:space-y-6 order-2 md:order-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#450655]">Plataforma Exclusiva</h3>
                <p className="text-base md:text-lg text-white leading-relaxed">
                Cansados de portais de cursos genéricos, construímos a plataforma da Aldeia Singular do zero.
                O resultado é um ecossistema pensado para cada detalhe da sua jornada, unindo o conhecimento profundo da Dra. Angela Virgolim com a organização e a facilidade que você merece.                </p>
                <p className="text-base md:text-lg text-white leading-relaxed">
                Chega de se sentir perdido(a) em um mar de informações soltas ou em grupos de WhatsApp onde o conteúdo se perde.                </p>
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

          {/* Mobile Carousel */}
          <div className="md:hidden mb-8 md:mb-12">
            <CardsCarousel cards={cardsData} />
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

          <div className="text-center">
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ACESSAR A PLATAFORMA
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Guide Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-0">
            Quem vai te guiar nessa jornada?
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-[#FF7167] mb-6 md:mb-12">Conheça a Dra. Angela Virgolim</p>

          <div className="max-w-4xl mx-auto px-4">
            <HeroVideoDialog
              videoSrc="https://player.vimeo.com/video/1135528791?autoplay=1"
              thumbnailSrc="/thumb.jpg"
              thumbnailAlt="Apresentação da Dra. Angela Virgolim"
              animationStyle="from-center"
            />
          </div>
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
                    { text: "+ 55 encontros ao vivo", icon: "/icones_preço/55encontros.png" },
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
                <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors w-full max-w-md shadow-lg border-2 border-white inline-block text-center whitespace-nowrap">
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
          <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
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
                  src="/logo.png"
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
              className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-base transition-colors shadow-lg border-2 border-white inline-block"
            >
              ENTRAR PARA A ALDEIA SINGULAR
            </a>
          </div>

          <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
                © 2024 Aldeia Singular. Todos os direitos reservados.
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

