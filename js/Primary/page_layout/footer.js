/**
 * Footer Component
 * Generates and manages site footer
 */

// Footer HTML template
const FOOTER_TEMPLATE = `
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-main-sections">
                <div class="footer-section contact-section">
                    <h3>Contact Us</h3>
                    <p>Phone: 936.273.5600</p>
                    <p>Email: nhhp@consolidated.net</p>
                </div>
                
                <div class="footer-section location-section">
                    <h3>Location</h3>
                    <p>17082 Lexington Dr</p>
                    <p>Conroe, TX 77385</p>
                </div>
                
                <div class="footer-section hours-section">
                    <h3>Hours</h3>
                    <p><strong>Mon-Sun:</strong></p>
                    <p>8:00AM - 9:00PM</p>
                </div>
                
                <div class="footer-section social-section">
                    <h3>Follow Us</h3>
                    <div class="social-links-container">
                        <a href="https://www.facebook.com/profile.php?id=100057098694711" target="_blank" rel="noopener" aria-label="Facebook">
                            <img src="assets/icons/facebook.webp" alt="Facebook" class="footer-social">
                        </a>
                        <a href="https://www.instagram.com/explore/locations/439273850/north-houston-horse-park/" target="_blank" rel="noopener" aria-label="Instagram">
                            <img src="assets/icons/instagram.webp" alt="Instagram" class="footer-social">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-credentials">
                <img src="assets/icons/Better-Business-Bureau-A-Rating.webp" alt="BBB A+ Accredited Business" class="footer-bbb">
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} North Houston Horse Park. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
`;

// Load footer into the page
function loadFooter() {
  // Check if footer already exists in HTML
  const existingFooter = document.querySelector(".site-footer");
  if (existingFooter) {
    // Footer already exists in HTML, no need to inject
    return;
  }

  // Find footer placeholder and inject footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_TEMPLATE;
  } else {
    // Fallback: append to body if no placeholder exists
    document.body.insertAdjacentHTML("beforeend", FOOTER_TEMPLATE);
  }
}
