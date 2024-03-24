function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      process.stdout.write(i.toString() + " ");
      if (i === 10) {
        process.stdout.write("\n");
      }
    }, i * 1000);
  }
}

console.log("Aplikacja zadziałała!");
printNumbers();
