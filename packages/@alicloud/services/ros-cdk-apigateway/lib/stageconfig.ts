import * as ros from '@alicloud/ros-cdk-core';
import { RosStageConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStageConfig as StageConfigProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::StageConfig`
 */
export interface StageConfigProps {

    /**
     * Property groupId: The id of the Group.
     */
    readonly groupId: string;

    /**
     * Property stageName: The name of the Stage.
     */
    readonly stageName: string;

    /**
     * Property variables: Variables in the stage, key-value pairs.
     */
    readonly variables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::StageConfig`
 */
export class StageConfig extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ApiGateway::StageConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StageConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosStageConfig = new RosStageConfig(this, id,  {
            variables: props.variables,
            stageName: props.stageName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStageConfig;
    }
}
