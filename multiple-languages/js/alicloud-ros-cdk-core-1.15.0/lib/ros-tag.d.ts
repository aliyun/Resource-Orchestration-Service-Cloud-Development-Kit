export interface RosTag {
    readonly key: string;
    readonly value?: string;
}
export declare function tagFactory(tags?: {
    [key: string]: any;
}[]): RosTag[];
