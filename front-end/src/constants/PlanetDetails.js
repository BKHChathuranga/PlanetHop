import { StyleSheet, Text } from "react-native";

const planetDetails = {
    mars : {
        desc : <>You‘ve been selected one of the best travel destinations. You can feel and experience the culture and other things in <Text style={{color: '#B36EFA'}}>Mars</Text>. </>,
        bullets: [
            <>Mars is the <Text style={{color: '#B36EFA'}}>fourth planet</Text> from the Sun.</>,
            <>Mars is also a dynamic planet with seasons, polar ice caps, canyons and extinct volcanoes.</>,
            <>There are more than <Text style={{color: '#B36EFA'}}>100 human colonies</Text>.</>,
            <>There are so many cultural events such as ORBI new year and good Mondays.</>
        ]
    },
    jupiter: {
        desc: <>You‘ve been selected one of the best travel destinations. You can feel and experience the culture and other things in <Text style={{color: '#B36EFA'}}>Jupiter</Text>.</>,
        bullets: [
            <>Jupiter is the <Text style={{color: '#B36EFA'}}>fifth planet</Text> from the Sun.</>,
            <>Jupiter has an impressive collection of moons, including the four largest known as the Galilean moons</>,
            <>There are stunning auroras in the polar region</>,
            <>There are floating cities among dense cloud layers.</>,
        ]
    },
    saturn: {
        desc: <>You‘ve been selected one of the best travel destinations. You can feel and experience the culture and other things in <Text style={{color: '#B36EFA'}}>Saturn</Text>.</>,
        bullets: [
            <>Saturn is the <Text style={{color: '#B36EFA'}}>sixth planet</Text> from the Sun.</>,
            <>Saturn has an iconic ring system which the travellers can witness up close.</>,
            <>There are Methane lakes, icy mountains and exotic life within</>,
            <>There are space habitats within saturn rings</>,
        ]
    },
    uranus: {
        desc: <>You‘ve been selected one of the best travel destinations. You can feel and experience the culture and other things in <Text style={{color: '#B36EFA'}}>Uranus</Text>.</>,
        bullets: [
            <>Uranus is the <Text style={{color: '#B36EFA'}}>seventh planet</Text> from the Sun</>,
            <>Has diverse and rugged landscape with deep canyons, towering cliffs, and icy plains.</>,
            <>Uranus has extreme seasons and unique sunlight angles</>,
            <>There are cultural events such as ice sculpting festivals</>,
        ]
    },
    neptune: {
        desc: <>You‘ve been selected one of the best travel destinations. You can feel and experience the culture and other things in <Text style={{color: '#B36EFA'}}>Neptune</Text>.</>,
        bullets: [
            <>Neptune is the <Text style={{color: '#B36EFA'}}>eighth planet</Text> from the  sun</>,
            <>There are geysers erupting beneath the icy surface</>,
            <>Visitors can join underwater explorations</>,
            <>Cultural events include cosmic themed music and art festivals</>,
        ]
    },
}

export default planetDetails