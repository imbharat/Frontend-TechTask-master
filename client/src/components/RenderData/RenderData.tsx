import React from 'react';
import { Queries } from '../../shared/graphql';
import { HttpRequest } from '../../shared/xhr-interceptor';
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
    let xhr = HttpRequest('POST', '/graphql');
    xhr.send(JSON.stringify({
      query: Queries.getProducts,
    }));
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    return <div>
      {this.props.render(this.state.categories)}
    </div>;
  }
}

export default RenderData;
