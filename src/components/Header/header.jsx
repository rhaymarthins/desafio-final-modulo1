import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio.jsx"
import Doados from "../../Pages/Doados/Doados.jsx"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar.jsx"
import S from "./header.module.scss"

export default function header() {
    return (
        <BrowserRouter>
            <header>
                <section className={S.boxLogo}>
                    <img src={logo} alt="imagem livro" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/doados">Livros Doados</Link></li>
                        <li><Link to="/quero-doar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxInput}>
                    <input type="text" placeholder="O que você procura?" />
                    <img src={search} alt="imagem lupa" />
                </div>

            </header>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/doados" element={<Doados />} />
                <Route path="/quero-doar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    );
}