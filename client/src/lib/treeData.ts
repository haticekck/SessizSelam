import type { Tree, Question } from "@shared/schema";
import tree1 from "@assets/tree11.jpeg"; // Salkım Söğüt
import tree2 from "@assets/tree10.jpeg"; // Meşe
import tree3 from "@assets/tree4.jpeg"; // Sarıçam
import tree4 from "@assets/tree8.jpeg"; // Huş Ağacı
import tree5 from "@assets/tree9.jpeg"; // Mavi Ladin
import tree6 from "@assets/tree5.jpeg"; // Batı Mazısı
import tree7 from "@assets/tree7.jpeg"; // Elma
import tree8 from "@assets/tree12.jpeg"; // Top Akasya
import tree9 from "@assets/tree2.jpeg"; // At Kestanesi
import tree10 from "@assets/tree3.jpeg"; // Kara Kavak
import tree11 from "@assets/tree6.jpeg"; // Çınar Yapraklı Akçaağaç
import tree12 from "@assets/tree1.jpeg"; // Akasya
import audio1 from "@assets/generated_images/salkim_sogut.mp3";
import audio2 from "@assets/generated_images/mese.mp3";
import audio3 from "@assets/generated_images/sari_cam.mp3";
import audio4 from "@assets/generated_images/hus_agaci.mp3";
import audio5 from "@assets/generated_images/mavi_ladin.mp3";
import audio6 from "@assets/generated_images/bati_mazisi.mp3";
import audio7 from "@assets/generated_images/elma.mp3";
import audio8 from "@assets/generated_images/top_akasya.mp3";
import audio9 from "@assets/generated_images/at_kestanesi.mp3";
import audio10 from "@assets/generated_images/kara_kavak.mp3";
import audio11 from "@assets/generated_images/cinar_yaprakli_akcaagac.mp3";
import audio12 from "@assets/generated_images/akasya.mp3";

