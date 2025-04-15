
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AnimeList
 * 
 */
export type AnimeList = $Result.DefaultSelection<Prisma.$AnimeListPayload>
/**
 * Model MangaList
 * 
 */
export type MangaList = $Result.DefaultSelection<Prisma.$MangaListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  WATCHING: 'WATCHING',
  COMPLETED: 'COMPLETED',
  WANT_TO_WATCH: 'WANT_TO_WATCH',
  READING: 'READING',
  WANT_TO_READ: 'WANT_TO_READ'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeList`: Exposes CRUD operations for the **AnimeList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeLists
    * const animeLists = await prisma.animeList.findMany()
    * ```
    */
  get animeList(): Prisma.AnimeListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangaList`: Exposes CRUD operations for the **MangaList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangaLists
    * const mangaLists = await prisma.mangaList.findMany()
    * ```
    */
  get mangaList(): Prisma.MangaListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AnimeList: 'AnimeList',
    MangaList: 'MangaList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "animeList" | "mangaList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AnimeList: {
        payload: Prisma.$AnimeListPayload<ExtArgs>
        fields: Prisma.AnimeListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          findFirst: {
            args: Prisma.AnimeListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          findMany: {
            args: Prisma.AnimeListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>[]
          }
          create: {
            args: Prisma.AnimeListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          createMany: {
            args: Prisma.AnimeListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>[]
          }
          delete: {
            args: Prisma.AnimeListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          update: {
            args: Prisma.AnimeListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          deleteMany: {
            args: Prisma.AnimeListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>[]
          }
          upsert: {
            args: Prisma.AnimeListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeListPayload>
          }
          aggregate: {
            args: Prisma.AnimeListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeList>
          }
          groupBy: {
            args: Prisma.AnimeListGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeListGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeListCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeListCountAggregateOutputType> | number
          }
        }
      }
      MangaList: {
        payload: Prisma.$MangaListPayload<ExtArgs>
        fields: Prisma.MangaListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          findFirst: {
            args: Prisma.MangaListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          findMany: {
            args: Prisma.MangaListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>[]
          }
          create: {
            args: Prisma.MangaListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          createMany: {
            args: Prisma.MangaListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>[]
          }
          delete: {
            args: Prisma.MangaListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          update: {
            args: Prisma.MangaListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          deleteMany: {
            args: Prisma.MangaListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>[]
          }
          upsert: {
            args: Prisma.MangaListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaListPayload>
          }
          aggregate: {
            args: Prisma.MangaListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangaList>
          }
          groupBy: {
            args: Prisma.MangaListGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaListGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaListCountArgs<ExtArgs>
            result: $Utils.Optional<MangaListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    animeList?: AnimeListOmit
    mangaList?: MangaListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    animeList: number
    mangaList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeList?: boolean | UserCountOutputTypeCountAnimeListArgs
    mangaList?: boolean | UserCountOutputTypeCountMangaListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimeListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMangaListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeList?: boolean | User$animeListArgs<ExtArgs>
    mangaList?: boolean | User$mangaListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeList?: boolean | User$animeListArgs<ExtArgs>
    mangaList?: boolean | User$mangaListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      animeList: Prisma.$AnimeListPayload<ExtArgs>[]
      mangaList: Prisma.$MangaListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeList<T extends User$animeListArgs<ExtArgs> = {}>(args?: Subset<T, User$animeListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mangaList<T extends User$mangaListArgs<ExtArgs> = {}>(args?: Subset<T, User$mangaListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.animeList
   */
  export type User$animeListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    where?: AnimeListWhereInput
    orderBy?: AnimeListOrderByWithRelationInput | AnimeListOrderByWithRelationInput[]
    cursor?: AnimeListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeListScalarFieldEnum | AnimeListScalarFieldEnum[]
  }

  /**
   * User.mangaList
   */
  export type User$mangaListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    where?: MangaListWhereInput
    orderBy?: MangaListOrderByWithRelationInput | MangaListOrderByWithRelationInput[]
    cursor?: MangaListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaListScalarFieldEnum | MangaListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AnimeList
   */

  export type AggregateAnimeList = {
    _count: AnimeListCountAggregateOutputType | null
    _min: AnimeListMinAggregateOutputType | null
    _max: AnimeListMaxAggregateOutputType | null
  }

  export type AnimeListMinAggregateOutputType = {
    id: string | null
    userId: string | null
    animeId: string | null
    title: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type AnimeListMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    animeId: string | null
    title: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type AnimeListCountAggregateOutputType = {
    id: number
    userId: number
    animeId: number
    title: number
    status: number
    createdAt: number
    _all: number
  }


  export type AnimeListMinAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    title?: true
    status?: true
    createdAt?: true
  }

  export type AnimeListMaxAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    title?: true
    status?: true
    createdAt?: true
  }

  export type AnimeListCountAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    title?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AnimeListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeList to aggregate.
     */
    where?: AnimeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeLists to fetch.
     */
    orderBy?: AnimeListOrderByWithRelationInput | AnimeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeLists
    **/
    _count?: true | AnimeListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeListMaxAggregateInputType
  }

  export type GetAnimeListAggregateType<T extends AnimeListAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeList[P]>
      : GetScalarType<T[P], AggregateAnimeList[P]>
  }




  export type AnimeListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeListWhereInput
    orderBy?: AnimeListOrderByWithAggregationInput | AnimeListOrderByWithAggregationInput[]
    by: AnimeListScalarFieldEnum[] | AnimeListScalarFieldEnum
    having?: AnimeListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeListCountAggregateInputType | true
    _min?: AnimeListMinAggregateInputType
    _max?: AnimeListMaxAggregateInputType
  }

  export type AnimeListGroupByOutputType = {
    id: string
    userId: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt: Date
    _count: AnimeListCountAggregateOutputType | null
    _min: AnimeListMinAggregateOutputType | null
    _max: AnimeListMaxAggregateOutputType | null
  }

  type GetAnimeListGroupByPayload<T extends AnimeListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeListGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeListGroupByOutputType[P]>
        }
      >
    >


  export type AnimeListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    animeId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeList"]>

  export type AnimeListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    animeId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeList"]>

  export type AnimeListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    animeId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeList"]>

  export type AnimeListSelectScalar = {
    id?: boolean
    userId?: boolean
    animeId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AnimeListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "animeId" | "title" | "status" | "createdAt", ExtArgs["result"]["animeList"]>
  export type AnimeListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnimeListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnimeListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnimeListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      animeId: string
      title: string
      status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["animeList"]>
    composites: {}
  }

  type AnimeListGetPayload<S extends boolean | null | undefined | AnimeListDefaultArgs> = $Result.GetResult<Prisma.$AnimeListPayload, S>

  type AnimeListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeListCountAggregateInputType | true
    }

  export interface AnimeListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeList'], meta: { name: 'AnimeList' } }
    /**
     * Find zero or one AnimeList that matches the filter.
     * @param {AnimeListFindUniqueArgs} args - Arguments to find a AnimeList
     * @example
     * // Get one AnimeList
     * const animeList = await prisma.animeList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeListFindUniqueArgs>(args: SelectSubset<T, AnimeListFindUniqueArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeListFindUniqueOrThrowArgs} args - Arguments to find a AnimeList
     * @example
     * // Get one AnimeList
     * const animeList = await prisma.animeList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeListFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListFindFirstArgs} args - Arguments to find a AnimeList
     * @example
     * // Get one AnimeList
     * const animeList = await prisma.animeList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeListFindFirstArgs>(args?: SelectSubset<T, AnimeListFindFirstArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListFindFirstOrThrowArgs} args - Arguments to find a AnimeList
     * @example
     * // Get one AnimeList
     * const animeList = await prisma.animeList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeListFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeListFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeLists
     * const animeLists = await prisma.animeList.findMany()
     * 
     * // Get first 10 AnimeLists
     * const animeLists = await prisma.animeList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeListWithIdOnly = await prisma.animeList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeListFindManyArgs>(args?: SelectSubset<T, AnimeListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeList.
     * @param {AnimeListCreateArgs} args - Arguments to create a AnimeList.
     * @example
     * // Create one AnimeList
     * const AnimeList = await prisma.animeList.create({
     *   data: {
     *     // ... data to create a AnimeList
     *   }
     * })
     * 
     */
    create<T extends AnimeListCreateArgs>(args: SelectSubset<T, AnimeListCreateArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeLists.
     * @param {AnimeListCreateManyArgs} args - Arguments to create many AnimeLists.
     * @example
     * // Create many AnimeLists
     * const animeList = await prisma.animeList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeListCreateManyArgs>(args?: SelectSubset<T, AnimeListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeLists and returns the data saved in the database.
     * @param {AnimeListCreateManyAndReturnArgs} args - Arguments to create many AnimeLists.
     * @example
     * // Create many AnimeLists
     * const animeList = await prisma.animeList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeLists and only return the `id`
     * const animeListWithIdOnly = await prisma.animeList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeListCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeList.
     * @param {AnimeListDeleteArgs} args - Arguments to delete one AnimeList.
     * @example
     * // Delete one AnimeList
     * const AnimeList = await prisma.animeList.delete({
     *   where: {
     *     // ... filter to delete one AnimeList
     *   }
     * })
     * 
     */
    delete<T extends AnimeListDeleteArgs>(args: SelectSubset<T, AnimeListDeleteArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeList.
     * @param {AnimeListUpdateArgs} args - Arguments to update one AnimeList.
     * @example
     * // Update one AnimeList
     * const animeList = await prisma.animeList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeListUpdateArgs>(args: SelectSubset<T, AnimeListUpdateArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeLists.
     * @param {AnimeListDeleteManyArgs} args - Arguments to filter AnimeLists to delete.
     * @example
     * // Delete a few AnimeLists
     * const { count } = await prisma.animeList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeListDeleteManyArgs>(args?: SelectSubset<T, AnimeListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeLists
     * const animeList = await prisma.animeList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeListUpdateManyArgs>(args: SelectSubset<T, AnimeListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeLists and returns the data updated in the database.
     * @param {AnimeListUpdateManyAndReturnArgs} args - Arguments to update many AnimeLists.
     * @example
     * // Update many AnimeLists
     * const animeList = await prisma.animeList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeLists and only return the `id`
     * const animeListWithIdOnly = await prisma.animeList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeListUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeList.
     * @param {AnimeListUpsertArgs} args - Arguments to update or create a AnimeList.
     * @example
     * // Update or create a AnimeList
     * const animeList = await prisma.animeList.upsert({
     *   create: {
     *     // ... data to create a AnimeList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeList we want to update
     *   }
     * })
     */
    upsert<T extends AnimeListUpsertArgs>(args: SelectSubset<T, AnimeListUpsertArgs<ExtArgs>>): Prisma__AnimeListClient<$Result.GetResult<Prisma.$AnimeListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListCountArgs} args - Arguments to filter AnimeLists to count.
     * @example
     * // Count the number of AnimeLists
     * const count = await prisma.animeList.count({
     *   where: {
     *     // ... the filter for the AnimeLists we want to count
     *   }
     * })
    **/
    count<T extends AnimeListCountArgs>(
      args?: Subset<T, AnimeListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeListAggregateArgs>(args: Subset<T, AnimeListAggregateArgs>): Prisma.PrismaPromise<GetAnimeListAggregateType<T>>

    /**
     * Group by AnimeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeListGroupByArgs['orderBy'] }
        : { orderBy?: AnimeListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeList model
   */
  readonly fields: AnimeListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnimeList model
   */
  interface AnimeListFieldRefs {
    readonly id: FieldRef<"AnimeList", 'String'>
    readonly userId: FieldRef<"AnimeList", 'String'>
    readonly animeId: FieldRef<"AnimeList", 'String'>
    readonly title: FieldRef<"AnimeList", 'String'>
    readonly status: FieldRef<"AnimeList", 'Status'>
    readonly createdAt: FieldRef<"AnimeList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeList findUnique
   */
  export type AnimeListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter, which AnimeList to fetch.
     */
    where: AnimeListWhereUniqueInput
  }

  /**
   * AnimeList findUniqueOrThrow
   */
  export type AnimeListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter, which AnimeList to fetch.
     */
    where: AnimeListWhereUniqueInput
  }

  /**
   * AnimeList findFirst
   */
  export type AnimeListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter, which AnimeList to fetch.
     */
    where?: AnimeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeLists to fetch.
     */
    orderBy?: AnimeListOrderByWithRelationInput | AnimeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeLists.
     */
    cursor?: AnimeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeLists.
     */
    distinct?: AnimeListScalarFieldEnum | AnimeListScalarFieldEnum[]
  }

  /**
   * AnimeList findFirstOrThrow
   */
  export type AnimeListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter, which AnimeList to fetch.
     */
    where?: AnimeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeLists to fetch.
     */
    orderBy?: AnimeListOrderByWithRelationInput | AnimeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeLists.
     */
    cursor?: AnimeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeLists.
     */
    distinct?: AnimeListScalarFieldEnum | AnimeListScalarFieldEnum[]
  }

  /**
   * AnimeList findMany
   */
  export type AnimeListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter, which AnimeLists to fetch.
     */
    where?: AnimeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeLists to fetch.
     */
    orderBy?: AnimeListOrderByWithRelationInput | AnimeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeLists.
     */
    cursor?: AnimeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeLists.
     */
    skip?: number
    distinct?: AnimeListScalarFieldEnum | AnimeListScalarFieldEnum[]
  }

  /**
   * AnimeList create
   */
  export type AnimeListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeList.
     */
    data: XOR<AnimeListCreateInput, AnimeListUncheckedCreateInput>
  }

  /**
   * AnimeList createMany
   */
  export type AnimeListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeLists.
     */
    data: AnimeListCreateManyInput | AnimeListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeList createManyAndReturn
   */
  export type AnimeListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeLists.
     */
    data: AnimeListCreateManyInput | AnimeListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeList update
   */
  export type AnimeListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeList.
     */
    data: XOR<AnimeListUpdateInput, AnimeListUncheckedUpdateInput>
    /**
     * Choose, which AnimeList to update.
     */
    where: AnimeListWhereUniqueInput
  }

  /**
   * AnimeList updateMany
   */
  export type AnimeListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeLists.
     */
    data: XOR<AnimeListUpdateManyMutationInput, AnimeListUncheckedUpdateManyInput>
    /**
     * Filter which AnimeLists to update
     */
    where?: AnimeListWhereInput
    /**
     * Limit how many AnimeLists to update.
     */
    limit?: number
  }

  /**
   * AnimeList updateManyAndReturn
   */
  export type AnimeListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * The data used to update AnimeLists.
     */
    data: XOR<AnimeListUpdateManyMutationInput, AnimeListUncheckedUpdateManyInput>
    /**
     * Filter which AnimeLists to update
     */
    where?: AnimeListWhereInput
    /**
     * Limit how many AnimeLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeList upsert
   */
  export type AnimeListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeList to update in case it exists.
     */
    where: AnimeListWhereUniqueInput
    /**
     * In case the AnimeList found by the `where` argument doesn't exist, create a new AnimeList with this data.
     */
    create: XOR<AnimeListCreateInput, AnimeListUncheckedCreateInput>
    /**
     * In case the AnimeList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeListUpdateInput, AnimeListUncheckedUpdateInput>
  }

  /**
   * AnimeList delete
   */
  export type AnimeListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
    /**
     * Filter which AnimeList to delete.
     */
    where: AnimeListWhereUniqueInput
  }

  /**
   * AnimeList deleteMany
   */
  export type AnimeListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeLists to delete
     */
    where?: AnimeListWhereInput
    /**
     * Limit how many AnimeLists to delete.
     */
    limit?: number
  }

  /**
   * AnimeList without action
   */
  export type AnimeListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeList
     */
    select?: AnimeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeList
     */
    omit?: AnimeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeListInclude<ExtArgs> | null
  }


  /**
   * Model MangaList
   */

  export type AggregateMangaList = {
    _count: MangaListCountAggregateOutputType | null
    _min: MangaListMinAggregateOutputType | null
    _max: MangaListMaxAggregateOutputType | null
  }

  export type MangaListMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mangaId: string | null
    title: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type MangaListMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mangaId: string | null
    title: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type MangaListCountAggregateOutputType = {
    id: number
    userId: number
    mangaId: number
    title: number
    status: number
    createdAt: number
    _all: number
  }


  export type MangaListMinAggregateInputType = {
    id?: true
    userId?: true
    mangaId?: true
    title?: true
    status?: true
    createdAt?: true
  }

  export type MangaListMaxAggregateInputType = {
    id?: true
    userId?: true
    mangaId?: true
    title?: true
    status?: true
    createdAt?: true
  }

  export type MangaListCountAggregateInputType = {
    id?: true
    userId?: true
    mangaId?: true
    title?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MangaListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaList to aggregate.
     */
    where?: MangaListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaLists to fetch.
     */
    orderBy?: MangaListOrderByWithRelationInput | MangaListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangaLists
    **/
    _count?: true | MangaListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaListMaxAggregateInputType
  }

  export type GetMangaListAggregateType<T extends MangaListAggregateArgs> = {
        [P in keyof T & keyof AggregateMangaList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangaList[P]>
      : GetScalarType<T[P], AggregateMangaList[P]>
  }




  export type MangaListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaListWhereInput
    orderBy?: MangaListOrderByWithAggregationInput | MangaListOrderByWithAggregationInput[]
    by: MangaListScalarFieldEnum[] | MangaListScalarFieldEnum
    having?: MangaListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaListCountAggregateInputType | true
    _min?: MangaListMinAggregateInputType
    _max?: MangaListMaxAggregateInputType
  }

  export type MangaListGroupByOutputType = {
    id: string
    userId: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt: Date
    _count: MangaListCountAggregateOutputType | null
    _min: MangaListMinAggregateOutputType | null
    _max: MangaListMaxAggregateOutputType | null
  }

  type GetMangaListGroupByPayload<T extends MangaListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaListGroupByOutputType[P]>
            : GetScalarType<T[P], MangaListGroupByOutputType[P]>
        }
      >
    >


  export type MangaListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mangaId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaList"]>

  export type MangaListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mangaId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaList"]>

  export type MangaListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mangaId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaList"]>

  export type MangaListSelectScalar = {
    id?: boolean
    userId?: boolean
    mangaId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MangaListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mangaId" | "title" | "status" | "createdAt", ExtArgs["result"]["mangaList"]>
  export type MangaListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MangaListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MangaListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MangaListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangaList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mangaId: string
      title: string
      status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["mangaList"]>
    composites: {}
  }

  type MangaListGetPayload<S extends boolean | null | undefined | MangaListDefaultArgs> = $Result.GetResult<Prisma.$MangaListPayload, S>

  type MangaListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaListCountAggregateInputType | true
    }

  export interface MangaListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangaList'], meta: { name: 'MangaList' } }
    /**
     * Find zero or one MangaList that matches the filter.
     * @param {MangaListFindUniqueArgs} args - Arguments to find a MangaList
     * @example
     * // Get one MangaList
     * const mangaList = await prisma.mangaList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaListFindUniqueArgs>(args: SelectSubset<T, MangaListFindUniqueArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangaList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaListFindUniqueOrThrowArgs} args - Arguments to find a MangaList
     * @example
     * // Get one MangaList
     * const mangaList = await prisma.mangaList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaListFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListFindFirstArgs} args - Arguments to find a MangaList
     * @example
     * // Get one MangaList
     * const mangaList = await prisma.mangaList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaListFindFirstArgs>(args?: SelectSubset<T, MangaListFindFirstArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListFindFirstOrThrowArgs} args - Arguments to find a MangaList
     * @example
     * // Get one MangaList
     * const mangaList = await prisma.mangaList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaListFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaListFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangaLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangaLists
     * const mangaLists = await prisma.mangaList.findMany()
     * 
     * // Get first 10 MangaLists
     * const mangaLists = await prisma.mangaList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaListWithIdOnly = await prisma.mangaList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangaListFindManyArgs>(args?: SelectSubset<T, MangaListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangaList.
     * @param {MangaListCreateArgs} args - Arguments to create a MangaList.
     * @example
     * // Create one MangaList
     * const MangaList = await prisma.mangaList.create({
     *   data: {
     *     // ... data to create a MangaList
     *   }
     * })
     * 
     */
    create<T extends MangaListCreateArgs>(args: SelectSubset<T, MangaListCreateArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangaLists.
     * @param {MangaListCreateManyArgs} args - Arguments to create many MangaLists.
     * @example
     * // Create many MangaLists
     * const mangaList = await prisma.mangaList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaListCreateManyArgs>(args?: SelectSubset<T, MangaListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangaLists and returns the data saved in the database.
     * @param {MangaListCreateManyAndReturnArgs} args - Arguments to create many MangaLists.
     * @example
     * // Create many MangaLists
     * const mangaList = await prisma.mangaList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangaLists and only return the `id`
     * const mangaListWithIdOnly = await prisma.mangaList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaListCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangaList.
     * @param {MangaListDeleteArgs} args - Arguments to delete one MangaList.
     * @example
     * // Delete one MangaList
     * const MangaList = await prisma.mangaList.delete({
     *   where: {
     *     // ... filter to delete one MangaList
     *   }
     * })
     * 
     */
    delete<T extends MangaListDeleteArgs>(args: SelectSubset<T, MangaListDeleteArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangaList.
     * @param {MangaListUpdateArgs} args - Arguments to update one MangaList.
     * @example
     * // Update one MangaList
     * const mangaList = await prisma.mangaList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaListUpdateArgs>(args: SelectSubset<T, MangaListUpdateArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangaLists.
     * @param {MangaListDeleteManyArgs} args - Arguments to filter MangaLists to delete.
     * @example
     * // Delete a few MangaLists
     * const { count } = await prisma.mangaList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaListDeleteManyArgs>(args?: SelectSubset<T, MangaListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangaLists
     * const mangaList = await prisma.mangaList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaListUpdateManyArgs>(args: SelectSubset<T, MangaListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaLists and returns the data updated in the database.
     * @param {MangaListUpdateManyAndReturnArgs} args - Arguments to update many MangaLists.
     * @example
     * // Update many MangaLists
     * const mangaList = await prisma.mangaList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangaLists and only return the `id`
     * const mangaListWithIdOnly = await prisma.mangaList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaListUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangaList.
     * @param {MangaListUpsertArgs} args - Arguments to update or create a MangaList.
     * @example
     * // Update or create a MangaList
     * const mangaList = await prisma.mangaList.upsert({
     *   create: {
     *     // ... data to create a MangaList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangaList we want to update
     *   }
     * })
     */
    upsert<T extends MangaListUpsertArgs>(args: SelectSubset<T, MangaListUpsertArgs<ExtArgs>>): Prisma__MangaListClient<$Result.GetResult<Prisma.$MangaListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangaLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListCountArgs} args - Arguments to filter MangaLists to count.
     * @example
     * // Count the number of MangaLists
     * const count = await prisma.mangaList.count({
     *   where: {
     *     // ... the filter for the MangaLists we want to count
     *   }
     * })
    **/
    count<T extends MangaListCountArgs>(
      args?: Subset<T, MangaListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangaList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangaListAggregateArgs>(args: Subset<T, MangaListAggregateArgs>): Prisma.PrismaPromise<GetMangaListAggregateType<T>>

    /**
     * Group by MangaList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangaListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaListGroupByArgs['orderBy'] }
        : { orderBy?: MangaListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangaListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangaList model
   */
  readonly fields: MangaListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangaList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MangaList model
   */
  interface MangaListFieldRefs {
    readonly id: FieldRef<"MangaList", 'String'>
    readonly userId: FieldRef<"MangaList", 'String'>
    readonly mangaId: FieldRef<"MangaList", 'String'>
    readonly title: FieldRef<"MangaList", 'String'>
    readonly status: FieldRef<"MangaList", 'Status'>
    readonly createdAt: FieldRef<"MangaList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MangaList findUnique
   */
  export type MangaListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter, which MangaList to fetch.
     */
    where: MangaListWhereUniqueInput
  }

  /**
   * MangaList findUniqueOrThrow
   */
  export type MangaListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter, which MangaList to fetch.
     */
    where: MangaListWhereUniqueInput
  }

  /**
   * MangaList findFirst
   */
  export type MangaListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter, which MangaList to fetch.
     */
    where?: MangaListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaLists to fetch.
     */
    orderBy?: MangaListOrderByWithRelationInput | MangaListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaLists.
     */
    cursor?: MangaListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaLists.
     */
    distinct?: MangaListScalarFieldEnum | MangaListScalarFieldEnum[]
  }

  /**
   * MangaList findFirstOrThrow
   */
  export type MangaListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter, which MangaList to fetch.
     */
    where?: MangaListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaLists to fetch.
     */
    orderBy?: MangaListOrderByWithRelationInput | MangaListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaLists.
     */
    cursor?: MangaListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaLists.
     */
    distinct?: MangaListScalarFieldEnum | MangaListScalarFieldEnum[]
  }

  /**
   * MangaList findMany
   */
  export type MangaListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter, which MangaLists to fetch.
     */
    where?: MangaListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaLists to fetch.
     */
    orderBy?: MangaListOrderByWithRelationInput | MangaListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangaLists.
     */
    cursor?: MangaListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaLists.
     */
    skip?: number
    distinct?: MangaListScalarFieldEnum | MangaListScalarFieldEnum[]
  }

  /**
   * MangaList create
   */
  export type MangaListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * The data needed to create a MangaList.
     */
    data: XOR<MangaListCreateInput, MangaListUncheckedCreateInput>
  }

  /**
   * MangaList createMany
   */
  export type MangaListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangaLists.
     */
    data: MangaListCreateManyInput | MangaListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MangaList createManyAndReturn
   */
  export type MangaListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * The data used to create many MangaLists.
     */
    data: MangaListCreateManyInput | MangaListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaList update
   */
  export type MangaListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * The data needed to update a MangaList.
     */
    data: XOR<MangaListUpdateInput, MangaListUncheckedUpdateInput>
    /**
     * Choose, which MangaList to update.
     */
    where: MangaListWhereUniqueInput
  }

  /**
   * MangaList updateMany
   */
  export type MangaListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangaLists.
     */
    data: XOR<MangaListUpdateManyMutationInput, MangaListUncheckedUpdateManyInput>
    /**
     * Filter which MangaLists to update
     */
    where?: MangaListWhereInput
    /**
     * Limit how many MangaLists to update.
     */
    limit?: number
  }

  /**
   * MangaList updateManyAndReturn
   */
  export type MangaListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * The data used to update MangaLists.
     */
    data: XOR<MangaListUpdateManyMutationInput, MangaListUncheckedUpdateManyInput>
    /**
     * Filter which MangaLists to update
     */
    where?: MangaListWhereInput
    /**
     * Limit how many MangaLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaList upsert
   */
  export type MangaListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * The filter to search for the MangaList to update in case it exists.
     */
    where: MangaListWhereUniqueInput
    /**
     * In case the MangaList found by the `where` argument doesn't exist, create a new MangaList with this data.
     */
    create: XOR<MangaListCreateInput, MangaListUncheckedCreateInput>
    /**
     * In case the MangaList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaListUpdateInput, MangaListUncheckedUpdateInput>
  }

  /**
   * MangaList delete
   */
  export type MangaListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
    /**
     * Filter which MangaList to delete.
     */
    where: MangaListWhereUniqueInput
  }

  /**
   * MangaList deleteMany
   */
  export type MangaListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaLists to delete
     */
    where?: MangaListWhereInput
    /**
     * Limit how many MangaLists to delete.
     */
    limit?: number
  }

  /**
   * MangaList without action
   */
  export type MangaListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaList
     */
    select?: MangaListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaList
     */
    omit?: MangaListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnimeListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    animeId: 'animeId',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AnimeListScalarFieldEnum = (typeof AnimeListScalarFieldEnum)[keyof typeof AnimeListScalarFieldEnum]


  export const MangaListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mangaId: 'mangaId',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MangaListScalarFieldEnum = (typeof MangaListScalarFieldEnum)[keyof typeof MangaListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    animeList?: AnimeListListRelationFilter
    mangaList?: MangaListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeList?: AnimeListOrderByRelationAggregateInput
    mangaList?: MangaListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    animeList?: AnimeListListRelationFilter
    mangaList?: MangaListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnimeListWhereInput = {
    AND?: AnimeListWhereInput | AnimeListWhereInput[]
    OR?: AnimeListWhereInput[]
    NOT?: AnimeListWhereInput | AnimeListWhereInput[]
    id?: StringFilter<"AnimeList"> | string
    userId?: StringFilter<"AnimeList"> | string
    animeId?: StringFilter<"AnimeList"> | string
    title?: StringFilter<"AnimeList"> | string
    status?: EnumStatusFilter<"AnimeList"> | $Enums.Status
    createdAt?: DateTimeFilter<"AnimeList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnimeListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AnimeListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnimeListWhereInput | AnimeListWhereInput[]
    OR?: AnimeListWhereInput[]
    NOT?: AnimeListWhereInput | AnimeListWhereInput[]
    userId?: StringFilter<"AnimeList"> | string
    animeId?: StringFilter<"AnimeList"> | string
    title?: StringFilter<"AnimeList"> | string
    status?: EnumStatusFilter<"AnimeList"> | $Enums.Status
    createdAt?: DateTimeFilter<"AnimeList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnimeListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AnimeListCountOrderByAggregateInput
    _max?: AnimeListMaxOrderByAggregateInput
    _min?: AnimeListMinOrderByAggregateInput
  }

  export type AnimeListScalarWhereWithAggregatesInput = {
    AND?: AnimeListScalarWhereWithAggregatesInput | AnimeListScalarWhereWithAggregatesInput[]
    OR?: AnimeListScalarWhereWithAggregatesInput[]
    NOT?: AnimeListScalarWhereWithAggregatesInput | AnimeListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeList"> | string
    userId?: StringWithAggregatesFilter<"AnimeList"> | string
    animeId?: StringWithAggregatesFilter<"AnimeList"> | string
    title?: StringWithAggregatesFilter<"AnimeList"> | string
    status?: EnumStatusWithAggregatesFilter<"AnimeList"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"AnimeList"> | Date | string
  }

  export type MangaListWhereInput = {
    AND?: MangaListWhereInput | MangaListWhereInput[]
    OR?: MangaListWhereInput[]
    NOT?: MangaListWhereInput | MangaListWhereInput[]
    id?: StringFilter<"MangaList"> | string
    userId?: StringFilter<"MangaList"> | string
    mangaId?: StringFilter<"MangaList"> | string
    title?: StringFilter<"MangaList"> | string
    status?: EnumStatusFilter<"MangaList"> | $Enums.Status
    createdAt?: DateTimeFilter<"MangaList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MangaListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mangaId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MangaListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MangaListWhereInput | MangaListWhereInput[]
    OR?: MangaListWhereInput[]
    NOT?: MangaListWhereInput | MangaListWhereInput[]
    userId?: StringFilter<"MangaList"> | string
    mangaId?: StringFilter<"MangaList"> | string
    title?: StringFilter<"MangaList"> | string
    status?: EnumStatusFilter<"MangaList"> | $Enums.Status
    createdAt?: DateTimeFilter<"MangaList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MangaListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mangaId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MangaListCountOrderByAggregateInput
    _max?: MangaListMaxOrderByAggregateInput
    _min?: MangaListMinOrderByAggregateInput
  }

  export type MangaListScalarWhereWithAggregatesInput = {
    AND?: MangaListScalarWhereWithAggregatesInput | MangaListScalarWhereWithAggregatesInput[]
    OR?: MangaListScalarWhereWithAggregatesInput[]
    NOT?: MangaListScalarWhereWithAggregatesInput | MangaListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MangaList"> | string
    userId?: StringWithAggregatesFilter<"MangaList"> | string
    mangaId?: StringWithAggregatesFilter<"MangaList"> | string
    title?: StringWithAggregatesFilter<"MangaList"> | string
    status?: EnumStatusWithAggregatesFilter<"MangaList"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"MangaList"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeList?: AnimeListCreateNestedManyWithoutUserInput
    mangaList?: MangaListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeList?: AnimeListUncheckedCreateNestedManyWithoutUserInput
    mangaList?: MangaListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeList?: AnimeListUpdateManyWithoutUserNestedInput
    mangaList?: MangaListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeList?: AnimeListUncheckedUpdateManyWithoutUserNestedInput
    mangaList?: MangaListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeListCreateInput = {
    id?: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeListInput
  }

  export type AnimeListUncheckedCreateInput = {
    id?: string
    userId: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type AnimeListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeListNestedInput
  }

  export type AnimeListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeListCreateManyInput = {
    id?: string
    userId: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type AnimeListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListCreateInput = {
    id?: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMangaListInput
  }

  export type MangaListUncheckedCreateInput = {
    id?: string
    userId: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type MangaListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMangaListNestedInput
  }

  export type MangaListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListCreateManyInput = {
    id?: string
    userId: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type MangaListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnimeListListRelationFilter = {
    every?: AnimeListWhereInput
    some?: AnimeListWhereInput
    none?: AnimeListWhereInput
  }

  export type MangaListListRelationFilter = {
    every?: MangaListWhereInput
    some?: MangaListWhereInput
    none?: MangaListWhereInput
  }

  export type AnimeListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangaListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnimeListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type MangaListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mangaId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MangaListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mangaId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MangaListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mangaId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeListCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput> | AnimeListCreateWithoutUserInput[] | AnimeListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeListCreateOrConnectWithoutUserInput | AnimeListCreateOrConnectWithoutUserInput[]
    createMany?: AnimeListCreateManyUserInputEnvelope
    connect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
  }

  export type MangaListCreateNestedManyWithoutUserInput = {
    create?: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput> | MangaListCreateWithoutUserInput[] | MangaListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangaListCreateOrConnectWithoutUserInput | MangaListCreateOrConnectWithoutUserInput[]
    createMany?: MangaListCreateManyUserInputEnvelope
    connect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
  }

  export type AnimeListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput> | AnimeListCreateWithoutUserInput[] | AnimeListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeListCreateOrConnectWithoutUserInput | AnimeListCreateOrConnectWithoutUserInput[]
    createMany?: AnimeListCreateManyUserInputEnvelope
    connect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
  }

  export type MangaListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput> | MangaListCreateWithoutUserInput[] | MangaListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangaListCreateOrConnectWithoutUserInput | MangaListCreateOrConnectWithoutUserInput[]
    createMany?: MangaListCreateManyUserInputEnvelope
    connect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimeListUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput> | AnimeListCreateWithoutUserInput[] | AnimeListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeListCreateOrConnectWithoutUserInput | AnimeListCreateOrConnectWithoutUserInput[]
    upsert?: AnimeListUpsertWithWhereUniqueWithoutUserInput | AnimeListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeListCreateManyUserInputEnvelope
    set?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    disconnect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    delete?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    connect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    update?: AnimeListUpdateWithWhereUniqueWithoutUserInput | AnimeListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeListUpdateManyWithWhereWithoutUserInput | AnimeListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeListScalarWhereInput | AnimeListScalarWhereInput[]
  }

  export type MangaListUpdateManyWithoutUserNestedInput = {
    create?: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput> | MangaListCreateWithoutUserInput[] | MangaListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangaListCreateOrConnectWithoutUserInput | MangaListCreateOrConnectWithoutUserInput[]
    upsert?: MangaListUpsertWithWhereUniqueWithoutUserInput | MangaListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MangaListCreateManyUserInputEnvelope
    set?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    disconnect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    delete?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    connect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    update?: MangaListUpdateWithWhereUniqueWithoutUserInput | MangaListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MangaListUpdateManyWithWhereWithoutUserInput | MangaListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MangaListScalarWhereInput | MangaListScalarWhereInput[]
  }

  export type AnimeListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput> | AnimeListCreateWithoutUserInput[] | AnimeListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeListCreateOrConnectWithoutUserInput | AnimeListCreateOrConnectWithoutUserInput[]
    upsert?: AnimeListUpsertWithWhereUniqueWithoutUserInput | AnimeListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeListCreateManyUserInputEnvelope
    set?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    disconnect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    delete?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    connect?: AnimeListWhereUniqueInput | AnimeListWhereUniqueInput[]
    update?: AnimeListUpdateWithWhereUniqueWithoutUserInput | AnimeListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeListUpdateManyWithWhereWithoutUserInput | AnimeListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeListScalarWhereInput | AnimeListScalarWhereInput[]
  }

  export type MangaListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput> | MangaListCreateWithoutUserInput[] | MangaListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangaListCreateOrConnectWithoutUserInput | MangaListCreateOrConnectWithoutUserInput[]
    upsert?: MangaListUpsertWithWhereUniqueWithoutUserInput | MangaListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MangaListCreateManyUserInputEnvelope
    set?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    disconnect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    delete?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    connect?: MangaListWhereUniqueInput | MangaListWhereUniqueInput[]
    update?: MangaListUpdateWithWhereUniqueWithoutUserInput | MangaListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MangaListUpdateManyWithWhereWithoutUserInput | MangaListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MangaListScalarWhereInput | MangaListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnimeListInput = {
    create?: XOR<UserCreateWithoutAnimeListInput, UserUncheckedCreateWithoutAnimeListInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeListInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutAnimeListNestedInput = {
    create?: XOR<UserCreateWithoutAnimeListInput, UserUncheckedCreateWithoutAnimeListInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeListInput
    upsert?: UserUpsertWithoutAnimeListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimeListInput, UserUpdateWithoutAnimeListInput>, UserUncheckedUpdateWithoutAnimeListInput>
  }

  export type UserCreateNestedOneWithoutMangaListInput = {
    create?: XOR<UserCreateWithoutMangaListInput, UserUncheckedCreateWithoutMangaListInput>
    connectOrCreate?: UserCreateOrConnectWithoutMangaListInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMangaListNestedInput = {
    create?: XOR<UserCreateWithoutMangaListInput, UserUncheckedCreateWithoutMangaListInput>
    connectOrCreate?: UserCreateOrConnectWithoutMangaListInput
    upsert?: UserUpsertWithoutMangaListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMangaListInput, UserUpdateWithoutMangaListInput>, UserUncheckedUpdateWithoutMangaListInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type AnimeListCreateWithoutUserInput = {
    id?: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type AnimeListUncheckedCreateWithoutUserInput = {
    id?: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type AnimeListCreateOrConnectWithoutUserInput = {
    where: AnimeListWhereUniqueInput
    create: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput>
  }

  export type AnimeListCreateManyUserInputEnvelope = {
    data: AnimeListCreateManyUserInput | AnimeListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MangaListCreateWithoutUserInput = {
    id?: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type MangaListUncheckedCreateWithoutUserInput = {
    id?: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type MangaListCreateOrConnectWithoutUserInput = {
    where: MangaListWhereUniqueInput
    create: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput>
  }

  export type MangaListCreateManyUserInputEnvelope = {
    data: MangaListCreateManyUserInput | MangaListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeListUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeListWhereUniqueInput
    update: XOR<AnimeListUpdateWithoutUserInput, AnimeListUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeListCreateWithoutUserInput, AnimeListUncheckedCreateWithoutUserInput>
  }

  export type AnimeListUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeListWhereUniqueInput
    data: XOR<AnimeListUpdateWithoutUserInput, AnimeListUncheckedUpdateWithoutUserInput>
  }

  export type AnimeListUpdateManyWithWhereWithoutUserInput = {
    where: AnimeListScalarWhereInput
    data: XOR<AnimeListUpdateManyMutationInput, AnimeListUncheckedUpdateManyWithoutUserInput>
  }

  export type AnimeListScalarWhereInput = {
    AND?: AnimeListScalarWhereInput | AnimeListScalarWhereInput[]
    OR?: AnimeListScalarWhereInput[]
    NOT?: AnimeListScalarWhereInput | AnimeListScalarWhereInput[]
    id?: StringFilter<"AnimeList"> | string
    userId?: StringFilter<"AnimeList"> | string
    animeId?: StringFilter<"AnimeList"> | string
    title?: StringFilter<"AnimeList"> | string
    status?: EnumStatusFilter<"AnimeList"> | $Enums.Status
    createdAt?: DateTimeFilter<"AnimeList"> | Date | string
  }

  export type MangaListUpsertWithWhereUniqueWithoutUserInput = {
    where: MangaListWhereUniqueInput
    update: XOR<MangaListUpdateWithoutUserInput, MangaListUncheckedUpdateWithoutUserInput>
    create: XOR<MangaListCreateWithoutUserInput, MangaListUncheckedCreateWithoutUserInput>
  }

  export type MangaListUpdateWithWhereUniqueWithoutUserInput = {
    where: MangaListWhereUniqueInput
    data: XOR<MangaListUpdateWithoutUserInput, MangaListUncheckedUpdateWithoutUserInput>
  }

  export type MangaListUpdateManyWithWhereWithoutUserInput = {
    where: MangaListScalarWhereInput
    data: XOR<MangaListUpdateManyMutationInput, MangaListUncheckedUpdateManyWithoutUserInput>
  }

  export type MangaListScalarWhereInput = {
    AND?: MangaListScalarWhereInput | MangaListScalarWhereInput[]
    OR?: MangaListScalarWhereInput[]
    NOT?: MangaListScalarWhereInput | MangaListScalarWhereInput[]
    id?: StringFilter<"MangaList"> | string
    userId?: StringFilter<"MangaList"> | string
    mangaId?: StringFilter<"MangaList"> | string
    title?: StringFilter<"MangaList"> | string
    status?: EnumStatusFilter<"MangaList"> | $Enums.Status
    createdAt?: DateTimeFilter<"MangaList"> | Date | string
  }

  export type UserCreateWithoutAnimeListInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mangaList?: MangaListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnimeListInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mangaList?: MangaListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnimeListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimeListInput, UserUncheckedCreateWithoutAnimeListInput>
  }

  export type UserUpsertWithoutAnimeListInput = {
    update: XOR<UserUpdateWithoutAnimeListInput, UserUncheckedUpdateWithoutAnimeListInput>
    create: XOR<UserCreateWithoutAnimeListInput, UserUncheckedCreateWithoutAnimeListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimeListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimeListInput, UserUncheckedUpdateWithoutAnimeListInput>
  }

  export type UserUpdateWithoutAnimeListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaList?: MangaListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimeListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaList?: MangaListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMangaListInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeList?: AnimeListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMangaListInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeList?: AnimeListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMangaListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMangaListInput, UserUncheckedCreateWithoutMangaListInput>
  }

  export type UserUpsertWithoutMangaListInput = {
    update: XOR<UserUpdateWithoutMangaListInput, UserUncheckedUpdateWithoutMangaListInput>
    create: XOR<UserCreateWithoutMangaListInput, UserUncheckedCreateWithoutMangaListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMangaListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMangaListInput, UserUncheckedUpdateWithoutMangaListInput>
  }

  export type UserUpdateWithoutMangaListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeList?: AnimeListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMangaListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeList?: AnimeListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimeListCreateManyUserInput = {
    id?: string
    animeId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type MangaListCreateManyUserInput = {
    id?: string
    mangaId: string
    title: string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type AnimeListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}