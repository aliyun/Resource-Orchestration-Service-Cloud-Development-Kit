import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc.generated';
export { RosProvisionConfig as ProvisionConfigProperty };
/**
 * Properties for defining a `ALIYUN::FC::ProvisionConfig`
 */
export interface ProvisionConfigProps {
    /**
     * Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string | ros.IResolvable;
    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property target: Number of provision
     */
    readonly target: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::FC::ProvisionConfig`
 */
export declare class ProvisionConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * Attribute Qualifier: The service alias
     */
    readonly attrQualifier: ros.IResolvable;
    /**
     * Attribute Resource: The resource
     */
    readonly attrResource: ros.IResolvable;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute Target: Number of provision
     */
    readonly attrTarget: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::ProvisionConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProvisionConfigProps, enableResourcePropertyConstraint?: boolean);
}
