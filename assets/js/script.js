// Story Modal
function showStoryModal() {
    document.getElementById('storyModal').style.display = 'block';
}

// Start Challenge
function startChallenge() {
    document.getElementById('storyModal').style.display = 'none';
}

// Task flags submission
let points = 0;

function submitFlag(taskNumber, correctFlag) {
    const flagInput = document.getElementById(`flag-input-${taskNumber}`).value.trim();
    
    if (flagInput === correctFlag) {
        alert('Flag captured! Well done.');
        points += 100;
        document.getElementById(`task-${taskNumber}`).style.display = 'none';

        if (taskNumber === 3) {
            alert(`Congratulations! You've captured all flags. Total points: ${points}`);
            window.location.href = 'certificate.html'; // Redirect to certificate page
        }
    } else {
        alert('Incorrect flag. Try again.');
    }
}
