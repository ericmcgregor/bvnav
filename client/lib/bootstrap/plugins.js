Tether = require('tether')
require('bootstrap')
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // Patch Bootstrap popover to take a React component instead of a
// // plain HTML string
// $.extend($.fn.popover.Constructor.DEFAULTS, {react: false});
// var oldSetContent = $.fn.popover.Constructor.prototype.setContent;
//
// $.fn.popover.Constructor.prototype.setContent = function() {
//   console.log(this)
//     if (!this.config.react) {
//         return oldSetContent.call(this);
//     }
//     // console.log($(this.tip).find('.popover-title'))
//     var $tip = $(this.tip);
//     var title = this.config.title;
//     var content = this.config.content;
//
//     $tip.removeClass('fade top bottom left right in');
//
//     // If we've already rendered, there's no need to render again
//     if (!$tip.find('.popover-content').html()) {
//         // Render title, if any
//         var $title = $tip.find('.popover-title');
//         if (title) {
//             ReactDOM.render(title, $title[0]);
//         } else {
//             $title.hide();
//         }
//
//         ReactDOM.render(content,  $tip.find('.popover-content')[0]);
//     }
// };
