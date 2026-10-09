
function addScript() {
    if (document.getElementById("web-slinger-loader")) return;
    let script = document.createElement('script');
    script.id = "web-slinger-loader";
    script.src = "/assets/js/content.js";
    document.body.appendChild(script);
}
