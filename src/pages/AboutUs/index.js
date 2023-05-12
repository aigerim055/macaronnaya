import React from 'react';
import './index.css'
import AboutMeImg from  './images/image-1.png'
import HowStartImg from './images/image-2.png'
import AboutProjectImg from './images/image-3.png'
import AboutCustomersImg from './images/image-4.png'
import MainImage from './images/macaronny.png'
import Header from "../../components/header";


const AboutUsPage = () => {
    return (
        <div className={'about_page_background'}>
            <Header/>
            <div className={'container'}>
                <h1> Те самые макарон... </h1>
                <div className="main-image">
                    <img src={MainImage} alt="main-image"/>
                </div>
                <div className={'about-me'}>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <div className="box">
                                <h2> О Себе </h2>
                                <p>
                                    <b> Я совмещаю развитие проектов, ведение блога и семью.</b>
                                </p>
                                <p> В Бишкеке живу с 10 лет. До этого жила в Москве. Часто меняла школы.
                                    После восьмого класса даже хотела бросить учебу, потому что поняла, что мне это не нужно.
                                    Я хотела заниматься бизнесом и зарабатывать деньги.
                                </p>
                                <p>
                                    Я люблю вкусно поесть.
                                    Вся моя жизнь связана с едой. Когда из-за любви к сладкому у меня появилась аллергия,
                                    мама запретила мне покупать сладости. Но я нашла другой выход и поняла,
                                    что можно попросить деньги и купить яйца, сахар и муку, а дома самой приготовить бисквит.
                                    Так я попала в сферу изготовления кондитерских изделий.
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <img src={AboutMeImg} alt="about-us"/>
                            </div>
                        </div>
                    </div>
                    <div className={'row align-items-center'}>
                        <div className={'col-6'}>
                            <div className="box me-5">
                                <img src={HowStartImg} alt="about-us" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h2 className={'text-center'}> Как все началось </h2>
                                <p>
                                    <b> Кондитерскую студию мы открыли 28 августа 2019 года.</b>
                                </p>
                                <p> В начале готовили на заказ эксклюзивные и уникальные торты,
                                    на изготовление которых уходило по 10 часов. Параллельно я вела курсы по
                                    кондитерскому мастерству. Спустя полтора года поняла, что в этой сфере продвигаться
                                    тяжело. Возникали сложности в масштабировании. Невозможно было
                                    поставить торты на поток, потому что каждый из них — единичная ручная работа.
                                </p>
                                <p>
                                    В 2019 году я полетела на обучение кондитерскому мастерству в Москву, где впервые
                                    сделала популярные пирожные макарон. Увидела другую интерпретацию этого
                                    продукта с большим количеством начинки и крема.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'row align-items-center'}>
                        <div className={'col-6'}>
                            <div className="box">
                                <h2> О Проекте </h2>
                                <p>
                                    <b>Я Свой бизнес я освещаю в блоге, поэтому о процессе обучения и
                                        изготовления рассказывала в Stories.</b>
                                </p>
                                <p> Произошел нативный прогрев. Я просто делилась тем, что хочу поесть те
                                    самые макарон и учусь их делать. А людям стало интересно. Это выглядело красиво.
                                    Подписчики спрашивали, когда мы запустим их в продажу.
                                </p>
                                <p>
                                    15 декабря 2020 года мы запустили первую партию и ее раскупили в течение 20 минут.
                                    На тот момент цена была дорогой — 950 сом, но люди все равно покупали. Люди писали,
                                    что им безумно понравилось и они ждут следующую партию. Мы еженедельно готовили
                                    по 15-20 коробочек макарон. На Новый год изготовили 60 штук, которые разобрали
                                    за полтора часа.
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box mt-5">
                                <img src={AboutProjectImg} alt="about-us"/>
                            </div>
                        </div>
                    </div>
                    <div className={'row align-items-center'}>
                        <div className={'col-6'}>
                            <div className="box me-5">
                                <img src={AboutCustomersImg} alt="about-us"  />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h2 className={'text-center'}>  О Клиентах </h2>
                                <p>
                                    <b> Мы развиваемся через социальные сети. </b>
                                </p>
                                <p> Я часто вижу, как нас отмечают в Stories и пишут: «Если будете в Бишкеке,
                                    то обязательно попробуйте эти макарон». Мне писали люди из России, Испании, Франции
                                    и других стран, что им нравится наша продукция. Думаю, мы двигаемся в правильном направлении.
                                </p>
                                <p>
                                    Компания растет. Мы учимся и делаем так, чтобы людям было комфортно с нами работать.
                                    Внедряем кайдзен-систему, чтобы бизнес рос правильно.
                                </p>
                                <p>
                                    Наши макарон можно найти не только в Бишкеке, но и в Оше, и в соседних городах.
                                    Мы постепенно разрастаемся по Кыргызстану. Регулярно обновляем список партнеров,
                                    так как у нас активная аудитория, которая всегда пишет, если что-то идет не так.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUsPage;
