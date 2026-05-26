import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  Bell,
  Boxes,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  FileText,
  Globe2,
  Headphones,
  Heart,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  UserRound,
  WalletCards,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './styles.css';

const A = `${import.meta.env.BASE_URL}assets/`;

type IconType = LucideIcon;

const heroStats: Array<{ icon: IconType; lead: string; value: string; label: string }> = [
  { icon: Boxes, lead: 'Более', value: '15 000', label: 'товаров в наличии' },
  { icon: UserRound, lead: 'Более', value: '500', label: 'оптовых клиентов' },
  { icon: ShieldCheck, lead: '', value: '99%', label: 'заказов отгружаем в срок' },
  { icon: Truck, lead: '', value: 'От 1 дня', label: 'доставка по РФ и СНГ' },
];

const categories = [
  { title: 'Электроника и гаджеты', count: '1520 товаров', image: 'category-electronics.webp', featured: true },
  { title: 'Товары для дома и уюта', count: '2300 товаров', image: 'category-home.webp' },
  { title: 'Автотовары и запчасти', count: '980 товаров', image: 'category-auto.webp' },
  { title: 'Строительство и ремонт', count: '1850 товаров', image: 'category-build.webp' },
  { title: 'Одежда и обувь оптом', count: '3100 товаров', image: 'category-clothes.webp' },
  { title: 'Хозтовары и упаковка', count: '1250 товаров', image: 'category-packaging.webp' },
  { title: 'Продукты питания и напитки', count: '870 товаров', image: 'category-food.webp' },
];

const catalogItems = [
  ...categories,
  { title: 'Канцтовары и офис', count: '740 товаров', image: 'product-lamp.webp' },
  { title: 'Товары для кухни', count: '1180 товаров', image: 'product-kettle.webp' },
  { title: 'Красота и уход', count: '960 товаров', image: 'product-thermos.webp' },
  { title: 'Детские товары', count: '690 товаров', image: 'category-home.webp' },
  { title: 'Спорт и туризм', count: '820 товаров', image: 'product-backpack.webp' },
  { title: 'Сад и дача', count: '1020 товаров', image: 'category-build.webp' },
  { title: 'Зоотовары', count: '530 товаров', image: 'category-packaging.webp' },
  { title: 'Бытовая химия', count: '870 товаров', image: 'category-food.webp' },
];

const smallAdvantages: Array<{ icon: IconType; title: string; text: string }> = [
  { icon: BadgePercent, title: 'Выгодные цены', text: 'Гибкая система скидок для опта' },
  { icon: Truck, title: 'Быстрая доставка', text: 'Отгрузка от 1 дня по всей РФ и СНГ' },
  { icon: ShieldCheck, title: 'Надёжность', text: 'Работаем официально по договору' },
  { icon: UserRound, title: 'Персональный менеджер', text: '24/7 на связи и помощь в подборе' },
  { icon: PackageCheck, title: 'Поддержка 24/7', text: 'Решаем вопросы быстро и удобно' },
];

const benefits: Array<{ icon: IconType; title: string; text: string }> = [
  {
    icon: Banknote,
    title: 'Выгодные цены',
    text: 'Прямые поставки от производителей и оптовые цены без посредников. Чем больше заказ - тем ниже цена.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Гибкие условия',
    text: 'Индивидуальный подход к каждому клиенту, отсрочка платежа, скидки и персональные предложения.',
  },
  {
    icon: Boxes,
    title: 'Широкий ассортимент',
    text: 'Тысячи товаров в наличии: электроника, стройматериалы, товары для дома, одежда и многое другое.',
  },
  {
    icon: ShieldCheck,
    title: 'Надёжность',
    text: 'Работаем официально, строго соблюдаем договорённости и гарантируем качество каждой поставки.',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    text: 'Наши менеджеры всегда на связи и готовы помочь с выбором, заказом и любыми вопросами.',
  },
  {
    icon: Truck,
    title: 'Быстрая доставка',
    text: 'Оперативная отгрузка со склада в день заказа. Доставляем по всей России и в страны СНГ.',
  },
];

