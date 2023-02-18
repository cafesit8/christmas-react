export const Gift=({img, subtitle, text})=>{
    return(
        <div className='gift'>
            <div className='img-container'>
                <img src={img} />
            </div>
            <div className='info'>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}