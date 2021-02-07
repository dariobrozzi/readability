import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'readability-nav-option',
  styleUrl: 'readability-nav-option.scss',
  shadow: true,
})
export class ReadabilityNavOption {
  @Prop() isSelected: boolean;
  @Prop() label: string;
  @Prop() description: string;
  @Event() triggerSelectOption: EventEmitter;

  triggerSelectOptionHandler() {
    this.triggerSelectOption.emit();
  }

  render() {
    return (
      <div role="menuitemradio"
           class='readability-option'
           aria-label={this.description}
           aria-selected={this.isSelected ? 'true' : 'false'}
           tabindex='0'
           onKeyDown={(event: KeyboardEvent) => event.key === 'Enter' ? this.triggerSelectOptionHandler() : null}
           onClick={() => this.triggerSelectOptionHandler()}>
        {this.label}
      </div>
    );
  }
}
