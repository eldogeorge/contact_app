import React, { useEffect, useState } from 'react'

import ContactCard from './ContactCard';


function Home() {
    //state to hold the datas ADstep4 after importing useState
    const [contacts, setContacts] = useState([])


    //api to get all contacts from db.json ADstep1
    const fetechContacts = async () => {
        var result = await fetch('/db.json')
        //convert give data in json type to js ADstep2
        //result.json().then(data=>console.log(data.contacts))
        result.json().then(data => setContacts(data.contacts))
    }

    //ADstep5
    console.log(contacts);

    //ADstep3 after import useeffect
    useEffect(() => {
        fetechContacts()
    }, [])

    return (
        <div>
            {/* DeSstep1 */}
            <ContactCard data={contacts}></ContactCard>
        </div>
    )
}

export default Home