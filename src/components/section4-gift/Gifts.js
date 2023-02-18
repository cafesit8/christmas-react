export const Gift=({price, name, img})=>{
    return(
        <div className='gift'>
            <div className='img-container'>
                <img src={img} />
            </div>
            <div className='info'>
                <h4>{price}</h4>
                <p>{name}</p>
            </div>
        </div>
    )
}