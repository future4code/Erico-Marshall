```
function calculaNota(ex, p1, p2) {
    const nota = (ex*1.6/10) + (p1*3.3/10) + (p2*5/10);
    if (nota >= 9) {
    return "A";
    } else if (nota < 9 && nota >= 7.5) {
    return "B";
    } else if (nota < 7.5 && nota >= 6) {
    return "C";
    } else {
    return "D";
    }
}
```