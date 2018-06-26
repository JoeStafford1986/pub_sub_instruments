const SelectView = require('./views/select_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
