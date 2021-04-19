import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

export default function ButtonWithLoader(props: any) {

  const PrimaryColor: string = '#639';
  const { isLoading, handleFunction, text} = props;
  return (
    <ButtonBold onPress={handleFunction}>
        <WhiteText>{text}</WhiteText>
        {isLoading ? (
          <ActivityIndicator
            style={{ margin: 10 }}
            color='#fff'
            size='small'
          />
        ) : null}
      </ButtonBold>
  )
}

interface args{
  color?: string;
  bgColor?: string;
}
const ButtonBold = styled.TouchableOpacity<args>`
  background-color: ${(p: any) => p.bgColor ? p.bgColor : PrimaryColor};
  width: 100%;
  justify-content: center;
  height: 50px;
  align-items: center;
  padding: 10px;
  margin:2px;
  border-radius: 5px;
  display: flex;
  flex-direction: row
`;
export const WhiteText = styled.Text<args>`
  color: ${(p: any) => p.color ? p.color : 'white'};
  font-size: 20px
`;
