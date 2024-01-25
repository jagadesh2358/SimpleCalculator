function calculation1(data) {
    // console.log(data);
    let c = document.getElementById("inp")
    console.log(c)
    c.value += data
}
function evaluation() {
    let value1 = document.getElementById("inp").value;
    console.log(value1)
    let y = eval(value1)
    console.log(y)
    document.getElementById("inp").value = y
}
function allclear() {
    document.getElementById("inp").value = ""
}
function delete1() {
    let inp = document.getElementById("inp")
    inp.value = inp.value.slice(0, -1)
    if (inp.value == "") {
        inp.value = 0
    }
}