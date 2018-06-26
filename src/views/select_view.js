const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    console.log(`selectView successfully receives instrumentFamilies payload ${event.detail}`);
  });
};

module.exports = SelectView;
