define(['jquery', 
	'models/hack',
	'views/progress-layout',
	], function($, Hack, ProgressLayout) {
	'use strict';

	return function(terminal, events) {
		var $terminal = $('#terminal');

		var longHack = new Hack('char*getFinalPacketStats(char*buf, int buflen){char sendbytesasc[16], recvbytesasc[16]; if(buflen<=10||!buf)fatal("%s called with woefully inadequate parameters",__func__); Snprintf(buf, buflen, #if WIN32"Raw packets sent: %I64u (%s) | Rcvd: %I64u (%s)",#else"Raw packets sent: %llu (%s) | Rcvd: %llu (%s)", #endif PktCt.sendPackets, format_bytecount(PktCt.sendBytes, sendbytesasc, sizeof(sendbytesasc)), PktCt.recvPackets, format_bytecount(PktCt.recvBytes, recvbytesasc, sizeof(recvbytesasc))); return buf}');
		var shortHack = new Hack('int nmap_raw_socket(){ int rawsd; rawsd=socket(AF_INET,SOCK_RAW,IPPROTO_RAW); if(rawsd<0) return rawsd; broadcast_socket(rawsd); #ifndef WIN32 sethdrinclude(rawsd); #endif socket_bindtodevice(rawsd,o.device); return rawsd }');

		var hack = shortHack;

		var hackCode = function() {
			var $inputLine = $('.input-line');

			if (hack.isDone()) {
				// Clear screen
				$terminal.off('keypress', hackCode);
				$inputLine.empty();

				// Start next layout
				var progressLayout = new ProgressLayout(terminal, events);
				progressLayout.show();
			} else {
				// Add some hacking code to the input line
				var content = $inputLine.text() + hack.getCodePiece();
				$inputLine.text(content);
			}
		}

		this.show = function() {
			// Add hacking code on every keypress
			$terminal.on('keypress', hackCode);

			terminal.clear();
			terminal.print('Begin hacking... (Start typing)');
		}
	}
})

