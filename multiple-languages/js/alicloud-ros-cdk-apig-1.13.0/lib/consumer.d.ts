import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumer } from './apig.generated';
export { RosConsumer as ConsumerProperty };
/**
 * Properties for defining a `Consumer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export interface ConsumerProps {
    /**
     * Property akSkIdentityConfigs: List of AK\/SK identity configurations.
     */
    readonly akSkIdentityConfigs?: Array<RosConsumer.AkSkIdentityConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property apikeyIdentityConfig: API key identity configuration.
     */
    readonly apikeyIdentityConfig?: RosConsumer.ApikeyIdentityConfigProperty | ros.IResolvable;
    /**
     * Property description: The description of the consumer.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enable: Whether to enable the consumer.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * Property gatewayType: The type of the gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * Property jwtIdentityConfig: JWT identity configuration.
     */
    readonly jwtIdentityConfig?: RosConsumer.JwtIdentityConfigProperty | ros.IResolvable;
    /**
     * Property name: The name of the consumer.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * Represents a `Consumer`.
 */
export interface IConsumer extends ros.IResource {
    readonly props: ConsumerProps;
    /**
     * Attribute ConsumerId: The ID of the consumer.
     */
    readonly attrConsumerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Consumer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export declare class Consumer extends ros.Resource implements IConsumer {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConsumerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConsumerId: The ID of the consumer.
     */
    readonly attrConsumerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ConsumerProps, enableResourcePropertyConstraint?: boolean);
}
