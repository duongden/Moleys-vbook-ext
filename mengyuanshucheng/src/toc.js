function execute(url) {
	url = url.replace('wap.mengyuanshucheng.com', 'www.mengyuanshucheng.com');
    url = url.replace("/my/","/index/")
    console.log(url)
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("dl").last()
        let el = el1.select("dd a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url:"http://www.mengyuanshucheng.com" + e.attr("href"),
                host: "http://www.mengyuanshucheng.com"
            })
        }
        return Response.success(data);
    }
    return null;
}