#!/usr/bin/env node

import process from 'node:process';
import {app} from './src/app.js';

const [_a, _b, channelId] = process.argv;
app(channelId);
