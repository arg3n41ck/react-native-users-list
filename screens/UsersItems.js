import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import HeartIcon from "../assets/svg/heart.svg";
import Svg, { Path } from "react-native-svg";

const UsersItem = ({ data }) => {
  return (
    <UsersItems>
      <UserAvatar
        source={{
          uri: data.avatar,
        }}
      />
      <UserInfo>
        <UserName>{data.name}</UserName>
        <UserProfession>{data.profession}</UserProfession>
      </UserInfo>
      {/* <View>
        <Svg viewBox="0 0 25 25" width="21" height="21">
          <Path
            class="st0"
            fill="#000"
            d="M25.04,20C23.73,20,22,18,22,16.83v-5.52c0-4.06-2.94-7.8-6.98-8.89c-0.01,0-0.03-0.01-0.04-0.01 long long path in a far far away galaxy"
          />
        </Svg>
      </View> */}
    </UsersItems>
  );
};

export default UsersItem;

const UserName = styled.Text`
  font-size: 16px;
`;

const UserProfession = styled.Text`
  font-size: 12px;
`;

const UsersItems = styled.View`
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-color: gray;
  padding: 10px 0;
`;

const UserAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-right: 12px;
`;

const UserInfo = styled.View`
  flex-direction: column;
`;
