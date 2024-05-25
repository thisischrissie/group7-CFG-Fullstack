import React from 'react';

const BackToUp = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <button
        onClick={() => {
          if (props.element) {
            props.element.scrollTo({ top: 0, behavior: props.smooth ? 'smooth' : 'auto' });
          } else {
            window.scrollTo({ top: 0, behavior: props.smooth ? 'smooth' : 'auto' });
          }
        }}
        style={{ 
          width: props.size, 
          height: props.size, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          fontSize: '1rem' // Ensure the text is readable
        }}
      >
        {props.buttonText || 'Top'}
      </button>
    </div>
  );
};

BackToUp.defaultProps = {
  prefixCls: '',
  element: document.documentElement,
  smooth: true,
  className: '',
  style: {},
  top: 120,
  size: 35,
  strokeWidth: 1,
  hideProgress: false,
  buttonText: 'Top',
};

export default BackToUp;
