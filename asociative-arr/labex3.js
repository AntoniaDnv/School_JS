function addressBook(input){
    const sortedTeachers = Object.entries(teachers)
    .sort((a, b) => b[1].total - a[1].total);
     for (const [teacher, data] of sortedTeachers) {
    console.log(`${teacher}: ${data.total}`);
    const sortedClasses = Object.entries(data.classes)
      .sort((a, b) => b[1] - a[1]);
    for (const [cls, cnt] of sortedClasses) {
      console.log(`>> ${cls} - ${cnt}`);
    }
  }
}