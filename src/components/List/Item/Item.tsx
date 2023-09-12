import { ITask } from '../../../types/tasks';
import style from './Item.module.scss';

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void;
}

export default function Item(
    {
        task,
        time,
        select,
        completed,
        id,
        selectTask
    }: Props) {
    return (
        <li
            className={`${style.item} ${select ? style.itemSelected : ''} ${completed ? style.itemCompleted : ''}`}
            onClick={() => !completed && selectTask({
                task,
                time,
                select,
                completed,
                id
            }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluded} aria-label="tarefa-completada"></span>}
        </li>
    )
}