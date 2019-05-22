<template>
    <footer>
        <div class="inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h5 class="mb-4 font-weight-normal">Services</h5>
                        <p><router-link to="/services">All our Services</router-link></p>
                        <p><router-link to="/status">Service Status</router-link></p>
                        <p><router-link to="/account">My Account</router-link></p>
                        <p><router-link to="/support">Get Support</router-link></p>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="mb-4 font-weight-normal">Useful Links</h5>
                        <p><router-link to="/privacy-policy">Privacy Policy</router-link></p>
                        <p><router-link to="/affiliation">Become Affiliated</router-link></p>
                        <p><a href="https://github.com/seedstorm-io" target="_blank">GitHub Repository</a></p>
                        <p><router-link to="/medium">See the Blog</router-link></p>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="mb-4 font-weight-normal">Contact</h5>
                        <p class="text-muted"><i class="fas fa-envelope mr-2"></i><a href="mailto:contact@seedstorm.io">contact@seedstorm.io</a></p>
                        <p class="text-muted"><i class="fab fa-twitter mr-2"></i> <a href="https://twitter.com/safeblock_io" target="_blank">seedstorm_io</a></p> 
                        <p class="text-muted"><i class="fab fa-discord mr-2"></i> <a href="https://discord.gg/zA6PKqU" target="_blank">discord.gg/zA6PKqU</a></p> 
                        <p class="text-muted"><i class="fas fa-key mr-2"></i> <a to="safeblock-pgp-key.asc" title="Fingerprint: 4BD8 8D4C 1882 5867 790E  4528 5681 6686 F338 3210" target="_blank">PGP: F3383210</a></p> 
                    </div>
                    <div class="col-lg-3">
                        <h5 class="mb-4 font-weight-normal">Subscribe</h5>
                        <p class="text-muted">Get in touch of releases and new seedstorm.io features by subscribing to our montly newsletter.</p>
                        <form method="post">
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Enter email here" />
                                <div class="input-group-prepend">
                                    <button class="btn btn-dark" type="submit"><i class="far fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-alt">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        Copyright &copy; {{ new Date().getFullYear() }} SeedStorm.io - All Rights Reserved - Source on GitHub
                    </div>
                    <div class="col-lg-4 text-right">
                        License MIT &bull; Hosted on Windows Azure
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer
{
    background-color: #272a33;
    color: #ffffff;
}

footer .inner
{
    padding: 90px 0;
}

footer a
{
    color: #98a0aa;
    transition: all 0.5s ease;
}

footer a:hover
{
    color: #EEEEEE;
    text-decoration: none;
}

footer .form-control
{
    height: 40px;
    background-color: #2e313a !important;
    box-shadow: none !important;
    border: none;
    padding-right: 50px;
    color: #fff !important;
}

footer .btn-dark
{
    background-color: #2e313a;
    border: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 0 20px;
    color: #AAAAAA;
}

.text-muted
{
    color: #a8aeb4 !important;
}

.footer-alt
{
    background-color: #2e313a;
    color: #a8aeb4;
    padding: 20px 0;
}
</style>
