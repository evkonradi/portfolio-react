import React from "react";

function Footer() {

    return (
        <footer>
            <a href="https://www.linkedin.com/in/elenakonradi" target="_blank" rel="noopener noreferrer"><img src={require(`../../assets/linkedin.png`)} alt='linkedin icon' className="icon-footer" /></a>
            <a href="mailto:evkonradi@gmail.com" rel="noopener noreferrer"><img src={require(`../../assets/email3.png`)} alt='email icon' className="icon-footer" /></a>
            <a href="https://github.com/evkonradi" target="_blank" rel="noopener noreferrer"><img src={require(`../../assets/github.png`)} alt='github icon' className="icon-footer" /></a>
        </footer>
  
    );
}

export default Footer;