import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { HeartFilled, LinkedinOutlined, MediumOutlined, InstagramOutlined } from '@ant-design/icons';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/exchanges">
                            <Exchanges />
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path="/crypto/:coinId">
                            <CryptoDetails />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                    <Link to="/">
                        CryptoCrowd Inc.
                    </Link> <br />
                    Made By Prantik Mukherjee With <HeartFilled />
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                <a href="https://www.linkedin.com/in/prantikmukherjee/"><LinkedinOutlined /></a>
                <a href="https://medium.com/@champmaniac"><MediumOutlined /></a>
                <a href="https://www.instagram.com/mukherjee_prantikk/"><InstagramOutlined /></a>
                </Typography.Title>
            </div>
        </div>
    </div>
);

export default App;