document.URL
"https://www.youtube.com/watch?v=Fi_NWiFTucQ"
var a = document.URL
undefined
a.split("/")
(4) ["https:", "", "www.youtube.com", "watch?v=Fi_NWiFTucQ"]
a.split("/")[3]
"watch?v=Fi_NWiFTucQ"
var b = a.split("/")[3]
undefined
b.split("=")
(2) ["watch?v", "Fi_NWiFTucQ"]
b.split("=")[1]
"Fi_NWiFTucQ"

var a= "hi i am pranit"
undefined
a.split(" ")
(4) ["hi", "i", "am", "pranit"]
a.split(" ")[3]
"pranit"
a.split(" ")[0]
"hi"