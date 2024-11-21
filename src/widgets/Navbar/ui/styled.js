import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 94px;
  background: ${({ theme }) => theme.colors.obsidianNight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  height: 48px;
  padding: 4px 0;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 8.75px 4.58px;
  opacity: 1;
`;

export const LogoText = styled.span`
  width: 168px;
  height: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-align: left;
  opacity: 1;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 8px 24px;
  gap: 10px;
  border-radius: 24px 0px 0px 0px;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ffffff;
    color: #18181b;
  }

  &:focus {
    outline: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex; /* Располагаем элементы в ряд */
  align-items: center; /* Выравниваем элементы по вертикали */
  gap: 16px; /* Расстояние между кнопками (ссылками) */
  margin-left: auto; /* Сдвигаем весь блок ссылок вправо */
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Для позиционирования текста и иконки */
  width: 432px; /* Ширина всего контейнера */
  height: 48px; /* Высота контейнера */
  background: #1f1f23; /* Тёмный фон */
  border: 1px solid #ffffff; /* Белая рамка */
  border-radius: 8px; /* Скруглённые углы */
`;

export const SearchIcon = styled.img`
  width: 24px; /* Ширина иконки */
  height: 24px; /* Высота иконки */
  position: absolute; /* Абсолютное позиционирование */
  top: 12px; /* Отступ сверху */
  left: 12px; /* Отступ слева */
  padding: 2.78px 2.46px 2px 2.78px; /* Внутренние отступы */
  pointer-events: none; /* Иконка не должна быть кликабельной */
`;

export const SearchText = styled.span`
  position: absolute; /* Абсолютное позиционирование */
  top: 12px; /* Отступ сверху */
  left: 64px; /* Отступ слева (с учётом ширины иконки) */
  font-family: "Poppins", sans-serif; /* Используемый шрифт */
  font-size: 16px; /* Размер текста */
  font-weight: 400; /* Обычный вес текста */
  line-height: 24px; /* Межстрочный интервал */
  color: rgba(255, 255, 255, 0.6); /* Полупрозрачный белый */
  pointer-events: none; /* Текст не должен быть кликабельным */
`;

export const SearchInput = styled.input`
  flex-grow: 1; /* Поле ввода занимает оставшееся пространство */
  height: 100%; /* Высота поля ввода равна высоте контейнера */
  padding: 0 16px 0 200px; /* Оставляем место для текста и иконки (200px) */
  font-family: "Poppins", sans-serif; /* Шрифт текста */
  font-size: 16px; /* Размер текста */
  font-weight: 400; /* Вес текста */
  line-height: 24px; /* Межстрочный интервал */
  color: #ffffff; /* Цвет текста */
  background: transparent; /* Прозрачный фон */
  border: none; /* Убираем рамку */
  outline: none; /* Убираем стандартный фокус */

  &::placeholder {
    color: transparent; /* Убираем стандартный placeholder */
  }
`;
