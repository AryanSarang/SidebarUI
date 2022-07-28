import React from "react";
const DailyFeed = () => {
    return (
            <div class="col-12 ms-auto cardAndFeed col-lg-4 ">
                <div class="card  ">
                    <div class="card-header">
                        <span class="badge bg-info float-end">Today</span>
                        <h5 class="card-title mb-0">Daily feed</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-start">
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width="36" height="36" class="rounded-circle me-2" alt="Ashley Briggs" />
                            <div class="flex-grow-1">
                                <small class="float-end">5m ago</small>
                                <strong>Ashley Briggs</strong> started following <strong>Stacie Hall</strong><br />
                                <small class="text-muted">Today 7:51 pm</small><br />

                            </div>
                        </div>

                        <hr />
                        <div class="d-flex align-items-start">
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHnii5BUoQYGA/profile-displayphoto-shrink_400_400/0/1643805825172?e=1664409600&v=beta&t=vlrecuTjVZuTSLRnGManmNZ2uLU3ungQdm3jGJQbVlE" width="36" height="36" class="rounded-circle me-2" alt="Aryan Sarang" />
                            <div class="flex-grow-1">
                                <small class="float-end">30m ago</small>
                                <strong>Aryan Sarang</strong> posted something on <strong>Stacie Hall</strong>'s timeline<br />
                                <small class="text-muted">Today 7:21 pm</small>

                                <div class="border text-sm text-muted p-2 mt-1">
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing...
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div class="d-flex align-items-start">
                            <img src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="36" height="36" class="rounded-circle me-2" alt="Stacie Hall" />
                            <div class="flex-grow-1">
                                <small class="float-end">1h ago</small>
                                <strong>Stacie Hall</strong> posted a new blog<br />

                                <small class="text-muted">Today 6:35 pm</small>
                            </div>
                        </div>

                        <hr />
                        <div class="d-grid">
                            <a href="#" class="btn btn-primary">Load more</a>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
export default DailyFeed;