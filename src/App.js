import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import Form from './components/form'
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const items = [
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    },
  ]
  return (
    <div className="App">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={''}
            onClick={() => { toggle('1'); }}
          >
            Setp 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={''}
            onClick={() => { toggle('2'); }}
          >
            Setp 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={''}
            onClick={() => { toggle('3'); }}
          >
            Setp 3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={''}
            onClick={() => { toggle('+'); }}
          >
            +
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Setp 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Setp 2 Contents</h4>
              {items.map(item=>{
                return <>
                  <Row>
                    <Col className="d-flex justify-content-start">
                      {item.title}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-start">
                      {item.description}
                    </Col>
                  </Row>
                </>
              })}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Setp 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="+">
          <Row>
            <Col sm="12">
              <h4>Will generate a step</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <Form />
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}

export default App;
