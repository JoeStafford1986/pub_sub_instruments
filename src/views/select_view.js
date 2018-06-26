const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });

  this.selectElement.addEventListener('change', (event) => {
    const familyIndex = event.target.value;
    PubSub.publish('SelectView:select-changed', familyIndex);
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
