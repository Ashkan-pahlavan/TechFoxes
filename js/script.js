
window.addEventListener('scroll', function() {
    var headerSection = document.querySelector('header section');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
        headerSection.classList.add('move-right'); // fügt die CSS-Klasse hinzu, um die Position zu ändern
    } else {
        headerSection.classList.remove('move-right'); // entfernt die CSS-Klasse, um zur ursprünglichen Position zurückzukehren
    }
});


function changeColor1(checkbox) {
    var labels = document.querySelectorAll('.F1 label');
    var firstLabel = document.querySelector('.F1 label[for="v1"]');

    if (checkbox.checked) {
        if (checkbox.id !== 'vehicle1') {
            firstLabel.classList.add('green-text');
            labels.forEach(function(label) {
                if (label.htmlFor !== 'v1') {
                    label.classList.add('red-text');
                }
            });
        } else {
            labels.forEach(function(label) {
                label.classList.remove('red-text');
                label.classList.remove('green-text');
            });
            firstLabel.classList.add('green-text');
        }
    } else {
        firstLabel.classList.add('green-text');
        labels.forEach(function(label) {
            if (label.htmlFor !== 'v1') {
                label.classList.remove('red-text');
            }
        });
    }
}
function changeColor2(checkbox) {
    var labels = document.querySelectorAll('.F2 label');
    var firstLabel = document.querySelector('.F2 label[for="v1"]');

    if (checkbox.checked) {
        if (checkbox.id !== 'vehicle1') {
            firstLabel.classList.add('green-text');
            labels.forEach(function(label) {
                if (label.htmlFor !== 'v1') {
                    label.classList.add('red-text');
                }
            });
        } else {
            labels.forEach(function(label) {
                label.classList.remove('red-text');
                label.classList.remove('green-text');
            });
            firstLabel.classList.add('green-text');
        }
    } else {
        firstLabel.classList.add('green-text');
        labels.forEach(function(label) {
            if (label.htmlFor !== 'v1') {
                label.classList.remove('red-text');
            }
        });
    }
}
function changeColor3(checkbox) {
    var labels = document.querySelectorAll('.F3 label');
    var firstLabel = document.querySelector('.F3 label[for="v1"]');

    if (checkbox.checked) {
        if (checkbox.id !== 'vehicle1') {
            firstLabel.classList.add('green-text');
            labels.forEach(function(label) {
                if (label.htmlFor !== 'v1') {
                    label.classList.add('red-text');
                }
            });
        } else {
            labels.forEach(function(label) {
                label.classList.remove('red-text');
                label.classList.remove('green-text');
            });
            firstLabel.classList.add('green-text');
        }
    } else {
        firstLabel.classList.add('green-text');
        labels.forEach(function(label) {
            if (label.htmlFor !== 'v1') {
                label.classList.remove('red-text');
            }
        });
    }
}
// function changeColor(checkbox) {
//     var labels = document.querySelectorAll('.F2 label');
//     var firstLabel = document.querySelector('.F2 label[for="vehicle1"]');

//     if (checkbox.checked) {
//         if (checkbox.id !== 'vehicle1') {
//             firstLabel.classList.add('green-text');
//             labels.forEach(function(label) {
//                 if (label.htmlFor !== 'vehicle1') {
//                     label.classList.add('red-text');
//                 }
//             });
//         } else {
//             labels.forEach(function(label) {
//                 label.classList.remove('red-text');
//                 label.classList.remove('green-text');
//             });
//             firstLabel.classList.add('green-text');
//         }
//     } else {
//         firstLabel.classList.add('green-text');
//         labels.forEach(function(label) {
//             if (label.htmlFor !== 'vehicle1') {
//                 label.classList.remove('red-text');
//             }
//         });
//     }
// }
// function changeColor(checkbox) {
//     var labels = document.querySelectorAll('label');
//     var firstLabel = document.querySelector('label[for="vehicle1"]');

//     if (checkbox.checked) {
//         if (checkbox.id !== 'vehicle1') {
//             firstLabel.classList.add('green-text');
//             labels.forEach(function(label) {
//                 if (label.htmlFor !== 'vehicle1') {
//                     label.classList.add('red-text');
//                 }
//             });
//         } else {
//             labels.forEach(function(label) {
//                 label.classList.remove('red-text');
//                 label.classList.remove('green-text');
//             });
//             firstLabel.classList.add('green-text');
//         }
//     } else {
//         firstLabel.classList.add('green-text');
//         labels.forEach(function(label) {
//             if (label.htmlFor !== 'vehicle1') {
//                 label.classList.remove('red-text');
//             }
//         });
//     }
// }


// function changeColor(checkbox) {
//     var labels = document.querySelectorAll('label');
//     var firstLabel = document.querySelector('label[for="vehicle1"]');

//     if (checkbox.id === 'vehicle1') {
//         if (checkbox.checked) {
//             labels.forEach(function(label) {
//                 label.classList.remove('red-text');
//                 label.classList.add('green-text');
//             });
//         } else {
//             labels.forEach(function(label) {
//                 label.classList.remove('green-text');
//             });
//             firstLabel.classList.add('green-text');
//         }
//     } else {
//         if (checkbox.checked) {
//             firstLabel.classList.add('green-text');
//             labels.forEach(function(label) {
//                 if (label.htmlFor !== 'vehicle1') {
//                     label.classList.add('red-text');
//                 }
//             });
//         } else {
//             labels.forEach(function(label) {
//                 if (label.htmlFor !== 'vehicle1') {
//                     label.classList.remove('red-text');
//                 }
//             });
//         }
//     }
// }
// function changeColor(checkbox) {
//     var labels = document.querySelectorAll('label');
//     if (checkbox.checked) {
//         for (var i = 0; i < labels.length; i++) {
//             if (labels[i].htmlFor === checkbox.id) {
//                 labels[i].classList.add('green-text');
//             } else {
//                 labels[i].classList.remove('green-text');
//                 labels[i].classList.add('red-text');
//             }
//         }
//     } else {
//         labels.forEach(function(label) {
//             label.classList.remove('green-text');
//             label.classList.remove('red-text');
//         });
//     }
// }
