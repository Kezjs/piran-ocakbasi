/**
 * Piran Ocakbaşı - Main Application Script
 * Smooth scrolling, GSAP reveals, sliders, lightboxes, and UX micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 0. MULTI-LANGUAGE TRANSLATION SYSTEM (TR | EN | KU)
  // ==========================================================================
  const translations = {
    tr: {
      nav_home: "Ana Sayfa",
      nav_about: "Hakkımızda",
      nav_menu: "Menü",
      nav_why: "Neden Biz?",
      nav_gallery: "Galeri",
      nav_reviews: "Yorumlar",
      nav_contact: "İletişim",
      hero_subtitle: "Geleneksel Diyarbakır Ocakbaşı Deneyimi",
      hero_title: "PİRAN OCAKBAŞI",
      hero_desc: "Yılların verdiği tecrübe ile en taze malzemeleri, kor ateşin eşsiz lezzetiyle buluşturuyor; Diyarbakır'ın köklü yemek kültürünü tabaklarınıza taşıyoruz.",
      hero_btn_call: "<i class=\"fa-solid fa-phone\"></i> Bizi Arayın",
      hero_btn_menu: "Menüyü İncele",
      about_badge_year: "15+",
      about_badge_text: "Yıllık Tecrübe",
      about_subtitle: "Hikayemiz & Kültürümüz",
      about_title: "Geleneksel Lezzetin Kor Ateşteki Sırrı",
      about_desc1: "Piran Ocakbaşı olarak, Diyarbakır Kayapınar Diclekent'te misafirlerimize sadece bir akşam yemeği değil, duyuları harekete geçiren otantik bir lezzet şöleni sunuyoruz. Günlük olarak özel seçilen taze etlerimiz, ustalarımızın gizli marinasyon tarifleri ve meşe kömürünün köz ateşinde pişirilerek servis edilir.",
      about_desc2: "Sıcak, samimi aile ortamımız ve profesyonel hizmet anlayışımızla ocakbaşı kültürünü modern bir lüksle harmanlıyoruz.",
      about_feat1_title: "Hakiki Odun Ateşi",
      about_feat1_desc: "Meşe odunu kömürü ateşiyle pişen etler.",
      about_feat2_title: "Günlük Taze Et",
      about_feat2_desc: "Bölgemizin en kaliteli meralarından taze seçim.",
      menu_subtitle: "Şefin Seçtikleri",
      menu_title: "İmza Lezzetlerimiz",
      dish1_title: "Adana Kebabı",
      dish1_desc: "Zırhta çekilmiş kuzu eti, pul biber ve özel baharatlar. Közlenmiş biber, domates ve sumaklı soğan salatası eşliğinde lavasta sunum.",
      dish1_origin: "Acılı / Spicy",
      dish2_title: "Urfa Kebabı",
      dish2_desc: "Zırh kıymasının baharatsız ve sade lezzeti. Közlenmiş domates, biber ve taze yeşillikler ile servis edilen enfes klasik.",
      dish2_origin: "Sade / Mild",
      dish3_title: "Ciğer Kebabı",
      dish3_desc: "Diyarbakır usulü, küçük kesilmiş taze kuzu ciğeri ve kuyruk yağı. İnce lavaş, nane, sumaklı soğan ve limon ile.",
      dish3_origin: "Diyarbakır Özel",
      dish4_title: "Kuzu Şiş",
      dish4_desc: "Özel marine edilmiş yumuşacık kuzu eti küpleri, kömür ateşinde ağır ağır pişmiş köz sebzeler ve bulgur pilavı eşliğinde.",
      dish4_origin: "Lokum Kıvamı",
      dish5_title: "Karışık Izgara",
      dish5_desc: "Adana Kebap, Urfa Kebap, Kuzu Şiş, Tavuk Şiş ve Pirzola. Ortaya servis edilen lüks Piran ziyafet tabağı.",
      dish5_origin: "Ziyafet Platosu",
      dish_order: "Sipariş Et <span>→</span>",
      why_subtitle: "Farkımız Nedir?",
      why_title: "Neden Piran Ocakbaşı?",
      why1_title: "Gerçek Ocakbaşı Kültürü",
      why1_desc: "Diyarbakır'ın yüzyıllara dayanan otantik ocakbaşı kültürünü, bakır davlumbazlı geleneksel ızgaramızda aslına sadık kalarak yaşatıyoruz.",
      why2_title: "%100 Taze & Yerli Et",
      why2_desc: "Dondurulmuş ürün asla kullanmıyoruz. Etlerimiz her gün yerel üreticilerden taze olarak temin edilir ve ustalarımız tarafından işlenir.",
      why3_title: "Kusursuz Hizmet",
      why3_desc: "Misafirperverliği lüks standartlarla buluşturuyor, kapıdan girdiğiniz andan itibaren kendinizi özel hissetmenizi sağlıyoruz.",
      why4_title: "Aile Dostu Atmosfer",
      why4_desc: "Geniş ve konforlu oturma düzenimiz ile aileniz ve sevdiklerinizle birlikte keyifli sohbetler eşliğinde yemek yiyebileceğiniz huzurlu bir ortam.",
      why5_title: "Hızlı & Sıcak Servis",
      why5_desc: "Kebaplarımız tam zamanında, kor ateşin sıcaklığı üzerindeyken masanıza ulaşır. Lezzet soğumadan keyif başlar.",
      why6_title: "Asırlık Tarifler",
      why6_desc: "Baharat dengesinden marinasyon süresine kadar atalarımızdan miras kalan reçeteleri birebir uyguluyor, orijinal tadı koruyoruz.",
      gallery_subtitle: "Görsel Ziyafet",
      gallery_title: "Piran Dünyasından Kareler",
      gallery_item1: "Kor Ateş Keyfi",
      gallery_item2: "Ustalık Eseri",
      gallery_item3: "Zırh Kebabı",
      gallery_item4: "Meşhur Ciğerimiz",
      gallery_item5: "Izgara Şöleni",
      gallery_item6: "Közde Kuzu Şiş",
      reviews_subtitle: "Misafir Deneyimleri",
      reviews_title: "Piran Hakkında Ne Dediler?",
      review1_text: "\"Diyarbakır'da yediğim en iyi ciğer buradaydı. Etin yumuşaklığı ve sıcak servis edilmesi harikaydı. Ocakbaşının başındaki şeflerin samimiyeti de cabası. Kesinlikle tavsiye ederim.\"",
      review1_author: "Ahmet Yılmaz<span>Gurme & Seyyah</span>",
      review2_text: "\"Piran Ocakbaşı lüks konsepti ve geleneksel lezzeti muhteşem birleştiren bir yer. Karışık ızgara sipariş ettik, her parça et lokum gibi ağızda dağılıyordu. Servis çok hızlıydı.\"",
      review2_author: "Merve Demirtaş<span>İş İnsanı</span>",
      review3_text: "\"Diclekent'te temiz, şık ve nezih bir kebapçı arıyorsanız doğru adres. Adana Kebabının acısı tam kıvamında, mezeleri inanılmaz taze. Her hafta buradayız.\"",
      review3_author: "Serkan Kaya<span>Gıda Mühendisi</span>",
      contact_title: "Bize Ulaşın",
      contact_address_label: "Adresimiz",
      contact_phone_label: "Telefon Numaramız",
      contact_phone2_label: "Sabit Hattımız",
      contact_hours_label: "Çalışma Saatleri",
      contact_hours_val: "Her Gün: 11:00 – 23:00",
      contact_btn_call: "<i class=\"fa-solid fa-phone-volume\"></i> Şimdi Arayın",
      contact_btn_wp: "<i class=\"fa-brands fa-whatsapp\"></i> WhatsApp Destek",
      footer_desc: "Geleneksel lezzetlerin modern tasarımla buluştuğu nokta. Kayapınar Diclekent'te kor ateş kebabın gerçek adresi.",
      footer_links_title: "Hızlı Bağlantılar",
      footer_cats_title: "Kategoriler",
      footer_contact_title: "Bize Ulaşın",
      footer_copyright: "&copy; 2026 Piran Ocakbaşı. Tüm Hakları Saklıdır.",
      preloader_logo: "PİRAN OCAKBAŞI<span>SINCE YEARS</span>"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_menu: "Menu",
      nav_why: "Why Us?",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_contact: "Contact",
      hero_subtitle: "Traditional Diyarbakır Ocakbaşı Experience",
      hero_title: "PIRAN OCAKBASI",
      hero_desc: "Combining the freshest ingredients with the unique taste of ember fire through years of experience; we carry Diyarbakır's deep-rooted culinary culture to your plates.",
      hero_btn_call: "<i class=\"fa-solid fa-phone\"></i> Call Us",
      hero_btn_menu: "View Menu",
      about_badge_year: "15+",
      about_badge_text: "Years of Experience",
      about_subtitle: "Our Story & Culture",
      about_title: "The Secret of Traditional Taste in Ember Fire",
      about_desc1: "As Piran Ocakbasi, we offer our guests in Kayapinar Diclekent, Diyarbakir not just a dinner, but an authentic feast of taste that stimulates the senses. Our fresh meats, specially selected daily, are cooked over the embers of oak charcoal with the secret marination recipes of our chefs.",
      about_desc2: "We blend the traditional ocakbasi culture with modern luxury through our warm family environment and professional service approach.",
      about_feat1_title: "Genuine Wood Fire",
      about_feat1_desc: "Meats cooked with premium oak wood charcoal.",
      about_feat2_title: "Fresh Daily Meat",
      about_feat2_desc: "Fresh selection from the highest quality local pastures.",
      menu_subtitle: "Chef's Selection",
      menu_title: "Our Signature Dishes",
      dish1_title: "Adana Kebab",
      dish1_desc: "Hand-minced lamb, red pepper flakes and special spices. Roasted pepper, tomato and sumac onion salad wrapped in warm flatbread.",
      dish1_origin: "Spicy",
      dish2_title: "Urfa Kebab",
      dish2_desc: "Mild, non-spicy hand-minced meat kebab. Served with charred tomatoes, green peppers and fresh garden herbs.",
      dish2_origin: "Mild",
      dish3_title: "Liver Kebab",
      dish3_desc: "Diyarbakir style, tender cubes of fresh lamb liver and tail fat. Served with thin lavash, mint, sumac onions and lemon.",
      dish3_origin: "Diyarbakir Special",
      dish4_title: "Lamb Shish",
      dish4_desc: "Specially marinated tender lamb cubes, roasted vegetables slowly cooked over charcoal embers and bulgur pilaf.",
      dish4_origin: "Tender Cubes",
      dish5_title: "Mixed Grill Platter",
      dish5_desc: "Adana Kebab, Urfa Kebab, Lamb Shish, Chicken Shish and Lamb Chops. Luxurious Piran sharing platter served with hot flatbread.",
      dish5_origin: "Feast Platter",
      dish_order: "Order Now <span>→</span>",
      why_subtitle: "Why Choose Us?",
      why_title: "Why Piran Ocakbasi?",
      why1_title: "Authentic Grill Culture",
      why1_desc: "We keep Diyarbakir's centuries-old authentic ocakbasi culture alive in our copper-hood traditional fireplace, staying fully true to its heritage.",
      why2_title: "100% Fresh & Local Meat",
      why2_desc: "We never use frozen products. Our meat is sourced fresh daily from local farmers and prepared meticulously by our master butchers.",
      why3_title: "Impeccable Service",
      why3_desc: "We combine Turkish hospitality with fine dining luxury standards, ensuring you feel VIP from the second you enter.",
      why4_title: "Family Friendly Vibe",
      why4_desc: "A warm and peaceful atmosphere with spacious and cozy seating arrangements to enjoy pleasant conversations with your loved ones.",
      why5_title: "Fast & Piping Hot",
      why5_desc: "Our kebabs reach your table right on time, while the heat of the fire is still crackling on them. Flavor never cools down.",
      why6_title: "Century-Old Recipes",
      why6_desc: "We faithfully apply the recipes inherited from our ancestors, from precise spice ratios to marination duration, maintaining the original taste.",
      gallery_subtitle: "Visual Feast",
      gallery_title: "Captures From Piran",
      gallery_item1: "Charcoal Spark Joy",
      gallery_item2: "Mastery Craft",
      gallery_item3: "Minced Skewer",
      gallery_item4: "Famous Lamb Liver",
      gallery_item5: "Grill Feast",
      gallery_item6: "Lamb Shish Skewer",
      reviews_subtitle: "Guest Experiences",
      reviews_title: "What They Said About Piran?",
      review1_text: "\"The best liver kebab I've ever eaten in Diyarbakir. The meat was so tender and served steaming hot. The chefs at the grill were incredibly friendly. Absolutely recommended.\"",
      review1_author: "Ahmet Yilmaz<span>Food Critic & Traveler</span>",
      review2_text: "\"Piran Ocakbasi is a place that beautifully combines luxury dining with traditional taste. We ordered the mixed grill, every piece of meat melted in the mouth like butter. Super fast service.\"",
      review2_author: "Merve Demirtas<span>Entrepreneur</span>",
      review3_text: "\"If you are looking for a clean, elegant and decent kebab restaurant in Diclekent, this is the place. Adana Kebab spice level is perfect, mezes are incredibly fresh. We are here every week.\"",
      review3_author: "Serkan Kaya<span>Food Engineer</span>",
      contact_title: "Get in Touch",
      contact_address_label: "Our Address",
      contact_phone_label: "Our Phone",
      contact_phone2_label: "Landline",
      contact_hours_label: "Working Hours",
      contact_hours_val: "Every Day: 11:00 – 23:00",
      contact_btn_call: "<i class=\"fa-solid fa-phone-volume\"></i> Call Now",
      contact_btn_wp: "<i class=\"fa-brands fa-whatsapp\"></i> WhatsApp Support",
      footer_desc: "Where traditional taste meets modern design. The real address of charcoal grilled kebab in the heart of Kayapinar Diclekent, Diyarbakir.",
      footer_links_title: "Quick Links",
      footer_cats_title: "Categories",
      footer_contact_title: "Contact Info",
      footer_copyright: "&copy; 2026 Piran Ocakbasi. All Rights Reserved.",
      preloader_logo: "PIRAN OCAKBASI<span>SINCE YEARS</span>"
    },
    ku: {
      nav_home: "Serpel",
      nav_about: "Der barê me de",
      nav_menu: "Menu",
      nav_why: "Çima Em?",
      nav_gallery: "Galeri",
      nav_reviews: "Şirove",
      nav_contact: "Têkilî",
      hero_subtitle: "Tecrûbeya Kevneşopî ya Ocakbaşî ya Amedê",
      hero_title: "PİRAN OCAKBAŞI",
      hero_desc: "Bi tecrûbeya salan, em malzemeyên herî teze bi teama bêhempa ya agirê komirê re tînin cem hev; em çanda xwarinê ya kûr a Amedê tînin ser maseyên we.",
      hero_btn_call: "<i class=\"fa-solid fa-phone\"></i> Bi Me re Biaxive",
      hero_btn_menu: "Li Menuyê Meyze Bike",
      about_badge_year: "15+",
      about_badge_text: "Sal Tecrûbe",
      about_subtitle: "Dîrok & Çanda Me",
      about_title: "Sira Teama Kevneşopî di Agirê Emberê de",
      about_desc1: "Weke Piran Ocakbaşı, em li Kayapınar Diclekent, Amedê ne tenê şîveke, lê ziyafeteke otantîk a tamê ku hestan çalak dike pêşkêşî mêvanên xwe dikin. Goştê me yê teze yê ku her roj bi taybetî tê hilbijartin, bi rîsipiyên marînasyona nehênî ya ustayên me re li ser agirê komirê yê darê berûyê tê pijandin û servîskirin.",
      about_desc2: "Em çanda ocakbaşî bi lûkseke nûjen re bi hawîrdora malbata xwe ya germ, dilsoz û nêzîkatiya karûbarê profesyonel li hev dikin.",
      about_feat1_title: "Agirê Darê yê Rastîn",
      about_feat1_desc: "Goştên ku bi agirê komira darê berûyê têne pijandin.",
      about_feat2_title: "Goştê Teze yê Rojane",
      about_feat2_desc: "Hilbijartina teze ji çêrgehên herî bi kalîte yên herêma me.",
      menu_subtitle: "Hilbijartina Şef",
      menu_title: "Xwarinên Me yên Taybet",
      dish1_title: "Kebabê Adanayê",
      dish1_desc: "Goştê berxê yê ku bi zirxê hatiye kişandin, îsota tûj û biharatên taybet. Di nava lavaşê de bi îsota pijiqandî, firingî û salata pîvazê ya bi sumaqê re tê pêşkêşkirin.",
      dish1_origin: "Tûj",
      dish2_title: "Kebabê Urfayê",
      dish2_desc: "Teama sade û bêbiharat a goştê zirxê. Klasîkek hêja ku bi firingiyên pijandî, îsot û şînahiyên teze tê servîskirin.",
      dish2_origin: "Sade",
      dish3_title: "Kebabê Kezebê",
      dish3_desc: "Bi şêwazê Amedê, kezeba berxê ya teze ya hûrkirî û rûnê dûvikê. Bi lavaşa tenik, nane, pîvaza bi sumaq û lîmonê re.",
      dish3_origin: "Taybet a Amedê",
      dish4_title: "Şîşa Berxê",
      dish4_desc: "Goştê berxê yê nermik yê ku bi taybetî hatiye marînekirin, bi sebzeyên pijandî yên li ser agirê komirê û pîlava bulgurê re.",
      dish4_origin: "Mîna Loqim",
      dish5_title: "Izgaraya Tevlîhev",
      dish5_desc: "Kebabê Adanayê, Kebabê Urfayê, Şîşa Berxê, Şîşa Mirîşkê û Tîtik (Pirzola). Sifreya ziyafetê ya lûks a Piranê.",
      dish5_origin: "Sifreya Ziyafetê",
      dish_order: "Sipariş Bide <span>→</span>",
      why_subtitle: "Cudahîya Me Çi Ye?",
      why_title: "Çima Piran Ocakbaşı?",
      why1_title: "Çanda Ocakbaşî ya Rastîn",
      why1_desc: "Em çanda ocakbaşî ya otantîk a bi sedsalan a Amedê di ızgaraya xwe ya kevneşopî ya bi mantoya sifir de zindî dihêlin.",
      why2_title: "100% Goştê Teze & Herêmî",
      why2_desc: "Em qet hilberên cemedkirî bi kar nayînin. Goştê me her roj ji hilberînerên herêmî teze tê peydakirin û ji hêla ustayên me ve tê amadekirin.",
      why3_title: "Karûbarê Bêkêmasî",
      why3_desc: "Em mêvanperweriyê bi standardên lûks re tînin cem hev, ji gava ku hûn têkevin hundir em dihêlin hûn xwe taybet hiss bikin.",
      why4_title: "Hawîrdora Malbatî",
      why4_desc: "Bi rûniştina me ya fireh û rehet, hawîrdorek aram ku hûn dikarin xwarinê bixwin ligel sohbetên xweş bi malbat û hezkiriyên xwe re.",
      why5_title: "Servîsa Lez & Germ",
      why5_desc: "Kebabên me di wextê xwe de digihêjin ser masê, gava ku germahiya agirê emberê hîn li ser wan e. Kêf dest pê dike berî ku sar bibe.",
      why6_title: "Rîsipiyên Sedsalî",
      why6_desc: "Ji hevsengiya biharatê bigire heya dema marînasyonê, em reçeteyên ku ji bav û kalên me mane yek bi yek bi kar tînin û teama orîjînal diparêzin.",
      gallery_subtitle: "Ziyafeta Dîmenî",
      gallery_title: "Wêne ji Cîhana Piran",
      gallery_item1: "Kêfa Agirê Emberê",
      gallery_item2: "Berhemê Ustalîyê",
      gallery_item3: "Kebabê Zirxê",
      gallery_item4: "Kezeba Me ya Navdar",
      gallery_item5: "Ziyafeta Izgarayê",
      gallery_item6: "Şîşa Berxê ya li ser Komirê",
      reviews_subtitle: "Tecrûbeyên Mêvanan",
      reviews_title: "Li ser Piranê Çi Gotin?",
      review1_text: "\"Kezeba herî baş a ku min li Amedê xwariye li vir bû. Nermbûn û germiya goşt pir xweş bû. Dilsoziya şefên li ser ocakbaşê kavil bû. Ez teqez pêşniyar dikim.\"",
      review1_author: "Ahmet Yilmaz<span>Gurmê & Rêwî</span>",
      review2_text: "\"Piran Ocakbaşı cîhek e ku konsepta lûks û teama kevneşopî bi rengek hêja tîne cem hev. Me ızgaraya tevlîhev xwest, her perçe goşt di dev de diheliya. Servîs pir bilez bû.\"",
      review2_author: "Merve Demirtas<span>Karsaz</span>",
      review3_text: "\"Heke hûn li Diclekent li kebapxaneyek paqij, şık û nezih digerin, navnîşan ev e. Asta tûjbûna Kebabê Adanayê tam di cî de ye, mezeyên wan pir teze ne.\"",
      review3_author: "Serkan Kaya<span>Endazyarê Xwarinê</span>",
      contact_title: "Têkilî bi Me re",
      contact_address_label: "Navnîşana Me",
      contact_phone_label: "Hejmara Telefona Me",
      contact_phone2_label: "Hejmara Sabit",
      contact_hours_label: "Demên Kar",
      contact_hours_val: "Her Roj: 11:00 – 23:00",
      contact_btn_call: "<i class=\"fa-solid fa-phone-volume\"></i> Niha Telefon Bike",
      contact_btn_wp: "<i class=\"fa-brands fa-whatsapp\"></i> Piştgiriya WhatsAppê",
      footer_desc: "Cihê ku teama kevneşopî û sêwirana nûjen digihêjin hev. Navnîşana rastîn a kebabê li ser agirê komirê li dilê Kayapınar Diclekent, Amedê.",
      footer_links_title: "Girêdanên Zû",
      footer_cats_title: "Kategorî",
      footer_contact_title: "Agahdariya Têkiliyê",
      footer_copyright: "&copy; 2026 Piran Ocakbaşı. Hemû Maf Parastî ne.",
      preloader_logo: "PİRAN OCAKBAŞI<span>SINCE YEARS</span>"
    }
  };

  function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('piran_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
  }

  // Setup language button click listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      changeLanguage(selectedLang);
    });
  });

  // Load saved language or default to Turkish
  const savedLang = localStorage.getItem('piran_lang') || 'tr';
  changeLanguage(savedLang);

  // ==========================================================================
  // 1. PRELOADER & INITIAL ANIMS
  // ==========================================================================
  const preloader = document.getElementById('preloader');
  
  window.addEventListener('load', () => {
    // Wait for the CSS loading bar animation (2.2s) to finish
    setTimeout(() => {
      preloader.classList.add('fade-out');
      
      // Stop preloader canvas to conserve resources
      setTimeout(() => {
        if (window.preloaderParticles) {
          window.preloaderParticles.stop();
        }
        preloader.style.display = 'none';
        
        // Trigger initial Hero Section entry animations
        animateHero();
      }, 1000);
    }, 2200);
  });

  // Fallback in case load event takes too long
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        if (window.preloaderParticles) window.preloaderParticles.stop();
        preloader.style.display = 'none';
        animateHero();
      }, 1000);
    }
  }, 5000);


  // ==========================================================================
  // 2. CUSTOM DYNAMIC CURSOR
  // ==========================================================================
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('customCursorFollower');
  
  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Position dot instantly
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Animate follower circle with inertia
  function updateFollower() {
    const ease = 0.15; // Speed of following
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  // Hover states for cursor
  const interactiveElements = document.querySelectorAll('.interactive-element');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('hovering-interactive');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('hovering-interactive');
    });
  });


  // ==========================================================================
  // 3. LENIS SMOOTH SCROLL & SCROLL PROGRESS
  // ==========================================================================
  const lenis = new Lenis({
    duration: 1.3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom out-expo
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Link scroll progress bar
  const progressBar = document.getElementById('progressBar');
  lenis.on('scroll', (e) => {
    const scrollPercent = (e.scroll / (e.limit)) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });


  // ==========================================================================
  // 4. GSAP SCROLLTRIGGER REVEALS
  // ==========================================================================
  gsap.registerPlugin(ScrollTrigger);

  // Bind Lenis scroll to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Hero animations
  function animateHero() {
    const tl = gsap.timeline();
    tl.to('.hero-bg', { scale: 1.08, duration: 2.5, ease: 'power2.out' })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=2.0')
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1.6')
      .to('.hero-description', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=1.2')
      .to('.hero-btns', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8');
  }

  // Generic sections headers reveal
  document.querySelectorAll('.section-header').forEach(header => {
    gsap.fromTo(header, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // About Section animations
  gsap.fromTo('.scroll-reveal-left', 
    { opacity: 0, x: -60 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.4, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  gsap.fromTo('.scroll-reveal-right', 
    { opacity: 0, x: 60 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.4, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Dishes Cards reveal (Staggered fade-up)
  gsap.fromTo('.dish-card',
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.dishes-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Why Choose Us Cards reveal (Staggered fade-up)
  gsap.fromTo('.why-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Gallery items reveal (staggered scale-up)
  gsap.fromTo('.gallery-item',
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.08,
      ease: 'back.out(1.1)',
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );



  // Map reveal
  gsap.fromTo('.maps-container',
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );


  // ==========================================================================
  // 5. NAVBAR STICKY & SCROLL SPY
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Sticky header conversion
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy navigation highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Custom click scroll binding for smooth navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Close mobile drawer if active
        navbar.classList.remove('nav-active');
        lenis.scrollTo(targetSection, { offset: -80 });
      }
    });
  });

  // Bind CTA and floating buttons to smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.classList.contains('nav-cta') || anchor.classList.contains('floating-res-btn') || anchor.classList.contains('btn-primary') || anchor.classList.contains('btn-secondary')) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          lenis.scrollTo(targetSection, { offset: -60 });
        }
      });
    }
  });


  // ==========================================================================
  // 6. MOBILE NAVBAR TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  
  mobileToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-active');
    
    // Disable or enable scroll based on menu state (keeps good UX)
    if (navbar.classList.contains('nav-active')) {
      lenis.stop();
    } else {
      lenis.start();
    }
  });


  // ==========================================================================
  // 7. REVIEWS SLIDER (TESTIMONIAL CAROUSEL)
  // ==========================================================================
  const track = document.getElementById('reviewsTrack');
  const slides = Array.from(track.children);
  const dotsContainer = document.getElementById('reviewsDots');
  const dots = Array.from(dotsContainer.children);
  
  let currentIndex = 0;
  let slideInterval;

  function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Dots click handler
  dotsContainer.addEventListener('click', (e) => {
    const targetDot = e.target.closest('.review-dot');
    if (!targetDot) return;
    
    const index = parseInt(targetDot.getAttribute('data-index'));
    moveToSlide(index);
    resetSliderInterval();
  });

  // Auto sliding loop
  function startSliderInterval() {
    slideInterval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      moveToSlide(nextIndex);
    }, 5000);
  }

  function resetSliderInterval() {
    clearInterval(slideInterval);
    startSliderInterval();
  }

  startSliderInterval();


  // ==========================================================================
  // 8. GALLERY LIGHTBOX MODAL
  // ==========================================================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxContentImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      lightboxImg.src = src;
      lightbox.classList.add('active');
      lenis.stop(); // Lock page scroll while viewing
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightboxImg.src = '';
    }, 400);
    lenis.start();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });





  // ==========================================================================
  // 10. FLOATING UTILITIES (BACK TO TOP)
  // ==========================================================================
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    // Show back to top button after 400px of scrolling
    if (window.scrollY > 400) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Back to top click event
  backToTop.addEventListener('click', () => {
    lenis.scrollTo('#home');
  });
});
