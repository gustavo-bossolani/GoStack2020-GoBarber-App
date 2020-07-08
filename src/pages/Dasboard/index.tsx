import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 20 }}>
      <Text style={{ color: '#fff', justifyContent: 'center' }}>
        {`Olá ${user.name}`}
      </Text>
      <Text
        style={{
          color: '#fff',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        {`Você acessou através do Email ${user.email}`}
      </Text>
      <Button title="Deseja Sair?" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
