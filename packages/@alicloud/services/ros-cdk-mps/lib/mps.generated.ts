// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
      Name: ros.stringToRosTemplate(properties.name),
      NotifyConfig: rosPipelineNotifyConfigPropertyToRosTemplate(properties.notifyConfig),
      Role: ros.stringToRosTemplate(properties.role),
      Speed: ros.stringToRosTemplate(properties.speed),
      SpeedLevel: ros.numberToRosTemplate(properties.speedLevel),
      State: ros.stringToRosTemplate(properties.state),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MPS::Pipeline`, which is used to create an ApsaraVideo Media Processing (MPS) queue.
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
      Topic: ros.stringToRosTemplate(properties.topic),
      QueueName: ros.stringToRosTemplate(properties.queueName),
    };
}
