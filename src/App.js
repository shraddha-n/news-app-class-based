import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from "react-router-dom";

export default class App extends Component {
  pageSize =5;
  render() {
    
    return (
     
      <div>
      
        <Navbar/>
      
        <Routes>
          <Route exact path="/"  element={<News country="in" pageSize={this.pageSize} key="genral" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="general" />}/>
          <Route exact path="/business"  element={< News country="in" pageSize={this.pageSize} key="business" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="business" />}/>
          <Route exact path="/entertainment"  element={<News country="in" pageSize={this.pageSize} key="entertainment" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="entertainment" />}/>
          <Route exact path="/health" element={<News country="in" pageSize={this.pageSize} key="health" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="health"/> }/>
          <Route exact path="/science"   element={<News country="in" pageSize={this.pageSize} key="science" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="science" />}/>
          <Route exact path="/sports"  element={<News country="in" pageSize={this.pageSize} key="sports" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="sports" />}/>
          <Route exact path="/technology"  element={<News country="in" pageSize={this.pageSize} key="technology" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="technology" />}/>
        </Routes>
 
      </div>
      
    )
  }
}
