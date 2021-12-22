// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ENS::Instance`
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
 * A ROS template type:  `ALIYUN::ENS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ENS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::ENS::Instance`.
     *
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
