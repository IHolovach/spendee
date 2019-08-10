import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

class TransactionsContainer extends Component {
  state = {
    category: [],
    date: new Date(),
    note: 0,
    amount: 0,
    currency: null,
  };

  componentDidMount() {
    const { currency } = this.props;

    this.setState({
      currency: Object.keys(currency)[0],
    });
  }


  render() {
    const { children } = this.props;

    return children({
      ...this.state,
      addTransaction: this.addTransaction,
    });
  }
}

const mapStateToProps = (state) => ({
  transactions: state.products.list,
  incomeCategories: state.categories.income,
  currency: state.config.currency,
});

TransactionsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  transactions: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  currency: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(TransactionsContainer);
