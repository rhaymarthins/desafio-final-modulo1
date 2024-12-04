import S from "./doados.module.scss";
import livro from "../../assets/livro.png";
import livro2 from "../../assets/livro2.jpg";
import livro3 from "../../assets/livro3.jpg";

export default function Doados() {
    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={livro} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={livro2} alt="imagem do livro o a cantiga dos passaros" />
                    <h3>A Guerra dos Tronos</h3>
                    <p>George R. R. Martin</p>
                    <p>Fantasia</p>
                </article>
                <article>
                    <img src={livro3} alt="imagem do livro o a cantiga dos passaros" />
                    <h3>Ainda Estou Aqui</h3>
                    <p>Marcelo Rubens Paiva</p>
                    <p>Memórias/Autobiografia</p>
                </article>
            </section>
        </section>
    )
}