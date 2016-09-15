$.lang.register('customcommands.add.error', 'Fehler! Dieser Befehl existiert bereits');
$.lang.register('customcommands.add.success', 'Befehl !$1 wurde erfolgreich erstellt!');
$.lang.register('customcommands.add.usage', 'Anleitung: !addcom (Befehl) (Nachricht)');
$.lang.register('customcommands.add.commandtag.notfirst', '(command) tag must be the start of a custom command when used.');
$.lang.register('customcommands.add.commandtag.invalid', '(command) tag command does not exist: $1');
$.lang.register('customcommands.alias.delete.error.alias.404', 'Fehler! Alias !$1 existiert nicht');
$.lang.register('customcommands.alias.delete.success', '$1, das Alias !$2 wurde erfolgreich gelöscht!');
$.lang.register('customcommands.alias.delete.usage', 'Anleitung: !delalias (alias name)');
$.lang.register('customcommands.alias.error', 'Fehler! Das Alias !$1 existiert bereits.');
$.lang.register('customcommands.alias.error.target404', 'Fehler! Diesen Zielbefehl gibt es nicht!');
$.lang.register('customcommands.alias.success', 'Das Alias !$2 zeigt nun auf den Befehl !$1');
$.lang.register('customcommands.alias.usage', 'Anleitung: !aliascom (existierender Befehl) (Alias)');
$.lang.register('customcommands.delete.success', 'Der Befehl !$1 wurde entfernt!');
$.lang.register('customcommands.delete.usage', 'Anleitung: !delcom (Befehl)');
$.lang.register('customcommands.edit.404', 'you cannot overwrite a default command.');
$.lang.register('customcommands.set.perm.error.target404', 'the command !$1 does not exist!');
$.lang.register('customcommands.set.perm.success', 'permissions for command: $1 set for group: $2 and higher.');
$.lang.register('customcommands.set.perm.unset.success', 'All recursive permissions for the command: $1 and any of its aliases have been removed.');
$.lang.register('customcommands.set.perm.usage', 'usage: !permcom (command name) (group id/name). Restricts usage of a command to viewers with a certain permission level.');
$.lang.register('customcommands.set.perm.404', 'This command does not seem to exist: $1');
$.lang.register('customcommands.set.price.error.404', 'please select a command that exists and is available to non-mods.');
$.lang.register('customcommands.set.price.error.invalid', 'please enter a valid price, 0 or greater.');
$.lang.register('customcommands.set.price.success', 'the price for !$1 has been set to $2 $3.');
$.lang.register('customcommands.set.price.usage', 'Anleitung: !pricecom (Befehl) (Preis)');
$.lang.register('customcommands.set.pay.error.404', 'please select a command that exists and is available to non-mods.');
$.lang.register('customcommands.set.pay.error.invalid', 'please enter a valid payment, 0 or greater.');
$.lang.register('customcommands.set.pay.success', 'the pay for !$1 has been set to $2 $3.');
$.lang.register('customcommands.set.pay.usage', 'usage: !paycom (command) (price)');
$.lang.register('customcommands.404.no.commands', 'there are no custom commands, add one with !addcom');
$.lang.register('customcommands.cmds', 'Befehle: $1');
$.lang.register('customcommands.edit.usage', 'Anleitung: !editcom (Befehl) (Nachricht)');
$.lang.register('customcommands.edit.success', 'Der Befehl !$1 wurde geändert!');
$.lang.register('customcommands.touser.offline', 'Sorry, $1 scheint offline zu sein!');
$.lang.register('customcommands.customapi.404', 'Fehler! Der Befehl !$1 benötigt weitere Argumente.');
$.lang.register('customcommands.customapijson.err', '!$1: An error occurred processing the API.');
$.lang.register('customcommands.disable.usage', 'Usage: !disablecom (command)');
$.lang.register('customcommands.disable.404', 'that command does not exists.');
$.lang.register('customcommands.disable.err', 'that command is already disabled.');
$.lang.register('customcommands.disable.success', 'command !$1 has been disabled.');
$.lang.register('customcommands.enable.usage', 'Usage: !enablecom (command)');
$.lang.register('customcommands.enable.404', 'that command does not exists.');
$.lang.register('customcommands.enable.err', 'that command is not disabled.');
$.lang.register('customcommands.enable.success', 'command !$1 has been re-enabled.');
$.lang.register('customcommands.botcommands', 'Commands: $1');
$.lang.register('customcommands.botcommands.error', 'Provide a number to find a page.');
$.lang.register('customcommands.botcommands.total', 'Total Pages: $1 [See also: ]');