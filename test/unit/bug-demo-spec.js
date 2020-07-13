import * as F2 from '../../src/index';

const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

const chart = new F2.Chart({
  el: canvas,
  pixelRatio: window.devicePixelRatio, // 指定分辨率
});

describe('Interaction', () => {
  it('chart.interaction() is defined', () => {
    const data = {
      success: true,
      result: {
        benchmarkType: 'H11025.CSI',
        benchmarkName: '中证货币基金指数',
        portfolioIndexData: [
          {
            rate: 0,
            tradeType: '',
            reportDateTimestamp: 1586361600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-09'
          },
          {
            rate: 0.0001,
            tradeType: '',
            reportDateTimestamp: 1586448000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-10'
          },
          {
            rate: 0.0003,
            tradeType: '',
            reportDateTimestamp: 1586707200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-13'
          },
          {
            rate: 0.0004,
            tradeType: '',
            reportDateTimestamp: 1586793600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-14'
          },
          {
            rate: 0.0007,
            tradeType: '',
            reportDateTimestamp: 1586880000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-15'
          },
          {
            rate: 0.0009,
            tradeType: '',
            reportDateTimestamp: 1586966400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-16'
          },
          {
            rate: 0.001,
            tradeType: '',
            reportDateTimestamp: 1587052800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-17'
          },
          {
            rate: 0.0011,
            tradeType: '',
            reportDateTimestamp: 1587312000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-20'
          },
          {
            rate: 0.0013,
            tradeType: '',
            reportDateTimestamp: 1587398400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-21'
          },
          {
            rate: 0.0015,
            tradeType: '',
            reportDateTimestamp: 1587484800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-22'
          },
          {
            rate: 0.0018,
            tradeType: '',
            reportDateTimestamp: 1587571200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-23'
          },
          {
            rate: 0.0019,
            tradeType: '',
            reportDateTimestamp: 1587657600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-24'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1587916800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-27'
          },
          {
            rate: 0.0022,
            tradeType: '',
            reportDateTimestamp: 1588003200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-28'
          },
          {
            rate: 0.0023,
            tradeType: '',
            reportDateTimestamp: 1588089600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-29'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1588176000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-04-30'
          },
          {
            rate: 0.0026,
            tradeType: '',
            reportDateTimestamp: 1588694400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-06'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1588780800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-07'
          },
          {
            rate: 0.0022,
            tradeType: '',
            reportDateTimestamp: 1588867200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-08'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1589126400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-11'
          },
          {
            rate: 0.002,
            tradeType: '',
            reportDateTimestamp: 1589212800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-12'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1589299200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-13'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1589385600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-14'
          },
          {
            rate: 0.0023,
            tradeType: '',
            reportDateTimestamp: 1589472000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-15'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1589731200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-18'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1589817600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-19'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1589904000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-20'
          },
          {
            rate: 0.0025,
            tradeType: '',
            reportDateTimestamp: 1589990400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-21'
          },
          {
            rate: 0.0028,
            tradeType: '',
            reportDateTimestamp: 1590076800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-22'
          },
          {
            rate: 0.0029,
            tradeType: '',
            reportDateTimestamp: 1590336000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-25'
          },
          {
            rate: 0.0026,
            tradeType: '',
            reportDateTimestamp: 1590422400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-26'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1590508800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-27'
          },
          {
            rate: 0.0023,
            tradeType: '',
            reportDateTimestamp: 1590595200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-28'
          },
          {
            rate: 0.0023,
            tradeType: '',
            reportDateTimestamp: 1590681600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-05-29'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1590940800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-01'
          },
          {
            rate: 0.0018,
            tradeType: '',
            reportDateTimestamp: 1591027200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-02'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1591113600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-03'
          },
          {
            rate: 0.0005,
            tradeType: '',
            reportDateTimestamp: 1591200000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-04'
          },
          {
            rate: -0.0004,
            tradeType: '',
            reportDateTimestamp: 1591286400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-05'
          },
          {
            rate: -0.0006,
            tradeType: '',
            reportDateTimestamp: 1591545600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-08'
          },
          {
            rate: -0.0003,
            tradeType: '',
            reportDateTimestamp: 1591632000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-09'
          },
          {
            rate: -0.0002,
            tradeType: '',
            reportDateTimestamp: 1591718400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-10'
          },
          {
            rate: 0,
            tradeType: '',
            reportDateTimestamp: 1591804800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-11'
          },
          {
            rate: 0.0004,
            tradeType: '',
            reportDateTimestamp: 1591891200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-12'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1592150400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-15'
          },
          {
            rate: 0.0007,
            tradeType: '',
            reportDateTimestamp: 1592236800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-16'
          },
          {
            rate: 0.0006,
            tradeType: '',
            reportDateTimestamp: 1592323200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-17'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1592409600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-18'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1592496000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-19'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1592755200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-22'
          },
          {
            rate: 0.0003,
            tradeType: '',
            reportDateTimestamp: 1592841600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-23'
          },
          {
            rate: 0.0004,
            tradeType: '',
            reportDateTimestamp: 1592928000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-24'
          },
          {
            rate: 0.0009,
            tradeType: '',
            reportDateTimestamp: 1593360000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-29'
          },
          {
            rate: 0.0009,
            tradeType: '',
            reportDateTimestamp: 1593446400000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-06-30'
          },
          {
            rate: 0.0012,
            tradeType: '',
            reportDateTimestamp: 1593532800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-01'
          },
          {
            rate: 0.0014,
            tradeType: '',
            reportDateTimestamp: 1593619200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-02'
          },
          {
            rate: 0.0016,
            tradeType: '',
            reportDateTimestamp: 1593705600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-03'
          },
          {
            rate: 0.0014,
            tradeType: '',
            reportDateTimestamp: 1593964800000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-06'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1594051200000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-07'
          },
          {
            rate: 0.0006,
            tradeType: '',
            reportDateTimestamp: 1594137600000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-08'
          },
          {
            rate: -0.0002,
            tradeType: '',
            reportDateTimestamp: 1594224000000,
            codeType: 'PRODUCT_ID',
            reportDate: '2020-07-09'
          }
        ],
        benchmarkIndexData: [
          {
            rate: 0,
            tradeType: '',
            reportDateTimestamp: 1586361600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-09'
          },
          {
            rate: 0.0001,
            tradeType: '',
            reportDateTimestamp: 1586448000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-10'
          },
          {
            rate: 0.0002,
            tradeType: '',
            reportDateTimestamp: 1586707200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-13'
          },
          {
            rate: 0.0003,
            tradeType: '',
            reportDateTimestamp: 1586793600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-14'
          },
          {
            rate: 0.0003,
            tradeType: '',
            reportDateTimestamp: 1586880000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-15'
          },
          {
            rate: 0.0004,
            tradeType: '',
            reportDateTimestamp: 1586966400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-16'
          },
          {
            rate: 0.0004,
            tradeType: '',
            reportDateTimestamp: 1587052800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-17'
          },
          {
            rate: 0.0006,
            tradeType: '',
            reportDateTimestamp: 1587312000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-20'
          },
          {
            rate: 0.0007,
            tradeType: '',
            reportDateTimestamp: 1587398400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-21'
          },
          {
            rate: 0.0007,
            tradeType: '',
            reportDateTimestamp: 1587484800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-22'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1587571200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-23'
          },
          {
            rate: 0.0008,
            tradeType: '',
            reportDateTimestamp: 1587657600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-24'
          },
          {
            rate: 0.001,
            tradeType: '',
            reportDateTimestamp: 1587916800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-27'
          },
          {
            rate: 0.001,
            tradeType: '',
            reportDateTimestamp: 1588003200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-28'
          },
          {
            rate: 0.0011,
            tradeType: '',
            reportDateTimestamp: 1588089600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-29'
          },
          {
            rate: 0.0011,
            tradeType: '',
            reportDateTimestamp: 1588176000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-04-30'
          },
          {
            rate: 0.0014,
            tradeType: '',
            reportDateTimestamp: 1588694400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-06'
          },
          {
            rate: 0.0014,
            tradeType: '',
            reportDateTimestamp: 1588780800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-07'
          },
          {
            rate: 0.0015,
            tradeType: '',
            reportDateTimestamp: 1588867200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-08'
          },
          {
            rate: 0.0016,
            tradeType: '',
            reportDateTimestamp: 1589126400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-11'
          },
          {
            rate: 0.0017,
            tradeType: '',
            reportDateTimestamp: 1589212800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-12'
          },
          {
            rate: 0.0017,
            tradeType: '',
            reportDateTimestamp: 1589299200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-13'
          },
          {
            rate: 0.0018,
            tradeType: '',
            reportDateTimestamp: 1589385600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-14'
          },
          {
            rate: 0.0018,
            tradeType: '',
            reportDateTimestamp: 1589472000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-15'
          },
          {
            rate: 0.002,
            tradeType: '',
            reportDateTimestamp: 1589731200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-18'
          },
          {
            rate: 0.002,
            tradeType: '',
            reportDateTimestamp: 1589817600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-19'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1589904000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-20'
          },
          {
            rate: 0.0021,
            tradeType: '',
            reportDateTimestamp: 1589990400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-21'
          },
          {
            rate: 0.0022,
            tradeType: '',
            reportDateTimestamp: 1590076800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-22'
          },
          {
            rate: 0.0023,
            tradeType: '',
            reportDateTimestamp: 1590336000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-25'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1590422400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-26'
          },
          {
            rate: 0.0024,
            tradeType: '',
            reportDateTimestamp: 1590508800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-27'
          },
          {
            rate: 0.0025,
            tradeType: '',
            reportDateTimestamp: 1590595200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-28'
          },
          {
            rate: 0.0025,
            tradeType: '',
            reportDateTimestamp: 1590681600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-05-29'
          },
          {
            rate: 0.0026,
            tradeType: '',
            reportDateTimestamp: 1590940800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-01'
          },
          {
            rate: 0.0027,
            tradeType: '',
            reportDateTimestamp: 1591027200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-02'
          },
          {
            rate: 0.0027,
            tradeType: '',
            reportDateTimestamp: 1591113600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-03'
          },
          {
            rate: 0.0028,
            tradeType: '',
            reportDateTimestamp: 1591200000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-04'
          },
          {
            rate: 0.0028,
            tradeType: '',
            reportDateTimestamp: 1591286400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-05'
          },
          {
            rate: 0.0029,
            tradeType: '',
            reportDateTimestamp: 1591545600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-08'
          },
          {
            rate: 0.003,
            tradeType: '',
            reportDateTimestamp: 1591632000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-09'
          },
          {
            rate: 0.003,
            tradeType: '',
            reportDateTimestamp: 1591718400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-10'
          },
          {
            rate: 0.0031,
            tradeType: '',
            reportDateTimestamp: 1591804800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-11'
          },
          {
            rate: 0.0031,
            tradeType: '',
            reportDateTimestamp: 1591891200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-12'
          },
          {
            rate: 0.0033,
            tradeType: '',
            reportDateTimestamp: 1592150400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-15'
          },
          {
            rate: 0.0033,
            tradeType: '',
            reportDateTimestamp: 1592236800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-16'
          },
          {
            rate: 0.0033,
            tradeType: '',
            reportDateTimestamp: 1592323200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-17'
          },
          {
            rate: 0.0034,
            tradeType: '',
            reportDateTimestamp: 1592409600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-18'
          },
          {
            rate: 0.0034,
            tradeType: '',
            reportDateTimestamp: 1592496000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-19'
          },
          {
            rate: 0.0036,
            tradeType: '',
            reportDateTimestamp: 1592755200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-22'
          },
          {
            rate: 0.0036,
            tradeType: '',
            reportDateTimestamp: 1592841600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-23'
          },
          {
            rate: 0.0037,
            tradeType: '',
            reportDateTimestamp: 1592928000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-24'
          },
          {
            rate: 0.0039,
            tradeType: '',
            reportDateTimestamp: 1593360000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-29'
          },
          {
            rate: 0.004,
            tradeType: '',
            reportDateTimestamp: 1593446400000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-06-30'
          },
          {
            rate: 0.004,
            tradeType: '',
            reportDateTimestamp: 1593532800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-01'
          },
          {
            rate: 0.0041,
            tradeType: '',
            reportDateTimestamp: 1593619200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-02'
          },
          {
            rate: 0.0041,
            tradeType: '',
            reportDateTimestamp: 1593705600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-03'
          },
          {
            rate: 0.0043,
            tradeType: '',
            reportDateTimestamp: 1593964800000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-06'
          },
          {
            rate: 0.0043,
            tradeType: '',
            reportDateTimestamp: 1594051200000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-07'
          },
          {
            rate: 0.0044,
            tradeType: '',
            reportDateTimestamp: 1594137600000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-08'
          },
          {
            rate: 0.0044,
            tradeType: '',
            reportDateTimestamp: 1594224000000,
            codeType: 'INDEX_CODE',
            reportDate: '2020-07-09'
          }
        ],
        maxDrawdown: null
      }
    };

    let list = [];
    list = list.concat(data.result.portfolioIndexData);
    list = list.concat(data.result.benchmarkIndexData);


    chart.source(list);
    chart.scale('reportDateTimestamp', {
      type: 'timeCat',
      tickCount: 3
    });
    chart.scale('rate', {
      formatter: rate => `${Number(rate * 100).toFixed(1)}%`,
      tickCount: 5
      // nice: false
    });
    chart.line().position('reportDateTimestamp*rate').color('codeType');

    chart.render();


  });
});
