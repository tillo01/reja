// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
 
 const numbers = [12, 31, 44, 22, 55];
        let highestDigit = -1;

        function getHighestDigit() {
            for (let count of numbers) {
                while (count > 0) {
                    let digit = count % 10;  
                    if (digit > highestDigit) {
                        highestDigit = digit;
                    }
                    count = Math.floor(count / 10);  
                }
            }
        }

        getHighestDigit();
        console.log(highestDigit);  