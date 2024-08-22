// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCampaign`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export interface RosCampaignProps {

    /**
     * @Property name: The name of the campaign.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property remark: The remark of the campaign.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCampaignProps`
 *
 * @param properties - the TypeScript properties of a `RosCampaignProps`
 *
 * @returns the result of the validation.
 */
function RosCampaignPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCampaignProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Campaign` resource
 *
 * @param properties - the TypeScript properties of a `RosCampaignProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Campaign` resource.
 */
// @ts-ignore TS6133
function rosCampaignPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCampaignPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Campaign`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Campaign` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export class RosCampaign extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Campaign";

    /**
     * @Attribute CampaignId: The Campaign ID created this time.
     */
    public readonly attrCampaignId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the campaign.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property remark: The remark of the campaign.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCampaignProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCampaign.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCampaignId = this.getAtt('CampaignId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCampaignPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInferenceJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export interface RosInferenceJobProps {

    /**
     * @Property algorithm: The algorithm of inference job.
     */
    readonly algorithm: string | ros.IResolvable;

    /**
     * @Property campaignId: The campaign id of inference job.
     */
    readonly campaignId: string | ros.IResolvable;

    /**
     * @Property dataPath: The input data path of inference job.
     */
    readonly dataPath: string | ros.IResolvable;

    /**
     * @Property name: The name of inference job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property targetPath: The output result path of inference job.
     */
    readonly targetPath: string | ros.IResolvable;

    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    readonly trainingJobId: string | ros.IResolvable;

    /**
     * @Property userConfig: The user config of inference job.
     */
    readonly userConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property remark: The remark of inference job.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForInferenceFinish?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInferenceJobProps`
 *
 * @param properties - the TypeScript properties of a `RosInferenceJobProps`
 *
 * @returns the result of the validation.
 */
function RosInferenceJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dataPath', ros.requiredValidator)(properties.dataPath));
    errors.collect(ros.propertyValidator('dataPath', ros.validateString)(properties.dataPath));
    errors.collect(ros.propertyValidator('trainingJobId', ros.requiredValidator)(properties.trainingJobId));
    errors.collect(ros.propertyValidator('trainingJobId', ros.validateString)(properties.trainingJobId));
    errors.collect(ros.propertyValidator('campaignId', ros.requiredValidator)(properties.campaignId));
    errors.collect(ros.propertyValidator('campaignId', ros.validateString)(properties.campaignId));
    errors.collect(ros.propertyValidator('targetPath', ros.requiredValidator)(properties.targetPath));
    errors.collect(ros.propertyValidator('targetPath', ros.validateString)(properties.targetPath));
    errors.collect(ros.propertyValidator('userConfig', ros.requiredValidator)(properties.userConfig));
    errors.collect(ros.propertyValidator('userConfig', ros.hashValidator(ros.validateAny))(properties.userConfig));
    errors.collect(ros.propertyValidator('algorithm', ros.requiredValidator)(properties.algorithm));
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    errors.collect(ros.propertyValidator('waitForInferenceFinish', ros.validateBoolean)(properties.waitForInferenceFinish));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosInferenceJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::InferenceJob` resource
 *
 * @param properties - the TypeScript properties of a `RosInferenceJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::InferenceJob` resource.
 */
// @ts-ignore TS6133
function rosInferenceJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInferenceJobPropsValidator(properties).assertSuccess();
    }
    return {
      'Algorithm': ros.stringToRosTemplate(properties.algorithm),
      'CampaignId': ros.stringToRosTemplate(properties.campaignId),
      'DataPath': ros.stringToRosTemplate(properties.dataPath),
      'Name': ros.stringToRosTemplate(properties.name),
      'TargetPath': ros.stringToRosTemplate(properties.targetPath),
      'TrainingJobId': ros.stringToRosTemplate(properties.trainingJobId),
      'UserConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.userConfig),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'WaitForInferenceFinish': ros.booleanToRosTemplate(properties.waitForInferenceFinish),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::InferenceJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InferenceJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export class RosInferenceJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::InferenceJob";

    /**
     * @Attribute GroupId: The related group id of infernce job result.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute InferenceJobId: The id of inference job.
     */
    public readonly attrInferenceJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property algorithm: The algorithm of inference job.
     */
    public algorithm: string | ros.IResolvable;

    /**
     * @Property campaignId: The campaign id of inference job.
     */
    public campaignId: string | ros.IResolvable;

    /**
     * @Property dataPath: The input data path of inference job.
     */
    public dataPath: string | ros.IResolvable;

    /**
     * @Property name: The name of inference job.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property targetPath: The output result path of inference job.
     */
    public targetPath: string | ros.IResolvable;

    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    public trainingJobId: string | ros.IResolvable;

    /**
     * @Property userConfig: The user config of inference job.
     */
    public userConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property remark: The remark of inference job.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    public waitForInferenceFinish: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInferenceJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInferenceJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.attrInferenceJobId = this.getAtt('InferenceJobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.algorithm = props.algorithm;
        this.campaignId = props.campaignId;
        this.dataPath = props.dataPath;
        this.name = props.name;
        this.targetPath = props.targetPath;
        this.trainingJobId = props.trainingJobId;
        this.userConfig = props.userConfig;
        this.remark = props.remark;
        this.waitForInferenceFinish = props.waitForInferenceFinish;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            algorithm: this.algorithm,
            campaignId: this.campaignId,
            dataPath: this.dataPath,
            name: this.name,
            targetPath: this.targetPath,
            trainingJobId: this.trainingJobId,
            userConfig: this.userConfig,
            remark: this.remark,
            waitForInferenceFinish: this.waitForInferenceFinish,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInferenceJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTrainingJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export interface RosTrainingJobProps {

    /**
     * @Property algorithm: The algorithm used in training.
     */
    readonly algorithm: string | ros.IResolvable;

    /**
     * @Property campaignId: The related campaign Id.
     */
    readonly campaignId: string | ros.IResolvable;

    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    readonly dataPath: string | ros.IResolvable;

    /**
     * @Property name: The name of training job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    readonly userConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property remark: The remark of training job.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForTrainingFinish?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTrainingJobProps`
 *
 * @param properties - the TypeScript properties of a `RosTrainingJobProps`
 *
 * @returns the result of the validation.
 */
function RosTrainingJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dataPath', ros.requiredValidator)(properties.dataPath));
    errors.collect(ros.propertyValidator('dataPath', ros.validateString)(properties.dataPath));
    errors.collect(ros.propertyValidator('campaignId', ros.requiredValidator)(properties.campaignId));
    errors.collect(ros.propertyValidator('campaignId', ros.validateString)(properties.campaignId));
    errors.collect(ros.propertyValidator('userConfig', ros.requiredValidator)(properties.userConfig));
    errors.collect(ros.propertyValidator('userConfig', ros.hashValidator(ros.validateAny))(properties.userConfig));
    errors.collect(ros.propertyValidator('algorithm', ros.requiredValidator)(properties.algorithm));
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    errors.collect(ros.propertyValidator('waitForTrainingFinish', ros.validateBoolean)(properties.waitForTrainingFinish));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTrainingJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::TrainingJob` resource
 *
 * @param properties - the TypeScript properties of a `RosTrainingJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::TrainingJob` resource.
 */
// @ts-ignore TS6133
function rosTrainingJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrainingJobPropsValidator(properties).assertSuccess();
    }
    return {
      'Algorithm': ros.stringToRosTemplate(properties.algorithm),
      'CampaignId': ros.stringToRosTemplate(properties.campaignId),
      'DataPath': ros.stringToRosTemplate(properties.dataPath),
      'Name': ros.stringToRosTemplate(properties.name),
      'UserConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.userConfig),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'WaitForTrainingFinish': ros.booleanToRosTemplate(properties.waitForTrainingFinish),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrainingJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export class RosTrainingJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::TrainingJob";

    /**
     * @Attribute TrainingJobId: The training job id.
     */
    public readonly attrTrainingJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property algorithm: The algorithm used in training.
     */
    public algorithm: string | ros.IResolvable;

    /**
     * @Property campaignId: The related campaign Id.
     */
    public campaignId: string | ros.IResolvable;

    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    public dataPath: string | ros.IResolvable;

    /**
     * @Property name: The name of training job.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    public userConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property remark: The remark of training job.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    public waitForTrainingFinish: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrainingJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrainingJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrainingJobId = this.getAtt('TrainingJobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.algorithm = props.algorithm;
        this.campaignId = props.campaignId;
        this.dataPath = props.dataPath;
        this.name = props.name;
        this.userConfig = props.userConfig;
        this.remark = props.remark;
        this.waitForTrainingFinish = props.waitForTrainingFinish;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            algorithm: this.algorithm,
            campaignId: this.campaignId,
            dataPath: this.dataPath,
            name: this.name,
            userConfig: this.userConfig,
            remark: this.remark,
            waitForTrainingFinish: this.waitForTrainingFinish,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrainingJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
