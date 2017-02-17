=============
JS-Functional
=============

It was boring at night so I decided to implement basic higher-order
functions (almost) from scratch in JavaScript.

Definitely, the performance is far from perfect, as to recursion
and creating a lot of new lists in memory, however I believe this
small project has some academical interest as it exposes the idea
behind those functions.

Inspired by Haskell programming language.

Implemented functions
---------------------

foldl
~~~~~

:Signature: :code:`foldl :: (b => a => b) => b => [a] => b`
:Description: Implements a left fold of the list. 
              It is similar to :code:`Array.prototype.reduce`
              function.

foldr
~~~~~

:Signature: :code:`foldl :: (a => b => b) => b => [a] => b`
:Description: Implements a right fold of the list. 
              It is similar to :code:`Array.prototype.reduceRight`
              function.


map
~~~

:Signature: :code:`map :: (a => b) => [a] => [b]`
:Description: Applies a given function to every element in the list
              It is similar to :code:`Array.prototype.map` function.

filter
~~~~~~

:Signature: :code:`filter :: (a => Bool) => [a] => [a]`
:Descriptions: filters the list leaving only elements for which
               predicate function is truthy. 
               It is similar to :code:`Array.prototype.filter`
               function.

reverse
~~~~~~~

:Signature: :code:`reverse :: [a] => [a]`
:Description: reverses the list.

head
~~~~

:Signature: :code:`head :: [a] => a`
:Description: Returns the first element of the list.

tail
~~~~

:Signature: :code:`tail :: [a] => [a]`
:Description: Returns all list but first element.

curry
~~~~~

:Decsription: Applies arguments to the function and returns
              a partially applied function.

compose
~~~~~~~

:Description: Implements a function composition
