import React from 'react';
import { Canvas } from 'react-three-fiber'
import './App.css';
import { Box } from './components/Box.js'

function App() {
  return (
      <Canvas
      camera={{
        position: [-10, 10, -10],
        fav: 55,
      }}
    >
      <ambientLight />
      <pointLight
        position={[-10, 10 , 10]}
        castShadow
      />
      {
        [-3, 0, 3].map((x)=> [-3, 0, 3].map((z) =>
            <Box  position={[x, 0, z]}
            key={x + Math.random()}
            />
          )
        )
      }
    </Canvas>
  );
}

export default App;
