import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AuthData = {
  __typename?: 'AuthData';
  token: Scalars['String'];
  user: User;
};

export type BookingInput = {
  address: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  software: Scalars['String'];
};

export type Bookings = {
  __typename?: 'Bookings';
  address: Scalars['String'];
  company: Scalars['String'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  software: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type Envelope = {
  __typename?: 'Envelope';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  contact: ReturnData;
  createBookings: ReturnData;
  createService: Service;
  createTeam: Team;
  createUser: User;
  login: AuthData;
  updateTeam: Team;
};


export type MutationContactArgs = {
  input: ContactInput;
};


export type MutationCreateBookingsArgs = {
  input: BookingInput;
};


export type MutationCreateServiceArgs = {
  serviceInput?: InputMaybe<ServiceInput>;
};


export type MutationCreateTeamArgs = {
  teamInput?: InputMaybe<TeamInput>;
};


export type MutationCreateUserArgs = {
  userInput?: InputMaybe<UserInput>;
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTeamArgs = {
  teamId: Scalars['ID'];
  teamInput?: InputMaybe<TeamInput>;
};

export type Query = {
  __typename?: 'Query';
  booking: Array<Bookings>;
  bookings: Array<Bookings>;
  service: Service;
  services: Array<Service>;
  team: Team;
  teams: Array<Team>;
  user: User;
  users: Array<User>;
};


export type QueryBookingArgs = {
  email: Scalars['String'];
};


export type QueryServiceArgs = {
  serviceId: Scalars['ID'];
};


export type QueryTeamArgs = {
  teamId: Scalars['ID'];
};

export type Result = {
  __typename?: 'Result';
  accepted?: Maybe<Array<Maybe<Scalars['String']>>>;
  envelope?: Maybe<Envelope>;
  envelopeTime?: Maybe<Scalars['Int']>;
  messageId?: Maybe<Scalars['String']>;
  messageSize?: Maybe<Scalars['Int']>;
  messageTime?: Maybe<Scalars['Int']>;
  rejected?: Maybe<Array<Maybe<Scalars['String']>>>;
  response?: Maybe<Scalars['String']>;
};

export type ReturnData = {
  __typename?: 'ReturnData';
  data?: Maybe<Bookings>;
  result?: Maybe<Result>;
};

export type Service = {
  __typename?: 'Service';
  _id: Scalars['ID'];
  category: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type ServiceInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  _id: Scalars['ID'];
  avatar: Scalars['String'];
  department: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['String'];
};

export type TeamInput = {
  avatar: Scalars['String'];
  department: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
  company: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type UserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  company: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthData: ResolverTypeWrapper<AuthData>;
  String: ResolverTypeWrapper<Scalars['String']>;
  BookingInput: BookingInput;
  Bookings: ResolverTypeWrapper<Bookings>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Envelope: ResolverTypeWrapper<Envelope>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ReturnData: ResolverTypeWrapper<ReturnData>;
  Service: ResolverTypeWrapper<Service>;
  ServiceInput: ServiceInput;
  Team: ResolverTypeWrapper<Team>;
  TeamInput: TeamInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthData: AuthData;
  String: Scalars['String'];
  BookingInput: BookingInput;
  Bookings: Bookings;
  ID: Scalars['ID'];
  Contact: Contact;
  ContactInput: ContactInput;
  Date: Scalars['Date'];
  Envelope: Envelope;
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  Result: Result;
  Int: Scalars['Int'];
  ReturnData: ReturnData;
  Service: Service;
  ServiceInput: ServiceInput;
  Team: Team;
  TeamInput: TeamInput;
  User: User;
  UserInput: UserInput;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean'];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthData'] = ResolversParentTypes['AuthData']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookings'] = ResolversParentTypes['Bookings']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  software?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EnvelopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Envelope'] = ResolversParentTypes['Envelope']> = {
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  contact?: Resolver<ResolversTypes['ReturnData'], ParentType, ContextType, RequireFields<MutationContactArgs, 'input'>>;
  createBookings?: Resolver<ResolversTypes['ReturnData'], ParentType, ContextType, RequireFields<MutationCreateBookingsArgs, 'input'>>;
  createService?: Resolver<ResolversTypes['Service'], ParentType, ContextType, Partial<MutationCreateServiceArgs>>;
  createTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, Partial<MutationCreateTeamArgs>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  login?: Resolver<ResolversTypes['AuthData'], ParentType, ContextType, Partial<MutationLoginArgs>>;
  updateTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'teamId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  booking?: Resolver<Array<ResolversTypes['Bookings']>, ParentType, ContextType, RequireFields<QueryBookingArgs, 'email'>>;
  bookings?: Resolver<Array<ResolversTypes['Bookings']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<QueryServiceArgs, 'serviceId'>>;
  services?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<QueryTeamArgs, 'teamId'>>;
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  accepted?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  envelope?: Resolver<Maybe<ResolversTypes['Envelope']>, ParentType, ContextType>;
  envelopeTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  messageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  messageTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rejected?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnData'] = ResolversParentTypes['ReturnData']> = {
  data?: Resolver<Maybe<ResolversTypes['Bookings']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthData?: AuthDataResolvers<ContextType>;
  Bookings?: BookingsResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Envelope?: EnvelopeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  ReturnData?: ReturnDataResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';