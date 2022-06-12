function execute(url, page) {
    if(url.slice(-1) === "/")
        url = url.slice(0, -1)
    if(!page) page='1'

    if(page!=='1')
    {
        url = url +"/index_" + page + ".html";
    }
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(下一页)").first().attr("href").replace(".html","").split("index_")[1]
		doc.select(".content-wrap article.excerpt").forEach(e => {
            let link = e.select("a").first().attr("href");
            if(link.includes(".html") && link.includes("/b/"))
                data.push({
                    name: e.select("a").first().text(),
                    link: link,
                    description: e.select(".auth-span").first().text(),
                    host: "https://www.52shuku.vip"
                });
        });
        return Response.success(data, next)
    }
    return null;
}