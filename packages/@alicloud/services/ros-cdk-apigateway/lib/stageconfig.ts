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
 * Represents a `StageConfig`.
 */
export interface IStageConfig extends ros.IResource {
    readonly props: StageConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::StageConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStageConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
 */
export class StageConfig extends ros.Resource implements IStageConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StageConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StageConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStageConfig = new RosStageConfig(this, id,  {
            variables: props.variables,
            stageName: props.stageName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStageConfig;
    }
}
