console.log("blog loaded")
document.addEventListener('DOMContentLoaded',function(){
    console.log("dom loaded")
    function fetchBlogPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                const blogContainer = document.getElementById('blog-posts');
                const blogCardTemplate = document.getElementById('blog-card-template');

                posts.slice(0, 20).forEach(post => { // Limiting to 20 posts
                    // Clone the template and fill in the data
                    const clone = blogCardTemplate.content.cloneNode(true);
                    clone.querySelector('.card-header').textContent = post.title;
                    clone.querySelector('.card-title').textContent = post.title;
                    clone.querySelector('.card-text').textContent = post.body;
                    blogContainer.appendChild(clone);
                });
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
            });
    }
    fetchBlogPosts();
});