import knex from 'knex'
import { config } from 'dotenv'
import { User, UserChallenge, Result, LOCATION, NACIONALITY, Casino,  } from './model/interfaces';

config()

export const performPurchase = (user: User, value: number): User | undefined => {
    if(user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}

export function verifyAge(casino: Casino, users: UserChallenge[]): Result {
    const allowed: UserChallenge[] = [];
    const unallowed: UserChallenge[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }

  export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    },
  });