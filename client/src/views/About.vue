<template class="container-fluid">
  <div class="about row">
    <div class="col-12 about-text">
      <h1><strong>About Flip</strong></h1>
      <p>Flip is an application designed to help individuals study topics of their choice. Users can create, edit, and
        share digital flashcards. Flashcards can be shared pulicly and members can store cards privately. </p>
      <p>Flip utilizes the single source of truth state management design pattern, and leverages the Vue.JS framework
        and
        Vue-Router for client-side rendering.

        The server side is managed on the Node.js platform and intergrates Express for API endpoints. Flip incorporates
        a NoSQL
        document driven database hosted through MLab, and manages the connection pool through the popular Mongoose
        Framework.
      </p>

      <h4><strong>Developers</strong></h4>
      <ul>
        <li><b>Alan Braithwaite</b></li>
        <li><b>Cory Brighton</b></li>
        <li><b>Felix Ramirez</b></li>
        <li><b>Kasandra Wolf</b></li>
        <li><b>Chrissy Zwainz</b></li>
      </ul>
    </div>
    <span class="col-12 align-items-end">
      <p class="footer ">Special Thanks To
        <a href="https://boisecodeworks.com/">
          <img src="../assets/cw-logo-square.png" class="cw-logo"></a></p>
    </span>

  </div>
</template>
<style scoped>
  .footer {
    font-size: 0.9em;
  }

  .cw-logo {
    height: 3em;
  }

  ul {
    list-style-type: none;
  }

  @media only screen and (min-width: 650px) {
    .about-text {
      padding-left: 200px;
      padding-right: 200px;
    }

  }
</style>