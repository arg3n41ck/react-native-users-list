import React from "react";
import { View, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import UsersItem from "./UsersItems";

const UsersList = ({ users, fetchUsers, navigation }) => {
  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={!users} onRefresh={fetchUsers} />
        }
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserInfo", { id: item.id, title: item.name })
            }
          >
            <UsersItem data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default UsersList;
