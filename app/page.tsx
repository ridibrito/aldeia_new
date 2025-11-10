import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col px-4 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero2.png"
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
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Imagem: Criança sorrindo</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              PARA QUE SEUS FILHOS BRILHEM, VOCÊ PRECISA ESTAR FORTE.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Criar filhos com altas habilidades e superdotação é uma jornada única, cheia de desafios e oportunidades. Muitas vezes, os pais se sentem isolados, sem saber onde encontrar apoio ou como navegar pelos desafios específicos dessa realidade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Na Aldeia Singular, você encontra uma comunidade acolhedora que entende suas necessidades e oferece recursos práticos, suporte emocional e conexões significativas com outros pais que compartilham experiências similares.
            </p>
            <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
              QUERO FAZER PARTE DA COMUNIDADE
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-[#4A148C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Card - Problems */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Se você se sente...</h3>
              <ul className="space-y-4">
                {[
                  "Isolado e sem compreensão",
                  "Inseguro sobre como apoiar seu filho",
                  "Sobrecarregado com informações contraditórias",
                  "Sem recursos práticos para o dia a dia",
                  "Preocupado com o futuro do seu filho"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card - Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Na Aldeia você...</h3>
              <ul className="space-y-4">
                {[
                  "Encontra uma comunidade acolhedora e compreensiva",
                  "Recebe ferramentas práticas e orientações especializadas",
                  "Acessa conteúdo confiável e atualizado",
                  "Conecta-se com outros pais em situações similares",
                  "Ganha confiança e tranquilidade para apoiar seu filho"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
              QUERO ESSA TRANSFORMAÇÃO
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#FFF0F5] relative overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-pink-300"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-purple-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            O que acontece quando você finalmente encontra sua tribo...
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4 leading-relaxed">
                  "A Aldeia Singular mudou completamente minha perspectiva. Finalmente encontrei pessoas que entendem os desafios únicos de criar uma criança com altas habilidades. A comunidade é incrível!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Maria Silva</p>
                    <p className="text-gray-400 text-sm">Mãe de João, 8 anos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            O que tem dentro da Aldeia?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-4">Boas vindas e acolhimento da Aldeia Singular</p>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Uma plataforma exclusiva criada especialmente para apoiar pais na jornada de criar filhos com altas habilidades e superdotação.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 aspect-video flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Plataforma Desktop e Mobile</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Plataforma Autoral Exclusiva</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Acesse uma plataforma desenvolvida especialmente para a comunidade Aldeia Singular, com recursos intuitivos e conteúdo exclusivo criado por especialistas em altas habilidades e superdotação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Navegue por trilhas de conhecimento estruturadas, participe de encontros ao vivo com especialistas e acesse uma biblioteca completa de recursos práticos para o dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intuitive Navigation Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Você encontra tudo de forma intuitiva em um só lugar:
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trilhas de Conhecimento</h3>
              <p className="text-gray-700 leading-relaxed">
                Conteúdo estruturado e organizado em trilhas temáticas que guiam você através dos principais tópicos relacionados às altas habilidades e superdotação.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Encontros com especialistas</h3>
              <p className="text-gray-700 leading-relaxed">
                Participe de encontros mensais ao vivo com especialistas renomados em altas habilidades, com espaço para perguntas e interação direta.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Moradas de Ouvidos</h3>
              <p className="text-gray-700 leading-relaxed">
                Um espaço acolhedor de escuta e compartilhamento, onde você pode expressar suas dúvidas, preocupações e experiências em um ambiente seguro e compreensivo.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
              QUERO ACESSAR A PLATAFORMA
            </button>
          </div>
        </div>
      </section>

      {/* Meet the Guide Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem vai te guiar nessa jornada?
          </h2>
          <p className="text-xl text-gray-600 mb-12">Conheça a Dra. Angela Virgolim</p>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200 aspect-video flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                  <svg className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-2xl font-bold text-gray-900">PRAZER, ANGELA VIRGOLIM</p>
              </div>
              <div className="text-center text-gray-500">
                <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Vídeo: Apresentação da Dra. Angela Virgolim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Quanto tenho que investir para fazer parte da Aldeia?
          </h2>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Column - Benefits */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 md:p-12 text-white">
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
              <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-white">
                <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5" />
                  </svg>
                </div>
                <div className="text-center mb-8">
                  <p className="text-5xl font-bold text-gray-900 mb-2">12x de R$ 98,00</p>
                  <p className="text-xl text-gray-600">ou R$ 947,00 à vista</p>
                </div>
                <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors w-full max-w-xs shadow-lg">
                  QUERO ENTRAR PARA A ALDEIA SINGULAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            VOCÊ NÃO ESTÁ INVESTINDO NA COMUNIDADE...
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Você está investindo no futuro do seu filho, na sua tranquilidade como pai ou mãe, e na conexão com uma rede de apoio que realmente entende sua jornada única.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <p className="text-2xl font-bold text-purple-900">Mais Paz</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6">
              <p className="text-2xl font-bold text-pink-900">Filhos Felizes</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <p className="text-2xl font-bold text-purple-900">Conexão Geral</p>
            </div>
          </div>
          <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
            QUERO ENTRAR PARA A ALDEIA SINGULAR
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">{question}</p>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
              Ver mais perguntas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A148C] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Left Column */}
            <div>
              <div className="mb-6">
            <Image
                  src="/logo.png"
                  alt="Aldeia Singular"
                  width={180}
                  height={54}
                  className="h-auto"
                />
              </div>
              <p className="text-gray-300 mb-6">
                © 2024 Aldeia Singular. Todos os direitos reservados.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-[#FF7F7F] hover:bg-[#FF6B6B] text-white font-semibold py-3 px-6 rounded-full transition-colors text-left shadow-lg">
                  Entrar na Aldeia Singular
                </button>
                <button className="border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-full transition-colors text-left">
                  Download
                </button>
              </div>
            </div>

            {/* Middle Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {["Home", "Sobre Nós", "Contato", "Termos de Uso", "Política de Privacidade"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
