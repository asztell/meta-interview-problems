// Add any extra import statements you may need here


// Add any helper functions you may need here
function sortNum(a, b) {
  return a - b;
}

function areTheyEqual(array_a, array_b){
  // check if arrays are equal in length, else return false
  if (array_a.length !== array_b.length) return false;
  
  // sort both arrays
  const sorted_a = array_a.sort(sortNum);
  const sorted_b = array_b.sort(sortNum);
  
  // loop over array_a and check for corresponding value in array_b
  for (let i = 0; i <= sorted_a.length; i += 1) {
    // if not equal, return false
    if (sorted_a[i] !== sorted_b[i]) return false;
  }
  
  // return true
  return true;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];
var expected_1 = true;
var output_1 = areTheyEqual(array_a_1, array_b_1); 
check(expected_1, output_1); 

var array_a_2 = [1, 2, 3, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = false;
var output_2 = areTheyEqual(array_a_2, array_b_2); 
check(expected_2, output_2); 

// Add your own test cases here
var array_a_3 = [1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4, 1, 2, 3, 4, 0, 3, 4];
var array_b_3 = [1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, 1, 4, 3, 2, 4, 3, 0, ];
var expected_3 = true;
var output_3 = areTheyEqual(array_a_3, array_b_3); 
check(expected_3, output_3); 

var array_a_2 = [1, 2, 3, 4, 5, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = false;
var output_2 = areTheyEqual(array_a_2, array_b_2); 
check(expected_2, output_2); 
