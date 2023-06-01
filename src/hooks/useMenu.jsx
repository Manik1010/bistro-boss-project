// This is custom Hook....
import { useEffect, useState } from "react"

const useMenu = () =>{
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        // fetch('http://localhost:5000/menu')
        fetch('https://bistro-boss-server-sandy.vercel.app/menu')
        .then(res => res.json())
        .then( data => {
            setMenu(data);
            setLoading(false);
        })
    }, [])
    return[menu, loading]
}

export default useMenu;