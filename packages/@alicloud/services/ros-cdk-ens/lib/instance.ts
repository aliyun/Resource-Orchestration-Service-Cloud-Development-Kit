import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
 */
export interface InstanceProps {

    /**
     * Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly dataDiskSize: number | ros.IResolvable;

    /**
     * Property ensRegionId: ENS Region Id.
     */
    readonly ensRegionId: string | ros.IResolvable;

    /**
     * Property imageId: Image ID to create ens instance.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    readonly period: number | ros.IResolvable;

    /**
     * Property quantity: number of instances to create.
     */
    readonly quantity: number | ros.IResolvable;

    /**
     * Property systemDiskSize: Disk size of the system disk.
     */
    readonly systemDiskSize: number | ros.IResolvable;

    /**
     * Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property hostName: The hostname of the instance.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * Property instanceName: Instance name
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    readonly ipType?: string | ros.IResolvable;

    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property paymentType: Payment Type.only support value Subscription.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property privateIpAddress: Private IP for the instance created.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    readonly uniqueSuffix?: boolean | ros.IResolvable;

    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch Id to create ens instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    readonly attrAutoRenew: ros.IResolvable | string;

    /**
     * Attribute AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly attrAutoRenewPeriod: ros.IResolvable | string;

    /**
     * Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly attrDataDiskSize: ros.IResolvable | string;

    /**
     * Attribute EnsRegionId: ENS Region Id.
     */
    readonly attrEnsRegionId: ros.IResolvable | string;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute ImageId: Image ID to create ens instance.
     */
    readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: InstanceId.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    readonly attrIpType: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: SSH key pair name.
     */
    readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute PaymentType: Payment Type.only support value Subscription.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    readonly attrPeriod: ros.IResolvable | string;

    /**
     * Attribute PrivateIpAddress: Private IP for the instance created.
     */
    readonly attrPrivateIpAddress: ros.IResolvable | string;

    /**
     * Attribute PrivateIps: Private IP
     */
    readonly attrPrivateIps: ros.IResolvable | string;

    /**
     * Attribute PublicIps: Public IP
     */
    readonly attrPublicIps: ros.IResolvable | string;

    /**
     * Attribute Quantity: number of instances to create.
     */
    readonly attrQuantity: ros.IResolvable | string;

    /**
     * Attribute SystemDiskSize: Disk size of the system disk.
     */
    readonly attrSystemDiskSize: ros.IResolvable | string;

    /**
     * Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    readonly attrUniqueSuffix: ros.IResolvable | string;

    /**
     * Attribute UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly attrUserData: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::Instance`, which is used to create Edge Node Service (ENS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    public readonly attrAutoRenew: ros.IResolvable | string;

    /**
     * Attribute AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public readonly attrAutoRenewPeriod: ros.IResolvable | string;

    /**
     * Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public readonly attrDataDiskSize: ros.IResolvable | string;

    /**
     * Attribute EnsRegionId: ENS Region Id.
     */
    public readonly attrEnsRegionId: ros.IResolvable | string;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute ImageId: Image ID to create ens instance.
     */
    public readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: InstanceId.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    public readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    public readonly attrIpType: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: SSH key pair name.
     */
    public readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute PaymentType: Payment Type.only support value Subscription.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    public readonly attrPeriod: ros.IResolvable | string;

    /**
     * Attribute PrivateIpAddress: Private IP for the instance created.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable | string;

    /**
     * Attribute PrivateIps: Private IP
     */
    public readonly attrPrivateIps: ros.IResolvable | string;

    /**
     * Attribute PublicIps: Public IP
     */
    public readonly attrPublicIps: ros.IResolvable | string;

    /**
     * Attribute Quantity: number of instances to create.
     */
    public readonly attrQuantity: ros.IResolvable | string;

    /**
     * Attribute SystemDiskSize: Disk size of the system disk.
     */
    public readonly attrSystemDiskSize: ros.IResolvable | string;

    /**
     * Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    public readonly attrUniqueSuffix: ros.IResolvable | string;

    /**
     * Attribute UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public readonly attrUserData: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
            instanceName: props.instanceName,
            uniqueSuffix: props.uniqueSuffix,
            imageId: props.imageId,
            paymentType: props.paymentType,
            dataDiskSize: props.dataDiskSize,
            instanceType: props.instanceType,
            ensRegionId: props.ensRegionId,
            hostName: props.hostName,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAutoRenew = rosInstance.attrAutoRenew;
        this.attrAutoRenewPeriod = rosInstance.attrAutoRenewPeriod;
        this.attrDataDiskSize = rosInstance.attrDataDiskSize;
        this.attrEnsRegionId = rosInstance.attrEnsRegionId;
        this.attrHostName = rosInstance.attrHostName;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
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
        this.attrUniqueSuffix = rosInstance.attrUniqueSuffix;
        this.attrUserData = rosInstance.attrUserData;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
    }
}
