function Hello() {
    var name;
    this.setName = function(setcode) {
        name = setcode;
    }
    this.getName = function() {
        console.log('hello '+ name);
    }
}
module.exports = Hello;