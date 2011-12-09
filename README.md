## Ender interface to HTML5 Drag and Droppables

Works like this

``` js
$('div.draggables').dagron({
    // all options are 'optional', no pun intended
    handle: 'div.handle'
  , target: 'div.droptarget'
  , start: function (el) {
      // el is the item you started dragging
    }
  , drag: function (el) {
      // el is dragged element
    }
  , drop: function (el) {
      // el is the target the dragged item was dropped on
    }
  , enter: function (el) {
      // el is the element target you entered into
    }
  , leave: function (el) {
      // el is the item left from
    }
})
```

### Dependencies
Minimal dependency of [http://ender.no.de](Enders) [http://ender-js.s3.amazonaws.com/jeesh.min.js](Jeesh)