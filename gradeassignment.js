let score = prompt ("Enter your score:");

score = int(input("Enter your score: "))

if (score >= 90) {
  console.log(" Grade is: Excellent");
} else if (score >= 80) {
  console.log(" Grade is: Good");
} else if (score >= 70) {
  console.log(" Grade : Fair");
} else {
  console.log(" Grade : Needs Improvement");
}
