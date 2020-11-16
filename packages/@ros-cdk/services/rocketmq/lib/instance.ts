import * as ros from '@ros-cdk/core';
import { RosInstance } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Instance`
 */
export interface InstanceProps {

    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    readonly instanceName: string;

    /**
     * @Property remark: The remark of instance.
     */
    readonly remark?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute InstanceId: Instance ID created
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute InstanceType: Instance Type
     */
    public readonly attrInstanceType: any;

    /**
     * Create a new `ALIYUN::ROCKETMQ::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            instanceName: props.instanceName,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceType = rosInstance.attrInstanceType;
    }
}
