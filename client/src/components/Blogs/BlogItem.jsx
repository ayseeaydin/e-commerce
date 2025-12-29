import "./BlogItem.css";

const BlogItem = () => {
    return (
        <li class="blog-item">
            <a href="#" class="blog-image">
                <img src="img/blogs/blog1.jpg" alt="" />
            </a>
            <div class="blog-info">
                <div class="blog-info-top">
                    <span>25 Feb, 2021 </span>
                    -
                    <span>0 Comments</span>
                </div>
                <div class="blog-info-center">
                    <a href="#">Aliquam hendrerit mi metus</a>
                </div>
                <div class="blog-info-bottom">
                    <a href="#">Read More</a>
                </div>
            </div>
        </li>
    )
}

export default BlogItem;