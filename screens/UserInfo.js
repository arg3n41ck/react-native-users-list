import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Loading from "../components/Loading";

const UserInfo = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(async () => {
    navigation.setOptions({ title });
    await axios
      .get(
        `https://634146ca16ffb7e275cdca17.mockapi.io/api/v1/users/users/${id}`
      )
      .then(({ data }) => setUserInfo(data))
      .catch((e) => alert(e));

    return () => {
      setUserInfo(null);
    };
  }, [id]);

  if (!userInfo) return <Loading />;

  return (
    <Wrapper>
      <View>
        <UserAvatar source={{ uri: userInfo.avatar }} />
        <Text>{userInfo.name}</Text>
        <Text>{userInfo.comment}</Text>
        <Text>{userInfo.profession}</Text>
        <Text>{userInfo.like}</Text>
        <Text>{userInfo.id}</Text>
      </View>
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.View`
  width: 100%;
  padding: 15px;
  flex-direction: column;
  align-items: center;
`;

const UserAvatar = styled.Image`
  width: 256px;
  height: 256px;
  border-radius: 16px;
`;
