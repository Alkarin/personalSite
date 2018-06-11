        <div id="footer">
            <div>Copyright <?php echo date("Y"); ?>, Alexander Vaughan</div>
            <a href="privacy.php">Privacy Policy</a>
        </div>
        <script type="text/javascript" src="/js/css3-animate-it.js"></script>
    </body>
</html>
<?php
if(isset($connection)){
  // 5. Close database connection
  mysqli_close($connection);
}
?>
