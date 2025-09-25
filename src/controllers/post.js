let posts = [
    { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1"},
    { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2"},
    { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3"},
    { id: 4, title: "Bài viết 4", content: "Nội dung bài viết 4"},
]

export function setPosts(req, res) {
    res.json(posts);
}

export function getPosts(req, res) {}
export function getPostById(req, res) {}
export function addPost(req, res) {}
export function updatePost(req, res) {}
export function deletePost(req, res) {}