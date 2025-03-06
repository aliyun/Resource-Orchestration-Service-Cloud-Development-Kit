import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosMediaWorkflow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
export interface RosMediaWorkflowProps {
    /**
     * @Property name: The topology of the media workflow.
     * The value cannot be empty.
     * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
     * The name can be up to 64 characters in length.
     * The value must be encoded in the UTF-8 format.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
     */
    readonly topology: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerMode: The triggering mode of the media workflow. Valid values:
     * OssAutoTrigger: The media workflow is automatically triggered.
     * NotInAuto: The media workflow is not automatically triggered.
     */
    readonly triggerMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MPS::MediaWorkflow`, which is used to add a media workflow.
 * @Note This class does not contain additional functions, so it is recommended to use the `MediaWorkflow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
export declare class RosMediaWorkflow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MPS::MediaWorkflow";
    /**
     * @Attribute CreationTime: The time when the media workflow was created.
     */
    readonly attrCreationTime: ros.IResolvable;
    /**
     * @Attribute MediaWorkflowId: The ID of the media workflow.
     */
    readonly attrMediaWorkflowId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the media workflow.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute State: The state of the media workflow.
     */
    readonly attrState: ros.IResolvable;
    /**
     * @Attribute Topology: The topology of the media workflow.
     */
    readonly attrTopology: ros.IResolvable;
    /**
     * @Attribute TriggerMode: The trigger mode of the media workflow.
     */
    readonly attrTriggerMode: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The topology of the media workflow.
     * The value cannot be empty.
     * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
     * The name can be up to 64 characters in length.
     * The value must be encoded in the UTF-8 format.
     */
    name: string | ros.IResolvable;
    /**
     * @Property topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
     */
    topology: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerMode: The triggering mode of the media workflow. Valid values:
     * OssAutoTrigger: The media workflow is automatically triggered.
     * NotInAuto: The media workflow is not automatically triggered.
     */
    triggerMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMediaWorkflowProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
export interface RosPipelineProps {
    /**
     * @Property name: The new name of the MPS queue. The value can contain letters, digits, and special
     * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
     * start with a special character.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
     * or topic. For more information, see NotifyConfig.
     */
    readonly notifyConfig?: RosPipeline.NotifyConfigProperty | ros.IResolvable;
    /**
     * @Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
     */
    readonly role?: string | ros.IResolvable;
    /**
     * @Property speed: Pipe type. Value:
     * Boost: Double-speed transcoding
     * Standard: ordinary pipe
     * NarrowBandHDV2: Narrowband HD 2.0
     * AIVideoCover: Smart Screenshots
     * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
     * Default: Standard.
     */
    readonly speed?: string | ros.IResolvable;
    /**
     * @Property speedLevel: Speed level.
     */
    readonly speedLevel?: number | ros.IResolvable;
    /**
     * @Property state: The new state of the MPS queue.
     * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
     * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
     */
    readonly state?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MPS::Pipeline`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Pipeline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
export declare class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MPS::Pipeline";
    /**
     * @Attribute PipelineId: The ID of the MPS queue.
     */
    readonly attrPipelineId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The new name of the MPS queue. The value can contain letters, digits, and special
     * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
     * start with a special character.
     */
    name: string | ros.IResolvable;
    /**
     * @Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
     * or topic. For more information, see NotifyConfig.
     */
    notifyConfig: RosPipeline.NotifyConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
     */
    role: string | ros.IResolvable | undefined;
    /**
     * @Property speed: Pipe type. Value:
     * Boost: Double-speed transcoding
     * Standard: ordinary pipe
     * NarrowBandHDV2: Narrowband HD 2.0
     * AIVideoCover: Smart Screenshots
     * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
     * Default: Standard.
     */
    speed: string | ros.IResolvable | undefined;
    /**
     * @Property speedLevel: Speed level.
     */
    speedLevel: number | ros.IResolvable | undefined;
    /**
     * @Property state: The new state of the MPS queue.
     * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
     * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
     */
    state: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPipeline {
    /**
     * @stability external
     */
    interface NotifyConfigProperty {
        /**
         * @Property topic: undefined
         */
        readonly topic?: string | ros.IResolvable;
        /**
         * @Property queueName: undefined
         */
        readonly queueName?: string | ros.IResolvable;
    }
}
