# Chocco-project

Посмотреть проект можно на [GitHub Pages](https://moradell.github.io/chocco-project/) <br>
Также б<strong>о</strong>льшую часть функционала проекта можно посмотерть в докуменет ниже. <br>
Проект адаптирован, присутствует два ключевых брейкпоинта - 768px и 480px, все что между - responsive

## Навигация по документу
* [Стэк проекта](#stack)
* [Краткое описание всех секций проекта](#description)
* [Секции после преодоления брейкпоинта 768px](#description-adaptive)

### <a name="stack"></a>В проекте используются:
* HTML5 && CSS3
* Sass (scss)
* jQuery 
* [bxslider](https://bxslider.com/) 
* [fancybox](https://www.fancyapps.com/fancybox/3/) 
* [YouTube API](https://developers.google.com/youtube)
* [Yandex maps API](https://yandex.ru/dev/maps/)


### <a name="description"></a>Краткое описание секций проекта

1. Main section <br>
На главной странице ничего особенного, единственное, что стоит отметить, скрол в проекте происходит по средствам сдвига полной секции при помощи колеса мишы (для пк) или свайпа (для смартфонов).

![main-section](https://user-images.githubusercontent.com/29666697/113995883-fdc69400-9899-11eb-83a9-57b129da6b55.png)

2. "Why" section <br>
Данная секция также достаточно простая, иконки (как и все остальные в проекте) предварительно были собраны в единый спрайт и добавлены при помощи svg\use

![why-chocco](https://user-images.githubusercontent.com/29666697/113996718-c60c1c00-989a-11eb-82f2-fa8634f65a20.png)

3. Slider section <br>
В этой секции присутсвует слайдер, сделан он при помощи библиотеки [bxslider](https://bxslider.com/) 

![product-section](https://user-images.githubusercontent.com/29666697/113997347-63675000-989b-11eb-9ad4-7b6d263a6ab4.png)

4. Team section <br>
Данная секция представляет из себя экран с мини-профайлами команды, аккардеон реализован простым добавлением высоты для компонентов текста, которая по умолчанию 0

![team-section](https://user-images.githubusercontent.com/29666697/113998335-51d27800-989c-11eb-9bcc-600203080689.png)

5. Products section <br>
В этой секции представлен очередной аккардеон, но в этот раз горизонтальный

![menu-section-1](https://user-images.githubusercontent.com/29666697/114006630-f4422980-98a3-11eb-8843-19274e9d3381.png)
![menu-section-2](https://user-images.githubusercontent.com/29666697/114001988-ce1a8a80-989f-11eb-9180-0058237cca61.png)

6. Reviews section <br>
Секция с отзывами

![reviews-section](https://user-images.githubusercontent.com/29666697/114002305-176ada00-98a0-11eb-9d34-e6182a282e59.png)

7. Player section <br>
В данной секции расположился кастомный видео-проигрыватель. Реализован при помощи [YouTube API](https://developers.google.com/youtube), ползунок громкости, как и полоска воспроизведения это обычные html элементы, но по средствам js|jQuery синхранизированные с API

![video-section](https://user-images.githubusercontent.com/29666697/114003591-361da080-98a1-11eb-813e-bbbd90db8c6e.png)

8. Order section <br>
Экран заказа. При отправке формы, делается запрос на сервер и он "рандомно" возвращает ответ, в зависимости от которого появится одно из двух сообщений. (Сообщение выведется в виде модального окна, которое реализовано при помощи [fancybox](https://www.fancyapps.com/fancybox/3/))

![order-section](https://user-images.githubusercontent.com/29666697/114004960-7893ad00-98a2-11eb-977d-4dab0d78c1e9.png)

9. Map section <br>
Секция с картой, совмещенная с footer'ом. Карта вставлена по средствам [Yandex maps API](https://yandex.ru/dev/maps/), пины аналогично. 

![map-section](https://user-images.githubusercontent.com/29666697/114005073-8e08d700-98a2-11eb-8f09-9674f788918c.png)

### <a name="description-adaptive"></a> Адаптивный вариант тех же секций

1. Main section <br>

![main-section-adaptive](https://user-images.githubusercontent.com/29666697/114017991-1641a900-98b0-11eb-84a9-96844e6731fe.png)
![menu-section-adaptive-burger](https://user-images.githubusercontent.com/29666697/114018007-1a6dc680-98b0-11eb-8744-5956bb7862b4.png)

2. "Why" section <br>

![why-section-adaptive](https://user-images.githubusercontent.com/29666697/114018116-3e310c80-98b0-11eb-8c1f-5196db0d32aa.png)

3. Slider section <br>

![slider-section-adaptive](https://user-images.githubusercontent.com/29666697/114018223-59038100-98b0-11eb-8e0a-128ed4f9a59d.png)

4. Team section <br>

![team-section-adaptive](https://user-images.githubusercontent.com/29666697/114018277-66b90680-98b0-11eb-94fc-32bec31e0a5d.png)

5. Products section <br>

![menu-section-adaptive](https://user-images.githubusercontent.com/29666697/114018348-789aa980-98b0-11eb-967e-080f7c46478f.png)

6. Reviews section <br>

![reviews-section-adaptive](https://user-images.githubusercontent.com/29666697/114018403-88b28900-98b0-11eb-9e04-a685019bc495.png)

7. Player section <br>

![player-section-adaptive](https://user-images.githubusercontent.com/29666697/114018439-92d48780-98b0-11eb-8ea7-668c8ce66b33.png)

8. Order section <br>

![order-section-adaptive](https://user-images.githubusercontent.com/29666697/114018470-9b2cc280-98b0-11eb-99fa-11dadfdb645b.png)

9. Map section <br>

![map-section-adaptive](https://user-images.githubusercontent.com/29666697/114018585-be577200-98b0-11eb-91c6-bb79256ba21b.png)
