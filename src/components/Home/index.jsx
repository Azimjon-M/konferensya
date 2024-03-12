import React from 'react'
import Carousel from '../CarouselMain'
import WelcomeSec from '../WelcomeSec'
import IlmiyYonalish from '../IlmiyYonalish'
import AsosiySanalar from '../AsosiySanalar'
import MaqolagaQoyTalab from '../MaqolagaQoyTalab'
import Fotogalareya from '../Fotogalareya'
import Videogalareya from '../Videogalareya'
import IndicatorLocation from '../IndicatorLocation'
import Footer from '../Footer'

const Home = () => {
    return (
        <div>
            <Carousel />
            <WelcomeSec />
            <IlmiyYonalish />
            <IndicatorLocation />
            <AsosiySanalar />
            <MaqolagaQoyTalab />
            <Fotogalareya />
            <Videogalareya />
            <Footer />
        </div>
    )
}

export default Home