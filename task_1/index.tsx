import { Component, memo, PureComponent } from "react";
import { IUser, IProps } from "./interface";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => {
    console.log("SecondComponent has been updated");

    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.age === nextProps.user.age
);

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
    return (
      nextProps.user.name !== this.props.user.name ||
      nextProps.user.age !== this.props.user.age
    );
  }

  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
