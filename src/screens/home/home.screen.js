import React, {useState, useEffect} from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {PageContainer, ContentContainer} from './home.styles';
import {Header} from '../../components/header/header.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {CountriesCard} from '../../components/countriesCard/countriesCard.component';
import {colors} from '../../infrastructure/theme/colors';
import {useFetch} from '../../components/hooks/useFetch';
import {View, Text} from 'react-native';
import {CountriesList} from '../data';
import {SearchBar} from '../../components/searchBar/searchBar.component';
import { Loader } from '../../components/loader/loader.component';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countriesList, setCountriesList] = useState(CountriesList);

  const filteredCountriesList = countriesList.filter(country =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeArea>
      <PageContainer paddingHorizontal>
        <Header text="Dashboard" />
        <Spacer size="large" position="top" />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={filteredCountriesList}
          key={Math.random()}
          renderItem={({item}) => (
            <>
              <CountriesCard
                image={item.image}
                branchName={item.country}
                onPress={() =>
                  navigation.navigate('CountryUniversities', {
                    country: item.country,
                  })
                }
              />
              <Spacer size="large" position="top" />
            </>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};;
export default Home;
