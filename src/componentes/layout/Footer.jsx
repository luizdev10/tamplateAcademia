import { Mail, Phone, MapPin, Copyright } from "lucide-react";
import minhaImg from "../../assets/img/logo.png";
import site, { enderecoLinhas } from "../../site.config";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 border-t border-zinc-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
      
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={minhaImg} alt="Logo" className="h-10 w-auto opacity-80 rounded" />
              <h2 className="text-white font-black text-xl uppercase italic tracking-tighter">
                {site.nome.inicio} <span className="text-orange-600">{site.nome.destaque}</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-center md:text-left max-w-xs">
              {site.descricaoRodape}
            </p>
          </div>

      
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 border-b border-orange-600 pb-1">
              Contato
            </h3>
            
            {site.email && (
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Mail size={18} className="text-orange-600" />
                <span className="text-sm text-zinc-300">{site.email}</span>
              </a>
            )}

            {site.telefone && (
              <a href={`tel:${site.telefoneLink}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Phone size={18} className="text-orange-600" />
                <span className="text-sm text-zinc-300">{site.telefone}</span>
              </a>
            )}
          </div>

       
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 border-b border-orange-600 pb-1">
              Endereço
            </h3>
            <div className="flex items-start gap-3 text-center md:text-left">
              <MapPin size={20} className="text-orange-600 shrink-0" />
              <p className="text-sm text-zinc-300">
                {enderecoLinhas().map((linha, i, arr) => (
                  <span key={i}>
                    {linha}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

        </div>

       
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Copyright size={12} />
            <span>{site.anoCopyright} {site.nomeCompleto} - Todos os direitos reservados</span>
          </div>
          {site.cnpj && <span className="text-zinc-600">CNPJ: {site.cnpj}</span>}
        </div>
      </div>
    </footer>
  );
}

export default Footer;