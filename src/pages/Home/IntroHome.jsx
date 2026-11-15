import fotoIntro from "../../assets/img/fotointro.png";
import site from "../../site.config";

function IntroHome() {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${fotoIntro})` }}
    >

      <div className=" h-screen absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight uppercase italic">
            {site.home.tituloLinha1} <br />
            <span className="text-orange-500">{site.home.tituloDestaque}</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            {site.home.textoAntesDoNome}<span className="font-bold text-white">{site.nomeCompleto}</span>{site.home.textoDepoisDoNome}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroHome;