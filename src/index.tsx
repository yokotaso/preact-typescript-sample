/** @jsx h */
import {render, h, JSX} from 'preact';
require('preact/debug');

function main(): void {
  const app = document.getElementById('app') as HTMLElement;
  render(
    <div>
      <Label title="link">
        <a href="/">This is Link</a>
      </Label>
      <Label title="no child" />
    </div>,
    app
  );
}

interface Props {
  title: string;
  children?: JSX.Element;
}

function Label(props: Props): JSX.Element {
  return (
    <div>
      {props.title}
      {props.children}
    </div>
  );
}

main();
