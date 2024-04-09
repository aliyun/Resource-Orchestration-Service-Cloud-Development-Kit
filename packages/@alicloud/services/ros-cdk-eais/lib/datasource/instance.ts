import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './eais.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: Elastic accelerated instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EAIS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
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
            instanceId: props.instanceId,
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
