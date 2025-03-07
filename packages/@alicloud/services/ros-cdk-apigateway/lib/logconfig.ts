import * as ros from '@alicloud/ros-cdk-core';
import { RosLogConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `LogConfig`.
 */
export interface ILogConfig extends ros.IResource {
    readonly props: LogConfigProps;

    /**
     * Attribute SlsLogStore: Logstore name of SLS
     */
    readonly attrSlsLogStore: ros.IResolvable | string;

    /**
     * Attribute SlsProject: Project name of SLS
     */
    readonly attrSlsProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::LogConfig`, which is used to create a log configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
 */
export class LogConfig extends ros.Resource implements ILogConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LogConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SlsLogStore: Logstore name of SLS
     */
    public readonly attrSlsLogStore: ros.IResolvable | string;

    /**
     * Attribute SlsProject: Project name of SLS
     */
    public readonly attrSlsProject: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLogConfig = new RosLogConfig(this, id,  {
            slsLogStore: props.slsLogStore,
            slsProject: props.slsProject,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogConfig;
        this.attrSlsLogStore = rosLogConfig.attrSlsLogStore;
        this.attrSlsProject = rosLogConfig.attrSlsProject;
    }
}
