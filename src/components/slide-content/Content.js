export const Content=({img, price, text})=>{
    return(<>
        <div className='container-img'>
            <img src={img} />
        </div>
        <div className='info'>
            <h4>{price}</h4>
            <p>{text}</p>
        </div>
    </>)
}