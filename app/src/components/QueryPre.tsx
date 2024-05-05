import { useEffect, useState } from 'react';

type WeatherType = {
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>
}

const fetchWeather = async () => {
    const res=await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&lang=ja&appid=')
    if(res.ok){
        return await res.json() as WeatherType;
    }
    throw new Error(res.statusText);
};

export default function QueryPre() {
    const [data, setData] = useState<WeatherType>();
    const [isloading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        fetchWeather()
          .then(result => setData(result))
          .catch(err => setError(err.message))
          .finally(() => setLoading(false));
      }, []);

    if(isloading){
        return <p>loading...</p>
    }

    if(error){
        return <p>Error:{error}</p>
    }

    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    )
}