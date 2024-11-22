import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/inicio";
import Doados from "../../Pages/Doados/doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import S from "./header.module.scss";

export default function header() {
    return (
        <BrowserRouter>
            <header>
                <section>
                    <img src="{logo}" alt="" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/doados">Doados</Link></li>
                        <li><Link to="/quero-doar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div>
                    <input type="text" />
                    <img src="{search}" alt="" />
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