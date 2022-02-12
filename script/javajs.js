addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mebutt").click();
    }
})

function Calc() {

    foundyT1 = document.getElementById("foundy(T1)").value
    wallT1 = document.getElementById("wall(T1)").value
    winT1 = document.getElementById("win(T1)").value
    doorT1 = document.getElementById("door(T1)").value
    roofT1 = document.getElementById("roof(T1)").value
    floorT1 = document.getElementById("floor(T1)").value
    gateT1 = document.getElementById("gate(T1)").value

    foundyT2 = document.getElementById("foundy(T2)").value
    wallT2 = document.getElementById("wall(T2)").value
    winT2 = document.getElementById("win(T2)").value
    doorT2 = document.getElementById("door(T2)").value
    roofT2 = document.getElementById("roof(T2)").value
    floorT2 = document.getElementById("floor(T2)").value
    gateT2 = document.getElementById("gate(T2)").value

    foundyT3 = document.getElementById("foundy(T3)").value
    wallT3 = document.getElementById("wall(T3)").value
    winT3 = document.getElementById("win(T3)").value
    doorT3 = document.getElementById("door(T3)").value
    roofT3 = document.getElementById("roof(T3)").value
    floorT3 = document.getElementById("floor(T3)").value
    gateT3 = document.getElementById("gate(T3)").value 



    /* Nails for Tier 1 */
    foundynailsT1 = foundyT1 * 20;
    wallnailsT1 = wallT1 * 36;
    winnailsT1 = winT1 * 46;
    doornailsT1 = doorT1 * 46;
    roofnailsT1 = roofT1 * 20;
    floornailsT1 = floorT1 * 20;
    gatenailsT1 = gateT1 * 32;
    /* Planks for Tier 1 */
    foundyplanksT1 = foundyT1 * 6;
    wallplanksT1 = wallT1 * 15;
    winplanksT1 = winT1 * 20;
    doorplanksT1 = doorT1 * 20;
    roofplanksT1 = roofT1 * 10;
    floorplanksT1 = floorT1 * 10;
    gateplanksT1 = gateT1 * 15;
    /* Logs for Tier 1 */
    foundylogsT1 = foundyT1 * 1;
    walllogsT1 = wallT1 * 1;
    winlogsT1 = winT1 * 1;
    doorlogsT1 = doorT1 * 1;
    rooflogsT1 = roofT1 * 1;
    floorlogsT1 = floorT1 * 1;
    gatelogsT1 = gateT1 * 1;



    /* Nails for Tier 2 */
    foundynailsT2 = foundyT2 * 0;
    wallnailsT2 = wallT2 * 40;
    winnailsT2 = winT2 * 52;
    doornailsT2 = doorT2 * 52;
    roofnailsT2 = roofT2 * 20;
    floornailsT2 = floorT2 * 20;
    gatenailsT2 = gateT2 * 46;
    /* Planks for Tier 2 */
    foundyplanksT2 = foundyT2 * 0;
    wallplanksT2 = wallT2 * 5;
    winplanksT2 = winT2 * 5;
    doorplanksT2 = doorT2 * 5;
    roofplanksT2 = roofT2 * 5;
    floorplanksT2 = floorT2 * 5;
    gateplanksT2 = gateT2 * 5;
    /* Logs for Tier 2 */
    foundylogsT2 = foundyT2 * 0;
    walllogsT2 = wallT2 * 1;
    winlogsT2 = winT2 * 1;
    doorlogsT2 = doorT2 * 1;
    rooflogsT2 = roofT2 * 2;
    floorlogsT2 = floorT2 * 2;
    gatelogsT2 = gateT2 * 1;
    /* Sheet Metal for Tier 2 */
    foundymetalT2 = foundyT2 * 0;
    wallmetalT2 = wallT2 * 6;
    winmetalT2 = winT2 * 8;
    doormetalT2 = doorT2 * 8;
    roofmetalT2 = roofT2 * 5;
    floormetalT2 = floorT2 * 2;
    gatemetalT2 = gateT2 * 6;



    /* Nails for Tier 3 */
    foundynailsT3 = foundyT3 * 0;
    wallnailsT3 = wallT3 * 36;
    winnailsT3 = winT3 * 56;
    doornailsT3 = doorT3 * 36;
    roofnailsT3 = roofT3 * 15;
    floornailsT3 = floorT3 * 16;
    gatenailsT3 = gateT3 * 0;
    /* Planks for Tier 3 */
    foundyplanksT3 = foundyT3 * 0;
    wallplanksT3 = wallT3 * 5;
    winplanksT3 = winT3 * 5;
    doorplanksT3 = doorT3 * 5;
    roofplanksT3 = roofT3 * 5;
    floorplanksT3 = floorT3 * 5;
    gateplanksT3 = gateT3 * 0;
    /* Logs for Tier 3 */
    foundylogsT3 = foundyT3 * 0;
    walllogsT3 = wallT3 * 1;
    winlogsT3 = winT3 * 1;
    doorlogsT3 = doorT3 * 1;
    rooflogsT3 = roofT3 * 2;
    floorlogsT3 = floorT3 * 2;
    gatelogsT3 = gateT3 * 0;
    /* Sheet Metal for Tier 3 */
    foundymetalT3 = foundyT3 * 0;
    wallmetalT3 = wallT3 * 10;
    winmetalT3 = winT3 * 9;
    doormetalT3 = doorT3 * 5;
    roofmetalT3 = roofT3 * 0;
    floormetalT3 = floorT3 * 0;
    gatemetalT3 = gateT3 * 10;



    /* Sums all Nails,Planks and Logs for Tier 1 */
    sumnailsT1 = foundynailsT1 + wallnailsT1 + winnailsT1 + doornailsT1 + roofnailsT1 + floornailsT1 + gatenailsT1;
    sumplanksT1 = foundyplanksT1 + wallplanksT1 + winplanksT1 + doorplanksT1 + roofplanksT1 + floorplanksT1 + gateplanksT1;
    sumlogsT1 = foundylogsT1 + walllogsT1 + winlogsT1 + doorlogsT1 + rooflogsT1 + floorlogsT1 + gatelogsT1;

    /* Sums all Nails,Planks and Logs for Tier 2 */
    sumnailsT2 = foundynailsT2 + wallnailsT2 + winnailsT2 + doornailsT2 + roofnailsT2 + floornailsT2 + gatenailsT2;
    sumplanksT2 = foundyplanksT2 + wallplanksT2 + winplanksT2 + doorplanksT2 + roofplanksT2 + floorplanksT2 + gateplanksT2;
    sumlogsT2 = foundylogsT2 + walllogsT2 + winlogsT2 + doorlogsT2 + rooflogsT2 + floorlogsT2 + gatelogsT2;
    summetalT2 = foundymetalT2 + wallmetalT2 + winmetalT2 + doormetalT2 + roofmetalT2 + floormetalT2 + gatemetalT2;

    /* Sums all Nails,Planks and Logs for Tier 3 */
    sumnailsT3 = foundynailsT3 + wallnailsT3 + winnailsT3 + doornailsT3 + roofnailsT3 + floornailsT3 + gatenailsT3;
    sumplanksT3 = foundyplanksT3 + wallplanksT3 + winplanksT3 + doorplanksT3 + roofplanksT3 + floorplanksT3 + gateplanksT3;
    sumlogsT3 = foundylogsT3 + walllogsT3 + winlogsT3 + doorlogsT3 + rooflogsT3 + floorlogsT3 + gatelogsT3;
    summetalT3 = foundymetalT3 + wallmetalT3 + winmetalT3 + doormetalT3 + roofmetalT3 + floormetalT3 + gatemetalT3;

    /* Sums all Total Nailes,Planks and Logs */
    sumnailsTot = sumnailsT1 + sumnailsT2 + sumnailsT3;
    sumplanksTot = sumplanksT1 + sumplanksT2 + sumplanksT3;
    sumlogsTot = sumlogsT1 + sumlogsT2 + sumlogsT3;
    summetalTot = summetalT2 + summetalT3;

    PacksOnails = sumnailsTot / 70;
    Logs4Planks = sumplanksTot / 4;
    Mix2Concrete = 2;

    /* Write too HTML/Prints */
    document.getElementById("NailsT1").innerHTML = sumnailsT1;
    document.getElementById("PlanksT1").innerHTML = sumplanksT1;
    document.getElementById("LogsT1").innerHTML = sumlogsT1;

    document.getElementById("NailsT2").innerHTML = sumnailsT2;
    document.getElementById("PlanksT2").innerHTML = sumplanksT2;
    document.getElementById("LogsT2").innerHTML = sumlogsT2;
    document.getElementById("MetalT2").innerHTML = summetalT2;

    document.getElementById("NailsT3").innerHTML = sumnailsT3;
    document.getElementById("PlanksT3").innerHTML = sumplanksT3;
    document.getElementById("LogsT3").innerHTML = sumlogsT3;
    document.getElementById("MetalT3").innerHTML = summetalT3;

    document.getElementById("NailsTot").innerHTML = sumnailsTot;
    document.getElementById("PlanksTot").innerHTML = sumplanksTot;
    document.getElementById("LogsTot").innerHTML = sumlogsTot;
    document.getElementById("MetalTot").innerHTML = summetalTot;
 
    document.getElementById("PacksOnails").innerHTML = Math.ceil(PacksOnails);
    document.getElementById("Logs4Planks").innerHTML = Math.ceil(Logs4Planks);
   /* document.getElementById("Mix2Concrite").innerHTML = Math.ceil(Mix2Concrete); */

}

function Clear() {
    
    document.getElementById('foundy(T1)').value = '0'
    document.getElementById('wall(T1)').value = '0'
    document.getElementById('win(T1)').value = '0'
    document.getElementById('door(T1)').value = '0'
    document.getElementById('roof(T1)').value = '0'
    document.getElementById('floor(T1)').value = '0'
    document.getElementById('gate(T1)').value = '0'
    document.getElementById('foundy(T2)').value = '0'
    document.getElementById('wall(T2)').value = '0'
    document.getElementById('win(T2)').value = '0'
    document.getElementById('door(T2)').value = '0'
    document.getElementById('roof(T2)').value = '0'
    document.getElementById('floor(T2)').value = '0'
    document.getElementById('gate(T2)').value = '0'
    document.getElementById('foundy(T3)').value = '0'
    document.getElementById('wall(T3)').value = '0'
    document.getElementById('win(T3)').value = '0'
    document.getElementById('door(T3)').value = '0'
    document.getElementById('roof(T3)').value = '0'
    document.getElementById('floor(T3)').value = '0'
    document.getElementById('gate(T3)').value = '0'

}

function ClearAll() {
    
    Clear();

    Calc();

}