import { ReadabilityNavOption } from './readability-nav-option';
import fn = jest.fn;

const component = new ReadabilityNavOption();


it('should call emit on triggerSelectOptionHandler', () => {
  component.triggerSelectOption.emit = fn();

  component.triggerSelectOptionHandler();

  expect(component.triggerSelectOption.emit).toHaveBeenCalled();
});
