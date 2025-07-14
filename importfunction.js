export function outerAddFunction() {
  function innerAdd(a, b) {
    return a + b;
  }
  return innerAdd;
}
 
