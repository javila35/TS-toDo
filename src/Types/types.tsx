export type List = {
    /** ID generated to keep list unique */
    id: string;
    /** Title of the To Do list */
    title: string;
    /** Description of To Do list */
    description: string;
    /** List of actions */
    list: { action: string, id: number }[]
}