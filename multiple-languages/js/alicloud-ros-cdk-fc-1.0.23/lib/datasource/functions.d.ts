import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctions } from './fc.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Functions`, which is used to query functions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunctions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
export declare class Functions extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FunctionsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FunctionNames: The list of function names.
     */
    readonly attrFunctionNames: ros.IResolvable;
    /**
     * Attribute Functions: The list of functions.
     */
    readonly attrFunctions: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionsProps, enableResourcePropertyConstraint?: boolean);
}
