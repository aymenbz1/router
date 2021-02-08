import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const MoviesDatails = ({movies,match}) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
    
     setProduct(movies.find((product)=>product.id===Number(match.params.id)))
    
    },[] )
    let history=useHistory();
    return (
        <div style={{marginTop:"80px"}}>
        <img width="20px" height="150px" src={product.image} alt="film"/> 
        <p style={{alignContent:"center",color:"black"}}>{product.description} </p>  
        <Button onClick={()=>history.push('/')}>GoToHome</Button>
        </div>
    )
}

export default MoviesDatails