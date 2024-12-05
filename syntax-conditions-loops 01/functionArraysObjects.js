    function printElements(element) {
        let elements = element;
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[elements.length-i-1]);
        }
    }

printElements([1, 2, 3, 4, 5]);
