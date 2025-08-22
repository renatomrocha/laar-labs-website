import "react-icons";

declare module "react-icons" {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  // This is the crucial part: We are overriding the library's
  // faulty 'IconType' to explicitly declare that it returns a
  // valid JSX.Element, which will satisfy TypeScript.
  export type IconType = (props: IconBaseProps) => JSX.Element;
}
