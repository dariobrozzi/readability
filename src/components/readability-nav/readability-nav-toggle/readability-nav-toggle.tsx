import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'readability-nav-toggle',
  styleUrl: 'readability-nav-toggle.scss',
  shadow: true,
})
export class ReadabilityNavToggle {
  @Prop() label: string;
  @Prop() isExpanded: boolean;
  @Event() triggerToggle: EventEmitter;

  triggerToggleHandler() {
    this.triggerToggle.emit();
  }

  render() {
    return (
      <span role='menuitem'
            class='readability-toggle'
            aria-haspopup='true'
            aria-expanded={this.isExpanded ? 'true' : 'false'}
            tabindex='0'
            onKeyDown={(event: KeyboardEvent) => event.key === 'Enter' ? this.triggerToggleHandler() : null}
            onClick={() => this.triggerToggleHandler()}>
        {this.label}
      </span>
    );
  }
}
