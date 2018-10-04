// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, ServiceOptions} from 'googleapis-common';

import * as bookspartner from './bookspartner';

export interface APIList {
  // tslint:disable-next-line: no-any
  [index: string]: {[index: string]: any};
}

export const APIS: APIList = {
  bookspartner: bookspartner.VERSIONS,
};

export class GeneratedAPIs {
  bookspartner = bookspartner.bookspartner;
  constructor() {
    this.bookspartner = this.bookspartner.bind(this);
  }
}
