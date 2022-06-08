import * as ros from '@alicloud/ros-cdk-core';
import { RosLogConfig } from './apigateway.generated';
export { RosLogConfig as LogConfigProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::LogConfig`
 */
export interface LogConfigProps {
    /**
     * Property slsLogStore: Logstore name of SLS
     */
    readonly slsLogStore: string | ros.IResolvable;
    /**
     * Property slsProject: Project name of SLS
     */
    readonly slsProject: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::LogConfig`
 */
export declare class LogConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SlsLogStore: Logstore name of SLS
     */
    readonly attrSlsLogStore: ros.IResolvable;
    /**
     * Attribute SlsProject: Project name of SLS
     */
    readonly attrSlsProject: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::LogConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogConfigProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=logconfig.d.ts.map