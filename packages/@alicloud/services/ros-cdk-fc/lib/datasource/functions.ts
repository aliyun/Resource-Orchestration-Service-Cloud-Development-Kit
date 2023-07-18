import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctions } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunctions as FunctionsProperty };

/**
 * Properties for defining a `DATASOURCE::FC::Functions`
 */
export interface FunctionsProps {

    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property prefix: Qualified returned function names must be prefixed with Prefix. For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;

    /**
     * Property qualifier: The service version, which can be version ID or alias name.
     */
    readonly qualifier?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::FC::Functions`
 */
export class Functions extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FunctionNames: The list of function names.
     */
    public readonly attrFunctionNames: ros.IResolvable;

    /**
     * Attribute Functions: The list of functions.
     */
    public readonly attrFunctions: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::FC::Functions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFunctions = new RosFunctions(this, id,  {
            serviceName: props.serviceName,
            qualifier: props.qualifier,
            prefix: props.prefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunctions;
        this.attrFunctionNames = rosFunctions.attrFunctionNames;
        this.attrFunctions = rosFunctions.attrFunctions;
    }
}
