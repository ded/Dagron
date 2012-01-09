/*!
  * Ender drag and drop
  * license MIT, (c) Dustin Diaz
  * https://github.com/ded/dagron
  */
!function ($) {
  $.ender({
    dagron: function (options) {
      if (options.target) {
        $(options.target)
          .bind('drop', function (e) {
            e.stop()
            options.drop && options.drop.call(this, this)
          })
          .bind('dragenter', function (e) {
            options.enter && options.enter.call(this, this)
            e.stop()
          })      
          .bind('dragover', function (e) {
            e.stop() // allows dropping
            e.dataTransfer.dropEffect = 'link'
          })
          .bind('dragleave', function (e) {
            e.stopPropagation()
            options.leave && options.leave.call(this, this)
          })

      }
      $(this)
        .bind('dragstart', function (e) {
          e.stopPropagation()
          e.dataTransfer.effectAllowed = 'link'
          e.dataTransfer.setData('Text', this.id)
          options.start && options.start.call(this, this)
        })
      options.drag && $(this).bind('drag', function (e) {
        options.drag.call(this, this)
      })

      $(this).bind('dragend', function (e) {
        e.stopPropagation()
        this.draggable = false
        options.end && options.end.call(this, this)
      })
      this.forEach(function (el) {
        var $handle = options.handle ? $(el).find(options.handle) : $(el)
        $handle.bind('mousedown', function (e) {
          e.stopPropagation()
          el.draggable = true
        })
      })
    }
  }, 1)
}(ender)