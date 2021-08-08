import { Component } from 'react';

class Preloader extends Component {
  preloader() {
    let preload: HTMLElement = document.querySelector('.preloader')!;
    setTimeout(() => {
      preload.style.opacity = '0';
      setTimeout(() => {
        preload.style.display = 'none';
      }, 1000);
    }, 1000);
  }

  componentDidMount() {
    this.preloader();
  }

  render() {
    return (
      <div className="preloader">
        <div className="spinner-wrap">
          <div className="spinner" />
        </div>
      </div>
    );
  }
}

export default Preloader;
