const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function(detailsHeader, detailsDescription) {
  this.detailsHeader = detailsHeader;
  this.detailsDescription = detailsDescription;
}

DetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:individual-family-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

DetailsView.prototype.render = function (instrumentFamily) {
  this.detailsHeader.textContent = `${instrumentFamily.name}`
  this.detailsDescription.innerHTML = '';
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrumentFamily.description}`;
  this.detailsDescription.appendChild(infoParagraph);
  this.detailsDescription.appendChild(this.renderInstruments(instrumentFamily));
};

DetailsView.prototype.renderInstruments = function (instrumentFamily) {
  const orderedList = document.createElement('ol');
  console.log(orderedList);
  for (let instrument of instrumentFamily.instruments) {
    const listItem = document.createElement('li');
    let listContent = document.createTextNode(`${instrument}`);
    listItem.appendChild(listContent);
    orderedList.appendChild(listItem);
  }
  return orderedList;
};

module.exports = DetailsView;
