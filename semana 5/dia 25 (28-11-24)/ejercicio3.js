
function sum() {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const result_p = document.getElementById("p2");
    const result = parseInt(n1.value) + parseInt(n2.value);
    result_p.innerHTML = result;
    n1.value = "";
    n2.value = "";
}