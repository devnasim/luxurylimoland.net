var array;

require('./_prepare');

array = mod('array');

test('from', function() {
  array.from([1]).should.be.an.instanceOf(Array);
  return array.from([1])[0].should.equal(1);
});

test('pluck', function() {
  var a, after;
  a = [0, 1, 2, 3];
  after = array.pluck(a, 1);
  after.length.should.equal(3);
  after[0].should.equal(0);
  after[1].should.equal(2);
  after[2].should.equal(3);
  return after.should.equal(a);
});

test('pluckMultiple', function() {
  var a;
  a = [0, 1, 2, 3, 4, 5, 6];
  array.pluckMultiple(a, [0, 4, 2, 6]);
  a.length.should.equal(3);
  a[0].should.equal(1);
  a[1].should.equal(3);
  return a[2].should.equal(5);
});

test('pluckItem', function() {
  var a;
  a = [0, 1, 2, 3, 2, 4, 2];
  array.pluckItem(a, 2);
  a[0].should.equal(0);
  a[1].should.equal(1);
  a[2].should.equal(3);
  a[3].should.equal(4);
  return array.pluckItem([1], 2).length.should.equal(1);
});

test('pluckOneItem', function() {
  var a;
  a = [0, 1, 2, 3, 2, 4, 2];
  array.pluckOneItem(a, 2);
  a[0].should.equal(0);
  a[1].should.equal(1);
  a[2].should.equal(3);
  a[3].should.equal(2);
  a[4].should.equal(4);
  a[5].should.equal(2);
  a = [1, 2];
  array.pluckOneItem(a, 1);
  a.length.should.equal(1);
  a[0].should.equal(2);
  array.pluckOneItem([], 1).length.should.equal(0);
  return array.pluckOneItem([1], 2).length.should.equal(1);
});

test('plcukByCallback', function() {
  var a;
  a = [0, 1, 2, 3];
  array.pluckByCallback(a, function(val, i) {
    if (val === 2) {
      return true;
    }
    return false;
  });
  a[0].should.equal(0);
  a[1].should.equal(1);
  return a[2].should.equal(3);
});

