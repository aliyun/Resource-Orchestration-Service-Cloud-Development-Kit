import * as ros from '@alicloud/ros-cdk-core';
import { RosStageConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStageConfig as StageConfigProperty };

/**
 * Properties for defining a `StageConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
 */
export interface StageConfigProps {

    /**
     * Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property stageName: The name of the Stage.
     */
    readonly stageName: string | ros.IResolvable;

    /**
     * Property variables: Variables in the stage, key-value pairs.
     */
    readonly variables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::StageConfig`, which is used to configure the test, staging, or production environment variables for an API group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStageConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
 */
export class StageConfig extends ros.Resource {

    /**
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
