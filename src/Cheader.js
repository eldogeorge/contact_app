import React from 'react'
import { Link } from 'react-router-dom'

function Cheader() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div class="container-fluid">
                    <Link to={''} style={{textDecoration:'none'}}>
                        <a class="navbar-brand" href="#">Contact Details  </a>
                    </Link>
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Cheader