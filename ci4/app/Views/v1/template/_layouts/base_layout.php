<!DOCTYPE html>
<html lang="en-IN">

<head prefix="og: https://ogp.me/ns# ">
   <!-- meta_tags -->
   <?= $this->include('v1/template/_partials/meta_tags'); ?>
   <!-- base_layout css vendors file-->
   <link rel="stylesheet" href="assets/vendors/fonts/panton/panton.min2.css" />
   <link rel="stylesheet" href="assets/vendors/font-awesome/4.7.0/css/font-awesome.min.css" />
   <link rel="stylesheet" href="assets/vendors/bootstrap/5.0.0-beta1/bootstrap.min.css" />
   <link rel="stylesheet" href="assets/vendors/bootstrap/bs5-reset/bs5a2-remove.css" />
   <link rel="stylesheet" href="assets/vendors/animate-css/4.1.0/animate.min.css" />
   <link rel="stylesheet" href="assets/vendors/waves/0.7.6/waves.min.css" />
   <!-- base_layout css file for all page -->
   <link rel="stylesheet" href="assets/css/base-layout.css?v01" />
   
   <!-- for page specific css file -->
   <?= $this->renderSection('page-css'); ?>
</head>

<body>
   <?= $this->include('v1/template/_partials/header'); ?>
   <main>
      <?= $this->renderSection('main-content'); ?>
   </main>
   <?= $this->include('v1/template/_partials/footer.php'); ?>
   <!-- all vendors js file-->
   <script src="assets/vendors/jquery/3.5.1/jquery.min.js"></script>
   <script src="assets/vendors/jquery-ui/1.12.1/jquery-ui.min.js"></script>
   <script src="assets/vendors/jquery-sticky/jquery.sticky.min.js"></script>
   <script src="assets/vendors/bootstrap/5.0.0-beta1/bootstrap.bundle.min.js"></script>
   <script src="assets/vendors/waves/0.7.6/waves.min.js"></script>
   <!-- js for all page -->
   <script defer src="assets/js/base-layout.js?v1"></script>
   <!-- page specific js -->
   <?= $this->renderSection('page-js'); ?>
</body>

</html>