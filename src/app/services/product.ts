import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    description: string;
    details: string;
    material: string;
    availableSizes?: string[];
    whatsappMessage: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {

    // =====================================================================
    //  UPDATE IMAGE PATHS HERE — just change the imageUrl string values
    //  Images should be placed inside: src/assets/images/
    // =====================================================================
    private products: Product[] = [
        {
            id: 1,
            name: 'Madurai Meenakshi Amman Temple Pallakku',
            category: 'Pallaakku',
            imageUrl: 'one.jpeg',
            description: 'A grand ceremonial palanquin crafted in honour of Goddess Meenakshi Amman of Madurai, adorned with vibrant silk panels, intricate zari embroidery, and divine mirror work befitting a royal procession.',
            details: 'This Pallakku is handcrafted by master artisans in the Madurai tradition, featuring multi-layered crimson and gold silk canopy panels, hand-stitched lotus and fish (Meena) motifs in genuine gold zari, ornate corner tassels, and brass finials. Designed to carry the deity in regal splendour during Chithirai Thiruvizha and other grand temple festivals.',
            material: 'Pure Silk, Gold Zari Thread, Mirror Work, Brass Frame, Velvet Lining',
            availableSizes: ['Small (2x2ft)', 'Medium (3x3ft)', 'Large (4x4ft)'],
            whatsappMessage: 'Vanakkam! I am interested in the Madurai Meenakshi Amman Temple Pallakku. Could you please share more details and pricing?'
        },
        {
            id: 2,
            name: 'Kodai',
            category: 'Kodai',
            imageUrl: 'two.jpeg',
            description: 'A sacred Shaivite festival flag richly embroidered with the holy Nandi emblem and Shiva Linga motifs on ceremonial velvet. Flown with pride during Brahmotsavam and Karthigai Deepam celebrations.',
            details: 'Each Kovil Kodi is hand-embroidered on rich velvet with the divine Rishabha (Nandi), Shiva Linga, and Thiruneeru pattern using gold and silver zari thread. Finished with a gold-fringed border, reinforced double-stitched edges, and solid brass eyelets for outdoor festival durability.',
            material: 'Velvet, Gold & Silver Zari, Brass Eyelets, Cotton Lining',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Embroidered Shaivite Festival Flag (Kovil Kodi). Could you please share more details and pricing?'
        },
        {
            id: 3,
            name: 'Iyer Malai - Ther (2006)',
            category: 'Ther',
            imageUrl: 'three.jpeg',
            description: 'A heritage temple chariot decoration set from the Iyer Malai Ther tradition (2006), featuring richly embroidered silk panels with traditional deity emblems and gold zari border work.',
            details: 'This historic Ther Alankaram set was crafted in 2006 for the Iyer Malai temple chariot festival. It includes front panel, two side panels, and a canopy strip in matching navy silk with continuous gold zari border embroidery, Chakra-Shankha motifs, and Pearl detailing — preserved as a testament to classical artisan craftsmanship.',
            material: 'Navy Silk Brocade, Pure Gold & Silver Zari, Velvet Lining, Pearl Detailing',
            availableSizes: ['Small Chariot', 'Medium Chariot', 'Large Chariot'],
            whatsappMessage: 'Vanakkam! I am interested in the Iyer Malai Ther (2006) decoration. Could you please share more details and pricing?'
        },
        {
            id: 4,
            name: 'Madurai Meenakshi Amman Temple Pallakku',
            category: 'Pallaakku',
            imageUrl: 'four.jpeg',
            description: 'A second variant of the celebrated Meenakshi Amman Pallakku, crafted in royal mustard and crimson silk with elaborate hanging tassels and zari border work for the grandest of festival processions.',
            details: 'Stitched with layered silk panels, each hand-embroidered with traditional Madurai kolam and parrot (Kili) motifs — sacred emblems of Goddess Meenakshi. Features matching corner tassels, a central deity medallion in gold zari, and brass hook fittings for secure mounting.',
            material: 'Crimson & Mustard Silk, Gold Zari, Velvet Tassels, Brass Hooks',
            availableSizes: ['Small (2x2ft)', 'Medium (3x3ft)', 'Large (4x4ft)'],
            whatsappMessage: 'Vanakkam! I am interested in the Madurai Meenakshi Amman Temple Pallakku (variant). Could you please share more details and pricing?'
        },
        {
            id: 5,
            name: 'Amman Festival Flag (Mariamman Kodi)',
            category: 'Screen',
            imageUrl: 'five.jpeg',
            description: 'A vibrant ceremonial screen dedicated to Goddess Mariamman, featuring the divine Trishul and Vel emblem richly embroidered on deep red silk. Displayed during Amman temple festivals and Aadi Thiruvizha.',
            details: 'Richly embroidered with the Trishul, lotus, and Amman crown motifs using gold and silver zari on scarlet silk. This Screen is reinforced with double-stitched borders and rust-proof brass eyelets, making it suitable for both indoor sanctum and outdoor festival display.',
            material: 'Scarlet Silk, Gold Zari, Brass Eyelets, Cotton Lining',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Amman Festival Screen (Mariamman Kodi). Could you please share more details and pricing?'
        },
        {
            id: 6,
            name: 'Kodai',
            category: 'Kodai',
            imageUrl: 'six.jpeg',
            description: 'A divine Kavacham flag for Lord Murugan, embroidered with the sacred Vel, Peacock, and Rooster emblems in lustrous gold zari on rich velvet. A prized offering for Thaipusam and Skanda Sashti festivals.',
            details: 'Hand-stitched on premium velvet, this Kovil Kodi features the six-faced Shanmukha emblem, peacock feather border, and central Vel motif in raised gold zari embroidery. Finished with silver zari accents, double-layered for outdoor durability, and fitted with brass eyelets.',
            material: 'Velvet, Gold Zari Thread, Silver Zari Accents, Sequin Detailing, Brass Eyelets',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Lord Murugan Deity Kavacham (Kodai). Could you please share more details and pricing?'
        },
        {
            id: 7,
            name: 'Kodi',
            category: 'Temple Flags',
            imageUrl: 'seven.jpeg',
            description: 'A magnificent temple elephant caparison embroidered with traditional kolam patterns, deity emblems, and gold zari border work. The centrepiece of grand Brahmotsavam elephant processions.',
            details: 'Crafted in multiple panels of heavy-duty silk with reinforced zari embroidery, this Yanai Pagai is designed to drape the full body of a temple elephant. Features the presiding deity emblem at the centre, intricate kolam border patterns throughout, and brass bell detailing along the hem.',
            material: 'Heavy Silk, Gold & Silver Zari, Cotton Canvas Backing, Brass Bells',
            availableSizes: ['Standard', 'Large', 'Extra Large'],
            whatsappMessage: 'Vanakkam! I am interested in the Ceremonial Elephant Caparison (Yanai Pagai). Could you please share more details and pricing?'
        },
        {
            id: 8,
            name: 'Namam Sangu Chakram Screen',
            category: 'Screen',
            imageUrl: 'eight.jpeg',
            description: 'A sacred Vaishnavite screen bearing the divine Sudarshana Chakram, Panchajanya Shankha, and holy Namam — the three supreme emblems of Lord Vishnu — embroidered in gold and white zari on navy silk.',
            details: 'This screen features the spinning Sudarshana Chakram at its centre, flanked by the Shankha (Sangu) and Srivaishnava Namam in raised gold zari embroidery. The deep navy silk base is lined with cotton and fitted with brass eyelets. A devotional centrepiece for Vaishnavite sanctums and processions.',
            material: 'Navy Silk, Gold & White Zari, Raised Embroidery, Brass Eyelets, Cotton Lining',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Namam Sangu Chakram Screen. Could you please share more details and pricing?'
        },
        {
            id: 9,
            name: 'Kodi',
            category: 'Temple Flags',
            imageUrl: 'nine.jpeg',
            description: 'A complete adornment set for Goddess Mahalakshmi, featuring lotus and elephant motifs in gold zari on rich emerald green silk. Brings divine prosperity and beauty to the deity\'s sacred form.',
            details: 'This full Alankaram set includes a Kavacham, Thirumudi cover, and two arm covers. Lotus blooms, royal elephants, and coins — all sacred to Lakshmi — are embroidered throughout in pure gold zari. Finished with pearl borders, velvet lining, and hook fasteners.',
            material: 'Emerald Green Silk, Pure Gold Zari, Pearl Border, Velvet Lining',
            availableSizes: ['Small Deity (6–12 inch)', 'Medium Deity (12–24 inch)', 'Large Deity (24–36 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Goddess Lakshmi Deity Alankaram Set. Could you please share more details and pricing?'
        },
        {
            id: 10,
            name: 'Kodi',
            category: 'Temple Flags',
            imageUrl: 'ten.jpeg',
            description: 'A pair of ornate ceremonial fan bearers used during deity processions, crafted with peacock feather motifs and gold zari handles. An essential symbol of divine royalty in Tamil temple tradition.',
            details: 'Each Alavattam features a circular embroidered silk panel with peacock feather design, mounted on a lacquered wooden handle wrapped in gold zari thread with crimson silk end caps. Sold as a matching symmetrical pair for procession use on either side of the deity.',
            material: 'Silk Panel, Peacock Feather Motif, Gold Zari, Lacquered Wood Handle, Crimson Silk',
            availableSizes: ['Small (18 inch)', 'Medium (24 inch)', 'Large (30 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Decorative Fan Bearer Pair (Alavattam). Could you please share more details and pricing?'
        },
        {
            id: 11,
            name: 'Kodai',
            category: 'Kodai',
            imageUrl: 'eleven.jpeg',
            description: 'A bold Kovil Kodi bearing the divine Vel of Lord Murugan, embroidered on rich velvet with silver and gold zari. Flown with devotion during Thaipusam, Skanda Sashti, and Panguni Uthiram celebrations.',
            details: 'The central Vel motif is raised-embroidered using gold wire zari on premium velvet, surrounded by peacock and lotus border patterns in silver zari. Double-layered for outdoor festival durability, finished with gold fringe and solid brass eyelets.',
            material: 'Velvet, Gold Wire Zari, Silver Zari, Gold Fringe, Brass Eyelets',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Murugan Vel Sakthi Temple Flag (Kodai). Could you please share more details and pricing?'
        },
        {
            id: 12,
            name: 'Suruti',
            category: 'Suruti',
            imageUrl: 'twelve.jpeg',
            description: 'A stunning Suruti adornment for Lord Nataraja, featuring the cosmic Ananda Tandavam dance pose embroidered in raised silver and gold zari on deep crimson silk. A masterpiece of sacred Tamil artistry.',
            details: 'The dancing Nataraja silhouette is embroidered in raised gold zari at the centre, surrounded by ring of flames (Prabhamandala), damaru, and thillai forest motifs in silver thread. The crimson silk base is lined with soft velvet for deity protection and fitted with secure hook fasteners.',
            material: 'Crimson Silk, Raised Gold Zari, Silver Thread, Velvet Lining, Hook Fasteners',
            availableSizes: ['Small Deity (6–12 inch)', 'Medium Deity (12–24 inch)', 'Large Deity (24–36 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Lord Shiva Nataraja Deity Kavacham (Suruti). Could you please share more details and pricing?'
        },
        {
            id: 14,
            name: 'Suruti',
            category: 'Suruti',
            imageUrl: 'fourteen.jpeg',
            description: 'A graceful Suruti flag for Goddess Saraswathi, featuring the divine Veena and Swan emblem embroidered in white and gold zari on ivory ceremonial silk. Perfect for Vidhyarambham, Navratri, and Saraswathi Puja.',
            details: 'This Saraswathi Suruti features a central Veena motif flanked by swans and lotus flowers, all embroidered in silver and gold zari on ivory silk. The border carries a traditional kolam pattern throughout, and the flag is fitted with brass eyelets and gold fringe for a complete ceremonial finish.',
            material: 'Ivory Silk, Gold & Silver Zari, Swan Motif Embroidery, Gold Fringe, Brass Eyelets',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Saraswathi Vidhyarambham Festival Suruti. Could you please share more details and pricing?'
        },
        {
            id: 15,
            name: 'Vinayagar Screen',
            category: 'Screen',
            imageUrl: 'fifteen.jpeg',
            description: 'A sacred ceremonial screen dedicated to Lord Vinayagar (Ganesha), featuring the divine elephant-faced deity with Modaka and Ankusha emblems embroidered in gold zari on auspicious red silk.',
            details: 'This Vinayagar Screen is embroidered with the seated Ganapathi form holding the Modaka sweet, Ankusha, and Pasha, surrounded by a border of mouse (Mooshika) and lotus motifs. Crafted on rich red silk with gold zari and fitted with brass eyelets — ideal for Vinayagar Chaturthi and temple entrances.',
            material: 'Red Silk, Gold Zari Embroidery, Mooshika Border Motif, Brass Eyelets, Cotton Lining',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Vinayagar Screen. Could you please share more details and pricing?'
        },
        {
            id: 16,
            name: 'Visiri',
            category: 'Visiri',
            imageUrl: 'sixteen.jpeg',
            description: 'A pair of ceremonial Visiri (fly whisks) used during deity processions, crafted with white yak hair tufts mounted on ornate gold zari handles. A timeless symbol of divine service and royal honour.',
            details: 'Each Chamaram features a pure white tuft mounted on a turned wooden handle wrapped entirely in gold zari thread with crimson silk end caps. Sold as a symmetrical pair for procession use on either side of the deity palanquin or chariot. A must-have for complete Thiruvizha regalia.',
            material: 'White Yak Hair, Gold Zari Handle, Turned Wood, Crimson Silk End Cap',
            availableSizes: ['Small (24 inch)', 'Medium (30 inch)', 'Large (36 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Processional Fly Whisk Pair - Visiri (Chamaram). Could you please share more details and pricing?'
        },
        {
            id: 17,
            name: 'Thiruvannamalai - Arunachaleswarar Screen',
            category: 'Screen',
            imageUrl: 'seventeen.jpeg',
            description: 'A magnificent devotional screen crafted in honour of Lord Arunachaleswarar of Thiruvannamalai, featuring the sacred Shiva Linga, Nandi, and flame (Jyoti) motifs embroidered in gold zari on saffron silk.',
            details: 'This Arunachaleswarar Screen is embroidered with the sacred Annamalai hill silhouette, Shiva Linga with Nandi, and the Karthigai Deepam flame motif — all in raised gold and silver zari on heavy saffron silk. Double-layered for outdoor durability, with brass eyelets and traditional kolam border.',
            material: 'Saffron Silk Double Layer, Gold & Silver Zari, Raised Embroidery, Brass Eyelets, Cotton Lining',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Thiruvannamalai Arunachaleswarar Screen. Could you please share more details and pricing?'
        },
        {
            id: 18,
            name: 'Visiri',
            category: 'Visiri',
            imageUrl: 'eighteen.jpeg',
            description: 'A magnificent temple sanctum curtain (Thirai) in deep crimson silk with full gold zari border embroidery and a central deity emblem. Drawn reverently during sacred Deeparadhana and special puja rites.',
            details: 'This grand Thirai features a full gold zari embroidered border, a central presiding deity medallion, and traditional kolam corner motifs. The heavy crimson silk is lined with cotton for structure and fitted with brass rings for smooth, silent operation on temple curtain rods.',
            material: 'Heavy Crimson Silk, Full Gold Zari Border, Cotton Lining, Brass Curtain Rings',
            availableSizes: ['Small (3ft x 4ft)', 'Medium (4ft x 5ft)', 'Large (5ft x 6ft)', 'Grand (6ft x 8ft)'],
            whatsappMessage: 'Vanakkam! I am interested in the Full Sanctum Sanctorum Curtain (Thirai) - Visiri. Could you please share more details and pricing?'
        },
        {
            id: 19,
            name: 'Sivan Parvathi Screen',
            category: 'Screen',
            imageUrl: 'nineteen.jpeg',
            description: 'A devotional screen depicting the divine union of Lord Shiva and Goddess Parvathi, embroidered in gold and silver zari on crimson silk. An auspicious adornment for Shivaratri and Karthigai festivals.',
            details: 'This Sivan Parvathi Screen features the divine couple seated on Mount Kailash, with Nandi at the base and a crescent moon above — all embroidered in raised gold and silver zari on rich crimson silk. Includes lotus border detailing, cotton lining, and brass eyelets for temple or mandapam display.',
            material: 'Crimson Silk, Raised Gold & Silver Zari, Lotus Border, Cotton Lining, Brass Eyelets',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Sivan Parvathi Screen. Could you please share more details and pricing?'
        },
        {
            id: 20,
            name: 'Meenakshi Amman Screen',
            category: 'Screen',
            imageUrl: 'twenty.jpeg',
            description: 'A resplendent ceremonial screen bearing Goddess Meenakshi Amman in her full divine glory — the fish-eyed goddess adorned with parrot, lotus, and sugarcane motifs embroidered in gold zari on royal green silk.',
            details: 'This Meenakshi Amman Screen features the goddess in her standing form with parrot (Kili), lotus, and Vel emblems embroidered in pure gold zari on emerald green silk — the sacred colour of Meenakshi. Finished with a traditional Madurai kolam border, gold fringe hem, and brass eyelets for sanctum or procession display.',
            material: 'Emerald Green Silk, Pure Gold Zari, Parrot & Lotus Motifs, Gold Fringe, Brass Eyelets',
            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 21,
            name: 'Natarajar Screen',
            category: 'Screen',
            imageUrl: '29.jpeg',
            description: 'A sacred screen featuring Lord Natarajar performing the cosmic Ananda Tandavam, beautifully embroidered with gold and silver zari on deep maroon silk. Ideal for temple sanctums, dance halls, and festival decorations.',

            details: 'The screen showcases Lord Natarajar within the Prabha Mandala (ring of flames), accompanied by Damaru, Agni, and sacred Thillai motifs. Crafted with raised zari embroidery and reinforced borders for long-lasting ceremonial use.',

            material: 'Maroon Silk, Gold & Silver Zari, Raised Embroidery, Cotton Lining, Brass Eyelets',

            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 22,
            name: 'Karupana Swamy Screen',
            category: 'Screen',
            imageUrl: '26.jpeg',
            description: 'A powerful devotional screen dedicated to Karupana Swamy, featuring sword, horse, and guardian motifs embroidered in rich gold zari on black ceremonial fabric.',

            details: 'Designed for village temples and guardian deity festivals, this screen displays Karupana Swamy symbolism with detailed embroidery, reinforced borders, and brass eyelets for indoor and outdoor display.',

            material: 'Black Silk Fabric, Gold Zari, Cotton Backing, Brass Eyelets',

            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 23,
            name: 'Amman Screen',
            category: 'Screen',
            imageUrl: '23.jpeg',
            description: 'A vibrant Amman devotional screen adorned with lotus, trident, and crown motifs embroidered on bright red silk for temple festivals and sacred events.',

            details: 'Handcrafted using traditional embroidery techniques, this screen highlights the divine presence of Amman with intricate zari work, decorative borders, and durable mounting eyelets.',

            material: 'Red Silk, Gold Zari, Cotton Lining, Brass Eyelets',

            availableSizes: ['2ft x 3ft', '3ft x 4.5ft', '4ft x 6ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 24,
            name: 'Ther',
            category: 'Ther',
            imageUrl: '27.jpeg',
            description: 'Traditional temple chariot decoration cloth crafted for Ther festivals, featuring elaborate zari borders, deity motifs, and ceremonial embroidery.',

            details: 'Designed specifically for temple chariots, these decorative panels are mounted around the Ther structure and feature traditional patterns, reinforced stitching, and weather-resistant construction.',

            material: 'Heavy Silk Fabric, Gold & Silver Zari, Cotton Backing, Decorative Tassels',

            availableSizes: ['Small Chariot', 'Medium Chariot', 'Large Chariot'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 25,
            name: 'Ther',
            category: 'Ther',
            imageUrl: '31.jpeg',
            description: 'Traditional temple chariot decoration cloth crafted for Ther festivals, featuring elaborate zari borders, deity motifs, and ceremonial embroidery.',

            details: 'Designed specifically for temple chariots, these decorative panels are mounted around the Ther structure and feature traditional patterns, reinforced stitching, and weather-resistant construction.',

            material: 'Heavy Silk Fabric, Gold & Silver Zari, Cotton Backing, Decorative Tassels',

            availableSizes: ['Small Chariot', 'Medium Chariot', 'Large Chariot'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 26,
            name: 'Ther',
            category: 'Ther',
            imageUrl: '32.jpeg',
            description: 'Traditional temple chariot decoration cloth crafted for Ther festivals, featuring elaborate zari borders, deity motifs, and ceremonial embroidery.',

            details: 'Designed specifically for temple chariots, these decorative panels are mounted around the Ther structure and feature traditional patterns, reinforced stitching, and weather-resistant construction.',

            material: 'Heavy Silk Fabric, Gold & Silver Zari, Cotton Backing, Decorative Tassels',

            availableSizes: ['Small Chariot', 'Medium Chariot', 'Large Chariot'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 27,
            name: 'Suruti',
            category: 'Suruti',
            imageUrl: '30.jpeg',
            description: 'A ceremonial Suruti cloth featuring traditional temple embroidery and sacred motifs used during deity processions and festive rituals.',

            details: 'Crafted with detailed zari work and temple-inspired patterns, this Suruti serves as a decorative adornment for deities, sanctums, and festival ceremonies.',

            material: 'Silk Fabric, Gold Zari, Velvet Lining, Brass Accessories',

            availableSizes: ['Small', 'Medium', 'Large'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 28,
            name: 'Ther',
            category: 'Ther',
            imageUrl: '33.jpeg',
            description: 'Traditional temple chariot decoration cloth crafted for Ther festivals, featuring elaborate zari borders, deity motifs, and ceremonial embroidery.',

            details: 'Designed specifically for temple chariots, these decorative panels are mounted around the Ther structure and feature traditional patterns, reinforced stitching, and weather-resistant construction.',

            material: 'Heavy Silk Fabric, Gold & Silver Zari, Cotton Backing, Decorative Tassels',

            availableSizes: ['Small Chariot', 'Medium Chariot', 'Large Chariot'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 29,
            name: 'Visiri',
            category: 'Visiri',
            imageUrl: '25.jpeg',
            description: 'Traditional ceremonial Visiri used during temple processions and deity services, handcrafted with decorative zari work and premium finishing.',

            details: 'These Visiri pieces are designed for ritual use beside deities during festivals and daily temple worship. Built with strong handles and decorative embroidery for an elegant appearance.',

            material: 'Silk Fabric, Gold Zari, Wooden Handle, Decorative Tassels',

            availableSizes: ['Small (24 inch)', 'Medium (30 inch)', 'Large (36 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 30,
            name: 'Visiri',
            category: 'Visiri',
            imageUrl: '25.jpeg',
            description: 'Traditional ceremonial Visiri used during temple processions and deity services, handcrafted with decorative zari work and premium finishing.',

            details: 'These Visiri pieces are designed for ritual use beside deities during festivals and daily temple worship. Built with strong handles and decorative embroidery for an elegant appearance.',

            material: 'Silk Fabric, Gold Zari, Wooden Handle, Decorative Tassels',

            availableSizes: ['Small (24 inch)', 'Medium (30 inch)', 'Large (36 inch)'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 31,
            name: 'Thindu',
            category: 'Thombai & Thindu',
            imageUrl: '36.jpeg',
            description: 'Decorative temple Thindu crafted for ceremonial seating, deity arrangements, and festival decorations with traditional embroidery work.',

            details: 'The Thindu features soft cushioning, durable stitching, and ornamental zari embroidery suitable for temples, mandapams, and religious events.',

            material: 'Velvet Fabric, Cotton Filling, Gold Zari Embroidery',

            availableSizes: ['Small', 'Medium', 'Large'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 32,
            name: 'Thindu',
            category: 'Thombai & Thindu',
            imageUrl: '37.jpeg',
            description: 'Decorative temple Thindu crafted for ceremonial seating, deity arrangements, and festival decorations with traditional embroidery work.',

            details: 'The Thindu features soft cushioning, durable stitching, and ornamental zari embroidery suitable for temples, mandapams, and religious events.',

            material: 'Velvet Fabric, Cotton Filling, Gold Zari Embroidery',

            availableSizes: ['Small', 'Medium', 'Large'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 33,
            name: 'Thombai',
            category: 'Thombai & Thindu',
            imageUrl: '38.jpeg',
            description: 'Traditional Thombai decoration handcrafted for temple entrances, festival streets, and ceremonial processions, bringing vibrant festive appeal.',

            details: 'Made using layered fabric construction with decorative tassels and zari embellishments. Commonly used during temple festivals, kumbabishekam, and special religious celebrations.',

            material: 'Cotton Fabric, Silk Border, Gold Zari Work, Decorative Tassels',

            availableSizes: ['4ft', '6ft', '8ft', '10ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 34,
            name: 'Thombai',
            category: 'Thombai & Thindu',
            imageUrl: '39.jpeg',
            description: 'Traditional Thombai decoration handcrafted for temple entrances, festival streets, and ceremonial processions, bringing vibrant festive appeal.',

            details: 'Made using layered fabric construction with decorative tassels and zari embellishments. Commonly used during temple festivals, kumbabishekam, and special religious celebrations.',

            material: 'Cotton Fabric, Silk Border, Gold Zari Work, Decorative Tassels',

            availableSizes: ['4ft', '6ft', '8ft', '10ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
        {
            id: 35,
            name: 'Thombai',
            category: 'Thombai & Thindu',
            imageUrl: '40.jpeg',
            description: 'Traditional Thombai decoration handcrafted for temple entrances, festival streets, and ceremonial processions, bringing vibrant festive appeal.',

            details: 'Made using layered fabric construction with decorative tassels and zari embellishments. Commonly used during temple festivals, kumbabishekam, and special religious celebrations.',

            material: 'Cotton Fabric, Silk Border, Gold Zari Work, Decorative Tassels',

            availableSizes: ['4ft', '6ft', '8ft', '10ft'],
            whatsappMessage: 'Vanakkam! I am interested in the Meenakshi Amman Screen. Could you please share more details and pricing?'
        },
    ];

    getAll(): Product[] {
        return this.products;
    }

    getCategories(): string[] {
        return ['All', ...new Set(this.products.map(p => p.category))];
    }
}