import { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    console.log('Component is constructed!');
  }

  componentDidMount() {
    // This method is called after the component is mounted to the DOM
    // You can use it to fetch data from an API, for example
    console.log('Component did mount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // This method is called after the component is updated
    // You can use it to perform some action based on the new state or props

    if (this.state.data !== prevState.data) {
      console.log('State Data has changed!');
    }
  }

  componentWillUnmount() {
    // This method is called before the component is unmounted from the DOM
    // You can use it to perform some cleanup, like removing event listeners
    console.log('Component will unmount');
  }

  render() {
    console.log('Component is rendered!');

    return (
      <>
        {this.state.data.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </>
    );
  }
}

export default ClassComponent;
