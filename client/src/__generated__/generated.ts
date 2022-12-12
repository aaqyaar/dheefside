import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Object: any;
  Void: any;
};

export type AuthData = {
  __typename?: 'AuthData';
  isAuth: Scalars['Boolean'];
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

export type BookingsResultData = {
  __typename?: 'BookingsResultData';
  accepted: Array<Scalars['String']>;
  envelope: BookingsResultEnvelope;
  envelopeTime: Scalars['Int'];
  messageId: Scalars['String'];
  messageTime: Scalars['Int'];
  rejected: Array<Scalars['String']>;
  response: Scalars['String'];
};

export type BookingsResultEnvelope = {
  __typename?: 'BookingsResultEnvelope';
  from: Scalars['String'];
  to: Array<Scalars['String']>;
};

export type ContactInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactResult = {
  __typename?: 'ContactResult';
  result: ContactResultData;
};

export type ContactResultData = {
  __typename?: 'ContactResultData';
  accepted: Array<Scalars['String']>;
  envelope: ContactResultEnvelope;
  envelopeTime: Scalars['Int'];
  messageId: Scalars['String'];
  messageTime: Scalars['Int'];
  rejected: Array<Scalars['String']>;
  response: Scalars['String'];
};

export type ContactResultEnvelope = {
  __typename?: 'ContactResultEnvelope';
  from: Scalars['String'];
  to: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  contact: ContactResult;
  createBookings: ReturnData;
  createUser: User;
  login: AuthData;
  resendCode: ResendCodeResponse;
  verifyCode: Scalars['Void'];
};


export type MutationContactArgs = {
  input: ContactInput;
};


export type MutationCreateBookingsArgs = {
  input: BookingInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResendCodeArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyCodeArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  booking: Array<Bookings>;
  bookings: Array<Bookings>;
  users: Array<User>;
};


export type QueryBookingArgs = {
  email: Scalars['String'];
};

export type ResendCodeResponse = {
  __typename?: 'ResendCodeResponse';
  data: Scalars['Void'];
};

export type ReturnData = {
  __typename?: 'ReturnData';
  data: Bookings;
  result: BookingsResultData;
};

export type TCodeDeliveryDetails = {
  __typename?: 'TCodeDeliveryDetails';
  AttributeName: Scalars['String'];
  DeliveryMedium: Scalars['String'];
  Destination: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  avatar: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthData', token: string, user: { __typename?: 'User', _id: string, name: string, email: string, avatar: string, password: string } } };

export type RegisterMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, name: string, email: string, avatar: string } };

export type VerifyCodeMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;


export type VerifyCodeMutation = { __typename?: 'Mutation', verifyCode: any };

export type BookDemoMutationVariables = Exact<{
  input: BookingInput;
}>;


export type BookDemoMutation = { __typename?: 'Mutation', createBookings: { __typename?: 'ReturnData', data: { __typename?: 'Bookings', firstName: string, lastName: string, email: string, phone: string, address: string, company: string, software: string }, result: { __typename?: 'BookingsResultData', accepted: Array<string>, messageId: string, envelopeTime: number, messageTime: number, response: string, rejected: Array<string>, envelope: { __typename?: 'BookingsResultEnvelope', from: string, to: Array<string> } } } };

export type ContactMutationVariables = Exact<{
  input: ContactInput;
}>;


export type ContactMutation = { __typename?: 'Mutation', contact: { __typename?: 'ContactResult', result: { __typename?: 'ContactResultData', accepted: Array<string>, messageId: string, envelopeTime: number, messageTime: number, response: string, rejected: Array<string>, envelope: { __typename?: 'ContactResultEnvelope', from: string, to: Array<string> } } } };

export type GetBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookingsQuery = { __typename?: 'Query', bookings: Array<{ __typename?: 'Bookings', firstName: string, lastName: string, email: string, phone: string, company: string, software: string, address: string, createdAt: any }> };

