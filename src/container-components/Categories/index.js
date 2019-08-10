import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

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
      categories,
    } = this.props;

    this.setState({
      currency: Object.keys(currency)[0],
      categories,
    });
  }

  onCheckboxChange = (id) => {
    const { products } = this.state;
    let total = 0;

    products.map(product => {
      total += product.price;
      return total;
    });

    this.setState({ total });
  };

  onEdit = (data, event) => {
    const { categories } = this.state;
    const categoryId = event.currentTarget.dataset.id;


    this.setState({ categories: updatedCategories });
  };

  onVisibilityChange = (event) => {
    const { categories } = this.state;
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

  calculateTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.map(product => {
      total += product.price;
      return total;
    });

    this.setState({ total });
  };

  onQuantityChange = (newQuantity, productId) => {
    const { products } = this.state;

    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        product.quantity = newQuantity;
        product.price = newQuantity * product.originalPrice;
      }
      return product;
    });

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  onDeleteItem = (event) => {
    const { products } = this.state;
    const productId = event.currentTarget.dataset.id;
    const updatedProducts = products.filter(product => product.id !== productId);

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  onChangeSku = (event) => {
    const skuId = event.currentTarget.value;
    const { productId } = event.currentTarget.dataset;
    const {
      products,
      sku,
    } = this.state;

    // todo: set min and max values for product
    const [selectedSku] = sku.filter(item => item.skuId === skuId);

    const updatedProducts = products.map(product => {
      const price = selectedSku.originalPrice;

      if (product.id === productId) {
        product.originalPrice = price;
        product.price = +product.quantity * +price;
        product.skuId = selectedSku.skuId;
      }
      return product;
    });

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  render() {
    const { children } = this.props;

    return children({
      ...this.state,
      onQuantityChange: this.onQuantityChange,
      calculateTotal: this.calculateTotal,
      onDeleteItem: this.onDeleteItem,
      onChangeSku: this.onChangeSku,
    });
  }
}

const mapStateToProps = (state) => ({
  transactions: state.products.list,
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

export default enhance(CategoriesContainer);
