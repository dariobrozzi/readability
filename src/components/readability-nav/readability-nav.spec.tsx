import { ReadabilityNav } from './readability-nav';
import { NavOption, NavGroup, SwapClass } from '../../models/readability-nav.types';
import fn = jest.fn;

const component = new ReadabilityNav();

const mockSettings = [
  {
    label: 'Theme',
    options: [
      {
        label: 'Light',
        description: 'Light Theme',
        selected: true,
      },
      {
        label: 'Dark',
        description: 'Dark Theme',
        className: 'dark-theme'
      },
    ],
  }];

const mockGroup: NavGroup = mockSettings[0];

const mockSelectedOption: NavOption = {
  label: 'Dark',
  description: 'Dark Theme',
  className: 'dark-theme',
};

const mockSwapClass: SwapClass = {
  currentClass: null,
  newClass: 'dark-theme'
};


beforeEach(() => {
  component.settings = mockSettings;
});

it('should toggle navigation', () => {
  component.toggle();

  expect(component.isExpanded).toBeTruthy();
});

it('should update state when item is selected', () => {
  component.optionSelected.emit = fn();

  component.selectOption(mockSelectedOption, mockGroup);

  expect(component.optionSelected.emit).toBeCalledWith(mockSwapClass);
  expect(component.isExpanded).toBeFalsy();
});
