let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Услуги ремонта планшетов";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Время работы";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Стоимость";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Замена экрана";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "от 15 минут";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "от 3590 руб";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Замена батареи";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "от 15 минут";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "от 1290 руб";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Обновление ПО";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "от 30 мин";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "1090 руб";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Чистка динамиков (в зависимости от кол-ва)";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "от 40 мин";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "1000-2500 руб";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "Сбор/разбор";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "от 40 мин";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "1760 руб";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "Замена датчика приближения ";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "от 25 мин";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "1000-1250 руб";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "Замена разъема для наушников";
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerHTML = "от 20 мин";
let row_8_data_3 = document.createElement('td');
row_8_data_3.innerHTML = "800 руб";

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
tbody.appendChild(row_8);

// Creating and adding data to third row of the table
let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "Замена фронтальной камеры ";
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerHTML = "от 30 мин";
let row_9_data_3 = document.createElement('td');
row_9_data_3.innerHTML = "1500-5000 руб";

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
tbody.appendChild(row_9);

// Creating and adding data to third row of the table
let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "Замена основной камеры ";
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerHTML = "от 30 мин";
let row_10_data_3 = document.createElement('td');
row_10_data_3.innerHTML = "1500-5000 руб";

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
tbody.appendChild(row_10);








