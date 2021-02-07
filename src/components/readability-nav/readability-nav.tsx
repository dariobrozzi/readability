import { Component, State, Host, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'readability-nav',
  styleUrl: 'readability-nav.scss',
  shadow: true,
})
export class ReadabilityNav {
  @Event() optionSelected: EventEmitter<any>;
  @State() isExpanded: boolean = false;
  @State() settings = [
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
          className: 'dark-theme',
        },
      ],
    },
    {
      label: 'Column Width',
      options: [
        {
          label: 'Adaptive',
          description: 'Adaptive width',
          selected: true,
        },
        {
          label: 'Narrow',
          description: 'Narrow width',
          className: 'narrow-width',
        },
      ],
    },
    {
      label: 'Font Type',
      options: [
        {
          label: 'Serif',
          description: 'Serif font type',
          selected: true,
        },
        {
          label: 'Sans-Serif',
          description: 'Sans-Serif font type',
          className: 'font-plain',
        },
      ],
    },
    {
      label: 'Font Size',
      options: [
        {
          label: 'Small',
          description: 'Small font size',
          className: 'font-small',
        },
        {
          label: 'Medium',
          description: 'Medium font size',
          selected: true,
        },
        {
          label: 'Large',
          description: 'Large font size',
          className: 'font-large',
        },
      ],
    },
    {
      label: 'Vertical spacing',
      options: [
        {
          label: 'Default',
          description: 'Default spacing',
          selected: true,
        },
        {
          label: 'Double',
          description: 'Double spacing',
          className: 'double-space',
        },
      ],
    },
  ];

  title: string = 'Readability Settings';

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  selectOption(item, group) {
    let classSwap = { current: null, new: item.className };
    this.settings.map((g) => {
      if (g === group) {
        g.options.map((i) => {
          classSwap.current = i.selected ? i.className : null;
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
