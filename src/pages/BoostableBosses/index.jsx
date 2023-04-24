import Boosted from 'components/Boosted';
import CardBosses from 'components/CardBosses';
// import Form from 'components/Form'
import React, { useEffect, useState } from 'react'

export default function BoostableBosses() {

    const [bosses, setBosses] = useState([])
    const [boosted, setBoosted] = useState([])

    useEffect(() => {
        const boostableBosses = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBosses(jsonData.boostable_bosses.boostable_boss_list);
        };

        boostableBosses();

    }, [])

    useEffect( () => {
        const boostedBoss = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBoosted(jsonData.boostable_bosses.boosted);
        };

        boostedBoss();
    })

    return (
        <>
            {/* <Form name="Boss" /> */}
            <Boosted boosted={boosted}/>
            <CardBosses bosses={bosses}/>
        </>
    )
}
