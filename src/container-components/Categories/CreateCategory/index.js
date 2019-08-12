import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import CategoriesService from '../../../services/api/categories';

class CreateCategoriesContainer extends Component {
  state = {
    icon: {},
    color: {},
    name: '',
    type: {},
  };

  componentDidMount() {
    const {
      icons,
      colors,
      categoryTypes,
    } = this.props;

    this.setState({
      icon: Object.keys(icons)[0],
      color: Object.keys(colors)[0],
      type: Object.keys(categoryTypes)[0],
    });
  }

  onIconChange = (data, event) => {
    const iconId = event.currentTarget.value;
    const { icons } = this.props;
    const icon = icons.filter(item => (item.id === iconId));

    this.setState({ icon });
  };

  onColorChange = (event) => {
    const colorId = event.currentTarget.value;
    const { colors } = this.props;
    const color = colors.filter(item => (item.id === colorId));

    this.setState({ color });
  };

  onNameChange = (event) => {
    const name = event.currentTarget.value;

    this.setState({ name });
  };

  onTypeChange = (event) => {
    const typeId = event.currentTarget.value;
    const { categoryTypes } = this.props;
    const type = categoryTypes.filter(categoryType => (categoryType.id === typeId));

    this.setState({ type });
  };

  addCategory = async () => {
    // todo: check on emptiness before postRequest
    await CategoriesService.postCategory(this.state);
    // todo: update categories list
  };

  render() {
    const { children } = this.props;

    return children({
      ...this.state,
      onIconChange: this.onIconChange,
      onColorChange: this.onColorChange,
      onNameChange: this.onNameChange,
      onTypeChange: this.onTypeChange,
      addCategory: this.addCategory,
    });
  }
}

const mapStateToProps = (state) => ({
  icons: state.config.icons,
  colors: state.config.colors,
  categoryTypes: state.config.categoryTypes,
});

CreateCategoriesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  colors: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  categoryTypes: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(CreateCategoriesContainer);
