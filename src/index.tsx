/** @jsx h */
import {render, h, JSX} from 'preact';
import {Alert} from './components/Alert';
import {Button} from './components/Button';

require('preact/debug');

function main(): void {
  // eslint-disable-next-line no-console
  const handleClick = (evnet: Event) => console.log(event);
  const app = document.getElementById('app') as HTMLElement;
  render(
    <div>
      <Label content="link" />
      <Alert type="success">
        <span>This is success</span>
      </Alert>
      <Alert type="dangar" text="dangar" />
      <Button
        text="button"
        onClick={handleClick}
      />

      <Button
        text="button"
        type="submit"
        onClick={handleClick}
      />
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
