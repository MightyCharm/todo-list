
// factory function for creating todo's
export function todo(projectName, title, description, dueDate, priority) {
    return {
        projectName,
        title,
        description,
        dueDate,
        priority,
    }
}