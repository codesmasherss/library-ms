// There's on StringBuilder in JavaScript, but the following sulution is similar to StringBuilder
// Implemented By (Mohammad Nabi)  (NO Stackoverflow or internet)

class StringBuilder {
   constructor(value = '') {
      this.builder = [];

      this.append(value);
   }

   append(value) {
      if (typeof value !== 'string') throw new Error('Only valid strings are allowed');
      this.builder.push(value);
   }

   get value() {
      return this.builder.join(' ');
   }
}

const fullname = new StringBuilder('Mohammad Nabi');

fullname.append('Hotak');

console.log(fullname.value);
