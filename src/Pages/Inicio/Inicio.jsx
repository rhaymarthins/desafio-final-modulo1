import S from "./inicio.module.scss";
import reading from "../../assets/reading.png";
import community from "../../assets/community.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

export default function Inicio() {
    return (
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={community} alt="" />
                        <p>Oferecer livros a quem não tem acesso, ajudando a reduzir a exclusão social</p>
                    </article>
                    <article>
                        <img src={reading} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transform} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balance} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}