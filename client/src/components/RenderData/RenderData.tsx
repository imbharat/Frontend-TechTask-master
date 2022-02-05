import React from 'react';
import { getProducts } from '../../shared/helpers';
import { Category } from '../../shared/types';

interface Props {
  render: (categories: Category[]) => {}
}

type State = {
  categories: Category[];
};

class RenderData extends React.Component<Props> {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    getProducts().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    return <div>
      {this.props.render(this.state.categories)}
    </div>;
  }
}

export default RenderData;
