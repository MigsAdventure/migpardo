var pokemon =

[
{"Id":1,"Name":"Bulbasaur","Types":["Grass","Poison"],"Moves":[214,221],"SpecialMoves":[90,59,118],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":90,"BaseAttack":126,"BaseDefense":126},"AverageHeight":0.7,"AverageWeight":6.9,"Evolutions":[{"Id":1,"Name":"Bulbasaur"},{"Id":2,"Name":"Ivysaur"},{"Id":3,"Name":"Venusaur"}]},
 
{"Id":2,"Name":"Ivysaur","Types":["Grass", "Poison"],"Moves":[215,214],"SpecialMoves":[90,116,118],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":120,"BaseAttack":156,"BaseDefense":158},"AverageHeight":1,"AverageWeight":13,"Evolutions":[{"Id":1,"Name":"Bulbasaur"},{"Id":2,"Name":"Ivysaur"},{"Id":3,"Name":"Venusaur"}]},
 
{"Id":3,"Name":"Venusaur","Types":["Grass","Poison"],"Moves":[215,214],"SpecialMoves":[90,47,116],"Encounter":{"BaseCaptureRate":0.04,"BaseFleeRate":0.05,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":160,"BaseAttack":198,"BaseDefense":200},"AverageHeight":2,"AverageWeight":100,"Evolutions":[{"Id":1,"Name":"Bulbasaur"},{"Id":2,"Name":"Ivysaur"},{"Id":3,"Name":"Venusaur"}]},
 
{"Id":4,"Name":"Charmander","Types":["Fire"],"Moves":[209,220],"SpecialMoves":[24,101,102],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.1,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":78,"BaseAttack":128,"BaseDefense":108},"AverageHeight":0.6,"AverageWeight":8.5,"Evolutions":[{"Id":4,"Name":"Charmander"},{"Id":5,"Name":"Charmeleon"},{"Id":6,"Name":"Charizard"}]},
 
{"Id":5,"Name":"Charmeleon","Types":["Fire"],"Moves":[209,220],"SpecialMoves":[24,115,102],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":116,"BaseAttack":160,"BaseDefense":140},"AverageHeight":1.1,"AverageWeight":19,"Evolutions":[{"Id":4,"Name":"Charmander"},{"Id":5,"Name":"Charmeleon"},{"Id":6,"Name":"Charizard"}]},
 
{"Id":6,"Name":"Charizard","Types":["Fire","Flying"],"Moves":[209,210],"SpecialMoves":[24,103,83],"Encounter":{"BaseCaptureRate":0.04,"BaseFleeRate":0.05,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":156,"BaseAttack":212,"BaseDefense":182},"AverageHeight":1.7,"AverageWeight":90.5,"Evolutions":[{"Id":4,"Name":"Charmander"},{"Id":5,"Name":"Charmeleon"},{"Id":6,"Name":"Charizard"}]},
 
{"Id":7,"Name":"Squirtle","Types":["Water"],"Moves":[237,221],"SpecialMoves":[57,58,105],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":88,"BaseAttack":112,"BaseDefense":142},"AverageHeight":0.5,"AverageWeight":9,"Evolutions":[{"Id":7,"Name":"Squirtle"},{"Id":8,"Name":"Wartortle"},{"Id":9,"Name":"Blastoise"}]},
 
{"Id":8,"Name":"Wartortle","Types":["Water"],"Moves":[230,202],"SpecialMoves":[57,92,39,107],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":118,"BaseAttack":144,"BaseDefense":176},"AverageHeight":1,"AverageWeight":22.5,"Evolutions":[{"Id":7,"Name":"Squirtle"},{"Id":8,"Name":"Wartortle"},{"Id":9,"Name":"Blastoise"}]},
 
{"Id":9,"Name":"Blastoise","Types":["Water"],"Moves":[230,202],"SpecialMoves":[36,92,39,107],"Encounter":{"BaseCaptureRate":0.04,"BaseFleeRate":0.05,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":158,"BaseAttack":186,"BaseDefense":222},"AverageHeight":1.6,"AverageWeight":85.5,"Evolutions":[{"Id":7,"Name":"Squirtle"},{"Id":8,"Name":"Wartortle"},{"Id":9,"Name":"Blastoise"}]},
 
{"Id":10,"Name":"Caterpie","Types":["Bug"],"Moves":[201,221],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.2,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":90,"BaseAttack":62,"BaseDefense":66},"AverageHeight":0.3,"AverageWeight":2.9,"Evolutions":[{"Id":10,"Name":"Caterpie"},{"Id":11,"Name":"Metapod"},{"Id":12,"Name":"Butterfree"}]},
 
{"Id":11,"Name":"Metapod","Types":["Bug"],"Moves":[201,221],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.09,"DodgeInterval":3600,"AttackTimer":3600},"Stats":{"BaseStamina":100,"BaseAttack":56,"BaseDefense":86},"AverageHeight":0.7,"AverageWeight":9.9,"Evolutions":[{"Id":10,"Name":"Caterpie"},{"Id":11,"Name":"Metapod"},{"Id":12,"Name":"Butterfree"}]},
 
{"Id":12,"Name":"Butterfree","Types":["Bug","Flying"],"Moves":[201,235],"SpecialMoves":[49,108,99],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":120,"BaseAttack":144,"BaseDefense":144},"AverageHeight":1.1,"AverageWeight":32,"Evolutions":[{"Id":10,"Name":"Caterpie"},{"Id":11,"Name":"Metapod"},{"Id":12,"Name":"Butterfree"}]},
 
{"Id":13,"Name":"Weedle","Types":["Bug","Poison"],"Moves":[201,236],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.2,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":68,"BaseDefense":64},"AverageHeight":0.3,"AverageWeight":3.2,"Evolutions":[{"Id":13,"Name":"Weedle"},{"Id":14,"Name":"Kakuna"},{"Id":15,"Name":"Beedrill"}]},
 
{"Id":14,"Name":"Kakuna","Types":["Bug","Poison"],"Moves":[201,236],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.09,"DodgeInterval":3600,"AttackTimer":3600},"Stats":{"BaseStamina":90,"BaseAttack":62,"BaseDefense":82},"AverageHeight":0.6,"AverageWeight":10,"Evolutions":[{"Id":13,"Name":"Weedle"},{"Id":14,"Name":"Kakuna"},{"Id":15,"Name":"Beedrill"}]},
 
{"Id":15,"Name":"Beedrill","Types":["Bug","Poison"],"Moves":[201,224],"SpecialMoves":[90,45,100],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":130,"BaseAttack":144,"BaseDefense":130},"AverageHeight":1,"AverageWeight":29.5,"Evolutions":[{"Id":13,"Name":"Weedle"},{"Id":14,"Name":"Kakuna"},{"Id":15,"Name":"Beedrill"}]},
 
{"Id":16,"Name":"Pidgey","Types":["Normal","Flying"],"Moves":[219,221],"SpecialMoves":[80,45,121],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.2,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":94,"BaseDefense":90},"AverageHeight":0.3,"AverageWeight":1.8,"Evolutions":[{"Id":16,"Name":"Pidgey"},{"Id":17,"Name":"Pidgeotto"},{"Id":18,"Name":"Pidgeot"}]},
 
{"Id":17,"Name":"Pidgeotto","Types":["Normal","Flying"],"Moves":[210,239],"SpecialMoves":[80,45,121],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.09,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":126,"BaseAttack":126,"BaseDefense":122},"AverageHeight":1.1,"AverageWeight":30,"Evolutions":[{"Id":16,"Name":"Pidgey"},{"Id":17,"Name":"Pidgeotto"},{"Id":18,"Name":"Pidgeot"}]},
 
{"Id":18,"Name":"Pidgeot","Types":["Normal","Flying"],"Moves":[210,239],"SpecialMoves":[122,45,121],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":166,"BaseAttack":170,"BaseDefense":166},"AverageHeight":1.5,"AverageWeight":39.5,"Evolutions":[{"Id":16,"Name":"Pidgey"},{"Id":17,"Name":"Pidgeotto"},{"Id":18,"Name":"Pidgeot"}]},
 
{"Id":19,"Name":"Rattata","Types":["Normal"],"Moves":[221,219],"SpecialMoves":[26,129,131],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.2,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":60,"BaseAttack":92,"BaseDefense":86},"AverageHeight":0.3,"AverageWeight":3.5,"Evolutions":[{"Id":19,"Name":"Rattata"},{"Id":20,"Name":"Raticate"}]},
 
{"Id":20,"Name":"Raticate","Types":["Normal"],"Moves":[202,219],"SpecialMoves":[26,129,14],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":110,"BaseAttack":146,"BaseDefense":150},"AverageHeight":0.7,"AverageWeight":18.5,"Evolutions":[{"Id":19,"Name":"Rattata"},{"Id":20,"Name":"Raticate"}]},
 
{"Id":21,"Name":"Spearow","Types":["Normal","Flying"],"Moves":[211,219],"SpecialMoves":[45,38,80],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":102,"BaseDefense":78},"AverageHeight":0.3,"AverageWeight":2,"Evolutions":[{"Id":21,"Name":"Spearow"},{"Id":22,"Name":"Fearow"}]},
 
{"Id":22,"Name":"Fearow","Types":["Normal","Flying"],"Moves":[211,239],"SpecialMoves":[45,46,80],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":130,"BaseAttack":168,"BaseDefense":146},"AverageHeight":1.2,"AverageWeight":38,"Evolutions":[{"Id":21,"Name":"Spearow"},{"Id":22,"Name":"Fearow"}]},
 
{"Id":23,"Name":"Ekans","Types":["Poison"],"Moves":[236,225],"SpecialMoves":[92,114,90,92,92],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":70,"BaseAttack":112,"BaseDefense":112},"AverageHeight":2,"AverageWeight":6.9,"Evolutions":[{"Id":23,"Name":"Ekans"},{"Id":24,"Name":"Arbok"}]},
 
{"Id":24,"Name":"Arbok","Types":["Poison"],"Moves":[202,225],"SpecialMoves":[16,91,92,92],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":120,"BaseAttack":166,"BaseDefense":166},"AverageHeight":3.5,"AverageWeight":65,"Evolutions":[{"Id":23,"Name":"Ekans"},{"Id":24,"Name":"Arbok"}]},
 
{"Id":25,"Name":"Pikachu","Types":["Electric"],"Moves":[205,219],"SpecialMoves":[35,79,78],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":70,"BaseAttack":124,"BaseDefense":108},"AverageHeight":0.4,"AverageWeight":6,"Evolutions":[{"Id":25,"Name":"Pikachu"},{"Id":26,"Name":"Raichu"}]},
 
{"Id":26,"Name":"Raichu","Types":["Electric"],"Moves":[205,206],"SpecialMoves":[123,77,78],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":120,"BaseAttack":200,"BaseDefense":154},"AverageHeight":0.8,"AverageWeight":30,"Evolutions":[{"Id":25,"Name":"Pikachu"},{"Id":26,"Name":"Raichu"}]},
 
{"Id":27,"Name":"Sandshrew","Types":["Ground"],"Moves":[220,216],"SpecialMoves":[26,64,63],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":100,"BaseAttack":90,"BaseDefense":114},"AverageHeight":0.6,"AverageWeight":12,"Evolutions":[{"Id":27,"Name":"Sandshrew"},{"Id":28,"Name":"Sandslash"}]},
 
{"Id":28,"Name":"Sandslash","Types":["Ground"],"Moves":[228,216],"SpecialMoves":[31,63,95],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":150,"BaseAttack":150,"BaseDefense":172},"AverageHeight":1,"AverageWeight":29.5,"Evolutions":[{"Id":27,"Name":"Sandshrew"},{"Id":28,"Name":"Sandslash"}]},
 
{"Id":29,"Name":"Nidoran♀","Types":["Poison"],"Moves":[202,236],"SpecialMoves":[131,50,90],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":110,"BaseAttack":100,"BaseDefense":104},"AverageHeight":0.4,"AverageWeight":7,"Evolutions":[{"Id":29,"Name":"Nidoran♀"},{"Id":30,"Name":"Nidorina"},{"Id":31,"Name":"Nidoqueen"}]},

{"Id":30,"Name":"Nidorina","Types":["Poison"],"Moves":[202,236],"SpecialMoves":[26,50,90],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":140,"BaseAttack":132,"BaseDefense":136},"AverageHeight":0.8,"AverageWeight":20,"Evolutions":[{"Id":29,"Name":"Nidoran♀"},{"Id":30,"Name":"Nidorina"},{"Id":31,"Name":"Nidoqueen"}]},
 
{"Id":31,"Name":"Nidoqueen","Types":["Poison","Ground"],"Moves":[224,202],"SpecialMoves":[31,91,32],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":180,"BaseAttack":184,"BaseDefense":190},"AverageHeight":1.3,"AverageWeight":60,"Evolutions":[{"Id":29,"Name":"Nidoran♀"},{"Id":30,"Name":"Nidorina"},{"Id":31,"Name":"Nidoqueen"}]},
 
{"Id":32,"Name":"Nidoran♂","Types":["Poison"],"Moves":[211,236],"SpecialMoves":[131,126,90],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":92,"BaseAttack":110,"BaseDefense":94},"AverageHeight":0.5,"AverageWeight":9,"Evolutions":[{"Id":32,"Name":"Nidoran♂"},{"Id":33,"Name":"Nidorino"},{"Id":34,"Name":"Nidoking"}]},
 
{"Id":33,"Name":"Nidorino","Types":["Poison"],"Moves":[224,236],"SpecialMoves":[26,126,90],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":122,"BaseAttack":142,"BaseDefense":128},"AverageHeight":0.9,"AverageWeight":19.5,"Evolutions":[{"Id":32,"Name":"Nidoran♂"},{"Id":33,"Name":"Nidorino"},{"Id":34,"Name":"Nidoking"}]},
 
{"Id":34,"Name":"Nidoking","Types":["Poison","Ground"],"Moves":[224,200],"SpecialMoves":[31,22,91],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":162,"BaseAttack":204,"BaseDefense":170},"AverageHeight":1.4,"AverageWeight":62,"Evolutions":[{"Id":32,"Name":"Nidoran♂"},{"Id":33,"Name":"Nidorino"},{"Id":34,"Name":"Nidoking"}]},
 
{"Id":35,"Name":"Clefairy","Types":["Fairy"],"Moves":[222,234],"SpecialMoves":[131,84,87],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":140,"BaseAttack":116,"BaseDefense":124},"AverageHeight":0.6,"AverageWeight":7.5,"Evolutions":[{"Id":35,"Name":"Clefairy"},{"Id":36,"Name":"Clefable"}]},
 
{"Id":36,"Name":"Clefable","Types":["Fairy"],"Moves":[222,234],"SpecialMoves":[86,108,87],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.06,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":190,"BaseAttack":178,"BaseDefense":178},"AverageHeight":1.3,"AverageWeight":40,"Evolutions":[{"Id":35,"Name":"Clefairy"},{"Id":36,"Name":"Clefable"}]},
 
{"Id":37,"Name":"Vulpix","Types":["Fire"],"Moves":[219,209],"SpecialMoves":[131,24,101],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":76,"BaseAttack":106,"BaseDefense":118},"AverageHeight":0.6,"AverageWeight":9.9,"Evolutions":[{"Id":37,"Name":"Vulpix"},{"Id":38,"Name":"Ninetales"}]},
 
{"Id":38,"Name":"Ninetales","Types":["Fire"],"Moves":[238,209],"SpecialMoves":[24,42,103],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.06,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":146,"BaseAttack":176,"BaseDefense":194},"AverageHeight":1.1,"AverageWeight":19.9,"Evolutions":[{"Id":37,"Name":"Vulpix"},{"Id":38,"Name":"Ninetales"}]},
 
{"Id":39,"Name":"Jigglypuff","Types":["Normal","Fairy"],"Moves":[222,238],"SpecialMoves":[131,84,88],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":230,"BaseAttack":98,"BaseDefense":54},"AverageHeight":0.5,"AverageWeight":5.5,"Evolutions":[{"Id":39,"Name":"Jigglypuff"},{"Id":40,"Name":"Wigglytuff"}]},
 
{"Id":40,"Name":"Wigglytuff","Types":["Normal","Fairy"],"Moves":[222,238],"SpecialMoves":[14,86,88],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":280,"BaseAttack":168,"BaseDefense":108},"AverageHeight":1,"AverageWeight":12,"Evolutions":[{"Id":39,"Name":"Jigglypuff"},{"Id":40,"Name":"Wigglytuff"}]},
 
{"Id":41,"Name":"Zubat","Types":["Poison","Flying"],"Moves":[219,202],"SpecialMoves":[50,121,90],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.2,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":88,"BaseDefense":90},"AverageHeight":0.8,"AverageWeight":7.5,"Evolutions":[{"Id":41,"Name":"Zubat"},{"Id":42,"Name":"Golbat"}]},
 
{"Id":42,"Name":"Golbat","Types":["Poison","Flying"],"Moves":[210,202],"SpecialMoves":[50,121,69],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":150,"BaseAttack":164,"BaseDefense":164},"AverageHeight":1.6,"AverageWeight":55,"Evolutions":[{"Id":41,"Name":"Zubat"},{"Id":42,"Name":"Golbat"}]},
 
{"Id":43,"Name":"Oddish","Types":["Grass","Poison"],"Moves":[215,225],"SpecialMoves":[59,90,87],"Encounter":{"BaseCaptureRate":0.48,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":90,"BaseAttack":134,"BaseDefense":130},"AverageHeight":0.5,"AverageWeight":5.4,"Evolutions":[{"Id":43,"Name":"Oddish"},{"Id":44,"Name":"Gloom"},{"Id":45,"Name":"Vileplume"}]},
 
{"Id":44,"Name":"Gloom","Types":["Grass","Poison"],"Moves":[215,225],"SpecialMoves":[47,90,87],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":120,"BaseAttack":162,"BaseDefense":158},"AverageHeight":0.8,"AverageWeight":8.6,"Evolutions":[{"Id":43,"Name":"Oddish"},{"Id":44,"Name":"Gloom"},{"Id":45,"Name":"Vileplume"}]},
 
{"Id":45,"Name":"Vileplume","Types":["Grass","Poison"],"Moves":[215,225],"SpecialMoves":[47,116,87],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.05,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":150,"BaseAttack":202,"BaseDefense":190},"AverageHeight":1.2,"AverageWeight":18.6,"Evolutions":[{"Id":43,"Name":"Oddish"},{"Id":44,"Name":"Gloom"},{"Id":45,"Name":"Vileplume"}]},
 
{"Id":46,"Name":"Paras","Types":["Bug","Grass"],"Moves":[220,201],"SpecialMoves":[89,100,59],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.15,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":70,"BaseAttack":122,"BaseDefense":120},"AverageHeight":0.3,"AverageWeight":5.4,"Evolutions":[{"Id":46,"Name":"Paras"},{"Id":47,"Name":"Parasect"}]},
 
{"Id":47,"Name":"Parasect","Types":["Bug","Grass"],"Moves":[201,200],"SpecialMoves":[89,100,116],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":17,"AttackTimer":6},"Stats":{"BaseStamina":120,"BaseAttack":162,"BaseDefense":170},"AverageHeight":1,"AverageWeight":29.5,"Evolutions":[{"Id":46,"Name":"Paras"},{"Id":47,"Name":"Parasect"}]},
 
{"Id":48,"Name":"Venonat","Types":["Bug","Poison"],"Moves":[201,235],"SpecialMoves":[30,50,99],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":120,"BaseAttack":108,"BaseDefense":118},"AverageHeight":1,"AverageWeight":30,"Evolutions":[{"Id":48,"Name":"Venonat"},{"Id":49,"Name":"Venomoth"}]},
 
{"Id":49,"Name":"Venomoth","Types":["Bug","Poison"],"Moves":[201,235],"SpecialMoves":[50,108,49],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":140,"BaseAttack":172,"BaseDefense":154},"AverageHeight":1.5,"AverageWeight":12.5,"Evolutions":[{"Id":48,"Name":"Venonat"},{"Id":49,"Name":"Venomoth"}]},
 
{"Id":50,"Name":"Diglett","Types":["Ground"],"Moves":[216,220],"SpecialMoves":[26,96,63],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":20,"BaseAttack":108,"BaseDefense":86},"AverageHeight":0.2,"AverageWeight":0.8,"Evolutions":[{"Id":50,"Name":"Diglett"},{"Id":51,"Name":"Dugtrio"}]},
 
{"Id":51,"Name":"Dugtrio","Types":["Ground"],"Moves":[203,216],"SpecialMoves":[31,96,32],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":70,"BaseAttack":148,"BaseDefense":140},"AverageHeight":0.7,"AverageWeight":33.3,"Evolutions":[{"Id":50,"Name":"Diglett"},{"Id":51,"Name":"Dugtrio"}]},
 
{"Id":52,"Name":"Meowth","Types":["Normal"],"Moves":[220,202],"SpecialMoves":[16,131,51],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":80,"BaseAttack":104,"BaseDefense":94},"AverageHeight":0.4,"AverageWeight":4.2,"Evolutions":[{"Id":52,"Name":"Meowth"},{"Id":53,"Name":"Persian"}]},
 
{"Id":53,"Name":"Persian","Types":["Normal"],"Moves":[220,238],"SpecialMoves":[51,65,88],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":130,"BaseAttack":156,"BaseDefense":146},"AverageHeight":1,"AverageWeight":32,"Evolutions":[{"Id":52,"Name":"Meowth"},{"Id":53,"Name":"Persian"}]},
 
{"Id":54,"Name":"Psyduck","Types":["Water"],"Moves":[230,234],"SpecialMoves":[30,28,58],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":100,"BaseAttack":132,"BaseDefense":112},"AverageHeight":0.8,"AverageWeight":19.6,"Evolutions":[{"Id":54,"Name":"Psyduck"},{"Id":55,"Name":"Golduck"}]},
 
{"Id":55,"Name":"Golduck","Types":["Water"],"Moves":[230,235],"SpecialMoves":[108,107,92,39],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":160,"BaseAttack":194,"BaseDefense":176},"AverageHeight":1.7,"AverageWeight":76.6,"Evolutions":[{"Id":54,"Name":"Psyduck"},{"Id":55,"Name":"Golduck"}]},
 
{"Id":56,"Name":"Mankey","Types":["Fighting"],"Moves":[208,220],"SpecialMoves":[28,56,123],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":80,"BaseAttack":122,"BaseDefense":96},"AverageHeight":0.5,"AverageWeight":28,"Evolutions":[{"Id":56,"Name":"Mankey"},{"Id":57,"Name":"Primeape"}]},
 
{"Id":57,"Name":"Primeape","Types":["Fighting"],"Moves":[207,208],"SpecialMoves":[28,56,51],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":17,"AttackTimer":6},"Stats":{"BaseStamina":130,"BaseAttack":178,"BaseDefense":150},"AverageHeight":1,"AverageWeight":32,"Evolutions":[{"Id":56,"Name":"Mankey"},{"Id":57,"Name":"Primeape"}]},
 
{"Id":58,"Name":"Growlithe","Types":["Fire"],"Moves":[209,202],"SpecialMoves":[21,131,24],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":110,"BaseAttack":156,"BaseDefense":110},"AverageHeight":0.7,"AverageWeight":19,"Evolutions":[{"Id":58,"Name":"Growlithe"},{"Id":59,"Name":"Arcanine"}]},
 
{"Id":59,"Name":"Arcanine","Types":["Fire"],"Moves":[240,202],"SpecialMoves":[24,103,95],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.06,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":180,"BaseAttack":230,"BaseDefense":180},"AverageHeight":1.9,"AverageWeight":155,"Evolutions":[{"Id":58,"Name":"Growlithe"},{"Id":59,"Name":"Arcanine"}]},
 
{"Id":60,"Name":"Poliwag","Types":["Water"],"Moves":[237,216],"SpecialMoves":[131,53,96],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":108,"BaseDefense":98},"AverageHeight":0.6,"AverageWeight":12.4,"Evolutions":[{"Id":60,"Name":"Poliwag"},{"Id":61,"Name":"Poliwhirl"},{"Id":62,"Name":"Poliwrath"}]},
 
{"Id":61,"Name":"Poliwhirl","Types":["Water"],"Moves":[237,216],"SpecialMoves":[106,96,53],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":130,"BaseAttack":132,"BaseDefense":132},"AverageHeight":1,"AverageWeight":20,"Evolutions":[{"Id":60,"Name":"Poliwag"},{"Id":61,"Name":"Poliwhirl"},{"Id":62,"Name":"Poliwrath"}]},
 
{"Id":62,"Name":"Poliwrath","Types":["Water","Fighting"],"Moves":[237,216],"SpecialMoves":[107,54,33],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":180,"BaseAttack":180,"BaseDefense":202},"AverageHeight":1.3,"AverageWeight":54,"Evolutions":[{"Id":60,"Name":"Poliwag"},{"Id":61,"Name":"Poliwhirl"},{"Id":62,"Name":"Poliwrath"}]},
 
{"Id":63,"Name":"Abra","Types":["Psychic"],"Moves":[234],"SpecialMoves":[60,99,70],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.99,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":50,"BaseAttack":110,"BaseDefense":76},"AverageHeight":0.9,"AverageWeight":19.5,"Evolutions":[{"Id":63,"Name":"Abra"},{"Id":64,"Name":"Kadabra"},{"Id":65,"Name":"Alakazam"}]},
 
{"Id":64,"Name":"Kadabra","Types":["Psychic"],"Moves":[226,235],"SpecialMoves":[30,86,70],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":80,"BaseAttack":150,"BaseDefense":112},"AverageHeight":1.3,"AverageWeight":56.5,"Evolutions":[{"Id":63,"Name":"Abra"},{"Id":64,"Name":"Kadabra"},{"Id":65,"Name":"Alakazam"}]},
 
{"Id":65,"Name":"Alakazam","Types":["Psychic"],"Moves":[226,235],"SpecialMoves":[108,86,70],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":110,"BaseAttack":186,"BaseDefense":152},"AverageHeight":1.5,"AverageWeight":48,"Evolutions":[{"Id":63,"Name":"Abra"},{"Id":64,"Name":"Kadabra"},{"Id":65,"Name":"Alakazam"}]},
 
{"Id":66,"Name":"Machop","Types":["Fighting"],"Moves":[207,208],"SpecialMoves":[28,56,123],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":140,"BaseAttack":118,"BaseDefense":96},"AverageHeight":0.8,"AverageWeight":19.5,"Evolutions":[{"Id":66,"Name":"Machop"},{"Id":67,"Name":"Machoke"},{"Id":68,"Name":"Machamp"}]},
 
{"Id":67,"Name":"Machoke","Types":["Fighting"],"Moves":[207,208],"SpecialMoves":[28,54,123],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":160,"BaseAttack":154,"BaseDefense":144},"AverageHeight":1.5,"AverageWeight":70.5,"Evolutions":[{"Id":66,"Name":"Machop"},{"Id":67,"Name":"Machoke"},{"Id":68,"Name":"Machamp"}]},
 
{"Id":68,"Name":"Machamp","Types":["Fighting"],"Moves":[229,208],"SpecialMoves":[28,32,54],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":180,"BaseAttack":198,"BaseDefense":180},"AverageHeight":1.6,"AverageWeight":130,"Evolutions":[{"Id":66,"Name":"Machop"},{"Id":67,"Name":"Machoke"},{"Id":68,"Name":"Machamp"}]},
 
{"Id":69,"Name":"Bellsprout","Types":["Grass","Poison"],"Moves":[214,225],"SpecialMoves":[118,90,92,114],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":100,"BaseAttack":158,"BaseDefense":78},"AverageHeight":0.7,"AverageWeight":4,"Evolutions":[{"Id":69,"Name":"Bellsprout"},{"Id":70,"Name":"Weepinbell"},{"Id":71,"Name":"Victreebel"}]},
 
{"Id":70,"Name":"Weepinbell","Types":["Grass","Poison"],"Moves":[215,225],"SpecialMoves":[118,90,59],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":130,"BaseAttack":190,"BaseDefense":110},"AverageHeight":1,"AverageWeight":6.4,"Evolutions":[{"Id":69,"Name":"Bellsprout"},{"Id":70,"Name":"Weepinbell"},{"Id":71,"Name":"Victreebel"}]},
 
{"Id":71,"Name":"Victreebel","Types":["Grass","Poison"],"Moves":[215,225],"SpecialMoves":[117,90,116],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":160,"BaseAttack":222,"BaseDefense":152},"AverageHeight":1.7,"AverageWeight":15.5,"Evolutions":[{"Id":69,"Name":"Bellsprout"},{"Id":70,"Name":"Weepinbell"},{"Id":71,"Name":"Victreebel"}]},
 
{"Id":72,"Name":"Tentacool","Types":["Water","Poison"],"Moves":[237,236],"SpecialMoves":[53,105,92,114],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":80,"BaseAttack":106,"BaseDefense":136},"AverageHeight":0.9,"AverageWeight":45.5,"Evolutions":[{"Id":72,"Name":"Tentacool"},{"Id":73,"Name":"Tentacruel"}]},
 
{"Id":73,"Name":"Tentacruel","Types":["Water","Poison"],"Moves":[225,224],"SpecialMoves":[107,91,40],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":160,"BaseAttack":170,"BaseDefense":196},"AverageHeight":1.6,"AverageWeight":55,"Evolutions":[{"Id":72,"Name":"Tentacool"},{"Id":73,"Name":"Tentacruel"}]},
 
{"Id":74,"Name":"Geodude","Types":["Rock","Ground"],"Moves":[227,221],"SpecialMoves":[26,64,63],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":80,"BaseAttack":106,"BaseDefense":118},"AverageHeight":0.4,"AverageWeight":20,"Evolutions":[{"Id":74,"Name":"Geodude"},{"Id":75,"Name":"Graveler"},{"Id":76,"Name":"Golem"}]},
 
{"Id":75,"Name":"Graveler","Types":["Rock","Ground"],"Moves":[227,216],"SpecialMoves":[26,32,64],"Encounter":{"BaseCaptureRate":0.2,"BaseFleeRate":0.07,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":110,"BaseAttack":142,"BaseDefense":156},"AverageHeight":1,"AverageWeight":105,"Evolutions":[{"Id":74,"Name":"Geodude"},{"Id":75,"Name":"Graveler"},{"Id":76,"Name":"Golem"}]},
 
{"Id":76,"Name":"Golem","Types":["Rock","Ground"],"Moves":[227,216],"SpecialMoves":[31,32,62],"Encounter":{"BaseCaptureRate":0.1,"BaseFleeRate":0.05,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":160,"BaseAttack":176,"BaseDefense":198},"AverageHeight":1.4,"AverageWeight":300,"Evolutions":[{"Id":74,"Name":"Geodude"},{"Id":75,"Name":"Graveler"},{"Id":76,"Name":"Golem"}]},
 
{"Id":77,"Name":"Ponyta","Types":["Fire"],"Moves":[221,209],"SpecialMoves":[21,101,103],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":100,"BaseAttack":168,"BaseDefense":138},"AverageHeight":1,"AverageWeight":30,"Evolutions":[{"Id":77,"Name":"Ponyta"},{"Id":78,"Name":"Rapidash"}]},
 
{"Id":78,"Name":"Rapidash","Types":["Fire"],"Moves":[207,209],"SpecialMoves":[103,46,42],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":130,"BaseAttack":200,"BaseDefense":170},"AverageHeight":1.7,"AverageWeight":95,"Evolutions":[{"Id":77,"Name":"Ponyta"},{"Id":78,"Name":"Rapidash"}]},
 
{"Id":79,"Name":"Slowpoke","Types":["Water","Psychic"],"Moves":[230,235],"SpecialMoves":[105,60,108],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":180,"BaseAttack":110,"BaseDefense":110},"AverageHeight":1.2,"AverageWeight":36,"Evolutions":[{"Id":79,"Name":"Slowpoke"},{"Id":80,"Name":"Slowbro"}]},
 
{"Id":80,"Name":"Slowbro","Types":["Water","Psychic"],"Moves":[230,235],"SpecialMoves":[105,108,92,39],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":190,"BaseAttack":184,"BaseDefense":198},"AverageHeight":1.6,"AverageWeight":78.5,"Evolutions":[{"Id":79,"Name":"Slowpoke"},{"Id":80,"Name":"Slowbro"}]},
 
{"Id":81,"Name":"Magnemite","Types":["Electric","Steel"],"Moves":[206,205],"SpecialMoves":[35,72,79],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":50,"BaseAttack":128,"BaseDefense":138},"AverageHeight":0.3,"AverageWeight":6,"Evolutions":[{"Id":81,"Name":"Magnemite"},{"Id":82,"Name":"Magneton"}]},
 
{"Id":82,"Name":"Magneton","Types":["Electric","Steel"],"Moves":[206,205],"SpecialMoves":[35,72,36],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":100,"BaseAttack":186,"BaseDefense":180},"AverageHeight":1,"AverageWeight":60,"Evolutions":[{"Id":81,"Name":"Magnemite"},{"Id":82,"Name":"Magneton"}]},
 
{"Id":83,"Name":"Farfetchd","Types":["Normal","Flying"],"Moves":[223,200],"SpecialMoves":[45,121,117],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":104,"BaseAttack":138,"BaseDefense":132},"AverageHeight":0.8,"AverageWeight":15,"Evolutions":[{"Id":83,"Name":"Farfetchd"}]},
 
{"Id":84,"Name":"Doduo","Types":["Normal","Flying"],"Moves":[211,219],"SpecialMoves":[38,45,125],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":70,"BaseAttack":126,"BaseDefense":96},"AverageHeight":1.4,"AverageWeight":39.2,"Evolutions":[{"Id":84,"Name":"Doduo"},{"Id":85,"Name":"Dodrio"}]},
 
{"Id":85,"Name":"Dodrio","Types":["Normal","Flying"],"Moves":[238,239],"SpecialMoves":[38,45,121],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":120,"BaseAttack":182,"BaseDefense":150},"AverageHeight":1.8,"AverageWeight":85.2,"Evolutions":[{"Id":84,"Name":"Doduo"},{"Id":85,"Name":"Dodrio"}]},
 
{"Id":86,"Name":"Seel","Types":["Water"],"Moves":[217,230],"SpecialMoves":[57,111,58],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.09,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":130,"BaseAttack":104,"BaseDefense":138},"AverageHeight":1.1,"AverageWeight":90,"Evolutions":[{"Id":86,"Name":"Seel"},{"Id":87,"Name":"Dewgong"}]},
 
{"Id":87,"Name":"Dewgong","Types":["Water","Ice"],"Moves":[218,217],"SpecialMoves":[111,57,40],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":180,"BaseAttack":156,"BaseDefense":192},"AverageHeight":1.7,"AverageWeight":120,"Evolutions":[{"Id":86,"Name":"Seel"},{"Id":87,"Name":"Dewgong"}]},
 
{"Id":88,"Name":"Grimer","Types":["Poison"],"Moves":[225,233],"SpecialMoves":[18,96,90],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":160,"BaseAttack":124,"BaseDefense":110},"AverageHeight":0.9,"AverageWeight":30,"Evolutions":[{"Id":88,"Name":"Grimer"},{"Id":89,"Name":"Muk"}]},
 
{"Id":89,"Name":"Muk","Types":["Poison"],"Moves":[225,224],"SpecialMoves":[16,92,92,91],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":210,"BaseAttack":180,"BaseDefense":188},"AverageHeight":1.2,"AverageWeight":30,"Evolutions":[{"Id":88,"Name":"Grimer"},{"Id":89,"Name":"Muk"}]},
 
{"Id":90,"Name":"Shellder","Types":["Water"],"Moves":[217,221],"SpecialMoves":[53,105,111],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":60,"BaseAttack":120,"BaseDefense":112},"AverageHeight":0.3,"AverageWeight":4,"Evolutions":[{"Id":90,"Name":"Shellder"},{"Id":91,"Name":"Cloyster"}]},
 
{"Id":91,"Name":"Cloyster","Types":["Water","Ice"],"Moves":[218,217],"SpecialMoves":[111,107,40],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":100,"BaseAttack":196,"BaseDefense":196},"AverageHeight":1.5,"AverageWeight":132.5,"Evolutions":[{"Id":90,"Name":"Shellder"},{"Id":91,"Name":"Cloyster"}]},
 
{"Id":92,"Name":"Gastly","Types":["Ghost","Poison"],"Moves":[212,203],"SpecialMoves":[16,69,90],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.1,"DodgeInterval":29,"AttackTimer":10},"Stats":{"BaseStamina":60,"BaseAttack":136,"BaseDefense":82},"AverageHeight":1.3,"AverageWeight":0.1,"Evolutions":[{"Id":92,"Name":"Gastly"},{"Id":93,"Name":"Haunter"},{"Id":94,"Name":"Gengar"}]},
 
{"Id":93,"Name":"Haunter","Types":["Ghost","Poison"],"Moves":[213,212],"SpecialMoves":[16,70,90],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":90,"BaseAttack":172,"BaseDefense":118},"AverageHeight":1.6,"AverageWeight":0.1,"Evolutions":[{"Id":92,"Name":"Gastly"},{"Id":93,"Name":"Haunter"},{"Id":94,"Name":"Gengar"}]},
 
{"Id":94,"Name":"Gengar","Types":["Ghost","Poison"],"Moves":[203,213],"SpecialMoves":[16,70,91],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.05,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":120,"BaseAttack":204,"BaseDefense":156},"AverageHeight":1.5,"AverageWeight":40.5,"Evolutions":[{"Id":92,"Name":"Gastly"},{"Id":93,"Name":"Haunter"},{"Id":94,"Name":"Gengar"}]},
 
{"Id":95,"Name":"Onix","Types":["Rock","Ground"],"Moves":[227,221],"SpecialMoves":[64,32,74],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":17,"AttackTimer":6},"Stats":{"BaseStamina":70,"BaseAttack":90,"BaseDefense":186},"AverageHeight":8.8,"AverageWeight":210,"Evolutions":[{"Id":95,"Name":"Onix"}]},
 
{"Id":96,"Name":"Drowzee","Types":["Psychic"],"Moves":[222,235],"SpecialMoves":[30,60,108],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":120,"BaseAttack":104,"BaseDefense":140},"AverageHeight":1,"AverageWeight":32.4,"Evolutions":[{"Id":96,"Name":"Drowzee"},{"Id":97,"Name":"Hypno"}]},
 
{"Id":97,"Name":"Hypno","Types":["Psychic"],"Moves":[234,235],"SpecialMoves":[60,108,70],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":170,"BaseAttack":162,"BaseDefense":196},"AverageHeight":1.6,"AverageWeight":75.6,"Evolutions":[{"Id":96,"Name":"Drowzee"},{"Id":97,"Name":"Hypno"}]},
 
{"Id":98,"Name":"Krabby","Types":["Water"],"Moves":[237,216],"SpecialMoves":[20,53,105],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":60,"BaseAttack":116,"BaseDefense":110},"AverageHeight":0.4,"AverageWeight":6.5,"Evolutions":[{"Id":98,"Name":"Krabby"},{"Id":99,"Name":"Kingler"}]},
 
{"Id":99,"Name":"Kingler","Types":["Water"],"Moves":[228,216],"SpecialMoves":[20,100,105],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":110,"BaseAttack":178,"BaseDefense":168},"AverageHeight":1.3,"AverageWeight":60,"Evolutions":[{"Id":98,"Name":"Krabby"},{"Id":99,"Name":"Kingler"}]},
 
{"Id":100,"Name":"Voltorb","Types":["Electric"],"Moves":[206,221],"SpecialMoves":[35,79,99],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":80,"BaseAttack":102,"BaseDefense":124},"AverageHeight":0.5,"AverageWeight":10.4,"Evolutions":[{"Id":100,"Name":"Voltorb"},{"Id":101,"Name":"Electrode"}]},
 
{"Id":101,"Name":"Electrode","Types":["Electric"],"Moves":[206,221],"SpecialMoves":[14,35,79],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":120,"BaseAttack":150,"BaseDefense":174},"AverageHeight":1.2,"AverageWeight":66.6,"Evolutions":[{"Id":100,"Name":"Voltorb"},{"Id":101,"Name":"Electrode"}]},
 
{"Id":102,"Name":"Exeggcute","Types":["Grass","Psychic"],"Moves":[235],"SpecialMoves":[59,108,62],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":120,"BaseAttack":110,"BaseDefense":132},"AverageHeight":0.4,"AverageWeight":2.5,"Evolutions":[{"Id":102,"Name":"Exeggcute"},{"Id":103,"Name":"Exeggutor"}]},
 
{"Id":103,"Name":"Exeggutor","Types":["Grass","Psychic"],"Moves":[235,234],"SpecialMoves":[59,108,116],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":190,"BaseAttack":232,"BaseDefense":164},"AverageHeight":2,"AverageWeight":120,"Evolutions":[{"Id":102,"Name":"Exeggcute"},{"Id":103,"Name":"Exeggutor"}]},
 
{"Id":104,"Name":"Cubone","Types":["Ground"],"Moves":[233,241],"SpecialMoves":[26,94,95],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":100,"BaseAttack":102,"BaseDefense":150},"AverageHeight":0.4,"AverageWeight":6.5,"Evolutions":[{"Id":104,"Name":"Cubone"},{"Id":105,"Name":"Marowak"}]},
 
{"Id":105,"Name":"Marowak","Types":["Ground"],"Moves":[233,241],"SpecialMoves":[26,31,94],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.06,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":120,"BaseAttack":140,"BaseDefense":202},"AverageHeight":1,"AverageWeight":45,"Evolutions":[{"Id":104,"Name":"Cubone"},{"Id":105,"Name":"Marowak"}]},
 
{"Id":106,"Name":"Hitmonlee","Types":["Fighting"],"Moves":[207,241],"SpecialMoves":[127,56,32],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":100,"BaseAttack":148,"BaseDefense":172},"AverageHeight":1.5,"AverageWeight":49.8,"Evolutions":[{"Id":106,"Name":"Hitmonlee"}]},
 
{"Id":107,"Name":"Hitmonchan","Types":["Fighting"],"Moves":[229,241],"SpecialMoves":[115,33,77,123],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":100,"BaseAttack":138,"BaseDefense":204},"AverageHeight":1.4,"AverageWeight":50.2,"Evolutions":[{"Id":107,"Name":"Hitmonchan"}]},
 
{"Id":108,"Name":"Lickitung","Types":["Normal"],"Moves":[212,234],"SpecialMoves":[14,127,118],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":23,"AttackTimer":8},"Stats":{"BaseStamina":180,"BaseAttack":126,"BaseDefense":160},"AverageHeight":1.2,"AverageWeight":65.5,"Evolutions":[{"Id":108,"Name":"Lickitung"}]},
 
{"Id":109,"Name":"Koffing","Types":["Poison"],"Moves":[225,221],"SpecialMoves":[18,16,90],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":80,"BaseAttack":136,"BaseDefense":142},"AverageHeight":0.6,"AverageWeight":1,"Evolutions":[{"Id":109,"Name":"Koffing"},{"Id":110,"Name":"Weezing"}]},
 
{"Id":110,"Name":"Weezing","Types":["Poison"],"Moves":[225,221],"SpecialMoves":[16,90,70],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":130,"BaseAttack":190,"BaseDefense":198},"AverageHeight":1.2,"AverageWeight":9.5,"Evolutions":[{"Id":109,"Name":"Koffing"},{"Id":110,"Name":"Weezing"}]},
 
{"Id":111,"Name":"Rhyhorn","Types":["Ground","Rock"],"Moves":[233,241],"SpecialMoves":[127,95,126],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":160,"BaseAttack":110,"BaseDefense":116},"AverageHeight":1,"AverageWeight":115,"Evolutions":[{"Id":111,"Name":"Rhyhorn"},{"Id":112,"Name":"Rhydon"}]},
 
{"Id":112,"Name":"Rhydon","Types":["Ground","Rock"],"Moves":[233,241],"SpecialMoves":[22,31,32],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":210,"BaseAttack":166,"BaseDefense":160},"AverageHeight":1.9,"AverageWeight":120,"Evolutions":[{"Id":111,"Name":"Rhyhorn"},{"Id":112,"Name":"Rhydon"}]},
 
{"Id":113,"Name":"Chansey","Types":["Normal"],"Moves":[222,234],"SpecialMoves":[30,108,86],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":500,"BaseAttack":40,"BaseDefense":60},"AverageHeight":1.1,"AverageWeight":34.6,"Evolutions":[{"Id":113,"Name":"Chansey"}]},
 
{"Id":114,"Name":"Tangela","Types":["Grass"],"Moves":[214],"SpecialMoves":[118,90,116],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.09,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":130,"BaseAttack":164,"BaseDefense":152},"AverageHeight":1,"AverageWeight":35,"Evolutions":[{"Id":114,"Name":"Tangela"}]},
 
{"Id":115,"Name":"Kangaskhan","Types":["Normal"],"Moves":[233,207],"SpecialMoves":[31,127,123],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":210,"BaseAttack":142,"BaseDefense":178},"AverageHeight":2.2,"AverageWeight":80,"Evolutions":[{"Id":115,"Name":"Kangaskhan"}]},
 
{"Id":116,"Name":"Horsea","Types":["Water"],"Moves":[230,237],"SpecialMoves":[53,82,36],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":60,"BaseAttack":122,"BaseDefense":100},"AverageHeight":0.4,"AverageWeight":8,"Evolutions":[{"Id":116,"Name":"Horsea"},{"Id":117,"Name":"Seadra"}]},
 
{"Id":117,"Name":"Seadra","Types":["Water"],"Moves":[230,204],"SpecialMoves":[40,82,107],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":110,"BaseAttack":176,"BaseDefense":150},"AverageHeight":1.2,"AverageWeight":25,"Evolutions":[{"Id":116,"Name":"Horsea"},{"Id":117,"Name":"Seadra"}]},
 
{"Id":118,"Name":"Goldeen","Types":["Water"],"Moves":[211,216],"SpecialMoves":[105,126,58],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":90,"BaseAttack":112,"BaseDefense":126},"AverageHeight":0.6,"AverageWeight":15,"Evolutions":[{"Id":118,"Name":"Goldeen"},{"Id":119,"Name":"Seaking"}]},
 
{"Id":119,"Name":"Seaking","Types":["Water"],"Moves":[211,224],"SpecialMoves":[22,111,46],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.07,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":160,"BaseAttack":172,"BaseDefense":160},"AverageHeight":1.3,"AverageWeight":39,"Evolutions":[{"Id":118,"Name":"Goldeen"},{"Id":119,"Name":"Seaking"}]},
 
{"Id":120,"Name":"Staryu","Types":["Water"],"Moves":[219,230],"SpecialMoves":[125,53,65],"Encounter":{"BaseCaptureRate":0.4,"BaseFleeRate":0.15,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":60,"BaseAttack":130,"BaseDefense":128},"AverageHeight":0.8,"AverageWeight":34.5,"Evolutions":[{"Id":120,"Name":"Staryu"},{"Id":121,"Name":"Starmie"}]},
 
{"Id":121,"Name":"Starmie","Types":["Water","Psychic"],"Moves":[219,230],"SpecialMoves":[30,107,65],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.06,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":120,"BaseAttack":194,"BaseDefense":192},"AverageHeight":1.1,"AverageWeight":80,"Evolutions":[{"Id":120,"Name":"Staryu"},{"Id":121,"Name":"Starmie"}]},
 
{"Id":122,"Name":"Mr.Mime","Types":["Psychic","Fairy"],"Moves":[235,234],"SpecialMoves":[30,108,70],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":80,"BaseAttack":154,"BaseDefense":196},"AverageHeight":1.3,"AverageWeight":54.5,"Evolutions":[{"Id":122,"Name":"Mr.Mime"}]},
 
{"Id":123,"Name":"Scyther","Types":["Bug","Flying"],"Moves":[200,239],"SpecialMoves":[51,100,49],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":140,"BaseAttack":176,"BaseDefense":180},"AverageHeight":1.5,"AverageWeight":56,"Evolutions":[{"Id":123,"Name":"Scyther"}]},
 
{"Id":124,"Name":"Jynx","Types":["Ice","Psychic"],"Moves":[218,222],"SpecialMoves":[85,33,60],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":130,"BaseAttack":172,"BaseDefense":134},"AverageHeight":1.4,"AverageWeight":40.6,"Evolutions":[{"Id":124,"Name":"Jynx"}]},
 
{"Id":125,"Name":"Electabuzz","Types":["Electric"],"Moves":[205,207],"SpecialMoves":[77,79,78],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":6,"AttackTimer":17},"Stats":{"BaseStamina":130,"BaseAttack":198,"BaseDefense":160},"AverageHeight":1.1,"AverageWeight":30,"Evolutions":[{"Id":125,"Name":"Electabuzz"}]},
 
{"Id":126,"Name":"Magmar","Types":["Fire"],"Moves":[209,208],"SpecialMoves":[24,103,115],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":14,"AttackTimer":5},"Stats":{"BaseStamina":130,"BaseAttack":214,"BaseDefense":158},"AverageHeight":1.3,"AverageWeight":44.5,"Evolutions":[{"Id":126,"Name":"Magmar"}]},
 
{"Id":127,"Name":"Pinsir","Types":["Bug"],"Moves":[241,200],"SpecialMoves":[20,100,54],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":130,"BaseAttack":184,"BaseDefense":186},"AverageHeight":1.5,"AverageWeight":55,"Evolutions":[{"Id":127,"Name":"Pinsir"}]},
 
{"Id":128,"Name":"Tauros","Types":["Normal"],"Moves":[221,234],"SpecialMoves":[31,126,74],"Encounter":{"BaseCaptureRate":0.24,"BaseFleeRate":0.09,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":150,"BaseAttack":148,"BaseDefense":184},"AverageHeight":1.4,"AverageWeight":88.4,"Evolutions":[{"Id":128,"Name":"Tauros"}]},
 
{"Id":129,"Name":"Magikarp","Types":["Water"],"Moves":[231],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.56,"BaseFleeRate":0.15,"DodgeInterval":3600,"AttackTimer":3600},"Stats":{"BaseStamina":40,"BaseAttack":42,"BaseDefense":84},"AverageHeight":0.9,"AverageWeight":10,"Evolutions":[{"Id":129,"Name":"Magikarp"},{"Id":130,"Name":"Gyarados"}]},
 
{"Id":130,"Name":"Gyarados","Types":["Water","Flying"],"Moves":[204,202],"SpecialMoves":[107,80,82],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.07,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":190,"BaseAttack":192,"BaseDefense":196},"AverageHeight":6.5,"AverageWeight":235,"Evolutions":[{"Id":129,"Name":"Magikarp"},{"Id":130,"Name":"Gyarados"}]},
 
{"Id":131,"Name":"Lapras","Types":["Water","Ice"],"Moves":[218,217],"SpecialMoves":[82,92,39,40],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":260,"BaseAttack":186,"BaseDefense":190},"AverageHeight":2.5,"AverageWeight":220,"Evolutions":[{"Id":131,"Name":"Lapras"}]},
 
{"Id":132,"Name":"Ditto","Types":["Normal"],"Moves":[222],"SpecialMoves":[133],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.1,"DodgeInterval":3600,"AttackTimer":3600},"Stats":{"BaseStamina":96,"BaseAttack":110,"BaseDefense":110},"AverageHeight":0.3,"AverageWeight":4,"Evolutions":[{"Id":132,"Name":"Ditto"}]},
 
{"Id":133,"Name":"Eevee","Types":["Normal"],"Moves":[219,221],"SpecialMoves":[26,131,125],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.1,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":110,"BaseAttack":114,"BaseDefense":128},"AverageHeight":0.3,"AverageWeight":6.5,"Evolutions":[{"Id":133,"Name":"Eevee"},{"Id":134,"Name":"Vaporeon"},{"Id":135,"Name":"Jolteon"},{"Id":136,"Name":"Flareon"}]},
 
{"Id":134,"Name":"Vaporeon","Types":["Water"],"Moves":[230],"SpecialMoves":[105,107,58],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.06,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":260,"BaseAttack":186,"BaseDefense":168},"AverageHeight":1,"AverageWeight":29,"Evolutions":[{"Id":133,"Name":"Eevee"},{"Id":134,"Name":"Vaporeon"},{"Id":135,"Name":"Jolteon"},{"Id":136,"Name":"Flareon"}]},
 
{"Id":135,"Name":"Jolteon","Types":["Electric"],"Moves":[205],"SpecialMoves":[35,79,78],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.06,"DodgeInterval":4,"AttackTimer":11},"Stats":{"BaseStamina":130,"BaseAttack":192,"BaseDefense":174},"AverageHeight":0.8,"AverageWeight":24.5,"Evolutions":[{"Id":133,"Name":"Eevee"},{"Id":134,"Name":"Vaporeon"},{"Id":135,"Name":"Jolteon"},{"Id":136,"Name":"Flareon"}]},
 
{"Id":136,"Name":"Flareon","Types":["Fire"],"Moves":[209],"SpecialMoves":[24,103,42],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.06,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":130,"BaseAttack":238,"BaseDefense":178},"AverageHeight":0.9,"AverageWeight":25,"Evolutions":[{"Id":133,"Name":"Eevee"},{"Id":134,"Name":"Vaporeon"},{"Id":135,"Name":"Jolteon"},{"Id":136,"Name":"Flareon"}]},
 
{"Id":137,"Name":"Porygon","Types":["Normal"],"Moves":[219,221],"SpecialMoves":[30,99,35],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.09,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":130,"BaseAttack":156,"BaseDefense":158},"AverageHeight":0.8,"AverageWeight":36.5,"Evolutions":[{"Id":137,"Name":"Porygon"}]},
 
{"Id":138,"Name":"Omanyte","Types":["Rock","Water"],"Moves":[230,216],"SpecialMoves":[62,104,63],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.09,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":70,"BaseAttack":132,"BaseDefense":160},"AverageHeight":0.4,"AverageWeight":7.5,"Evolutions":[{"Id":138,"Name":"Omanyte"},{"Id":139,"Name":"Omastar"}]},
 
{"Id":139,"Name":"Omastar","Types":["Rock","Water"],"Moves":[227,230],"SpecialMoves":[62,107,64],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.05,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":140,"BaseAttack":180,"BaseDefense":202},"AverageHeight":1,"AverageWeight":35,"Evolutions":[{"Id":138,"Name":"Omanyte"},{"Id":139,"Name":"Omastar"}]},
 
{"Id":140,"Name":"Kabuto","Types":["Rock","Water"],"Moves":[220,216],"SpecialMoves":[62,57,63],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.09,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":60,"BaseAttack":148,"BaseDefense":142},"AverageHeight":0.5,"AverageWeight":11.5,"Evolutions":[{"Id":140,"Name":"Kabuto"},{"Id":141,"Name":"Kabutops"}]},
 
{"Id":141,"Name":"Kabutops","Types":["Rock","Water"],"Moves":[216,200],"SpecialMoves":[62,105,32],"Encounter":{"BaseCaptureRate":0.12,"BaseFleeRate":0.05,"DodgeInterval":11,"AttackTimer":4},"Stats":{"BaseStamina":120,"BaseAttack":190,"BaseDefense":190},"AverageHeight":1.3,"AverageWeight":40.5,"Evolutions":[{"Id":140,"Name":"Kabuto"},{"Id":141,"Name":"Kabutops"}]},
 
{"Id":142,"Name":"Aerodactyl","Types":["Rock","Flying"],"Moves":[239,202],"SpecialMoves":[14,62,74],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":5,"AttackTimer":14},"Stats":{"BaseStamina":160,"BaseAttack":182,"BaseDefense":162},"AverageHeight":1.8,"AverageWeight":59,"Evolutions":[{"Id":142,"Name":"Aerodactyl"}]},
 
{"Id":143,"Name":"Snorlax","Types":["Normal"],"Moves":[234,212],"SpecialMoves":[131,14,31],"Encounter":{"BaseCaptureRate":0.16,"BaseFleeRate":0.09,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":320,"BaseAttack":180,"BaseDefense":180},"AverageHeight":2.1,"AverageWeight":460,"Evolutions":[{"Id":143,"Name":"Snorlax"}]},
 
{"Id":144,"Name":"Articuno","Types":["Ice","Flying"],"Moves":[218],"SpecialMoves":[92,39,111,40],"Encounter":{"BaseFleeRate":0.1,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":180,"BaseAttack":198,"BaseDefense":242},"AverageHeight":1.7,"AverageWeight":55.4,"Evolutions":[{"Id":144,"Name":"Articuno"}]},
 
{"Id":145,"Name":"Zapdos","Types":["Electric","Flying"],"Moves":[205],"SpecialMoves":[35,79,78],"Encounter":{"BaseFleeRate":0.1,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":180,"BaseAttack":232,"BaseDefense":194},"AverageHeight":1.6,"AverageWeight":52.6,"Evolutions":[{"Id":145,"Name":"Zapdos"}]},
 
{"Id":146,"Name":"Moltres","Types":["Fire","Flying"],"Moves":[209],"SpecialMoves":[24,103,42],"Encounter":{"BaseFleeRate":0.1,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":180,"BaseAttack":242,"BaseDefense":194},"AverageHeight":2,"AverageWeight":60,"Evolutions":[{"Id":146,"Name":"Moltres"}]},
 
{"Id":147,"Name":"Dratini","Types":["Dragon"],"Moves":[204],"SpecialMoves":[92,114,80,58],"Encounter":{"BaseCaptureRate":0.32,"BaseFleeRate":0.09,"DodgeInterval":10,"AttackTimer":29},"Stats":{"BaseStamina":82,"BaseAttack":128,"BaseDefense":110},"AverageHeight":1.8,"AverageWeight":3.3,"Evolutions":[{"Id":147,"Name":"Dratini"},{"Id":148,"Name":"Dragonair"},{"Id":149,"Name":"Dragonite"}]},
 
{"Id":148,"Name":"Dragonair","Types":["Dragon"],"Moves":[204],"SpecialMoves":[92,114,58,82],"Encounter":{"BaseCaptureRate":0.08,"BaseFleeRate":0.06,"DodgeInterval":8,"AttackTimer":23},"Stats":{"BaseStamina":122,"BaseAttack":170,"BaseDefense":152},"AverageHeight":4,"AverageWeight":16.5,"Evolutions":[{"Id":147,"Name":"Dratini"},{"Id":148,"Name":"Dragonair"},{"Id":149,"Name":"Dragonite"}]},
 
{"Id":149,"Name":"Dragonite","Types":["Dragon","Flying"],"Moves":[204,239],"SpecialMoves":[14,82,83],"Encounter":{"BaseCaptureRate":0.04,"BaseFleeRate":0.05,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":182,"BaseAttack":250,"BaseDefense":212},"AverageHeight":2.2,"AverageWeight":210,"Evolutions":[{"Id":147,"Name":"Dratini"},{"Id":148,"Name":"Dragonair"},{"Id":149,"Name":"Dragonite"}]},
 
{"Id":150,"Name":"Mewtwo","Types":["Psychic"],"Moves":[226,235],"SpecialMoves":[14,108,70],"Encounter":{"BaseFleeRate":0.1,"DodgeInterval":8,"AttackTimer":3},"Stats":{"BaseStamina":212,"BaseAttack":284,"BaseDefense":202},"AverageHeight":2,"AverageWeight":122,"Evolutions":[{"Id":150,"Name":"Mewtwo"}]},
 
{"Id":151,"Name":"Mew","Types":["Psychic"],"Moves":[222],"SpecialMoves":[31,14,122,108,82,78,87,103,116],"Encounter":{"BaseFleeRate":0.1,"DodgeInterval":3,"AttackTimer":8},"Stats":{"BaseStamina":200,"BaseAttack":220,"BaseDefense":220},"AverageHeight":0.4,"AverageWeight":4,"Evolutions":[{"Id":151,"Name":"Mew"}]}
]