export const trees: Tree[] = [
  {
    id: 1,
    name: "Salkım Söğüt Ağacı",
    scientificName: "Salix babylonica",
    description: `MERHABA!

Ben SÖĞÜT AĞACI

Nemli alanlara bayılırım.

Genellikle dere kenarları, göl ve nehir kıyılarına yerleşirim.

Hızlı büyür, kısa sürede gelişirim.

Uzun mu uzun, zarif mi zarif dallarım ve sarkık yapımla parklara, bahçelere süs bitkisi olarak eşlik ederim.

Aspirinin hammaddesi benim.

"AK SÖĞÜT" ismiyle bilinen ben kim miyim? SÖĞÜT AĞACI.`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree1,
    audioUrl: audio1,
  },
  {
    id: 2,
    name: "Meşe Ağacı",
    scientificName: "Quercus",
    description: `MERHABA!

Ben MEŞE AĞACI

Türkiye'nin çoğu yerinde doğal olarak yetişirim.

Uzun ömürlüyüm istesem 500 yıl yaşarım. insanlar beni güçlü yapımla tanır.

Sincapların göz bebeği palamutlarım iki yılda olgunlaşır.

Derin köklerim toprağı tutarak erozyonu önler.

Türk mitolojisinde sağlamlığı ve bilgeliği temsil eden ben kim miyim? MEŞE AĞACI!`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree2,
    audioUrl: audio2,
  },
  {
    id: 3,
    name: "Sarıçam Ağacı",
    scientificName: "Pinus sylvestris",
    description: `Merhaba

Ben sarıçam 

narin gövdem sivri tepem ve nazlı dallarımla her dem yeşil bir ağacım.

Beni diğer türlerimden ayırt etmek istersen gövdeme bak.

Gövdemin üst kesimleri parlak açık kahverengi kabukludur

Yapraklarım diğer çamlardan kısa kozalaklarım aşağıya dönüktür. Ben kim miyim dünyanın en geniş yayılışlı çamıyım SARIÇAM!`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree3,
    audioUrl: audio3,
  },
  {
    id: 4,
    name: "Huş Ağacı",
    scientificName: "Betula",
    description: `MERHABA!

BEN HUŞ AĞACI

Gövdemin beyaz, ince; kabuğumun düzgün veya yırtılmış olarak görülmesiyle tanınırım.

Büyüdükçe gövdemde sarkmalar meydana gelir ama çok işlevliyimdir. 

Kabuklarım ateş tutuşturma kabiliyetine sahiptir.

Parşömen yapımında da kullanılırım. Ben kim miyim? Eskilerin "KAĞIT AĞACI" dediği HUŞ AĞACI!`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree4,
    audioUrl: audio4,
  },
  {
    id: 5,
    name: "Mavi Ladin Ağacı",
    scientificName: "Picea pungens",
    description: `MERHABA!

Ben MAVİ LADİN

Ailem Çamgillerden.

Soğuk iklimleri severim -40°C ye kadar dayanırım 

50-60 metre kadar boyum, düz gövdemle, kozalağı aşağıya doğru sarkık bir orman ağacıyım 

Peyzaj düzenlemelerinde akla ilk gelen isim benim .

Dekoratif görünümüyle dikkat çeken ben kim miyim? MAVİ LADİN!`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree5,
    audioUrl: audio5,
  },
  {
    id: 6,
    name: "Batı Mazısı Ağacı",
    scientificName: "Thuja occidentalis",
    description: `MERHABA! 

Ben BATI MAZISI

Servigillerden geliyorum.

Uzun ömürlüyüm, iğne yapraklıyın ve her dem yeşil bir ağacım.

Yapraklarım pul şeklinde, küçük, düz ve parlak yeşil renktedir. 

Beni ezenlere hoş bir reçine kokusu veririm.

Kozalaklarım küçük ve ovaldir. Hele bir olgunlaşsınlar kahverengiye dönüp pulları açılarak tohumlarını bırakırlar.

Süs bitkisi olarakda değerlendirilen ben kim miyim? BATI MAZISI`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree6,
    audioUrl: audio6,
  },
  {
    id: 7,
    name: "Elma Ağacı",
    scientificName: "Malus domestica",
    description: `MERHABA!

Ben ELMA AĞACI

Ailem gülgillere dayanıyor.

İlkbahara bayılırım.

Çiçeklerim genellikle ilkbaharda pembe, beyaz tonlarda açar.

Gıda sektöründe taze tüketim, meyve suyu, reçel, kurutulmuş meyve gibi bir çok üründe benden yararlanırlar.

İlaç ve kozmetik sanayisinde de varım

Türkiye'de ihracat değeri en yüksek olan ben gözde ağaçlardanım.

Dünyanın en yaygın yetiştirilen meyve ağaçlarından biri olan ben kim miyim? ELMA AĞACI`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree7,
    audioUrl: audio7,
  },
  {
    id: 8,
    name: "Top Akasya Ağacı",
    scientificName: "Robinia pseudoacacia 'Umbraculifera'",
    description: `MERHABA!

Ben TOP AKASYA 

Doğal değilim, budama yoluyla oluşturulmuşum.

Küresel formlu, süs amaçlı kullanılan bir akasya çeşidiyim. 

Bir top gibi sık ve simetriğim.

Kent peyzajında, parklarda ve refüjlerde göze çarparım.

Eee bir de belirli aralıklara taç budamam yapılmazsa formumu kaybederim.

Ben kim miyim? TOP AKASYA`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree8,
    audioUrl: audio8,
  },
  {
    id: 9,
    name: "At Kestanesi Ağacı",
    scientificName: "Aesculus hippocastanum",
    description: `MERHABA!

Ben AT KESTANESİ

Geniş yapraklarım, büyük gövdem, gösterişli çiçeklerimle süs ve gölge ağacıyım.

Park, bahçe ve yol ağaçlandırmalarında beni sıkça görebilirsin. 

dikenli dış kabuğa sahip yuvarlak kapsüller içinde koyu kahverengi parlak tohumlar yer almaktadır.

Sakın meyvelerimi doğrudan yeme. Zehirlidir, ancak tıbbi kullanımım da vardır.

Bsn kim miyim? AT KESTANESİ AĞACI`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree9,
    audioUrl: audio9,
  },
  {
    id: 10,
    name: "Kara Kavak Ağacı",
    scientificName: "Populus nigra",
    description: `MERHABA!

Ben KARA KAVAK

Söğütgiller familyasından geliyorum.

Hızlı büyürüm, yaprak dökerim, uzun boyluyum ve dar tepeliyim.

Türkiye'de sulak alanlara, nehir kenarlarına ve tarla sınırlarına bakarsan beni görebilirsin.

Boyum 20-30 metreye kadar uzayabilir.

Yapraklarım kalp şeklinde veya üçgenimsi, kenarları dişlidir.

Rüzgarda titrediğimi görenler üşüdüğümü sanır ancak ben yaprak sapım uzun ve düz olduğundan titrerim.

Su içmeyi çok severim

İlkbaharda pamuk uçuşmalarına neden olan tohumlarım vardır.

Ben kim miyim? KARA KAVAK AĞACI`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree10,
    audioUrl: audio10,
  },
  {
    id: 11,
    name: "Çınar Yapraklı Akçaağaç",
    scientificName: "Acer pseudoplatanus",
    description: `MERHABA!

Ben ÇINAR YAPRAKLI AKÇAAĞAÇ

Nemli, derin ve organik maddece zengin topraklarda yaşamayı tercih ederim.

-20°Cye kadar soğuğu tolere ederim.

Düzenli su tüketirim susuzluğa gelemem.

Hızlı büyürüm. 

Müzik aletleri, marangozluk işleri ve mobilya yapımlarında kullanılırım

Ben kim miyim? ÇINAR YAPRAKLI AKÇAAĞAÇC`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree11,
    audioUrl: audio11,
  },
  {
    id: 12,
    name: "Akasya Ağacı",
    scientificName: "Robinia pseudoacacia",
    description: `MERHABA!

Ben AKASYA 

İstesem 6 ila 25 metreye kadar uzayabilirim.

Mayıs-haziran aylarında hoş kokulu, sarkık beyaz hatta bazen mor-pembe çiçek salkımlarım var.

Meyvem bakla şeklinde , içinde tohumlar bulunur.

Azot bağlarsam eğer toprağı zenginleştirir, diğer bitki kardeşlerimin gelişimini desteklerim.

Bitki dostu ben kim miyim? AKASYA AĞACI`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree12,
    audioUrl: audio12,
  },
];

export const questions: Question[] = [
  {
    id: 1,
    treeId: 1,
    question: "Bu hangi ağaç?",
    options: ["Salkım Söğüt", "Kara Kavak", "Akasya", "Huş Ağacı"],
    correctAnswer: 0,
  },
  {
    id: 2,
    treeId: 2,
    question: "Bu hangi ağaç?",
    options: ["At Kestanesi", "Meşe", "Çınar Yapraklı Akçaağaç", "Elma"],
    correctAnswer: 1,
  },
  {
    id: 3,
    treeId: 3,
    question: "Bu hangi ağaç?",
    options: ["Mavi Ladin", "Batı Mazısı", "Sarıçam", "Akasya"],
    correctAnswer: 2,
  },
  {
    id: 4,
    treeId: 4,
    question: "Bu hangi ağaç?",
    options: [
      "Kara Kavak",
      "Salkım Söğüt",
      "Huş Ağacı",
      "Çınar Yapraklı Akçaağaç",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    treeId: 5,
    question: "Bu hangi ağaç?",
    options: ["Sarıçam", "Batı Mazısı", "Mavi Ladin", "Meşe"],
    correctAnswer: 2,
  },
  {
    id: 6,
    treeId: 6,
    question: "Bu hangi ağaç?",
    options: ["Mavi Ladin", "Batı Mazısı", "Sarıçam", "Huş Ağacı"],
    correctAnswer: 1,
  },
  {
    id: 7,
    treeId: 7,
    question: "Bu hangi ağaç?",
    options: ["Top Akasya", "Akasya", "Elma", "At Kestanesi"],
    correctAnswer: 2,
  },
  {
    id: 8,
    treeId: 8,
    question: "Bu hangi ağaç?",
    options: ["Akasya", "Top Akasya", "Meşe", "Salkım Söğüt"],
    correctAnswer: 1,
  },
  {
    id: 9,
    treeId: 9,
    question: "Bu hangi ağaç?",
    options: ["Meşe", "Çınar Yapraklı Akçaağaç", "At Kestanesi", "Elma"],
    correctAnswer: 2,
  },
  {
    id: 10,
    treeId: 10,
    question: "Bu hangi ağaç?",
    options: ["Salkım Söğüt", "Huş Ağacı", "Kara Kavak", "Top Akasya"],
    correctAnswer: 2,
  },
  {
    id: 11,
    treeId: 11,
    question: "Bu hangi ağaç?",
    options: ["Çınar Yapraklı Akçaağaç", "At Kestanesi", "Meşe", "Kara Kavak"],
    correctAnswer: 0,
  },
  {
    id: 12,
    treeId: 12,
    question: "Bu hangi ağaç?",
    options: ["Top Akasya", "Salkım Söğüt", "Akasya", "Elma"],
    correctAnswer: 2,
  },
];
