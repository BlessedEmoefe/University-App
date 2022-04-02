import React from 'react';
import {Spacer} from '../../components/spacer/spacer.component';
import {
  ContainerWrapper,
  RestrauntsBranchCardContainer,
  Wrapper,
  ImageSection,
  LinearGradientBackground,
  InfoSection,
  NameAndStarContainer,
  NameText,
  RatingStar,
  AddressAndRatingContainer,
  AddressText,
  RatingNumber,
} from './countriesCard.styles';
import Nigeria from '../../assets/nigeria.jpg';
import {colors} from '../../infrastructure/theme/colors';

export const CountriesCard = ({
  image,
  firstGradientColor,
  secondGradientColor,
  thirdGradientColor,
  branchName,
  branchAddress,
  rating,
  onPress,
}) => {
  return (
    <ContainerWrapper onPress={onPress}>
      <RestrauntsBranchCardContainer source={image} resizeMode="cover">
        <ImageSection background="transparent" height={130}></ImageSection>

        <LinearGradientBackground
          colors={[firstGradientColor, secondGradientColor, thirdGradientColor]}
          start={{x: 2, y: 0.1}}
          end={{x: 0.1, y: 1.2}}>
          <InfoSection height="auto" paddingVertical={'20px'}>
            <Wrapper paddingHorizontal alignItems="flex-start">
              <NameText variant="title" numberOfLines={1}>
                {branchName}
              </NameText>
            </Wrapper>

            <Spacer size="small" position="top" />

            <Wrapper alignItems="flex-start" paddingHorizontal>
              <AddressText variant="smallBody" numberOfLines={1}>
                {branchAddress}
              </AddressText>
            </Wrapper>
          </InfoSection>
        </LinearGradientBackground>
      </RestrauntsBranchCardContainer>
    </ContainerWrapper>
  );
};

CountriesCard.defaultProps = {
  image: Nigeria,
  firstGradientColor: 'rgba(0,0,0,0.5)',
  secondGradientColor: 'rgba(0,0,0,0.5)',
  thirdGradientColor: colors.primary,
  branchAddress: 'Click to view More',
};
