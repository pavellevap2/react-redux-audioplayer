const filterTrecks = (trecks, inputTreck) =>
  trecks.filter(cityName => new RegExp(inputTreck).test(cityName.info))

export default filterTrecks
