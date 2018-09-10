function Profile(name, photo, scores, id) {
    this.name = name,
        this.photo = photo,
        this.scores = scores,
        scores = []
    this.id = id
}
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
var profile1 = new Profile("Steve", "https://www-tc.pbs.org/independentlens/wp/wp-content/uploads/2018/04/nickoffermancropped-1920x830.jpg", [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
// profile1.scores = [1,2,3,4,5,1,2,3,4,5]
var profile2 = new Profile("Leroy Jankins", "https://www-tc.pbs.org/independentlens/wp/wp-content/uploads/2018/04/nickoffermancropped-1920x830.jpg", [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
var profile3 = new Profile("David", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
var x = profile1.scores;
var y = profile2.scores;
var difference = [];
x.forEach(i => {
    var holder = 0;
    holder = x[i] - y[i];
    (holder *= -1);
    difference.push(holder);
});
console.log(difference);
var final = difference.reduce((a, b) => a + b, 0);
console.log(final);
module.exports = Profile