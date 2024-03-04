import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDiskInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
export interface RosDiskInstanceAttachmentProps {
    /**
     * @Property diskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    readonly diskId: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance
     * Value:
     * true: When the instance is released, the cloud disk is released together with the instance.
     * false: When the instance is released, the cloud disk is retained and is not released together with the instance.
     *  Empty means false by default.
     */
    readonly deleteWithInstance?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::DiskInstanceAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
export declare class RosDiskInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::DiskInstanceAttachment";
    /**
     * @Attribute DiskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    diskId: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance
     * Value:
     * true: When the instance is released, the cloud disk is released together with the instance.
     * false: When the instance is released, the cloud disk is retained and is not released together with the instance.
     *  Empty means false by default.
     */
    deleteWithInstance: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskInstanceAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
 */
export interface RosInstanceProps {
    /**
     * @Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly dataDiskSize: number | ros.IResolvable;
    /**
     * @Property ensRegionId: ENS Region Id.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * @Property imageId: Image ID to create ens instance.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property quantity: number of instances to create.
     */
    readonly quantity: number | ros.IResolvable;
    /**
     * @Property systemDiskSize: Disk size of the system disk.
     */
    readonly systemDiskSize: number | ros.IResolvable;
    /**
     * @Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property hostName: The hostname of the instance.
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    readonly ipType?: string | ros.IResolvable;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type.only support value Subscription.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: Private IP for the instance created.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    readonly uniqueSuffix?: boolean | ros.IResolvable;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create ens instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Instance`, which is used to create an Edge Node Service (ENS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Instance";
    /**
     * @Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    readonly attrAutoRenew: ros.IResolvable;
    /**
     * @Attribute AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly attrAutoRenewPeriod: ros.IResolvable;
    /**
     * @Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly attrDataDiskSize: ros.IResolvable;
    /**
     * @Attribute EnsRegionId: ENS Region Id.
     */
    readonly attrEnsRegionId: ros.IResolvable;
    /**
     * @Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute ImageId: Image ID to create ens instance.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute InstanceId: InstanceId.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * @Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    readonly attrIpType: ros.IResolvable;
    /**
     * @Attribute KeyPairName: SSH key pair name.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment Type.only support value Subscription.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * @Attribute PrivateIpAddress: Private IP for the instance created.
     */
    readonly attrPrivateIpAddress: ros.IResolvable;
    /**
     * @Attribute PrivateIps: Private IP
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * @Attribute PublicIps: Public IP
     */
    readonly attrPublicIps: ros.IResolvable;
    /**
     * @Attribute Quantity: number of instances to create.
     */
    readonly attrQuantity: ros.IResolvable;
    /**
     * @Attribute SystemDiskSize: Disk size of the system disk.
     */
    readonly attrSystemDiskSize: ros.IResolvable;
    /**
     * @Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    readonly attrUniqueSuffix: ros.IResolvable;
    /**
     * @Attribute UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly attrUserData: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    dataDiskSize: number | ros.IResolvable;
    /**
     * @Property ensRegionId: ENS Region Id.
     */
    ensRegionId: string | ros.IResolvable;
    /**
     * @Property imageId: Image ID to create ens instance.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    period: number | ros.IResolvable;
    /**
     * @Property quantity: number of instances to create.
     */
    quantity: number | ros.IResolvable;
    /**
     * @Property systemDiskSize: Disk size of the system disk.
     */
    systemDiskSize: number | ros.IResolvable;
    /**
     * @Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property hostName: The hostname of the instance.
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Instance name
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    ipType: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Payment Type.only support value Subscription.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    uniqueSuffix: boolean | ros.IResolvable | undefined;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ens instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosInstanceSecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export interface RosInstanceSecurityGroupAttachmentProps {
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::InstanceSecurityGroupAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceSecurityGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export declare class RosInstanceSecurityGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::InstanceSecurityGroupAttachment";
    /**
     * @Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceSecurityGroupAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
