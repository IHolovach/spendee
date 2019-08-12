import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { setModal } from '../../store/actions/modal';

class CategoriesContainer extends Component {
  state = {
    categories: [],
    category: [],
    date: new Date(),
    note: 0,
    amount: 0,
  };

  componentDidMount() {
    const {
      currency,
      incomeCategories,
      expenseCategories,
    } = this.props;
    const categories = {
      ...incomeCategories,
      ...expenseCategories,
    };

    this.setState({
      currency: Object.keys(currency)[0],
      categories,
    });
  }

  onCheckboxChange = () => {
    // todo: add feature
  };

  onEdit = (data, event) => {
    const { categories } = this.state;
    const categoryId = event.currentTarget.dataset.id;
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        const updatedCategory = {
          id: categoryId,
          ...category,
          ...data,
        };

        category = updatedCategory;
      }
      return category;
    });

    this.setState({ categories: updatedCategories });
  };

  onVisibilityChange = (event) => {
    const { categories } = this.state;
    const { value } = event.currentTarget;
    const categoryId = event.currentTarget.dataset.id;
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        category.isVisible = value;
      }
      return category;
    });

    this.setState({ categories: updatedCategories });
  };

  onDelete = (event) => {
    const { categories } = this.state;
    const categoryId = event.currentTarget.dataset.id;
    const updatedCategories = categories.filter(category => category.id !== categoryId);

    this.setState({ categories: updatedCategories });
  };

  render() {
    const { children, ...rest } = this.props;

    return children({
      ...this.state,
      ...rest,
      onCheckboxChange: this.onCheckboxChange,
      onEdit: this.onEdit,
      onVisibilityChange: this.onVisibilityChange,
      onDelete: this.onDelete,
    });
  }
}

const mapStateToProps = (state) => ({
  incomeCategories: state.categories.incomeCategories,
  expenseCategories: state.categories.expenseCategories,
  currency: state.config.currency,
});

const mapDispatchToProps = {
  onSetModal: setModal,
};

CategoriesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  incomeCategories: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  expenseCategories: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  currency: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(CategoriesContainer);
