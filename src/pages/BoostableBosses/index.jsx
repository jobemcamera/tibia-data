import CardBosses from 'components/CardBosses';
import Form from 'components/Form'
import React, { useEffect, useState } from 'react'

export default function BoostableBosses() {

    const [bosses, setBosses] = useState([])

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
            <Form name="Boss" />

            <CardBosses bosses={bosses}/>
        </>
    )
}
