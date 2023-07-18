import * as ros from '@alicloud/ros-cdk-core';
import { RosServices } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServices as ServicesProperty };

/**
 * Properties for defining a `DATASOURCE::FC::Services`
 */
export interface ServicesProps {

    /**
     * Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::FC::Services`
 */
export class Services extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ServiceNames: The list of service names.
     */
    public readonly attrServiceNames: ros.IResolvable;

    /**
     * Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::FC::Services`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServicesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServices = new RosServices(this, id,  {
            prefix: props.prefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServices;
        this.attrServiceNames = rosServices.attrServiceNames;
        this.attrServices = rosServices.attrServices;
    }
}
