import React from 'react'

import useHome from './hook/useHome'
import { useDidMount } from '../../utils/componentLifeCycle'

import { Header } from '../../components/base/src/components/headers/Header'
import { Carousel } from '../../components/base/src/components/carousel/Carousel'
import { Slicker } from '../../components/base/src/components/slickers/Slicker'
import Modal from '../../components/base/src/components/modal/Modal'

const Home = () => {
    const { popular_in_womens, popular_in_mens, popular_in_accessories, banner } = useHome().state
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
                <Carousel />
            </div>
            <Slicker title="POPULAR IN WOMEN" listProducts={popular_in_womens} slickerId={`POPULAR_IN_WOMEN`} />
            <Slicker title="POPULAR IN MEN" listProducts={popular_in_mens} slickerId={`POPULAR_IN_MEN`} />
            <Slicker title="POPULAR IN ACCESSORIES" listProducts={popular_in_accessories} slickerId={`POPULAR_IN_ACCESSORIES`} />
            <Modal />
        </>
    )
}

export default Home
