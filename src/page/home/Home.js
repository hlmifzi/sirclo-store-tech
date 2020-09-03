import React from 'react'
import { Header } from '../../components/base/src/components/headers/Header'

const Home = () => {
    return (
        <>
            <Header />
            <div className="h-64">
                <div className="p-4 m-4 bg-green-600">
                    <h1 className="text-2xl font-bold text-white" >judul</h1>
                </div>
                <div className="p-4 m-4 bg-green-300 h-full">
                    <h1 className="text-2xl font-bold text-white" >aasdasd</h1>
                </div>
            </div>
        </>
    )
}

export default Home
