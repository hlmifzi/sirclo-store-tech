import React from 'react'

import useHome from './hook/useHome'
import { useDidMount } from '../../utils/componentLifeCycle'

import {
    Header,
    Carousel, Slicker,
    Modal,
    ThreeImage,
    FooterDescription,
    Footer,
    FooterSubcribe,
    FooterImage
} from '../../components/base'

import './home.scss'
const Home = () => {
    const { popular_in_womens, popular_in_mens, popular_in_accessories, banners } = useHome().state
    const { _getBanner, _getMenProduct, _getWomanProduct, _getAccessoriesProduct } = useHome().action

    useDidMount(() => {
        _getBanner()
        _getMenProduct()
        _getWomanProduct()
        _getAccessoriesProduct()
    })

    return (
        <>
            <Header />
            <div className="px-16">
                <Carousel imageLists={banners} />
            </div>
            <ThreeImage />
            <Slicker title="POPULAR IN WOMEN" listProducts={popular_in_womens} slickerId={`POPULAR_IN_WOMEN`} />
            <Slicker title="POPULAR IN MEN" listProducts={popular_in_mens} slickerId={`POPULAR_IN_MEN`} />
            <Slicker title="POPULAR IN ACCESSORIES" listProducts={popular_in_accessories} slickerId={`POPULAR_IN_ACCESSORIES`} />


            <FooterDescription />
            <FooterSubcribe />
            <FooterImage />

            <Footer />
            <Modal />
        </>
    )
}

export default Home
