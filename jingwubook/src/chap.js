function execute(url) {
    url = url.replace('m.jingwubook.com', 'www.jingwubook.com');
    let data  ="";
    let part1 = url.replace("https://www.jingwubook.com", "").replace("http://www.jingwubook.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.jingwubook.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a[rel=\"next\"]").attr("href").replace(".html","");
console.log(next)
            let htm = doc.select("#content_main").html();
            data = data + htm;
        } else {
            break;
        }
    }
    if (data) {
        return Response.success(data);
    }
    return null;
}