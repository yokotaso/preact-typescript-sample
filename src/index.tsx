/** @jsx h */
import {render, h, JSX} from 'preact';
import {Alert, Dialog} from "@yokotaso/kintone-ui-component/lib/js/components-react";

require('preact/debug');

function main(): void {
  // eslint-disable-next-line no-console
  const handleClick = (evnet: Event) => console.log(event);
  const app = document.getElementById('app') as HTMLElement;
  render(
    <div className="hoge" onClick={(ev) => console.log(ev)}>
      <Alert text="This is Alert" />
    </div>,
    app
  );
}

interface Props {
  content: string;
}

function Label(props: Props): JSX.Element {
  return <div>{props.content}</div>;
}

main();
