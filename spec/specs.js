describe('countUp', function(number, byNumber) {
  it("will count up to a number by the multiple given", function() {
    expect(countUp(30, 5)).to.eql([5,10,15,20,25,30]);
  });
});
