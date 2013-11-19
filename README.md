Shift.js
========

Use the shift key to select a range of elements, such as checkboxes and radio buttons.

<img src="https://travis-ci.org/Wildhoney/Shift.js.png?branch=master" />
&nbsp;
<img src="https://badge.fury.io/js/shift-js.png" />

Mimics Gmail's checkbox filter where you hold down the shift key to select ranges.

**Install with npm:** `npm install shift-js`.

Getting Started
--------

Simply add the `data-shift-group` attribute to each checkbox you wish to be part of the group &ndash; set the attribute to a unique group name for your checkbox collection.

Once you've setup your DOM, you simply need to instantiate Shift.js (`new Shift();`) on the `DOMContentLoaded`/`$(document)` event.