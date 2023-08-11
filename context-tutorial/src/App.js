import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/colors';
import { ColorProvider } from './contexts/colors';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
  );
};

export default App;