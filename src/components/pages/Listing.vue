<template>
  <div class="listing">
    <aside class="filters">
      <h3>Фильтры</h3>
      <form action="#">
        <div>
          <label>
            <span>Имя:</span>
            <input type="text">
          </label>
        </div>
        <div>
          <label>
            <span>Позиция:</span>
            <select>
              <option value="">любая</option>
              <option value="front-end developer">front-end developer</option>
              <option value="back-end developer">back-end developer</option>
            </select>
          </label>
        </div>
      </form>
    </aside>
    <div class="listing-main">
      <h2>Кандидаты</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Позиция</th>
            <th>Скилы</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Вася Куролесов</td>
            <td>kurolesov@mail.ru</td>
            <td>front-end developer</td>
            <td>gulp sass html css jquery</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listing'
}
</script>

