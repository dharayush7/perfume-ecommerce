"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  varient?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const LoadingButton = ({
  children,
  className,
  disabled,
  isLoading,
  varient,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      className={cn("gap-3 cursor-pointer", className)}
      {...props}
      disabled={disabled || isLoading}
      variant={varient}
    >
      {children}
      {isLoading && (
        <Loader2 size={20} className="animate-spin text-primary-foreground" />
      )}
    </Button>
  );
};

export default LoadingButton;
