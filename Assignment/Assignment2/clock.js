        // Real time clock.........
        setInterval(CurrentTime, 1000);
        function CurrentTime() {
            var time = new Date();
            var h = time.getHours();
            var m = time.getMinutes();
            var s = time.getSeconds();
            var am_pm = "AM";

            if (h > 12) {
                h -= 12;
                am_pm='PM';
            }
            if (h == 0) {
                h = 12;
                am_pm = 'AM';
            }
            if (s < 10 || s == 0) {
                s = '0' + s
            }
            if (m < 10 || m == 0) {
                m = '0' + m
            }
            if (h < 10 || h == 0) {
                h = '0' + h
            }
            document.getElementById("cTime").value = h + ':' + m + ':' + s + '  ' + am_pm;
        }

        // functio for StopWatch.....

        var h = 0;
        var m = 0;
        var s = 0;
        var st = true;

        function StartT() {
            if (st == true) {
                st = false;
              //  console.log("callit Start fu")
                TimerC();
            }
        }

        function StopT() {
            if (st == false) {
                st = true;
            }

        }
        function TimerC() {
            if (st == false) {
               // console.log("colli//")
                s = parseInt(s);
                m = parseInt(m);
                h = parseInt(h);
                s = s + 1;
                if (s == 60) {
                    m = m + 1;
                    s = 0;
                }
                if (m == 60) {
                    h = h + 1;
                    m = 0;
                    s = 0;
                }
                if (s < 10 || s == 0) {
                    s = '0' + s
                }
                if (m < 10 || m == 0) {
                    m = '0' + m
                }
                if (h < 10 || h == 0) {
                    h = '0' + h
                }
                document.getElementById("sWatch").value = h + ':' + m + ':' + s;
                setTimeout("TimerC()",1000);
            }
        }
        function ResetT() {
            h=0;
            m=0;
            s=0;
            st=true
            document.getElementById('sWatch').value = "00:00:00";

        }


    