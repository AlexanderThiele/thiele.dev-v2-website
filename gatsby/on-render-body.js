'use strict';

const React = require('react');


const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {


  setPostBodyComponents([
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d26a6514e72a40e28c2712163e67dbe9"}'></script>
  ]);
};

module.exports = onRenderBody;
