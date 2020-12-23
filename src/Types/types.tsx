export type List = {
    /** ID generated to keep list unique */
    id: string;
    /** Title of the To Do list */
    title: string;
    /** Description of To Do list */
    description: string;
    /** List of actions */
    actionList: Array<Action>;
}

// This Array type isn't working... 
// Or it's not working in the component side.
export interface Action {
    action: string;
    id: number;
}