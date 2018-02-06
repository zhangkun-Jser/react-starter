import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import Loadable from 'react-loadable'
import Index from '../components/home/index'
import Neiye1 from '../components/neiye/neiye1'
import history from '../components/public/history';
const Tui = Loadable({
    loader: () => import('../components/list/tui'),
    loading() {
        return <div>Loading...</div>
    }
});

const Neiye2 = Loadable({
    loader: () => import('../components/neiye/neiye2'),
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
                            <Route exact path="/" component={Neiye1}/>
                            <Route path="/neiye_1" component={Neiye1}/>
                            <Route path="/neiye_2" render={() => <Neiye2 />}/>
                        </Index>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;