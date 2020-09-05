import { useContext } from "react"
import { HomeContext } from '../provider/HomeContext'
import { clientGet } from '../../../services/main/MainServices'
const useHome = () => {
    const [state, immerSetState] = useContext(HomeContext);

    const _getWomanProduct = async () => {
        const data = await clientGet('907fc5ac-c896-4600-9315-1e40462c6b8c')
        immerSetState(draft => {
            draft.popular_in_womens = data.products
        })
    }

    const _getMenProduct = async () => {
        const data = await clientGet('5cea83e4-1461-4e29-914f-70e4d013b78f')
        immerSetState(draft => {
            draft.popular_in_mens = data.products
        })
    }

    const _getAccessoriesProduct = async () => {
        const data = await clientGet('1e6390a4-9db2-4cbb-961e-bb5cdc654fcc')
        immerSetState(draft => {
            draft.popular_in_accessories = data.products
        })
    }

    const _getBanner = async () => {
        const data = await clientGet('f49a7e9b-4272-42e0-a1d7-919df1f9617c')
        immerSetState(draft => {
            draft.banners = data.banners
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
