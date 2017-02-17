const Vue = require('vue'),
    numeral = require('numeral');


numeral.register('locale', 'pt-br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function(number) {
        return 'º';
    },
    currency: {
        symbol: 'R$'
    }
});
numeral.locale('pt-br');

let app = new Vue({
    el: '#app',
    data: {
        sessions: 50000,
        conversion: 2,
        avg: 100,
        pay: 60,
        captured: 0,
        total: 0,
        final: 0
    },
    computed: {
        $total() {
            return numeral(this.total).format('$0,0.00');
        },
        $final() {
            return numeral(this.final).format('$0,0.00');
        }
    },
    methods: {
        calc() {
            console.log(this);
            this.captured = this.sessions * (this.conversion / 100);
            this.total = this.captured * this.avg;
            this.final = this.total * (this.pay / 100);
        },
        sessionMinusTen() {
            this.sessions = this.sessions - 10000;
        },
        sessionPlusTen() {
            this.sessions = this.sessions + 10000;
        }
    }
});

app.calc();

['sessions', 'conversion', 'avg', 'pay']
.map(variable => app.$watch(variable, () => app.calc()));