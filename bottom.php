<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Stop form from submitting

        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();
        let recaptchaResponse = document.querySelector(".g-recaptcha-response").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!recaptchaResponse) {
            alert("Please complete the reCAPTCHA.");
            return;
        }

        this.submit(); // Submit the form after validation
    });
</script>


 <div class="btn-scroll-top">
        <svg class="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
            <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z">
        </svg>
    </div>
    <!-- Libs JS -->
    <script src="assets/js/vendors/jquery-3.7.1.min.js"></script>
    <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
    <script src="assets/js/vendors/swiper-bundle.min.js"></script>
    <script src="assets/js/vendors/aos.js"></script>
    <script src="assets/js/vendors/wow.min.js"></script>
    <script src="assets/js/vendors/jquery.appear.js"></script>
    <script src="assets/js/vendors/jquery.odometer.min.js"></script>
    <script src="assets/js/vendors/headhesive.min.js"></script>
    <script src="assets/js/vendors/smart-stick-nav.js"></script>
    <script src="assets/js/vendors/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/vendors/gsap.min.js"></script>
    <script src="assets/js/vendors/ScrollToPlugin.min.js"></script>
    <script src="assets/js/vendors/ScrollTrigger.min.js"></script>
    <script src="assets/js/vendors/custom-cursor.js"></script>
    <script src="assets/js/vendors/jquery.carouselTicker.min.js"></script>
    <script src="assets/js/vendors/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/vendors/isotope.pkgd.min.js"></script>
    <!-- Theme JS -->
    <script src="assets/js/gsap-custom.js"></script>
    <script src="assets/js/main.js"></script>

    <!-- Other scripts -->
</body>

</html>