import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';

const App = () => {
  const [welcome, setWelcome] = useState('Welcome');
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');

  useEffect(() => {
    console.log('Component Did mount');
  }, []);

  useEffect(() => {
    console.log('Component did update');
  }, [welcome]);

  const handleSubmit = () => {
    setWelcome('Selamat Datang');

    const data = {
      email: email,
      first_name: firstname,
      last_name: lastname,
    };
    Axios.post('http://192.168.1.5:3000/users', data);
  };

  console.log('render component');
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput
        value={email}
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Gap height={24} />
      <TextInput
        value={firstname}
        label="First Name"
        placeholder="Masukkan nama depan anda"
        onChangeText={e => setfirstname(e)}
      />
      <Gap height={24} />
      <TextInput
        value={lastname}
        label="Last Name"
        placeholder="Masukkan nama belakang anda"
        onChangeText={e => setlastname(e)}
      />
      <Gap height={48} />
      <Button label="Add" onSubmit={handleSubmit} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  gap: {
    height: 20,
  },
});

export default App;
