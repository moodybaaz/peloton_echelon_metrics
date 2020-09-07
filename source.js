javascript: (function() {
    var rideID = (rideID = window.location.pathname.split("/"))[rideID.length - 1];
    fetch("https://api.onepeloton.com/api/ride/" + rideID + "/details?stream_source=multichannel", {
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US",
            "peloton-platform": "web",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-requested-with": "XmlHttpRequest"
        },
        referrer: "https://members.onepeloton.com/classes/player/" + rideID,
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include"
    }).then(function(e) {
        return e.json()
    }).then(function(i) {
        var a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22, 23, 25, 27, 29, 31, 33, 35, 38, 41, 43, 46, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
            o = Number(i.ride.duration),
            e = document.createElement("div");
        e.id = "cadresist", e.style = "color:white", e.innerHTML = '<div id="cadresisttxt" style="width:100%;color:white"></div><div style="margin-top:10px;width:100%; height:2px; background-color:#555555"><div id="cadresistprogress" style="width:0%;transition:990ms linear;height:2px;background-color:white"></div></div>', document.querySelector("div[data-test-id='videoSongContainer']").after(e);
        var c = document.getElementById("cadresisttxt"),
            d = document.getElementById("cadresistprogress");
        if (!i.instructor_cues.length) return e.innerHTML = "Class does not have target metrics.", void setTimeout(function() {
            e.innerHTML = ""
        }, 5e3);
        for (var t = [], r = i.instructor_cues[0], n = 1; n < i.instructor_cues.length; n++) {
            var s = i.instructor_cues[n];
            r.resistance_range.upper == s.resistance_range.upper && r.resistance_range.lower == s.resistance_range.lower && r.cadence_range.upper == s.cadence_range.upper && r.cadence_range.lower == s.cadence_range.lower ? r.offsets.end = s.offsets.end : (t.push(r), r = s)
        }
        t.push(s), i.instructor_cues = t, console.dir(i.instructor_cues);
        var u = document.querySelector("div[data-test-id='video-timer']");
        new MutationObserver(function(e) {
            var t = document.querySelector("p[data-test-id='time-to-complete']");
            if (!t) return;
            if (2 != (t = t.innerHTML.split(":")).length) return;
            for (var r = o - (60 * Number(t[0]) + Number(t[1])) + Number(i.ride.pedaling_start_offset), n = 0; n < i.instructor_cues.length; n++) {
                var s = i.instructor_cues[n];
                if (r >= Number(s.offsets.start) && r <= Number(s.offsets.end)) return c.innerHTML = "cadence: " + s.cadence_range.lower + " - " + s.cadence_range.upper + "&nbsp;&nbsp;&nbsp;&nbsp; resistance: " + a[s.resistance_range.lower] + " - " + a[s.resistance_range.upper] + "&nbsp;&nbsp;&nbsp;&nbsp; (" + s.resistance_range.lower + " - " + s.resistance_range.upper + ")", void(r == Number(s.offsets.start) ? (d.style.transition = "none", d.style.width = "0%") : (d.style.transition = "990ms linear", d.style.width = Math.round((r - s.offsets.start) / (s.offsets.end - s.offsets.start) * 100) + "%"))
            }
        }).observe(u, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0
        })
    })
})()
