import { View } from "@tarojs/components";
import { AtButton, AtRadio } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import questions from "../../data/questions.json";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";
export default () => {



  const [currentOption, setCurrentOption] = useState<number>(1);
  const [question, setQuestion] = useState<any>(questions[0]);



  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [answerList, setAnswerList] = useState<string[]>([]);
  // 修正 map 语法错误，正确生成选项
  const questionOptions = question.options.map((option) => ({
    label: `${option.key}. ${option.value}`,
    value: option.key
  }));



    // 计算总分
    const calculateTotalScore = () => {
      let totalScore = 0;
      answerList.forEach((answer, index) => {
        const selectedOption = questions[index].options.find(option => option.key === answer);
        if (selectedOption) {
          totalScore += selectedOption.score;
        }
      });
      return totalScore;
    };
  const handleClick = () => {
    const totalScore = calculateTotalScore();

    console.log("answerList:", answerList);

    console.log("totalScore:", totalScore);
    Taro.navigateTo({
      url: `/pages/result/index?totalScore=${totalScore}`
    });
  };

  const handleNextQuestionClick = () => {
    // TODO: 处理下一题按钮点击事件
    setCurrentOption(currentOption + 1);
  };

  useEffect(() => {
    setQuestion(questions[currentOption - 1]);
    setCurrentAnswer(answerList[currentOption - 1] || "");
  }, [currentOption]);

  const handlePreQuestionClick = () => {
    // TODO: 处理上一题按钮点击事件
    setCurrentOption(currentOption - 1);
  };

  return (
    <View className="doQuestionPage">
      <View className="question_tilte">{currentOption}.{question.question}</View>
      <View className="question_options">
        <AtRadio options={questionOptions} 
        value={currentAnswer}
        onClick={(value) => {
          setCurrentAnswer(value);
          answerList[currentOption - 1] = value; // 记录答案
        }}
        />
      </View>
      {
        currentOption < questions.length && (
          <AtButton className="controlBtn" type="primary" circle onClick={handleNextQuestionClick}
          disabled={currentAnswer === ""}>
            下一题
          </AtButton>)
      }
      {
        currentOption == questions.length && (
          <AtButton className="controlBtn" type="primary" circle onClick={handleClick}
          disabled={currentAnswer === ""}>
            查看结果
          </AtButton>)
      }
      {currentOption > 1 && (
        <AtButton className="controlBtn" circle onClick={handlePreQuestionClick}>
          上一题
        </AtButton>
      )
      }
      <GlobalFooter />
    </View>
  );
};
