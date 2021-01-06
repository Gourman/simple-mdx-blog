import React from 'react';
import { ContainerWrapper } from "../elements"
import { Nav } from './Nav';

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
        </ContainerWrapper>
    );
}

export default Container;