//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

client.on("userUpdate", async (oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
      let tag = " "; //tagınız
      let sunucu = " "; //sunucu ID
      let kanal = " " //log kanal id
      let rol = " "; // rol ID
      if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
        client.channels.get(kanal).send(`${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
        client.guilds.get(sunucu).members.get(newUser.id).addRole(rol)
      } if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
        client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
        client.channels.get(kanal).send(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
      }
  
    }
  })