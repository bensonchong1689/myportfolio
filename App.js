import './App.css';
import { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '1000px', position: 'relative'}}>
    <Layout fixedHeader>
     <Header className="header-color" title={<Link style={{ color: 'white', textDecoration:'none'}} to="/">Benson Chong Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title={<Link to="/">My Portfolio</Link>}>
            <Navigation className="drawer-color" >
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content className="content-color">
          <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
