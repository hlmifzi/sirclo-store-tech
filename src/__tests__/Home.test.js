import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HomeProvider } from '../page/home/provider/HomeContext'
import Home from '../page/home/Home'

describe('HOME TESTING', () => {
    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <HomeProvider {...providerProps}>{ui}</HomeProvider>,
            renderOptions
        )
    }
    test('should render banner', () => {
        const providerProps = {
            value: 'C3PO',
        }
        customRender(<Home />, { providerProps })
        expect(screen.getByText('POPULAR IN WOMEN')).toBeInTheDocument()
        expect(screen.getByText('POPULAR IN MEN')).toBeInTheDocument()
        expect(screen.getByText('POPULAR IN ACCESSORIES')).toBeInTheDocument()
    });

});