const products = [
  { tag: 'Хит', article: '10234', title: 'Внешний аккумулятор Xiaomi Mi Power Bank 20000 мАч', min: 'от 10 шт', price: 'от 890 ₽', unit: 'от 89 ₽/шт', image: 'product-powerbank.webp' },
  { tag: 'Хит', article: '24589', title: 'Беспроводные наушники Xiaomi Redmi AirDots 2', min: 'от 20 шт', price: 'от 1 250 ₽', unit: 'от 62,50 ₽/шт', image: 'product-earbuds.webp' },
  { tag: 'Хит', article: '35471', title: 'Умные часы Smart Watch X8', min: 'от 10 шт', price: 'от 1 750 ₽', unit: 'от 175 ₽/шт', image: 'product-watch.webp' },
  { tag: 'Хит', article: '87621', title: 'Электрический чайник Xiaomi Mi Electric Kettle', min: 'от 10 шт', price: 'от 1 390 ₽', unit: 'от 139 ₽/шт', image: 'product-kettle.webp' },
  { article: '98123', title: 'Светодиодный фонарь X-Balog P50', min: 'от 30 шт', price: 'от 320 ₽', unit: 'от 10,67 ₽/шт', image: 'product-flashlight.webp' },
  { article: '11235', title: 'Набор инструментов DEKO DKMT108, 108 предметов', min: 'от 5 шт', price: 'от 2 990 ₽', unit: 'от 598 ₽/шт', image: 'product-tools.webp' },
  { article: '34567', title: 'Термос Stanley Classic 1.0 л, зелёный', min: 'от 10 шт', price: 'от 1 890 ₽', unit: 'от 189 ₽/шт', image: 'product-thermos.webp' },
  { article: '56789', title: 'Рюкзак городской Tigernu T-B3998', min: 'от 10 шт', price: 'от 2 450 ₽', unit: 'от 245 ₽/шт', image: 'product-backpack.webp' },
  { article: '67890', title: 'Настольная LED лампа Xiaomi Mi Desk Lamp 1S', min: 'от 10 шт', price: 'от 2 150 ₽', unit: 'от 215 ₽/шт', image: 'product-lamp.webp' },
  { article: '78901', title: 'Контейнер для хранения BranQ Optima, 10 л', min: 'от 20 шт', price: 'от 230 ₽', unit: 'от 11,50 ₽/шт', image: 'product-container.webp' },
];

const productPerks: Array<{ icon: IconType; title: string; text: string }> = [
  { icon: WalletCards, title: 'Оптовые цены', text: 'Гибкая система скидок для постоянных клиентов' },
  { icon: CalendarDays, title: 'Минимальный заказ', text: 'Минимальный заказ от 1 000 ₽' },
  { icon: Truck, title: 'Быстрая отгрузка', text: 'Отгрузка в день заказа при наличии товара' },
  { icon: Globe2, title: 'Доставка по всей РФ и СНГ', text: 'Работаем с надёжными логистическими партнёрами' },
];

const orderSteps: Array<{ icon: IconType; number: string; title: string; text: string; image: string }> = [
  { icon: ShoppingCart, number: '1', title: 'Выберите товары', text: 'Из каталога или через поиск на сайте. Добавьте в список и укажите количество.', image: 'order-airfryer.webp' },
  { icon: FileText, number: '2', title: 'Отправьте запрос или запросите прайс', text: 'Оставьте заявку на сайте или напишите менеджеру. Мы подготовим коммерческое предложение.', image: 'order-offer.webp' },
  { icon: UserRound, number: '3', title: 'Подтвердите заказ', text: 'Согласуем условия, наличие и сроки поставки. Фиксируем заказ в работу.', image: 'order-handshake.webp' },
  { icon: CreditCard, number: '4', title: 'Оплатите удобным способом', text: 'Работаем по безналичному расчёту. Принимаем оплату по счёту с НДС.', image: 'order-payment.webp' },
  { icon: Truck, number: '5', title: 'Быстрая отгрузка и доставка', text: 'Отгружаем со склада в день оплаты. Доставка по РФ и СНГ от 1 дня.', image: 'order-shipping.webp' },
];

