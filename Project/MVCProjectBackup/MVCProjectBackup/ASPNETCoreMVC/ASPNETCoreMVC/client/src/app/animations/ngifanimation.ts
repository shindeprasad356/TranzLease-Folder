import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const ngifanimation =
  trigger(
    'inOutAnimation',
    [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))

    ]

  )

//left to right animation
//transition(':enter', [
//  style({ transform: 'translateX(100%)', opacity: 0 }),
//  animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
//]),
//  transition(':leave', [
//    style({ transform: 'translateX(0)', opacity: 1 }),
//    animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
//  ])
