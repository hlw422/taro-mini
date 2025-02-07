import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtBadge, AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world1111!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle={true}>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>

        <AtButton>按钮文案</AtButton>

        <AtBadge value={10} maxValue={99}>
          <AtButton size="small">按钮</AtButton>
        </AtBadge>
      </View>
    );
  }
}
