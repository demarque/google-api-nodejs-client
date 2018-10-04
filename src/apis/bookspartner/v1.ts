/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace bookspartner_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Books Partner API
   *
   * Lets partners access their publishing data.
   *
   * @example
   * const {google} = require('googleapis');
   * const bookspartner = google.bookspartner('v1');
   *
   * @namespace bookspartner
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Bookspartner
   */
  export class Bookspartner {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    partners: Resource$Partners;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.partners = new Resource$Partners(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Amount in a specified currency.
   */
  export interface Schema$Amount {
    /**
     * Amount in micros.
     */
    amountMicros?: string;
    /**
     * Three letter ISO currency code.
     */
    currency?: string;
  }
  export interface Schema$Invoice {
    amount?: Schema$Amount;
    date?: Schema$Timestamp;
    invoiceId?: string;
  }
  export interface Schema$ListInvoicesResponse {
    invoices?: Schema$Invoice[];
  }
  /**
   * Response with a list of partners or empty if none associated.
   */
  export interface Schema$ListPartnersResponse {
    /**
     * List of partners associated with the caller account.
     */
    partners?: Schema$Partner[];
  }
  export interface Schema$ListPaymentProfilesResponse {
    paymentProfiles?: Schema$PaymentProfile[];
  }
  /**
   * Response with a list of transactions or empty if there aren&#39;t any.
   */
  export interface Schema$ListTransactionsResponse {
    /**
     * Token that needs to be passed in the next request to get the next set of
     * transactions. Empty when there are no more transactions to fetch.
     */
    nextPageToken?: string;
    /**
     * Result transactions, size of which will be less than or equal to the
     * given page_size in the request.
     */
    transactions?: Schema$Transaction[];
  }
  /**
   * Partner with name and id.
   */
  export interface Schema$Partner {
    /**
     * Name of the partner.
     */
    name?: string;
    /**
     * ID of the partner.
     */
    partnerId?: string;
  }
  export interface Schema$PaymentProfile {
    creationDate?: Schema$Timestamp;
    name?: string;
    paymentProfileId?: string;
  }
  /**
   * A Timestamp represents a point in time independent of any time zone or
   * calendar, represented as seconds and fractions of seconds at nanosecond
   * resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian
   * Calendar which extends the Gregorian calendar backwards to year one. It is
   * encoded assuming all minutes are 60 seconds long, i.e. leap seconds are
   * &quot;smeared&quot; so that no leap second table is needed for
   * interpretation. Range is from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure
   * that we can convert to and from RFC 3339 date strings. See
   * [https://www.ietf.org/rfc/rfc3339.txt](https://www.ietf.org/rfc/rfc3339.txt).
   * # Examples  Example 1: Compute Timestamp from POSIX `time()`.  Timestamp
   * timestamp; timestamp.set_seconds(time(NULL)); timestamp.set_nanos(0);
   * Example 2: Compute Timestamp from POSIX `gettimeofday()`.  struct timeval
   * tv; gettimeofday(&amp;tv, NULL);  Timestamp timestamp;
   * timestamp.set_seconds(tv.tv_sec); timestamp.set_nanos(tv.tv_usec * 1000);
   * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
   * FILETIME ft; GetSystemTimeAsFileTime(&amp;ft); UINT64 ticks =
   * (((UINT64)ft.dwHighDateTime) &lt;&lt; 32) | ft.dwLowDateTime;  // A Windows
   * tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z // is
   * 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z. Timestamp
   * timestamp; timestamp.set_seconds((INT64) ((ticks / 10000000) -
   * 11644473600LL)); timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
   * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.  long
   * millis = System.currentTimeMillis();  Timestamp timestamp =
   * Timestamp.newBuilder().setSeconds(millis / 1000) .setNanos((int) ((millis %
   * 1000) * 1000000)).build();    Example 5: Compute Timestamp from current
   * time in Python.  timestamp = Timestamp() timestamp.GetCurrentTime()  # JSON
   * Mapping  In JSON format, the Timestamp type is encoded as a string in the
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
   * format is &quot;{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z&quot;
   * where {year} is always expressed using four digits while {month}, {day},
   * {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
   * seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
   * are optional. The &quot;Z&quot; suffix indicates the timezone
   * (&quot;UTC&quot;); the timezone is required, though only UTC (as indicated
   * by &quot;Z&quot;) is presently supported.  For example,
   * &quot;2017-01-15T01:30:15.01Z&quot; encodes 15.01 seconds past 01:30 UTC on
   * January 15, 2017.  In JavaScript, one can convert a Date object to this
   * format using the standard
   * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString]
   * method. In Python, a standard `datetime.datetime` object can be converted
   * to this format using
   * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime)
   * with the time format spec &#39;%Y-%m-%dT%H:%M:%S.%fZ&#39;. Likewise, in
   * Java, one can use the Joda Time&#39;s [`ISODateTimeFormat.dateTime()`](
   * http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime())
   * to obtain a formatter capable of generating timestamps in this format.
   */
  export interface Schema$Timestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     * Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string;
  }
  /**
   * Represent a partner book transaction
   */
  export interface Schema$Transaction {
    /**
     * Name of the book author.
     */
    author?: string;
    /**
     * Two letter ISO country code.
     */
    countryOfSale?: string;
    /**
     * Currency conversion rate used when the purchase currency and payment
     * currency are different.
     */
    currencyConversionRate?: number;
    earningsDate?: Schema$Timestamp;
    imprintName?: string;
    /**
     * ISBN of the book.
     */
    isbn?: string;
    /**
     * List price excluding tax in the country of sale currency.
     */
    listPriceExcludingTax?: Schema$Amount;
    /**
     * List price including tax in the country of sale currency.
     */
    listPriceIncludingTax?: Schema$Amount;
    /**
     * List price amount and currency as specified by the partner.
     */
    originalListPrice?: Schema$Amount;
    /**
     * Amount paid to the publisher in their payment profile currency.
     */
    paymentAmount?: Schema$Amount;
    /**
     * Postal code for where the sale occurred.
     */
    postalCode?: string;
    /**
     * Preorder state if this transaction was initiated as a preorder.
     */
    preorder?: string;
    /**
     * Type of product associated with this transaction
     */
    productType?: string;
    /**
     * Publisher revenue share in purchase currency.
     */
    publisherRevenueShareAmount?: Schema$Amount;
    /**
     * Publisher revenue share percentage as double value.
     */
    publisherRevenueSharePercentage?: number;
    /**
     * Total amount due to the publisher in purchase currency.
     */
    publisherTotalDueAmount?: Schema$Amount;
    /**
     * Price paid by the customer in the country of sale currency.
     */
    purchasePrice?: Schema$Amount;
    /**
     * Number of copies involved in this transaction. Negative value when
     * transactionType is refund.
     */
    quantity?: number;
    /**
     * State or region where the sale occurred.
     */
    regionOrState?: string;
    /**
     * Tax amount levied for this transaction.
     */
    taxAmount?: Schema$Amount;
    /**
     * Tax rate applied for this transaction.
     */
    taxRatePercentage?: number;
    /**
     * Timestamp of this transaction occurrence.
     */
    timestamp?: Schema$Timestamp;
    /**
     * Title of the book.
     */
    title?: string;
    /**
     * ID for this transaction.
     */
    transactionId?: string;
    /**
     * Type of transaction. Typically either sale or refund.
     */
    transactionType?: string;
  }


  export class Resource$Partners {
    root: Bookspartner;
    paymentprofiles: Resource$Partners$Paymentprofiles;
    transactions: Resource$Partners$Transactions;
    constructor(root: Bookspartner) {
      this.root = root;
      this.getRoot.bind(this);
      this.paymentprofiles = new Resource$Partners$Paymentprofiles(root);
      this.transactions = new Resource$Partners$Transactions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * bookspartner.partners.list
     * @desc Returns the list of partners associated with this user.
     * @alias bookspartner.partners.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Partners$List, options?: MethodOptions):
        AxiosPromise<Schema$ListPartnersResponse>;
    list(
        params: Params$Resource$Partners$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListPartnersResponse>,
        callback: BodyResponseCallback<Schema$ListPartnersResponse>): void;
    list(
        params: Params$Resource$Partners$List,
        callback: BodyResponseCallback<Schema$ListPartnersResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListPartnersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Partners$List|
        BodyResponseCallback<Schema$ListPartnersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListPartnersResponse>,
        callback?: BodyResponseCallback<Schema$ListPartnersResponse>):
        void|AxiosPromise<Schema$ListPartnersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Partners$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/bookspartner/v1/partners')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListPartnersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListPartnersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }

  export class Resource$Partners$Paymentprofiles {
    root: Bookspartner;
    invoices: Resource$Partners$Paymentprofiles$Invoices;
    constructor(root: Bookspartner) {
      this.root = root;
      this.getRoot.bind(this);
      this.invoices = new Resource$Partners$Paymentprofiles$Invoices(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * bookspartner.partners.paymentprofiles.list
     * @desc Returns a partner's payment profiles.
     * @alias bookspartner.partners.paymentprofiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.partnerId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Partners$Paymentprofiles$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListPaymentProfilesResponse>;
    list(
        params: Params$Resource$Partners$Paymentprofiles$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListPaymentProfilesResponse>,
        callback: BodyResponseCallback<Schema$ListPaymentProfilesResponse>):
        void;
    list(
        params: Params$Resource$Partners$Paymentprofiles$List,
        callback: BodyResponseCallback<Schema$ListPaymentProfilesResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListPaymentProfilesResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Partners$Paymentprofiles$List|
        BodyResponseCallback<Schema$ListPaymentProfilesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListPaymentProfilesResponse>,
        callback?: BodyResponseCallback<Schema$ListPaymentProfilesResponse>):
        void|AxiosPromise<Schema$ListPaymentProfilesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Partners$Paymentprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Paymentprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/bookspartner/v1/partners/{partnerId}/paymentprofiles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListPaymentProfilesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListPaymentProfilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Paymentprofiles$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    partnerId?: string;
  }

  export class Resource$Partners$Paymentprofiles$Invoices {
    root: Bookspartner;
    transactions: Resource$Partners$Paymentprofiles$Invoices$Transactions;
    constructor(root: Bookspartner) {
      this.root = root;
      this.getRoot.bind(this);
      this.transactions =
          new Resource$Partners$Paymentprofiles$Invoices$Transactions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * bookspartner.partners.paymentprofiles.invoices.list
     * @desc Returns a payment profile's invoices.
     * @alias bookspartner.partners.paymentprofiles.invoices.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.endDate.nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param {string=} params.endDate.seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param {string} params.partnerId
     * @param {string} params.paymentProfileId
     * @param {integer=} params.startDate.nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param {string=} params.startDate.seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Partners$Paymentprofiles$Invoices$List,
        options?: MethodOptions): AxiosPromise<Schema$ListInvoicesResponse>;
    list(
        params: Params$Resource$Partners$Paymentprofiles$Invoices$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListInvoicesResponse>,
        callback: BodyResponseCallback<Schema$ListInvoicesResponse>): void;
    list(
        params: Params$Resource$Partners$Paymentprofiles$Invoices$List,
        callback: BodyResponseCallback<Schema$ListInvoicesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListInvoicesResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Partners$Paymentprofiles$Invoices$List|
        BodyResponseCallback<Schema$ListInvoicesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListInvoicesResponse>,
        callback?: BodyResponseCallback<Schema$ListInvoicesResponse>):
        void|AxiosPromise<Schema$ListInvoicesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Partners$Paymentprofiles$Invoices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Paymentprofiles$Invoices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/bookspartner/v1/partners/{partnerId}/paymentprofiles/{paymentProfileId}/invoices')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['partnerId', 'paymentProfileId'],
        pathParams: ['partnerId', 'paymentProfileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListInvoicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInvoicesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Paymentprofiles$Invoices$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    'endDate.nanos'?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     * Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    'endDate.seconds'?: string;
    /**
     *
     */
    partnerId?: string;
    /**
     *
     */
    paymentProfileId?: string;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    'startDate.nanos'?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     * Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    'startDate.seconds'?: string;
  }

  export class Resource$Partners$Paymentprofiles$Invoices$Transactions {
    root: Bookspartner;
    constructor(root: Bookspartner) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * bookspartner.partners.paymentprofiles.invoices.transactions.list
     * @desc Returns an invoice's transactions.
     * @alias bookspartner.partners.paymentprofiles.invoices.transactions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.invoiceId
     * @param {integer=} params.pageSize Numbers of transactions requested
     * @param {string=} params.pageToken
     * @param {string} params.partnerId
     * @param {string} params.paymentProfileId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List,
        options?: MethodOptions): AxiosPromise<Schema$ListTransactionsResponse>;
    list(
        params:
            Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(
        params:
            Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List,
        callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        callback?: BodyResponseCallback<Schema$ListTransactionsResponse>):
        void|AxiosPromise<Schema$ListTransactionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/bookspartner/v1/partners/{partnerId}/paymentprofiles/{paymentProfileId}/invoices/{invoiceId}/transactions')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['partnerId', 'paymentProfileId', 'invoiceId'],
        pathParams: ['invoiceId', 'partnerId', 'paymentProfileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListTransactionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransactionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Paymentprofiles$Invoices$Transactions$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    invoiceId?: string;
    /**
     * Numbers of transactions requested
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    partnerId?: string;
    /**
     *
     */
    paymentProfileId?: string;
  }



  export class Resource$Partners$Transactions {
    root: Bookspartner;
    constructor(root: Bookspartner) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * bookspartner.partners.transactions.list
     * @desc Returns the list of transactions for the given regions and time
     * period.
     * @alias bookspartner.partners.transactions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.countryCodes List of two letter ISO country codes.
     * @param {integer=} params.endDate.nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param {string=} params.endDate.seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param {integer=} params.pageSize Numbers of transactions requested. Default size is 5,000.
     * @param {string=} params.pageToken Page token for this request. In a paginated request, this should be copied from next_page_token in the previous ListTransactionsResponse.
     * @param {string} params.partnerId ID of the partner for whom transactions are requested.
     * @param {integer=} params.startDate.nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @param {string=} params.startDate.seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Partners$Transactions$List,
        options?: MethodOptions): AxiosPromise<Schema$ListTransactionsResponse>;
    list(
        params: Params$Resource$Partners$Transactions$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(
        params: Params$Resource$Partners$Transactions$List,
        callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListTransactionsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Partners$Transactions$List|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListTransactionsResponse>,
        callback?: BodyResponseCallback<Schema$ListTransactionsResponse>):
        void|AxiosPromise<Schema$ListTransactionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Partners$Transactions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Transactions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/bookspartner/v1/partners/{partnerId}/transactions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListTransactionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransactionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Transactions$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * List of two letter ISO country codes.
     */
    countryCodes?: string;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    'endDate.nanos'?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     * Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    'endDate.seconds'?: string;
    /**
     * Numbers of transactions requested. Default size is 5,000.
     */
    pageSize?: number;
    /**
     * Page token for this request. In a paginated request, this should be
     * copied from next_page_token in the previous ListTransactionsResponse.
     */
    pageToken?: string;
    /**
     * ID of the partner for whom transactions are requested.
     */
    partnerId?: string;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    'startDate.nanos'?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     * Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    'startDate.seconds'?: string;
  }
}
