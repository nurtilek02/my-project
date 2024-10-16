import React, { useState } from 'react';
import { FlatList, View, StyleSheet, SafeAreaView, RefreshControl } from 'react-native';
import LanguageItem from '../../components/LanguageItem'; 

const langs = [
  {
    id: '1',
    lang: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    experience: 'Опыт: 2 года',
  },
  {
    id: '2',
    lang: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    experience: 'Опыт: Нету',
  },
  {
    id: '3',
    lang: 'Java',
    logo: 'https://upload.wikimedia.org/wikipedia/ru/3/39/Java_logo.svg',
    experience: 'Опыт: Нету',
  },
  {
    id: '4',
    lang: 'C++',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    experience: 'Опыт: Нету',
  },
];

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <LanguageItem
            lang={item.lang}
            logo={item.logo}
            experience={item.experience}
          />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
