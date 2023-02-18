import img from '../images/home.png'
import '../sass/style.scss'

export const Section1=()=>{
    return (
        <section className='section1'>
            <div className='content'>
                <div className='img-container'>
                    <img src={img} />
                </div>
                <div className='info'>
                    <h1>Merry Christmas and Happy New Year</h1>
                    <p>Christmas and a new year is about to beign, all good wishes and successes.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    )
}