import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
/**
 * The key used when CDK path is embedded in **ROS template** metadata (not cdk metadata).
 */
export declare const PATH_METADATA_KEY = "aliyun:ros:path";
export declare enum SynthesisMessageLevel {
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}
export interface MetadataEntryResult extends cxschema.MetadataEntry {
    /**
     * The path in which this entry was defined.
     */
    readonly path: string;
}
/**
 * Metadata associated with the objects in the stack's Construct tree
 */
export declare type StackMetadata = {
    [path: string]: cxschema.MetadataEntry[];
};
export interface SynthesisMessage {
    readonly level: SynthesisMessageLevel;
    readonly id: string;
    readonly entry: cxschema.MetadataEntry;
}
