/* Скрипт для работы с модальным окном */

// Получаем элементы
const saveMemoryButton = document.querySelector(".save-memory-button");
const memoryDialog = document.querySelector(".memory-dialog");
const dialogOkButton = document.querySelector(".dialog-ok-button");

// Открытие модального окна при клике на кнопку "Сохранить на память"
saveMemoryButton.addEventListener("click", () => {
  memoryDialog.showModal();
});

// Закрытие модального окна при клике на кнопку "ОК"
dialogOkButton.addEventListener("click", () => {
  memoryDialog.close();
});

// Закрытие модального окна при клике вне его области
memoryDialog.addEventListener("click", (event) => {
  if (event.target === memoryDialog) {
    memoryDialog.close();
  }
});

// Функция для снятия фокуса с кнопок после клика
function removeFocusAfterClick() {
  this.blur();
}

// Добавляем обработчики для всех кнопок
const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
  button.addEventListener("click", removeFocusAfterClick);
});
