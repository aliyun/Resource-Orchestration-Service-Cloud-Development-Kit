import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export interface RosImageProps {
    /**
     * @Property instanceId: The ID of the mobile phone instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly imageName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::Image`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Image` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export declare class RosImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::Image";
    /**
     * @Attribute CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The image description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ImageCategory: The image type.
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * @Attribute ImageId: The image ID.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute ImageName: The image name.
     */
    readonly attrImageName: ros.IResolvable;
    /**
     * @Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    readonly attrIsSelfShared: ros.IResolvable;
    /**
     * @Attribute OsName: The display name of the OS in Chinese.
     */
    readonly attrOsName: ros.IResolvable;
    /**
     * @Attribute OsNameEn: The display name of the OS in English.
     */
    readonly attrOsNameEn: ros.IResolvable;
    /**
     * @Attribute OsType: The image OS.
     */
    readonly attrOsType: ros.IResolvable;
    /**
     * @Attribute Platform: The OS distribution.
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * @Attribute Progress: The progress of image creation.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    readonly attrUsage: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the mobile phone instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    imageName: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosInstanceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export interface RosInstanceGroupProps {
    /**
     * @Property imageId: The image id
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: instance type
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: vswitch id
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether renew the fee automatically.
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: Instance internet access charge type.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property description: Description of instance.
     * The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    readonly eipBandwidth?: number | ros.IResolvable;
    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property keyPairName: Cloud phone instance key pair name.
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    readonly resolution?: string | ros.IResolvable;
    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    readonly vncPassword?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::InstanceGroup`, which is used to create and start Elastic Cloud Phone (ECP) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export declare class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::InstanceGroup";
    /**
     * @Attribute InstanceIds: instance ids
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute OrderId: oder id
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PrivateIps: Private IP address list of created cloud phone instances. Only for VPC instance.
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * @Attribute TradePrice: price
     */
    readonly attrTradePrice: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image id
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: instance type
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: vswitch id
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    amount: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically.
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: Instance internet access charge type.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of instance.
     * The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    eipBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: Cloud phone instance key pair name.
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    resolution: string | ros.IResolvable | undefined;
    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    vncPassword: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface TagProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export interface RosKeyPairProps {
    /**
     * @Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly keyPairName: string | ros.IResolvable;
    /**
     * @Property publicKeyBody: The public key content of the key pair.
     */
    readonly publicKeyBody: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export declare class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::KeyPair";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable;
    /**
     * @Attribute KeyPairName: The name of the key pair.
     */
    readonly attrKeyPairName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @Property publicKeyBody: The public key content of the key pair.
     */
    publicKeyBody: string | ros.IResolvable;
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
 * Properties for defining a `RosRunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export interface RosRunCommandProps {
    /**
     * @Property command: The command to be executed.
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
     */
    readonly command: string | ros.IResolvable;
    /**
     * @Property instanceIds: ID of the instance executing the command.
     * Range of n: 1 ~ 10
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    readonly runAgainOn?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::RunCommand`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommand` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export declare class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::RunCommand";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property command: The command to be executed.
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
     */
    command: string | ros.IResolvable;
    /**
     * @Property instanceIds: ID of the instance executing the command.
     * Range of n: 1 ~ 10
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    runAgainOn: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
