import * as ros from '@alicloud/ros-cdk-core';
import { RosConfigurations } from './acm.generated';
export { RosConfigurations as ConfigurationsProperty };
/**
 * Properties for defining a `Configurations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Configurations`.
 */
export interface IConfigurations extends ros.IResource {
    readonly props: ConfigurationsProps;
    /**
     * Attribute Configurations: The list of configurations.
     */
    readonly attrConfigurations: ros.IResolvable | string;
    /**
     * Attribute DataIds: The list of configuration data IDs.
     */
    readonly attrDataIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ACM::Configurations`, which is used to query the information about configurations.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConfigurations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
 */
export declare class Configurations extends ros.Resource implements IConfigurations {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConfigurationsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Configurations: The list of configurations.
     */
    readonly attrConfigurations: ros.IResolvable | string;
    /**
     * Attribute DataIds: The list of configuration data IDs.
     */
    readonly attrDataIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationsProps, enableResourcePropertyConstraint?: boolean);
}
