/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */

export function createVisitor(name, age, ticketId) {
  let newVisitor = {
    name, age, ticketId
  }
  return newVisitor
}

console.log(createVisitor("Pepe", 90, "001A"));

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */

// When people leave the amusement park, their ticket gets revoked. 
// If they come back, they need to buy a new one. 
// To save regular visitors some time, 
// they only need to register once and 
// the visitor information will be kept for subsequent visits.
// That means when a visitor leaves the park, 
// only their ticket should be invalidated
// but the rest of the visitor object should stay the same. 
// Implement the function revokeTicket that accepts a visitor object, 
// sets the ticket identifier to null and returns the object afterwards.

const visitorDetail = { name: 'María Pilar Neri', age: 16, ticketId: 'MFBSF3S2' };

export function revokeTicket(visitor) {
  if (visitor) {
    visitor.ticketId = null
  }
  return visitor
}

console.log(revokeTicket(visitorDetail));

// To prevent forgery, the ticket identifiers are unique. 
// Once a ticket is printed, its identifier is added as a key in an object in the system 
// so it can be tracked.Before the ticket is sold to a visitor, 
// it is stored with the value null in the ticket tracking object. 
// When it is sold to a visitor, the visitor's name is assigned as a value. 
// When employees have doubts about the validity of a ticket, 
// they need to check the status of the ticket in the system.
// Implement a function ticketStatus that accepts the tracking object 
// and a ticket identifier as arguments. It should return one of the following results.
// 'unknown ticket id' if the identifier was not found in the tracking object
// 'not sold' in case the ticket was printed but not sold
// 'sold to {name}' where {name} is the name of the visitor if the ticket was sold

// Determine the ticket status
// Revisit the concept "Conditionals" to find out how conditionally 
// return different values from the function.
// Use the bracket notation to access the value of the given ticketId in the object.
// Use the strict equality operator === to check for null or undefined.

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

const ticketsList = {
  '23LA9T41': 'Verena Nardi',
  '0H2AZ123': null,
  'QINS6S94': 'Hong Hsu'
}

export function ticketStatus(tickets, ticketId) {
  // 'unknown ticket id' if the identifier was not found in the tracking object
  if (tickets[ticketId] === undefined) {
    console.log(tickets[ticketId]);
    return `unknown ticket id`
  }
  // 'not sold' in case the ticket was printed but not sold
  else if (tickets[ticketId] === null) {
    return 'not sold'
  }
  // 'sold to {name}' where {name} is the name of the visitor if the ticket was sold
  else {
    let name = tickets[ticketId]
    console.log(tickets[ticketId]);
    return `sold to ${name}`
  }
}
console.log(ticketStatus(ticketsList, 'QINS6S94'));

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

// After a while, you get feedback from the employees 
// that they want the ticket status to be easier to understand at the first glance. 
// They only want to see either the name of the visitor or that the ticket is invalid.
// Write a function simpleTicketStatus that accepts the same arguments 
// as ticketStatus in task 3. This function only returns one of two different results.
// the name of the visitor if the ticket was sold
// 'invalid ticket !!!' if the ticket was not sold yet or the identifier 
// was not found in the tracking object.

// Retrieve the value for a given ticketId with bracket notation like in the previous task.
// No if-statement is needed to solve this task.
// Use the nullish coalescing operator ?? instead.

export function simpleTicketStatus(tickets, ticketId) {
  let name = tickets[ticketId]
  return tickets[ticketId] ??= 'invalid ticket !!!' ?? `sold to ${name}`
}

console.log(simpleTicketStatus(ticketsList, '6'));

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */

// Due to new legal requirements, newly created visitor objects now 
// also contain detailed information on the "General Terms & Conditions" (GTC) 
// that the user agreed to. You can see an example of the new visitor object below.
// The cashiers of the amusement park now need to check whether a visitor needs 
// to sign a new version of the GTC. For this, implement a function gtcVersion 
// that accepts a visitor object as an argument and returns the GTC version if it is available. 
// If the version information is not available, nothing should be returned.

const visitor1 = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

export function gtcVersion(visitor) {
return visitor.gtc?.version
}

console.log(gtcVersion(visitor1));
