import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-image
 */
export interface RosImageProps {
    /**
     * @Property imageId: The ID of the image. Fuzzy search is supported.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ENS::Image`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Image` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-image
 */
export declare class RosImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ENS::Image";
    /**
     * @Attribute Architecture: The image architecture. Valid values:
- **i386**
- **x86_64**
     */
    readonly attrArchitecture: ros.IResolvable;
    /**
     * @Attribute ComputeType: Computing type. ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
     */
    readonly attrComputeType: ros.IResolvable;
    /**
     * @Attribute CreateTime: The image creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute ImageName: The name of the image.
     */
    readonly attrImageName: ros.IResolvable;
    /**
     * @Attribute ImageOwnerAlias: The source of the image. Valid values:
- **others**: a custom image that is shared by other Alibaba Cloud accounts.
- **self**: your own custom image.
     */
    readonly attrImageOwnerAlias: ros.IResolvable;
    /**
     * @Attribute ImageSize: The size of the image. Unit: GiB.
     */
    readonly attrImageSize: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance corresponding to the image.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OsVersion: The operating system version.
     */
    readonly attrOsVersion: ros.IResolvable;
    /**
     * @Attribute Platform: The type of operating system used by the image. Valid values:
- **centos**
- **ubuntu**
- **alios**
- **debian**
- **rhel**
- **windows**
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * @Attribute SnapshotId: The ID of the snapshot corresponding to the image.
     */
    readonly attrSnapshotId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The ID of the image. Fuzzy search is supported.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ENS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ENS::Instance";
    /**
     * @Attribute DataDisk: Data disk specifications.
     */
    readonly attrDataDisk: ros.IResolvable;
    /**
     * @Attribute EnsRegionId: The node ID. When ScheduleAreaLevel is Region, EnsRegionId is required. When ScheduleAreaLevel is Big,Middle,Small, EnsRegionId is invalid.
     */
    readonly attrEnsRegionId: ros.IResolvable;
    /**
     * @Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The instance name. Example value: test-InstanceName. It must be 2 to 128 characters in length and must start with an uppercase or lowercase letter or a Chinese character. It cannot start with http:// or https. Can contain Chinese, English, numbers, half-width colons (:), underscores (_), periods (.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: The specification of the instance. Example value: ens.sn1.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute InternetMaxBandwidthOut: Maximum public network bandwidth. The field type is Long, and the precision may be lost during serialization/deserialization.
     */
    readonly attrInternetMaxBandwidthOut: ros.IResolvable;
    /**
     * @Attribute NetworkId: The ID of the network.
     */
    readonly attrNetworkId: ros.IResolvable;
    /**
     * @Attribute PaymentType: Instance payment method.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PrivateIpAddress: The private IP address. Can only be used for node-level scheduling. If a private IP address is specified, the number of instances can only be one, and both the private IP address and the vSwitch ID are not empty, the private IP address takes effect.
     */
    readonly attrPrivateIpAddress: ros.IResolvable;
    /**
     * @Attribute SecurityId: ID of the security group to which the instance belongs.
     */
    readonly attrSecurityId: ros.IResolvable;
    /**
     * @Attribute SystemDisk: System Disk Specification. SystemDisk is a non-required parameter when InstanceType is x86_pm,x86_bmi,x86_bm,pc_bmi, or arm_bmi. SystemDisk is a required parameter when instanceType is other specification families.
     */
    readonly attrSystemDisk: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch to which the instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ENS::Instances`, which is used to query the information about Edge Node Service (ENS) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ENS::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
