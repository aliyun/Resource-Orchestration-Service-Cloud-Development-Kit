// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDiskProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the result of the validation.
 */
function RosDiskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.requiredValidator)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    return errors.wrap('supplied properties not correct for "RosDiskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::Disk` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::Disk` resource.
 */
// @ts-ignore TS6133
function rosDiskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskPropsValidator(properties).assertSuccess();
    }
    return {
      Category: ros.stringToRosTemplate(properties.category),
      EnsRegionId: ros.stringToRosTemplate(properties.ensRegionId),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      Size: ros.stringToRosTemplate(properties.size),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Disk`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disk` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
export class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Disk";

    /**
     * @Attribute DiskId: The ID of the instance.
     */
    public readonly attrDiskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The category of the disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: all-flash disk.
     */
    public category: string | ros.IResolvable;

    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    public ensRegionId: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance. Set the value to PostPaid.
     */
    public instanceChargeType: string | ros.IResolvable;

    /**
     * @Property size: The size of the disk. Unit: GiB.
     */
    public size: string | ros.IResolvable;

    /**
     * @Property diskName: The name of the disk.
     */
    public diskName: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Specifies whether to encrypt the new system disk. Valid values:
     * true
     * false (default): no
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
     * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: The ID of the snapshot that you want to use to create the disk.
     * The following limits apply to the SnapshotId and Size parameters:
     * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
     * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDisk.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskId = this.getAtt('DiskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.ensRegionId = props.ensRegionId;
        this.instanceChargeType = props.instanceChargeType;
        this.size = props.size;
        this.diskName = props.diskName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.snapshotId = props.snapshotId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            ensRegionId: this.ensRegionId,
            instanceChargeType: this.instanceChargeType,
            size: this.size,
            diskName: this.diskName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            snapshotId: this.snapshotId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDiskInstanceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskInstanceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDiskInstanceAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateString)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosDiskInstanceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::DiskInstanceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskInstanceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::DiskInstanceAttachment` resource.
 */
// @ts-ignore TS6133
function rosDiskInstanceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskInstanceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      DiskId: ros.stringToRosTemplate(properties.diskId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      DeleteWithInstance: ros.stringToRosTemplate(properties.deleteWithInstance),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::DiskInstanceAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
export class RosDiskInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::DiskInstanceAttachment";

    /**
     * @Attribute DiskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    public diskId: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance
     * Value:
     * true: When the instance is released, the cloud disk is released together with the instance.
     * false: When the instance is released, the cloud disk is retained and is not released together with the instance.
     *  Empty means false by default.
     */
    public deleteWithInstance: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskInstanceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskInstanceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskId = this.getAtt('DiskId');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.instanceId = props.instanceId;
        this.deleteWithInstance = props.deleteWithInstance;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            instanceId: this.instanceId,
            deleteWithInstance: this.deleteWithInstance,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskInstanceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('ipType', ros.validateString)(properties.ipType));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('quantity', ros.requiredValidator)(properties.quantity));
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('uniqueSuffix', ros.validateBoolean)(properties.uniqueSuffix));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.requiredValidator)(properties.dataDiskSize));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DataDiskSize: ros.numberToRosTemplate(properties.dataDiskSize),
      EnsRegionId: ros.stringToRosTemplate(properties.ensRegionId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      Period: ros.numberToRosTemplate(properties.period),
      Quantity: ros.numberToRosTemplate(properties.quantity),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      HostName: ros.stringToRosTemplate(properties.hostName),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      IpType: ros.stringToRosTemplate(properties.ipType),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      UniqueSuffix: ros.booleanToRosTemplate(properties.uniqueSuffix),
      UserData: ros.stringToRosTemplate(properties.userData),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Instance`, which is used to create an Edge Node Service (ENS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Instance";

    /**
     * @Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * @Attribute AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public readonly attrAutoRenewPeriod: ros.IResolvable;

    /**
     * @Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public readonly attrDataDiskSize: ros.IResolvable;

    /**
     * @Attribute EnsRegionId: ENS Region Id.
     */
    public readonly attrEnsRegionId: ros.IResolvable;

    /**
     * @Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute ImageId: Image ID to create ens instance.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute InstanceId: InstanceId.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Instance name
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    public readonly attrIpType: ros.IResolvable;

    /**
     * @Attribute KeyPairName: SSH key pair name.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment Type.only support value Subscription.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * @Attribute PrivateIpAddress: Private IP for the instance created.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * @Attribute PrivateIps: Private IP
     */
    public readonly attrPrivateIps: ros.IResolvable;

    /**
     * @Attribute PublicIps: Public IP
     */
    public readonly attrPublicIps: ros.IResolvable;

    /**
     * @Attribute Quantity: number of instances to create.
     */
    public readonly attrQuantity: ros.IResolvable;

    /**
     * @Attribute SystemDiskSize: Disk size of the system disk.
     */
    public readonly attrSystemDiskSize: ros.IResolvable;

    /**
     * @Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    public readonly attrUniqueSuffix: ros.IResolvable;

    /**
     * @Attribute UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public readonly attrUserData: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public dataDiskSize: number | ros.IResolvable;

    /**
     * @Property ensRegionId: ENS Region Id.
     */
    public ensRegionId: string | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ens instance.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property quantity: number of instances to create.
     */
    public quantity: number | ros.IResolvable;

    /**
     * @Property systemDiskSize: Disk size of the system disk.
     */
    public systemDiskSize: number | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property hostName: The hostname of the instance.
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Instance name
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    public ipType: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.only support value Subscription.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    public uniqueSuffix: boolean | ros.IResolvable | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ens instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoRenew = this.getAtt('AutoRenew');
        this.attrAutoRenewPeriod = this.getAtt('AutoRenewPeriod');
        this.attrDataDiskSize = this.getAtt('DataDiskSize');
        this.attrEnsRegionId = this.getAtt('EnsRegionId');
        this.attrHostName = this.getAtt('HostName');
        this.attrImageId = this.getAtt('ImageId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrIpType = this.getAtt('IpType');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPeriod = this.getAtt('Period');
        this.attrPrivateIpAddress = this.getAtt('PrivateIpAddress');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrPublicIps = this.getAtt('PublicIps');
        this.attrQuantity = this.getAtt('Quantity');
        this.attrSystemDiskSize = this.getAtt('SystemDiskSize');
        this.attrUniqueSuffix = this.getAtt('UniqueSuffix');
        this.attrUserData = this.getAtt('UserData');
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataDiskSize = props.dataDiskSize;
        this.ensRegionId = props.ensRegionId;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.period = props.period;
        this.quantity = props.quantity;
        this.systemDiskSize = props.systemDiskSize;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.hostName = props.hostName;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.ipType = props.ipType;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.paymentType = props.paymentType;
        this.privateIpAddress = props.privateIpAddress;
        this.uniqueSuffix = props.uniqueSuffix;
        this.userData = props.userData;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataDiskSize: this.dataDiskSize,
            ensRegionId: this.ensRegionId,
            imageId: this.imageId,
            instanceType: this.instanceType,
            period: this.period,
            quantity: this.quantity,
            systemDiskSize: this.systemDiskSize,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            hostName: this.hostName,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            ipType: this.ipType,
            keyPairName: this.keyPairName,
            password: this.password,
            paymentType: this.paymentType,
            privateIpAddress: this.privateIpAddress,
            uniqueSuffix: this.uniqueSuffix,
            userData: this.userData,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosInstanceSecurityGroupAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceSecurityGroupAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceSecurityGroupAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "RosInstanceSecurityGroupAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::InstanceSecurityGroupAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceSecurityGroupAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::InstanceSecurityGroupAttachment` resource.
 */
// @ts-ignore TS6133
function rosInstanceSecurityGroupAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceSecurityGroupAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::InstanceSecurityGroupAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceSecurityGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export class RosInstanceSecurityGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::InstanceSecurityGroupAttachment";

    /**
     * @Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceSecurityGroupAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceSecurityGroupAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.securityGroupId = props.securityGroupId;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            securityGroupId: this.securityGroupId,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceSecurityGroupAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('publicKeyBody', ros.validateString)(properties.publicKeyBody));
    return errors.wrap('supplied properties not correct for "RosKeyPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::KeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::KeyPair` resource.
 */
// @ts-ignore TS6133
function rosKeyPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      PublicKeyBody: ros.stringToRosTemplate(properties.publicKeyBody),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
 */
export class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::KeyPair";

    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.
     */
    public readonly attrPrivateKeyBody: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: The name of the key pair. The name must conform to the following naming conventions:
     * The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public keyPairName: string | ros.IResolvable;

    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    public publicKeyBody: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairFingerPrint = this.getAtt('KeyPairFingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrPrivateKeyBody = this.getAtt('PrivateKeyBody');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.publicKeyBody = props.publicKeyBody;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            publicKeyBody: this.publicKeyBody,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkName', ros.validateString)(properties.networkName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('cidrBlock', ros.requiredValidator)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    return errors.wrap('supplied properties not correct for "RosNetworkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::Network` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::Network` resource.
 */
// @ts-ignore TS6133
function rosNetworkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkPropsValidator(properties).assertSuccess();
    }
    return {
      CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
      EnsRegionId: ros.stringToRosTemplate(properties.ensRegionId),
      Description: ros.stringToRosTemplate(properties.description),
      NetworkName: ros.stringToRosTemplate(properties.networkName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Network`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Network` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
export class RosNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Network";

    /**
     * @Attribute NetworkId: The ID of the network.
     */
    public readonly attrNetworkId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
     * 10.0.0.0\/8 (default)
     * 172.16.0.0\/12
     * 192.168.0.0\/16
     */
    public cidrBlock: string | ros.IResolvable;

    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    public ensRegionId: string | ros.IResolvable;

    /**
     * @Property description: The description of the network.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property networkName: The name of the network. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public networkName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkId = this.getAtt('NetworkId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.ensRegionId = props.ensRegionId;
        this.description = props.description;
        this.networkName = props.networkName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            ensRegionId: this.ensRegionId,
            description: this.description,
            networkName: this.networkName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosNetworkAclProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.aclEntries && (Array.isArray(properties.aclEntries) || (typeof properties.aclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntries', ros.validateLength)({
            data: properties.aclEntries.length,
            min: undefined,
            max: 40,
          }));
    }
    errors.collect(ros.propertyValidator('aclEntries', ros.listValidator(RosNetworkAcl_AclEntriesPropertyValidator))(properties.aclEntries));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('networkAclName', ros.validateString)(properties.networkAclName));
    return errors.wrap('supplied properties not correct for "RosNetworkAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAcl` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAcl` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkAclPropsValidator(properties).assertSuccess();
    }
    return {
      AclEntries: ros.listMapper(rosNetworkAclAclEntriesPropertyToRosTemplate)(properties.aclEntries),
      Description: ros.stringToRosTemplate(properties.description),
      NetworkAclName: ros.stringToRosTemplate(properties.networkAclName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::NetworkAcl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
export class RosNetworkAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::NetworkAcl";

    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    public readonly attrNetworkAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclEntries: The entry of Network ACL.
     */
    public aclEntries: Array<RosNetworkAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the network ACL.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property networkAclName: Enter a name for the network ACL.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    public networkAclName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclId = this.getAtt('NetworkAclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclEntries = props.aclEntries;
        this.description = props.description;
        this.networkAclName = props.networkAclName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclEntries: this.aclEntries,
            description: this.description,
            networkAclName: this.networkAclName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNetworkAcl {
    /**
     * @stability external
     */
    export interface AclEntriesProperty {
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
 * Determine whether the given properties match those of a `AclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAcl_AclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('cidrBlock', ros.requiredValidator)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["icmp","tcp","udp","all"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('networkAclEntryName', ros.validateString)(properties.networkAclEntryName));
    errors.collect(ros.propertyValidator('direction', ros.requiredValidator)(properties.direction));
    if(properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
          data: properties.direction,
          allowedValues: ["ingress","egress"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    return errors.wrap('supplied properties not correct for "AclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAcl.AclEntries` resource
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAcl.AclEntries` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkAcl_AclEntriesPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      Description: ros.stringToRosTemplate(properties.description),
      Priority: ros.numberToRosTemplate(properties.priority),
      CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      NetworkAclEntryName: ros.stringToRosTemplate(properties.networkAclEntryName),
      Direction: ros.stringToRosTemplate(properties.direction),
    };
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
 * Determine whether the given properties match those of a `RosNetworkAclAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkAclId', ros.requiredValidator)(properties.networkAclId));
    errors.collect(ros.propertyValidator('networkAclId', ros.validateString)(properties.networkAclId));
    errors.collect(ros.propertyValidator('networkIds', ros.requiredValidator)(properties.networkIds));
    if(properties.networkIds && (Array.isArray(properties.networkIds) || (typeof properties.networkIds) === 'string')) {
        errors.collect(ros.propertyValidator('networkIds', ros.validateLength)({
            data: properties.networkIds.length,
            min: 1,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('networkIds', ros.listValidator(ros.validateString))(properties.networkIds));
    return errors.wrap('supplied properties not correct for "RosNetworkAclAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAclAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::NetworkAclAssociation` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkAclAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      NetworkAclId: ros.stringToRosTemplate(properties.networkAclId),
      NetworkIds: ros.listMapper(ros.stringToRosTemplate)(properties.networkIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::NetworkAclAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAclAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
export class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::NetworkAclAssociation";

    /**
     * @Attribute NetworkAclId: The network acl id to associate.
     */
    public readonly attrNetworkAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    public networkAclId: string | ros.IResolvable;

    /**
     * @Property networkIds: The network id which you want to associate the network ACL.
     */
    public networkIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkAclAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclId = this.getAtt('NetworkAclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkAclId = props.networkAclId;
        this.networkIds = props.networkIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkAclId: this.networkAclId,
            networkIds: this.networkIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkAclAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('securityGroupIngress', ros.listValidator(RosSecurityGroup_SecurityGroupIngressPropertyValidator))(properties.securityGroupIngress));
    errors.collect(ros.propertyValidator('securityGroupEgress', ros.listValidator(RosSecurityGroup_SecurityGroupEgressPropertyValidator))(properties.securityGroupEgress));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      SecurityGroupEgress: ros.listMapper(rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate)(properties.securityGroupEgress),
      SecurityGroupIngress: ros.listMapper(rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate)(properties.securityGroupIngress),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::SecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
export class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::SecurityGroup";

    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    public securityGroupEgress: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    public securityGroupIngress: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.securityGroupEgress = props.securityGroupEgress;
        this.securityGroupIngress = props.securityGroupIngress;
        this.securityGroupName = props.securityGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            securityGroupEgress: this.securityGroupEgress,
            securityGroupIngress: this.securityGroupIngress,
            securityGroupName: this.securityGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSecurityGroup {
    /**
     * @stability external
     */
    export interface SecurityGroupEgressProperty {
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
/**
 * Determine whether the given properties match those of a `SecurityGroupEgressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destCidrIp', ros.validateString)(properties.destCidrIp));
    return errors.wrap('supplied properties not correct for "SecurityGroupEgressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup.SecurityGroupEgress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup.SecurityGroupEgress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
      Priority: ros.numberToRosTemplate(properties.priority),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      DestCidrIp: ros.stringToRosTemplate(properties.destCidrIp),
    };
}

export namespace RosSecurityGroup {
    /**
     * @stability external
     */
    export interface SecurityGroupIngressProperty {
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
 * Determine whether the given properties match those of a `SecurityGroupIngressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    return errors.wrap('supplied properties not correct for "SecurityGroupIngressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup.SecurityGroupIngress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::SecurityGroup.SecurityGroupIngress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
      Priority: ros.numberToRosTemplate(properties.priority),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
    };
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
 * Determine whether the given properties match those of a `RosSnapshotProps`
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the result of the validation.
 */
function RosSnapshotPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('snapshotName', ros.validateString)(properties.snapshotName));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosSnapshotProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::Snapshot` resource
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::Snapshot` resource.
 */
// @ts-ignore TS6133
function rosSnapshotPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSnapshotPropsValidator(properties).assertSuccess();
    }
    return {
      DiskId: ros.stringToRosTemplate(properties.diskId),
      EnsRegionId: ros.stringToRosTemplate(properties.ensRegionId),
      Description: ros.stringToRosTemplate(properties.description),
      SnapshotName: ros.stringToRosTemplate(properties.snapshotName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::Snapshot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
export class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Snapshot";

    /**
     * @Attribute SnapShotId: The ID of the snapshot.
     */
    public readonly attrSnapShotId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: The ID of the cloud disk.
     */
    public diskId: string | ros.IResolvable;

    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    public ensRegionId: string | ros.IResolvable;

    /**
     * @Property description: The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * By default, this parameter is left empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotName: The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public snapshotName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnapshot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnapShotId = this.getAtt('SnapShotId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.ensRegionId = props.ensRegionId;
        this.description = props.description;
        this.snapshotName = props.snapshotName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            ensRegionId: this.ensRegionId,
            description: this.description,
            snapshotName: this.snapshotName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnapshotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosVSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('cidrBlock', ros.requiredValidator)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('vSwitchName', ros.validateString)(properties.vSwitchName));
    errors.collect(ros.propertyValidator('networkId', ros.requiredValidator)(properties.networkId));
    errors.collect(ros.propertyValidator('networkId', ros.validateString)(properties.networkId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    return errors.wrap('supplied properties not correct for "RosVSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ENS::VSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ENS::VSwitch` resource.
 */
// @ts-ignore TS6133
function rosVSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
      EnsRegionId: ros.stringToRosTemplate(properties.ensRegionId),
      NetworkId: ros.stringToRosTemplate(properties.networkId),
      Description: ros.stringToRosTemplate(properties.description),
      VSwitchName: ros.stringToRosTemplate(properties.vSwitchName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ENS::VSwitch`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
export class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::VSwitch";

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
     * The subnet mask must be 16 to 29 bits in length.
     * The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
     * The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
     */
    public cidrBlock: string | ros.IResolvable;

    /**
     * @Property ensRegionId: The ID of the edge node.
     */
    public ensRegionId: string | ros.IResolvable;

    /**
     * @Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
     */
    public networkId: string | ros.IResolvable;

    /**
     * @Property description: The description of the vSwitch.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchName: The name of the vSwitch. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * Default value: null.
     */
    public vSwitchName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.ensRegionId = props.ensRegionId;
        this.networkId = props.networkId;
        this.description = props.description;
        this.vSwitchName = props.vSwitchName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            ensRegionId: this.ensRegionId,
            networkId: this.networkId,
            description: this.description,
            vSwitchName: this.vSwitchName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
