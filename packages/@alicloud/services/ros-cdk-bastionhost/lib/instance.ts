import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './bastionhost.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export interface InstanceProps {

    /**
     * Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    readonly extendedStoragePlans: number | ros.IResolvable;

    /**
     * Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    readonly extraBandwidth: number | ros.IResolvable;

    /**
     * Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    readonly plan: number | ros.IResolvable;

    /**
     * Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    readonly startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;

    /**
     * Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows, database assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     */
    readonly version: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute InstanceId: Instance Id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::Instance`, which is used to create a bastion host.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

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
            extraBandwidth: props.extraBandwidth,
            resourceGroupId: props.resourceGroupId,
            version: props.version,
            extendedStoragePlans: props.extendedStoragePlans,
            autoRenew: props.autoRenew,
            period: props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            plan: props.plan,
            startInstanceParam: props.startInstanceParam,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}
