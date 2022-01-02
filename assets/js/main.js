class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Navbar Section ======= -->
        <nav id="navbar" class="navbar">
            <ul class="nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html#hero">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html#about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="projects.html#projects">Projects</a>
            </li>
            </ul>
        </nav><!-- End Navbar -->
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Footer Section ======= -->
        <footer class="container-fluid text-center">
            <div class="row">
                <div class="col-sm-6">
                    <h3>Contatct Info</h3>
                    <br>
                    <p>Feras Bin Hussain, Riyadh, Saudi Arabia</p>
                    <a class="fa fa-phone"> +966 545820593</a>


                </div>
                <div class="col-sm-6">
                    <h3>Connect</h3>
                    <a href="https://www.linkedin.com/in/feras-binhussain/" class="fa fa-linkedin"></a>
                    <a href="mailto:ferasbinhussain@gmail.com" class="fa fa-google"></a>
                    <a href="mailto:ferasbinhussain@gmail.com" class="fa fa-github"></a>
                    <a href="https://twitter.com/Feras11000" class="fa fa-twitter"></a>
                    <a href="https://www.youtube.com/channel/UCljpiADJUwrSs-o4yrvbb0w" class="fa fa-youtube"></a>
                </div>
            </div>
        </footer><!-- End Footer -->
        `
    }
}
customElements.define('my-footer', MyFooter)