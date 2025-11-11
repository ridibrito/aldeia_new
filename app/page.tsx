import Image from "next/image";
import { HeroVideoDialog } from "./components/ui/hero-video-dialog";
import { Marquee } from "./components/marquee";
import CardsCarousel from "./components/CardsCarousel";

export default function Home() {
  const depoimentos = Array.from({ length: 10 }, (_, i) => i + 1);

  const cardsData = [
    {
      image: "/montanha.jpg",
      icon: "/icones/montanha_icone.png",
      title: "Trilhas de:<br />Conhecimento",
      description: "Participe dos encontros ao vivo<br />ou assista às gravações que<br />ajudam você a entender o que<br />são Altas Habilidades e Superdotação,<br />compreender melhor o seu filho e se<br />fortalecer como mãe ou pai.",
    },
    {
      image: "/rodas.jpg",
      icon: "/icones/rodas_icone.png",
      title: "Entrevistas com:<br />especialistas",
      description: "A Dra. Angela convida mensalmente<br />especialistas para conversas ao<br />vivo sobre temas como identificação,<br />escola, convivência, autocuidado e o<br />papel da família.",
    },
    {
      image: "/plantao.jpg",
      icon: "/icones/plantao_icone.png",
      title: "Plantões de:<br />Dúvidas",
      description: "Duas vezes por mês, encontros<br />coletivos com especialistas para<br />responder dúvidas reais<br />dos membros.",
    },
    {
      image: "/acervo.jpg",
      icon: "/icones_preço/livros.png",
      title: "Acervo<br />Digital",
      description: "Acesso a uma biblioteca completa<br />de materiais, artigos, livros e<br />recursos exclusivos para apoiar<br />sua jornada como pai ou mãe<br />de criança AHSD.",
      iconOpacity: "opacity-0",
    },
    {
      image: "/grupos.jpg",
      icon: "/icones_cards/grupos.png",
      title: "Grupos<br />Locais",
      description: "Conecte-se com outros pais<br />da sua região através de grupos<br />locais organizados, criando<br />uma rede de apoio próxima<br />e acolhedora.",
    },
    {
      image: "/ferramentas.png",
      icon: "/icones_cards/ferramentas.png",
      title: "Ferramentas<br />Práticas",
      description: "Estratégias e ferramentas aplicáveis<br />no dia a dia para lidar com<br />desafios específicos, desde<br />comunicação até organização<br />da rotina familiar.",
      imagePosition: "object-left",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1f2] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[300px] md:h-[90vh] md:min-h-[600px] flex flex-col px-4 py-6 md:py-12 md:py-20 overflow-hidden">
        {/* Background - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden overflow-hidden">
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
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <Image
            src="/imagehero.png"
            alt="Background"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Main Content - Two Columns */}
        <div className="relative z-10 w-full mx-auto px-2 flex-1 flex items-start md:items-center pt-8 md:pt-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Left Column - Headline */}
            <div className="text-left w-full relative z-20">
              <Image
                src="/logo.png"
                alt="Aldeia Singular"
                width={200}
                height={60}
                priority
                className="h-auto mb-4 w-50 md:w-32 lg:w-48"
              />
              <h1 className="text-2xl md:text-xl lg:text-4xl xl:text-5xl font-bold text-[#ffffff] mb-4 md:mb-6 leading-tight text-left md:text-left">
              A jornada com um filho <span className="text-[#FF7167]">AHSD</span> não precisa ser solitária.
          </h1>
              <p className="text-md md:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 md:mb-0">
                A Aldeia Singular é uma comunidade que <span className="bg-gradient-to-r from-[#FF7167] to-[#FF9A8B] bg-clip-text text-transparent font-semibold">acolhe e fortalece mães e pais de crianças e adolescentes com Altas Habilidades e Superdotação</span>, identificados ou em processo de identificação. Criada e guiada pela Dra. Angela Virgolim, <span className="font-bold italic">é um espaço de pertencimento, aprendizado e transformação.</span>
              </p>
              <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
                QUERO FAZER PARTE DA COMUNIDADE
              </a>
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
          <p className="text-xl md:text-3xl lg:text-4xl text-[#FF7167] font-bold text-center mb-4 mt-0 leading-tight">Boas vindas e acolhimento da Aldeia Singular</p>
          <p className="text-base md:text-lg text-gray-700 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Uma plataforma exclusiva criada especialmente para apoiar pais na jornada de criar filhos com altas habilidades e superdotação.
          </p>
        </div>

        {/* Plataforma Autoral Exclusiva - Full Width Orange Section */}
        <div className="w-screen bg-[#FF7167] relative overflow-hidden md:overflow-visible py-12 md:py-20 lg:py-10 -mx-4 md:mx-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden md:overflow-visible aspect-video bg-transparent -mt-12 md:-my-8 lg:-my-12 order-1 md:order-1">
                <Image
                  src="/mockup.png"
                  alt="Plataforma Desktop e Mobile"
                  fill
                  className="object-contain scale-125 md:scale-160"
                />
            </div>

            {/* Text Content */}
              <div className="space-y-4 md:space-y-6 order-2 md:order-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#450655]">Plataforma Autoral Exclusiva</h3>
                <p className="text-base md:text-lg text-white leading-relaxed">
                Cansados de portais de cursos genéricos, construímos a plataforma da Aldeia Singular do zero.
                O resultado é um ecossistema pensado para cada detalhe da sua jornada, unindo o conhecimento profundo da Dra. Ângela Virgolim com a organização e a facilidade que você merece.                </p>
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
                <div className="absolute inset-0 bg-black/50"></div>
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
            Quanto tenho que investir <span className="text-[#FF7167]">para fazer parte da Aldeia?</span>
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
                    { text: " Acesso à Plataforma Exclusiva Aldeia Singular", icon: "/icones_preço/celular.png" },
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
                      <span className="text-sm md:text-base lg:text-lg">{item.text}</span>
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
                    POR APENAS
                  </p>
                  <p className="text-3xl md:text-4xl lg:text-5xl text-[#FF7167] mb-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#450655]">12x de </span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic">R$ 98,00</span>
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
          <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg transition-colors shadow-lg border-2 border-white inline-block">
            QUERO ENTRAR PARA A ALDEIA SINGULAR
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 md:mb-8">
            Dúvidas frequentes
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[
              "Como funciona o acesso à plataforma?",
              "Os encontros são gravados?",
              "Posso cancelar minha assinatura a qualquer momento?",
              "O conteúdo é adequado para pais de crianças de todas as idades?",
              "Há suporte técnico disponível?",
              "Como posso interagir com outros pais na comunidade?"
            ].map((question, index) => (
              <div key={index} className="bg-[#f7f1f2] rounded-xl p-4 md:p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow border-2 border-[#FF7167]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-base md:text-lg font-semibold text-gray-900">{question}</p>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FF7167] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <a href="#" className="text-[#450655] hover:text-[#450655]/80 font-semibold text-sm md:text-base">
              Ver mais perguntas
            </a>
          </div>
        </div>
      </section>

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
          
          {/* WhatsApp Button */}
          <div className="flex justify-center mb-6 md:mb-8">
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
              Desenvolvido por COEXPERTS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
