// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ENS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly dataDiskSize: number;

    /**
     * @Property ensRegionId: ENS Region Id.
     */
    readonly ensRegionId: string;

    /**
     * @Property imageId: Image ID to create ens instance.
     */
    readonly imageId: string;

    /**
     * @Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    readonly period: number;

    /**
     * @Property quantity: number of instances to create.
     */
    readonly quantity: number;

    /**
     * @Property systemDiskSize: Disk size of the system disk.
     */
    readonly systemDiskSize: number;

    /**
     * @Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    readonly internetChargeType?: string;

    /**
     * @Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    readonly ipType?: string;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property paymentType: Payment Type.only support value Subscription.
     */
    readonly paymentType?: string;

    /**
     * @Property privateIpAddress:
     */
    readonly privateIpAddress?: string;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create ens instance.
     */
    readonly vSwitchId?: string;
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
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.requiredValidator)(properties.dataDiskSize));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    errors.collect(ros.propertyValidator('ensRegionId', ros.requiredValidator)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('ensRegionId', ros.validateString)(properties.ensRegionId));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
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
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      IpType: ros.stringToRosTemplate(properties.ipType),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
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
    public readonly attrAutoRenew: any;

    /**
     * @Attribute AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public readonly attrAutoRenewPeriod: any;

    /**
     * @Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public readonly attrDataDiskSize: any;

    /**
     * @Attribute EnsRegionId: ENS Region Id.
     */
    public readonly attrEnsRegionId: any;

    /**
     * @Attribute ImageId: Image ID to create ens instance.
     */
    public readonly attrImageId: any;

    /**
     * @Attribute InstanceId: InstanceId.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    public readonly attrInstanceType: any;

    /**
     * @Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    public readonly attrInternetChargeType: any;

    /**
     * @Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    public readonly attrIpType: any;

    /**
     * @Attribute KeyPairName: SSH key pair name.
     */
    public readonly attrKeyPairName: any;

    /**
     * @Attribute PaymentType: Payment Type.only support value Subscription.
     */
    public readonly attrPaymentType: any;

    /**
     * @Attribute Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    public readonly attrPeriod: any;

    /**
     * @Attribute PrivateIpAddress: Private IP for the instance created.
     */
    public readonly attrPrivateIpAddress: any;

    /**
     * @Attribute PrivateIps: Private IP
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute Quantity: number of instances to create.
     */
    public readonly attrQuantity: any;

    /**
     * @Attribute SystemDiskSize: Disk size of the system disk.
     */
    public readonly attrSystemDiskSize: any;

    /**
     * @Attribute UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public readonly attrUserData: any;

    /**
     * @Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    public readonly attrVSwitchId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public dataDiskSize: number;

    /**
     * @Property ensRegionId: ENS Region Id.
     */
    public ensRegionId: string;

    /**
     * @Property imageId: Image ID to create ens instance.
     */
    public imageId: string;

    /**
     * @Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    public instanceType: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    public period: number;

    /**
     * @Property quantity: number of instances to create.
     */
    public quantity: number;

    /**
     * @Property systemDiskSize: Disk size of the system disk.
     */
    public systemDiskSize: number;

    /**
     * @Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    public internetChargeType: string | undefined;

    /**
     * @Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    public ipType: string | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property paymentType: Payment Type.only support value Subscription.
     */
    public paymentType: string | undefined;

    /**
     * @Property privateIpAddress:
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ens instance.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::ENS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoRenew = ros.Token.asString(this.getAtt('AutoRenew'));
        this.attrAutoRenewPeriod = ros.Token.asString(this.getAtt('AutoRenewPeriod'));
        this.attrDataDiskSize = ros.Token.asString(this.getAtt('DataDiskSize'));
        this.attrEnsRegionId = ros.Token.asString(this.getAtt('EnsRegionId'));
        this.attrImageId = ros.Token.asString(this.getAtt('ImageId'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrInstanceType = ros.Token.asString(this.getAtt('InstanceType'));
        this.attrInternetChargeType = ros.Token.asString(this.getAtt('InternetChargeType'));
        this.attrIpType = ros.Token.asString(this.getAtt('IpType'));
        this.attrKeyPairName = ros.Token.asString(this.getAtt('KeyPairName'));
        this.attrPaymentType = ros.Token.asString(this.getAtt('PaymentType'));
        this.attrPeriod = ros.Token.asString(this.getAtt('Period'));
        this.attrPrivateIpAddress = ros.Token.asString(this.getAtt('PrivateIpAddress'));
        this.attrPrivateIps = ros.Token.asString(this.getAtt('PrivateIps'));
        this.attrPublicIps = ros.Token.asString(this.getAtt('PublicIps'));
        this.attrQuantity = ros.Token.asString(this.getAtt('Quantity'));
        this.attrSystemDiskSize = ros.Token.asString(this.getAtt('SystemDiskSize'));
        this.attrUserData = ros.Token.asString(this.getAtt('UserData'));
        this.attrVSwitchId = ros.Token.asString(this.getAtt('VSwitchId'));

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
        this.internetChargeType = props.internetChargeType;
        this.ipType = props.ipType;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.paymentType = props.paymentType;
        this.privateIpAddress = props.privateIpAddress;
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
            internetChargeType: this.internetChargeType,
            ipType: this.ipType,
            keyPairName: this.keyPairName,
            password: this.password,
            paymentType: this.paymentType,
            privateIpAddress: this.privateIpAddress,
            userData: this.userData,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
