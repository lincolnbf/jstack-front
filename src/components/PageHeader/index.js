import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import { Container } from "./styles";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
