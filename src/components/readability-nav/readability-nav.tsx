import {Component, State, Host, Event, h, EventEmitter} from '@stencil/core';
import {NavOption, NavGroup, SwapClass} from '../../models/readability-nav.types';
import {READABILITY_SETTINGS} from './readability-nav.constants';

@Component({
  tag: 'readability-nav',
  styleUrl: 'readability-nav.scss',
  shadow: true,
})
export class ReadabilityNav {
  @Event() optionSelected: EventEmitter<SwapClass>;
  @State() isExpanded: boolean = false;
  @State() settings: any[] = READABILITY_SETTINGS;

  title: string = 'Readability Settings';

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  selectOption(item: NavOption, group: NavGroup) {
    const classSwap: SwapClass = {currentClass: null, newClass: item.className};
    this.settings.map((g: NavGroup) => {
      if (g === group) {
        g.options.map((i: NavOption) => {
          classSwap.currentClass = i.selected ? i.className : null;
          i.selected = (i === item);
        });
      }
    });
    this.optionSelected.emit(classSwap);
    this.isExpanded = false;
  }

  render() {
    return (
      <Host>
        <readability-nav-toggle label={this.title}
                                isExpanded={this.isExpanded}
                                onTriggerToggle={() => this.toggle()}></readability-nav-toggle>
        <ul role='menu' class={this.isExpanded ? 'nav-content nav-content--is-expanded' : 'nav-content'}
            aria-label={this.title}>
          {this.settings.map((group) =>
            <li class='group'>
              <span class='group__title'>{group.label}</span>
              <ul class='group__nav'>
                {group.options.map((item) =>
                  <li>
                    <readability-nav-option label={item.label}
                                            description={item.description}
                                            isSelected={item.selected}
                                            onTriggerSelectOption={() => this.selectOption(item, group)}></readability-nav-option>
                  </li>,
                )}
              </ul>
            </li>,
          )}
        </ul>
      </Host>
    );
  }
}
