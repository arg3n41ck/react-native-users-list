import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Loading from "../components/Loading";
import UsersList from "./UsersList";

const HomePage = ({ navigation }) => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    setUsers(null);
    return await axios
      .get(`https://634146ca16ffb7e275cdca17.mockapi.io/api/v1/users/users`)
      .then(({ data }) => setUsers(data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) return <Loading />;

  return (
    <Wrapper>
      <UsersList
        users={users}
        fetchUsers={fetchUsers}
        navigation={navigation}
      />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.View`
  padding: 15px;
`;
