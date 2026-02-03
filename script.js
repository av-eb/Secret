let noCount = 0;

const catImg = document.getElementById('cat-img');
const questionText = document.getElementById('question-text');
const subText = document.getElementById('sub-text');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hiddenLinkContainer = document.getElementById('hidden-link-container');

function showSuccess() {
    catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/lTQF0ODLLjhza/giphy.gif";
    questionText.innerText = "YAY! Happy Valentine's! ❤️";
    subText.innerHTML = "You're not allowed to refuse anyway.<br><br><strong>See you on the 14th! 😘</strong>";
    document.getElementById('button-area').style.display = "none";
    hiddenLinkContainer.classList.add('hidden');
}

// YES Button always leads to success
yesBtn.addEventListener('click', showSuccess);

// NO Button Logic
noBtn.addEventListener('click', () => {
    noCount++;

    if (noCount === 1) {
        // First click: Shocked cat + "Seriously?"
        catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o72F8t9TDi2xVnxOE/giphy.gif";
        questionText.innerText = "Seriously? 🤨";
        subText.innerText = "Try clicking that again. I dare you.";
    } 
    else if (noCount === 2) {
        // Second click: Upset cat + "Think again" + Buttons both become YES
        catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/OPU6wUKARA3NTYGRiV/giphy.gif";
        questionText.innerText = "Think again.";
        subText.innerText = "The 'No' button seems to have expired.";
        
        // Update both buttons to say Yes
        yesBtn.innerText = "Yes";
        noBtn.innerText = "Yes";
    }
    else {
        // Third click onwards: Success
        showSuccess();
    }
});

// Timer for the tiny "no" - reduced to 10 seconds
setTimeout(() => {
    hiddenLinkContainer.classList.remove('hidden');
}, 10000); 

document.getElementById('tinyNo').addEventListener('click', () => {
    alert("whyyyyyyy?? 😭. Anyways I'll just consider it as a Yes.");
    showSuccess();
});


