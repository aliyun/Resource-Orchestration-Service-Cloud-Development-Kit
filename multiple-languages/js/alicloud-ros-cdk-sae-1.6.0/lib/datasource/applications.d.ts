import * as ros from '@alicloud/ros-cdk-core';
import { RosApplications } from './sae.generated';
export { RosApplications as ApplicationsProperty };
/**
 * Properties for defining a `Applications`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export interface ApplicationsProps {
    /**
     * Property appName: The name of application.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    readonly fieldType?: string | ros.IResolvable;
    /**
     * Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    readonly fieldValue?: string | ros.IResolvable;
    /**
     * Property namespaceId: The ID of namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Applications`.
 */
export interface IApplications extends ros.IResource {
    readonly props: ApplicationsProps;
    /**
     * Attribute ApplicationIds: The list of application IDs.
     */
    readonly attrApplicationIds: ros.IResolvable | string;
    /**
     * Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SAE::Applications`, which is used to query applications.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplications`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export declare class Applications extends ros.Resource implements IApplications {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApplicationIds: The list of application IDs.
     */
    readonly attrApplicationIds: ros.IResolvable | string;
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
