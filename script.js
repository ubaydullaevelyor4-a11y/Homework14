async function changeUser() {
    try {
        const id = Math.floor(Math.random() * 100) + 1;

        const res = await fetch(`https://dummyjson.com/users/${id}`)
        if (!res.ok) throw new Error('Hato' + res.status);

        const user = await res.json()

        document.getElementById('userImage').src = user.image;
        document.getElementById('userName').innerText = `${user.firstName} ${user.lastName}`;
        document.getElementById('userPhone').innerText = user.phone;
        document.getElementById('userLocation').innerText = `${user.address.city}, ${user.address.state}`;
        document.getElementById('userAge').innerText = user.age;
        document.getElementById('userEmail').innerText = user.email;
    } catch(err) {
        console.log(err)
        alert('Api ishlamadi')
    }
}

