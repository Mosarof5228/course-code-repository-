//1.fetch() holo api k call korar akti mddhom.
//2.fake api name likhe search dile json placeholder name akti site ashbe sekhane hajaro api creat kora ace. amra segulo k nia use korte pari.ora server er mto agoluke creat kore rakce.
//3.fetch("akhane api dite hobe") qutation er bitore api k dia dite hobe.
//4.api k call korar pore se akti promise return korbe .then() and akti response korbe.
//5.response tike .jason() likhe json a convert korte hbe.
//6.tarpor .then()er dara aro akti promise return korbe and tar bitore json a convert kora response k nia amra console.log korle main bodyr data ta pabo.
//7.fetch("") kokhono clear js file a support kore na so js file tike index.html er sathe connet kore nite hobe.





fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res=>console.log(res))