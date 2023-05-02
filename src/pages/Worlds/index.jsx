// import Form from 'components/Form';
import WorldsList from 'components/WorldsList';
import React, { useEffect, useState } from 'react';

export default function Worlds() {

    const [worlds, setWorlds] = useState([]);

    useEffect(() => {
        const worlds = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/worlds');
            const jsonData = await response.json();
            setWorlds(jsonData.worlds.regular_worlds);
        };

        worlds();

    }, []);

    return (
        <>
            {/* <Form name="Search World" /> */}

            <WorldsList worlds={worlds} />
        </>
    )
}
