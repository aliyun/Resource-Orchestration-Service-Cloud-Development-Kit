// Generated from the AliCloud ROS Resource Specification

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
    readonly topology: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerMode: The triggering mode of the media workflow. Valid values:
     * OssAutoTrigger: The media workflow is automatically triggered.
     * NotInAuto: The media workflow is not automatically triggered.
     */
    readonly triggerMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMediaWorkflowProps`
 *
 * @param properties - the TypeScript properties of a `RosMediaWorkflowProps`
 *
 * @returns the result of the validation.
 */
function RosMediaWorkflowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.triggerMode && (typeof properties.triggerMode) !== 'object') {
        errors.collect(ros.propertyValidator('triggerMode', ros.validateAllowedValues)({
          data: properties.triggerMode,
          allowedValues: ["OssAutoTrigger","NotInAuto"],
        }));
    }
    errors.collect(ros.propertyValidator('triggerMode', ros.validateString)(properties.triggerMode));
    errors.collect(ros.propertyValidator('topology', ros.requiredValidator)(properties.topology));
    errors.collect(ros.propertyValidator('topology', ros.hashValidator(ros.validateAny))(properties.topology));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosMediaWorkflowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MPS::MediaWorkflow` resource
 *
 * @param properties - the TypeScript properties of a `RosMediaWorkflowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MPS::MediaWorkflow` resource.
 */
// @ts-ignore TS6133
function rosMediaWorkflowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMediaWorkflowPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Topology': ros.hashMapper(ros.objectToRosTemplate)(properties.topology),
      'TriggerMode': ros.stringToRosTemplate(properties.triggerMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MPS::MediaWorkflow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MediaWorkflow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
export class RosMediaWorkflow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MPS::MediaWorkflow";

    /**
     * @Attribute CreationTime: The time when the media workflow was created.
     */
    public readonly attrCreationTime: ros.IResolvable;

    /**
     * @Attribute MediaWorkflowId: The ID of the media workflow.
     */
    public readonly attrMediaWorkflowId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the media workflow.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute State: The state of the media workflow.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * @Attribute Topology: The topology of the media workflow.
     */
    public readonly attrTopology: ros.IResolvable;

    /**
     * @Attribute TriggerMode: The trigger mode of the media workflow.
     */
    public readonly attrTriggerMode: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The topology of the media workflow.
     * The value cannot be empty.
     * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
     * The name can be up to 64 characters in length.
     * The value must be encoded in the UTF-8 format.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
     */
    public topology: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerMode: The triggering mode of the media workflow. Valid values:
     * OssAutoTrigger: The media workflow is automatically triggered.
     * NotInAuto: The media workflow is not automatically triggered.
     */
    public triggerMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMediaWorkflowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMediaWorkflow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreationTime = this.getAtt('CreationTime');
        this.attrMediaWorkflowId = this.getAtt('MediaWorkflowId');
        this.attrName = this.getAtt('Name');
        this.attrState = this.getAtt('State');
        this.attrTopology = this.getAtt('Topology');
        this.attrTriggerMode = this.getAtt('TriggerMode');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.topology = props.topology;
        this.triggerMode = props.triggerMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            topology: this.topology,
            triggerMode: this.triggerMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMediaWorkflowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPipelineProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the result of the validation.
 */
function RosPipelinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('speed', ros.validateString)(properties.speed));
    errors.collect(ros.propertyValidator('speedLevel', ros.validateNumber)(properties.speedLevel));
    if(properties.state && (typeof properties.state) !== 'object') {
        errors.collect(ros.propertyValidator('state', ros.validateAllowedValues)({
          data: properties.state,
          allowedValues: ["Active","Paused"],
        }));
    }
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('notifyConfig', RosPipeline_NotifyConfigPropertyValidator)(properties.notifyConfig));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosPipelineProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline` resource.
 */
// @ts-ignore TS6133
function rosPipelinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPipelinePropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'NotifyConfig': rosPipelineNotifyConfigPropertyToRosTemplate(properties.notifyConfig),
      'Role': ros.stringToRosTemplate(properties.role),
      'Speed': ros.stringToRosTemplate(properties.speed),
      'SpeedLevel': ros.numberToRosTemplate(properties.speedLevel),
      'State': ros.stringToRosTemplate(properties.state),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MPS::Pipeline`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Pipeline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
export class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MPS::Pipeline";

    /**
     * @Attribute PipelineId: The ID of the MPS queue.
     */
    public readonly attrPipelineId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The new name of the MPS queue. The value can contain letters, digits, and special
     * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
     * start with a special character.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
     * or topic. For more information, see NotifyConfig.
     */
    public notifyConfig: RosPipeline.NotifyConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
     */
    public role: string | ros.IResolvable | undefined;

    /**
     * @Property speed: Pipe type. Value:
     * Boost: Double-speed transcoding
     * Standard: ordinary pipe
     * NarrowBandHDV2: Narrowband HD 2.0
     * AIVideoCover: Smart Screenshots
     * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
     * Default: Standard.
     */
    public speed: string | ros.IResolvable | undefined;

    /**
     * @Property speedLevel: Speed level.
     */
    public speedLevel: number | ros.IResolvable | undefined;

    /**
     * @Property state: The new state of the MPS queue.
     * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
     * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
     */
    public state: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPipeline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineId = this.getAtt('PipelineId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.notifyConfig = props.notifyConfig;
        this.role = props.role;
        this.speed = props.speed;
        this.speedLevel = props.speedLevel;
        this.state = props.state;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            notifyConfig: this.notifyConfig,
            role: this.role,
            speed: this.speed,
            speedLevel: this.speedLevel,
            state: this.state,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPipelinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPipeline {
    /**
     * @stability external
     */
    export interface NotifyConfigProperty {
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
/**
 * Determine whether the given properties match those of a `NotifyConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NotifyConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosPipeline_NotifyConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    return errors.wrap('supplied properties not correct for "NotifyConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline.NotifyConfig` resource
 *
 * @param properties - the TypeScript properties of a `NotifyConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline.NotifyConfig` resource.
 */
// @ts-ignore TS6133
function rosPipelineNotifyConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPipeline_NotifyConfigPropertyValidator(properties).assertSuccess();
    return {
      'Topic': ros.stringToRosTemplate(properties.topic),
      'QueueName': ros.stringToRosTemplate(properties.queueName),
    };
}
