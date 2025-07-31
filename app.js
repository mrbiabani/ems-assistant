document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const customerList = document.getElementById('customerList'); // لیست مشتری‌ها

    // بارگذاری مشتری‌ها از LocalStorage
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    renderCustomers(customers);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const customer = { name, phone, email };
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));

        renderCustomers(customers);
        form.reset();
    });

    function renderCustomers(list) {
        customerList.innerHTML = '';
        list.forEach((c, i) => {
            const item = document.createElement('div');
            item.innerHTML = `
                <div style="border: 1px solid #ccc; margin: 8px; padding: 10px;">
                    <strong>${c.name}</strong> - ${c.phone} - ${c.email}
                </div>
            `;
            customerList.appendChild(item);
        });
    }
});
