import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "danger";
type Button = Omit<ComponentProps<"button">, "className" | "style"> & {
  variant: Variant;
  icon?: ReactNode;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "flex items-center justify-center h-12 gap-2 bg-primary text-white rounded-10 w-full",
  danger: "bg-primary text-white",
};

function Button({ children, variant, icon, ...rest }: Button) {
  return (
    <button className={variantClasses[variant]} {...rest}>
      {children}
      {icon}
    </button>
  );
}

export default Button;
