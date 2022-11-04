import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessKey } from './ram.generated';
export { RosAccessKey as AccessKeyProperty };
/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface AccessKeyProps {
    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::AccessKey`
 */
export declare class AccessKey extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessKeyProps, enableResourcePropertyConstraint?: boolean);
}