const orderPerks: Array<{ icon: IconType; title: string; text: string }> = [
  { icon: BadgePercent, title: 'Выгодные цены', text: 'Гибкие скидки для оптовых клиентов' },
  { icon: ShieldCheck, title: 'Надёжность', text: 'Прямые поставки от проверенных производителей' },
  { icon: Headphones, title: 'Поддержка 24/7', text: 'Личный менеджер всегда на связи' },
  { icon: Clock3, title: 'Экономия времени', text: 'Быстрая обработка заявок и поставки на ваш склад' },
];

const faq = [
  {
    question: 'Какие условия для оптовых покупателей?',
    answer: 'Мы работаем только с оптовыми клиентами. Минимальный заказ - от 10 000 ₽. Действуют индивидуальные цены в зависимости от объёма закупки и категории товара.',
  },
  { question: 'Как быстро производится отгрузка?', answer: 'При наличии товара отгружаем заказ в течение 1 рабочего дня после согласования.' },
  { question: 'Осуществляете ли доставку по России и в СНГ?', answer: 'Да, отправляем надёжными транспортными компаниями по России и странам СНГ.' },
  { question: 'Какие способы оплаты вы принимаете?', answer: 'Основной формат - безналичный расчёт по счёту, включая оплату с НДС.' },
  { question: 'Можно ли вернуть или обменять товар?', answer: 'Да, условия возврата и обмена фиксируются в договоре и зависят от категории товара.' },
  { question: 'Где можно посмотреть весь ассортимент?', answer: 'Оставьте заявку, и менеджер отправит актуальный прайс-лист с категориями и наличием.' },
];

function IconBubble({ icon: Icon, small = false }: { icon: IconType; small?: boolean }) {
  return (
    <span className={small ? 'icon-bubble small' : 'icon-bubble'}>
      <Icon size={small ? 18 : 26} strokeWidth={2.2} />
    </span>
  );
}

