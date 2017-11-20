$(document).ready(function() {
    $('#adminTable').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Project ID" },
            { title: "Dojo" },
            { title: "Group ID" },
            { title: "DOB" },
            { title: "SuperVisor" }
        ]
    });
} );

var dataSet = [
    [ "Tiger Nixon", "101", "Edinburgh", "5421", "2011/04/25", "John Smith" ],
    [ "Garrett Winters", "103", "Tokyo", "8422", "2011/07/25", "Mei Manchester" ],
    [ "Ashton Cox", "206", "San Francisco", "1562", "2009/01/12", "Gilda Groves" ],
    [ "Cedric Kelly", "205", "Edinburgh", "6224", "2012/03/29", "Mei Manchester" ],
    [ "Airi Satou", "332", "Tokyo", "5407", "2008/11/28", "Eileen Endres" ],
    [ "Brielle Williamson", "103", "New York", "4804", "2012/12/02", "Georgeann Gaus" ],
    [ "Herrod Chandler", "245", "N/A", "9608", "2012/08/06", "Eileen Endres" ],
    [ "Rhona Davidson", "207", "Tokyo", "6200", "2010/10/14", "Sandy Son" ],
    [ "Colleen Hurst", "300", "San Francisco", "2360", "2009/09/15", "Myriam Mass" ],
    [ "Sonya Frost", "103", "N/A", "1667", "2008/12/13", "Brandee Brandl" ],
    [ "Jena Gaines", "101", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "299", "N/A", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "300", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "301", "London", "3597", "2012/12/18", "Gilda Groves" ],
    [ "Tatyana Fitzpatrick", "103", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "142", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "144", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "101", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "200", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "201", "N/A", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "222", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "142", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "762", "New York", "8330", "2011/12/12", "Gilda Groves" ],
    [ "Doris Wilder", "244", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "222", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "195", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "143", "N/A", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "142", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "271", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "266", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "231", "Sidney", "2769", "2011/06/02", "$Mei Manchester" ],
    [ "Suki Burks", "230", "London", "6832", "2009/10/22", "Solomon Stecker" ],
    [ "Prescott Bartlett", "184", "London", "3606", "2011/05/07", "heba Riter" ],
    [ "Gavin Cortez", "143", "San Francisco", "2860", "2008/10/26", "Don Dittman" ],
    [ "Martena Mccray", "200", "Edinburgh", "8240", "2011/03/09", "Isabell Iglesia" ],
    [ "Unity Butler", "200", "San Francisco", "5384", "2009/12/09", "Kitty Kimery" ]
];
