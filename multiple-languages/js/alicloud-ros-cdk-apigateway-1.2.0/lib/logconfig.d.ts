import * as ros from '@alicloud/ros-cdk-core';
import { RosLogConfig } from './apigateway.generated';
export { RosLogConfig as LogConfigProperty };
/**
 * Properties for defining a `LogConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::LogConfig`, which is used to create a log configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
 */
export declare class LogConfig extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LogConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SlsLogStore: Logstore name of SLS
     */
    readonly attrSlsLogStore: ros.IResolvable;
    /**
     * Attribute SlsProject: Project name of SLS
     */
    readonly attrSlsProject: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogConfigProps, enableResourcePropertyConstraint?: boolean);
}
