import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SWAS::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SWAS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InnerIpAddress: The inner IP address of simple application server.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the simple application server.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PublicIpAddress: The public IP address of simple application server.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    planId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    dataDiskSize: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SWAS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::SWAS::Instances`
 */
export interface RosInstancesProps {
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;
    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SWAS::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
     */
    readonly attrInnerIpAddresses: ros.IResolvable;
    /**
     * @Attribute InstanceIds: The IDs of the simple application servers.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute PublicIpAddresses: The public IP addresses of simple application servers.
     */
    readonly attrPublicIpAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    planId: string | ros.IResolvable;
    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    amount: number | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    dataDiskSize: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SWAS::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
