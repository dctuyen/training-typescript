let nameStr: String = 'Hello World'
let nb : number = 100


// DataType
let arr: string[] = [];
arr.push('tt')
arr.push('ts')
console.log(arr)

/*
 * Tuple
 * Tương tự 1 mảng, nhưng cố định vị trí và số lượng phần tử (cần khai báo số lượng phần tử khi khởi tạo)
*/
let color: [number, number, number] = [255, 0, 0]; // cần cố định dữ liệu

/*
* Enum: 1 mảng các hằng số (const)
* */

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction.Up)


/*
* Trong trường hợp chưa biết type để gán có thể dùng any / void / never
* any: không biết trả về loại nào
* void: không trả về giá trị (trả về undefined)
* never: không trả về giá trị gì cả
* */

function logging():void {
    console.log('Server logging...')
}
let check: void= logging()
console.log(`check: ${check}`)

// @ts-ignor
function logging2():never {
    console.log('Server logging...')
}

let check2: void= logging2()
console.log(`check2: ${check2}`)


// Union type: quy định type động cho biến, vd:
let a: string|number;

/*
! Type aliases: cho phép tạo mới 1 type từ type đang tồn tại
! Cực kỳ hữu dụng khi dùng với Union
**/

/*
* Type script function
*/