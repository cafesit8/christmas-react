import img1 from '../images/gift1.png';
import img2 from '../images/gift2.png';
import img3 from '../images/gift3.png';
import img4 from '../images/gift4.png';
import img5 from '../images/gift5.png';
import img6 from '../images/gift6.png';
import {Gift} from './section4-gift/Gifts'
import '../sass/style.scss'

export const Section4=()=>{
    return(
        <section className='section4'>
            <article className='content'>
                <div className='subtitle'>
                    <h2>Share A Gift</h2>
                </div>
                <div className='gitfs'>
                <Gift price='$14' name='Gingerbread' img={img1}/>
                <Gift price='$22' name='Gingerbread' img={img2}/>
                <Gift price='$43' name='Gingerbread' img={img3}/>
                <Gift price='$31' name='Gingerbread' img={img4}/>
                <Gift price='$52' name='Gingerbread' img={img5}/>
                <Gift price='$20' name='Gingerbread' img={img6}/>
                </div>
            </article>
        </section>
    )
}