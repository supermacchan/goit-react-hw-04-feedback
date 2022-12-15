import { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  const handleButtonClick = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => (prevState + 1));
        break;
      case 'neutral': 
        setNeutral(prevState => (prevState + 1));
        break;
      case 'bad':
        setBad(prevState => (prevState + 1));
        break;
      default:
        return;
    };
  };

  const countTotalFeedback = () => {
    const totalCount = good + neutral + bad;
    return totalCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();
    const positivePercent =
      totalCount > 0
        ? ((100 * good) / totalCount)
        : 0
    return Math.round(positivePercent);
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={handleButtonClick}
            />
        </Section>

        <Section title="Statistics">
          {
            (countTotalFeedback() === 0)
              ? (
                <Notification message="There is no feedback yet" />
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback}
                  positivePercentage={countPositiveFeedbackPercentage}
                />
              )
          }
        </Section>
      </>
    );
  };

