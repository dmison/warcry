---
title: 'Attack'
description: ''
sidebar: 'rules'
sources:
  - book: Warcry Core Rules
    page: "44,46,47"
  - book: "ERRATA & DESIGNERS’ COMMENTARIES March 2021"
    page: "1"
---
import BookQuote from '@/components/BookQuote.vue'

# ATTACK ACTION

<book-quote>
<p>
 Some warriors fight with unrestrained ferocity, hacking at their foes until they are little more than bloody chunks of meat. Others dance through battle with preternatural grace, opening throats and piercing hearts with every strike.
</p>
<template slot="cite">Warcry Core Book</template>
</book-quote>

To make an attack action with a fighter:

1. Pick a weapon & target
2. Roll to hit
3. Allocate damage
4. Falling Check

## PICK A WEAPON AND TARGET 

 - select weapon
 - select enemy fighter as the target
 
target must be visible, in range of selected weapon
 
if any enemy fighters are within 1 inch, 
 - one of those must be the target 
 - the weapon selected cannot have a minimum range
 
## CHECK FOR COVER

target gets cover if:
- target is 3 inches higher than the attacker
- an imaginary line drawn between the closest points on each fighter’s base passes through an obstacle. 
- if distance > 1 inch, dont include obstacles within 1/2 inch of attacker

target has cover: +1 toughness
 
## ROLL TO HIT 

- roll one dice per attacks characteristic
- refer to table to tell if attack is miss, hit, or critical hit

| STRENGTH VS TOUGHNESS | HIT | CRITICAL HIT |
| :-------------------- | :-: | :-: |
| Strength is greater than Toughness | 3-5 | 6 |
| Strength is equal to Toughness | 4-5 | 6 |
| Strength is lower than Toughness | 5-6 | 6 |


## ALLOCATE DAMAGE

 - each hit allocates damage equal to first damage number
 - each critical hit allocates damage equal to second number.
 
once allocated damage equals or exceeds wounds, the fighter is taken down & removed from the battlefield.
 
any excess damage is lost

## FALLING TEST

 - if target was not taken out 
 - and any critical hits are scored
 - and the target is within 1/2 inch of platform edge which is not enclosed by an obsatcle, or climbing stairs or ladder
 - and target does not gave the <Runemark mark="Fly" /> runemark
 
the targets player rolls d6: on a one, the target falls over the edge.
