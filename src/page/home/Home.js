import React from 'react'

import useHome from './hook/useHome'

import { Header } from '../../components/base/src/components/headers/Header'
import { Carousel } from '../../components/base/src/components/carousel/Carousel'
import { Slicker } from '../../components/base/src/components/slickers/Slicker'
import { useDidMount } from '../../utils/componentLifeCycle'

const Home = () => {
    const { popular_in_woman, popular_in_men, popular_in_accessories, banner } = useHome().state
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
            <Slicker />
            <Slicker />
            <Slicker />
        </>
    )
}

export default Home
