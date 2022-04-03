import React from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentContainer,
  EmptyContentContainer,
} from './CountryUniversities.styles';
import {Header} from '../../components/header/header.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {DetailsCard} from '../../components/detailsCard/detailsCard.component';
import {colors} from '../../infrastructure/theme/colors';
import {useFetch} from '../../components/hooks/useFetch';
import {View, Text} from 'react-native';
import {carMakeData} from '../data';
import {Loader} from '../../components/loader/loader.component';
import {Empty} from '../../assets/Icons';

const CountryUniversities = ({route, navigation}) => {
  /*Integration code*/
  const {country} = route.params;
  const {data, error, loading} = useFetch(
    `http://universities.hipolabs.com/search?country=${country}`,
  );
  // console.log(carMake);
  if (loading) return <Loader />;
  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  // const {results} = data;
  // console.log(results);
  return (
    <SafeArea>
      <PageContainer paddingHorizontal>
        <Header text={`Universities in ${country}`} svg="previous" />
        <Spacer size="large" position="top" />
        {data == '' ? (
          <EmptyContentContainer justifyContent="center">
            <Empty />
            <Text>There is no data about this country</Text>
          </EmptyContentContainer>
        ) : (
          <ContentContainer
            showsVerticalScrollIndicator={false}
            data={data}
            key={Math.random()}
            renderItem={({item}) => (
              <>
                <DetailsCard
                  universityName={item.name}
                  webPages={item.web_pages}
                  domains={item.domains}
                  alphaTwoCode={item.alpha_two_code}
                />
                <Spacer size="large" position="top" />
              </>
            )}
          />
        )}
      </PageContainer>
    </SafeArea>
  );
};
export default CountryUniversities;
