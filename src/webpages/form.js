import React from 'react';
import ScrollToTop from '../components/scrollToTop';
import '../assets/css/Footer-Dark.css';
import '../assets/css/Header-Dark.css';
import '../assets/css/Helvetica.css';
import '../assets/css/styles.css';
import '../assets/bootstrap/css/bootstrap.min.css';
export const Form = () => {
    return (
        <div>
            <ScrollToTop/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <title>Swipetone - demo</title>
            <style type="text/css" dangerouslySetInnerHTML={{ __html: " html{ margin: 0; height: 100%; overflow: hidden; } iframe { position: absolute; left:0; right:0; bottom:0; top:0; border: 0; } " }} />
            <iframe id="typeform-full" title="play" width="100%" height="100%" frameBorder={0} allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/BgjfJyXa?typeform-medium=embed-snippet" />
            <header className="header-dark" style={{ background: 'rgba(68,68,68,0)', paddingBottom: '40px' }}>
                    <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                        <div className="container"><a className="navbar-brand" href="https://swipetone.com">Swipetone Testers</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/swipetone/">Instagram</a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://twitter.com/swipetone">Twitter</a></li>
                                    <li className="nav-item" />
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
        </div>
    );
};