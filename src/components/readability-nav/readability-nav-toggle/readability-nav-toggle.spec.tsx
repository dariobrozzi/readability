import {ReadabilityNavToggle} from './readability-nav-toggle';
import fn = jest.fn;

const component = new ReadabilityNavToggle();


it('should call emit on triggerToggleHandler', () => {
  component.triggerToggle.emit = fn();

  component.triggerToggleHandler();

  expect(component.triggerToggle.emit).toHaveBeenCalled();
});
