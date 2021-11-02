import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";

export interface IHelloWorldState {
  stagetitle: string;
}
export default class HelloWorld extends React.Component<
  IHelloWorldProps,
  IHelloWorldState
> {
  public constructor(props: IHelloWorldProps, state: IHelloWorldState) {
    super(props);
    this.state = {
      stagetitle: "Inside constructor",
    };
    this.updatestate = this.updatestate.bind(this);
    console.log(this.state.stagetitle);
  }
  public componentWillMount() {
    console.log("componentWillMount called..");
  }
  public componentDidMount() {
    console.log("componentDidMount called..");
    this.setState({
      stagetitle: "Inside Did Mount",
    });
  }
  public updatestate() {
    this.setState({
      stagetitle: "State updated using button",
    });
  }
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <h3>{this.state.stagetitle}</h3>
        <button onClick={this.updatestate}>Click here to updatesate</button>
      </div>
    );
  }
}
