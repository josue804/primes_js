describe('primeNumber', function() {
  it('returns prime numbers that precede users input', function() {
    expect(primeNumber(5)).to.eql([2, 3, 5]);
  });

  it('returns prime numbers that precede users input', function() {
    expect(primeNumber(25)).to.eql([2,3,5,7,11,13,17,19,23]);
  });
});
