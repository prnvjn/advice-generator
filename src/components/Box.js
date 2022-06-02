
import { useEffect, useState    } from 'react';
import Advice from './Advice';

const Box =()=>{

    const [advice, setAdvice]=useState([])


    useEffect(()=>{
        askAdvice()



    },[])

    async function askAdvice(){
        const res = await fetch(
            `https://api.adviceslip.com/advice`
          );
          const json = await res.json();
      
          setAdvice(json.slip);
        }
    
    return(
        <div className='box'>
                <Advice value={advice}/>

<button className='dice' onClick={()=>{askAdvice()

console.log(advice)}}></button>
        </div>
      


        
    )
}

export default Box