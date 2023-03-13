/*:
 * @plugindesc Remove o ícone de batalha em cima de um inimigo específico na batalha. Adicione a tag <remove_icon> na notas do inimigo para ativar. Exemplo: <remove_icon>.
 * @author Alan
 *
 * @help Este plugin remove o ícone de batalha em cima de um inimigo específico na batalha. Para remover o ícone, adicione a tag <remove_icon> nas notas do inimigo.
 *
 */

function onGameOver() {
    $gameMessage.add('Game Over!'); // Exibe a mensagem "Game Over!"
}
