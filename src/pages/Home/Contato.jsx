import { MessageCircle, Instagram, Facebook } from "lucide-react";
import site, { linkWhatsapp } from "../../site.config";

function Contato() {
  const contatos = [
    {
      nome: "WhatsApp",
      icon: <MessageCircle size={20} />,
      link: linkWhatsapp(),
      corHover: "hover:bg-green-600 hover:border-green-600",
      estilo: "border-green-500 text-green-500"
    },
    {
      nome: "Instagram",
      icon: <Instagram size={25} />,
      link: site.redes.instagram,
      // Usando aquele gradiente do Instagram que criamos!
      corHover: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent",
      estilo: "border-pink-500 text-pink-500"
    },
    {
      nome: "Facebook",
      icon: <Facebook size={20} />,
      link: site.redes.facebook,
      corHover: "hover:bg-blue-600 hover:border-blue-600",
      estilo: "border-blue-500 text-blue-500"
    }
  ].filter((c) => c.link); // redes sem link não aparecem

  return (
    <section className="bg-zinc-900 py-16 px-4 flex flex-col items-center justify-center border-t border-zinc-800">
      <div className="text-center mb-8">
        <h2 className="uppercase text-orange-500 font-black text-2xl md:text-3xl italic tracking-tighter">
          {site.contatoSecao.titulo}
        </h2>
        <p className="text-zinc-400 mt-2 text-sm md:text-base">
          {site.contatoSecao.subtitulo}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
        {contatos.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`
              btn btn-outline btn-lg min-w-160px flex items-center gap-3 
              transition-all duration-300 font-bold uppercase tracking-widest
              hover:text-white rounded-xl shadow-lg
              ${item.estilo} ${item.corHover}
            `}
          >
            {item.icon}
            {item.nome}
          </a>
        ))}
      </div>
      
      {site.demo && (
        <p className="mt-6 text-amber-400/80 text-xs text-center max-w-md border border-amber-400/30 rounded-lg px-3 py-2">
          {site.avisoContatoDemo}
        </p>
      )}

      {/* Detalhe sutil de copyright ou localização opcional */}
      <p className="mt-12 text-zinc-600 text-xs uppercase">
        © {site.anoCopyright} {site.nomeCompleto} - Todos os direitos reservados
      </p>
    </section>
  );
}

export default Contato;