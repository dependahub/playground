#!/usr/bin/env node

import {exec} from 'node:child_process';
import {TubeChat} from 'tubechat';
import _ from 'lodash';

// ANSI escape codes
const ansiCynam = '\u001B[36m';
const ansiReset = '\u001B[0m';

const tubeChat = new TubeChat();

const debouncedSay = _.debounce(comment => {
	exec(`say ${comment}`);
}, 1000);

export function app(channelId) {
	exec('say 音声読み上げを起動しました。');
	tubeChat.connect(channelId);
	tubeChat.on('message', ({message, name}) => {
		let comment = message[0].text;

		comment = comment.replaceAll('8', 'ぱち');
		comment = comment.replaceAll('w', 'わら');

		console.log(`${ansiCynam}${name}${ansiReset} ${comment}`);
		debouncedSay(comment);
	});
}
