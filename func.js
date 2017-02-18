'use strict';

const foldl = (f) => (a) => (xs) =>
  (xs && xs.length) ? foldl (f) (f(a, head(xs))) (tail(xs))
  : a

const foldr = (f) => (a) => (xs) =>
  (xs && xs.length) ? f (head(xs), foldr (f) (a) (tail(xs)))
  : a

const map = (f) =>
  foldl ((acc, x) => acc.concat([f(x)])) ([])

const filter = (p) =>
  foldl ((acc, x) => p (x) ? acc.concat([x]) : acc) ([])

const curry = (f) => (...args) =>
  (...rest) => f.apply(null, args.concat(rest)) 

const reverse =
  foldr ((x, acc) => acc.concat([x])) ([])

const head = (xs) => xs[0];

const tail = (xs) => xs.slice(1);

const compose = (...fs) =>
  (...args) => head (foldr ((f, acc) => [f.apply(null, acc)]) (args) (fs))

module.exports = {
  foldl,
  foldr,
  map,
  filter,
  reverse,
  curry,
  head,
  tail,
  compose,
}
