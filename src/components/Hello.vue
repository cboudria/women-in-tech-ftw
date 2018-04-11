<!-- HTML for Head Banner -->
<template>
<v-container class="pa-0"  fluid v-bind="{ [`grid-list-${size}`]: true }">
  <v-layout row wrap class="header">
    <v-flex xs12>
      <h1><b>Ultimate Resource <br>for<span style="color: #FF1744;"> Women</span> <br> In Technology</b></h1>
      <p>find information & inspiration</p>
      <div class="text-xs-right">
        <v-btn outline uppercase button dark brdr-black c-gray-secondary>View Spotlight</v-btn>
      </div>
     <!--<v-carousel>
       <v-carousel-item 
         v-for="wit in wit_images" 
         :src="wit.imageURL" 
         :key="wit.id"></v-carousel-item>
      </v-carousel>-->
    </v-flex>  
  </v-layout> 
  <v-layout row wrap class="quote">
    <v-flex xs12>
      <p><b>I think it’s very important to get more women into
      <br>computing. My slogan is: Computing is too important
      <br> to be left to men.</b>
      <br><span style="font-family: Source Sans Pro; font-weight: 400; font-size: 20px;">-Karen Sparck Jones, Professor at Cambridge 
        Computer Laboratory</span></p>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="how-to">
    <v-flex sm6 >
      <h3><b><span style="color: #FF1744;">HOW TO USE THIS</span></b> SITE</h3>
      <p>is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, magna finibus 
        onsequat finibus, elit mauris vehicula augue, eu ornare felis tellus ut ante. Suspendisse dui felis, dignissim 
        in dui vitae, blandit dignissim lorem. Maecenas leo nibh, elementum in justo sodales, molestie aliquet magna.</p>
    </v-flex>   
    <v-flex sm6 class="pl-5">
      <img src="../assets/how-to.jpg"/>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="resources">
    <v-flex xs12>
      <h3><b>RESOURCES</b></h3>
      <p> Explore this resource section to help you find information on colleges, repositories,<br>
        entrepreneurship, and code camps!.</p>
    </v-flex>
    <v-flex sm5 class="resources-card1">
      <v-card>
        <v-card-media src="https://images.unsplash.com/photo-1500444889843-aa1250ef12b6?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" height="320px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Entrepreneurs</h4>
            <div style="color: #ffffff;">Find women entrepreneurs in tech and find out <br>how they started their business; get inspired to start your own...</br></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="yellow accent-1">View Resources</v-btn>
          <!--<v-btn flat color="orange">Explore</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex sm5 class="resources-card2">
      <v-card>
        <v-card-media src="https://static.pexels.com/photos/7375/startup-photos.jpg" height="320px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Repos</h4>
            <div style="color: #ffffff;">Find repositories to work on, gain more code <br>cred or create something new!</br></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="yellow accent-1">View Resources</v-btn>
          <!--<v-btn flat color="orange">Explore</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex sm5 class="resources-card3">
      <v-card>
        <v-card-media src="https://images.unsplash.com/photo-1490376840453-5f616fbebe5b?auto=format&fit=crop&w=1502&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" height="320px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Universities</h4>
            <div style="color: #ffffff;">Explore and find colleges that have great programs <br>and high graduation rates for women in technology.</br></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="yellow accent-1">View Resources</v-btn>
          <!--<v-btn flat color="orange">Explore</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex sm5 class="resources-card4">
      <v-card>
        <v-card-media src="https://c1.staticflickr.com/4/3758/10163600644_366863f286_b.jpg" height="320px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Code Camps</h4>
            <div style="color: #ffffff;">Find code camps to gain more knowledge on <br>programming languages and make new friends!</br></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="yellow accent-1">View Resources</v-btn>
          <!--<v-btn flat color="orange">Explore</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="spotlight">
    <v-flex sm6 class="pr-5">
      <img src="../assets/spotlight.jpg"/>
    </v-flex>   
    <v-flex sm6 class="pl-5">
      <h3><b>SPOTLIGHT</b></h3><br>
      <p><span style= "font-family: PT Sans Narrow; font-weight: 700; font-size: 35px; color: #FF1744;">SARAH SANDERS,</span> 
      <span style= "font-family: PT Sans Narrow; font-weight: 400; font-size: 35px;">AGE 25 </span> <br /><span style=" font-family: PT Sans Narrow; font-weight:400;"> 
      Front-End Developer at Spotify</span><br />
      &nbsp;
      &nbsp;
      <br>is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam,
      magna finibus consequat finibus, elit mauris vehicula augue, eu ornare felis 
      tellus ut ante. Suspendisse dui felis, dignissim in dui vitae, blandit dignissim 
      lorem. Maecenas leo nibh, elementum in justo sodales, molestie aliquet magna.<br /><br /> To 
      see other women making a difference in tech click here: <span style= "font-family: PT Sans Narrow; font-weight: 400; color: #7F7CF2;">View More.</span></p>
    </v-flex>
  </v-layout>
 <v-layout row wrap class="call-to-action" style="background:linear-gradient(to bottom, #57c7ff, #7f7cf2);">
    <v-flex xs12>
      <h3><b>SIGN UP</b></h3>
      <p> sign up to get updated on what's going on</p>
      <div class="text-xs-center">
        <v-btn outline uppercase button dark brdr-black c-gray-secondary>Subcribe</v-btn>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<!-- JS -->
