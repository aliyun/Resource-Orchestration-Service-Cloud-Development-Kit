import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessKey } from './ram.generated';
export { RosAccessKey as AccessKeyProperty };
/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface AccessKeyProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;
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
     * @Attribute AccessKeyId: Id of access key.
     */
    readonly attrAccessKeyId: any;
    /**
     * @Attribute AccessKeySecret: Secret of access key.
     */
    readonly attrAccessKeySecret: any;
    /**
     * @Attribute Status: Status of access key.
     */
    readonly attrStatus: any;
    /**
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessKeyProps, enableResourcePropertyConstraint?: boolean);
}
