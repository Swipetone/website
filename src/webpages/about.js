import React from 'react';
import '../assets/css/Footer-Dark.css';
import '../assets/css/Header-Dark.css';
import '../assets/css/Helvetica.css';
import '../assets/css/styles.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import Preview1 from '../assets/img/Frame1.png';
import Preview2 from '../assets/img/Frame2.png';
import Preview3 from '../assets/img/Frame3.png';
import Background from '../assets/img/Background.png';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div style={{
            background: `url(${Background})`
        }}>
            <div style={{ backgroundColor: "#121212CC" }}>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <title>Swipetone Testers</title>
                <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/Helvetica.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
                <link rel="stylesheet" href="assets/css/Footer-Dark.css" />
                <link rel="stylesheet" href="assets/css/Header-Dark.css" />
                <link rel="stylesheet" href="assets/css/styles.css" />
                <header className="header-dark" style={{ background: 'rgba(68,68,68,0)', paddingBottom: '40px' }}>
                    <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                        <div className="container"><a className="navbar-brand" href="https://swipetone.com">Swipetone Testers</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="https://swipetone.com">Domov</a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/swipetone/">Instagram</a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://twitter.com/swipetone">Twitter</a></li>
                                    <li className="nav-item" />
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container hero">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 offset-xl-2">
                            <h1 className="text-center" style={{ fontFamily: 'Helvetica', color: 'rgb(255,255,255)' }}>Čo je Swipetone?</h1>
                            <p style={{ color: 'rgb(237,237,237)', padding: '25px', fontFamily: 'Roboto, sans-serif', fontSize: '18px', textAlign: "justify", marginTop: '30px' }}>Myšlienka milovníkov hudby, ktorá sa pretvorila do mobilnej aplikácie., Tá ti umožní objavovať novú hudbu prostredníctvom rýchleho výberu z krátkych 30 sekundových ukážok v Swiperi. Popri Swipovaní môžeš spoznať nových ľudí, ktorí majú podobný vkus na hudbu ako ty. Ak sa ti nejaká pesnička zapáči, napíš krátky príspevok, vďaka ktorému, sa o nej dozvedia aj tvoji kamaráti.</p>
                            <div className="text-center" style={{ paddingBottom: '80px', marginTop: '30px' }}>
                                    <button className="btn btn-primary justify-content-center" type="button" style={{ background: '#924fff', borderStyle: 'none' }}>
                                        <a href="https://play.google.com/store/apps/details?id=com.swipetone" target="_blank" style={{textDecoration: "none", color: "#fff"}}>Stiahnuť</a>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-none d-lg-block" style={{ paddingRight: '150px', paddingLeft: '150px', paddingBottom: '120px', marginTop: '30px' }}>
                    <div className="row">
                        <div className="col-md-4 text-center"><img src={Preview1} style={{ width: '200px', borderRadius: '10px' }} alt="Swipetone App #1" /></div>
                        <div className="col-md-4 text-center"><img src={Preview2} style={{ width: '200px', borderRadius: '10px' }} alt="Swipetone App #2" /></div>
                        <div className="col-md-4 text-center"><img src={Preview3} style={{ width: '200px', borderRadius: '10px' }} alt="Swipetone App #3" /></div>
                    </div>
                </div>
                <footer className="footer-dark" style={{ background: '#121212', paddingTop: '30px', paddingBottom: '10px', marginTop: 'auto' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Mobilná aplikácia</h3>
                                <ul>
                                    <li style={{ color: 'rgb(240, 249, 255)' }}><a href="https://play.google.com/store/apps/details?id=com.swipetone" style={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(240, 249, 255)', fontSize: '16px' }}>Google Play</a></li>
                                    <li style={{ color: 'rgb(240, 249, 255)' }} />
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Podmienky</h3>
                                <ul>
                                    <li style={{ color: 'rgb(240, 249, 255)' }}><a href="https://swipetone.com/privacy-policy" target="_blank" style={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(240, 249, 255)', fontSize: '16px' }}>Privacy Policy</a></li>
                                    <li style={{ color: 'rgb(240, 249, 255)', fontSize: '16px' }}><a href="https://swipetone.com/terms-of-use" target="_blank" style={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(240, 249, 255)' }}>Terms of Use</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Swipetone</h3>
                                <p style={{ fontFamily: 'Roboto, sans-serif' }}>App for every music-lover who's had a hard time choosing what to listen to.<br />Discover, share and love music with Swipetone💜<br /></p>
                            </div>
                        </div>
                        <p className="copyright">Swipetone © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};