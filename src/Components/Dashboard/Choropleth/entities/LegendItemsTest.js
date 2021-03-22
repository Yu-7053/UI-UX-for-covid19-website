import LegendItemTest from "./LegendItemTest";

var legendItemsTest = [
  new LegendItemTest(
    "1,000,000 +",
    "#005A1C",
    // "#8b0000",
    (recovered) => recovered >= 100_000,
    "white"
  ),

  new LegendItemTest(
    "500,000 - 999,999",
    // "#741f1f",
    "#00B272",
    (recovered) => recovered >= 50_000 && recovered < 100_000,
    "White"
  ),

  new LegendItemTest(
    "200,000 - 499,999",
    "#39C5A3",
    (recovered) => recovered >= 20_000 && recovered < 50_000
  ),

  new LegendItemTest(
    "50,000 - 199,999",
    "#87DAC7",
    (recovered) => recovered >= 5_000 && recovered < 20_000
  ),

  new LegendItemTest(
    "0 - 49,999",
    "#C4EEE4",
    (recovered) => recovered > 0 && recovered < 5_000
  ),

  new LegendItemTest("No Data", "#ffffff", (recovered) => true),
];

export default legendItemsTest;

/**
 * 7 > 1 million                        #8b0000
 * 6 >= 500 thousand < 1 million        #9e2a2a
 * 5 >= 200 thousand < 500 thousand     #b15555
 * 4 >= 100 thousand  < 200 Thousand    #c57f7f
 * 3 > 50 thousand < 100 thousand       #d8aaaa
 * 2 >= 0 < 50 thousand                 #ebd4d4
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
