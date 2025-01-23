import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
export interface InstanceProps {

    /**
     * Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether delete all topics and groups of the instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property remark: The remark of instance.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternalEndpoint: ros.IResolvable | string;

    /**
     * Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetEndpoint: ros.IResolvable | string;

    /**
     * Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetSecureEndpoint: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance ID created
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: Instance Type
     */
    readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrTcpEndpoint: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Instance`, which is used to create a Standard Edition instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternalEndpoint: ros.IResolvable | string;

    /**
     * Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternetEndpoint: ros.IResolvable | string;

    /**
     * Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternetSecureEndpoint: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance ID created
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: Instance Type
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrTcpEndpoint: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceName: props.instanceName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            tags: props.tags,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHttpInternalEndpoint = rosInstance.attrHttpInternalEndpoint;
        this.attrHttpInternetEndpoint = rosInstance.attrHttpInternetEndpoint;
        this.attrHttpInternetSecureEndpoint = rosInstance.attrHttpInternetSecureEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrTcpEndpoint = rosInstance.attrTcpEndpoint;
    }
}
