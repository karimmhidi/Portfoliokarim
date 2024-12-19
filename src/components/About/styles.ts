import styled from "styled-components";

export const Container = styled.section`

  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
/* Section générale */
  .certifications-section {
    text-align: center;
    padding: 50px;
    background-color: #141414; /* Fond sombre */
    color: white;
  }

  .certifications-title {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #ffffff; /* Texte blanc */
  }

  /* Liste des certifications en horizontal */
  .certifications-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Permet le passage à la ligne si besoin */
    gap: 20px; /* Espacement horizontal */
  }

  /* Carte individuelle */
  .certification-card {
    background-color: #222222; /* Fond des cartes */
    border: 2px solid #a855f7; /* Bordure violette */
    border-radius: 8px;
    padding: 20px;
    width: 250px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Effet d'ombre */
    transition: transform 0.3s ease-in-out;
  }

  .certification-card:hover {
    transform: translateY(-10px); /* Animation au survol */
  }

  .certification-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
  }

  .certification-date {
    font-size: 1rem;
    color: #e0e0e0;
    margin-top: 10px;
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 5rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--blue);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  
    
  }
  
`