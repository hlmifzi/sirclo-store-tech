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
    const { popular_in_womens, popular_in_mens, popular_in_accessories, banners, showModalProduct } = useHome().state
    const { _getBanner, _getMenProduct, _getWomanProduct, _getAccessoriesProduct } = useHome().action

    useDidMount(() => {
        _getBanner()
        _getMenProduct()
        _getWomanProduct()
        _getAccessoriesProduct()
    })

    const menus = [
        { title: 'NEW ARRIVAL', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'WOMAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'MAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'ACCESSORIES', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'SALE', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'BLOG', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'CONTACT', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { title: 'LOOK BOOK', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    ]

    return (
        <>
            <Header menus={menus} />
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
            {
                showModalProduct && <Modal />

            }
        </>
    )
}

export default Home
