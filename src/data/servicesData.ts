export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  benefits: string[];
  image: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'The premier long-lasting solution for missing teeth. We design implants that blend seamlessly with your natural smile.',
    fullDesc: [
      'Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants provide a permanent, structural replacement that integrates directly with your jawbone.',
      'At Al-Ahad Dental Care, we utilize advanced 3D Cone Beam technology to precisely map your jaw, ensuring exact placement and optimal aesthetic results. Our implants are crafted from biocompatible titanium, topped with highly realistic porcelain crowns.',
      'Whether you are missing a single tooth or require a full-mouth restoration, our implant specialists are here to restore not just your smile, but your ability to chew, speak, and live with complete confidence.'
    ],
    benefits: [
      'Permanent and secure replacement for missing teeth',
      'Prevents bone loss and preserves facial structure',
      'Functions and looks exactly like natural teeth',
      'No need to alter adjacent healthy teeth'
    ],
    image: '/assets/gallery-1.jpg',
    faqs: [
      { question: 'Are dental implants painful?', answer: 'The procedure is performed under local anesthesia, ensuring you feel no pain during placement. Post-operative discomfort is typically minimal and easily managed with over-the-counter pain relievers.' },
      { question: 'How long do dental implants last?', answer: 'With proper oral hygiene and regular dental checkups, dental implants are designed to last a lifetime.' }
    ]
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortDesc: 'Painless, highly precise endodontic therapy to save severely damaged or infected teeth from extraction.',
    fullDesc: [
      'A root canal is a crucial procedure designed to save a tooth that has become severely infected or decayed. Decades ago, such teeth would have to be extracted. Today, thanks to modern endodontics, we can save your natural tooth.',
      'During the procedure, our endodontic specialists carefully remove the infected pulp from inside the tooth, clean and disinfect the root canals, and seal them to prevent future infection.',
      'At our Lahore clinic, we utilize rotary endodontics and local anesthesia to ensure the procedure is as comfortable and painless as a standard filling. After the root canal, a custom crown is usually placed to restore the tooth\'s full strength.'
    ],
    benefits: [
      'Saves your natural tooth from extraction',
      'Relieves severe tooth pain and sensitivity',
      'Prevents the spread of infection to other teeth or jawbone',
      'Restores normal biting and chewing functions'
    ],
    image: '/assets/gallery-2.jpg',
    faqs: [
      { question: 'Is a root canal painful?', answer: 'Modern root canals are virtually painless. We use advanced local anesthesia and precise techniques to ensure your complete comfort.' },
      { question: 'How many visits does a root canal take?', answer: 'Most root canals at our clinic are completed in just one or two visits, depending on the complexity of the infection.' }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional, medical-grade whitening treatments that dramatically brighten your smile in a single session.',
    fullDesc: [
      'Your smile is often the first thing people notice about you. Over time, coffee, tea, smoking, and certain foods can leave your teeth looking dull, yellowed, or stained.',
      'Al-Ahad Dental Care offers premium, professional teeth whitening treatments that are far superior to over-the-counter products. Our in-office laser whitening system can brighten your teeth by up to 8 shades in less than an hour.',
      'We also provide custom take-home whitening kits for patients who prefer to whiten their teeth gradually from the comfort of their own home. Both options are entirely safe for your enamel and gums.'
    ],
    benefits: [
      'Immediate, dramatic improvement in tooth color',
      'Safe procedure that protects enamel and minimizes sensitivity',
      'Boosts self-confidence and enhances appearance',
      'Long-lasting results with proper maintenance'
    ],
    image: '/assets/gallery-3.jpg',
    faqs: [
      { question: 'Does teeth whitening cause sensitivity?', answer: 'Some patients may experience mild, temporary sensitivity. We use specialized desensitizing agents to minimize this effect.' },
      { question: 'How long do the whitening results last?', answer: 'Results can last anywhere from six months to two years, depending on your dietary habits (like coffee or tea consumption) and oral hygiene.' }
    ]
  },
  {
    id: 'dental-veneers',
    title: 'Porcelain Veneers',
    shortDesc: 'Ultra-thin, custom-made shells crafted to cover the front surface of teeth, instantly transforming your smile.',
    fullDesc: [
      'Porcelain veneers are the secret behind the flawless "Hollywood smile." These ultra-thin, custom-crafted shells of tooth-colored material are permanently bonded to the front of your teeth.',
      'Veneers are the ultimate cosmetic solution for teeth that are chipped, heavily discolored, slightly misaligned, or irregularly shaped. At Al-Ahad Dental Care, our cosmetic specialists use digital smile design to craft veneers that complement your facial features perfectly.',
      'The porcelain we use is highly resistant to stains and perfectly mimics the light-reflecting properties of natural enamel, resulting in a stunning, entirely natural-looking smile.'
    ],
    benefits: [
      'Corrects multiple cosmetic flaws simultaneously',
      'Highly stain-resistant compared to natural enamel',
      'Custom-designed for a perfect match to your face',
      'Durable and long-lasting cosmetic solution'
    ],
    image: '/assets/gallery-4.jpg',
    faqs: [
      { question: 'Do veneers ruin your natural teeth?', answer: 'No. A very thin layer of enamel (about 0.5mm) is gently removed to accommodate the veneer, leaving the core structure of your tooth strong and healthy.' },
      { question: 'How long do veneers last?', answer: 'With good oral hygiene and regular dental visits, high-quality porcelain veneers can last 10 to 15 years, or even longer.' }
    ]
  },
  {
    id: 'braces-and-aligners',
    title: 'Braces & Clear Aligners',
    shortDesc: 'Straighten your teeth discreetly with custom clear aligners or traditional braces for a perfect, aligned smile.',
    fullDesc: [
      'A straight smile is not just about aesthetics; correctly aligned teeth are easier to clean and significantly reduce the risk of jaw pain, decay, and gum disease.',
      'We offer a comprehensive range of orthodontic solutions. For adults and teens looking for a discreet option, our Clear Aligners (like Invisalign) provide a nearly invisible way to straighten teeth without the restrictions of metal wires and brackets.',
      'For complex cases, we offer modern, low-profile traditional ceramic and metal braces. Our orthodontic team will assess your specific alignment needs and recommend the most effective path to a perfect smile.'
    ],
    benefits: [
      'Improves both the appearance and function of your teeth',
      'Clear aligners offer a nearly invisible, removable treatment option',
      'Corrects bite issues, reducing jaw strain and wear',
      'Easier maintenance of oral hygiene post-treatment'
    ],
    image: '/assets/family-care.jpg',
    faqs: [
      { question: 'How long does clear aligner treatment take?', answer: 'Treatment times vary, but most clear aligner treatments are completed within 6 to 18 months.' },
      { question: 'Are clear aligners uncomfortable?', answer: 'You may feel slight pressure for a day or two when switching to a new tray, but aligners are generally much more comfortable than traditional metal braces.' }
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'Gentle, compassionate dental care tailored specifically for children to build healthy habits from an early age.',
    fullDesc: [
      'Early dental experiences shape a child’s attitude toward oral health for the rest of their life. Our pediatric dentistry team is dedicated to making every visit fun, educational, and completely fear-free.',
      'We specialize in treating infants, children, and teenagers. Our services include routine checkups, fluoride treatments, dental sealants, and gentle cavity repairs. We focus heavily on preventative care and educating both the child and parents on proper home hygiene.',
      'Our clinic environment is designed to be welcoming and soothing, ensuring that your little ones always look forward to their dental visits.'
    ],
    benefits: [
      'Establishes a foundation of excellent oral health for life',
      'Prevents early childhood decay with fluoride and sealants',
      'Fear-free environment reduces dental anxiety in children',
      'Monitors proper growth and alignment of emerging teeth'
    ],
    image: '/assets/gallery-1.jpg',
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'The American Dental Association recommends that a child visit the dentist by their first birthday or when their first tooth appears.' },
      { question: 'Are dental sealants safe?', answer: 'Yes, absolutely. Dental sealants are a safe, painless, and highly effective way to protect the chewing surfaces of children’s back teeth from cavities.' }
    ]
  },
  {
    id: 'gum-treatment',
    title: 'Periodontal (Gum) Treatment',
    shortDesc: 'Advanced treatments to combat gum disease, ensuring the foundational health of your smile.',
    fullDesc: [
      'Healthy gums are the foundation of a healthy smile. Periodontal (gum) disease is a leading cause of tooth loss in adults, but with early detection and treatment, it is highly manageable.',
      'At Al-Ahad Dental Care, we provide comprehensive periodontal therapies ranging from deep cleaning (scaling and root planing) for early-stage gingivitis, to advanced laser treatments for severe periodontitis.',
      'Our goal is to eliminate bacterial infection, reduce pocket depth around the teeth, and help regenerate healthy gum tissue, ensuring your teeth remain securely anchored for years to come.'
    ],
    benefits: [
      'Halts the progression of gum disease and prevents tooth loss',
      'Eliminates bad breath associated with bacterial buildup',
      'Reduces systemic health risks linked to periodontal disease',
      'Restores the natural, healthy pink appearance of your gums'
    ],
    image: '/assets/gallery-2.jpg',
    faqs: [
      { question: 'What are the signs of gum disease?', answer: 'Common signs include red, swollen, or bleeding gums, persistent bad breath, receding gums, and loose teeth.' },
      { question: 'Can receding gums grow back?', answer: 'While gums cannot naturally grow back, we offer treatments and minor surgical procedures, such as gum grafting, to restore the gum line.' }
    ]
  }
];
