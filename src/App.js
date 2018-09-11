import React, { Component } from 'react';
import Modal from './components/Modal';

import './App.css';


class App extends Component {
  render() {
    const modalProps = {
      triggerText: 'This is a button to trigger the Modal'    
    };
   
    return (
      <main className="content">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eius sint a expedita inventore veniam, magni quo libero cum perferendis culpa repellat labore quia iusto assumenda optio, repellendus id porro?</p>
       <p><Modal {...modalProps} /></p>
       <p>In esse soluta aspernatur repellat dolor explicabo eaque qui eos necessitatibus. Voluptas, libero! Necessitatibus culpa, molestiae nostrum vel quis doloremque nesciunt amet. Cum quaerat deserunt deleniti fugiat dignissimos unde libero!</p>
       <p>Quos cupiditate explicabo corrupti accusamus quasi natus sapiente officiis molestias dolorem ipsam aliquam quo, dignissimos tempore nemo adipisci? Doloribus eaque cumque amet sequi impedit sed labore dignissimos corrupti possimus voluptatibus.</p>
      </main>
    );
  }
}

export default App;
