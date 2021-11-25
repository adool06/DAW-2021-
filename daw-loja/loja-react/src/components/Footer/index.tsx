import './style.css';

export function Footer() {
   return (
    <footer>
        <div className="container row">
            <div className="col">
                <h5>Contato</h5>
                <ul>
                <li>46 12345-6789</li>
                <li>Rua Mato Grosso, 200</li>
                <li>Pato Branco, PR</li>
                </ul>
            </div>

            <div className="col">
                <h5>Institucional</h5>
                <ul>
                <li><a href="#">Quem nos somos</a></li>
                <li><a href="#">Nossas lojas</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
                <li><a href="#">Parceiros e fornecedores</a></li>
                </ul>
            </div>

            <div className="col">
                <h5>Atendimento</h5>
                <ul>
                <li><a href="#">Atendimento</a></li>
                <li><a href="#">Meus pedidos</a></li>
                <li><a href="#">Devoluções</a></li>
                <li><a href="#">Assistência técnica</a></li>
                <li><a href="#">Políticas de privacidade</a></li>
                </ul>
            </div>
        </div>
    </footer>
    )}