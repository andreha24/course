export const CriminalFilter = () => {
  return (
    <div className="choice">
      <div className="choice-one">
        <h3>Выберите цвет глаз:</h3>
        <input type="radio" name="eyes" />
        <label>Карие глаза</label>
        <input type="radio" name="eyes" />
        <label>Зеленые глаза</label>
        <input type="radio" name="eyes" />
        <label>Голубые глаза</label>
      </div>
      <div className="choice-one">
        <h3>Выберите цвет волос:</h3>
        <input type="radio" name="hair" />
        <label>Русый</label>
        <input type="radio" name="hair" />
        <label>Блондин</label>
        <input type="radio" name="hair" />
        <label>Брюнет</label>
      </div>
      <div className="choice-one">
        <h3>Выберите рост:</h3>
        <input type="radio" name="height" />
        <label>Ниже 160</label>
        <input type="radio" name="height" />
        <label>От 160 до 180</label>
        <input type="radio" name="height" />
        <label>Выше 180</label>
      </div>
      <div className="choice-one">
        <h3>Языки:</h3>
        <input type="radio" name="language" />
        <label>Не имеется</label>
        <input type="radio" name="language" />
        <label>1 язык</label>
        <input type="radio" name="language" />
        <label>Больше одного языка</label>
      </div>
    </div>
  );
};
