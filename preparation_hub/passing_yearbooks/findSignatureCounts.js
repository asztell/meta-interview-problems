function runInitialRound(original, counting, rotating) {
  // create temp from original and set all to undefined
  let temp = Array(original.length).fill(undefined);
  // iterate through rotating
  for (let i = 0; i < rotating.length; i += 1) {
    // if original[i] === i
    if (original[i] === i + 1) {
      // set values to null for each rotating[i]
      rotating[i] = null;
      temp[i] = null;
    } else {
      // else for each temp elem that is undefined assign temp[original[i]] to value of original[i]
      temp[original[i] - 1] = original[i];
    }
    // for same i set counting[i] to 1
    counting[i] = 1;
  }
  rotating = temp;
  return {
    rotating,
    counting
  }
}

function runRound(original, counting, rotating) {
  // create temp from original and set all to undefined
  let temp = Array(original.length).fill(undefined);

  // create leftToPass arr with remaining yearbooks
  const leftToPass = [];
  for (let i = 0; i < rotating.length; i += 1) {
    if (rotating[i] !== null) {
      leftToPass.push(rotating[i]);
    }
  }
  console.log('rotating', rotating);
  console.log('counting', counting);
  // iterate through rotating
  for (let i = 0; i < rotating.length; i += 1) {
    // check for nulls in rotating[i] and set temp[i] to null
    if (rotating[i] === null || rotating[i] === original[i]) {
      temp[i] = null;
    } else {
      // increment counting[i]
      counting[i] += 1;
      // pop next yearbook
      const popped = leftToPass.pop();

      if (i === 0) {
        if (temp[temp.length - 1] !== null) {
          temp[temp.length - 1] = popped;
        }
      } else {
        if (temp[i - 1] !== null) {
          temp[i - 1] = popped;
        }
      }
    }
  }
  // set rotating to new ordering
  rotating = temp;

  return {
    rotating,
    counting
  }
}

function findSignatureCounts(arr) {
  // create original from arr
  const original = [...arr];
  // create counting.length from original.length and set all indices to 0
  let counting = Array(original.length).fill(0);
  // create rotating from original
  let rotating = [...original];

  const initial = runInitialRound(original, counting, rotating);
  
  counting = initial.counting;
  rotating = initial.rotating;

  for (let i = 0; i < original.length; i += 1) {
    const updated = runRound(original, counting, rotating);

    rotating = updated.rotating;
    counting = updated.counting;
  }

  return counting;
}

//  arr = [ 5, 2, 3, 1, 4, 6 ] <- original positions, 2, 3, 6 are pointing at themselves, x-ed out in next round
//          1  1  1  1  1  1   -- on first round set all to 1
//  1.   :[ 1, x, x, 4, 5, x ] <- none of non-x-ed are back
//          2  1  1  2  2  1   -- if not x-ed increment
//  2.   :[ 4, x, x, 5, 1, x ] <- none of non-x-ed are back
//          3  1  1  3  3  1   -- 
//  3.   :[ 5, x, x, 1, 4, x ] <- 5, 4, 1 are back, last round for them, x-ed out in next round
//          4  1  1  4  4  1
//  4.   :[ x, x, x, x, x, x ] <- all are x-ed out, no more rounds
//
// output:[ 4, 1, 1, 4, 4, 1 ]


//  arr = [ 3, 6, 4, 2, 1, 5 ] <- original positions
//          1  1  1  1  1  1
//  1.   :[ 1, 2, 3, 4, 5, 6 ] <- none of non-x-ed are back
//          2  2  2  2  2  2
//  2.   :[ 2, 3, 4, 5, 6, 1 ] <- none of non-x-ed are back
//          3  3  3  3  3  3
//  3.   :[ 3, 4, 5, 6, 1, 2 ] <- 3, 1 are back, last round for them, x-ed out in next round
//          4  4  4  4  4  4
//  4.   :[ x, 5, 6, 2, x, 4 ] <- 2 is back, last round for it, x-ed out in the next round
//          4  5  5  5  4  5
//  5.   :[ x, 6, 4, x, x, 5 ] <- 6, 4, 5 are back, last round for them, x-ed out in the next round
//          4  6  6  5  4  6
//  6.   :[ x, x, x, x, x, x ] <- all are x-ed out, no more rounds
//
// output:[ 4, 6, 6, 5, 4, 6 ]

function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1];
var expected_1 = [2, 2];
var output_1 = findSignatureCounts(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2];
var expected_2 = [1, 1];
var output_2 = findSignatureCounts(arr_2);
check(expected_2, output_2);

var arr_3 = [3, 1, 2];
var expected_3 = [3, 3, 3];
var output_3 = findSignatureCounts(arr_3);
check(expected_3, output_3);
