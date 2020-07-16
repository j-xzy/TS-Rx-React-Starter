import * as React from 'react';
import './style.styl';

export function App() {
  const { hello } = window.useSelector((s) => ({ hello: s.hello }));
  React.useEffect(() => {
    window.dispatch('getHelloFromRemote');
  }, []);

  return (
    <div className='app'>
      {hello}
    </div>
  );
}
