# 4DX — Four Disciplines Skills

[English](#english) · [Русский](#русский)

| Platform / Платформа | English | Русский |
|---|---|---|
| ChatGPT: standalone / единый файл | [English](chatgpt/en/CHATGPT-INSTRUCTIONS.md) | [Русский](chatgpt/CHATGPT-INSTRUCTIONS.md) |
| ChatGPT: skill folder / каталог навыка | [English](chatgpt/en/four-disciplines-coach-en/SKILL.md) | [Русский](chatgpt/four-disciplines-coach/SKILL.md) |
| Hermes | [English](hermes/en/four-disciplines-execution-en/SKILL.md) | [Русский](hermes/four-disciplines-execution/SKILL.md) |

## English

AI assistant skills for **ChatGPT and Hermes** based on *The 4 Disciplines of Execution* (4DX). They help individuals and teams turn an important goal into a practical system of measurable actions, a visible scoreboard, and weekly accountability.

### What the skills help you do

1. **Focus on a Wildly Important Goal (WIG):** define the outcome, baseline, target, and deadline.
2. **Act on lead measures:** choose actions or intermediate results you can influence and test their connection to the goal.
3. **Keep a compelling scoreboard:** compare planned and actual results for both lead and lag measures.
4. **Create a cadence of accountability:** review previous commitments, learn from the scoreboard, and choose one or two concrete commitments for the next week.

The skills also support recovery after missed commitments, diagnosis of ineffective measures, and coordination across teams. They include a reusable system-state template, a weekly review template, and a fictional worked example.

### Getting started

**ChatGPT:** download [CHATGPT-INSTRUCTIONS.md](chatgpt/en/CHATGPT-INSTRUCTIONS.md), attach it to a chat, and send:

> Use the attached instructions as my 4DX coaching skill. Help me build an execution system for my goal. Ask one main question at a time, respond in English, and keep a portable record of the system.

For environments that support skill folders, use [four-disciplines-coach-en](chatgpt/en/four-disciplines-coach-en/SKILL.md) instead of the standalone file.

**Hermes:** download the repository and copy the entire [four-disciplines-execution-en](hermes/en/four-disciplines-execution-en/SKILL.md) folder from `hermes/en/` into the `skills` directory of your chosen active profile. Preserve the root LICENSE when redistributing the files. Confirm that Hermes can discover and open the skill, then send:

> Use the four-disciplines-execution-en skill. Help me set up my 4DX system and run weekly reviews. Respond in English. Let's agree on a folder for the system state and session notes.

**Languages:** complete English and Russian packages are available, including all references and templates. The English skills use the `-en` suffix so they can coexist with the Russian skills. Select one edition when invoking the skill. The assistant can respond in the user's language.

### English templates and references

- [System-state template](hermes/en/four-disciplines-execution-en/assets/system-state.md)
- [Weekly session template](hermes/en/four-disciplines-execution-en/assets/weekly-session.md)
- [Setup guide](hermes/en/four-disciplines-execution-en/references/setup.md)
- [Weekly review guide](hermes/en/four-disciplines-execution-en/references/weekly.md)
- [Recovery and troubleshooting](hermes/en/four-disciplines-execution-en/references/recovery.md)
- [Organizational rollout](hermes/en/four-disciplines-execution-en/references/organization.md)
- [Worked example](hermes/en/four-disciplines-execution-en/references/worked-example.md)
- [Book basis and adaptation boundaries](hermes/en/four-disciplines-execution-en/references/book-basis.md)

The ChatGPT skill folder includes the same references and templates; the standalone ChatGPT file embeds all of them.

### What you receive after the interview

The assistant must immediately formulate your WIG, lag outcome measure, and lead measures, then show a dashboard populated with your answers. You do not need to ask for it separately. It includes plan versus actual, measurement history, the first week's commitments, and instructions for adding new results.

With suitable tools, the skill creates an interactive artifact or a standalone HTML dashboard with observation entry and data export/restore. Without creation tools, it provides a complete text dashboard in chat. Missing facts remain labeled; unconfirmed goals and standards appear as proposals rather than approved decisions.

- [Dashboard creation and update rules](hermes/en/four-disciplines-execution-en/references/dashboard.md)
- [Dashboard content template](hermes/en/four-disciplines-execution-en/assets/dashboard.md)

### Continuing each week

Provide the latest system state and this week's results, then ask:

> Run my weekly 4DX review: check last week's commitments, update the scoreboard, and help me choose one or two commitments for next week.

Carry the instructions and latest system state into a new ChatGPT conversation. Hermes can use saved state when it has access to the agreed folder. These skills do not automatically enable persistent memory, reminders, or background execution.

### Source, validation, and license

This is an unofficial adaptation of the book by Chris McChesney, Sean Covey, and Jim Huling, based on its 2013 Russian edition. The book itself is not included. The project is not endorsed by the authors or FranklinCovey.

Both SKILL.md files passed format validation, and package links were checked. The instructions received a manual scenario review; independent model testing and live installation tests were not performed.

The project is licensed under [MIT](LICENSE), allowing personal and commercial use under its terms. Reports of changes, improvements, and bugs are welcome through Issues, Pull Requests, or **kongrog@yandex.ru**. Reporting is voluntary and is not an additional license condition.

---

## Русский

Скиллы для ChatGPT и Hermes по методу «Четыре дисциплины исполнения»: постановка целей, опережающие показатели, табло прогресса и еженедельная отчётность.

Помощник ведёт от выбора критически важной цели до регулярного исполнения: помогает определить управляемые действия, увидеть план и факт, принять конкретные обязательства и разобрать причины срывов.

## Что внутри

| Вариант | Точка входа |
|---|---|
| ChatGPT — один файл со всеми инструкциями и шаблонами | [CHATGPT-INSTRUCTIONS.md](chatgpt/CHATGPT-INSTRUCTIONS.md) |
| ChatGPT / среда с поддержкой папок SKILL.md | [four-disciplines-coach](chatgpt/four-disciplines-coach/SKILL.md) |
| Hermes | [four-disciplines-execution](hermes/four-disciplines-execution/SKILL.md) |

Каждый каталог навыка самодостаточен: содержит SKILL.md, справки в references и шаблоны в assets. Русские версии сохранены по прежним путям; полные английские версии, включая справки и шаблоны, находятся в `chatgpt/en/` и `hermes/en/`. Помощнику предписано отвечать на языке пользователя.

## Быстрый старт: ChatGPT

1. Откройте [единый файл инструкции](chatgpt/CHATGPT-INSTRUCTIONS.md) и скачайте его через кнопку скачивания файла GitHub.
2. Прикрепите файл к чату. Если загрузка Markdown недоступна, передайте его текст.
3. Отправьте:

> Используй прикреплённую инструкцию как мой навык по четырём дисциплинам исполнения. Помоги построить систему для моей цели. Задавай по одному главному вопросу и сохраняй переносимый паспорт системы.

Используйте либо единый файл, либо каталог навыка в среде, которая поддерживает такой формат; одновременно оба варианта не нужны. Это инструкция для помощника, а не автоматически установленное расширение аккаунта.

## Быстрый старт: Hermes

1. Скачайте репозиторий через **Code → Download ZIP**.
2. Поместите папку `hermes/four-disciplines-execution` целиком в каталог `skills` выбранного активного профиля Hermes. Сохраните рядом с распространяемыми материалами копию корневого LICENSE.
3. Проверьте, что Hermes видит и открывает навык `four-disciplines-execution`. Если такое имя уже существует, сначала сравните содержимое.
4. Отправьте:

> Используй навык four-disciplines-execution. Помоги построить мою систему 4ДИ и вести еженедельные встречи. Согласуем каталог для паспорта и протоколов. Начни с выбора критически важной цели.

Каталог skills зависит от активного профиля. Навык предлагает сохранять паспорт и протоколы в согласованной папке проекта; установка сама по себе не создаёт расписаний и не меняет глобальную память или настройки Hermes.

## Результат сразу после опроса

Помощник должен сразу сформулировать вашу КВЦ, запаздывающий показатель результата и опережающие показатели, затем показать дашборд, заполненный по вашим ответам. Отдельно просить об этом не нужно. Дашборд содержит план/факт, историю замеров, обязательства первой недели и способ внести новые результаты.

При наличии подходящих инструментов создаётся интерактивный артефакт или отдельный HTML-дашборд с вводом замеров и экспортом/восстановлением данных. Без инструментов создания помощник выдаёт полный текстовый дашборд в чате. Неизвестные факты обозначаются явно, несогласованные цели и нормы остаются предложениями.

- [Правила создания и обновления дашборда](hermes/four-disciplines-execution/references/dashboard.md).
- [Содержательный шаблон дашборда](hermes/four-disciplines-execution/assets/dashboard.md).

## Работа по неделям

В конце запуска у вас должны быть: одна-две критически важные цели, определения показателей, табло с планом и фактом, ритм встреч и первые конкретные обязательства.

Для следующей встречи передайте актуальный паспорт и результаты недели:

> Проведи недельную встречу по 4ДИ: разбери прошлые обещания, обнови табло и помоги выбрать одно-два обязательства на следующую неделю.

Для продолжения в новом чате ChatGPT перенесите инструкцию и последний паспорт. Hermes может читать сохранённый паспорт, если у него есть доступ к выбранной папке. Неизвестные показатели остаются «нет данных», а предложения помощника не считаются решениями пользователя без его согласия.

## Шаблоны и пример

- [Паспорт системы](hermes/four-disciplines-execution/assets/system-state.md).
- [Протокол недельной встречи](hermes/four-disciplines-execution/assets/weekly-session.md).
- [Заполненный учебный пример](hermes/four-disciplines-execution/references/worked-example.md) — вымышленные данные, не цель пользователя.
- [Диагностика срывов и неработающих показателей](hermes/four-disciplines-execution/references/recovery.md).
- [Работа с несколькими командами](hermes/four-disciplines-execution/references/organization.md).
- [Основания в книге и дополнения адаптации](hermes/four-disciplines-execution/references/book-basis.md).

## Основание и проверка

Неофициальная адаптация книги Криса Макчесни, Шона Кови и Джима Хьюлинга «Как достичь цели. Четыре дисциплины исполнения», русское издание 2013 года. Полный текст книги в репозиторий не включён.

Паспорт состояния, версии данных, явный статус «нет данных» и процедуры продолжения беседы — дополнения для работы с ИИ. Они отделены от положений книги в справке об основаниях.

Формат обоих SKILL.md проверен валидатором skill-creator; внутренние ссылки и комплектность пакетов проверены. Проведена ручная сценарная проверка инструкций. Это не независимый прогон моделей и не гарантия результатов: живые сессии после установки в аккаунт ChatGPT или профиль Hermes не проверялись.

## Лицензирование

Текущая версия навыков, инструкций и шаблонов проекта распространяется под [лицензией MIT](LICENSE).

MIT разрешает бесплатное личное и коммерческое использование, изменение, распространение, продажу и включение материалов в другие приложения и сервисы. При распространении копий или существенных частей материалов необходимо сохранять уведомление об авторских правах и текст лицензии. Материалы предоставляются без гарантий на условиях, изложенных в LICENSE.

### Изменения, улучшения и ошибки

Если вы изменили или улучшили навык либо обнаружили ошибку, пожалуйста, сообщите об этом через Issues или Pull Request этого репозитория либо по адресу **kongrog@yandex.ru**.

Для изменения или улучшения полезно указать исходную версию, краткое описание и, при желании, ссылку на изменения. Для ошибки — версию, ожидаемый и фактический результат, а также шаги воспроизведения. Не включайте пароли, ключи, личные данные или конфиденциальные рабочие материалы.

Сообщения и предоставление изменений добровольны: это просьба автора, а не дополнительное условие MIT. Использование и изменение навыка не требуют регистрации, уведомления автора или его предварительного одобрения.

### Контакты и сторонние материалы

Контакт по вопросам лицензирования, сотрудничества, улучшений и ошибок: **kongrog@yandex.ru**.

Лицензия проекта распространяется на материалы, которые правообладатели проекта вправе лицензировать. Она не предоставляет прав на исходную книгу «Как достичь цели. Четыре дисциплины исполнения», сторонние материалы или товарные знаки. Проект является неофициальной адаптацией для ИИ-помощников и не заявляет об одобрении авторами книги или FranklinCovey.
