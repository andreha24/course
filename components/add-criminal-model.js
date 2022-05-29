export const AddCriminalModal = ({ onClose }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form id="personalData">
          <h3>Заполните информацию о преступнике</h3>
          <div className="modal-content">
            <div className="modal-content__item">
              <label for="surname">Фамилия:</label>
              <input type="text" id="surname" required="" />
            </div>
            <div className="modal-content__item">
              <label for="name">Имя:</label>
              <input type="text" id="name" required="" />
            </div>
            <div className="modal-content__item">
              <label for="nickname">Кличка:</label>
              <input type="text" id="nickname" required="" />
            </div>
            <div className="modal-content__item">
              <label for="height">Рост:</label>
              <input type="number" id="height" />
            </div>
            <div className="modal-content__item">
              <label for="eyes">Цвет глаз:</label>
              <input type="text" id="eyes" />
            </div>
            <div className="modal-content__item">
              <label for="hair">Цвет волос:</label>
              <input type="text" id="hair" />
            </div>
            <div className="modal-content__item">
              <label for="unic">Особые приметы:</label>
              <input type="text" id="unic" />
            </div>
            <div className="modal-content__item">
              <label for="national">Гражданство:</label>
              <input type="text" id="national" />
            </div>
            <div className="modal-content__item">
              <label for="town">Место рождения(Город):</label>
              <input type="text" id="town" />
            </div>
            <div className="modal-content__item">
              <label for="birthday">Дата рождения:</label>
              <input type="date" id="birthday" />
            </div>
            <div className="modal-content__item">
              <label for="language">Знание языков:</label>
              <input type="text" id="language" />
            </div>
            <div className="modal-content__item">
              <label for="criminal">Преступная деятельность:</label>
              <input type="text" id="criminal" />
            </div>
            <div className="modal-content__item">
              <label for="last_criminal">Последнее дело:</label>
              <input type="text" id="last_criminal" />
            </div>
            <div className="modal-content__item">
              <label for="foto">Загрузите фото:</label>
              <input type="file" id="foto" />
            </div>
            <button
              //   type="submit"
              id="plus"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Добавить
            </button>
            <input type="reset" value="Сбросить данные" />
          </div>
        </form>
      </div>
    </div>
  );
};
