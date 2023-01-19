import React, { useState } from 'react'
import Contacts from '../components/Contacts'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Tools from '../components/Tools'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen ={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Tools />
            <Projects />
            <Contacts />
        </>
    )
}

export default Home