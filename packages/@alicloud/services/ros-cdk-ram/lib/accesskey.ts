import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessKey } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessKey as AccessKeyProperty };

/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface AccessKeyProps {

    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;
}

/**
 * A ROS resource type:  `ALIYUN::RAM::AccessKey`
 */
export class AccessKey extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessKeyId: Id of access key.
     */
    public readonly attrAccessKeyId: any;

    /**
     * Attribute AccessKeySecret: Secret of access key.
     */
    public readonly attrAccessKeySecret: any;

    /**
     * Attribute Status: Status of access key.
     */
    public readonly attrStatus: any;

    /**
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessKeyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessKey = new RosAccessKey(this, id,  {
            userName: props.userName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessKey;
        this.attrAccessKeyId = rosAccessKey.attrAccessKeyId;
        this.attrAccessKeySecret = rosAccessKey.attrAccessKeySecret;
        this.attrStatus = rosAccessKey.attrStatus;
    }
}
