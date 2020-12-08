import * as ros from '@alicloud/ros-cdk-core';
import { RosLogConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLogConfig as LogConfigProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::LogConfig`
 */
export interface LogConfigProps {

    /**
     * @Property slsLogStore: Logstore name of SLS
     */
    readonly slsLogStore: string;

    /**
     * @Property slsProject: Project name of SLS
     */
    readonly slsProject: string;
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
     * @Attribute SlsLogStore: Logstore name of SLS
     */
    public readonly attrSlsLogStore: any;

    /**
     * @Attribute SlsProject: Project name of SLS
     */
    public readonly attrSlsProject: any;

    /**
     * Create a new `ALIYUN::ApiGateway::LogConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
