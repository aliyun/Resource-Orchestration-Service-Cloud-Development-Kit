import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessKey } from './ram.generated';
export { RosAccessKey as AccessKeyProperty };
/**
 * Properties for defining a `AccessKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export interface AccessKeyProps {
    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AccessKey`, which is used to obtain the AccessKey pair (AccessKey ID and AccessKey secret) of a specified user and its status.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessKey`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export declare class AccessKey extends ros.Resource {
    /**
     * Attribute AccessKeyId: Id of access key.
     */
    readonly attrAccessKeyId: ros.IResolvable;
    /**
     * Attribute AccessKeySecret: Secret of access key.
     */
    readonly attrAccessKeySecret: ros.IResolvable;
    /**
     * Attribute Status: Status of access key.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessKeyProps, enableResourcePropertyConstraint?: boolean);
}
