const $ = 'jQuery';

window.onload = function() {
  var data = {
    title: "Hope Hicks is resigning from the White House",
    article: ["(CNN) - White House communications director Hope Hicks, one of President Donald Trump's longest-serving and closest aides, is resigning, the White House confirmed Wednesday.",
    "Hicks' departure capped her meteoric rise from Trump Organization communications aide to the upper crust of power in Washington in just a few years, during which Hicks sought to maintain a remarkably low profile for someone in her position.",
    "Her resignation will undoubtedly reverberate for months to come inside the West Wing, where Trump will find himself for the first time in more than three years without the constant presence of his most loyal aide -- who is among the handful of aides who worked with Trump at his company, during the rollicking campaign and into the White House.",
    "Hicks' resignation came a day after she testified before the House Intelligence Committee and said she had told white lies in the course of her duties, though there was no indication the two were connected. A source familiar with her thinking said she first seriously considered resigning in the wake of the scandal involving former senior aide Rob Porter, whose public defense Hicks helped craft while also dating him at the time.",
    "Hicks won't leave immediately but she expected to leave in the next few weeks.",
    `The President praised her as "outstanding."`,
    `"She is as smart and thoughtful as they come, a truly great person. I will miss having her by my side but when she approached me about pursuing other opportunities, I totally understood. I am sure we will work together again in the future," Trump said in a written statement on Wednesday.`,
    `In a statement, Hicks thanked Trump and the administration, saying: "There are no words to adequately express my gratitude to President Trump. I wish the President and his administration the very best as he continues to lead our country."`,
    `The New York Times first reported her departure.`,
    `It was not immediately clear who will replace Hicks as White House communications director -- a position that has now been filled by four individuals -- but some of Hicks' duties have increasingly been filled over the last two months by Mercedes Schlapp, the senior adviser for strategic communications. While Hicks was busy fighting the crisis of the day at the President's side or meeting with her lawyers, Schlapp stepped in to lead the communications team, sources told CNN earlier this month.`,
    `At just 29, Hicks is now expected to return to the private sector with the heading of former White House communications director, a label of prestige that can unlock top positions at blue chip companies, six-figure TV deals and profitable, best-selling books.`,
    `Some of those could be in the offing for Hicks, who has remained a mystery to many Americans despite her proximity to power and influential role.`,
    `But Hicks will not exit the White House unstained, having drawn the scrutiny of special counsel Robert Mueller over her role in crafting the misleading statement about Donald Trump Jr.'s meeting with a Russian lawyer promising dirt on Hillary Clinton during the 2016 campaign.`,
    `Hicks was one of the White House officials involved in crafting the statement aboard Air Force One that claimed Trump Jr., the President's son-in-law, Jared Kushner, and then-campaign chairman Paul Manafort took the meeting with the lawyer primarily to discuss US policy on Russian adoptions -- rather than because Trump Jr. believed the lawyer would provide incriminating information on Clinton from the Russian government.`,
    `Hicks also came under fire more recently over her involvement in crafting the White House's initial defense of Rob Porter, the White House staff secretary who resigned in disgrace after two of his ex-wives publicly accused him of domestic abuse.`,
    `Hicks, who at the time was dating Porter, did not recuse herself from the matter. Instead, she urged other White House officials to put out a robust defense of Porter in the face of the allegations.`,
    `Hicks was one of Trump's first hires as he assembled a lean team of aides who would launch his improbable presidential campaign. From then until his election, she was a constant presence by his side -- traveling to nearly every rally, hovering within earshot during interviews and always prepared to type out a bombastic tweet as dictated by her boss.`,
    `Hicks, who first entered the White House as director of strategic communications, rose to the position of communications director after her predecessor Anthony Scaramucci flamed out in just 10 days, after attacking fellow White House aides in a vulgarity-laden interview.`,
    `The pick marked a 180-degree turn from the White House's earlier attempts to install a seasoned Republican strategist in the communications director post and was a tacit acknowledgment that wooing such a candidate was likely not in the cards.`,
    `The Greenwich, Connecticut, native officially entered Trump's orbit in 2014, after the President's daughter Ivanka Trump poached Hicks from the public affairs firm where Trump had been a client. Soon enough, Hicks was working directly for the family patriarch at the Trump Organization and he asked her in 2015 to join his campaign as his press secretary.`],
    index: 0
  }
  var template = `
    <div class="article container">
      <div class="row">
        <div class="selector col-2" v-on:click="changeIndex(-1)" v-on:keydown.37="changeIndex(-1)">
          <i class="fas fa-caret-left"></i>
        </div>
        <div class="text col-8">
          <h1 id="title">{{ title }}</h1>
          <hr>
          <p id="article-text-index">{{ index + 1 }} / {{ article.length }}</p>
          <p id="article-text">{{ article[index] }}</p>
        </div>
        <div class="selector col-2" v-on:click="changeIndex(1)" v-on:keydown.40="changeIndex(1)">
          <i class="fas fa-caret-right"></i>
        </div>
      </div>
    </div>
  `
  var url = "https://www.cnn.com/2018/02/28/politics/hope-hicks-white-house/index.html"
  var vm = new Vue({
    el: '#app',
    template: template,
    data: data,
    url: url,
    methods: {
      // parse: function() {
      //
      // },
      changeIndex: function(num) {
        var i = this.index + num;
        if (i < (this.article.length) && i >= 0) {
          this.index = i;
        }
      }
    }
  })
}
