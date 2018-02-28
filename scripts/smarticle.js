window.onload = function() {
  const app = new Vue({
    el: '#app',
    template: `
      <div class="article">
        <p>{{ article[index] }}</p>
        <p>{{ index }}</p>
        <div class="selector">
          <button v-on:click="(index > 0) ? index -= 1:index = index"><</button>
          <button v-on:click="(index < (article.length - 1)) ? index += 1: index = index">></button>
        </div>
      </div>
    `,
    data: {
      message: 'Hello Vue!',
      article: ["Hello", "My name is", "Wiki wiki", "Slim Shady"],
      index: 0
    }
  })
}
