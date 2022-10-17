import {
  trigger,
  state,
  style,
  transition,
  animate,
  query
} from '@angular/animations';

export const navBarAnimation = [
  trigger('navBarAnimation', [
    state('hidden', style({
      top: '0px',
    })),
    state('visible', style({
      top: '-100px',
    })),
    transition('hidden => visible', animate('300ms')),
    transition('visible => hidden', animate('300ms')),
  ])
];
