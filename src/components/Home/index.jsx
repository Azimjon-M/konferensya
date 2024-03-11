import React from 'react'
import Carousel from '../CarouselMain'
import WelcomeSec from '../WelcomeSec'
import IlmiyYonalish from '../IlmiyYonalish'
import AsosiySanalar from '../AsosiySanalar'
import MaqolagaQoyTalab from '../MaqolagaQoyTalab'
import Fotogalareya from '../Fotogalareya'
import Videogalareya from '../Videogalareya'

const Home = () => {
    return (
        <div>
            <Carousel />
            <WelcomeSec />
            <IlmiyYonalish />
            <AsosiySanalar />
            <MaqolagaQoyTalab />
            <Fotogalareya />
            <Videogalareya />
        </div>
    )
}

export default Home