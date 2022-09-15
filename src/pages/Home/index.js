import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from "./styles";

import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
          </button>
          <img src={arrow} alt="Arrow" />
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Lincoln Ferreira</strong>
              <small>instagram</small>
            </div>
            <span>lincolnbf@gmail.com</span>
            <span>(16) 99222-1951</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
