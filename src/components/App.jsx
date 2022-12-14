import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = event => {
    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    return totalCount;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.countTotalFeedback();
    const positivePercent =
      totalCount > 0
        ? ((100 * good) / totalCount)
        : 0
    return Math.round(positivePercent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
            />
        </Section>

        <Section title="Statistics">
          {
            (totalCount === 0)
              ? (
                <Notification message="There is no feedback yet" />
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback}
                  positivePercentage={this.countPositiveFeedbackPercentage}
                />
              )
          }
        </Section>
      </>
    );
  };
}
