{
    // Enum
    // javascript
    const MAX_NUM = 6; // 최대값으로 정의
    const MAX_STUDENTS_PER_CLASS = 10; // 클래스당 등록할수있는 혹은 들어갈수있는 학생수 정의
    // 이렇게 각각 독립적인 상수도 정의할수 있다.
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    // 그러나 이런식으로 관련된 요일의 상수를 정의하는 경우에 서로 연관되어져있지만 묶을수있는 타입이
    // 따로 존재하지않음.
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    // 이런식으로 ENUM과 비슷하게 동작하도록 구현은 가능하다.

    // TypeScript
    // type DAYS = 'Monday' | 'Tuesday' | 'Wednesday';
    enum DAYS {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Satuarday,
        Sunday,
    }

    let day = DAYS.Satuarday;
    day = DAYS.Thursday;
    day = 15;
}