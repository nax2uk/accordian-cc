import React from 'react';
import AccordionCC from './components/AccordianCC';
import Section from './components/Section';
import Title from './components/Title';
import Content from './components/Content';
import Description from './components/Description';
import './App.css';

function App() {
  return (
    <AccordionCC>
      <Section>
        <Title>
          Paris<span role="img" aria-label="cheese">🧀</span>
        </Title>
        <Content>
          <Description city="paris" />
        </Content>
      </Section>
      <Section>
        <Title>
          Lech <span role="img" aria-label="ski">⛷</span>
        </Title>
        <Content>
          <Description city="lech" />
        </Content>
      </Section>
      <Section>
        <Title>
          Madrid <span role="img" aria-label="wine">🍷</span>
        </Title>
        <Content>
          <Description city="madrid" />
        </Content>
      </Section>
    </AccordionCC>
  )
}

export default App;
