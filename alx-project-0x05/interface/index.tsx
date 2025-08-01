// PageRouteProps for routing actions
export interface PageRouteProps {
  pageRoute: string;
}

// ButtonProps for the Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  pageRoute?: string;
  action?: (args: PageRouteProps) => void;
}

// LayoutProps for the Layout component
export interface LayoutProps {
  children: React.ReactNode;
}
