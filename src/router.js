import React from "react";
import { Route, IndexRoute } from 'react-router';
import App from './App'
import Login from './components/login.component';
import Home from './components/Home.component';
import NotFound from './components/notFound';
import Blog from './components/Blog.component';
import About from './components/About.component'

export const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />

        <Route path="login" component={Login} />
        <Route path="home" component={Home} />
        <Route path="blog" component={Blog} />
        <Route path="about" component={About} />
        <Route path="**" component={NotFound} />
    </Route>
);