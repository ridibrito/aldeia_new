"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FooterConversionTracking } from "../components/footer-conversion-tracking";

export default function PoliticasPage() {
    const [activeTab, setActiveTab] = useState("privacidade");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            if (["privacidade", "termos", "reembolso", "cookies"].includes(hash)) {
                setActiveTab(hash);
            } else if (hash.includes("-")) {
                const tabId = hash.split("-")[0];
                if (["privacidade", "termos", "reembolso", "cookies"].includes(tabId)) {
                    setActiveTab(tabId);
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            window.history.replaceState(null, "", `#${activeTab}`);
        }
    }, [activeTab, isMounted]);

    const POLICIES = [
        {
            id: "privacidade",
            title: "Política de Privacidade (LGPD)",
            updatedAt: "06/01/2026",
            content: (
                <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
                    <section>
                        <p className="italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl border-l-4 border-red-400">
                            <strong>Importante:</strong> A Aldeia Singular é uma comunidade voltada a <strong>pais, mães e responsáveis</strong>. Recomendamos fortemente que você <strong>evite compartilhar publicamente dados sensíveis</strong>, especialmente <strong>dados de crianças e adolescentes</strong>, em espaços abertos da comunidade.
                        </p>
                        <p>A Aldeia Singular respeita sua privacidade e se compromete a tratar seus dados pessoais com transparência e segurança. Esta Política explica como coletamos, usamos, armazenamos, compartilhamos e protegemos dados pessoais no site e na plataforma Aldeia Singular.</p>
                    </section>

                    <section id="privacidade-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">1. Quem somos (Controladora)</h2>
                        </div>
                        <ul className="space-y-1">
                            <li><strong>Controladora:</strong> Aldeia Singular</li>
                            <li><strong>E-mail de suporte:</strong> contato@aldeiasingular.com.br</li>
                            <li><strong>Encarregado/DPO:</strong> contato@aldeiasingular.com.br</li>
                        </ul>
                    </section>

                    <section id="privacidade-2">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">2. Definições</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Dados pessoais:</strong> informações que identificam ou podem identificar uma pessoa (ex.: nome, e-mail, telefone, IP).</li>
                            <li><strong>Dados pessoais sensíveis:</strong> informações sobre saúde, dados biométricos, origem racial/étnica, convicção religiosa, etc.</li>
                            <li><strong>Titular:</strong> a pessoa a quem os dados se referem.</li>
                            <li><strong>Tratamento:</strong> qualquer uso de dados (coletar, armazenar, compartilhar, excluir etc.).</li>
                        </ul>
                    </section>

                    <section id="privacidade-3">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">3. Quais dados coletamos</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-[#450655]">3.1 Dados fornecidos por você</h3>
                                <p>Cadastro, perfil (nome, e-mail, telefone), mensagens na comunidade, comentários e formulários de suporte.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#450655]">3.2 Dados coletados automaticamente</h3>
                                <p>IP, tipo de navegador, logs de uso e identificadores de sessão.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#450655]">3.3 Pagamentos</h3>
                                <p>Os dados financeiros são tratados pelo intermediador de pagamento. Recebemos apenas a confirmação da compra para liberar o acesso.</p>
                            </div>
                        </div>
                    </section>

                    <section id="privacidade-4">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">4. Dados de crianças e adolescentes</h2>
                        </div>
                        <p>A Aldeia Singular não é destinada ao cadastro autônomo de crianças. Protegemos o interesse de menores moderando conteúdos que exponham indevidamente dados sensíveis de terceiros compartilhados na comunidade.</p>
                    </section>

                    <section id="privacidade-5">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">5. Para que usamos (Finalidades)</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Criar e administrar sua conta.</li>
                            <li>Liberar acesso a conteúdos e eventos.</li>
                            <li>Processar compras e suporte.</li>
                            <li>Segurança e prevenção a fraudes.</li>
                        </ul>
                    </section>
                </div>
            ),
        },
        {
            id: "termos",
            title: "Termos de Uso",
            updatedAt: "06/01/2026",
            content: (
                <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
                    <section id="termos-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">1. Natureza do serviço</h2>
                        </div>
                        <p className="bg-[#450655]/5 p-4 rounded-xl border-l-4 border-[#450655]">
                            A Aldeia Singular é uma <strong>comunidade e plataforma de educação parental e bem-estar</strong>. <strong>Não substitui avaliação formal</strong> para identificação de AHSD ou atendimento médico/clínico. O conteúdo é educacional.
                        </p>
                    </section>

                    <section id="termos-2">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">2. Regras de Convivência</h2>
                        </div>
                        <p>Buscamos um ambiente seguro. É proibido: assédio, ofensas, humilhações, spam, autopromoção não autorizada e exposição de dados sensíveis de menores em áreas públicas.</p>
                    </section>

                    <section id="termos-3">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">3. Propriedade intelectual</h2>
                        </div>
                        <p>Todo conteúdo da Aldeia Singular é protegido. Você recebe uma licença pessoal e limitada. É proibido copiar, gravar, revender ou disponibilizar materiais em drives ou grupos sem autorização.</p>
                    </section>

                    <section id="termos-4">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">4. Elegibilidade e Conta</h2>
                        </div>
                        <p>O uso é destinado a maiores de 18 anos. Você é responsável por manter sua senha em sigilo e por todas as atividades em sua conta.</p>
                    </section>
                </div>
            ),
        },
        {
            id: "reembolso",
            title: "Política de Reembolso",
            updatedAt: "06/01/2026",
            content: (
                <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
                    <section id="reembolso-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">1. Garantia integral (7 dias)</h2>
                        </div>
                        <p>Você pode solicitar reembolso integral em até <strong>7 (sete) dias corridos</strong> a partir da data da compra. Após esse prazo, não realizamos devoluções ou estornos.</p>
                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                                <p className="font-bold text-green-700 uppercase text-xs">Permitido</p>
                                <p>Até o 7º dia após a compra.</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                                <p className="font-bold text-red-700 uppercase text-xs">Não permitido</p>
                                <p>A partir do 8º dia em diante.</p>
                            </div>
                        </div>
                    </section>

                    <section id="reembolso-2">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">2. Como solicitar</h2>
                        </div>
                        <p>O reembolso deve ser solicitado pelo intermediador de pagamento ou enviando e-mail para contato@aldeiasingular.com.br com os dados da conta e comprovante.</p>
                    </section>

                    <section id="reembolso-3">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">3. Cancelamento de Renovação</h2>
                        </div>
                        <p>Em planos recorrentes, você pode cancelar a renovação a qualquer momento para interromper cobranças futuras. Cancelar a renovação não gera estorno de valores já pagos.</p>
                    </section>
                </div>
            ),
        },
        {
            id: "cookies",
            title: "Política de Cookies",
            updatedAt: "06/01/2026",
            content: (
                <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
                    <section id="cookies-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">1. O que são cookies</h2>
                        </div>
                        <p>Sâo pequenos arquivos armazenados no seu navegador para lembrar preferências, manter sessões ativas e medir desempenho.</p>
                    </section>

                    <section id="cookies-2">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">2. Tipos de Cookies</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Essenciais:</strong> Necessários para login e segurança.</li>
                            <li><strong>Desempenho:</strong> Google Analytics para estatísticas de uso.</li>
                            <li><strong>Funcionalidade:</strong> Lembram preferências de idioma e UI.</li>
                        </ul>
                    </section>

                    <section id="cookies-3">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-[#450655]">3. Gestão</h2>
                        </div>
                        <p>Você pode ajustar permissões no navegador ou apagar cookies existentes. O bloqueio de cookies essenciais pode afetar a funcionalidade total do site.</p>
                    </section>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#f7f1f2] flex flex-col font-sans selection:bg-[#FF7167] selection:text-white">
            <header className="bg-white py-6 px-4 shadow-sm print:hidden">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <Link href="/">
                        <Image src="/amarela.png" alt="Aldeia Singular" width={160} height={48} priority className="h-auto w-32 md:w-40" />
                    </Link>
                    <div className="text-center md:text-right">
                        <h1 className="text-xl md:text-2xl font-bold text-[#450655]">Políticas e Documentos Legais</h1>
                        <p className="text-sm text-[#FF7167] font-medium">Aldeia Singular</p>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <nav className="lg:w-1/4 print:hidden">
                        <div className="sticky top-8 space-y-2">
                            <div className="hidden lg:block space-y-1" role="tablist">
                                {POLICIES.map((policy) => (
                                    <button
                                        key={policy.id}
                                        role="tab"
                                        aria-selected={activeTab === policy.id}
                                        aria-controls={`panel-${policy.id}`}
                                        id={`tab-${policy.id}`}
                                        onClick={() => setActiveTab(policy.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === policy.id ? "bg-[#FF7167] text-white shadow-md shadow-[#FF7167]/20" : "text-[#450655] hover:bg-white"}`}
                                    >
                                        {policy.title}
                                    </button>
                                ))}
                            </div>
                            <div className="lg:hidden">
                                <select value={activeTab} onChange={(e) => setActiveTab(e.target.value)} className="w-full p-4 rounded-xl border-2 border-[#FF7167] text-[#450655] font-semibold bg-white ring-0 focus:ring-0 outline-none">
                                    {POLICIES.map((policy) => (
                                        <option key={policy.id} value={policy.id}>{policy.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </nav>

                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            {POLICIES.map((policy) => (
                                activeTab === policy.id && (
                                    <motion.div
                                        key={policy.id}
                                        role="tabpanel"
                                        id={`panel-${policy.id}`}
                                        aria-labelledby={`tab-${policy.id}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-3xl p-6 md:p-10 shadow-xl print:shadow-none print:p-0"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6 text-center md:text-left">
                                            <div>
                                                <h2 className="text-3xl font-extrabold text-[#450655] print:text-black">{policy.title}</h2>
                                                <p className="text-[#FF7167] font-medium mt-1">Última atualização: {policy.updatedAt}</p>
                                            </div>
                                            <Link href="https://wa.me/5561999093760" target="_blank" className="text-sm font-bold text-[#450655] hover:underline flex items-center gap-2 justify-center md:justify-end print:hidden">
                                                Dúvidas? Fale Conosco
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </Link>
                                        </div>
                                        <div className="prose prose-purple max-w-none">{policy.content}</div>
                                        <div className="mt-12 pt-8 border-t border-gray-100 text-center print:hidden">
                                            <p className="text-gray-500 text-sm mb-4">Este documento é válido para a plataforma Aldeia Singular.</p>
                                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#450655] font-bold hover:text-[#FF7167] transition-colors">Voltar ao topo</button>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <footer className="bg-gradient-to-br from-[#450655] to-[#6B1A7F] text-white py-12 px-4 print:hidden">
                <div className="max-w-5xl mx-auto text-center">
                    <Link href="/"><Image src="/amarela.png" alt="Aldeia Singular" width={140} height={42} className="h-auto w-32 mx-auto mb-6" /></Link>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm">
                        <button onClick={() => setActiveTab("privacidade")} className="hover:text-[#FF7167] transition-colors">Privacidade</button>
                        <button onClick={() => setActiveTab("termos")} className="hover:text-[#FF7167] transition-colors">Termos de Uso</button>
                        <button onClick={() => setActiveTab("reembolso")} className="hover:text-[#FF7167] transition-colors">Reembolso</button>
                        <button onClick={() => setActiveTab("cookies")} className="hover:text-[#FF7167] transition-colors">Cookies</button>
                    </div>
                    <p className="text-white/60 text-xs text-center">© 2026 Aldeia Singular. Todos os direitos reservados.</p>
                </div>
                <FooterConversionTracking />
            </footer>

            <style jsx global>{`
                @media print {
                    body { background-color: white !important; }
                    .print\:hidden { display: none !important; }
                    .shadow-xl { box-shadow: none !important; }
                    main { padding: 0 !important; }
                    h2 { color: black !important; }
                    .prose { max-width: 100% !important; }
                }
            `}</style>
        </div>
    );
}
