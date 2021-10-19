import { useEffect, useState } from 'react';

const useFetch = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/allServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return  [services]
    
}

export default useFetch