function ArrowButton({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <button className={light ? 'arrow-button light' : 'arrow-button'} type="button">
      <span>{children}</span>
      <span className="arrow-dot">
        <ArrowRight size={18} />
      </span>
    </button>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-main-shell">
        <div className="header-main container">
          <a className="logo-wrap" href="#" aria-label="OPTOM HUB">
            <img src={`${A}logo-optom-hub.webp`} alt="OPTOM HUB" decoding="async" />
          </a>
          <div className="mobile-header-actions" aria-label="Быстрые действия">
            <a className="mobile-icon-button" href="#" aria-label="Telegram">
              <img src={`${A}social-telegram.svg`} alt="" />
            </a>
            <a className="mobile-icon-button" href="#" aria-label="Instagram">
              <img src={`${A}social-instagram.svg`} alt="" />
            </a>
            <a className="mobile-icon-button" href="tel:88001234567" aria-label="Позвонить">
              <Phone size={18} />
            </a>
            <button className="mobile-icon-button" type="button" aria-label="Меню">
              <Menu size={20} />
            </button>
          </div>
          <div className="catalog-menu">
            <button className="catalog-button" type="button" aria-haspopup="true">
              <Menu size={18} />
              <span>Каталог товаров</span>
            </button>
            <div className="catalog-drawer" aria-label="Категории товаров">
              <div className="catalog-drawer-inner">
                <div className="catalog-drawer-head">
                  <strong>Категории товаров</strong>
                  <span>15 разделов для оптовой заявки</span>
                </div>
                <div className="catalog-list">
                  {catalogItems.map((category) => (
                    <a href="#categories" className="catalog-chip" key={category.title}>
                      <img src={`${A}${category.image}`} alt="" loading="lazy" decoding="async" />
                      <span>
                        <strong>{category.title}</strong>
                        <em>{category.count}</em>
                      </span>
                      <ArrowRight size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <label className="search-field">
            <input placeholder="Поиск товара, категории, артикула..." />
            <Search size={20} />
          </label>
          <div className="phone-block">
            <strong>8 800 123-45-67</strong>
            <span>Пн-Пт 9:00 - 18:00</span>
          </div>
          <div className="header-socials" aria-label="Социальные сети">
            <a className="round-link" href="#" aria-label="Telegram">
              <img src={`${A}social-telegram.svg`} alt="" />
            </a>
            <a className="round-link" href="#" aria-label="Instagram">
              <img src={`${A}social-instagram.svg`} alt="" />
            </a>
          </div>
          <button className="price-button" type="button">Получить прайс</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>OPTOM HUB</span>
            <em>оптовые поставки для бизнеса</em>
          </div>
          <h1>
            Ваш <br className="mobile-only" />надёжный
            <br />
            поставщик
            <br />
            <mark>оптом</mark>
          </h1>
          <p className="hero-text">Большой ассортимент проверенных товаров по выгодным оптовым ценам с быстрой доставкой по всей России и СНГ.</p>
          <div className="hero-actions">
            <ArrowButton>Получить оптовый прайс</ArrowButton>
            <div className="answer-note">
              <Headphones size={30} />
              <span>Ответим за 15 минут<br />в рабочее время</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-image-frame">
            <picture>
              <source media="(max-width: 760px)" srcSet={`${A}hero-mobile.webp`} />
              <img src={`${A}hero-truck.webp`} alt="Фура у склада с коробками" fetchPriority="high" decoding="async" />
            </picture>
            <div className="sticker neon">ОПТ<br />ЛЕГКО</div>
            <div className="sticker dark">Работаем<br />на результат<br />вашего бизнеса</div>
          </div>
        </div>
      </div>
      <div className="hero-stats container">
        <div className="hero-stats-line" aria-hidden="true">
          <span>Более <strong>15 000</strong> товаров <i>|</i> Более <strong>500</strong> клиентов</span>
          <span><strong>99%</strong> заказов в срок <i>|</i> <strong>От 1 дня</strong> доставка</span>
        </div>
        {heroStats.map((stat) => (
          <div className="hero-stat" key={stat.value}>
            <IconBubble icon={stat.icon} small />
            <p>
              {stat.lead && <span>{stat.lead}</span>}
              <strong>{stat.value}</strong>
              <em>{stat.label}</em>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="section container categories-section" id="categories">
      <div className="section-head">
        <div>
          <h2>Популярные категории</h2>
          <p>Оптовые товары для бизнеса по выгодным ценам с быстрой доставкой</p>
        </div>
        <a href="#">Смотреть весь каталог <ArrowRight size={20} /></a>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article className={category.featured ? 'category-card large' : 'category-card'} key={category.title}>
            <div className="card-copy">
              <h3>{category.title}</h3>
              <span>{category.count}</span>
              <button type="button" aria-label={`Открыть ${category.title}`}><ArrowRight size={18} /></button>
            </div>
            <img src={`${A}${category.image}`} alt={category.title} loading="lazy" decoding="async" />
          </article>
        ))}
      </div>
      <MiniBenefits items={smallAdvantages} />
    </section>
  );
}

function MiniBenefits({ items }: { items: Array<{ icon: IconType; title: string; text: string }> }) {
  return (
    <div className={items.length === 4 ? 'mini-benefits four' : 'mini-benefits'}>
      {items.map((item) => (
        <div className="mini-benefit" key={item.title}>
          <item.icon size={28} />
          <p>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="section benefit-section">
      <div className="benefit-intro container">
        <div className="benefit-title">
          <div className="soft-pill"><Zap size={16} /> Наши преимущества</div>
          <h2>
            Почему с нами
            <br />
            выгодно <mark>работать</mark>
          </h2>
          <p>Мы создаём удобные условия для оптовых покупателей и помогаем развивать ваш бизнес</p>
        </div>
        <div className="pallet-card">
          <img src={`${A}hero-truck.webp`} alt="Оптовая поставка" loading="lazy" decoding="async" />
          <Zap className="big-zap" size={170} />
        </div>
      </div>
      <div className="benefit-grid container">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <IconBubble icon={benefit.icon} />
            <h3>{benefit.title}</h3>
            <span />
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
      <div className="container benefit-cta">
        <ArrowButton>Стать нашим партнёром</ArrowButton>
        <div className="manager-note">
          <UserRound size={26} />
          <span>Оставьте заявку - и наш менеджер свяжется с вами в течение 15 минут</span>
        </div>
      </div>
    </section>
  );
}

function ProductHits() {
  return (
    <section className="section container product-section">
      <div className="section-head">
        <div>
          <h2>Хиты продаж <Zap className="title-zap" size={34} /></h2>
          <p>Популярные товары, которые выбирают наши клиенты</p>
        </div>
        <button className="ghost-button" type="button">Смотреть все товары <ArrowRight size={18} /></button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.article}>
            <div className="product-image">
              {product.tag && <span className="hit-tag">{product.tag}</span>}
              <button type="button" aria-label="В избранное"><Heart size={20} /></button>
              <img src={`${A}${product.image}`} alt={product.title} loading="lazy" decoding="async" />
            </div>
            <div className="product-info">
              <span>Арт. {product.article}</span>
              <h3>{product.title}</h3>
              <p>Мин. заказ: {product.min}</p>
              <strong>{product.price}</strong>
              <em>{product.unit}</em>
            </div>
            <div className="product-actions">
              <button type="button">Запросить цену</button>
              <button className="cart-btn" type="button" aria-label="В корзину"><ShoppingCart size={20} /></button>
            </div>
          </article>
        ))}
      </div>
      <MiniBenefits items={productPerks} />
    </section>
  );
}

function OrderSection() {
  return (
    <section className="section order-section">
      <div className="container order-shell">
        <div className="order-top">
          <div>
            <h2>
              Как сделать
              <br />
              <mark>заказ</mark>
            </h2>
          </div>
          <p>Простой и прозрачный процесс для оптовых клиентов. От выбора товаров до доставки на ваш склад.</p>
          <div className="special-card">
            <IconBubble icon={Boxes} small />
            <h3>Нужен особый товар?</h3>
            <p>Найдём и поставим любой товар под ваш запрос: бренд, характеристики, объём и упаковка.</p>
            <ArrowButton>Оставить запрос</ArrowButton>
          </div>
        </div>
        <div className="steps-grid">
          {orderSteps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <step.icon size={42} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <img src={`${A}${step.image}`} alt={step.title} loading="lazy" decoding="async" />
              {index < orderSteps.length - 1 && <ChevronRight className="step-arrow" size={32} />}
            </article>
          ))}
        </div>
        <div className="order-perks">
          {orderPerks.map((item) => (
            <div className="order-perk" key={item.title}>
              <IconBubble icon={item.icon} small />
              <p>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </p>
            </div>
          ))}
          <div className="question-card">
            <CircleHelp size={36} />
            <p><strong>Есть вопросы?</strong><span>Напишите нам в онлайн-чат или позвоните - поможем с подбором и расчётом.</span></p>
            <ArrowRight size={20} />
          </div>
        </div>
        <div className="black-cta">
          <Send size={46} />
          <p><strong>Готовы сделать заказ или получить расчёт?</strong><span>Оставьте заявку - мы свяжемся с вами в течение 15 минут в рабочее время.</span></p>
          <div><Phone size={30} /><span><strong>8 800 123-45-67</strong>Пн-Пт 9:00 - 18:00</span></div>
          <div><FileText size={30} /><span><strong>Отправить запрос</strong>Получить прайс-лист</span></div>
        </div>
      </div>
    </section>
  );
}

