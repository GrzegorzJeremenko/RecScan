# RecScan ♻️
#### Aplikacja mobilna pomagająca w selekcji odpadów.

<img src="https://raw.githubusercontent.com/GrzegorzJeremenko/RecScan/master/images/logo.png" width="500">

### O Projekcie 🚧

Główną ideą stojąca za projektem było rozwiązane jednego z najważniejszych problemów, występujących w większości nowoczesnych miast w Polsce — problemu związanego z segregacją odpadów. Można pomyśleć, że naklejki znajdujące się na koszach pomogą, jednak większość osób i tak nie zawsze jest pewna, do którego kosza wyrzucić dany odpad. Prezentujemy więc aplikacje, która za pomocą kodu kreskowego określa, do którego kosza należy wyrzucić dane opakowanie.

### Technologia 💻

W celu rozwiązania tego problemu RecScan wykorzystuje aparat telefonu w celu zeskanowanie kodu, aby następnie znaleźć produkt w bazie danych i pokazać użytkownikowi, do którego kosza należy do wrzucić. Aplikacje napisana jest w Node.JS przy użyciu framework'a Vue.JS

### Aktualny stan prac 🛠️

Dane o produktach oraz o stanie zapełnienia koszy na odpady przechowywane są na serwerze API i ładowane są bezpośrednio po uruchomieniu aplikacji. RecScan jest w stanie wyświetlić podany w procentach stopień zapełnia kosza na naszym osiedlu oraz pomóc w selekcji odpadów. Za każde wyrzucone opakowanie po produkcie użytkownik dostaje punkty, które mają na celu motywacje użytkowników do dbania o środowisko.

### Przyszłe cele 🔥

Aktualnie RecScan działa jedynie jako aplikacja mobilna, natomiast w przyszłości zostanie rozbudowana o aplikację internetową. Oprócz tego RecScan będzie miał na bieżąco powiększaną bazę danych o coraz liczniejszą ilość produktów.