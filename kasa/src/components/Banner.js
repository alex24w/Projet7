import LettreK from '../assets/LettreK.png'
import maison from '../assets/maison.png'
import porte from '../assets/porte.png'
import LettreS from '../assets/LettreS.png'
import LettreA from '../assets/LettreA.png'



function Banner() {
    return (
        <div className="Header">
            <div className='Logo'>
                <div className='LogoK'><img src={LettreK} alt='Logo lettre K'  /></div>
                <div className='LogoM'><img src={maison} alt='Logo Maison'  /></div>
                <div className='LogoP'><img src={porte} alt='Logo Porte'  /></div>
                <div className='LogoS'><img src={LettreS} alt='Logo lettre S'  /></div>
                <div className='LogoA'><img src={LettreA} alt='Logo lettre A'  /></div>
            </div>
            <div className='Nav'>
                <div className='AccueilNav'><a href="#"><p>Accueil</p></a></div>
                <div className='AProposNav'><a href="#"><p>A Propos</p></a></div>
            </div>
        </div>
    )
}

export default Banner