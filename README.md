# Chocco-project

Посмотреть проект можно на [GitHub Pages](https://moradell.github.io/chocco-project/)

### В проекте используются:
* HTML5 && CSS3
* Sass (scss)
* jQuery 
* [bxslider](https://bxslider.com/) для реализации слайдера
* [fancybox](https://www.fancyapps.com/fancybox/3/) для более гибкого вызова модального окна в секции формы
* [YouTube API](https://developers.google.com/youtube)
* [Yandex maps API](https://yandex.ru/dev/maps/)


### Краткое описание секций проекта

1. На главной странице ничего особенного, единственное, что стоит отметить, скрол в проекте происходит по средствам сдвига полной секции при помощи колеса мишы (для пк) или свайпа (для смартфонов).

![main-section](https://user-images.githubusercontent.com/29666697/113995883-fdc69400-9899-11eb-83a9-57b129da6b55.png)

2. Вторая секция также достаточно простая, иконки (как и все остальные в проекте) предварительно были собраны в единый спрайт и добавлены при помощи svg\use

![why-chocco](https://user-images.githubusercontent.com/29666697/113996718-c60c1c00-989a-11eb-82f2-fa8634f65a20.png)

3. В третей секции присутсвует слайдер, сделан он при помощи библиотеки [bxslider](https://bxslider.com/) 

![product-section](https://user-images.githubusercontent.com/29666697/113997347-63675000-989b-11eb-9ad4-7b6d263a6ab4.png)

4. В четвертой секции представлены мини-профайлы команды, аккардеон реализован простым добавлением высоты для компонентов текста, которая по умолчанию 0

![team-section](https://user-images.githubusercontent.com/29666697/113998335-51d27800-989c-11eb-9bcc-600203080689.png)

5. В пятой секции представлен очередной аккардеон, но в этот раз вертикальный

![menu-section-1](https://user-images.githubusercontent.com/29666697/114006630-f4422980-98a3-11eb-8843-19274e9d3381.png)
![menu-section-2](https://user-images.githubusercontent.com/29666697/114001988-ce1a8a80-989f-11eb-9180-0058237cca61.png)

6. Шестая секция - с отзывами

![reviews-section](https://user-images.githubusercontent.com/29666697/114002305-176ada00-98a0-11eb-9d34-e6182a282e59.png)

7. В седьмой секции расположился кастомный видео-проигрыватель. Реализован при помощи [YouTube API](https://developers.google.com/youtube), ползунок громкости, как и полоска воспроизведения это обычные html элементы, но по средствам js|jQuery синхранизированные с API

![video-section](https://user-images.githubusercontent.com/29666697/114003591-361da080-98a1-11eb-813e-bbbd90db8c6e.png)

8. Восьмая секция. Экран заказа. При отправке формы, делается запрос на сервер и он "рандомно" вернет ответ, в зависимости от которого появится одно из двух сообщений. (Сообщение выведется в виде модального окна, которое реализовано при помощи [fancybox](https://www.fancyapps.com/fancybox/3/))

![order-section](https://user-images.githubusercontent.com/29666697/114004960-7893ad00-98a2-11eb-977d-4dab0d78c1e9.png)

9. Девятая секция. Секция с картой, совмещена с footer'ом. Карта вставлена по средствам [Yandex maps API](https://yandex.ru/dev/maps/), пины аналогично. 

![map-section](https://user-images.githubusercontent.com/29666697/114005073-8e08d700-98a2-11eb-8f09-9674f788918c.png)