function FaqContact() {
  const [openFaqs, setOpenFaqs] = React.useState<Set<number>>(() => new Set([0]));

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="section container faq-section">
      <div className="faq-left">
        <span className="faq-pill">FAQ</span>
        <h2>Часто задаваемые вопросы</h2>
        <p>Ответы на популярные вопросы наших клиентов</p>
        <div className="accordion">
          {faq.map((item, index) => (
            <div className={openFaqs.has(index) ? 'faq-item is-open' : 'faq-item'} key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openFaqs.has(index)}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true" />
              </button>
              <div className="faq-answer" id={`faq-answer-${index}`}>
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-column">
        <article className="support-card">
          <div>
            <IconBubble icon={Headphones} small />
            <h3>Нужна помощь с заказом?</h3>
            <p>Наши специалисты помогут подобрать товары и ответят на все вопросы</p>
            <ArrowButton>Связаться с поддержкой</ArrowButton>
          </div>
          <img src={`${A}support-manager.webp`} alt="Менеджер поддержки" loading="lazy" decoding="async" />
        </article>
        <article className="contacts-card">
          <div>
            <h3>Контакты</h3>
            <p><Phone size={22} /><span><strong>8 800 123-45-67</strong>Пн-Пт 9:00 - 18:00</span></p>
            <p><Mail size={22} /><span><strong>info@optomhub.ru</strong>Ответим в течение 15 минут</span></p>
            <p><MapPin size={22} /><span><strong>Москва, ул. Промышленная, 11, стр. 3</strong>Офис и склад</span></p>
          </div>
          <img src={`${A}delivery-truck.webp`} alt="Доставка OPTOM HUB" loading="lazy" decoding="async" />
        </article>
      </div>
    </section>
  );
}

function SubscribeFooter() {
  return (
    <>
      <section className="container subscribe-section">
        <IconBubble icon={Send} />
        <div>
          <h3>Будьте в курсе новинок и акций</h3>
          <p>Подпишитесь на наш Telegram-канал и получайте лучшие предложения первыми</p>
        </div>
        <label>
          <input placeholder="Ваш Telegram или e-mail" />
          <button type="button">Подписаться <ArrowRight size={18} /></button>
        </label>
        <div className="qr-code" aria-label="QR-код">
          {Array.from({ length: 49 }).map((_, index) => <span key={index} className={index % 3 === 0 || index % 7 === 0 ? 'filled' : ''} />)}
        </div>
        <p className="telegram-note"><strong>Мы в Telegram</strong><span>Сканируйте QR-код или найдите @optomhub</span></p>
      </section>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <img src={`${A}logo-optom-hub.webp`} alt="OPTOM HUB" loading="lazy" decoding="async" />
            <p>Надёжный поставщик товаров для бизнеса по выгодным оптовым ценам с быстрой доставкой по России и СНГ.</p>
            <div className="socials">
              <a href="#" aria-label="Telegram"><img src={`${A}social-telegram.svg`} alt="" /></a>
              <a href="#" aria-label="Instagram"><img src={`${A}social-instagram.svg`} alt="" /></a>
            </div>
          </div>
          <FooterCol title="Компания" links={['О нас', 'Преимущества', 'Отзывы', 'Партнёрам', 'Новости', 'Контакты']} />
          <FooterCol title="Клиентам" links={['Каталог товаров', 'Условия работы', 'Доставка и оплата', 'Возврат и обмен', 'Частые вопросы', 'Поддержка 24/7']} />
          <FooterCol title="Категории" links={['Электроника и гаджеты', 'Товары для дома и уюта', 'Автотовары и запчасти', 'Строительство и ремонт', 'Одежда и обувь оптом', 'Хозтовары и упаковка']} />
          <div className="footer-contact">
            <h4>Свяжитесь с нами</h4>
            <p><Phone size={18} /><span><strong>8 800 123-45-67</strong>Пн-Пт 9:00 - 18:00</span></p>
            <p><Mail size={18} /><span><strong>info@optomhub.ru</strong>Ответим в течение 15 минут</span></p>
            <p><MapPin size={18} /><span><strong>Москва, ул. Промышленная, 11, стр. 3</strong>Офис и склад</span></p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© 2024 OPTOM HUB. Все права защищены.</span>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
          <div className="payments"><strong>VISA</strong><strong>MC</strong><strong>МИР</strong></div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <nav className="footer-col">
      <h4>{title}</h4>
      {links.map((link) => <a href="#" key={link}>{link}</a>)}
    </nav>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <BenefitsSection />
        <ProductHits />
        <OrderSection />
        <FaqContact />
        <SubscribeFooter />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
