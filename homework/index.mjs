// Функция для перевода температур из Фаренгейтов в Цельсий
function convertToCelsius(tempValue, tempUnit) {
  if (tempUnit === "F") {
    return ((tempValue - 32) * 5) / 9;
  }
  return tempValue;
}

// Главная функция для обработки выбора пользователя
function checkWeather() {
  // Получаем выбранную единицу измерения и значение температуры
  const selectedScale = document.getElementById("scale").value;
  const enteredValue = Number(document.getElementById("value").value);

  // Если ничего не ввели, сообщаем об ошибке
  if (Number.isNaN(enteredValue)) {
    document.getElementById("result").innerText =
      "Please enter a valid number.";
    return;
  }

  // Приводим температуру к Цельсию
  const convertedTemp = convertToCelsius(enteredValue, selectedScale);

  // Анализируем температуру и показываем результат
  if (convertedTemp >= 30) {
    document.getElementById("result").innerText = "It is hot outside";
  } else if (convertedTemp > 20) {
    document.getElementById("result").innerText = "It is warm outside";
  } else {
    document.getElementById("result").innerText = "It is cold outside";
  }
}
