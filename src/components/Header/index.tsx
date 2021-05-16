import React from 'react';
import './index.css';

import HeaderIcon from '../assets/imgs/Vahak_Blue.png'

type HeaderProps = {
    imageRef?: string;
}

const Header = ({ imageRef =  HeaderIcon }: HeaderProps) => {
    return (<header><img src={imageRef} alt={'header-icon'} /></header>)    
}

export default Header;
