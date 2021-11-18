import React, { useEffect, useState } from 'react'
import LottieAnimations from './Lottie'

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import Join from './components/Join/Join2'
import Chat from './components/Chat/Chat'
import Loading from './loading.json'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function PreLoader2() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, null);
          // Change the above val to shorten the animation time
        });
    }, 2000);
  }, []);
  const { height, width } = useWindowDimensions();

  return (
    <>
      {!loading ? (
        <div className="bg-gray-900">
          <LottieAnimations lotti={Loading} height={height} width={width} />
        </div>
      ) : (
        <Router>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
        </Router>
      )}
    </>
  );
}



const App = () => (
  <Switch>
    <Route exact path="/" component={Join} />
    <Route path="/chat" component={Chat} />
  </Switch>
)

export default PreLoader2
