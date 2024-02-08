
/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */

export function createVisitor(name, age, ticketId) {
  let newVisitor = { name, age, ticketId }
  return newVisitor
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */

export function revokeTicket(visitor) {
  if (visitor) {
    visitor.ticketId = null
  }
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  // 'unknown ticket id' if the identifier was not found in the tracking object
  if (tickets[ticketId] === undefined) {
    return `unknown ticket id`
  }
  // 'not sold' in case the ticket was printed but not sold
  else if (tickets[ticketId] === null) {
    return 'not sold'
  }
  // 'sold to {name}' where {name} is the name of the visitor if the ticket was sold
  else {
    let name = tickets[ticketId]
    return `sold to ${name}`
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

export function simpleTicketStatus(tickets, ticketId) {
  let name = tickets[ticketId]
  return tickets[ticketId] ??= 'invalid ticket !!!' ?? `sold to ${name}`
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */

export function gtcVersion(visitor) {
  return visitor.gtc?.version
}
