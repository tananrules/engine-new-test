import $ from 'jquery';
import { schedule } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../templates/components/jquery-powertip';

export default Component.extend({
  layout,


  didInsertElement() {
    schedule('afterRender', () => {
      debugger
      $("#tooltip").powerTip({
        placement: 'ne',
      });
      $("#tooltip").data("powertip", "yo tu galla badi karda!");
    });
  }
});
