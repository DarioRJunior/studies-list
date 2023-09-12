import style from './Clock.module.scss'


interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDezena, minutesUnits] = String(minutes).padStart(2, '0');
    const [secondsDezena, secondsUnits] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minuteDezena}</span>
            <span className={style.clockNumber}>{minutesUnits}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondsDezena}</span>
            <span className={style.clockNumber}>{secondsUnits}</span>
        </>
    )
}