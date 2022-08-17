let dataPlaceHolder = document.getElementById("data");
fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-05c61485-1223-4a2c-a95f-0794f20a99b2/cloud/getCoffee')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            let tbRow = document.createElement('tr')

            let tbDataImage = document.createElement('td')
            tbDataImage.scope = "col";
            let tbDataImageContent = document.createElement('img')
            tbDataImageContent.src = item.pic
            tbDataImageContent.style = "width: 100px; height: 100px;"
            tbDataImage.appendChild(tbDataImageContent)

            let tbDataDetails = document.createElement('td') 
            tbDataDetails.scope = "col";
            let tbDataDetailsName = document.createElement('h2')
            tbDataDetailsName.innerHTML = item.name;
            let tbDataDetailsDescription = document.createElement('p')
            tbDataDetailsDescription.innerHTML = item.description
            let tbDataDetailsPrice = document.createElement('p')
            tbDataDetailsPrice.innerHTML = item.price;
            tbDataDetails.appendChild(tbDataDetailsName)
            tbDataDetails.appendChild(tbDataDetailsDescription)
            tbDataDetails.appendChild(tbDataDetailsPrice)

            let tbDataAction = document.createElement('td')
            tbDataAction.scope = "col";
            let tbDataActionButton = document.createElement('button')
            tbDataActionButton.className = "btn btn-danger mt-5"
            tbDataActionButton.innerHTML = "Add to cart"
            tbDataAction.appendChild(tbDataActionButton)

            tbRow.appendChild(tbDataImage)
            tbRow.appendChild(tbDataDetails)
            tbRow.appendChild(tbDataAction)

            dataPlaceHolder.append(tbRow)
        });
    });