test('injectByCallback', function() {
  var a, shouldInject;
  shouldInject = function(valA, valB, toInject) {
    if (valA == null) {
      if (toInject <= valB) {
        return true;
      }
      return false;
    }
    if (valB == null) {
      if (valA <= toInject) {
        return true;
      }
      return false;
    }
    if ((valA <= toInject && toInject <= valB)) {
      return true;
    }
    return false;
  };
  a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3];
  array.injectByCallback(a, 0, shouldInject);
  a[0].should.equal(0);
  a[1].should.equal(0.5);
  a[7].should.equal(3);
  a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3];
  array.injectByCallback(a, 2.7, shouldInject);
  a[0].should.equal(0.5);
  a[4].should.equal(2.7);
  a[5].should.equal(2.75);
  a[7].should.equal(3);
  a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3];
  array.injectByCallback(a, 3.2, shouldInject);
  a[0].should.equal(0.5);
  a[4].should.equal(2.75);
  a[6].should.equal(3);
  return a[7].should.equal(3.2);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHRlc3RcXGFycmF5LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLEtBQUE7O0FPQUEsT09BQSxDT0FRLFlPQVIsQ0FBQSxDQUFBOztBT0VBLEtPQUEsR09BUSxHT0FBLENPQUksT09BSixDQUZSLENBQUE7O0FPSUEsSU9BQSxDT0FLLE1PQUwsRU9BYSxTT0FBLEdPQUE7QU9FWixFT0FBLEtPQUssQ09BQyxJT0FOLENPQVcsQ09BQyxDT0FELENPQVgsQ09BZSxDT0FDLE1PQU0sQ09BQyxFT0FFLENPQUMsRU9BRSxDT0FDLFVPQTdCLENPQXdDLEtPQXhDLENPQUEsQ09BQTtTT0NBLEtPQUssQ09BQyxJT0FOLENPQVcsQ09BQyxDT0FELENPQVgsQ09BZ0IsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BMUIsQ09BZ0MsQ09BaEMsRU9IWTtBT0FBLENPQWIsQ0FKQSxDQUFBOztBT3NCQSxJT0FBLENPQUssT09BTCxFT0FjLFNPQUEsR09BQTtBT0ViLE1PQUEsUU9BQTtBT0FBLEVPQUEsQ09BQSxHT0FJLENPQUMsQ09BRCxFT0FJLENPQUosRU9BTyxDT0FQLEVPQVUsQ09BVixDT0FKLENPQUE7QU9BQSxFT0VBLEtPQUEsR09BUSxLT0FLLENPQUMsS09BTixDT0FZLENPQVosRU9BZSxDT0FmLENPRlIsQ09BQTtBT0FBLEVPSUEsS09BSyxDT0FDLE1PQU0sQ09BQyxNT0FNLENPQUMsS09BcEIsQ09BMEIsQ09BMUIsQ09KQSxDT0FBO0FPQUEsRU9NQSxLT0FNLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQWhCLENPQXNCLENPQXRCLENPTkEsQ09BQTtBT0FBLEVPT0EsS09BTSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FoQixDT0FzQixDT0F0QixDT1BBLENPQUE7QU9BQSxFT1FBLEtPQU0sQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BaEIsQ09Bc0IsQ09BdEIsQ09SQSxDT0FBO1NPU0EsS09BSyxDT0FDLE1PQU0sQ09BQyxLT0FiLENPQW1CLENPQW5CLEVPWGE7QU9BQSxDT0FkLENBdEJBLENBQUE7O0FPbUNBLElPQUEsQ09BSyxlT0FMLEVPQXNCLFNPQUEsR09BQTtBT0VyQixNT0FBLENPQUE7QU9BQSxFT0FBLENPQUEsR09BSSxDT0FDLENPQUQsRU9BSSxDT0FKLEVPQU8sQ09BUCxFT0FVLENPQVYsRU9BYSxDT0FiLEVPQWdCLENPQWhCLEVPQW1CLENPQW5CLENPQUosQ09BQTtBT0FBLEVPRUEsS09BSyxDT0FDLGFPQU4sQ09Bb0IsQ09BcEIsRU9BdUIsQ09BQyxDT0FELEVPQUksQ09BSixFT0FPLENPQVAsRU9BVSxDT0FWLENPQXZCLENPRkEsQ09BQTtBT0FBLEVPSUEsQ09BQyxDT0FDLE1PQU0sQ09BQyxNT0FNLENPQUMsS09BaEIsQ09Bc0IsQ09BdEIsQ09KQSxDT0FBO0FPQUEsRU9LQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsQ09BbEIsQ09MQSxDT0FBO0FPQUEsRU9NQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsQ09BbEIsQ09OQSxDT0FBO1NPT0EsQ09BRSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FaLENPQWtCLENPQWxCLEVPVHFCO0FPQUEsQ09BdEIsQ0FuQ0EsQ0FBQTs7QU84Q0EsSU9BQSxDT0FLLFdPQUwsRU9Ba0IsU09BQSxHT0FBO0FPRWpCLE1PQUEsQ09BQTtBT0FBLEVPQUEsQ09BQSxHT0FJLENPQUMsQ09BRCxFT0FJLENPQUosRU9BTyxDT0FQLEVPQVUsQ09BVixFT0FhLENPQWIsRU9BZ0IsQ09BaEIsRU9BbUIsQ09BbkIsQ09BSixDT0FBO0FPQUEsRU9FQSxLT0FLLENPQUMsU09BTixDT0FnQixDT0FoQixFT0FtQixDT0FuQixDT0ZBLENPQUE7QU9BQSxFT0lBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT0pBLENPQUE7QU9BQSxFT0tBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT0xBLENPQUE7QU9BQSxFT01BLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT05BLENPQUE7QU9BQSxFT09BLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1BBLENPQUE7U09TQSxLT0FLLENPQUMsU09BTixDT0FnQixDT0FDLENPQUQsQ09BaEIsRU9BcUIsQ09BckIsQ09BdUIsQ09BQyxNT0FNLENPQUMsTU9BTSxDT0FDLEtPQXRDLENPQTRDLENPQTVDLEVPWGlCO0FPQUEsQ09BbEIsQ0E5Q0EsQ0FBQTs7QU80REEsSU9BQSxDT0FLLGNPQUwsRU9BcUIsU09BQSxHT0FBO0FPRXBCLE1PQUEsQ09BQTtBT0FBLEVPQUEsQ09BQSxHT0FJLENPQUMsQ09BRCxFT0FJLENPQUosRU9BTyxDT0FQLEVPQVUsQ09BVixFT0FhLENPQWIsRU9BZ0IsQ09BaEIsRU9BbUIsQ09BbkIsQ09BSixDT0FBO0FPQUEsRU9FQSxLT0FLLENPQUMsWU9BTixDT0FtQixDT0FuQixFT0FzQixDT0F0QixDT0ZBLENPQUE7QU9BQSxFT0lBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT0pBLENPQUE7QU9BQSxFT0tBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT0xBLENPQUE7QU9BQSxFT01BLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT05BLENPQUE7QU9BQSxFT09BLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1BBLENPQUE7QU9BQSxFT1FBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1JBLENPQUE7QU9BQSxFT1NBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1RBLENPQUE7QU9BQSxFT1dBLENPQUEsR09BSSxDT0FDLENPQUQsRU9BSSxDT0FKLENPWEosQ09BQTtBT0FBLEVPYUEsS09BSyxDT0FDLFlPQU4sQ09BbUIsQ09BbkIsRU9Bc0IsQ09BdEIsQ09iQSxDT0FBO0FPQUEsRU9lQSxDT0FDLENPQUMsTU9BTSxDT0FDLE1PQU0sQ09BQyxLT0FoQixDT0FzQixDT0F0QixDT2ZBLENPQUE7QU9BQSxFT2dCQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsQ09BbEIsQ09oQkEsQ09BQTtBT0FBLEVPa0JBLEtPQUssQ09BQyxZT0FOLENPQW1CLEVPQW5CLEVPQXVCLENPQXZCLENPQXlCLENPQUMsTU9BTSxDT0FDLE1PQU0sQ09BQyxLT0F4QyxDT0E4QyxDT0E5QyxDT2xCQSxDT0FBO1NPb0JBLEtPQUssQ09BQyxZT0FOLENPQW1CLENPQUMsQ09BRCxDT0FuQixFT0F3QixDT0F4QixDT0EwQixDT0FDLE1PQU0sQ09BQyxNT0FNLENPQUMsS09BekMsQ09BK0MsQ09BL0MsRU90Qm9CO0FPQUEsQ09BckIsQ0E1REEsQ0FBQTs7QU9vRkEsSU9BQSxDT0FLLGlCT0FMLEVPQXdCLFNPQUEsR09BQTtBT0V2QixNT0FBLENPQUE7QU9BQSxFT0FBLENPQUEsR09BSSxDT0FDLENPQUQsRU9BSSxDT0FKLEVPQU8sQ09BUCxFT0FVLENPQVYsQ09BSixDT0FBO0FPQUEsRU9FQSxLT0FLLENPQUMsZU9BTixDT0FzQixDT0F0QixFT0F5QixTT0FDLEdPQUQsRU9BTSxDT0FOLEdPQUE7QU9FeEIsSU9BQSxJT0FjLEdPQUEsS09BTyxDT0FyQjtBT0FBLGFPQU8sSU9BUCxDT0FBO0tPQUE7QU9FQSxXT0FPLEtPQVAsQ09Kd0I7RU9BQSxDT0F6QixDT0ZBLENPQUE7QU9BQSxFT1FBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1JBLENPQUE7QU9BQSxFT1NBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT1RBLENPQUE7U09VQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsQ09BbEIsRU9adUI7QU9BQSxDT0F4QixDQXBGQSxDQUFBOztBT2tHQSxJT0FBLENPQUssa0JPQUwsRU9BeUIsU09BQSxHT0FBO0FPRXhCLE1PQUEsZU9BQTtBT0FBLEVPQUEsWU9BQSxHT0FlLFNPQUMsSU9BRCxFT0FPLElPQVAsRU9BYSxRT0FiLEdPQUE7QU9FZCxJT0FBLElPQU8sWU9BUDtBT0VDLE1PQUEsSU9BYyxRT0FBLElPQVksSU9BMUI7QU9BQSxlT0FPLElPQVAsQ09BQTtPT0FBO0FPRUEsYU9BTyxLT0FQLENPSkQ7S09BQTtBT01BLElPQUEsSU9BTyxZT0FQO0FPRUMsTU9BQSxJT0FjLElPQUEsSU9BUSxRT0F0QjtBT0FBLGVPQU8sSU9BUCxDT0FBO09PQUE7QU9FQSxhT0FPLEtPQVAsQ09KRDtLT05BO0FPWUEsSU9BQSxJT0FjLENPQUEsSU9BQSxJT0FRLFFPQVIsSU9BUSxRT0FSLElPQW9CLElPQXBCLENPQWQ7QU9BQSxhT0FPLElPQVAsQ09BQTtLT1pBO0FPY0EsV09BTyxLT0FQLENPaEJjO0VPQUEsQ09BZixDT0FBO0FPQUEsRU9rQkEsQ09BQSxHT0FJLENPQUMsR09BRCxFT0FNLENPQU4sRU9BUyxHT0FULEVPQWMsR09BZCxFT0FtQixJT0FuQixFT0F5QixJT0F6QixFT0ErQixDT0EvQixDT2xCSixDT0FBO0FPQUEsRU9vQkEsS09BSyxDT0FDLGdCT0FOLENPQXVCLENPQXZCLEVPQTBCLENPQTFCLEVPQTZCLFlPQTdCLENPcEJBLENPQUE7QU9BQSxFT3NCQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsQ09BbEIsQ090QkEsQ09BQTtBT0FBLEVPdUJBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixHT0FsQixDT3ZCQSxDT0FBO0FPQUEsRU93QkEsQ09BRSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FaLENPQWtCLENPQWxCLENPeEJBLENPQUE7QU9BQSxFTzBCQSxDT0FBLEdPQUksQ09BQyxHT0FELEVPQU0sQ09BTixFT0FTLEdPQVQsRU9BYyxHT0FkLEVPQW1CLElPQW5CLEVPQXlCLElPQXpCLEVPQStCLENPQS9CLENPMUJKLENPQUE7QU9BQSxFTzRCQSxLT0FLLENPQUMsZ0JPQU4sQ09BdUIsQ09BdkIsRU9BMEIsR09BMUIsRU9BK0IsWU9BL0IsQ081QkEsQ09BQTtBT0FBLEVPOEJBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixHT0FsQixDTzlCQSxDT0FBO0FPQUEsRU8rQkEsQ09BRSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FaLENPQWtCLEdPQWxCLENPL0JBLENPQUE7QU9BQSxFT2dDQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsSU9BbEIsQ09oQ0EsQ09BQTtBT0FBLEVPaUNBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixDT0FsQixDT2pDQSxDT0FBO0FPQUEsRU9tQ0EsQ09BQSxHT0FJLENPQUMsR09BRCxFT0FNLENPQU4sRU9BUyxHT0FULEVPQWMsR09BZCxFT0FtQixJT0FuQixFT0F5QixJT0F6QixFT0ErQixDT0EvQixDT25DSixDT0FBO0FPQUEsRU9xQ0EsS09BSyxDT0FDLGdCT0FOLENPQXVCLENPQXZCLEVPQTBCLEdPQTFCLEVPQStCLFlPQS9CLENPckNBLENPQUE7QU9BQSxFT3VDQSxDT0FFLENPQUEsQ09BQSxDT0FFLENPQUMsTU9BTSxDT0FDLEtPQVosQ09Ba0IsR09BbEIsQ092Q0EsQ09BQTtBT0FBLEVPd0NBLENPQUUsQ09BQSxDT0FBLENPQUUsQ09BQyxNT0FNLENPQUMsS09BWixDT0FrQixJT0FsQixDT3hDQSxDT0FBO0FPQUEsRU95Q0EsQ09BRSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FaLENPQWtCLENPQWxCLENPekNBLENPQUE7U08wQ0EsQ09BRSxDT0FBLENPQUEsQ09BRSxDT0FDLE1PQU0sQ09BQyxLT0FaLENPQWtCLEdPQWxCLEVPNUN3QjtBT0FBLENPQXpCLENBbEdBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGFycmF5ID1cblxuXHQjIyNcblx0VHJpZXMgdG8gdHVybiBhbnl0aGluZyBpbnRvIGFuIGFycmF5LlxuXHQjIyNcblx0ZnJvbTogKHIpIC0+XG5cblx0XHRBcnJheTo6c2xpY2UuY2FsbCByXG5cblx0IyMjXG5cdENsb25lIG9mIGFuIGFycmF5LiBQcm9wZXJ0aWVzIHdpbGwgYmUgc2hhbGxvdyBjb3BpZXMuXG5cdCMjI1xuXHRzaW1wbGVDbG9uZTogKGEpIC0+XG5cblx0XHRhLnNsaWNlIDBcblxuXHRzaGFsbG93RXF1YWw6IChhMSwgYTIpIC0+XG5cblx0XHRyZXR1cm4gbm8gdW5sZXNzIEFycmF5LmlzQXJyYXkoYTEpIGFuZCBBcnJheS5pc0FycmF5KGEyKSBhbmQgYTEubGVuZ3RoIGlzIGEyLmxlbmd0aFxuXG5cdFx0Zm9yIHZhbCwgaSBpbiBhMVxuXG5cdFx0XHRyZXR1cm4gbm8gdW5sZXNzIGEyW2ldIGlzIHZhbFxuXG5cdFx0eWVzXG5cblx0cGx1Y2s6IChhLCBpKSAtPlxuXG5cdFx0cmV0dXJuIGEgaWYgYS5sZW5ndGggPCAxXG5cblxuXHRcdGZvciB2YWx1ZSwgaW5kZXggaW4gYVxuXG5cdFx0XHRpZiBpbmRleCA+IGlcblxuXHRcdFx0XHRhW2luZGV4IC0gMV0gPSBhW2luZGV4XVxuXG5cdFx0YS5sZW5ndGggPSBhLmxlbmd0aCAtIDFcblxuXHRcdGFcblxuXHRwbHVja0l0ZW06IChhLCBpdGVtKSAtPlxuXG5cdFx0cmV0dXJuIGEgaWYgYS5sZW5ndGggPCAxXG5cblxuXHRcdHJlbW92ZWQgPSAwXG5cblx0XHRmb3IgdmFsdWUsIGluZGV4IGluIGFcblxuXHRcdFx0aWYgdmFsdWUgaXMgaXRlbVxuXG5cdFx0XHRcdHJlbW92ZWQrK1xuXG5cdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdGlmIHJlbW92ZWQgaXNudCAwXG5cblx0XHRcdFx0YVtpbmRleCAtIHJlbW92ZWRdID0gYVtpbmRleF1cblxuXHRcdGEubGVuZ3RoID0gYS5sZW5ndGggLSByZW1vdmVkIGlmIHJlbW92ZWQgPiAwXG5cblx0XHRhXG5cblx0cGx1Y2tPbmVJdGVtOiAoYSwgaXRlbSkgLT5cblxuXHRcdHJldHVybiBhIGlmIGEubGVuZ3RoIDwgMVxuXG5cdFx0cmVhY2hlZCA9IG5vXG5cblx0XHRmb3IgdmFsdWUsIGluZGV4IGluIGFcblxuXHRcdFx0aWYgbm90IHJlYWNoZWRcblxuXHRcdFx0XHRpZiB2YWx1ZSBpcyBpdGVtXG5cblx0XHRcdFx0XHRyZWFjaGVkID0geWVzXG5cblx0XHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRlbHNlXG5cblx0XHRcdFx0YVtpbmRleCAtIDFdID0gYVtpbmRleF1cblxuXHRcdGEubGVuZ3RoID0gYS5sZW5ndGggLSAxIGlmIHJlYWNoZWRcblxuXHRcdGFcblxuXHRwbHVja0J5Q2FsbGJhY2s6IChhLCBjYikgLT5cblxuXHRcdHJldHVybiBhIGlmIGEubGVuZ3RoIDwgMVxuXG5cdFx0cmVtb3ZlZCA9IDBcblxuXHRcdGZvciB2YWx1ZSwgaW5kZXggaW4gYVxuXG5cdFx0XHRpZiBjYiB2YWx1ZSwgaW5kZXhcblxuXHRcdFx0XHRyZW1vdmVkKytcblxuXHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRpZiByZW1vdmVkIGlzbnQgMFxuXG5cdFx0XHRcdGFbaW5kZXggLSByZW1vdmVkXSA9IGFbaW5kZXhdXG5cblx0XHRpZiByZW1vdmVkID4gMFxuXG5cdFx0XHRhLmxlbmd0aCA9IGEubGVuZ3RoIC0gcmVtb3ZlZFxuXG5cdFx0YVxuXG5cdHBsdWNrTXVsdGlwbGU6IChhcnJheSwgaW5kZXhlc1RvUmVtb3ZlKSAtPlxuXG5cdFx0cmV0dXJuIGFycmF5IGlmIGFycmF5Lmxlbmd0aCA8IDFcblxuXHRcdHJlbW92ZWRTb0ZhciA9IDBcblxuXHRcdGluZGV4ZXNUb1JlbW92ZS5zb3J0KClcblxuXHRcdGZvciBpIGluIGluZGV4ZXNUb1JlbW92ZVxuXG5cdFx0XHRAcGx1Y2sgYXJyYXksIGkgLSByZW1vdmVkU29GYXJcblxuXHRcdFx0cmVtb3ZlZFNvRmFyKytcblxuXHRcdGFycmF5XG5cblx0aW5qZWN0QnlDYWxsYmFjazogKGEsIHRvSW5qZWN0LCBzaG91bGRJbmplY3QpIC0+XG5cblx0XHR2YWxBID0gbnVsbFxuXG5cdFx0dmFsQiA9IG51bGxcblxuXHRcdGxlbiA9IGEubGVuZ3RoXG5cblx0XHRpZiBsZW4gPCAxXG5cblx0XHRcdGEucHVzaCB0b0luamVjdFxuXG5cdFx0XHRyZXR1cm4gYVxuXG5cblx0XHRmb3IgdmFsLCBpIGluIGFcblxuXHRcdFx0dmFsQSA9IHZhbEJcblxuXHRcdFx0dmFsQiA9IHZhbFxuXG5cdFx0XHRpZiBzaG91bGRJbmplY3QgdmFsQSwgdmFsQiwgdG9JbmplY3RcblxuXHRcdFx0XHRyZXR1cm4gYS5zcGxpY2UgaSwgMCwgdG9JbmplY3RcblxuXHRcdGEucHVzaCB0b0luamVjdFxuXG5cdFx0YVxuXG5cdGluamVjdEluSW5kZXg6IChhLCBpbmRleCwgdG9JbmplY3QpIC0+XG5cblx0XHRsZW4gPSBhLmxlbmd0aFxuXG5cdFx0aSA9IGluZGV4XG5cblx0XHRpZiBsZW4gPCAxXG5cblx0XHRcdGEucHVzaCB0b0luamVjdFxuXG5cdFx0XHRyZXR1cm4gYVxuXG5cdFx0dG9QdXQgPSB0b0luamVjdFxuXG5cdFx0dG9QdXROZXh0ID0gbnVsbFxuXG5cdFx0YGZvcig7IGkgPD0gbGVuOyBpKyspe1xuXG5cdFx0XHR0b1B1dE5leHQgPSBhW2ldO1xuXG5cdFx0XHRhW2ldID0gdG9QdXQ7XG5cblx0XHRcdHRvUHV0ID0gdG9QdXROZXh0O1xuXG5cdFx0fWBcblxuXHRcdCMgYVtpXSA9IHRvUHV0XG5cblx0XHRudWxsIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzc2ljID0ge31cblxuIyBMaXR0bGUgaGVscGVyIGZvciBtaXhpbnMgZnJvbSBDb2ZmZWVTY3JpcHQgRkFRLFxuIyBjb3VydGVzeSBvZiBTZXRoYXVydXMgKGh0dHA6Ly9naXRodWIuY29tL3NldGhhdXJ1cylcbmNsYXNzaWMuaW1wbGVtZW50ID0gKG1peGlucy4uLiwgY2xhc3NSZWZlcmVuY2UpIC0+XG5cblx0Zm9yIG1peGluIGluIG1peGluc1xuXG5cdFx0Y2xhc3NQcm90byA9IGNsYXNzUmVmZXJlbmNlOjpcblxuXHRcdGZvciBtZW1iZXIgb2YgbWl4aW46OlxuXG5cdFx0XHR1bmxlc3MgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBjbGFzc1Byb3RvLCBtZW1iZXJcblxuXHRcdFx0XHRkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBtaXhpbjo6LCBtZW1iZXJcblxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkgY2xhc3NQcm90bywgbWVtYmVyLCBkZXNjXG5cblx0Y2xhc3NSZWZlcmVuY2VcblxuY2xhc3NpYy5taXggPSAobWl4aW5zLi4uLCBjbGFzc1JlZmVyZW5jZSkgLT5cblxuXHRjbGFzc1Byb3RvID0gY2xhc3NSZWZlcmVuY2U6OlxuXG5cdGNsYXNzUmVmZXJlbmNlLl9fbWl4aW5DbG9uZXJzID0gW11cblxuXHRjbGFzc1JlZmVyZW5jZS5fX2FwcGx5Q2xvbmVyc0ZvciA9IChpbnN0YW5jZSwgYXJncyA9IG51bGwpIC0+XG5cblx0XHRmb3IgY2xvbmVyIGluIGNsYXNzUmVmZXJlbmNlLl9fbWl4aW5DbG9uZXJzXG5cblx0XHRcdGNsb25lci5hcHBseSBpbnN0YW5jZSwgYXJnc1xuXG5cdFx0cmV0dXJuXG5cblx0Y2xhc3NSZWZlcmVuY2UuX19taXhpbkluaXRpYWxpemVycyA9IFtdXG5cblx0Y2xhc3NSZWZlcmVuY2UuX19pbml0TWl4aW5zRm9yID0gKGluc3RhbmNlLCBhcmdzID0gbnVsbCkgLT5cblxuXHRcdGZvciBpbml0aWFsaXplciBpbiBjbGFzc1JlZmVyZW5jZS5fX21peGluSW5pdGlhbGl6ZXJzXG5cblx0XHRcdGluaXRpYWxpemVyLmFwcGx5IGluc3RhbmNlLCBhcmdzXG5cblx0XHRyZXR1cm5cblxuXHRjbGFzc1JlZmVyZW5jZS5fX21peGluUXVpdHRlcnMgPSBbXVxuXG5cdGNsYXNzUmVmZXJlbmNlLl9fYXBwbHlRdWl0dGVyc0ZvciA9IChpbnN0YW5jZSwgYXJncyA9IG51bGwpIC0+XG5cblx0XHRmb3IgcXVpdHRlciBpbiBjbGFzc1JlZmVyZW5jZS5fX21peGluUXVpdHRlcnNcblxuXHRcdFx0cXVpdHRlci5hcHBseSBpbnN0YW5jZSwgYXJnc1xuXG5cdFx0cmV0dXJuXG5cblx0Zm9yIG1peGluIGluIG1peGluc1xuXG5cdFx0dW5sZXNzIG1peGluLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb25cblxuXHRcdFx0dGhyb3cgRXJyb3IgXCJNaXhpbiBzaG91bGQgYmUgYSBmdW5jdGlvblwiXG5cblx0XHRmb3IgbWVtYmVyIG9mIG1peGluOjpcblxuXHRcdFx0aWYgbWVtYmVyLnN1YnN0cigwLCAxMSkgaXMgJ19faW5pdE1peGluJ1xuXG5cdFx0XHRcdGNsYXNzUmVmZXJlbmNlLl9fbWl4aW5Jbml0aWFsaXplcnMucHVzaCBtaXhpbjo6W21lbWJlcl1cblxuXHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRlbHNlIGlmIG1lbWJlci5zdWJzdHIoMCwgMTEpIGlzICdfX2Nsb25lckZvcidcblxuXHRcdFx0XHRjbGFzc1JlZmVyZW5jZS5fX21peGluQ2xvbmVycy5wdXNoIG1peGluOjpbbWVtYmVyXVxuXG5cdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdGVsc2UgaWYgbWVtYmVyLnN1YnN0cigwLCAxMikgaXMgJ19fcXVpdHRlckZvcidcblxuXHRcdFx0XHRjbGFzc1JlZmVyZW5jZS5fX21peGluUXVpdHRlcnMucHVzaCBtaXhpbjo6W21lbWJlcl1cblxuXHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHR1bmxlc3MgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBjbGFzc1Byb3RvLCBtZW1iZXJcblxuXHRcdFx0XHRkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBtaXhpbjo6LCBtZW1iZXJcblxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkgY2xhc3NQcm90bywgbWVtYmVyLCBkZXNjXG5cblx0Y2xhc3NSZWZlcmVuY2UiLCJhcnJheSA9IHJlcXVpcmUgJy4vYXJyYXknXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVtaXR0ZXJcclxuXHJcblx0Y29uc3RydWN0b3I6IC0+XHJcblxyXG5cdFx0QF9saXN0ZW5lcnMgPSB7fVxyXG5cclxuXHRcdEBfbGlzdGVuZXJzRm9yQW55RXZlbnQgPSBbXVxyXG5cclxuXHRcdEBfZGlzYWJsZWRFbWl0dGVycyA9IHt9XHJcblxyXG5cdG9uOiAoZXZlbnROYW1lLCBsaXN0ZW5lcikgLT5cclxuXHJcblx0XHR1bmxlc3MgQF9saXN0ZW5lcnNbZXZlbnROYW1lXT9cclxuXHJcblx0XHRcdEBfbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXVxyXG5cclxuXHRcdEBfbGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaCBsaXN0ZW5lclxyXG5cclxuXHRcdEBcclxuXHJcblx0b25jZTogKGV2ZW50TmFtZSwgbGlzdGVuZXIpIC0+XHJcblxyXG5cdFx0cmFuID0gbm9cclxuXHJcblx0XHRjYiA9ID0+XHJcblxyXG5cdFx0XHRyZXR1cm4gaWYgcmFuXHJcblxyXG5cdFx0XHRyYW4gPSB5ZXNcclxuXHJcblx0XHRcdGRvIGxpc3RlbmVyXHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0ID0+XHJcblxyXG5cdFx0XHRcdEByZW1vdmVFdmVudCBldmVudE5hbWUsIGNiXHJcblxyXG5cdFx0XHQsIDBcclxuXHJcblx0XHRAb24gZXZlbnROYW1lLCBjYlxyXG5cclxuXHRcdEBcclxuXHJcblx0b25BbnlFdmVudDogKGxpc3RlbmVyKSAtPlxyXG5cclxuXHRcdEBfbGlzdGVuZXJzRm9yQW55RXZlbnQucHVzaCBsaXN0ZW5lclxyXG5cclxuXHRcdEBcclxuXHJcblx0cmVtb3ZlRXZlbnQ6IChldmVudE5hbWUsIGxpc3RlbmVyKSAtPlxyXG5cclxuXHRcdHJldHVybiBAIHVubGVzcyBAX2xpc3RlbmVyc1tldmVudE5hbWVdP1xyXG5cclxuXHRcdGFycmF5LnBsdWNrT25lSXRlbSBAX2xpc3RlbmVyc1tldmVudE5hbWVdLCBsaXN0ZW5lclxyXG5cclxuXHRcdEBcclxuXHJcblx0cmVtb3ZlTGlzdGVuZXJzOiAoZXZlbnROYW1lKSAtPlxyXG5cclxuXHRcdHJldHVybiBAIHVubGVzcyBAX2xpc3RlbmVyc1tldmVudE5hbWVdP1xyXG5cclxuXHRcdEBfbGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID0gMFxyXG5cclxuXHRcdEBcclxuXHJcblx0cmVtb3ZlQWxsTGlzdGVuZXJzOiAtPlxyXG5cclxuXHRcdGZvciBuYW1lLCBsaXN0ZW5lcnMgb2YgQF9saXN0ZW5lcnNcclxuXHJcblx0XHRcdGxpc3RlbmVycy5sZW5ndGggPSAwXHJcblxyXG5cdFx0QFxyXG5cclxuXHRfZW1pdDogKGV2ZW50TmFtZSwgZGF0YSkgLT5cclxuXHJcblx0XHRmb3IgbGlzdGVuZXIgaW4gQF9saXN0ZW5lcnNGb3JBbnlFdmVudFxyXG5cclxuXHRcdFx0bGlzdGVuZXIuY2FsbCBALCBkYXRhLCBldmVudE5hbWVcclxuXHJcblx0XHRyZXR1cm4gdW5sZXNzIEBfbGlzdGVuZXJzW2V2ZW50TmFtZV0/XHJcblxyXG5cdFx0Zm9yIGxpc3RlbmVyIGluIEBfbGlzdGVuZXJzW2V2ZW50TmFtZV1cclxuXHJcblx0XHRcdGxpc3RlbmVyLmNhbGwgQCwgZGF0YVxyXG5cclxuXHRcdHJldHVyblxyXG5cclxuXHQjIHRoaXMgbWFrZXMgc3VyZSB0aGF0IGFsbCB0aGUgY2FsbHMgdG8gdGhpcyBjbGFzcydzIG1ldGhvZCAnZm5OYW1lJ1xyXG5cdCMgYXJlIHRocm90dGxlZFxyXG5cdF90aHJvdHRsZUVtaXR0ZXJNZXRob2Q6IChmbk5hbWUsIHRpbWUgPSAxMDAwKSAtPlxyXG5cclxuXHRcdG9yaWdpbmFsRm4gPSBAW2ZuTmFtZV1cclxuXHJcblx0XHRpZiB0eXBlb2Ygb3JpZ2luYWxGbiBpc250ICdmdW5jdGlvbidcclxuXHJcblx0XHRcdHRocm93IEVycm9yIFwidGhpcyBjbGFzcyBkb2VzIG5vdCBoYXZlIGEgbWV0aG9kIGNhbGxlZCAnI3tmbk5hbWV9J1wiXHJcblxyXG5cdFx0bGFzdENhbGxBcmdzID0gbnVsbFxyXG5cdFx0cGVuZGluZyA9IG5vXHJcblx0XHR0aW1lciA9IG51bGxcclxuXHJcblx0XHRAW2ZuTmFtZV0gPSA9PlxyXG5cclxuXHRcdFx0bGFzdENhbGxBcmdzID0gYXJndW1lbnRzXHJcblxyXG5cdFx0XHRkbyBwZW5kXHJcblxyXG5cdFx0cGVuZCA9ID0+XHJcblxyXG5cdFx0XHRpZiBwZW5kaW5nXHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCB0aW1lclxyXG5cclxuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0IHJ1bkl0LCB0aW1lXHJcblxyXG5cdFx0XHRwZW5kaW5nID0geWVzXHJcblxyXG5cdFx0cnVuSXQgPSA9PlxyXG5cclxuXHRcdFx0cGVuZGluZyA9IG5vXHJcblxyXG5cdFx0XHRvcmlnaW5hbEZuLmFwcGx5IEAsIGxhc3RDYWxsQXJnc1xyXG5cclxuXHRfZGlzYWJsZUVtaXR0ZXI6IChmbk5hbWUpIC0+XHJcblxyXG5cdFx0aWYgQF9kaXNhYmxlZEVtaXR0ZXJzW2ZuTmFtZV0/XHJcblxyXG5cdFx0XHR0aHJvdyBFcnJvciBcIiN7Zm5OYW1lfSBpcyBhbHJlYWR5IGEgZGlzYWJsZWQgZW1pdHRlclwiXHJcblxyXG5cdFx0QF9kaXNhYmxlZEVtaXR0ZXJzW2ZuTmFtZV0gPSBAW2ZuTmFtZV1cclxuXHJcblx0XHRAW2ZuTmFtZV0gPSAtPlxyXG5cclxuXHRfZW5hYmxlRW1pdHRlcjogKGZuTmFtZSkgLT5cclxuXHJcblx0XHRmbiA9IEBfZGlzYWJsZWRFbWl0dGVyc1tmbk5hbWVdXHJcblxyXG5cdFx0dW5sZXNzIGZuP1xyXG5cclxuXHRcdFx0dGhyb3cgRXJyb3IgXCIje2ZuTmFtZX0gaXMgbm90IGEgZGlzYWJsZWQgZW1pdHRlclwiXHJcblxyXG5cdFx0QFtmbk5hbWVdID0gZm5cclxuXHJcblx0XHRkZWxldGUgQF9kaXNhYmxlZEVtaXR0ZXJzW2ZuTmFtZV0iLCJfY29tbW9uID0gcmVxdWlyZSAnLi9fY29tbW9uJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdCA9XG5cblx0aXNCYXJlT2JqZWN0OiBfY29tbW9uLmlzQmFyZU9iamVjdC5iaW5kIF9jb21tb25cblxuXHQjIyNcblx0aWYgb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIGEgY2xhc3Ncblx0IyMjXG5cdGlzSW5zdGFuY2U6ICh3aGF0KSAtPlxuXG5cdFx0bm90IEBpc0JhcmVPYmplY3Qgd2hhdFxuXG5cdCMjI1xuXHRBbGlhcyB0byBfY29tbW9uLnR5cGVPZlxuXHQjIyNcblx0dHlwZU9mOiBfY29tbW9uLnR5cGVPZi5iaW5kIF9jb21tb25cblxuXHQjIyNcblx0QWxpYXMgdG8gX2NvbW1vbi5jbG9uZVxuXHQjIyNcblx0Y2xvbmU6IF9jb21tb24uY2xvbmUuYmluZCBfY29tbW9uXG5cblx0IyMjXG5cdEVtcHRpZXMgYW4gb2JqZWN0IG9mIGl0cyBwcm9wZXJ0aWVzLlxuXHQjIyNcblx0ZW1wdHk6IChvKSAtPlxuXG5cdFx0Zm9yIHByb3Agb2Ygb1xuXG5cdFx0XHRkZWxldGUgb1twcm9wXSBpZiBvLmhhc093blByb3BlcnR5IHByb3BcblxuXHRcdG9cblxuXHQjIyNcblx0RW1wdGllcyBhbiBvYmplY3QuIERvZXNuJ3QgY2hlY2sgZm9yIGhhc093blByb3BlcnR5LCBzbyBpdCdzIGEgdGlueVxuXHRiaXQgZmFzdGVyLiBVc2UgaXQgZm9yIHBsYWluIG9iamVjdHMuXG5cdCMjI1xuXHRmYXN0RW1wdHk6IChvKSAtPlxuXG5cdFx0ZGVsZXRlIG9bcHJvcGVydHldIGZvciBwcm9wZXJ0eSBvZiBvXG5cblx0XHRvXG5cblx0IyMjXG5cdE92ZXJyaWRlcyB2YWx1ZXMgZm9tciBgbmV3VmFsdWVzYCBvbiBgYmFzZWAsIGFzIGxvbmcgYXMgdGhleVxuXHRhbHJlYWR5IGV4aXN0IGluIGJhc2UuXG5cdCMjI1xuXHRvdmVycmlkZU9udG86IChiYXNlLCBuZXdWYWx1ZXMpIC0+XG5cblx0XHRyZXR1cm4gYmFzZSBpZiBub3QgQGlzQmFyZU9iamVjdChuZXdWYWx1ZXMpIG9yIG5vdCBAaXNCYXJlT2JqZWN0KGJhc2UpXG5cblx0XHRmb3Iga2V5LCBvbGRWYWwgb2YgYmFzZVxuXG5cdFx0XHRuZXdWYWwgPSBuZXdWYWx1ZXNba2V5XVxuXG5cdFx0XHRjb250aW51ZSBpZiBuZXdWYWwgaXMgdW5kZWZpbmVkXG5cblx0XHRcdGlmIHR5cGVvZiBuZXdWYWwgaXNudCAnb2JqZWN0JyBvciBAaXNJbnN0YW5jZSBuZXdWYWxcblxuXHRcdFx0XHRiYXNlW2tleV0gPSBAY2xvbmUgbmV3VmFsXG5cblx0XHRcdCMgbmV3VmFsIGlzIGEgcGxhaW4gb2JqZWN0XG5cdFx0XHRlbHNlXG5cblx0XHRcdFx0aWYgdHlwZW9mIG9sZFZhbCBpc250ICdvYmplY3QnIG9yIEBpc0luc3RhbmNlIG9sZFZhbFxuXG5cdFx0XHRcdFx0YmFzZVtrZXldID0gQGNsb25lIG5ld1ZhbFxuXG5cdFx0XHRcdGVsc2VcblxuXHRcdFx0XHRcdEBvdmVycmlkZU9udG8gb2xkVmFsLCBuZXdWYWxcblx0XHRiYXNlXG5cblx0IyMjXG5cdFRha2VzIGEgY2xvbmUgb2YgJ2Jhc2UnIGFuZCBydW5zICNvdmVycmlkZU9udG8gb24gaXRcblx0IyMjXG5cdG92ZXJyaWRlOiAoYmFzZSwgbmV3VmFsdWVzKSAtPlxuXG5cdFx0QG92ZXJyaWRlT250byBAY2xvbmUoYmFzZSksIG5ld1ZhbHVlc1xuXG5cdGFwcGVuZDogKGJhc2UsIHRvQXBwZW5kKSAtPlxuXG5cdFx0QGFwcGVuZE9udG8gQGNsb25lKGJhc2UpLCB0b0FwcGVuZFxuXG5cdCMgRGVlcCBhcHBlbmRzIHZhbHVlcyBmcm9tIGB0b0FwcGVuZGAgdG8gYGJhc2VgXG5cdGFwcGVuZE9udG86IChiYXNlLCB0b0FwcGVuZCkgLT5cblxuXHRcdHJldHVybiBiYXNlIGlmIG5vdCBAaXNCYXJlT2JqZWN0KHRvQXBwZW5kKSBvciBub3QgQGlzQmFyZU9iamVjdChiYXNlKVxuXG5cdFx0Zm9yIG93biBrZXksIG5ld1ZhbCBvZiB0b0FwcGVuZFxuXG5cdFx0XHRjb250aW51ZSB1bmxlc3MgbmV3VmFsIGlzbnQgdW5kZWZpbmVkXG5cblx0XHRcdGlmIHR5cGVvZiBuZXdWYWwgaXNudCAnb2JqZWN0JyBvciBAaXNJbnN0YW5jZSBuZXdWYWxcblxuXHRcdFx0XHRiYXNlW2tleV0gPSBuZXdWYWxcblxuXHRcdFx0ZWxzZVxuXG5cdFx0XHRcdCMgbmV3VmFsIGlzIGEgYmFyZSBvYmplY3RcblxuXHRcdFx0XHRvbGRWYWwgPSBiYXNlW2tleV1cblxuXHRcdFx0XHRpZiB0eXBlb2Ygb2xkVmFsIGlzbnQgJ29iamVjdCcgb3IgQGlzSW5zdGFuY2Ugb2xkVmFsXG5cblx0XHRcdFx0XHRiYXNlW2tleV0gPSBAY2xvbmUgbmV3VmFsXG5cblx0XHRcdFx0ZWxzZVxuXG5cdFx0XHRcdFx0QGFwcGVuZE9udG8gb2xkVmFsLCBuZXdWYWxcblxuXHRcdGJhc2VcblxuXHQjIEdyb3Vwc1xuXHRncm91cFByb3BzOiAob2JqLCBncm91cHMpIC0+XG5cblx0XHRncm91cGVkID0ge31cblxuXHRcdGZvciBuYW1lLCBkZWZzIG9mIGdyb3Vwc1xuXG5cdFx0XHRncm91cGVkW25hbWVdID0ge31cblxuXHRcdGdyb3VwZWRbJ3Jlc3QnXSA9IHt9XG5cblx0XHRgdG9wOiAvL2Bcblx0XHRmb3Iga2V5LCB2YWwgb2Ygb2JqXG5cblx0XHRcdHNob3VsZEFkZCA9IG5vXG5cblx0XHRcdGZvciBuYW1lLCBkZWZzIG9mIGdyb3Vwc1xuXG5cdFx0XHRcdHVubGVzcyBBcnJheS5pc0FycmF5IGRlZnNcblxuXHRcdFx0XHRcdGRlZnMgPSBbZGVmc11cblxuXHRcdFx0XHRmb3IgZGVmIGluIGRlZnNcblxuXHRcdFx0XHRcdGlmIHR5cGVvZiBkZWYgaXMgJ3N0cmluZydcblxuXHRcdFx0XHRcdFx0aWYga2V5IGlzIGRlZlxuXG5cdFx0XHRcdFx0XHRcdHNob3VsZEFkZCA9IHllc1xuXG5cdFx0XHRcdFx0ZWxzZSBpZiBkZWYgaW5zdGFuY2VvZiBSZWdFeHBcblxuXHRcdFx0XHRcdFx0aWYgZGVmLnRlc3Qga2V5XG5cblx0XHRcdFx0XHRcdFx0c2hvdWxkQWRkID0geWVzXG5cblx0XHRcdFx0XHRlbHNlIGlmIGRlZiBpbnN0YW5jZW9mIEZ1bmN0aW9uXG5cblx0XHRcdFx0XHRcdGlmIGRlZiBrZXlcblxuXHRcdFx0XHRcdFx0XHRzaG91bGRBZGQgPSB5ZXNcblxuXHRcdFx0XHRcdGVsc2VcblxuXHRcdFx0XHRcdFx0dGhyb3cgRXJyb3IgJ0dyb3VwIGRlZmluaXRpb25zIG11c3QgZWl0aGVyXG5cdFx0XHRcdFx0XHRiZSBzdHJpbmdzLCByZWdleGVzLCBvciBmdW5jdGlvbnMuJ1xuXG5cdFx0XHRcdFx0aWYgc2hvdWxkQWRkXG5cblx0XHRcdFx0XHRcdGdyb3VwZWRbbmFtZV1ba2V5XSA9IHZhbFxuXG5cdFx0XHRcdFx0XHRgY29udGludWUgdG9wYFxuXG5cdFx0XHRncm91cGVkWydyZXN0J11ba2V5XSA9IHZhbFxuXG5cdFx0Z3JvdXBlZCIsIm1vZHVsZS5leHBvcnRzID1cclxuXHJcblx0IyBwYWRzIGEgbnVtYmVyIHdpdGggbGVhZGluZyB6ZXJvZXNcclxuXHQjXHJcblx0IyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDA3Mzc4OC82MDc5OTdcclxuXHRwYWQ6IChuLCB3aWR0aCwgeiA9ICcwJykgLT5cclxuXHJcblx0XHRuID0gbiArICcnXHJcblxyXG5cdFx0aWYgbi5sZW5ndGggPj0gd2lkdGhcclxuXHJcblx0XHRcdG5cclxuXHJcblx0XHRlbHNlXHJcblxyXG5cdFx0XHRuZXcgQXJyYXkod2lkdGggLSBuLmxlbmd0aCArIDEpLmpvaW4oeikgKyBuIiwibW9kdWxlLmV4cG9ydHMgPSB1dGlsYSA9XG5cblx0YXJyYXk6IHJlcXVpcmUgJy4vYXJyYXknXG5cdGNsYXNzaWM6IHJlcXVpcmUgJy4vY2xhc3NpYydcblx0b2JqZWN0OiByZXF1aXJlICcuL29iamVjdCdcblx0c3RyaW5nOiByZXF1aXJlICcuL3N0cmluZydcblx0RW1pdHRlcjogcmVxdWlyZSAnLi9FbWl0dGVyJyIsIm1vZHVsZS5leHBvcnRzID0gY29tbW9uID1cblxuXHQjIyNcblx0Q2hlY2tzIHRvIHNlZSBpZiBvIGlzIGFuIG9iamVjdCwgYW5kIGl0IGlzbid0IGFuIGluc3RhbmNlXG5cdG9mIHNvbWUgY2xhc3MuXG5cdCMjI1xuXHRpc0JhcmVPYmplY3Q6IChvKSAtPlxuXG5cdFx0aWYgbz8gYW5kIG8uY29uc3RydWN0b3IgaXMgT2JqZWN0XG5cblx0XHRcdHJldHVybiB0cnVlXG5cblx0XHRmYWxzZVxuXG5cdCMjI1xuXHRSZXR1cm5zIHR5cGUgb2YgYW4gb2JqZWN0LCBpbmNsdWRpbmc6XG5cdHVuZGVmaW5lZCwgbnVsbCwgc3RyaW5nLCBudW1iZXIsIGFycmF5LFxuXHRhcmd1bWVudHMsIGVsZW1lbnQsIHRleHRub2RlLCB3aGl0ZXNwYWNlLCBhbmQgb2JqZWN0XG5cdCMjI1xuXHR0eXBlT2Y6IChpdGVtKSAtPlxuXG5cdFx0cmV0dXJuICdudWxsJyBpZiBpdGVtIGlzIG51bGxcblxuXHRcdHJldHVybiB0eXBlb2YgaXRlbSBpZiB0eXBlb2YgaXRlbSBpc250ICdvYmplY3QnXG5cblx0XHRyZXR1cm4gJ2FycmF5JyBpZiBBcnJheS5pc0FycmF5IGl0ZW1cblxuXHRcdCMgRnJvbSBNb29Ub29sc1xuXHRcdCMgLSBkbyB3ZSBldmVuIG5lZWQgdGhpcz9cblx0XHRpZiBpdGVtLm5vZGVOYW1lXG5cblx0XHRcdGlmIGl0ZW0ubm9kZVR5cGUgaXMgMSB0aGVuIHJldHVybiAnZWxlbWVudCdcblx0XHRcdGlmIGl0ZW0ubm9kZVR5cGUgaXMgMyB0aGVuIHJldHVybiAoL1xcUy8pLnRlc3QoaXRlbS5ub2RlVmFsdWUpID8gJ3RleHRub2RlJyA6ICd3aGl0ZXNwYWNlJ1xuXG5cdFx0ZWxzZSBpZiB0eXBlb2YgaXRlbS5sZW5ndGggaXMgJ251bWJlcidcblxuXHRcdFx0aWYgaXRlbS5jYWxsZWUgdGhlbiByZXR1cm4gJ2FyZ3VtZW50cydcblxuXHRcdHJldHVybiB0eXBlb2YgaXRlbVxuXG5cdCMgRGVlcCBjbG9uZSBvZiBhbnkgdmFyaWFibGUuXG5cdCMgRnJvbSBNb29Ub29sc1xuXHRjbG9uZTogKGl0ZW0sIGluY2x1ZGVQcm90b3R5cGUgPSBmYWxzZSkgLT5cblxuXHRcdHN3aXRjaCBjb21tb24udHlwZU9mIGl0ZW1cblxuXHRcdFx0d2hlbiAnYXJyYXknIHRoZW4gcmV0dXJuIGNvbW1vbi5fY2xvbmVBcnJheSBpdGVtLCBpbmNsdWRlUHJvdG90eXBlXG5cblx0XHRcdHdoZW4gJ29iamVjdCcgdGhlbiByZXR1cm4gY29tbW9uLl9jbG9uZU9iamVjdCBpdGVtLCBpbmNsdWRlUHJvdG90eXBlXG5cblx0XHRcdGVsc2UgcmV0dXJuIGl0ZW1cblxuXHQjIyNcblx0RGVlcCBjbG9uZSBvZiBhbiBvYmplY3QuXG5cdEZyb20gTW9vVG9vbHNcblx0IyMjXG5cdF9jbG9uZU9iamVjdDogKG8sIGluY2x1ZGVQcm90b3R5cGUgPSBmYWxzZSkgLT5cblxuXHRcdGlmIGNvbW1vbi5pc0JhcmVPYmplY3Qgb1xuXG5cdFx0XHRjbG9uZSA9IHt9XG5cblx0XHRcdGZvciBrZXkgb2Ygb1xuXG5cdFx0XHRcdGNsb25lW2tleV0gPSBjb21tb24uY2xvbmUgb1trZXldLCBpbmNsdWRlUHJvdG90eXBlXG5cblx0XHRcdHJldHVybiBjbG9uZVxuXG5cdFx0ZWxzZVxuXG5cdFx0XHRyZXR1cm4gbyB1bmxlc3MgaW5jbHVkZVByb3RvdHlwZVxuXG5cdFx0XHRyZXR1cm4gbyBpZiBvIGluc3RhbmNlb2YgRnVuY3Rpb25cblxuXHRcdFx0Y2xvbmUgPSBPYmplY3QuY3JlYXRlIG8uY29uc3RydWN0b3IucHJvdG90eXBlXG5cblx0XHRcdGZvciBrZXkgb2Ygb1xuXG5cdFx0XHRcdGlmIG8uaGFzT3duUHJvcGVydHkga2V5XG5cblx0XHRcdFx0XHRjbG9uZVtrZXldID0gY29tbW9uLmNsb25lIG9ba2V5XSwgaW5jbHVkZVByb3RvdHlwZVxuXG5cdFx0XHRjbG9uZVxuXG5cdCMjI1xuXHREZWVwIGNsb25lIG9mIGFuIGFycmF5LlxuXHRGcm9tIE1vb1Rvb2xzXG5cdCMjI1xuXHRfY2xvbmVBcnJheTogKGEsIGluY2x1ZGVQcm90b3R5cGUgPSBmYWxzZSkgLT5cblxuXHRcdGkgPSBhLmxlbmd0aFxuXG5cdFx0Y2xvbmUgPSBuZXcgQXJyYXkgaVxuXG5cdFx0d2hpbGUgaS0tXG5cblx0XHRcdGNsb25lW2ldID0gY29tbW9uLmNsb25lIGFbaV0sIGluY2x1ZGVQcm90b3R5cGVcblxuXHRcdGNsb25lIiwicmVxdWlyZSAnLi9fcHJlcGFyZSdcblxuYXJyYXkgPSBtb2QgJ2FycmF5J1xuXG50ZXN0ICdmcm9tJywgLT5cblxuXHRhcnJheS5mcm9tKFsxXSkuc2hvdWxkLmJlLmFuLmluc3RhbmNlT2YgQXJyYXlcblx0YXJyYXkuZnJvbShbMV0pWzBdLnNob3VsZC5lcXVhbCAxXG5cbiMgdGVzdCAnY2xvbmUnLCAtPlxuXG4jIFx0YSA9IFswLCAxLCAyXVxuXG4jIFx0YiA9IGFycmF5LmNsb25lIGFcblxuIyBcdGJbMF0uc2hvdWxkLmVxdWFsIDBcbiMgXHRiWzFdLnNob3VsZC5lcXVhbCAxXG5cbiMgXHRiWzBdID0gM1xuXG4jIFx0YVswXS5zaG91bGQuZXF1YWwgMFxuXG50ZXN0ICdwbHVjaycsIC0+XG5cblx0YSA9IFswLCAxLCAyLCAzXVxuXG5cdGFmdGVyID0gYXJyYXkucGx1Y2sgYSwgMVxuXG5cdGFmdGVyLmxlbmd0aC5zaG91bGQuZXF1YWwgM1xuXG5cdGFmdGVyWzBdLnNob3VsZC5lcXVhbCAwXG5cdGFmdGVyWzFdLnNob3VsZC5lcXVhbCAyXG5cdGFmdGVyWzJdLnNob3VsZC5lcXVhbCAzXG5cdGFmdGVyLnNob3VsZC5lcXVhbCBhXG5cbnRlc3QgJ3BsdWNrTXVsdGlwbGUnLCAtPlxuXG5cdGEgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl1cblxuXHRhcnJheS5wbHVja011bHRpcGxlIGEsIFswLCA0LCAyLCA2XVxuXG5cdGEubGVuZ3RoLnNob3VsZC5lcXVhbCAzXG5cdGFbMF0uc2hvdWxkLmVxdWFsIDFcblx0YVsxXS5zaG91bGQuZXF1YWwgM1xuXHRhWzJdLnNob3VsZC5lcXVhbCA1XG5cbnRlc3QgJ3BsdWNrSXRlbScsIC0+XG5cblx0YSA9IFswLCAxLCAyLCAzLCAyLCA0LCAyXVxuXG5cdGFycmF5LnBsdWNrSXRlbSBhLCAyXG5cblx0YVswXS5zaG91bGQuZXF1YWwgMFxuXHRhWzFdLnNob3VsZC5lcXVhbCAxXG5cdGFbMl0uc2hvdWxkLmVxdWFsIDNcblx0YVszXS5zaG91bGQuZXF1YWwgNFxuXG5cdGFycmF5LnBsdWNrSXRlbShbMV0sIDIpLmxlbmd0aC5zaG91bGQuZXF1YWwgMVxuXG5cbnRlc3QgJ3BsdWNrT25lSXRlbScsIC0+XG5cblx0YSA9IFswLCAxLCAyLCAzLCAyLCA0LCAyXVxuXG5cdGFycmF5LnBsdWNrT25lSXRlbSBhLCAyXG5cblx0YVswXS5zaG91bGQuZXF1YWwgMFxuXHRhWzFdLnNob3VsZC5lcXVhbCAxXG5cdGFbMl0uc2hvdWxkLmVxdWFsIDNcblx0YVszXS5zaG91bGQuZXF1YWwgMlxuXHRhWzRdLnNob3VsZC5lcXVhbCA0XG5cdGFbNV0uc2hvdWxkLmVxdWFsIDJcblxuXHRhID0gWzEsIDJdXG5cblx0YXJyYXkucGx1Y2tPbmVJdGVtIGEsIDFcblxuXHRhLmxlbmd0aC5zaG91bGQuZXF1YWwgMVxuXHRhWzBdLnNob3VsZC5lcXVhbCAyXG5cblx0YXJyYXkucGx1Y2tPbmVJdGVtKFtdLCAxKS5sZW5ndGguc2hvdWxkLmVxdWFsIDBcblxuXHRhcnJheS5wbHVja09uZUl0ZW0oWzFdLCAyKS5sZW5ndGguc2hvdWxkLmVxdWFsIDFcblxudGVzdCAncGxjdWtCeUNhbGxiYWNrJywgLT5cblxuXHRhID0gWzAsIDEsIDIsIDNdXG5cblx0YXJyYXkucGx1Y2tCeUNhbGxiYWNrIGEsICh2YWwsIGkpIC0+XG5cblx0XHRyZXR1cm4geWVzIGlmIHZhbCBpcyAyXG5cblx0XHRyZXR1cm4gbm9cblxuXHRhWzBdLnNob3VsZC5lcXVhbCAwXG5cdGFbMV0uc2hvdWxkLmVxdWFsIDFcblx0YVsyXS5zaG91bGQuZXF1YWwgM1xuXG50ZXN0ICdpbmplY3RCeUNhbGxiYWNrJywgLT5cblxuXHRzaG91bGRJbmplY3QgPSAodmFsQSwgdmFsQiwgdG9JbmplY3QpIC0+XG5cblx0XHR1bmxlc3MgdmFsQT9cblxuXHRcdFx0cmV0dXJuIHllcyBpZiB0b0luamVjdCA8PSB2YWxCXG5cblx0XHRcdHJldHVybiBub1xuXG5cdFx0dW5sZXNzIHZhbEI/XG5cblx0XHRcdHJldHVybiB5ZXMgaWYgdmFsQSA8PSB0b0luamVjdFxuXG5cdFx0XHRyZXR1cm4gbm9cblxuXHRcdHJldHVybiB5ZXMgaWYgdmFsQSA8PSB0b0luamVjdCA8PSB2YWxCXG5cblx0XHRyZXR1cm4gbm9cblxuXHRhID0gWzAuNSwgMSwgMi41LCAyLjUsIDIuNzUsIDIuNzUsIDNdXG5cblx0YXJyYXkuaW5qZWN0QnlDYWxsYmFjayBhLCAwLCBzaG91bGRJbmplY3RcblxuXHRhWzBdLnNob3VsZC5lcXVhbCAwXG5cdGFbMV0uc2hvdWxkLmVxdWFsIDAuNVxuXHRhWzddLnNob3VsZC5lcXVhbCAzXG5cblx0YSA9IFswLjUsIDEsIDIuNSwgMi41LCAyLjc1LCAyLjc1LCAzXVxuXG5cdGFycmF5LmluamVjdEJ5Q2FsbGJhY2sgYSwgMi43LCBzaG91bGRJbmplY3RcblxuXHRhWzBdLnNob3VsZC5lcXVhbCAwLjVcblx0YVs0XS5zaG91bGQuZXF1YWwgMi43XG5cdGFbNV0uc2hvdWxkLmVxdWFsIDIuNzVcblx0YVs3XS5zaG91bGQuZXF1YWwgM1xuXG5cdGEgPSBbMC41LCAxLCAyLjUsIDIuNSwgMi43NSwgMi43NSwgM11cblxuXHRhcnJheS5pbmplY3RCeUNhbGxiYWNrIGEsIDMuMiwgc2hvdWxkSW5qZWN0XG5cblx0YVswXS5zaG91bGQuZXF1YWwgMC41XG5cdGFbNF0uc2hvdWxkLmVxdWFsIDIuNzVcblx0YVs2XS5zaG91bGQuZXF1YWwgM1xuXHRhWzddLnNob3VsZC5lcXVhbCAzLjIiXX0=