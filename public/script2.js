if (sure) {
    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge)) - Number((age));

    document.write("You will need " + totalRequired + " " + snackType + " to last you until the ripe old age of " + maxAge);
    alert(`You will need ${totalRequired} ${snackType} to last you until the ripe old age of ${maxAge}`);
    console.log("You will need " + totalRequired + " " + snackType + " to last you until the ripe old age of " + maxAge);

}

else {
    window.alert("Please click again.");
}
    