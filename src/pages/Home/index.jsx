import React from "react";
import WelcomeSec from "../../components/WelcomeSec";
import KonferensyaBolimlari from "../../components/IlmiyYonalish";
import AsosiySanalar from "../../components/AsosiySanalar";
import MaqolagaQoyTalab from "../../components/MaqolagaQoyTalab";
import Fotogalareya from "../../components/Fotogalareya";
import Videogalareya from "../../components/Videogalareya";
import JarayonlarKorsatkichi from "../../components/IndicatorLocation";
import Carousel from "../../components/CarouselMain";

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <WelcomeSec />
            <KonferensyaBolimlari />
            <JarayonlarKorsatkichi />
            <AsosiySanalar />
            <MaqolagaQoyTalab />
            <Fotogalareya />
            <Videogalareya />
        </div>
    );
};

export default HomePage;
