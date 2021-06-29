import React from 'react';
import * as functions from '../redux/functions';

interface Props {

}
interface State {
  name: string
  age: number
}

class ClassComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'name',
      age: 1,
    };
  }

  render() {
    return (
      <>
        <div className="col-6">
          <h1>Class component</h1>
          <p>
            {this.state.name}
          </p>
          <p>
            {this.state.age}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({
                name: 'new name',
              });
            }}
          >
            set new name
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              functions.ui.setIsLoading(false);
            }}
          >
            set loading false
          </button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
