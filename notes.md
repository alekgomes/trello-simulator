# indexedDb

Basic pattern

The basic pattern that IndexedDB encourages is the following:

- Open a database.
- Create an object store in the database.
- Start a transaction and make a request to do some database operation, like adding or retrieving data.
- Wait for the operation to complete by listening to the right kind of DOM event.
- Do something with the results (which can be found on the request object).

With these big concepts under our belts, we can get to more concrete stuff.

if (!window.indexedDB) {
console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

# Opening a database

We start the whole process like this:

```js
// Let us open our database
var request = window.indexedDB.open("MyTestDatabase", 3);
```

## params

"MyTestDataBase" - nome do database
3 - Versão do db; representa qual schema será utilizado

# Create an object store in the database.

# Referências

REF: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

![https://www.youtube.com/watch?v=vb7fkBeblcw](2020-11-16-13-49-49.png)
