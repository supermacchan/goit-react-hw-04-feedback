import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.feedback__options}>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button
                            type="button"
                            name={option}
                            className={css.feedback__button}
                            onClick={onLeaveFeedback}
                        >
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};