import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './eais.generated';
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
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    readonly attrClientInstanceId: ros.IResolvable;
    /**
     * Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceName: ros.IResolvable;
    /**
     * Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceType: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: Elastic accelerated instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: Name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceType: EAIS instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute JupyterUrl: The address of the Eais Notebook.
     */
    readonly attrJupyterUrl: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
