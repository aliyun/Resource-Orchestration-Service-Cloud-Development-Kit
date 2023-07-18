import * as ros from '@alicloud/ros-cdk-core';
import { RosApplications } from './sae.generated';
export { RosApplications as ApplicationsProperty };
/**
 * Properties for defining a `DATASOURCE::SAE::Applications`
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
}
/**
 * A ROS resource type:  `DATASOURCE::SAE::Applications`
 */
export declare class Applications extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApplicationIds: The list of application IDs.
     */
    readonly attrApplicationIds: ros.IResolvable;
    /**
     * Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::SAE::Applications`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApplicationsProps, enableResourcePropertyConstraint?: boolean);
}
