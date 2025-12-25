
import React, { useMemo } from 'react';
import { 
  CheckCircle, 
  Bike, 
  Shirt, 
  Ghost, 
  Backpack, 
  Lightbulb, 
  TrendingUp, 
  Star, 
  Clock 
} from 'lucide-react';

const SnowEffect = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 7 + 8;
      const delay = Math.random() * 12;
      return (
        <div
          key={i}
          className="snow-particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: '-5%',
            animation: `snowFall ${duration}s linear ${delay}s infinite`,
          }}
        />
      );
    });
  }, []);

  return <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">{particles}</div>;
};

const AnnouncementBar = () => (
  <div className="sticky top-0 z-50 bg-black border-b-2 border-red-600 py-3 px-4 text-center">
    <p className="text-xs md:text-sm font-bold tracking-wider text-white">
      <span className="text-red-600 mr-2">⚠️</span>
      PEGUE O SEU LUGAR ANTES QUE ESGOTE!
    </p>
  </div>
);

const TickerSection = () => {
  const text = "O PORTAL IRÁ SE FECHAR... ÚLTIMA CHANCE DE ENTRAR — O PORTAL IRÁ SE FECHAR... ÚLTIMA CHANCE DE ENTRAR — ";
  
  return (
    <div className="relative z-20 bg-red-600 overflow-hidden py-4 border-y-4 border-black shadow-[0_0_25px_rgba(220,38,38,0.4)]">
      <div className="marquee-content items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-6 px-4">
            <span className="font-80s text-2xl md:text-4xl text-black tracking-widest uppercase flex items-center gap-4">
              {text} <Clock className="inline-block animate-pulse" size={32} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const bgUrl = "https://mftgecovacwmwdxoajjm.supabase.co/storage/v1/object/sign/stranger%20things/parte%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZWUwMWZjZi1kNDBlLTQwZTQtYWJmMi1iYzQ1MjQyY2ZmMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdHJhbmdlciB0aGluZ3MvcGFydGUgMi5qcGciLCJpYXQiOjE3NjY2MjM5MzQsImV4cCI6NjcyMTIyNjc0Mzk5MzR9.L4yotdglfCEhRoo7yB7xudMIZd5y2tQmbL4gz8oUJzs";

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-between px-6 pt-12 pb-16 overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)), url('${bgUrl}')` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <div className="stranger-logo-container w-full mb-4">
          <div className="stranger-line-top w-full max-w-[90%] md:max-w-[70%] mx-auto mb-2"></div>
          <h1 className="font-stranger-logo text-5xl md:text-8xl lg:text-9xl py-2 leading-none">
            Natal em Hawkins
          </h1>
          <div className="stranger-line-top w-full max-w-[90%] md:max-w-[70%] mx-auto mt-2"></div>
        </div>
        
        <h2 className="font-stranger-logo text-2xl md:text-4xl text-red-600 tracking-[0.4em] mb-4 uppercase">
          Mundo Invertido
        </h2>
        
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="font-stranger-alt text-xl md:text-4xl text-gray-200 italic leading-tight drop-shadow-lg max-w-2xl mx-auto px-4">
            "Escolha seu presente de natal"
          </h3>
          <h3 className="font-stranger-alt text-lg md:text-2xl text-gray-300 italic leading-tight drop-shadow-lg max-w-2xl mx-auto px-4">
            sorteio exclusivo da estreia
          </h3>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center"></div>

      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center gap-6">
        <p className="text-white opacity-90 uppercase tracking-[0.15em] text-xs md:text-lg font-bold drop-shadow-md px-4">
          Concorra a itens exclusivos e ganhe acesso imediato ao HAWKINS CLUB
        </p>
        
        <div className="w-full flex justify-center pb-4">
          <a 
            href="#prizes" 
            className="btn-stranger-pill font-80s text-2xl md:text-4xl px-12 md:px-20 py-5 md:py-6 w-[90%] max-w-md shadow-[0_0_30px_rgba(230,30,30,0.6)]"
            style={{ animation: 'pulseRed 2s infinite' }}
          >
            QUERO VER OS PRÊMIOS
          </a>
        </div>
      </div>
    </section>
  );
};

const ShowcaseSection = () => {
  const prizes = [
    { id: 1, name: "A Bike do Mike", desc: "Clássica anos 80", icon: <Bike size={48} className="text-red-500" /> },
    { id: 2, name: "Moletom Hellfire Club", desc: "Original", icon: <Shirt size={48} className="text-red-500" /> },
    { id: 3, name: "Funko Pop Demogorgon", desc: "Edição Especial", icon: <Ghost size={48} className="text-red-500" /> },
    { id: 4, name: "Mochila JanSport", desc: "Vibes Eleven", icon: <Backpack size={48} className="text-red-500" /> },
    { id: 5, name: "Luminária Alphabet", desc: "Run!", icon: <Lightbulb size={48} className="text-red-500" /> },
  ];

  const showcaseBgUrl = "https://mftgecovacwmwdxoajjm.supabase.co/storage/v1/object/sign/stranger%20things/76c88af5a57e4659638260769d6fc9f4%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZWUwMWZjZi1kNDBlLTQwZTQtYWJmMi1iYzQ1MjQyY2ZmMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdHJhbmdlciB0aGluZ3MvNzZjODhhZjVhNTdlNDY1OTYzODI2MDc2OWQ2ZmM5ZjQgKDEpLmpwZyIsImlhdCI6MTc2NjYzNzM3OSwiZXhwIjoyNzcxMzYzMTg3ODEzNzl9.3GSIrjalP6JuY32WzZo80pDL6tPDzd38waFB3ZnRfqg";

  return (
    <section 
      id="prizes" 
      className="py-24 px-6 relative z-10 bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,1) 100%), url('${showcaseBgUrl}')` 
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-stranger-logo text-3xl md:text-5xl text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
          O QUE VOCÊ VAI LEVAR PRA CASA?
        </h2>
        <p className="text-white font-80s text-2xl md:text-3xl mb-16 tracking-widest uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
          O GANHADOR TERÁ <span className="underline underline-offset-8">24H</span> PARA ESCOLHER <span>UM ITEM</span> DA NOSSA LISTA DE PRESENTES
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {prizes.map((prize, idx) => (
            <div 
              key={prize.id} 
              className="bg-black/75 backdrop-blur-lg border border-red-900/40 p-8 rounded-lg transform transition-all hover:-translate-y-2 hover:border-red-600/80 group animate-float"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                {prize.icon}
              </div>
              <h3 className="font-80s text-xl text-white mb-2 drop-shadow-md">{prize.name}</h3>
              <p className="text-gray-200 text-sm italic drop-shadow-sm">{prize.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefitsBgUrl = "https://mftgecovacwmwdxoajjm.supabase.co/storage/v1/object/sign/stranger%20things/1256cd0af0a431e2d388ad0ebb60f98f.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZWUwMWZjZi1kNDBlLTQwZTQtYWJmMi1iYzQ1MjQyY2ZmMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdHJhbmdlciB0aGluZ3MvMTI1NmNkMGFmMGE0MzFlMmQzODhhZDBlYmI2MGY5OGYuanBnIiwiaWF0IjoxNzY2NjM3NjgzLCJleHAiOjczNDQxMDk4OTY4M30.Efl82usB9m31ufzPWcQUAechuLPq1X71u3pjGnD0c1I";
  const neonRedSpan = "text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,26,26,0.9)] brightness-150 font-black";

  return (
    <section 
      className="py-24 px-6 relative z-10 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1) 100%), url('${benefitsBgUrl}')` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/60 border-y-2 md:border-y-0 md:border-x-2 border-red-600 p-8 md:p-16 rounded-lg backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-stranger-logo text-3xl md:text-5xl text-white mb-8 drop-shadow-[0_3px_12px_rgba(0,0,0,1)]">
              1. <span className={neonRedSpan}>ADQUIRA SUA COTA</span>
            </h2>
            <p className="text-white text-lg md:text-xl mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,1)] font-semibold">
              Ao confirmar o pagamento, você recebe acesso imediato e vitalício no seu e-mail ao nosso material <span className="text-white font-bold tracking-widest border-b-2 border-red-600">HAWKINS CLUB</span>:
            </p>
            <ul className="space-y-6 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-4 text-left">
                <CheckCircle className="text-green-400 shrink-0 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" size={28} />
                <span className="text-white text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,1)] font-bold">Curso CapCut: Edição de vídeos.</span>
              </li>
              <li className="flex items-center gap-4 text-left">
                <CheckCircle className="text-green-400 shrink-0 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" size={28} />
                <span className="text-white text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,1)] font-bold">Curso Canva: Design profissional.</span>
              </li>
              <li className="flex items-center gap-4 text-left">
                <CheckCircle className="text-green-400 shrink-0 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" size={28} />
                <span className="text-white text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,1)] font-bold">Bônus: Pack de Wallpapers da série.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-white/30 w-full mb-16 shadow-sm"></div>

          <div className="text-center md:text-left">
            <h2 className="font-stranger-logo text-3xl md:text-5xl text-white mb-8 drop-shadow-[0_3px_12px_rgba(0,0,0,1)]">
              2. <span className={neonRedSpan}>CONCORRA AO PRÊMIO</span>
            </h2>
            <p className="text-white text-lg md:text-xl mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,1)] font-bold">
              A identificação do ganhador será feita exclusivamente pelo Nome e E-mail e número utilizados na compra.
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="inline-block border-2 border-red-600 bg-black/80 px-8 py-5 rounded-lg backdrop-blur-sm min-w-[280px] shadow-[0_0_20px_rgba(255,26,26,0.3)]">
                <p className="text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,26,26,0.8)] font-80s text-2xl md:text-3xl tracking-widest uppercase mb-0 text-center brightness-125">
                  📅 Sorteio: 01/01/2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const pricingBgUrl = "https://mftgecovacwmwdxoajjm.supabase.co/storage/v1/object/sign/stranger%20things/imagem_2025-12-25_110548950.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZWUwMWZjZi1kNDBlLTQwZTQtYWJmMi1iYzQ1MjQyY2ZmMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdHJhbmdlciB0aGluZ3MvaW1hZ2VtXzIwMjUtMTItMjVfMTEwNTQ4OTUwLnBuZyIsImlhdCI6MTc2NjY3MTU5NCwiZXhwIjo5ODUwODM3OTAzNTk0fQ.kD1XFZBOoHu5gt_TlVGFAFxE6zIKLYuNc8mid_2IWoY";
  const priceClassName = "text-6xl font-stranger-logo text-white mb-8 drop-shadow-[0_0_15px_rgba(255,26,26,0.7)] brightness-125";
  
  const glassCardClass = "relative bg-black/60 border-2 border-red-600 p-10 rounded-3xl flex flex-col h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md transform transition-all hover:scale-105 hover:bg-black/70 hover:border-red-500";

  return (
    <section 
      className="py-24 px-6 relative z-10 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,1) 100%), url('${pricingBgUrl}')` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-stranger-logo text-4xl md:text-6xl text-white mb-20 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
          ESCOLHA QUANTAS CHANCES VOCÊ QUER TER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {/* TURISTA EM HAWKINS */}
          <div className={glassCardClass}>
            <h3 className="font-80s text-3xl text-white mb-6 uppercase tracking-wider">TURISTA EM HAWKINS</h3>
            <div className={priceClassName}>
              R$ 5,50
            </div>
            <ul className="text-gray-200 space-y-4 mb-12 text-left flex-grow font-semibold">
              <li className="flex items-center gap-3"><Star size={20} className="text-red-500" /> 3 Números da Sorte</li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-red-500" /> Acesso ao HAWKINS CLUB</li>
            </ul>
            <button 
              className="btn-stranger-pill font-80s text-2xl py-6 w-full"
              style={{ animation: 'pulseRed 2s infinite' }}
            >
              QUERO 3 CHANCES
            </button>
          </div>

          {/* MEMBRO DO CLUBE */}
          <div className={`${glassCardClass} scale-105 z-10 border-red-500 shadow-[0_0_60px_rgba(255,26,26,0.4)]`}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-80s px-8 py-2 rounded-full text-xl tracking-widest shadow-lg z-20">
              MAIS VENDIDO
            </div>
            <h3 className="font-80s text-3xl text-white mb-6 uppercase tracking-wider">MEMBRO DO CLUBE</h3>
            <div className={priceClassName}>
              R$ 8,00
            </div>
            <ul className="text-gray-200 space-y-4 mb-12 text-left flex-grow font-bold">
              <li className="flex items-center gap-3"><Star size={24} className="text-red-500" /> 6 Números da Sorte</li>
              <li className="flex items-center gap-3"><CheckCircle size={24} className="text-red-500" /> Acesso ao HAWKINS CLUB</li>
            </ul>
            <button 
              className="btn-stranger-pill font-80s text-2xl py-6 w-full"
              style={{ animation: 'pulseRed 2s infinite' }}
            >
              QUERO 6 CHANCES
            </button>
          </div>

          {/* O DEVORADOR DE MENTES */}
          <div className={glassCardClass}>
            <h3 className="font-80s text-3xl text-white mb-6 uppercase tracking-wider">O DEVORADOR DE MENTES</h3>
            <div className={priceClassName}>
              R$ 10,00
            </div>
            <ul className="text-gray-200 space-y-4 mb-12 text-left flex-grow font-semibold">
              <li className="flex items-center gap-3"><TrendingUp size={24} className="text-red-500" /> 12 Números da Sorte</li>
              <li className="flex items-center gap-3 text-red-400 italic font-bold">Dobro de chances por + R$ 4,00</li>
              <li className="flex items-center gap-3"><CheckCircle size={24} className="text-red-500" /> Acesso ao HAWKINS CLUB</li>
            </ul>
            <button 
              className="btn-stranger-pill font-80s text-2xl py-6 w-full"
              style={{ animation: 'pulseRed 2s infinite' }}
            >
              QUERO CHANCE MÁXIMA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-zinc-900 pt-20 pb-24 px-6 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-xl">
        <h4 className="font-stranger-logo text-2xl text-red-600 mb-8 tracking-wider uppercase">COMO FUNCIONA O SORTEIO?</h4>
        <div className="space-y-6 text-gray-400 text-base leading-relaxed">
          <p>
            Ao comprar sua cota para o sorteio, você não sai de mãos vazias! Enviamos <span className="text-white font-bold">NA HORA</span> para o seu e-mail o Hawkins Club Completo: Curso de Edição Mobile (CapCut), Curso de Design (Canva) e Wallpapers Exclusivos.
          </p>
          <p>
            Você estuda, aprende e aguarda o sorteio oficial no dia <span className="text-red-500 font-bold underline decoration-red-900">01/01/2026</span>. Os ganhadores serão divulgados nos perfis oficiais da campanha e entraremos em contato diretamente para combinar a entrega.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:items-end md:text-right shrink-0">
        <h2 className="font-stranger-logo text-5xl text-white mb-4">HAWKINS CLUB</h2>
        <p className="text-zinc-700 italic font-stranger-alt text-xl">"Friends don't lie. Participate and win."</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative vhs-effect font-body overflow-x-hidden bg-black">
      <SnowEffect />
      <AnnouncementBar />
      <HeroSection />
      <TickerSection />
      <ShowcaseSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
