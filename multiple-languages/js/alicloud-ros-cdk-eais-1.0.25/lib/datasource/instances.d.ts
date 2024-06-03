import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './eais.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export interface InstancesProps {
    /**
     * Property instanceId: Elastic accelerated instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property instanceType: EAIS instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EAIS::Instances`, which is used to query the basic information about created Elastic Accelerated Computing Instances (EAIS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export declare class Instances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
