<?php
  if(!isset($layout_context)){
    $layout_context = "public";
  }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alexander Vaughan</title>
        <link rel="icon" href="../assets/png/raccoon-icon.png">
        <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/master.css" media="all" title="no title" type="text/css" charset="utf-8">
        <link rel="stylesheet" href="css/animations.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>

    <div id="cover" class="parallax">
      <div class="caption">
          <p class="greybox">Name</p>
          <p class="greybox">Title</p>
          <!--<p class="greybox">Alexander Vaughan</p>-->
          <!--<p class="greybox">Software Developer</p>-->
      </div>
    </div>

    <div id="navigation">
        <!--<a href="#signin">Sign in</a>-->
        <a class="nav-button active" href="#cover">Home</a>
        <a class="nav-button" href="#about">About</a>
        <a class="nav-button" href="#resume">Resume</a>
        <a class="nav-button" href="#portfolio">Portfolio</a>
        <a class="nav-button" href="#contact">Contact</a>
        <!--<a href="#news">News</a>-->
    </div>
