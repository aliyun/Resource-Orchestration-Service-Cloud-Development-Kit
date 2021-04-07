import * as ros from '@alicloud/ros-cdk-core';
import { RosServerlessInstance } from './mongodb.generated';
export { RosServerlessInstance as ServerlessInstanceProperty };
/**
 * Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`
 */
export interface ServerlessInstanceProps {
    /**
     * Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property engineVersion: Database instance version.Support 4.2
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodPriceType: Charge period for created instance.
     */
    readonly periodPriceType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;
    /**
     * Property storageEngine: Database storage engine.Support WiredTiger
     */
    readonly storageEngine?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerlessInstance.TagsProperty[];
    /**
     * Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::MONGODB::ServerlessInstance`
 */
export declare class ServerlessInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::MONGODB::ServerlessInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerlessInstanceProps, enableResourcePropertyConstraint?: boolean);
}
