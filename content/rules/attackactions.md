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
import Runemark from '@/components/Runemark.vue'

# ATTACK ACTION

<book-quote>
<p>
 Some warriors fight with unrestrained ferocity, hacking at their foes until they are little more than bloody chunks of meat. Others dance through battle with preternatural grace, opening throats and piercing hearts with every strike.
</p>
<template slot="cite">Warcry Core Book</template>
</book-quote>

To make an attack action with a fighter:

1. Pick a weapon & target
2. Check for cover
3. Roll to hit
4. Allocate damage
5. Falling Check

## PICK A WEAPON AND TARGET 

1. select weapon
2. select enemy fighter as the target
    1. target must be visible, 
    2. in range of selected weapon
 
if any enemy fighters are within 1 inch, 

1. one of those must be the target 
2. the weapon selected cannot have a minimum range
 
## CHECK FOR COVER

target gets cover if:
- target is 3 inches higher than the attacker
- an imaginary line drawn between the closest points on each fighter’s base passes through an obstacle. 
  - if distance > 1 inch, dont include obstacles within 1/2 inch of attacker

target has cover: +1 toughness
 
## ROLL TO HIT 

- roll one dice per attacks characteristic
- refer to table to tell if attack is miss, hit, or critical hit

| STRENGTH VS TOUGHNESS | MISS | HIT | CRITICAL HIT |
| :-------------------- | :-: | :-: | :-: |
| Strength is greater than Toughness | 1-2 | 3-5 | 6 |
| Strength is equal to Toughness | 1-3 | 4-5 | 6 |
| Strength is lower than Toughness | 1-4 | 5-6 | 6 |


## ALLOCATE DAMAGE

 - each hit allocates damage equal to first damage number
 - each critical hit allocates damage equal to second number.
 
once allocated damage equals or exceeds wounds, the fighter is `taken down` & removed from the battlefield.
 
any excess damage to the target is lost

## FALLING TEST

 1. target was not taken out 
 2. critical hits are scored in this attack action
 3. target is 
      - within 1/2 inch of platform edge which is not enclosed by an obsatcle
      - climbing stairs or ladder
 4. target does not gave the <Runemark mark="Fly" /> runemark
 
the targets player rolls d6: on a one, the target has fallen over the edge or from its climbing position.
