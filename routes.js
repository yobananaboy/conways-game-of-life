import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

import App from './app/component/App';

module.exports = function(app) {
    app.get('*', (req, res) => {
       const content = renderToString(
            <App />
        );
       res.render('index', {title: 'Express', content });
    });
};