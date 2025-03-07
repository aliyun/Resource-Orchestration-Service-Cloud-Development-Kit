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
     * Property engine: Database type.
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
     * Property securityGroupId: The ID of the security group.
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
     * Property ecsHostName: The host name of the ECS instance.
     */
    readonly ecsHostName?: string | ros.IResolvable;

    /**
     * Property ecsInstanceName: The name of the ECS instance.
     */
    readonly ecsInstanceName?: string | ros.IResolvable;

    /**
     * Property ecsUniqueSuffix: The unique suffix of the ECS instance.
     */
    readonly ecsUniqueSuffix?: boolean | ros.IResolvable;

    /**
     * Property imageId: The image ID.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Network billing type. Value range: 
     * PayByBandwidth: billed based on fixed bandwidth. 
     * PayByTraffic: Pay by traffic usage.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). 
     * Range is [0,200]. Default is 1. 
     * While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly osPassword?: string | ros.IResolvable;

    /**
     * Property passwordInherit: Whether to inherit the password from the parent cluster.
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
     * Property userDataInBase64: The user data of the ECS instance.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::MyBase`, which is used to create a host in a Proprietary MyBase dedicated cluster in ApsaraDB for MyBase.
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
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            ecsClassList: props.ecsClassList,
            period: props.period,
            payType: props.payType,
            internetChargeType: props.internetChargeType,
            ecsDeploymentSetId: props.ecsDeploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            vpcId: props.vpcId,
            osPassword: props.osPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMyBase;
        this.attrInstanceIds = rosMyBase.attrInstanceIds;
        this.attrOrderIds = rosMyBase.attrOrderIds;
    }
}
