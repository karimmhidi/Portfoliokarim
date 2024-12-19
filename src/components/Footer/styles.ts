import styled from "styled-components";


export const Container = styled.footer`
  display: flex;
  flex-direction: column; /* Permet d'empiler les éléments verticalement */
  align-items: center; /* Centre horizontalement les enfants */
  justify-content: center; /* Centre verticalement les enfants */
  text-align: center; /* Centre le texte à l'intérieur des éléments */
  padding: 30px;
  margin: 20px;

  .footer div {
    margin: 10px 0; /* Ajoute un espacement entre les éléments */
  }

  p {
    display: flex;
    align-items: center; /* Centre verticalement le texte et les icônes */
    gap: 10px; /* Ajoute un espacement entre le texte et l'icône */
  }

  img {
    width: 20px; /* Taille de l'icône */
    height: auto;
  }

  .social-media {
    margin-top: 20px; /* Optionnel si vous ajoutez des icônes sociales */
  }
`;
