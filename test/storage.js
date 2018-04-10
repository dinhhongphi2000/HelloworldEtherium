var Storage = artifacts.require("./Storage.sol");

contract('Storage', function (accounts) {
  it("should assert true", function (done) {
    var storage = Storage.deployed();
    storage.then(function (contract) {
      return contract.caculate.call(4,5);
    }).then(function(result){
      assert.equal(9,result);
      done();
    });
  });
});
