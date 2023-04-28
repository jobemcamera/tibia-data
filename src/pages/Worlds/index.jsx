import Form from 'components/Form';
import WorldsList from 'components/WorldsList';
import React, { useEffect, useState } from 'react';

export default function Worlds() {

    const [worlds, setWorlds] = useState([]);

    useEffect( () => {
        const worlds = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/worlds');
            const jsonData = await response.json();
            setWorlds(jsonData.worlds.regular_worlds);
        };

        worlds();
        
    }, []);

    // const protectedBattlEye = () => {
    //     return worlds.map( (local, index) => {
    //         const battlEyeDate = new Date(local.battleye_date);
    //         const year = battlEyeDate.getFullYear();
    //         const month = battlEyeDate.getMonth() + 1;
    //         const day = battlEyeDate.getDate();

    //         if (battlEyeDate != "Invalid Date") {
    //             console.log(`${year}-${month}-${day}`)
    //         }
    //     })
    // }

    // const protectedBattlEye = () => {
    //     return worlds.map( local => {
    //         if (local.battleye_date != "release" && local.battleye_date != "") {
    //             <div key={local.battleye_date}>
    //                 <img src={greenBE} alt="Green BattlEye" />
    //             </div>
    //         } else {
    //             <div key={local.battleye_date}>
    //                 <img src={yellowBE} alt="Yellow BattlEye" />
    //             </div>
    //         }
    //     })
    // }
    // protectedBattlEye();

    return (
        <>
            <Form name="Search World" />

            <WorldsList worlds={worlds}/>
        </>
    )
}
