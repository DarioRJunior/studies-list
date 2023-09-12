import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from './Timer.module.scss';
import { timeForSecond } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined,
    endTask: () => void
}

export default function Timer({ selected, endTask }: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeForSecond(selected.time))
        }
    }, [selected]);

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTime(contador - 1);
                return regressiva(contador - 1);
            }
            endTask();
        }, 1000);

    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressiva(time)}>
                Começar
            </Button>
        </div>
    )
}