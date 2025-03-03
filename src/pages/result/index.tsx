import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtBadge, AtButton } from "taro-ui";
import { Image } from "@tarojs/components";
import bg from '../../assets/bg.png'
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";
import questionResults from '../../data/question_results.json'

export default () => {
  const totalScore = parseInt(Taro.getCurrentInstance().router.params.totalScore, 10);

  console.log("receive total score: ", totalScore) // 打印总分
    // 根据总分匹配结果
    const result = questionResults.find(item => totalScore >= item.minScore && totalScore <= item.maxScore);
  console.log(result) // 打印结果
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result ? result.resultName : "未找到结果"}</View>
      <View className="at-article__h2 subTitle">{result ? result.resultDesc : "无法根据您的得分得出性格结果"}</View>
      <AtButton className="indexBtn" type='primary' onClick={() => { Taro.reLaunch({ url: '/pages/index/index' }) }} circle>返回主页</AtButton>
      <Image  className="indexImg" src={bg} />
      <GlobalFooter />
    </View>
  );
};

/*
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
*/
