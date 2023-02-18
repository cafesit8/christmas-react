import img1 from '../images/giving1.png'
import img2 from '../images/giving2.png'
import img3 from '../images/giving3.png'
import { Gift } from './section2-gifts/Gift'
import '../sass/style.scss'

export const Section2=()=>{
    return (
        <section className='section2'>
            <article className='content'>
                <div className='subtitle'>
                    <h2>Start Giving This<br/> Christmas</h2>
                </div>
                <div className='gifts'>
                    <Gift img={img1} subtitle='Surprise Gifts' text='They are the best gifts there is.'/>
                    <Gift img={img2} subtitle='Ornaments' text='Give a moment to decorate.'/>
                    <Gift img={img3} subtitle='Lots of love' text='Give away feelings that last forever.'/>
                </div>
            </article>
        </section>
    )
}