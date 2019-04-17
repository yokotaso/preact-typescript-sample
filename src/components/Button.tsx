/** @jsx h */
import {h, JSX} from 'preact';
import * as style from './Button.css';

interface Props {
  onClick: (ev: Event) => void;
  disabled?: boolean;
  type?: string;
  text: string;
}
function className(type?: string): string {
  const isSubmit = type === 'submit';

  return ['kuc-btn', isSubmit ? 'submit' : 'normal'].join(
    ' '
  );
}
export function Button(props: Props): JSX.Element {
  return (
    <button
      style={style}
      className={className(props.type)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
