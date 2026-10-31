
const memories = Array(
["Memory of Keys: This castle's full of keys! [When interacting with a locked door, get directions for where its key is.]"],
["Memory of Ghosts: House's haunted. [No effect.]"],
["Memory of Touch: You had eyes bigger than your stomach. Disgusting, disgusting, disgusting. [-50 to all stats.]"],
["Memory of Fishing: Don't have to think about anything. [+2 ATK for every time you've gone fishing, but -20 ATKSPD.]"],
["Memory of Barrels: You like looking inside barrels. [Randomly find items when interacting with barrels.]"],
["Memory of Pillars: Paranoia also starts with a P. [Randomly find items when interacting with pillars.]" ],
["Memory of Looping: Round and round it goes. [+5 MaxHP per loop.]"],
["Memory of Sadnesses: They're scared of you. [Sadnesses will flee from you.]"],
["Memory of Self: It's a memory of you! You have, theoretically, so many to choose from! [+5 to all stats.]"],
["Memory of Defeat: Still a long way to go. [Get x3 Memories when defeating normal Sadnesses.]"],
["Memory of Victory: Victory feels good! [Auto ATK UP at the start of battles.] (Act 2], Victory is meaningless, but it still feels good. [Auto * ATK UP at the start of battles.] (Act 3)"],
["Memory of Family: You don't want to leave them behind. [EXP x2 for everyone except Siffrin.]"],
["Memory of Memories: You remember this, at least. [Can read books you couldn't read before.]"],
["Memory of Emptiness: Nothing comes to mind, hahahahaha! [Can loop back immediately when dead.]"],
["Memory of Bomb: KABOOM!!! [If looping to the King, will have Bomb in Pockets.]"],
["Memory of KnifeKey: Slice, slice, slice. [If looping to the King, will have KnifeKey equipped.]"],
["Memory of A Journey: The curtains will close, but the story will go on for a bit longer! [Heals 6% HP every turn]."]);

function showMemory() {
    var x = Math.floor(Math.random() * memories.length);
    document.getElementById('memory-holder').innerHTML = memories[x];
}
