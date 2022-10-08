import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Text } from "react-native";

const Loading = () => {
  return (
    <LoaderWrapper>
      <ActivityIndicator size="large" />
      <Text>Загрузка...</Text>
    </LoaderWrapper>
  );
};

export default Loading;

const LoaderWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
