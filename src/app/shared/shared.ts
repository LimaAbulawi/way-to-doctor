'use strict';

import { HttpHeaders } from "@angular/common/http";

export const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    // .set('X-localization', '' + localStorage.getItem('locale'));

export const headers2 = new HttpHeaders()
    // .set('X-localization', '' + localStorage.getItem('locale'))
