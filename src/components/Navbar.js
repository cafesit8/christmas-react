import '../sass/style.scss'
import logo from '../images/favicon.png'

export const Nav=()=>{

    const listActive =()=>{
        const options = document.getElementById('options')
        const list = document.querySelector('ul')

        options.classList.toggle('active')
        if (options.classList.contains('active')) {
            options.setAttribute('name', 'close')
            list.classList.add('active')
        }else{
            options.setAttribute('name', 'grid-outline')
            list.classList.remove('active')
        }
    }

    function navIcon(){
        const icon = document.getElementById('icon')
        const body = document.querySelector('body')
        icon.classList.toggle('dark')
        if (icon.classList.contains('dark')) {
            icon.setAttribute('name', 'sunny')
            body.className = "dark"
        }else{
            icon.setAttribute('name', 'moon')
            body.className = "light"
        }
    }

    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                    <span>Christmas</span>
                </div>
                <div className='content'>
                    <ul>
                        <li className='active'><a href='#'>Home</a></li>
                        <li><a href='#'>Celebrate</a></li>
                        <li><a href='#'>Gifts</a></li>
                    </ul>
                    <ion-icon id="icon" onClick={navIcon} name="moon"></ion-icon>
                </div>
                <ion-icon id="options" onClick={listActive} name="grid-outline"></ion-icon>
            </nav>
        </header>
    )
}