document.addEventListener("DOMContentLoaded", () => {

	function _notify (data, options = {}) {

		const notifs = document.querySelector(".notifications") || (() => {
			
			const e = document.createElement("div");
			e.classList.add("notifications");
			document.body.appendChild(e);
			return e;

		})();

		const notif = document.createElement("div");
		notif.innerHTML = data.replace(/\n/g, "<br>");
		notif.classList.add("notification");
		notifs.appendChild(notif);

		function dismiss () {

			notif.classList.add("fading");

			setTimeout(() => {

				notif.remove();

			}, 200);

		}

		if (options.duration !== "forever") {
		
			setTimeout(() => {

				dismiss();

			}, options.duration || 2500);
		
		}

		if (!options.irremovable) {

			notif.onclick = () => dismiss();

		}

	}

	window.notify = _notify;
	window.alert = (data, options) => _notify(`<b>Alert</b><br>${data}`, options);

});
