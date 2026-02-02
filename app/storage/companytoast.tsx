import { View, Text } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';

export const toastConfig = {
  companyToast: ({ text1, text2, props }: ToastConfigParams<any>) => (
    <View
      style={{
        width: '90%',
        padding: 15,
        borderRadius: 12,
        backgroundColor: props?.bgColor || '#333',
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
        {text1}
      </Text>

      {text2 ? (
        <Text style={{ color: '#fff', marginTop: 4, fontSize: 14 }}>
          {text2}
        </Text>
      ) : null}
    </View>
  ),
};
