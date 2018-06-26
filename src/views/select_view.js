const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    console.log(`selectView successfully receives instrumentFamilies payload ${event.detail}`);
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });
};

SelectView.prototype.populate = function (allInstrumentFamilies) {
  allInstrumentFamilies.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = instrumentFamily.name;
    this.selectElement.appendChild(option);
  })
};

module.exports = SelectView;
