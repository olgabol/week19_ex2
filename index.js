class Cat {
constructor (name, owner, home, breed, food, sex){
    this.name = name
    this.owner = owner
    this.home = home
    this.breed = breed
    this.food = food
    this.sex = sex
}
}

let cat = new Cat()
cat.name = document.getElementById('petsname').value;
cat.owner = document.getElementById('name').value;
cat.home = document.getElementById('adress').value;
cat.breed = document.getElementById('breed').value;
cat.food = document.getElementById('food').value;
cat.sex = document.getElementById('sex').value;

function logCat(){
    console.log(cat);
}

