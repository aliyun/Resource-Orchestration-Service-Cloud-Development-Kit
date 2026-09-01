import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricStore } from './sls.generated';
export { RosMetricStore as MetricStoreProperty };
/**
 * Properties for defining a `MetricStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
 */
export interface MetricStoreProps {
    /**
     * Property logstoreName: Metric store name:
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
     * Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;
    /**
     * Property shardCount: The number of Shards.
     * Allowed Values: 1-10, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;
    /**
     * Property ttl: The lifecycle of log in the metrice store in days.
     * Allowed Values: 1-3000, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * Represents a `MetricStore`.
 */
export interface IMetricStore extends ros.IResource {
    readonly props: MetricStoreProps;
    /**
     * Attribute LogstoreName: Metric store name.
     */
    readonly attrLogstoreName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::MetricStore`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricStore`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
 */
export declare class MetricStore extends ros.Resource implements IMetricStore {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MetricStoreProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LogstoreName: Metric store name.
     */
    readonly attrLogstoreName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricStoreProps, enableResourcePropertyConstraint?: boolean);
}
