import React, { useState } from 'react'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
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
            {/* <HeroSection /> */}
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Tools />
            <Services />
            <Contacts />
        </>
    )
}

export default Home