import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ENS::Instance`
 */
export interface InstanceProps {

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
 * A ROS resource type:  `ALIYUN::ENS::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
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

    /**
     * Create a new `ALIYUN::ENS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            privateIpAddress: props.privateIpAddress,
            userData: props.userData,
            ipType: props.ipType,
            systemDiskSize: props.systemDiskSize,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period,
            quantity: props.quantity,
            internetChargeType: props.internetChargeType,
            imageId: props.imageId,
            paymentType: props.paymentType,
            dataDiskSize: props.dataDiskSize,
            ensRegionId: props.ensRegionId,
            instanceType: props.instanceType,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAutoRenew = rosInstance.attrAutoRenew;
        this.attrAutoRenewPeriod = rosInstance.attrAutoRenewPeriod;
        this.attrDataDiskSize = rosInstance.attrDataDiskSize;
        this.attrEnsRegionId = rosInstance.attrEnsRegionId;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInternetChargeType = rosInstance.attrInternetChargeType;
        this.attrIpType = rosInstance.attrIpType;
        this.attrKeyPairName = rosInstance.attrKeyPairName;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPeriod = rosInstance.attrPeriod;
        this.attrPrivateIpAddress = rosInstance.attrPrivateIpAddress;
        this.attrPrivateIps = rosInstance.attrPrivateIps;
        this.attrPublicIps = rosInstance.attrPublicIps;
        this.attrQuantity = rosInstance.attrQuantity;
        this.attrSystemDiskSize = rosInstance.attrSystemDiskSize;
        this.attrUserData = rosInstance.attrUserData;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
    }
}
