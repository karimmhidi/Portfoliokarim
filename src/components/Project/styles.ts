import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  /* Section générale */
.certifications-section {
  text-align: center;
  padding: 50px;
  background-color:rgba(48, 48, 48, 0.23); /* Fond sombre */
  color: white;
  margin-bottom: 12rem
}

.certifications-title {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 3rem;
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
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;
}

.certification-date {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-top: 10px;
}
.certification-button {
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.certification-button:hover {
  background-color: #0056b3;
}
  .projects-section {
  text-align: center;
  padding: 50px;
  background-color:rgba(48, 48, 48, 0.23); /* Fond sombre */
  color: white;
}

.projects-title {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff; /* Texte blanc */
}

.projects-description {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 1.9rem;
  color: #e0e0e0; /* Gris clair */
  max-width: 600px;
  margin: 0 auto; /* Centrage horizontal */
  line-height: 1.5;
}

.projects-title::after {
  content: '';
  display: block;
  width: 260px;
  height: 4px;
  background-color: #a855f7; /* Barre violette sous le titre */
  margin: 10px auto 0; /* Centré sous le texte */
}

 
      
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
        
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--blue);
          transition: color 0.25s;
          &:hover{
            color: var(--blue);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`