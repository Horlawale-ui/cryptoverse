import React from 'react'
import {Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MeunOutlined } from '@ant-design/icons';
import icon from '../images/cryto.jpg'

const Navbar = () => {
    return (
        <div className="nav-container">
        <div className="logo-container">
            <Avater src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Crytoverse</Link>
            </Typography.Title>
            {/* <button className="menu-container">

            </button> */}
        </div>    
        </div>
    )
}

export default Navbar
