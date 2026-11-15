import site from "../../site.config";

function FAQ() {


    const duvidas = site.faq
    return (
        <>
            <section>
                <div className="justify-center mt-10">
                    <h1 className=" text-warning uppercase text-center text-3xl font-black italic mb-3">Perguntas <span className="text-white">frequentes</span></h1>
                    <div className="bg-orange-400 w-30 h-2 m-auto mb-4"></div>
                </div>
                {duvidas.map((duv, check) => {
                    return (
                        <div className=" flex justify-center">
                            <div key={check}
                                className="collapse bg-base-100 border border-base-300 m-2 w-95 ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title font-semibold ">{duv.pergunta}</div>
                                <div className="collapse-content text-sm text-orange-500 ">{duv.resposta}</div>
                            </div>
                        </div>
                    )
                })}

            </section>
        </>
    )
}
export default FAQ;