import { FC, ReactNode } from "react"
import { TouchableOpacity, Text } from "react-native"
import { GeneralObject } from "~/types"

interface ButtonProps {
  isSubmitting?: boolean
  variant?: string
  size?: string
  onChange?(): void
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ isSubmitting, size = "sm", variant = "default", onChange, children }) => {
  const variants: GeneralObject = {
    primary: "rounded-[34px] bg-[#FF785B]",
    secondary: "rounded-[6px] bg-[#FF785B]",
  }

  const sizes: GeneralObject = {
    sm: "px-[3px] py-[7px]",
    md: "px-[10px]",
    lg: "px-[40px] py-[12px]",
  }

  return (
    <TouchableOpacity
      className={`bg-white justify-center items-center h-[47px] rounded-[34px] ${variants[variant]} ${sizes[size]}`}
      onPress={onChange}
    >
      {isSubmitting ? <Text>Loading...</Text> : children}
    </TouchableOpacity>
  )
}

export default Button
