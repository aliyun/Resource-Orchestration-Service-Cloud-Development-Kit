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
 * This class encapsulates and extends the ROS resource type `ALIYUN::EAIS::Instance`, which is used to create an Elastic Accelerated Computing Instances (EAIS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    public readonly attrClientInstanceId: ros.IResolvable;

    /**
     * Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceName: ros.IResolvable;

    /**
     * Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceType: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute InstanceId: Elastic accelerated instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceType: EAIS instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute JupyterUrl: The address of the Eais Notebook.
     */
    public readonly attrJupyterUrl: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

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
