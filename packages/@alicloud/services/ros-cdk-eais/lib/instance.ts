import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './eais.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-instance
 */
export interface InstanceProps {

    /**
     * Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
     */
    readonly createWithNotebook: boolean | ros.IResolvable;

    /**
     * Property instanceType: EAIS instance type.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property environmentVar: Setting environment variables in eais instance on Initialization.
     */
    readonly environmentVar?: Array<RosInstance.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property paymentType: The payment type of the resource.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    readonly attrClientInstanceId: ros.IResolvable | string;

    /**
     * Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceName: ros.IResolvable | string;

    /**
     * Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceType: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Elastic accelerated instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: EAIS instance type.
     */
    readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute JupyterUrl: The address of the Eais Notebook.
     */
    readonly attrJupyterUrl: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EAIS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    public readonly attrClientInstanceId: ros.IResolvable | string;

    /**
     * Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceName: ros.IResolvable | string;

    /**
     * Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceType: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Elastic accelerated instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceType: EAIS instance type.
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute JupyterUrl: The address of the Eais Notebook.
     */
    public readonly attrJupyterUrl: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    public readonly attrZoneId: ros.IResolvable | string;

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
            instanceName: props.instanceName,
            resourceGroupId: props.resourceGroupId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            paymentType: props.paymentType,
            instanceType: props.instanceType,
            environmentVar: props.environmentVar,
            createWithNotebook: props.createWithNotebook,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClientInstanceId = rosInstance.attrClientInstanceId;
        this.attrClientInstanceName = rosInstance.attrClientInstanceName;
        this.attrClientInstanceType = rosInstance.attrClientInstanceType;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrJupyterUrl = rosInstance.attrJupyterUrl;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSecurityGroupId = rosInstance.attrSecurityGroupId;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
