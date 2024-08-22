import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './ens.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export interface InstancesProps {
    /**
     * Property ensRegionIds: The list of ENS region IDs.
     */
    readonly ensRegionIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ensServiceId: The ID of ENS service.
     */
    readonly ensServiceId?: string | ros.IResolvable;
    /**
     * Property imageId: The image ID of instance.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property instanceIds: The list of instance IDs.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    readonly instanceResourceType?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Instances`, which is used to query the details of Edge Node Service (ENS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
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
