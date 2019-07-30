import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';
import store from './store';

describe('Participant testing', () => {
  it ('renders without crashing', () => {
    const div= document.createElement('div');
    ReactDOM.render(<Participant store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('renders this UI expected', () => {
    const tree=renderer.create(<Participant store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});