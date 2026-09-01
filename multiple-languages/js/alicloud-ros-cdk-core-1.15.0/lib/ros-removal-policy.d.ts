export declare enum RemovalPolicy {
    DESTROY = "destroy",
    RETAIN = "retain"
}
export interface RemovalPolicyOptions {
    readonly defaultPolicy?: RemovalPolicy;
    readonly applyToUpdateReplacePolicy?: boolean;
}
