import { FC } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

type SafeAreaViewProps = ConstructorParameters<typeof SafeAreaView>[0];

const ScreenWrapper: FC<SafeAreaViewProps> = ({ style, ...props }) => (
  <SafeAreaView style={[tw`bg-white h-full`, style]} {...props} />
);

export default ScreenWrapper;
