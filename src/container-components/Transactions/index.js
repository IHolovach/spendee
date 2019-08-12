import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import TransactionsService from '../../services/api/transactions';
import {
  setModal,
  removeModal,
} from '../../store/actions/modal';
import CreateTransaction from '../../modals/CreateTransaction';

class TransactionsContainer extends Component {
  state = {
    category: {
      id: "",
    },
    date: new Date(),
    note: 0,
    amount: 0,
    currency: {
      id: "",
    },
  };

  onCategoryChange = (event) => {
    const categoryId = event.currentTarget.value;
    this.setState({ category: categoryId });
  };

  onDateChange = (event) => {
    const date = event.currentTarget.value;
    this.setState({ date });
  };

  onNoteChange = (event) => {
    const note = event.currentTarget.value;
    this.setState({ note });
  };

  onAmountChange = (event) => {
    const amount = event.currentTarget.value;
    this.setState({ amount });
  };

  onCurrencyChange = (event) => {
    const value = event.currentTarget.value;

    this.setState({ currency: { id: value } });
  };

  componentDidMount() {
    const { currency } = this.props;

    this.setState({
      currency: Object.keys(currency)[0],
    });
  }

  addTransaction = async (event) => {
    const transactionId = event.currentTarget.dataset.transactionId;
    const { onRemoveModal } = this.props;
    const body = {
      ...this.state,
      id: transactionId,
    };

    // todo: rewrite as list of transactions were added before
    await TransactionsService.postTransaction(body);
    onRemoveModal();
  };

  addTransactionModal = () => {
    const { onSetModal } = this.props;

    onSetModal(<CreateTransaction
      onCategoryChange={this.onCategoryChange}
      onDateChange={this.onDateChange}
      onNoteChange={this.onNoteChange}
      onAmountChange={this.onAmountChange}
      onCurrencyChange={this.onCurrencyChange}
      addTransaction={this.addTransaction}
    />);
  };

  getRandomInt(minValue, maxValue) {
    const min = Math.ceil(minValue);
    const max = Math.ceil(maxValue);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    const { children } = this.props;

    return children({
      ...this.state,
      addTransaction: this.addTransaction,
      addTransactionModal: this.addTransactionModal,
      getRandomInt: this.getRandomInt,
    });
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.list,
  currency: state.config.currency,
});

const mapDispatchToProps = {
  onSetModal: setModal,
  onRemoveModal: removeModal,
};

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
  onSetModal: PropTypes.func.isRequired,
  onRemoveModal: PropTypes.func.isRequired,

};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(TransactionsContainer);
