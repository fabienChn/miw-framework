class Utilities {

    static number(n) {
        let regex = new RegExp("[0-9]*\.?[0-9]*");
        let formatted = regex.test(n);

        return (formatted && typeof n == 'string');
    }

    static pair(x) {
        return ! (x % 2);
    }

    static round(x, n) {
        return parseFloat(x).toFixed(n);
    }

    static nboccurence(c, ch) {
        let regex = new RegExp(c, 'g');

        let formatted = ch.match(regex);

        return formatted.length;
    }

    static substitute(c1, c2, c) {
        let regex = new RegExp(c1, 'g');

        return c.replace(regex, c2);
    }

    static tn(n) {
        return document.getElementsByName(n);
    }
    static n(n) {
        return document.getElementsByName(n)[0];
    }
    static cf() {
        return document.createDocumentFragment();
    }
    static convertCss(string) {
        let occurrences = string.match(new RegExp('\-[a-z]', 'g'));
        for (let i in occurrences) {
            string = string.replace(occurrences[i], occurrences[i].replace('-', '').toUpperCase());
        }

        return string;
    }
    static merge(arrayA, arrayB) {
        for (let i in arrayB) {
            arrayA.push(arrayB[i]);
        }
        return arrayA;
    }
    static p(number, power) {
        let finalNumber = 1;
        for (let i = 0; i < power; i++) {
            finalNumber *= number;
        }

        return finalNumber;
    }
    static ajax(json) {
        if (['get', 'post', 'delete', 'put', 'patch'].indexOf(json.type.toLowerCase()) < 0) {
            console.log('http method is wrong'); return false;
        }

        let type    = json.type;
        let url     = json.url;
        let success = json.success;
        let parse   = json.parse != false;
        let data    = null;

        if (['post', 'delete', 'put', 'patch'].indexOf(type.toLowerCase()) >= 0 && json.data) {
            for (let k in json.data) {
                data += k+'='+encodeURIComponent(json.data[k])+'&';
            }
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open(type, url, true);

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201 || this.status == 0)) {
                if (parse) {
                    success(JSON.parse(this.responseText));
                } else {
                    success(this.responseText);
                }
            } else if (this.readyState == 4) {
                console.log('error : '+ this.status);
            }
        };
        xhttp.send(data);
    }
}