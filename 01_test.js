const accountId = 1323
let accountEmail = "nilwarle@gmail.com"
var accountPassward = "123"
accountCity = "Pune" //this is not good

let accountState;//undefind

accountEmail = "nil@gamil.com"
accountPassward = "$@123@"
accountCity = "Bengaluru"

console.log(accountEmail);
console.table([accountId,accountEmail, accountPassward, accountCity])

//    output
// ─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │      1323       │
// │    1    │ 'nil@gamil.com' │
// │    2    │    '$@123@'     │
// │    3    │   'Bengaluru'   │
// └─────────┴─────────────────┘//


