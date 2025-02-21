import * as ros from '@alicloud/ros-cdk-core';
import { RosMediaWorkflow } from './mps.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMediaWorkflow as MediaWorkflowProperty };

/**
 * Properties for defining a `MediaWorkflow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
export interface MediaWorkflowProps {

    /**
     * Property name: The topology of the media workflow.
     * The value cannot be empty.
     * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
     * The name can be up to 64 characters in length.
     * The value must be encoded in the UTF-8 format.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
     */
    readonly topology: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property triggerMode: The triggering mode of the media workflow. Valid values:
     * OssAutoTrigger: The media workflow is automatically triggered.
     * NotInAuto: The media workflow is not automatically triggered.
     */
    readonly triggerMode?: string | ros.IResolvable;
}

/**
 * Represents a `MediaWorkflow`.
 */
export interface IMediaWorkflow extends ros.IResource {
    readonly props: MediaWorkflowProps;

    /**
     * Attribute CreationTime: The time when the media workflow was created.
     */
    readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute MediaWorkflowId: The ID of the media workflow.
     */
    readonly attrMediaWorkflowId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the media workflow.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute State: The state of the media workflow.
     */
    readonly attrState: ros.IResolvable | string;

    /**
     * Attribute Topology: The topology of the media workflow.
     */
    readonly attrTopology: ros.IResolvable | string;

    /**
     * Attribute TriggerMode: The trigger mode of the media workflow.
     */
    readonly attrTriggerMode: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MPS::MediaWorkflow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMediaWorkflow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
export class MediaWorkflow extends ros.Resource implements IMediaWorkflow {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MediaWorkflowProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreationTime: The time when the media workflow was created.
     */
    public readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute MediaWorkflowId: The ID of the media workflow.
     */
    public readonly attrMediaWorkflowId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the media workflow.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute State: The state of the media workflow.
     */
    public readonly attrState: ros.IResolvable | string;

    /**
     * Attribute Topology: The topology of the media workflow.
     */
    public readonly attrTopology: ros.IResolvable | string;

    /**
     * Attribute TriggerMode: The trigger mode of the media workflow.
     */
    public readonly attrTriggerMode: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MediaWorkflowProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMediaWorkflow = new RosMediaWorkflow(this, id,  {
            triggerMode: props.triggerMode,
            topology: props.topology,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMediaWorkflow;
        this.attrCreationTime = rosMediaWorkflow.attrCreationTime;
        this.attrMediaWorkflowId = rosMediaWorkflow.attrMediaWorkflowId;
        this.attrName = rosMediaWorkflow.attrName;
        this.attrState = rosMediaWorkflow.attrState;
        this.attrTopology = rosMediaWorkflow.attrTopology;
        this.attrTriggerMode = rosMediaWorkflow.attrTriggerMode;
    }
}
