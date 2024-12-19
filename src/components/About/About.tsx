import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import karim from "../../assets/image.png";
export function About() {
  const certifications = [
    { id: 1, name: 'Certification AWS', date: '2023' },
    { id: 2, name: 'Certification Google Cloud', date: '2022' },
    { id: 3, name: 'Certification Azure', date: '2021' },
    { id: 4, name: 'Certification Python', date: '2020' },
  ];
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Je suis titulaire d’une licence en Business Intelligence et d’un master en Big Data. Mon parcours académique m’a permis de développer une expertise approfondie dans le domaine de la gestion et de l’analyse des données.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Je suis particulièrement passionné par les technologies de pointe permettant de traiter, modéliser et valoriser les données pour répondre à des problématiques stratégiques. Fort d’une formation théorique solide et d’une expérience pratique acquise à travers divers projets, je suis déterminé à contribuer activement à des initiatives innovantes dans le domaine des données et de l’intelligence artificielle.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Mon portfolio reflète une partie des projets que j’ai réalisés, bien que ceux basés sur des environnements de machines virtuelles, incluant Hadoop, MapReduce, Databricks, RDD, Spark et Elasticsearch, n’y soient pas intégralement intégrés. Ces travaux témoignent néanmoins de mon engagement à exploiter des outils et frameworks performants pour traiter des données volumineuses et complexes.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Voici mes principales compétences :</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=62133&format=png&color=000000" alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-sql-computer-programming-flaticons-lineal-color-flat-icons.png" alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=0cRqPqlItA0E&format=png&color=000000" alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=70667&format=png&color=000000" alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=13654&format=png&color=000000" alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=69132&format=png&color=000000" alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src="https://img.icons8.com/?size=100&id=aGBLcugRkYpT&format=png&color=000000" alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
        <img src={karim} alt="karimMhidi" style={{ width: '500px', height: '500px', borderRadius: '50%' }} />
        </ScrollAnimation>
      </div>
      
    </Container>
  )
}
