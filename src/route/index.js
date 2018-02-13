import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import Loadable from 'react-loadable'
import Index from '../components/home/index'
import Page1 from '../components/page/page1'
import history from '../components/public/history';
const Tui = Loadable({
    loader: () => import('../components/list/tui'),
    loading() {
        return <div>Loading...</div>
    }
});

const Page2 = Loadable({
    loader: () => import('../components/page/page2'),
    loading() {
        return <div>Loading...</div>
    }
});



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                <div>
                    {/**
                     * 这里可以公共的样式,比如 头部, 尾部, 等.
                     */
                    }
                    <Switch>
                        <Route path="/tui" render={() => <Tui />}/>
                        <Index>
                            <Route exact path="/" component={Page1}/>
                            <Route path="/page_1" component={Page1}/>
                            <Route path="/page_2" render={() => <Page2 />}/>
                        </Index>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;