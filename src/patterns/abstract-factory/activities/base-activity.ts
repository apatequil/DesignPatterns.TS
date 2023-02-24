import { IActivity } from "../../factory/activities";

export abstract class BaseActivity implements IActivity {
    abstract doActivity(): void
    static activity: string
}