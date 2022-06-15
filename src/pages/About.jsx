import { useState } from "react";
import { useEffect } from "react";

const About = ({URL}) => {

    const [about, setAbout] = useState(null);

    const getAbout = async () => {
        const response = await fetch(URL + 'about');
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAbout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading....</h1>
}

export default About;