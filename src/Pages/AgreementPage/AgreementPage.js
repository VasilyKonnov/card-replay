import React from "react";
import classes from "./AgreementPage.module.css";
import classNames from "classnames";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";

const AgreementPage = props => {
  const AgreementPageClassNames = classNames(
    props.className,
    classes["AgreementPage"]
  );
  return (
    <MainContainer>
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "45px" }}>
          Пользовательское соглашения
        </h1>
        <p>1. Общие положения Пользовательского соглашения</p>
        <p>
          1.1. В настоящем документе и вытекающих или связанным с ним отношениях
          Сторон применяются следующие термины и определения:
        </p>
        <p>
          а) Платформа — программно-аппаратные средства, интегрированные с
          Сайтом Администрации;
        </p>
        <p>
          б) Пользователь — дееспособное физическое лицо, присоединившееся к
          настоящему Соглашению в собственном интересе либо выступающее от имени
          и в интересах представляемого им юридического лица.
        </p>
        <p>
          в) Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене
          ________.ru и его поддоменах.
        </p>
        <p>
          г) Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с
          использованием Платформы.
        </p>
        <p>
          д) Соглашение — настоящее соглашение со всеми дополнениями и
          изменениями.
        </p>
        <p>
          1.2. Использование вами Сервиса любым способом и в любой форме в
          пределах его объявленных функциональных возможностей, включая:
        </p>
        <p> просмотр размещенных на Сайте материалов;</p>
        <p> регистрация и/или авторизация на Сайте;</p>
        <p>
           размещение или отображение на Сайте любых материалов, включая но не
          ограничиваясь такими как: тексты, гипертекстовые ссылки, изображения,
          аудио и видео- файлы, сведения и/или иная информация; создает договор
          на условиях настоящего Соглашения в соответствии с положениями ст.437
          и
        </p>
        <p>438 Гражданского кодекса Российской Федерации.</p>
        <p>
          1.3. Воспользовавшись любой из указанных выше возможностей по
          использованию Сервиса вы подтверждаете, что:
        </p>
        <p>
          а) Ознакомились с условиями настоящего Соглашения в полном объеме до
          начала использования Сервиса.
        </p>
        <p>
          б) Принимаете все условия настоящего Соглашения в полном объеме без
          каких-либо изъятий и ограничений с вашей стороны и обязуетесь их
          соблюдать или прекратить использование Сервиса. Если вы не согласны с
          условиями настоящего Соглашения или не имеете права на заключение
          договора на их основе, вам следует незамедлительно прекратить любое
          использование Сервиса.
        </p>
        <p>
          в) Соглашение (в том числе любая из его частей) может быть изменено
          Администрацией без какого-либо специального уведомления. Новая
          редакция Соглашения вступает в силу с момента ее размещения на Сайте
          Администрации либо доведения до сведения Пользователя в иной удобной
          форме, если иное не предусмотрено новой редакцией Соглашения.
        </p>
        <p>2. Общие условия пользования Сервисом</p>
        <p>
          2.1. Использование функциональных возможностей Сервиса допускается
          только после прохождения Пользователем регистрации и авторизации на
          Сайте в соответствии с установленной Администрацией процедурой.
        </p>
        <p>
          2.2. Технические, организационные и коммерческие условия использования
          Сервиса, в том числе его функциональных возможностей доводятся до
          сведения Пользователей путем отдельного размещения на Сайте или путем
          нотификации Пользователей.
        </p>
        <p>
          2.3. Выбранные Пользователем логин и пароль являются необходимой и
          достаточной информацией для доступа Пользователя на Сайт. Пользователь
          не имеет права передавать свои логин и пароль третьим лицам, несет
          полную ответственность за их сохранность, самостоятельно выбирая
          способ их хранения.
        </p>
      </Container>
    </MainContainer>
  );
};

export default AgreementPage;
