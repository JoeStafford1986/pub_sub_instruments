const SelectView = require('./views/select_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const DetailsView = require('./views/details_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const detailsHeader = document.querySelector('#family-name')
  const detailsElement = document.querySelector('#details-view')
  const detailsView = new DetailsView(detailsHeader, detailsElement);
  detailsView.bindEvents();
});
