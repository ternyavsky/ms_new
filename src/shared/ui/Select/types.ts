import { SingleValueProps } from "react-select";

export interface Option {
  value: string;
  label: string;
  icon?: JSX.Element | string;
}

export interface ISelectProps {
  options: Option[];
  placeholder?: string;
}

export interface ISingleValueProps extends SingleValueProps<Option> {
  icon?: JSX.Element | string;
}
