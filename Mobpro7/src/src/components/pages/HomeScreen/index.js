import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Button from '../../atoms/Button';
import Axios from 'axios';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));

    //Axios
    if (users.length === 0) {
      Axios.get('http://192.168.1.5:3000/users').then(({data}) =>
        setUsers(data)
      );
    }
  });

  const handleSubmit = () => {
    const data = {
      email: 'S21810032@student.unklab.ac.id',
      first_name: 'Timothy',
      last_name: 'matthew',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
    };
    Axios.post('http://192.168.1.5:3000/users', data).then(() =>
      Axios.get('http://192.168.1.5:3000/users').then(({data}) =>
        setUsers(data)
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Button label="Tambah" onSubmit={handleSubmit} />
        {users.map(item => (
          <Card
            key={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});
