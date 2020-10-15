let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let short_meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
let dias = ["Domingo", "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
let short_dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

module.exports = {
    dateToString: (fecha) => {
        if(fecha == null) { return }
        var f = new Date(fecha.replace(/-/g,"/")); //Fix UTC "-" to Local "/"
        return dias[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
    },

    dateToStringShort: (fecha) => {
        if(fecha == null) { return }
        var f = new Date(fecha.replace(/-/g,"/")); //Fix UTC "-" to Local "/"
        return f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
    },

    capitalizeFirstLetter: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    inputError: (errors, field, classname) => {
        if(errors) { if(errors[field]) { return classname; } } return ''
    },

    inputErrorMsg: (errors, field) => {
        if(errors) { if(errors[field]) { return errors[field][0]; } } return ''
    },

    textTruncate: (str, length = 100, ending = '...') => {
        if (str.length > length) {  
            return str.substring(0, length - ending.length) + ending; 
        } else { return str }  
    },

    getShortDias: () => { return short_dias },
    getDias: () => { return dias },
    getShortMeses: () => { return short_meses },
    getMeses: () => { return meses },

    formatBytes: (bytes, decimals) => {
        if (bytes == 0) { return '0 Bytes' }
        var k = 1000,
            dm = decimals + 1 || 3,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    },

    formatCurrency: (value) => {
        var val = parseFloat(value)
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },

    removeDoubleSlashFromUrl: (url) => {
        if (url == null) { return '' }
        return url.replace(/([^:]\/)\/+/g, "$1")
    }
}