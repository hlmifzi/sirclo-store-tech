import React from 'react'

import useHome from './hook/useHome'
import { useDidMount } from '../../utils/componentLifeCycle'

import { Header, Carousel, Slicker, Modal, image1, image2, image3, image4, image5, image6 } from '../../components/base'

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
            <section className="flex px-16 justify-center flex-wrap items-center image__section mt-6">
                <img src="https://i.ibb.co/m0Yf6db/Screen-Shot-2020-09-05-at-1-46-15-AM.png" className="mr-6" alt="" />
                <img src="https://i.ibb.co/2cphBvZ/Screen-Shot-2020-09-05-at-1-46-24-AM.png" className="mr-6" alt="" />
                <img src="https://i.ibb.co/X4X68n2/Screen-Shot-2020-09-05-at-1-46-34-AM.png" alt="" />
            </section>

            <Slicker title="POPULAR IN WOMEN" listProducts={popular_in_womens} slickerId={`POPULAR_IN_WOMEN`} />
            <Slicker title="POPULAR IN MEN" listProducts={popular_in_mens} slickerId={`POPULAR_IN_MEN`} />
            <Slicker title="POPULAR IN ACCESSORIES" listProducts={popular_in_accessories} slickerId={`POPULAR_IN_ACCESSORIES`} />
            <section className="px-16 flex-wrap">
                <div className="w-full description__shop py-5 mt-20">
                    <div className="flex flex-col mt-10">
                        <h4 className="font-semibold pb-6">KOLEKSI LENGKAP FASHION DARI BRAND-BRAND TERBAIK</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="flex flex-col mt-10">
                        <h4 className="font-semibold pb-6">BELANJA FASHION DI MAVELIN INDONESIA</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center subcribe__section ">
                <div className="">icon</div>
                <div className="">
                    <input />
                </div>
            </section>
            <section className="flex justify-center flex-wrap items-center image__section ">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
            </section>
            <footer>

            </footer>
            <Modal />
        </>
    )
}

export default Home
