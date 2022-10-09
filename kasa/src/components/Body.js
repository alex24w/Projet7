import IMGfond from '../assets/IMGfond.png'

function Body(){
    return(
        <div className='Body'>
            <div className='Section'  style={{ backgroundImage: `url(${IMGfond})` }}>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className='Gallery'>
                <p>bonjour</p>
            </div>
        </div>
    ) 
}

export default Body