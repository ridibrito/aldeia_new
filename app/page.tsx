import Image from "next/image";
import { HeroVideoDialog } from "./components/ui/hero-video-dialog";
import { Marquee } from "./components/marquee";

export default function Home() {
  const depoimentos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#f7f1f2]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex flex-col px-4 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex-1 flex items-center pt-8">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Headline */}
            <div className="text-left">
              <Image
                src="/logo.png"
                alt="Aldeia Singular"
                width={200}
                height={60}
                priority
                className="h-auto mb-4"
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
              A jornada com um filho <span className="text-[#FF7167]">AHSD</span> não precisa ser solitária.
          </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                A Aldeia Singular é uma comunidade que <span className="bg-gradient-to-r from-[#FF7167] to-[#FF9A8B] bg-clip-text text-transparent font-semibold">acolhe e fortalece mães e pais de crianças e adolescentes com Altas Habilidades e Superdotação</span>, identificados ou em processo de identificação. Criada e guiada pela Dra. Angela Virgolim, <span className="font-bold italic">é um espaço de pertencimento, aprendizado e transformação.</span>
              </p>
              <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg border-2 border-white inline-block mt-6">
                QUERO FAZER PARTE DA COMUNIDADE
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] p-4">
            <div className="relative w-full h-full">
              <Image
                src="/segundadobra.png"
                alt="Criança sorrindo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7167] text-right">
              Para que seu filho possa brilhar,<br />
              você precisa estar forte.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-bold">
              Percebemos que, para cuidar de filhos AHSD,<br />
              primeiro precisávamos acolher os pais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A jornada com Altas Habilidades é desafiadora: identificar os sinais, encontrar profissionais confiáveis, enfrentar preconceito na escola, falta de apoio familiar. É solidão, incerteza e <strong>gastos</strong> que não param.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No meio dessa batalha diária, descobrimos a peça que faltava:
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FF7167]">
              Quem cuida de você?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Como você pode ser o porto-seguro do seu filho, se você também está sobrecarregado(a), incompreendido(a) e sem apoio?
            </p>
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO FAZER PARTE DA COMUNIDADE
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 border-4 border-[#FF7167] rounded-3xl overflow-hidden mb-12">
            {/* Left Card - Problems */}
            <div className="bg-[#450655] p-8 border-r-4 border-[#FF7167]">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">Se você se sente...</h3>
              <div className="flex justify-center mb-6">
                <Image 
                  src="/sublinhado.png" 
                  alt="" 
                  width={500} 
                  height={8}
                  className="h-auto"
                />
              </div>
              <ul className="space-y-4">
                {[
                  "...angustiada(o) com a intensidade emocional e a hipersensibilidade do seu filho, sem saber como agir ou acalmar.",
                  "...esgotada(o) de lutar com a escola, que rotula seu filho como \"birrento\", \"desatento\" ou \"antissocial\".",
                  "...perdida(o) e sobrecarregada(a) com o excesso de informações duvidosas e a dificuldade de encontrar profissionais confiáveis.",
                  "Com medo de ver o potencial brilhante do seu filho se transformar em frustração, tristeza ou apatia.",
                  "Completamente sozinha(o), mesmo rodeada(o) de pessoas, por ninguém entender o que você realmente passa."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image 
                      src="/nocheck.png" 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="flex-shrink-0 mt-1"
                    />
                    <span className="text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card - Solutions */}
            <div className="bg-[#450655] p-8">
              <h3 className="text-3xl md:text-5xl font-bold text-[#FF7167] mb-2 text-center">Na Aldeia você...</h3>
              <div className="flex justify-center mb-6">
                <Image 
                  src="/sublinhado.png" 
                  alt="" 
                  width={500} 
                  height={8}
                  className="h-auto"
                />
              </div>
              <ul className="space-y-4">
                {[
                  "...encontra aulas, trilhas e encontros ao vivo com a Dra. Angela para decodificar essa intensidade, transformando o que parecia \"difícil\" em potência e conexão.",
                  "...ganha ferramentas e guias práticos para \"falar a língua\" da escola, sabendo escolher o ambiente, exatamente o que pedir e como construir uma parceria que funcione.",
                  "...encontra um caminho seguro, um acervo de conhecimento validado por uma das maiores especialistas do Brasil e uma rede de profissionais indicados pela comunidade.",
                  "...aprende a nutrir a singularidade dele, ganhando confiança para tomar as decisões certas que garantem um futuro saudável e feliz.",
                  "...encontra sua tribo. Um acolhimento imediato na nossa comunidade 24/7, onde você é compreendida antes mesmo de terminar de falar."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image 
                      src="/check.png" 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="flex-shrink-0 mt-1"
                    />
                    <span className="text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ESSA TRANSFORMAÇÃO
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section Title */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          O que acontece quando você<br />
          finalmente <span className="text-[#FF7167]">encontra sua tribo...</span>
        </h2>
      </div>

      {/* Testimonials Section */}
      <section 
        className="py-28 px-0 relative"
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
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF0F5] via-[#FFF0F5]/60 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF0F5] via-[#FFF0F5]/60 to-transparent z-10 pointer-events-none"></div>
            
            {/* Primeira linha - 5 primeiros depoimentos - entra da esquerda */}
            <div className="mb-8 w-full">
              <Marquee pauseOnHover className="[--duration:40s] w-full" reverse={false}>
                {depoimentos.slice(0, 5).map((num) => (
                  <div key={num} className="flex-shrink-0 mx-4">
                    <Image
                      src={`/depoimentos/Editados/${num}.png`}
                      alt={`Depoimento ${num}`}
                      width={400}
                      height={300}
                      className="rounded-2xl object-cover h-auto w-auto max-w-[400px]"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
            
            {/* Segunda linha - 5 últimos depoimentos - entra da direita */}
            <div className="w-full">
              <Marquee pauseOnHover className="[--duration:40s] w-full" reverse={true}>
                {depoimentos.slice(5, 10).map((num) => (
                  <div key={num} className="flex-shrink-0 mx-4">
                    <Image
                      src={`/depoimentos/Editados/${num}.png`}
                      alt={`Depoimento ${num}`}
                      width={400}
                      height={300}
                      className="rounded-2xl object-cover h-auto w-auto max-w-[400px]"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-0">
            O que tem dentro da Aldeia?
          </h2>
          <p className="text-3xl md:text-4xl text-[#FF7167] font-bold text-center mb-4">Boas vindas e acolhimento da Aldeia Singular</p>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Uma plataforma exclusiva criada especialmente para apoiar pais na jornada de criar filhos com altas habilidades e superdotação.
          </p>
        </div>

        {/* Plataforma Autoral Exclusiva - Full Width Orange Section */}
        <div className="w-full bg-[#FF7167] relative overflow-visible py-20 md:py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-visible aspect-video bg-transparent -my-8 md:-my-12">
                <Image
                  src="/mockup.png"
                  alt="Plataforma Desktop e Mobile"
                  fill
                  className="object-contain scale-160"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#450655]">Plataforma Autoral Exclusiva</h3>
                <p className="text-lg text-white leading-relaxed">
                Cansados de portais de cursos genéricos, construímos a plataforma da Aldeia Singular do zero.
                O resultado é um ecossistema pensado para cada detalhe da sua jornada, unindo o conhecimento profundo da Dra. Ângela Virgolim com a organização e a facilidade que você merece.                </p>
                <p className="text-lg text-white leading-relaxed">
                Chega de se sentir perdido(a) em um mar de informações soltas ou em grupos de WhatsApp onde o conteúdo se perde.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intuitive Navigation Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7167] text-center mb-8">
            Você encontra tudo de forma<br />
            intuitiva em um só lugar:
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="relative rounded-4xl p-8 shadow-lg border-4 border-[#FF7167] overflow-hidden">
              <Image
                src="/montanha.jpg"
                alt=""
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/icones/montanha_icone.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#FF7167] mb-4">
                  Trilhas de:<br />
                  Conhecimento
                </h3>
                <p className="text-white leading-relaxed">
                  Participe dos encontros ao vivo<br />
                  ou assista às gravações que<br />
                  ajudam você a entender o que<br />
                  são Altas Habilidades e Superdotação,<br />
                  compreender melhor o seu filho e se<br />
                  fortalecer como mãe ou pai.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-4xl p-8 shadow-lg border-4 border-[#FF7167] overflow-hidden">
              <Image
                src="/rodas.jpg"
                alt=""
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/icones/rodas_icone.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#FF7167] mb-4">
                  Entrevistas com:<br />
                  especialistas
                </h3>
                <p className="text-white leading-relaxed">
                  A Dra. Angela convida mensalmente<br />
                  especialistas para conversas ao<br />
                  vivo sobre temas como identificação,<br />
                  escola, convivência, autocuidado e o<br />
                  papel da família.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-4xl p-8 shadow-lg border-4 border-[#FF7167] overflow-hidden">
              <Image
                src="/plantao.jpg"
                alt=""
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/icones/plantao_icone.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#FF7167] mb-4">
                  Plantões de:<br />
                  Dúvidas
                </h3>
                <p className="text-white leading-relaxed">
                  Duas vezes por mês, encontros<br />
                  coletivos com especialistas para<br />
                  responder dúvidas reais<br />
                  dos membros.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ACESSAR A PLATAFORMA
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Guide Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-0">
            Quem vai te guiar nessa jornada?
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-[#FF7167] mb-12">Conheça a Dra. Angela Virgolim</p>

          <div className="max-w-4xl mx-auto">
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
      <section id="precos" className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Quanto tenho que investir<br />
            <span className="text-[#FF7167]">para fazer parte da Aldeia?</span>
          </h2>

          <div className="max-w-5xl mx-auto bg-[#f7f1f2] rounded-2xl shadow-2xl overflow-visible">
            <div className="grid md:grid-cols-2">
              {/* Left Column - Benefits */}
              <div className="bg-white pb-8 md:pb-12 px-8 md:px-12 text-gray-900 overflow-visible">
                <div className="mb-0 -mt-12 md:-mt-20">
                  <Image
                    src="/mockup.png"
                    alt="Plataforma Aldeia Singular"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Acolher é o primeiro passo<br />
                  para transformar
                </h3>
                <div className="flex justify-center mb-6">
                  <Image 
                    src="/sublinhado.png" 
                    alt="" 
                    width={500} 
                    height={8}
                    className="h-auto"
                    style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(90%) saturate(3000%) hue-rotate(260deg) brightness(0.6) contrast(1.2)' }}
                  />
                </div>
                <ul className="space-y-4 text-[#450655] ">
                  {[
                    { text: " Acesso à Plataforma Exclusiva Aldeia Singular", icon: "/icones_preço/celular.png" },
                    { text: "+ 55 encontros ao vivo", icon: "/icones_preço/55encontros.png" },
                    { text: "+ 110h de conteúdos e conhecimento", icon: "/icones_preço/110horas.png" },
                    { text: "Curso PAPAiS Express – Programa de Apoio aos Pais de Superdotados", icon: "/icones_preço/curso_papais.png" },
                    { text: "Livros, artigos, lives e materiais complementares.", icon: "/icones_preço/livros.png" },
                    { text: "Ferramentas e estratégias aplicáveis", icon: "/icones_preço/ferramentas.png" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="flex-shrink-0"
                      />
                      <span className="text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Price */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-[#450655]">
                <div className="mb-6">
                  <Image
                    src="/icone.svg"
                    alt="Ícone"
                    width={80}
                    height={80}
                    className="w-80 h-20"
                  />
                </div>
                <div className="text-center mb-8 bg-white rounded-4xl py-6 px-6 border-2 border-[#FF7167]">
                  <p className="text-3xl font-semibold text-[#FF7167] mb-2">
                    POR APENAS
                  </p>
                  <p className="text-5xl text-[#FF7167] mb-2">
                    <span className="text-3xl font-semibold text-[#450655]">12x de </span>
                    <span className="text-6xl font-extrabold italic">R$ 98,00</span>
                  </p>
                  <p className="text-xl text-[#450655]">ou R$ 947,58 à vista</p>
                </div>
                <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors w-full max-w-md shadow-lg border-2 border-white inline-block text-center whitespace-nowrap">
                 ENTRAR PARA A ALDEIA SINGULAR
                </a>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src="/escudo.png"
                    alt="Escudo"
                    width={40}
                    height={40}
                    className="mb-3"
                  />
                  <p className="text-white text-center text-sm">
                    Acesso imediato por 12 meses.<br />
                    Cancelamento fácil e transparente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section - Test Purple */}
      <section className="py-20 px-4 bg-[#450655]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 uppercase">
            VOCÊ NÃO ESTÁ INVESTINDO NA COMUNIDADE...
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
            Está investindo no seu bem-estar, da sua família. No futuro do seu filho, na tranquilidade da sua casa. Pois esse é o lema da nossa comunidade:
          </p>
          <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg border-2 border-white inline-block">
            QUERO ENTRAR PARA A ALDEIA SINGULAR
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Dúvidas frequentes
          </h2>

          <div className="space-y-4">
            {[
              "Como funciona o acesso à plataforma?",
              "Os encontros são gravados?",
              "Posso cancelar minha assinatura a qualquer momento?",
              "O conteúdo é adequado para pais de crianças de todas as idades?",
              "Há suporte técnico disponível?",
              "Como posso interagir com outros pais na comunidade?"
            ].map((question, index) => (
              <div key={index} className="bg-[#f7f1f2] rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow border-2 border-[#FF7167]">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">{question}</p>
                  <svg className="w-6 h-6 text-[#FF7167]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="text-[#450655] hover:text-[#450655]/80 font-semibold">
              Ver mais perguntas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#450655] to-[#6B1A7F] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Aldeia Singular"
              width={180}
              height={54}
              className="h-auto"
            />
          </div>
          <p className="text-white/80 mb-8">
            © 2024 Aldeia Singular. Todos os direitos reservados.
          </p>
          
          {/* Subrodapé */}
          <div className="border-t border-white/20 pt-8 space-y-4">
            <p className="text-white/80 text-sm max-w-3xl mx-auto">
              A Aldeia Singular não substitui as avaliações para identificação de Altas Habilidades e Superdotação e outras Neurodivergências. Somos uma comunidade de mães e pais de filhos de AHSD, que buscam desenvolvimento pessoal, educação parental e bem-estar.
            </p>
            <p className="text-white font-bold">
              Desenvolvido por COEXPERTS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
