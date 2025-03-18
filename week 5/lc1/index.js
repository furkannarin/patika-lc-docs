// modules

const react = require(''); // path veya paket ismi

// es5
// import/export

import ASDF from 'react'; // paket ismi
import React2 from './local/react-instance.js'; // dizin
import * as React3 from 'react'; // her sey
import Ithal from './imported.js';
import { x as t, y, z } from './imported.js'; // bu dosyadan isime ne lazimsa, yalnizca, onu import edebilirim
// console.log(x, t);
// default import
// non-default import / named import

// Ithal.default();
// Ithal();

import React2 from './local/react-instance.js'; // Sadece default export erisilebilir
import * as React3 from 'react'; // Dosyadaki her seyi bir obje gibi dusunebiliriz

// React3 -> { default: null, x: 5, y: 10 };
// React2 -> dosyanin default export ettigi kod birimi

// package/paket !== bagimlilik/dependency
// react -> react native -> vue -> lodash >>>>> serial
// react
// react native
// vue