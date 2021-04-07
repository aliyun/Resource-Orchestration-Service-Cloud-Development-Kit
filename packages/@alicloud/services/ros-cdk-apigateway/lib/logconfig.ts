import * as ros from '@alicloud/ros-cdk-core';
import { RosLogConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class LogConfig extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SlsLogStore: Logstore name of SLS
     */
    public readonly attrSlsLogStore: ros.IResolvable;

    /**
     * Attribute SlsProject: Project name of SLS
     */
    public readonly attrSlsProject: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ApiGateway::LogConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLogConfig = new RosLogConfig(this, id,  {
            slsLogStore: props.slsLogStore,
            slsProject: props.slsProject,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogConfig;
        this.attrSlsLogStore = rosLogConfig.attrSlsLogStore;
        this.attrSlsProject = rosLogConfig.attrSlsProject;
    }
}
