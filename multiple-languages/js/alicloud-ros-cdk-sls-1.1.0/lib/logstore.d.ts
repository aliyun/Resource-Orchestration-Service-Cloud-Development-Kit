import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstore } from './sls.generated';
export { RosLogstore as LogstoreProperty };
/**
 * Properties for defining a `Logstore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
 */
export interface LogstoreProps {
    /**
     * Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;
    /**
     * Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;
    /**
     * Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;
    /**
     * Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;
    /**
     * Property encryptConf: Data encryption config
     */
    readonly encryptConf?: RosLogstore.EncryptConfProperty | ros.IResolvable;
    /**
     * Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number | ros.IResolvable;
    /**
     * Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;
    /**
     * Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;
    /**
     * Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Logstore`, which is used to create a Logstore in a Log Service project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogstore`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
 */
export declare class Logstore extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LogstoreProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LogstoreName: Logstore name.
     */
    readonly attrLogstoreName: ros.IResolvable;
    /**
     * Attribute ProjectName: Project name.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoreProps, enableResourcePropertyConstraint?: boolean);
}
