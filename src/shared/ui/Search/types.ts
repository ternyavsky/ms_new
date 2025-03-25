export interface ISearchProps {
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "lg";
  placeholder?: string;
}
