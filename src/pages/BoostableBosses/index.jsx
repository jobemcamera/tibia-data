import Boosted from 'components/Boosted';
import Card from 'components/Card';
import React, { useEffect, useState } from 'react'

export default function BoostableBosses() {

    const [bosses, setBosses] = useState([])
    const [boosted, setBoosted] = useState([])

    // Boosted Boss
    useEffect( () => {
        const boostedBoss = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBoosted(jsonData.boostable_bosses.boosted);
        };

        boostedBoss();
    })
    
    // Boostable Bosses
    useEffect(() => {
        const boostableBosses = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBosses(jsonData.boostable_bosses.boostable_boss_list);
        };

        boostableBosses();

    }, [])

    return (
        <>
            <Boosted boosted={boosted} name="Boostable Bosses" text="boss"/>
            <Card item={bosses}/>
        </>
    )
}
