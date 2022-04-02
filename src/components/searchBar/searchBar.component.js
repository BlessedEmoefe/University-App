import React, { useState } from "react";
import { View, Image } from "react-native";
import {
  SearchBarContainer,
  SearchBarWrapper,
  StyledSearchbar,
  IconContainer,
  BargeContainer,
} from "./searchBar.styles";
import Chart from "react-native-vector-icons/AntDesign";

import { Badge } from "react-native-paper";
import Filter from "react-native-vector-icons/Ionicons";
import { Spacer } from "../spacer/spacer.component";
export const SearchBar = ({
  sort,
  cart,
  onPress,
  Number,
  searchQuery,
  setSearchQuery,
}) => {
  const onChangeSearch = query => setSearchQuery(query);
  // const chart = true

  return (
    <SearchBarContainer>
      <SearchBarWrapper flexDirection="row" justifyContent="center">
        <StyledSearchbar
          placeholder="Input Countries"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
       
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
