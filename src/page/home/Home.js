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
    FooterImage,
    Skeleton
} from '../../components/base'

import './home.scss'
const Home = () => {
    const { popular_in_womens, popular_in_mens, popular_in_accessories, banners, showModalProduct, isLoading, product } = useHome().state
    const { _getBanner, _getMenProduct, _getWomanProduct, _getAccessoriesProduct, _openModal, _closeModal } = useHome().action

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

    const functionOpenAndCloseModal = {
        _openModal,
        _closeModal,
        product
    }

    return (

        <>
            <Header menus={menus} />
            {
                isLoading ? <Skeleton /> : (
                    <div className="px-16">
                        <Carousel imageLists={banners} />
                    </div>
                )
            }

            <ThreeImage />
            <Slicker title="POPULAR IN WOMEN" listProducts={popular_in_womens} slickerId={`POPULAR_IN_WOMEN`} {...functionOpenAndCloseModal} />
            <Slicker title="POPULAR IN MEN" listProducts={popular_in_mens} slickerId={`POPULAR_IN_MEN`} {...functionOpenAndCloseModal} />
            <Slicker title="POPULAR IN ACCESSORIES" listProducts={popular_in_accessories} slickerId={`POPULAR_IN_ACCESSORIES`} {...functionOpenAndCloseModal} />

            <FooterDescription />
            <FooterSubcribe />
            <FooterImage />
            <Footer />

            {
                showModalProduct && <Modal  {...functionOpenAndCloseModal} />
            }
        </>
    )
}

export default Home
