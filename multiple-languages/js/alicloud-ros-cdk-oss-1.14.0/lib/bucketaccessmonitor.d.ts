import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketAccessMonitor } from './oss.generated';
export { RosBucketAccessMonitor as BucketAccessMonitorProperty };
/**
 * Properties for defining a `BucketAccessMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
 */
export interface BucketAccessMonitorProps {
    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;
}
/**
 * Represents a `BucketAccessMonitor`.
 */
export interface IBucketAccessMonitor extends ros.IResource {
    readonly props: BucketAccessMonitorProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketAccessMonitor`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketAccessMonitor`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
 */
export declare class BucketAccessMonitor extends ros.Resource implements IBucketAccessMonitor {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketAccessMonitorProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketAccessMonitorProps, enableResourcePropertyConstraint?: boolean);
}
