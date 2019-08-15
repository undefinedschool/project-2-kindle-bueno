# project-two-kindle

Este es el proyecto 2, para aplicar lo aprendido hasta el momento de POO en JS, DOM, Git y Metodologías ágiles 

1. Crear una clase `Kindle`
2. Crear una clase `Ebook`

## Propiedades

- El **Kindle** debe tenerlas siguientes propiedades:
  - `readBooks`: número de libros marcados como ya leídos
  - `notReadYetBooks`: número de libros marcados como no leídos aún
  - `current`: referencia al libro que estamos leyendo actualmente
	- `next`: referencia al próximo libro a leer
	- `last`: referencia al último libro leído
	- `library`: un _array_ de todos los libros que tenemos
  
- Cada **Ebook** debe tener las siguientes propiedades:
  - `title`
  - `genre`
  - `author`
  - `read`: _booleano_ que indica si fue leído
  - `readDate`: fecha en que se leyó (objeto de tipo `Date()`, por default vacío)

## Métodos

- El **Kindle** debe tener los siguientes métodos:
  - `.add(eBook)`
    - agrega un nuevo libro a la `library` del _Kindle_
    - actualizar la cantidad de libros no leídos
    - si ya existe un libro en el _Kindle_ con las mismas propiedades, no debe agregarse y debe mostrarse el siguiente error por consola _`"${eBook.title}" already exists in library`_
	- `.finishCurrentBook()`
    - Si no tenemos libro actual, no modificar nada y mostrar el siguiente error por consola _'There is no current book to finish, you must add one first.'_
	  - Marcar el libro actual como leído
		- Setearle la fecha de lectura (`Date.now()`)
		- Setear como último libro leído (`last`) el recién finalizado (`current`)
		- Setear como libro actual (`current`) al próximo a leer (`next`)
		- Setear como próximo libro (`next`) al primero de los no leídos que no sea el libro actual
    - Actualizar la cantidad de libros leídos
    - Actualizar la cantidad de libros no leídos
  - `.size` **(_getter_)**: retorna la cantidad de libros disponibles en el _Kindle_
  - `.currentEBook` **(_getter_)**: retorna un objeto de la forma `{ title: <TITLE>, genre: <GENRE>, author: <AUTHOR> }` con la info del libro actual
  - `.currentEBook(eBook)` **(_setter_)**: setea cualquier libro disponible en el _Kindle_ como el actual (`current`) y el libro actual (`current`) pasa a ser el próximo (`next`). En el caso de que elijamos el mismo libro que ya estamos leyendo, no hacer nada
  - `.isEqual(eBookA, eBookB)`: método _estático_ de _Kindle_ que compara si 2 _eBooks_ son iguales
  - `.showRead`: retorna un _array_ de los eBooks ya leídos
  - `.showUnread`: retorna un _array_ de los eBooks no leídos aún
  - `.search(keywords)`: retorna un _array_ de los eBooks que incluyan las _keywords_ en `title` o `author`, sin importar si están en mayúscula o minúscula (no es _case sensitive_)
  - `sortBy(criteria)`: retorna un _array_ de los _eBooks_ ordenado por `title` o `author`, según si se recibe el _string_ `'title'` o `'author'` como parámetro
  - `.setCurrent`: reemplaza el libro actual por otro disponible en el _Kindle_

- Inicializar las _propiedades_ en el constructor de cada clase con los valores apropiados en cada caso
- Tanto **Kindle** como **EBook** pueden tener otras propiedades y métodos si son necesarios. Pensar por ejemplo qué parte de la interfaz debe ser definida como _pública_ y cuál como _privada_

## Qué pasa cuando agregamos un libro al _Kindle_ (`.add(eBook)`)

1. Si no tenemos libros actualmente en el _Kindle_, el nuevo libro que se agregue pasará a ser el `current` (`next` y `last` no se modifican)
2. Si tengo exactamente 1 libro en el _Kindle_ (caso anterior), el nuevo libro que se agregue pasará a ser `next` (`last` queda igual)
3. Si tengo 2 o más libros, el nuevo libro que se agregue pasará a la lista de libros del _Kindle_, `current`, `next` y `last` no se modifican
