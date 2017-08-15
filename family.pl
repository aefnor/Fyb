/* Database for family. It consists of facts and rules. */

/* Facts */
male(michael).
male(thomas).
female(jennifer).
female(lisa).

father_of(mark, beth). /* mark is the father of beth */
mother_of(jen, tom). /* jen is the mother of tom */

/* Rules */
is_male(X) :-
 	male(X);
	father_of(X, _).
