<!DOCTYPE html>
<!--[if IE 8]>
<html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en"> <!--<![endif]-->
<head>
    <title>S. Berkay Aydın</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sabri Berkay Aydın Özgeçmiş / Personal Resume">
    <meta name="author" content="Sabri Berkay Aydın Full-Stack Developer">
    <link rel="shortcut icon" href="favicon.ico">
    <link
        href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic'
        rel='stylesheet' type='text/css'>
    <!-- Global CSS -->
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <!-- Plugins CSS -->
    <link rel="stylesheet" href="assets/plugins/font-awesome/css/font-awesome.css">

    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/styles.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="assets/js/react.js"></script>
    <script src="assets/js/react-dom.js"></script>

</head>

<body>
<div class="wrapper">
    <section class="sampleapp"></section>

    <div class="sidebar-wrapper">
        <div class="profile-container">
            <img class="profile" src="assets/images/profile.png" alt=""/>
            <h1 class="name">S.Berkay Aydın</h1>
            <h3 class="tagline">Full Stack Developer</h3>
            <hr>
            <a href="berkay_aydin_cv.pdf" target="_blank" class="btn btn-default btn-block"
               style="color:black !important;">Download PDF Resume</a>
        </div><!--//profile-container-->

        <div class="contact-container container-block">
            <ul class="list-unstyled contact-list">
                <li class="email"><i class="fa fa-envelope"></i><a
                        href="mailto: berkay@greadea.com">berkay@greadea.com</a>
                </li>
                <li class="phone"><i class="fa fa-phone"></i><a href="tel:+90507 808 4130">+90 (507) 808 4130</a></li>
                <li class="website"><i class="fa fa-globe"></i><a
                        href="http://sbaydin.com"
                        target="_blank">sbaydin.com</a></li>
                <li class="website"><i class="fa fa-globe"></i><a
                        href="http://greadea.com"
                        target="_blank">greadea.com</a></li>
                <li class="linkedin"><i class="fa fa-linkedin"></i><a href="http://www.linkedin.com/in/sbaydin"
                                                                      target="_blank">linkedin.com/in/sbaydin </a></li>
                <li class="github"><i class="fa fa-github"></i><a href="www.github.com/sbayd" target="_blank">github.com/sbayd</a>
                </li>

            </ul>
        </div><!--//contact-container-->
        <div class="education-container container-block">
            <h2 class="container-block-title">Education</h2>
            <div class="item">
                <h4 class="degree">BSc in <a href="http://www.ebit.hacettepe.edu.tr" target="_blank">CEIT</a></h4>
                <h5 class="meta">Hacettepe University</h5>
                <div class="time">2012 - Present</div>
            </div><!--//item-->
        </div><!--//education-container-->

        <div class="languages-container container-block">
            <h2 class="container-block-title">Languages</h2>
            <ul class="list-unstyled interests-list">
                <li>Turkish <span class="lang-desc">(Native)</span></li>
                <li>English <span class="lang-desc">(Professional)</span></li>
            </ul>
        </div><!--//interests-->

        <div class="interests-container container-block">
            <h2 class="container-block-title">Interests & Hobies</h2>
            <ul class="list-unstyled interests-list">
                <li>Pipes</li>
                <li>Analog Photography</li>
                <li>Cooking</li>
                <li>Archery</li>
                <li>Poems</li>
                <li>Drums</li>
            </ul>
        </div><!--//interests-->

    </div><!--//sidebar-wrapper-->

    <div class="main-wrapper">

        <section class="section summary-section">
            <h2 class="section-title"><i class="fa fa-user"></i>Career Profile</h2>
            <div class="summary">
                <p>I'm coding something since I was 14. In the beginning I was creating game servers for popular games,
                    after that I started with php and created some basic apps for small-sized companies. Then I decided
                    to
                    train myself. And now, I have successfully finished a good many projects for companies, universities
                    and my government
                    you can see the project details <a href="#projects">below.</a> So, may be we can work together!</p>
            </div><!--//summary-->
        </section><!--//section-->

        <section class="section experiences-section">
            <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>
            <div id="experiences">
            </div>
        </section><!--//section-->

        <section class="section projects-section" >
            <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
            <div class="intro">
                <p>Projects, i have completed are listed below. To get general information about private project or
                    not-finished projects you can get in touch.</p>
            </div><!--//intro-->
           <div id="projects"></div>
        </section><!--//section-->

        <!--skills-section-->
        <section class="skills-section section">
            <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div id="skills">

            </div>
        </section>
        <!--//skills-section-->

    </div><!--//main-body-->
</div>

<footer class="footer">
    <div class="text-center">

    </div><!--//container-->
</footer><!--//footer-->

<!-- Javascript -->
<script type="text/javascript" src="assets/plugins/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

<!-- custom jsx -->
<script type="text/javascript" src="assets/jsx/babel/projects.js"></script>
<script type="text/javascript" src="assets/jsx/babel/skillset.js"></script>
<script type="text/javascript" src="assets/jsx/babel/experiences.js"></script>
<script type="text/javascript" src="assets/jsx/babel/main.js"></script>
</body>
</html> 

