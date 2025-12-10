import * as ros from '@alicloud/ros-cdk-core';
import { RosApplications } from './edas.generated';
export { RosApplications as ApplicationsProperty };
/**
 * Properties for defining a `Applications`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
 */
export interface ApplicationsProps {
    /**
     * Property appName: The application name keyword.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Applications`.
 */
export interface IApplications extends ros.IResource {
    readonly props: ApplicationsProps;
    /**
     * Attribute AppIds: The list of application IDs.
     */
    readonly attrAppIds: ros.IResolvable | string;
    /**
     * Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EDAS::Applications`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplications`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
 */
export declare class Applications extends ros.Resource implements IApplications {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppIds: The list of application IDs.
     */
    readonly attrAppIds: ros.IResolvable | string;
    /**
     * Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApplicationsProps, enableResourcePropertyConstraint?: boolean);
}