export type GetBookingQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetBookingQuery = { __typename?: 'Query', booking: Array<{ __typename?: 'Bookings', firstName: string, lastName: string, email: string, phone: string, company: string, software: string, address: string, createdAt: any }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, name: string, email: string }> };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      _id
      name
      email
      avatar
      password
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($userInput: UserInput!) {
  createUser(userInput: $userInput) {
    _id
    name
    email
    avatar
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyCodeDocument = gql`
    mutation verifyCode($email: String!, $code: String!) {
  verifyCode(email: $email, code: $code)
}
    `;
export type VerifyCodeMutationFn = Apollo.MutationFunction<VerifyCodeMutation, VerifyCodeMutationVariables>;

/**
 * __useVerifyCodeMutation__
 *
 * To run a mutation, you first call `useVerifyCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCodeMutation, { data, loading, error }] = useVerifyCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyCodeMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCodeMutation, VerifyCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(VerifyCodeDocument, options);
      }
export type VerifyCodeMutationHookResult = ReturnType<typeof useVerifyCodeMutation>;
export type VerifyCodeMutationResult = Apollo.MutationResult<VerifyCodeMutation>;
export type VerifyCodeMutationOptions = Apollo.BaseMutationOptions<VerifyCodeMutation, VerifyCodeMutationVariables>;
export const BookDemoDocument = gql`
    mutation BookDemo($input: BookingInput!) {
  createBookings(input: $input) {
    data {
      firstName
      lastName
      email
      phone
      address
      company
      software
    }
    result {
      accepted
      messageId
      envelopeTime
      envelope {
        from
        to
      }
      messageTime
      response
      rejected
    }
  }
}
    `;
export type BookDemoMutationFn = Apollo.MutationFunction<BookDemoMutation, BookDemoMutationVariables>;

/**
 * __useBookDemoMutation__
 *
 * To run a mutation, you first call `useBookDemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookDemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookDemoMutation, { data, loading, error }] = useBookDemoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBookDemoMutation(baseOptions?: Apollo.MutationHookOptions<BookDemoMutation, BookDemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BookDemoMutation, BookDemoMutationVariables>(BookDemoDocument, options);
      }
export type BookDemoMutationHookResult = ReturnType<typeof useBookDemoMutation>;
export type BookDemoMutationResult = Apollo.MutationResult<BookDemoMutation>;
export type BookDemoMutationOptions = Apollo.BaseMutationOptions<BookDemoMutation, BookDemoMutationVariables>;
export const ContactDocument = gql`
    mutation Contact($input: ContactInput!) {
  contact(input: $input) {
    result {
      accepted
      messageId
      envelopeTime
      envelope {
        from
        to
      }
      messageTime
      response
      rejected
    }
  }
}
    `;
export type ContactMutationFn = Apollo.MutationFunction<ContactMutation, ContactMutationVariables>;

/**
 * __useContactMutation__
 *
 * To run a mutation, you first call `useContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMutation, { data, loading, error }] = useContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactMutation(baseOptions?: Apollo.MutationHookOptions<ContactMutation, ContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactMutation, ContactMutationVariables>(ContactDocument, options);
      }
export type ContactMutationHookResult = ReturnType<typeof useContactMutation>;
export type ContactMutationResult = Apollo.MutationResult<ContactMutation>;
export type ContactMutationOptions = Apollo.BaseMutationOptions<ContactMutation, ContactMutationVariables>;
export const GetBookingsDocument = gql`
    query getBookings {
  bookings {
    firstName
    lastName
    email
    phone
    company
    software
    address
    createdAt
  }
}
    `;

/**
 * __useGetBookingsQuery__
 *
 * To run a query within a React component, call `useGetBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBookingsQuery(baseOptions?: Apollo.QueryHookOptions<GetBookingsQuery, GetBookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookingsQuery, GetBookingsQueryVariables>(GetBookingsDocument, options);
      }
export function useGetBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingsQuery, GetBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookingsQuery, GetBookingsQueryVariables>(GetBookingsDocument, options);
        }
export type GetBookingsQueryHookResult = ReturnType<typeof useGetBookingsQuery>;
export type GetBookingsLazyQueryHookResult = ReturnType<typeof useGetBookingsLazyQuery>;
export type GetBookingsQueryResult = Apollo.QueryResult<GetBookingsQuery, GetBookingsQueryVariables>;
export const GetBookingDocument = gql`
    query getBooking($email: String!) {
  booking(email: $email) {
    firstName
    lastName
    email
    phone
    company
    software
    address
    createdAt
  }
}
    `;

/**
 * __useGetBookingQuery__
 *
 * To run a query within a React component, call `useGetBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetBookingQuery(baseOptions: Apollo.QueryHookOptions<GetBookingQuery, GetBookingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookingQuery, GetBookingQueryVariables>(GetBookingDocument, options);
      }
export function useGetBookingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingQuery, GetBookingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookingQuery, GetBookingQueryVariables>(GetBookingDocument, options);
        }
export type GetBookingQueryHookResult = ReturnType<typeof useGetBookingQuery>;
export type GetBookingLazyQueryHookResult = ReturnType<typeof useGetBookingLazyQuery>;
export type GetBookingQueryResult = Apollo.QueryResult<GetBookingQuery, GetBookingQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    _id
    name
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;