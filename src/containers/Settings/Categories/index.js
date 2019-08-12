import React from 'react';

import useAsyncCategories from '../../../hooks/useAsyncCategories';
import useAsyncStaticData from '../../../hooks/useAsyncStaticData';
import CategoriesContainer from '../../../container-components/Categories';
import CategoryList from '../../../components/CategoryList';
import CreateCategory from '../../../modals/CreateCategory';

import './style.css';

const Categories = () => {
  const isTransactionsLoading = useAsyncCategories();
  const isStaticDataLoading = useAsyncStaticData();

  if (!isTransactionsLoading || !isStaticDataLoading) return null;

  return (
    <CategoriesContainer>
      {containerProps => (
        <div className="settings-categories">
          <CreateCategory
            onColorChange={onColorChange}
            onIconChange={onIconChange}
            onNameChange={onNameChange}
            onTypeChange={onNameChange}
          />
          <CategoryList
            className="income-list"
            listTitle="Income Categories"
            categories={containerProps.incomeCategories}
            onCheckboxChange={containerProps.onCheckboxChange}
            onEdit={containerProps.onEdit}
            onVisibilityChange={containerProps.onVisibilityChange}
            onDelete={containerProps.onDelete}
          />
          <CategoryList
            className="expense-list"
            listTitle="Expense Categories"
            categories={containerProps.expenseCategories}
            onCheckboxChange={containerProps.onCheckboxChange}
            onEdit={containerProps.onEdit}
            onVisibilityChange={containerProps.onVisibilityChange}
            onDelete={containerProps.onDelete}
          />
        </div>
      )}
    </CategoriesContainer>
  );
};

export default Categories;
