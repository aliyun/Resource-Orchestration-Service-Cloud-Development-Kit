import * as ros from '@alicloud/ros-cdk-core';
import { RosMyBase } from './cddc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMyBase as MyBaseProperty };

/**
 * Properties for defining a `MyBase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export interface MyBaseProps {

    /**
     * Property ecsClassList: ECS Class List.
     */
    readonly ecsClassList: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * Property engine: The database type. Valid values:
     * - mysql
     * - tair
     */
    readonly engine: string | ros.IResolvable;

    /**
     * Property payType: Payment type, currently only supports PrePaid.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property period: The period of the subscription in months.
     */
    readonly period: number | ros.IResolvable;

    /**
     * Property securityGroupId: The security group ID. Specify multiple security groups, separated by commas (,).
     * Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: Virtual switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property autoRenew: Whether to enable auto renew.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property dedicatedHostGroupDescription: The name of the dedicated cluster.
     */
    readonly dedicatedHostGroupDescription?: string | ros.IResolvable;

    /**
     * Property dedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * Property ecsDeploymentSetId: The ID of the deployment set.
     */
    readonly ecsDeploymentSetId?: string | ros.IResolvable;

    /**
     * Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length
     * and can contain uppercase letters, lowercase letters, and digits. It cannot
     * consist of only digits.
     * For other operating systems (such as Linux): The host name must be 2 to 64
     * characters in length and can contain periods (.) to separate multiple segments.
     * Each segment can contain uppercase letters, lowercase letters, and digits.
     * Consecutive periods (.) are not allowed. The host name cannot start or end with a
     * period (.).
     */
    readonly ecsHostName?: string | ros.IResolvable;

    /**
     * Property ecsInstanceName: The instance name. It must be 2 to 128 characters in length. It must start with
     * an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
     * with http\:\/\/ or https\:\/\/. It can contain Chinese characters, English letters,
     * digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
     * value is the instance ID.
     */
    readonly ecsInstanceName?: string | ros.IResolvable;

    /**
     * Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you
     * create multiple instances. The sequential suffix starts from 001 and increments
     * up to 999. Valid values:
     * - true: Add.
     * - false (default): Do not add.
     * If HostName or InstanceName is set in a specific sorting format, and the
     * name_suffix is not set (i.e., the naming format is
     * name_prefix\[begin_number,bits]), UniqueSuffix does not take effect. The names
     * are sorted only in the specified order.
     */
    readonly ecsUniqueSuffix?: boolean | ros.IResolvable;

    /**
     * Property imageId: The custom image ID.
     * > If you want to use the default image, do not specify this parameter.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property internetChargeType: The network billing method. Valid values include the following:
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s. Valid values: 0 to 100.
     * Default value: 0. If you set this parameter to a value greater than 0, a public
     * IP address is automatically created.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property osPassword: The logon password for the host. You can set it later. The password must meet the
     * following requirements:
     * - It must be 8 to 30 characters in length.
     * - It must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * - Special characters: `()\`\~!@#$%^&\*-_+=|{}\[]:;'<>,.?\/\`
     * > * If you want to set the logon password later, leave this parameter empty.
     * >
     * > * If you want to set the logon password, use HTTPS to send requests to prevent
     * password leakage.
     */
    readonly osPassword?: string | ros.IResolvable;

    /**
     * Property passwordInherit: Use the default password of the image.
     * - false (default): Do not use.
     * - true: Use.
     * > If you use the default password of the image, do not specify the OSPassword
     * parameter.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property userData: User-defined script data, the original data is up to 16KB.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
     */
    readonly userDataInBase64?: boolean | ros.IResolvable;
}

/**
 * Represents a `MyBase`.
 */
export interface IMyBase extends ros.IResource {
    readonly props: MyBaseProps;

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances
     */
    readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute OrderIds: The order id list.
     */
    readonly attrOrderIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::MyBase`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMyBase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export class MyBase extends ros.Resource implements IMyBase {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MyBaseProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute OrderIds: The order id list.
     */
    public readonly attrOrderIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MyBaseProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMyBase = new RosMyBase(this, id,  {
            ecsInstanceName: props.ecsInstanceName,
            periodType: props.periodType,
            resourceGroupId: props.resourceGroupId,
            userData: props.userData,
            dedicatedHostGroupDescription: props.dedicatedHostGroupDescription,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            ecsUniqueSuffix: props.ecsUniqueSuffix,
            imageId: props.imageId,
            userDataInBase64: props.userDataInBase64,
            ecsHostName: props.ecsHostName,
            engine: props.engine,
            passwordInherit: props.passwordInherit,
            keyPairName: props.keyPairName,
            zoneId: props.zoneId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            ecsClassList: props.ecsClassList,
            period: props.period,
            payType: props.payType,
            internetChargeType: props.internetChargeType,
            ecsDeploymentSetId: props.ecsDeploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            osPassword: props.osPassword,
            vpcId: props.vpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMyBase;
        this.attrInstanceIds = rosMyBase.attrInstanceIds;
        this.attrOrderIds = rosMyBase.attrOrderIds;
    }
}
