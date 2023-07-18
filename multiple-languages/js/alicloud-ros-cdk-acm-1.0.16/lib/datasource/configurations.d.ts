import * as ros from '@alicloud/ros-cdk-core';
import { RosConfigurations } from './acm.generated';
export { RosConfigurations as ConfigurationsProperty };
/**
 * Properties for defining a `DATASOURCE::ACM::Configurations`
 */
export interface ConfigurationsProps {
    /**
     * Property namespaceId: The namespace ID of configuration
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * Property appName: The app name of configuration
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * Property dataId: The data ID of configuration
     */
    readonly dataId?: string | ros.IResolvable;
    /**
     * Property group: The group of configuration
     */
    readonly group?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ACM::Configurations`
 */
export declare class Configurations extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Configurations: The list of configurations.
     */
    readonly attrConfigurations: ros.IResolvable;
    /**
     * Attribute DataIds: The list of configuration data IDs.
     */
    readonly attrDataIds: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ACM::Configurations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationsProps, enableResourcePropertyConstraint?: boolean);
}
