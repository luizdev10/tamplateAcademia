import site from "../../site.config";

function Horario() {
    return (
        <>
            <section className="flex justify-center mt-10" >
                <div className="h-60 w-90 bg-neutral-900 rounded-2xl border border-yellow-200 flex flex-col items-center">
                    <h2 className="text-black-100 uppercase text-center mt-1.5  text-orange-300">{site.horario.titulo}</h2>
                    <p className="text-[15px] w-80 text-center">{site.horario.texto}</p>
                    <div className="mt-9">
                        {site.horario.linhas.map((l) => (
                            <p key={l.dias}>{l.dias} : <span className="text-orange-600">{l.horas}</span></p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Horario;