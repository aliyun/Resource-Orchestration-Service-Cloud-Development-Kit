import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctions } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunctions as FunctionsProperty };

/**
 * Properties for defining a `Functions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Functions`.
 */
export interface IFunctions extends ros.IResource {
    readonly props: FunctionsProps;

    /**
     * Attribute FunctionNames: The list of function names.
     */
    readonly attrFunctionNames: ros.IResolvable | string;

    /**
     * Attribute Functions: The list of functions.
     */
    readonly attrFunctions: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Functions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunctions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
export class Functions extends ros.Resource implements IFunctions {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FunctionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FunctionNames: The list of function names.
     */
    public readonly attrFunctionNames: ros.IResolvable | string;

    /**
     * Attribute Functions: The list of functions.
     */
    public readonly attrFunctions: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFunctions = new RosFunctions(this, id,  {
            serviceName: props.serviceName,
            qualifier: props.qualifier,
            prefix: props.prefix,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunctions;
        this.attrFunctionNames = rosFunctions.attrFunctionNames;
        this.attrFunctions = rosFunctions.attrFunctions;
    }
}
