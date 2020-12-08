import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstore } from './sls.generated';
export { RosLogstore as LogstoreProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Logstore`
 */
export interface LogstoreProps {
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string;
    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;
    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;
    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;
    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number;
    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;
    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number;
    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number;
}
/**
 * A ROS resource type:  `ALIYUN::SLS::Logstore`
 */
export declare class Logstore extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute LogstoreName: Logstore name.
     */
    readonly attrLogstoreName: any;
    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoreProps, enableResourcePropertyConstraint?: boolean);
}
