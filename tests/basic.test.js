import {Selector} from "testcafe"

    fixure ("Getting started with TestCafe")
    .page ("https://devexpress.github.io/testcafe/example/")
test("My first testcafe test", async t =>{
    
    await t.typeText("#developer-name", "VL")
    await t.click("#submit-button")

    await t.expect(Selector("#article-header").innerText).contains("VL")
     //вернуться к .innerText= ??
})
