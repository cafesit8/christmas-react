import img from '../images/celebrate.png'
import '../sass/style.scss'

export const Section3=()=>{
    return(
        <section className='section3'>
            <article className='content'>
                <div className='info'>
                    <h2>Celebrate With A<br/> Lot Of Love</h2>
                    <p>In this holidays, celebrate with much love and peace, offering manu blessinds to our loved ones, friends and neighbors, whishing them a good Christmas message.</p>
                    <button>Send Good whishes</button>
                </div>
                <div className='img-container'>
                    <img src={img}/>
                </div>
            </article>
        </section>
    )
}