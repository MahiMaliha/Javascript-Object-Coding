const obj1 = {
        a: 1,
        b: 2
}
const obj2 = {
        a: 1,
        b: 3
}

function compareObjects(object1, object2) {
        if (Object.keys(object1).length === Object.keys(object2).length) {
                // console.log('Objects Length is same');
                for (const prop in object1) {
                        if (object1[prop] === object2[prop]) {
                                return 'Objects are Equal';
                        }
                        else {
                                return 'Objects are not equal';
                        }
                }
        }
        else {
                return 'Objects are not equal';
        }
}

console.log(compareObjects(obj1, obj2));