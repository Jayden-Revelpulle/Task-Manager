import { Task } from './shared';

const taskIDDOM = document.querySelector('.task-edit-id') as HTMLSpanElement;
const taskNameDOM = document.querySelector('.task-edit-name') as HTMLInputElement;
const taskCompletedDOM = document.querySelector('.task-edit-completed') as HTMLInputElement;
const editFormDOM = document.querySelector('.single-task-form') as HTMLFormElement;
const editBtnDOM = document.querySelector('.task-edit-btn') as HTMLButtonElement;
const editFormAlertDOM = document.querySelector('.single-task-form .form-alert') as HTMLDivElement;
const params = window.location.search;
const id = new URLSearchParams(params).get('id');
let tempName: string;

const showTask = async (): Promise<void> => {
    try {
        const {
            data: { task },
        } = await axios.get<{ task: Task }>(`/api/v1/tasks/${id}`);
        const { _id: taskID, completed, name } = task;

        taskIDDOM.textContent = taskID;
        taskNameDOM.value = name;
        tempName = name;
        if (completed) {
            taskCompletedDOM.checked = true;
        }
    } catch (error) {
        console.log(error);
    }
};

showTask();

editFormDOM.addEventListener('submit', async (e: SubmitEvent) => {
    editBtnDOM.textContent = 'Loading...';
    e.preventDefault();
    try {
        const taskName = taskNameDOM.value;
        const taskCompleted = taskCompletedDOM.checked;

        const {
            data: { task },
        } = await axios.patch<{ task: Task }>(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted,
        });

        const { _id: taskID, completed, name } = task;

        taskIDDOM.textContent = taskID;
        taskNameDOM.value = name;
        tempName = name;
        if (completed) {
            taskCompletedDOM.checked = true;
        }
        editFormAlertDOM.style.display = 'block';
        editFormAlertDOM.textContent = `success, edited task`;
        editFormAlertDOM.classList.add('text-success');
    } catch (error) {
        console.error(error);
        taskNameDOM.value = tempName;
        editFormAlertDOM.style.display = 'block';
        editFormAlertDOM.innerHTML = `error, please try again`;
    }
    editBtnDOM.textContent = 'Edit';
    setTimeout(() => {
        editFormAlertDOM.style.display = 'none';
        editFormAlertDOM.classList.remove('text-success');
    }, 3000);
}); 