/** @jsx h */
import {h, JSX} from 'preact';
import * as styled from './Alert.css';

export interface Props {
  children?: JSX.Element;
  text?: string;
  type: 'success' | string;
}

function className(type: string): string {
  const isSuccess = type === 'success';
  const colorClass = isSuccess ? 'bg-success' : 'bg-danger';
  return ['kuc-alert', colorClass].join(' ');
}

export function Alert(props: Props): JSX.Element {
  return (
    <div style={styled} className={className(props.type)}>
      {props.text && props.text}
      {props.children && props.children}
    </div>
  );
}
