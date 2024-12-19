import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Voici mes coordonnées  </p>
        <p>Je reste à votre disposition pour toute information supplémentaire.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:karim.mhidi@ihec.ucar.tn"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:karim.mhidi@ihec.ucar.tn">karim.mhidi@ihec.ucar.tn
          </a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+216) 51131509</a>
        </div>  
      </div>
     
    </Container>
  )
}