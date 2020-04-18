import React, { Component } from "react";
import type { ComponentType } from "react";

type State = {
  component: ?ComponentType<any>,
};

type ImportedComponent = {
  default: ComponentType<any>,
};

export default function asyncComponent<Props: {}>(
  loadComponent: () => Promise<ImportedComponent>
): ComponentType<Props> {
  class AsyncComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      this.fetchComponent();
    }

    async fetchComponent() {
      const { default: component } = await loadComponent();

      this.setState({ component });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
