
//  Section Switching Script 

const buttons = document.querySelectorAll('.border-white-500');
const sections = document.querySelectorAll('.content-section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // Section Hiding 

    sections.forEach(section => section.classList.add('hidden'));

    //   Highlight Removal for buttons 

    buttons.forEach(b => b.classList.remove('bg-gray-700'));

    //   Clicked Section 

    const target = btn.getAttribute('data-section');
    document.getElementById(target).classList.remove('hidden');

    //   Active Button Highlight 

    btn.classList.add('bg-gray-900');
  });
});



// Expense Section 



    // Open popup
    document.getElementById("addExpenseBtn").addEventListener("click", function () {
        document.getElementById("popup").classList.remove("hidden");
    });

    // Close popup
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
    });

    // Add expense
    document.getElementById("saveExp").addEventListener("click", function () {
        let name = document.getElementById("expName").value;
        let date = document.getElementById("expDate").value;
        let desc = document.getElementById("expDesc").value;
        let amount = document.getElementById("expAmount").value;

        // Creates Card 

        let div = document.createElement("div");
        div.className = "flex justify-between items-center bg-blue-50 p-4 rounded-xl shadow-sm mb-2";

        div.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    ${name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p class="font-semibold">${name}</p>
                    <p class="text-xs text-gray-500">${date} • ${desc}</p>
                </div>
            </div>
            <p class="text-red-500 font-bold">-${amount}</p>
        `;

        // Adding Entry to list

        document.getElementById("expenseList").appendChild(div);

        // Closing Popup

        document.getElementById("popup").classList.add("hidden");

        // Clears the inputs

        document.getElementById("expName").value = "";
        document.getElementById("expDate").value = "";
        document.getElementById("expDesc").value = "";
        document.getElementById("expAmount").value = "";
    });
