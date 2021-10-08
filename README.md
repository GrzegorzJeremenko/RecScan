# RecScan ♻️
#### Aplikacja internetowa pomagająca w selekcji odpadów.

<img src="https://raw.githubusercontent.com/GrzegorzJeremenko/RecScan/master/images/logo.png" width="500">

### O Projekcie 🚧

Główną ideą stojąca za projektem było rozwiązane jednego z najważniejszych problemów, występujących w większości nowoczesnych miast w Polsce — problemu związanego z segregacją odpadów. Można pomyśleć, że legenda znajdująca się na koszach pomoże, jednak większość osób i tak nie zawsze jest pewna, do którego kosza wyrzucić dany odpad. Prezentujemy więc aplikacje internetową, która za pomocą kodu kreskowego określa, do którego kosza należy wyrzucić dane opakowanie.

<img src="https://raw.githubusercontent.com/GrzegorzJeremenko/RecScan/master/images/home.png" width="300">

### Technologia 💻

W celu rozwiązania tego problemu RecScan wykorzystuje aparat telefonu w celu zeskanowanie kodu, aby następnie znaleźć produkt w bazie danych i pokazać użytkownikowi, do którego kosza należy go wrzucić. Aplikacje napisana jest w Node.JS przy użyciu framework'a Vue.JS

Komunikuje się z systemem API w celu określenia typu opakowania produktu.

<a href="https://github.com/k-Dobosz/RecScan-API">RecScan API</a>

### Aktualny stan prac 🛠️

Dane o produktach przechowywane są na serwerze API i ładowane są bezpośrednio po uruchomieniu aplikacji. RecScan jest w stanie pomóc w selekcji odpadów. Za każde wyrzucone opakowanie po produkcie użytkownik dostaje punkty, które mają na celu motywacje użytkowników do dbania o środowisko. W aplikacji dostępny jest ranking punktów. Użytkownicy mogą także przeczytać aktualności ze świata recyklingu.

<img src="https://raw.githubusercontent.com/GrzegorzJeremenko/RecScan/master/images/ranking.png" width="300">

### Przyszłe cele 🔥

Aktualnie RecScan działa jedynie jako aplikacja internetowa typu WebApp, natomiast w przyszłości zostanie rozbudowana o aplikację mobilną. Oprócz tego RecScan ma na bieżąco powiększaną bazę danych o coraz liczniejszą ilość produktów.