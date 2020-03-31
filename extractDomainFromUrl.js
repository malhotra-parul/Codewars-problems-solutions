function domainName(url){
    let start;
    (url.includes("www")) ?
        start = url.indexOf("www") + 4 :
    (url.includes("://")) ?
        start = url.indexOf("/") + 2 : start = 0;

        const end = url.indexOf(".", start);
        return url.slice(start, end);
    };


  console.log(domainName("http://www.6gb5-2a6v5d9z839-i3ehm-jbdv.de/warez/"));