<!--<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'WOMEN IN TECH FTW'
    }
  }
}
</script>
<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>-->

<!--<script>
  export default {
    data () {
      return {
        wit_images: [
          {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/71/MediaWiki_Coding_Workshop_for_Women_Vienna_I.jpg', id: 'image1'
          },
          {
            imageURL: 'https://static.pexels.com/photos/36990/pexels-photo.jpg', id: 'image2'
          },
          {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Regina_Honu_01.jpg', id: 'image3'
          },
          {
            imageURL: 'https://www.jpl.nasa.gov/edu/images/news/burley.jpg', id: 'image4'
          }
        ]
      }
    }
  }
</script>-->

<!-- CSS -->
<!--Fix the margin and padding!! the margin is wha should be added, not the padding-->
<style scoped>
h1, h2, h3 {
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: normal;
  color: #212733;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #212733;
}

/*add the padding for space between elements here*/
.header {
  background-image: url("../assets/hero.jpg");
  height: 600px; 
  padding-top: 40px;
  padding-left: 40px;
}

.header h1 {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 75px;
  color: #ffffff;
  text-align: right;
  margin-top: 120px;
  margin-right: 170px;
}

.header p {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 35px;
  color: #ffffff;
  text-align: right;
  margin-right: 170px;
  /*padding: 2.75em;*/
}

.header button {
    font-weight: 200;
    border: 1px solid #ffffff;
    margin-right: 170px;
}

.quote {
  background-color: #7F7CF2;
  margin-top: 100px;
}

.quote p {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 40px;
  padding: 40px;
  margin: 16px;
  color: #ffffff;
  line-height: 58px;
  text-align: center;
}

.how-to {
  background-color: #f7f7f7;
  padding-top: 100px;
  padding-bottom: 100px;
}

.how-to h3{
  padding-top: 40px;
  margin-left: 170px;
}

.how-to p {
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 2.75em;
  padding-left: 170px;
  line-height: 32px;
  color: #212733;
}

.how-to img {
  padding: 5px;
  margin-right:140px;
}

.resources {
  background-color: #ffffff;
  padding-top:100px;
  padding-bottom:100px;
}

.resources h3 {
  font-family: 'PT Sans Narrow', sans-serif;
  color: #212733;
  margin-left: 170px;
}

.resources p {
  font-family: 'PT Sans', sans-serif;
  padding: 2.75em;
  padding-left: 170px;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  color:#212733;
}

.resources-card1{
  margin-left:170px;
}

.resources-card1 h4 {
  color:#ffffff;
}

.resources-card1 div {
  background-color:#7F7CF2;
}

/*.resources-card2{
  padding-right:140px;
}*/

.resources-card2 h4 {
  color:#ffffff;
}

.resources-card2 div {
  background-color:#7F7CF2;
}

.resources-card3{
  margin-left:170px;
}

.resources-card3 h4 {
  color:#ffffff;
}

.resources-card3 div {
  background-color:#7F7CF2;
}

/*.resources-card4{
  padding-right:140px;
}*/

.resources-card4 h4 {
  color:#ffffff;
}

.resources-card4 div {
  background-color:#7F7CF2;
}

.spotlight {
  padding-bottom: 100px;
  padding-top: 100px;
  background-color: #f7f7f7;
}

.spotlight h3{
  margin-top: 30px;
  padding-right: 40px;
  font-size: 20px;
  color:#57C7FF;
}

.spotlight p {
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;
  color: #212733;
  padding-right: 140px;
  padding-top: 5px;
}

.spotlight img {
  padding-left: 170px;
}

.call-to-action {
  height: 400px;
}

.call-to-action h3 {
  color: #ffffff;
  font-size: 80x;
  text-align: center;
  margin-top: 120px;
  /*margin-right: 170px*/
}

.call-to-action p {
  color: #ffffff;
  font-size: 20px;
  text-align: center;
}

</style>





