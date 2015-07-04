(function() {
	//s_d = Relative Swipe Distance
	//s_t = Swipe Time In Miliseconds
	//c_d = Call Delay
	HTMLElement.prototype.swipeUp = function(fn, s_d, s_t, c_d) {
		var _handler = function(e) {
			e = e || window.event;
			var callee = arguments.callee;
			var now = new Date().getTime();
			var event_type = e.type.toLocaleLowerCase().replace("on", "");
			if((event_type=="touchstart")||(event_type=="mousedown")) {
				callee._last_start = now;
				callee._start = e.y || e.clientY || e.touches[0].clientY;
			} else if(((event_type=="touchend")||(event_type=="mouseup")||(event_type=="mouseout"))&&
						(_distance=((e.y || e.clientY || e.changedTouches[0].clientY) - callee._start))&&
						(Math.abs(_distance)>(this.clientHeight * callee._distance))&&
						(now - callee._last_start<=callee._time*(Math.abs(_distance)/(this.clientHeight * callee._distance)))&&
						(now - callee._last_call>callee._call_delay)) {
				callee._last_call = now;
				//0 = down
				fn.call(this, [(((e.y || e.clientY || e.changedTouches[0].clientY) - callee._start) > 0) ? 0 : 1]);
			}
		};
		_handler._distance = s_d || 0.5;
		_handler._time = s_t || 500;
		_handler._call_delay = c_d || 60;
		_handler._last_call = new Date(1970, 1, 1);
		_handler._last_start = new Date(1970, 1, 1);
		_handler._start = 0;
		if(this.addEventListener) {
			this.addEventListener("touchstart", _handler);
			this.addEventListener("touchend", _handler);
			this.addEventListener("mousedown", _handler);
			this.addEventListener("mouseup", _handler);
			this.addEventListener("mouseout", _handler);
		} else {
			this.attachEvent("ontouchstart", _handler);
			this.attachEvent("ontouchend", _handler);
			this.attachEvent("onmousedown", _handler);
			this.attachEvent("onmouseup", _handler);
			this.attachEvent("onmouseout", _handler);
		}
	};
	HTMLElement.prototype.swipe = function(fn, s_d, s_t, c_d) {
		var _handler = function(e) {
			e = e || window.event;
			var callee = arguments.callee;
			var now = new Date().getTime();
			var event_type = e.type.toLocaleLowerCase().replace("on", "");
			if((event_type=="touchstart")||(event_type=="mousedown")) {
				callee._last_start = now;
				callee._start = e.x || e.clientX || e.touches[0].clientX;
			} else if(((event_type=="touchend")||(event_type=="mouseup")||(event_type=="mouseout"))&&
						(_distance=((e.x || e.clientX || e.changedTouches[0].clientX) - callee._start))&&
						(Math.abs(_distance)>(this.clientWidth * callee._distance))&&
						(now - callee._last_start<=callee._time*(Math.abs(_distance)/(this.clientHeight * callee._distance)))&&
						(now - callee._last_call>callee._call_delay)) {
				callee._last_call = now;
				//0 = down
				fn.call(this, [(((e.x || e.clientX || e.changedTouches[0].clientX) - callee._start) > 0) ? 0 : 1]);
			}
		};
		_handler._distance = s_d || 0.5;
		_handler._time = s_t || 500;
		_handler._call_delay = c_d || 60;
		_handler._last_call = new Date(1970, 1, 1);
		_handler._last_start = new Date(1970, 1, 1);
		_handler._start = 0;
		if(this.addEventListener) {
			this.addEventListener("touchstart", _handler);
			this.addEventListener("touchend", _handler);
			this.addEventListener("mousedown", _handler);
			this.addEventListener("mouseup", _handler);
			this.addEventListener("mouseout", _handler);
		} else {
			this.attachEvent("ontouchstart", _handler);
			this.attachEvent("ontouchend", _handler);
			this.attachEvent("onmousedown", _handler);
			this.attachEvent("onmouseup", _handler);
			this.attachEvent("onmouseout", _handler);
		}
	};
	HTMLElement.prototype.drag = function(fn, c_d) {
		var _handler = function(e) {
			e = e || window.event;
			var callee = arguments.callee;
			var now = new Date().getTime();
			var event_type = e.type.toLocaleLowerCase().replace("on", "");
			if((event_type=="touchstart")||(event_type=="mousedown")) {
				callee._x = e.x || e.clientX || e.touches[0].clientX;
				callee._y = e.y || e.clientY || e.touches[0].clientY;
				callee._dragging = true;
			} else if((event_type=="touchend")||(event_type=="mouseup")||(event_type=="mouseout")) {
				callee._dragging = false;
			} else if(((event_type=="touchmove")||(event_type=="mousemove"))&(callee._dragging==true)) {
				var _x = e.x || e.clientX || e.touches[0].clientX;
				var _y = e.y || e.clientY || e.touches[0].clientY;
				var _dx = _x - callee._x;
				var _dy = _y - callee._y;
				fn.call(this, _dx, _dy);
				//up = positive
				//right = positive
				callee._x = _x;
				callee._y = _y;
			}
		};
		_handler._call_delay = c_d || 60;
		_handler._x = 0;
		_handler._y = 0;
		_handler._dragging = false;
		if(this.addEventListener) {
			this.addEventListener("touchstart", _handler);
			this.addEventListener("touchmove", _handler);
			this.addEventListener("touchend", _handler);
			this.addEventListener("mousedown", _handler);
			this.addEventListener("mousemove", _handler);
			this.addEventListener("mouseup", _handler);
			this.addEventListener("mouseout", _handler);
		}
	};
})();