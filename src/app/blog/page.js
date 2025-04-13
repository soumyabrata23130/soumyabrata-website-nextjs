import React from "react"

export default function Blog() {
	/* const blogList=document.getElementById("blog-list")
	function createPost() {
		const blogPost=document.createElement("div")
		blogPost.innerHTML=text
		blogList.appendChild(blogPost)
		text=""
	} */
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Blog</h2>
			<div style={{ textAlign: "center" }}>
				<textarea placeholder="Write something..." required/>
				<br/>
				<button type="submit">Post</button>
				<div id="blog-list"></div>
			</div>
		</div>
	)
}