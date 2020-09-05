import React from "react"
import { HomeContext } from '../provider/HomeContext'
import { clientGet } from '../../../services/main/MainServices'
const useHome = () => {
    const [state, immerSetState] = React.useContext(HomeContext);

    const _getWomanProduct = async () => {
        const data = await clientGet('dbe98b64-6088-4351-8b0f-dc772d483de3')
        immerSetState(draft => {
            draft.popular_in_womens = data.products
            draft.isLoading = false
        })
    }

    const _getMenProduct = async () => {
        const data = await clientGet('b2336b1a-b4db-4109-b1c6-13f3e869fd24')
        immerSetState(draft => {
            draft.popular_in_mens = data.products
            draft.isLoading = false
        })
    }

    const _getAccessoriesProduct = async () => {
        const data = await clientGet('20684b0e-cfa5-447b-8265-bb9b85848165')
        immerSetState(draft => {
            draft.popular_in_accessories = data.products
            draft.isLoading = false
        })
    }

    const _getBanner = async () => {
        const data = await clientGet('11c3eb84-a806-4f93-b86c-2b2115be2000')
        immerSetState(draft => {
            draft.banners = data.banners
            draft.isLoading = false
        })
    }

    const _openModal = (product) => {
        immerSetState(draft => {
            draft.showModalProduct = true
            draft.product = product
        })
    }

    const _closeModal = () => {
        immerSetState(draft => {
            draft.showModalProduct = false
            draft.product = ''

        })
    }

    return {
        state,
        immerSetState,
        action: {
            _getMenProduct,
            _getWomanProduct,
            _getAccessoriesProduct,
            _getBanner,
            _openModal,
            _closeModal
        }
    };
}

export default useHome
