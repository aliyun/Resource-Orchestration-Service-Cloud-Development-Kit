import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDisk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
export interface RosDiskProps {
    /**
     * @Property category: The category of the disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: all-flash disk.
     */
    readonly category: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the instance. Set the value to PostPaid.
     */
    readonly instanceChargeType: string | ros.IResolvable;
    /**
     * @Property size: The size of the disk. Unit: GiB.
     */
    readonly size: string | ros.IResolvable;
    /**
     * @Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;
    /**
     * @Property encrypted: Specifies whether to encrypt the new system disk. Valid values:
     * true
     * false (default): no
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
     * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property snapshotId: The ID of the snapshot that you want to use to create the disk.
     * The following limits apply to the SnapshotId and Size parameters:
     * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
     * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
     */
    readonly snapshotId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Disk`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disk` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
export declare class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Disk";
    /**
     * @Attribute DiskId: The ID of the instance.
     */
    readonly attrDiskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The category of the disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: all-flash disk.
     */
    category: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    ensRegionId: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the instance. Set the value to PostPaid.
     */
    instanceChargeType: string | ros.IResolvable;
    /**
     * @Property size: The size of the disk. Unit: GiB.
     */
    size: string | ros.IResolvable;
    /**
     * @Property diskName: The name of the disk.
     */
    diskName: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Specifies whether to encrypt the new system disk. Valid values:
     * true
     * false (default): no
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
     * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The ID of the snapshot that you want to use to create the disk.
     * The following limits apply to the SnapshotId and Size parameters:
     * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
     * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean);
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
/**
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
 */
export interface RosKeyPairProps {
    /**
     * @Property keyPairName: The name of the key pair. The name must conform to the following naming conventions:
     * The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly keyPairName: string | ros.IResolvable;
    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
 */
export declare class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::KeyPair";
    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable;
    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.
     */
    readonly attrPrivateKeyBody: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: The name of the key pair. The name must conform to the following naming conventions:
     * The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    publicKeyBody: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
export interface RosNetworkProps {
    /**
     * @Property cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
     * 10.0.0.0\/8 (default)
     * 172.16.0.0\/12
     * 192.168.0.0\/16
     */
    readonly cidrBlock: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the network.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property networkName: The name of the network. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly networkName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Network`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Network` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
export declare class RosNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Network";
    /**
     * @Attribute NetworkId: The ID of the network.
     */
    readonly attrNetworkId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
     * 10.0.0.0\/8 (default)
     * 172.16.0.0\/12
     * 192.168.0.0\/16
     */
    cidrBlock: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    ensRegionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the network.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property networkName: The name of the network. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    networkName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNetworkAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
export interface RosNetworkAclProps {
    /**
     * @Property aclEntries: The entry of Network ACL.
     */
    readonly aclEntries?: Array<RosNetworkAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the network ACL.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property networkAclName: Enter a name for the network ACL.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::NetworkAcl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
export declare class RosNetworkAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::NetworkAcl";
    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclEntries: The entry of Network ACL.
     */
    aclEntries: Array<RosNetworkAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the network ACL.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property networkAclName: Enter a name for the network ACL.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    networkAclName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNetworkAcl {
    /**
     * @stability external
     */
    interface AclEntriesProperty {
        /**
         * @Property policy: The action that is performed on network traffic that matches the rule. Valid values:
     * accept: allows network traffic.
     * drop: blocks network traffic.
         */
        readonly policy: string | ros.IResolvable;
        /**
         * @Property portRange: The port range.If you set Protocol to all or icmp, set this parameter to -1\/-1, which specifies all ports.If you set Protocol to tcp or udp, the port can be 1 to 65535. You can set this parameter to 1\/200 or 80\/80, which specifies ports 1 to 200 or port 80.
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property description: The description of the network ACL. The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property priority: The priority of the rule. Valid values: 1 to 100. Default value: 1.
         */
        readonly priority: number | ros.IResolvable;
        /**
         * @Property cidrBlock: The source CIDR block.
         */
        readonly cidrBlock: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol. Valid values: icmp: ICMP
     * tcp: TCP
     * udp: UDP
     * all: all protocols
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property networkAclEntryName: The name of the rule. The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly networkAclEntryName?: string | ros.IResolvable;
        /**
         * @Property direction: Specifies whether the ACL rule controls inbound or outbound access requests. Valid values:
     * ingress
     * egress
         */
        readonly direction: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNetworkAclAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
export interface RosNetworkAclAssociationProps {
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId: string | ros.IResolvable;
    /**
     * @Property networkIds: The network id which you want to associate the network ACL.
     */
    readonly networkIds: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::NetworkAclAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAclAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
export declare class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::NetworkAclAssociation";
    /**
     * @Attribute NetworkAclId: The network acl id to associate.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    networkAclId: string | ros.IResolvable;
    /**
     * @Property networkIds: The network id which you want to associate the network ACL.
     */
    networkIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
export interface RosSecurityGroupProps {
    /**
     * @Property description: The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    readonly securityGroupEgress?: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    readonly securityGroupIngress?: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
     */
    readonly securityGroupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::SecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
export declare class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::SecurityGroup";
    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    securityGroupEgress: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    securityGroupIngress: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityGroup {
    /**
     * @stability external
     */
    interface SecurityGroupEgressProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
        /**
         * @Property destCidrIp: Dest CIDR Ip Address range.
         */
        readonly destCidrIp?: string | ros.IResolvable;
    }
}
export declare namespace RosSecurityGroup {
    /**
     * @stability external
     */
    interface SecurityGroupIngressProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property sourceCidrIp: Source CIDR Ip Address range.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSnapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
export interface RosSnapshotProps {
    /**
     * @Property diskId: The ID of the cloud disk.
     */
    readonly diskId: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * By default, this parameter is left empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property snapshotName: The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly snapshotName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Snapshot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
export declare class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Snapshot";
    /**
     * @Attribute SnapShotId: The ID of the snapshot.
     */
    readonly attrSnapShotId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: The ID of the cloud disk.
     */
    diskId: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    ensRegionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * By default, this parameter is left empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotName: The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    snapshotName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
export interface RosVSwitchProps {
    /**
     * @Property cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
     * The subnet mask must be 16 to 29 bits in length.
     * The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
     * The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
     */
    readonly cidrBlock: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * @Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
     */
    readonly networkId: string | ros.IResolvable;
    /**
     * @Property description: The description of the vSwitch.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property vSwitchName: The name of the vSwitch. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * Default value: null.
     */
    readonly vSwitchName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::VSwitch`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
export declare class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::VSwitch";
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
     * The subnet mask must be 16 to 29 bits in length.
     * The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
     * The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
     */
    cidrBlock: string | ros.IResolvable;
    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    ensRegionId: string | ros.IResolvable;
    /**
     * @Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
     */
    networkId: string | ros.IResolvable;
    /**
     * @Property description: The description of the vSwitch.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchName: The name of the vSwitch. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * Default value: null.
     */
    vSwitchName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
