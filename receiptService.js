export function calculatePoints(receipt) {
    let points = 0;
  
    // Alphanumeric characters in retailer name
    points += [...receipt.retailer].filter((char) => /^[a-z0-9]$/i.test(char)).length;
  
    // 50 points if total is a round dollar amount
    if (receipt.total.endsWith(".00")){ 
        points += 50
    };
  
    // 25 points if total is a multiple of 0.25
    if (parseFloat(receipt.total) % 0.25 === 0){ 
        points += 25
    };
  
    // 5 points for every two items
    points += Math.floor(receipt.items.length / 2) * 5;
  
    // Description is length multiple of 3 = price * 0.2 rounded up
    for (const item of receipt.items) {
      const itemLen = item.shortDescription.trim().length;
      if (itemLen % 3 === 0) {
        points += Math.ceil(parseFloat(item.price) * 0.2);
      }
    }
  
    // 6 points if purchase day is odd
    const purchaseDay = parseInt(receipt.purchaseDate.split('-')[2], 10);
    if (purchaseDay % 2 === 1) {
        points += 6;
    }
  
    // 10 points if time is between 2PM and 4PM
    const [purchaseHour, purchaseMinute] = receipt.purchaseTime.split(':').map(Number);
    if (purchaseHour === 14 || (purchaseHour === 15 && purchaseMinute < 60)) {
        points += 10
    };
  
    return points;
  }
  