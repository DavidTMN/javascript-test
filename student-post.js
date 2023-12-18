const createStudent = async () => {
    const request = new Request("https://rest-api-test-3a2d6-default-rtdb.asia-southeast1.firebasedatabase.app/student.json", {
        method: "POST",
    });

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // setTimeout(() => {
    //     console.log("erer")
    // }, 1000);

}

createStudent()