import { FC } from "react"
import { View, TextInput as Input, TextInputProps } from "react-native"

interface InputProps extends TextInputProps {
  name?: string
}

const TextInput: FC<InputProps> = ({ name, ...props }) => {
  return (
    <View>
      <Input className="rounded-[33px] bg-white p-4 border-0 focus:border-[1px] focus:border-[#FF785B]" {...props} />
    </View>
  )
}

export default TextInput
