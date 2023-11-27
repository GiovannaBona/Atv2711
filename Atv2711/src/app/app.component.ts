import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  filmesDeNatal = [
    { titulo: 'Uma Quedinha de Natal ', descricao: 'Uma comédia romântica cheia de clichês que todo mundo adora. Esse filme original Netflix conta história de uma herdeira que sofre um acidente de esqui um dia antes do Natal. Ela só não contava que após o acidente sua memória se perderia e o seu Natal tomaria um rumo completamente diferente. ', imagem: 'https://br.web.img3.acsta.net/pictures/22/10/07/21/50/3065478.jpg' },
    { titulo: 'Um Menino Chamado Natal ', descricao: 'Baseado no livro homônimo de Matt Haig, o filme conta a história de Nikolas, um menino que parte em busca de seu pai e acaba embarcando em uma aventura mágica. Com duendes, elfos e animais falantes, o longa original da Netflix é perfeito para quem não dispensa uma boa fantasia. ', imagem: 'https://br.web.img3.acsta.net/pictures/21/09/15/09/05/0806353.jpg' },
    { titulo: 'Um Crush Para o Natal ', descricao: 'Peter é um homem gay solteiro, pressionado pela família para arranjar um namorado. Para evitar que isso aconteça durante a temporada natalina na casa dos pais, ele convida o melhor amigo para se passar por seu par. Como um bom clichê, a farsa não dura muito tempo e resulta num belo romance. ', imagem: 'https://br.web.img2.acsta.net/pictures/21/11/11/10/54/4099904.jpg' },
    { titulo: 'A Família Noel', descricao: 'Para assistir com a família toda, o filme conta a história de Jules, um menino que não gosta do Natal desde a morte de seu pai, no último fim de ano. Quando seu avô fica doente, o garoto vai redescobrir o significado da data e reaprender a amar a magia natalina.', imagem: 'https://br.web.img2.acsta.net/pictures/21/10/27/13/42/0722126.jpg' },
    { titulo: 'Os Fantasmas de Scrooge', descricao: 'Dublado por Jim Carrey, Gary Oldman e Colin Firth, o filme dievrtido e emocionante, retrata o clássico conto em que um velho rabugento é visitado pelos fantasmas do Natal para conhecer o verdadeiro espírito da data.', imagem: 'https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/68/53/04/19107556.jpg' },
  ];

  filmesDoTimburton = [
    { titulo: 'Frankenweenie', descricao: 'Depois de perder seu cão Sparky, o jovem Victor usa o poder da ciência para trazer de volta à vida seu melhor amigo.', imagem: 'https://m.media-amazon.com/images/M/MV5BMjIxODY3MjEwNV5BMl5BanBnXkFtZTcwOTMzNjc4Nw@@._V1_.jpg' },
    { titulo: 'Sombras da Noite', descricao: 'No ano de 1752, Joshua, Naomi Collins e seu filho Barnabas, foram embora de Liverpool, Inglaterra, para começar uma nova vida na América.', imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/65/98/20060682.jpg' },
    { titulo: 'Alice no País das Maravilhas', descricao: ' Alice agora aos 17 anos, descobre que está prestes a ser pedida em casamento em um evento social.', imagem: 'https://i.pinimg.com/1200x/4c/54/3e/4c543ec063dd4a9423f3a3ff0ea166c1.jpg' },
    { titulo: 'A Noiva Cadáver', descricao: 'O jovem Victor Van Dorst está prestes a se casar com Victoria Everglot, porém acidentalmente, casa-se com a noiva cadáver.', imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/33/59/20140728.jpg' },
    { titulo: 'Os Fantasmas se Divertem', descricao: 'Casal de fantasmas tem sua casa invadida por uma família. Para espantá-los, eles contratam um fantasma especialista em assustar humanos (Michael Keaton).', imagem: 'https://br.web.img3.acsta.net/r_1280_720/img/52/9e/529e4ad1ec748a974a14a8bade088890.jpg' }, 
  ];

  filmesTerror = [
    { titulo: 'Psicose', descricao: 'Uma secretária, fugindo após um roubo, se hospeda em um velho hotel de beira de estrada. Lá, ela passará por grandes perigos quando o administrador do hotel revelar suas obscuras intenções.', imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/27/89/19873853.jpg' },
    { titulo: 'O Exorcista', descricao: 'Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador.', imagem: 'https://i.pinimg.com/736x/2e/e3/f0/2ee3f0b3650b9368c1834aad8545093a.jpg' },
    { titulo: 'Invocação do Mal', descricao: 'Harrisville, Estados Unidos. Um casal (Ron Livinston e Lili Taylor) muda para uma casa nova ao lado de suas cinco filhas. Inexplicavelmente, estranhos acontecimentos começam a assustar as crianças, o pai e, principalmente, a mãe. Preocupada com algumas manchas que aparecem em seu corpo e com uma sequência de sustos que levou, ela decide ...', imagem: 'https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg' },
    { titulo: 'Alien, o 8º Passageiro', descricao: 'Uma nave espacial, ao retornar para Terra, recebe estranhos sinais vindos de um asteróide. Ao investigarem o local, um dos tripulantes é atacado por um estranho ser. O que parecia ser um ataque isolado se transforma em um terror constante, pois o tripulante atacado levou para dentro da nave o embrião de um alienígena, que não para de crescer e ...', imagem: 'https://br.web.img3.acsta.net/pictures/15/05/14/21/14/504650.jpg' },
    { titulo: 'O Iluminado', descricao: 'Durante o inverno, um homem (Jack Nicholson) é contratado para ficar como vigia em um hotel no Colorado e vai para lá com a mulher (Shelley Duvall) e seu filho (Danny Lloyd). Porém, o contínuo isolamento começa a lhe causar problemas mentais sérios e ele vai se tornado cada vez mais agressivo e perigoso, ao mesmo tempo em que seu filho passa ...', imagem: 'https://br.web.img3.acsta.net/pictures/14/10/10/19/21/152595.jpg' },
  ];
}