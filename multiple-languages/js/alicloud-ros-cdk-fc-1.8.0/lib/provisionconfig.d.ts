import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc.generated';
export { RosProvisionConfig as ProvisionConfigProperty };
/**
 * Properties for defining a `ProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
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
 * Represents a `ProvisionConfig`.
 */
export interface IProvisionConfig extends ros.IResource {
    readonly props: ProvisionConfigProps;
    /**
     * Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable | string;
    /**
     * Attribute Qualifier: The service alias
     */
    readonly attrQualifier: ros.IResolvable | string;
    /**
     * Attribute Resource: The resource
     */
    readonly attrResource: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute Target: Number of provision
     */
    readonly attrTarget: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::ProvisionConfig`, which is used to create provisioned instances in Function Compute.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProvisionConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
export declare class ProvisionConfig extends ros.Resource implements IProvisionConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProvisionConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable | string;
    /**
     * Attribute Qualifier: The service alias
     */
    readonly attrQualifier: ros.IResolvable | string;
    /**
     * Attribute Resource: The resource
     */
    readonly attrResource: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute Target: Number of provision
     */
    readonly attrTarget: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProvisionConfigProps, enableResourcePropertyConstraint?: boolean);
}
