import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"

import analyse from "../../assets/analyse.png"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import pfe2022 from "../../assets/PFE.jpg"
import pfe2023 from "../../assets/PFE.jpg"
import pyspark from "../../assets/pyspark.png"
export function Project() {
  const certifications = [
    { id: 1, name: 'Certification data analysis with python', date: '2024', link: 'https://www.freecodecamp.org/certification/fcc068799d2-4670-4b12-99d8-91ec08b12543/data-analysis-with-python-v7' },
    { id: 2, name: 'Certification Power Bi Basics', date: '2024', link: 'https://simpli-web.app.link/e/5Vhp6PVvsPb' },
    { id: 3, name: 'Certification Machine Learning with Python', date: '2024', link: 'https://www.freecodecamp.org/certification/fcc068799d2-4670-4b12-99d8-91ec08b12543/machine-learning-with-python-v7' },
    { id: 4, name: 'Intiation à la programmation neuro-linguistique', date: '2021', link: '/certifications/machine-learning-python' },

  ];
  
  return (
       <Container id="project">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>

      <div className="certifications-section">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-date">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-button"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
      </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>
      <p className="projects-description">
        Voici quelques projets sur lesquels j'ai travaillé récemment.
      </p>
    </div>
    </ScrollAnimation>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-de-l-emploi-en-tunisie" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Analyse de l'emploi en tuinsie</h3>
              <img
        src="https://media.licdn.com/dms/image/D4D12AQF7bb02gCVx4g/article-cover_image-shrink_600_2000/0/1712916116635?e=2147483647&v=beta&t=nGLUXJXTjRFUx02h2qrl1SRpijQtbBkL_pH-PW2JQwc" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p> Ce projet vise à explorer et analyser la répartition de la population active en Tunisie selon les différents secteurs d'activité. À l'aide de méthodes de partitionnement et de visualisation des données, il met en évidence les tendances clés, les secteurs les plus représentatifs et les déséquilibres éventuels dans le marché de l'emploi. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Pandas</li> <li>Matplotlib</li> <li>Pyhton </li>  <li>Jupyter Notebook </li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
             
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-des-ventes-de-produits-lectroniques" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Analyse des ventes de produits électroniques              </h3>
              <img
              src={analyse}
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet se concentre sur l’analyse des ventes de produits électroniques en explorant plusieurs dimensions, telles que les catégories de produits, les régions géographiques, les périodes de l’année, et les préférences des clients. L'objectif est de fournir des insights clés pour optimiser les stratégies de vente et identifier les tendances du marché.
</p>          
            </div>
            <footer>
              <ul className="tech-list">
              <li>Python</li>
  <li>Pandas</li>
  <li>Matplotlib</li>
  <li>Seaborn</li>
  <li>Jupyter Notebook</li>
  <li>Scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
            
                <a href="https://www.kaggle.com/code/karimmhidi1111/mod-lisation-du-churn" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Modélisation du Churn : Prédire le départ d'un client d'une banque
              </h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWKThrxQwUqcQ1iQgXKDTUPa1m1fmJO_CCw&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet se concentre sur la prédiction des clients susceptibles de quitter une banque. Grâce à une analyse de données et à des algorithmes de machine learning, le modèle vise à détecter les comportements à risque et à fournir des insights pour améliorer la fidélisation des clients.</p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Python</li>
  <li>Pandas</li>
  <li>Scikit-learn</li>
  <li>TensorFlow</li>
  <li>Matplotlib</li>
  <li>Seaborn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
               
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-avanc-e-avec-pyspark" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Analyse avancée avec PySpark </h3>
              <img
        src={pyspark} // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>PySpark, une interface Python pour Apache Spark, est utilisée pour l’analyse de données volumineuses. Ce projet se concentre sur une analyse avancée de données en utilisant PySpark, qui permet de manipuler, nettoyer, et analyser de larges volumes de données de manière distribuée.</p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>PySpark</li>
  <li>Apache Spark</li>
  <li>Hadoop</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              
                <a href="https://1drv.ms/x/c/243B139E1C9052CA/EdZpHHrB-K5EpcBOUgjMJI4BFK7cviuDabwN-m4J6ASoBA?e=vvWs7i" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Gestion Commerciale avec Excel Avancé</h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpY4c3zWgqDyO3CzKRSLBPaUj0ce68H7vEQ&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>Ce projet consiste à utiliser les fonctionnalités avancées d’Excel pour gérer et analyser les données commerciales d’une entreprise. Il intègre le traitement des données, la création de tableaux croisés dynamiques, et le développement de tableaux de bord interactifs pour une meilleure prise de décision.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Excel</li>
                <li>Visualization</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://1drv.ms/f/c/243B139E1C9052CA/EjhoIdNxpS1CkGVMDTaxCnABfyHjnyv5coEu1nHu3w_AAg" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Suivi et Analyse de la Pandémie de Coronavirus avec Power BI</h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBtPImxXXJv7YgsBT4wByZf3M2ILpdyTxjA&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet consiste à créer un tableau de bord interactif dans Power BI pour analyser les données relatives à la pandémie de coronavirus (COVID-19). Il permet de visualiser l'évolution des cas, des décès, et des récupérations à travers le monde ou dans des régions spécifiques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Power bi</li>
                <li>Data preprocessing</li>
                <li>Data Transformation</li>
                <li>Visualization</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
      </div>
      <div className="projects-section">
      <h2 className="projects-title">Les Projets PFE</h2></div>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://github.com/SiwarZaghmi/GitHub_Analytics" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Analyse de l'avancement des projets a travers kanban </h3>
              <img
        src={pfe2022} // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "40%",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>Développement d’une solution pour récupérer les données d’un tableau Kanban GitHub via des webhooks et API, les traiter avec Python, les stocker dans une base MongoDB et les analyser à travers un tableau de bord interactif développé avec Angular et Chart.js.



Fonctionnalités

Récupération et préparation des données.
Stockage dans MongoDB.
Visualisation de l’avancement des projets et de la contribution des employés.
</p>
            </div>
            <footer> <ul className="tech-list">   <li>Python</li>
  <li>MongoDB</li>
  <li>Angular</li>
  <li>Chart.js</li>
  <li>Webhooks</li>
  <li>API GitHub</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://github.com/karimmhidi/pyhtonapp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Platforme de matching cv             </h3>
              <img
        src={pfe2023} // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "40%",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Mon projet de fin d’études consiste en la création d’une plateforme innovante de matching de CVs et d’offres d’emploi, exploitant les techniques de traitement automatique du langage naturel (NLP) pour générer des scores de correspondance précis entre les compétences des candidats et les exigences des postes. La solution repose sur un système de stockage centralisé assurant la gestion efficace des données des utilisateurs. ce projet vise à simplifier et optimiser le processus de recrutement pour les entreprises.</p>
            </div>
            <footer>
              <ul className="tech-list">
  <li>#Angular Django </li>
  <li>NOSQL</li>
  <li>#NLP</li>
  <li>#Word2Vec</li>
 
  
</ul>
            </footer>
          </div>
        </ScrollAnimation>
        </div>
    </Container>
  );
}