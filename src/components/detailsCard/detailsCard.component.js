import React, {useState} from 'react';
import {Spacer} from '../spacer/spacer.component';
import {colors} from '../../infrastructure/theme/colors';
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  Title,
  UniversityName,
  SubText,
} from './detailsCard.styles';

export const DetailsCard = ({universityName, webPages, domains, alphaTwoCode}) => {
  return (
    <MultiPurposeCardContainer
      height={110}
      background={colors.white}
      flexDirection="row"
      justifyContent="space-between">
      <InfoSection>
        <Wrapper alignItems="flex-start">
          <Title variant="title">
            University:{' '}
            <UniversityName variant="smallBody">
              {universityName}
            </UniversityName>
          </Title>
        </Wrapper>
        <Spacer size="medium" position="top" />
        <Wrapper alignItems="flex-start">
          <SubText variant="body">Web Page: {webPages}</SubText>
        </Wrapper>
        <Wrapper alignItems="flex-start">
          <SubText variant="body">Domain: {domains}</SubText>
        </Wrapper>
        <Wrapper alignItems="flex-start">
          <SubText variant="body">Alpha Two Code: {alphaTwoCode}</SubText>
        </Wrapper>
      </InfoSection>
    </MultiPurposeCardContainer>
  );
};

