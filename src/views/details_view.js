const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function(detailsElement) {
  this.detailsElement = detailsElement;
}

DetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:individual-family-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

DetailsView.prototype.render = function (instrumentFamily) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${instrumentFamily.name}: ${instrumentFamily.description}`;
  this.detailsElement.innerHTML = '';
  this.detailsElement.appendChild(infoParagraph);
};

module.exports = DetailsView;
