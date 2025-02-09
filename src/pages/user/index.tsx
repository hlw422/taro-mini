import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtBadge, AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import Taro from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world1!!!!!!</Text>
        <AtButton className="btn" type='primary' onClick={() => { Taro.navigateTo({ url: '/pages/index/index' })}}>路飞</AtButton>
      </View>
    );
  }
}
