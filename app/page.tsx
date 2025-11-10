import Image from "next/image";
import { HeroVideoDialog } from "./components/ui/hero-video-dialog";
import { Marquee } from "./components/marquee";

export default function Home() {
  const depoimentos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#f7f1f2]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col px-4 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero.png"
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
              <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
              A jornada com um filho de Altas Habilidades não precisa ser solitária.
          </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Junte-se a uma comunidade acolhedora de pais que entendem os desafios únicos de criar filhos com altas habilidades. Encontre apoio, recursos e conexões que transformarão sua jornada.
              </p>
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
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7167]">
              PARA QUE SEU FILHO BRILHE, VOCÊ PRECISA ESTAR FORTE.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Criar filhos com altas habilidades e superdotação é uma jornada única, cheia de desafios e oportunidades. Muitas vezes, os pais se sentem isolados, sem saber onde encontrar apoio ou como navegar pelos desafios específicos dessa realidade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Na Aldeia Singular, você encontra uma comunidade acolhedora que entende suas necessidades e oferece recursos práticos, suporte emocional e conexões significativas com outros pais que compartilham experiências similares.
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
            <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-3 px-4 rounded-xl text-2xl transition-colors shadow-lg border-2 border-white inline-block">
              QUERO ESSA TRANSFORMAÇÃO
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section Title */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            O que tem dentro da Aldeia?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-4">Boas vindas e acolhimento da Aldeia Singular</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7167] text-center mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem vai te guiar nessa jornada?
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-[#FF7167] mb-12">Conheça a Dra. Angela Virgolim</p>

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Quanto tenho que investir para fazer parte da Aldeia?
          </h2>

          <div className="max-w-5xl mx-auto bg-[#f7f1f2] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Column - Benefits */}
              <div className="bg-gradient-to-br from-[#450655] to-[#450655] p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">ACOLHER É O PRIMEIRO PASSO PARA TRANSFORMAR</h3>
                <ul className="space-y-4">
                  {[
                    "Acesso à Plataforma Exclusiva",
                    "10+ encontros ao vivo mensais",
                    "50+ horas de conteúdo",
                    "Cursos Express",
                    "Artigos e materiais complementares",
                    "Ferramentas práticas para o dia a dia",
                    "Comunidade ativa e acolhedora"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Price */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-[#f7f1f2]">
                <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5" />
                  </svg>
                </div>
                <div className="text-center mb-8">
                  <p className="text-5xl font-bold text-gray-900 mb-2">12x de R$ 98,00</p>
                  <p className="text-xl text-gray-600">ou R$ 947,00 à vista</p>
                </div>
                <a href="https://pay.hotmart.com/L102866611N" target="_blank" rel="noopener noreferrer" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors w-full max-w-xs shadow-lg border-2 border-white inline-block text-center">
                  QUERO ENTRAR PARA A ALDEIA SINGULAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF7167] mb-6 uppercase">
                VOCÊ NÃO ESTÁ INVESTINDO NA COMUNIDADE...
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Está investindo no seu bem-estar, da sua família. No futuro do seu filho, na tranquilidade da sua casa. Pois esse é o lema da nossa comunidade:
              </p>
              <div className="space-y-2 text-xl md:text-2xl">
                <p>
                  <span className="font-bold text-[#FFA500]">Acolher</span>
                  <span className="text-gray-700"> Pais.</span>
                </p>
                <p>
                  <span className="font-bold text-[#FFA500]">Compreender</span>
                  <span className="text-gray-700"> Filhos.</span>
                </p>
                <p>
                  <span className="font-bold text-[#FFA500]">Fortalecer</span>
                  <span className="text-gray-700"> lares</span>
                </p>
              </div>
            </div>

            {/* Right Column - CTA Button */}
            <div className="flex justify-center md:justify-end">
              <a href="#precos" className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white font-bold py-8 px-12 rounded-2xl text-2xl md:text-3xl transition-colors shadow-lg border-2 border-white inline-block text-center">
                QUERO ENTRAR PARA<br />
                A ALDEIA SINGULAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#f7f1f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
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
