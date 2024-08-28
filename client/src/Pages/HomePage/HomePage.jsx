import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function HomePage(){
    const [gods, setGods] = useState([]);
    const [currentPantheon, setCurrentPantheon] = useState("");
    const { idFromParams } = useParams();

    useEffect(() =>{
        try {
            const getGods = async () =>{
                const { data } = await axios.get('http://localhost:8080/api/v1/gods');
                setGods(data);
            }
            getGods();
        } catch (error) {
            console.log(error);
        }
    })
    

    return(
        <>

        {gods.map((god) =>(
            <img key={god.name} src={`src/assets/images/SkinArt_${god.name}S2_default.jpg`} alt="" />
        ))
        
        }
            {/* <Header></Header>
            <PantheonNavList></PantheonNavList>
            <GodCardList></GodCardList> */}
        </>
    )
}