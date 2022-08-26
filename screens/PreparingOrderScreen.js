import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#00ccbb] justify-center items-center">
      <Animatable.Image
        source={require('../assets/orderLoading.gif')}
        animation="slideInUp"
        iterableCount={1}
        className="h-96 w-96 rounded-sm"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waitinf for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};
export default PreparingOrderScreen;
