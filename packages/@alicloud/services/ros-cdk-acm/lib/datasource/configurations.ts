import * as ros from '@alicloud/ros-cdk-core';
import { RosConfigurations } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Configurations extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Configurations: The list of configurations.
     */
    public readonly attrConfigurations: ros.IResolvable;

    /**
     * Attribute DataIds: The list of configuration data IDs.
     */
    public readonly attrDataIds: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ACM::Configurations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosConfigurations = new RosConfigurations(this, id,  {
            group: props.group,
            dataId: props.dataId,
            namespaceId: props.namespaceId,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfigurations;
        this.attrConfigurations = rosConfigurations.attrConfigurations;
        this.attrDataIds = rosConfigurations.attrDataIds;
    }
}
