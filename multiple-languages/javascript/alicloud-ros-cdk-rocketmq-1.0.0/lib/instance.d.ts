import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq.generated';
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
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternalEndpoint: any;
    /**
     * @Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetEndpoint: any;
    /**
     * @Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetSecureEndpoint: any;
    /**
     * @Attribute InstanceId: Instance ID created
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute InstanceType: Instance Type
     */
    readonly attrInstanceType: any;
    /**
     * @Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrTcpEndpoint: any;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
