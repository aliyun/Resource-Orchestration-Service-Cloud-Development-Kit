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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Campaign`, which is used to create an operational activity.
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
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export interface RosGroupProps {

    /**
     * @Property name: The name of the user group.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property source: Crowd source. Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    readonly source: number | ros.IResolvable;

    /**
     * @Property algorithm: Association algorithm. This must be specified when Source is 4(Algorithm).
     */
    readonly algorithm?: string | ros.IResolvable;

    /**
     * @Property column: Mobile phone number column name. The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    readonly column?: string | ros.IResolvable;

    /**
     * @Property filter: Filter condition. This condition can be specified when Source is 3(MaxCompute Table).
     */
    readonly filter?: string | ros.IResolvable;

    /**
     * @Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    readonly inferenceJobId?: string | ros.IResolvable;

    /**
     * @Property phoneNumber: Whether to include mobile phone numbers. People with mobile phone numbers can be used for reach plans.
     */
    readonly phoneNumber?: string | ros.IResolvable;

    /**
     * @Property project: MaxCompute (ODPS) project name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly project?: string | ros.IResolvable;

    /**
     * @Property remark: The notes of the user group.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property table: MaxCompute (ODPS) table name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly table?: string | ros.IResolvable;

    /**
     * @Property text: The text of the phone number. This must be specified when Source is 0(Enter phone numbers).
     */
    readonly text?: string | ros.IResolvable;

    /**
     * @Property uri: File address. It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    readonly uri?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('table', ros.validateString)(properties.table));
    errors.collect(ros.propertyValidator('inferenceJobId', ros.validateString)(properties.inferenceJobId));
    errors.collect(ros.propertyValidator('filter', ros.validateString)(properties.filter));
    errors.collect(ros.propertyValidator('column', ros.validateString)(properties.column));
    errors.collect(ros.propertyValidator('phoneNumber', ros.validateString)(properties.phoneNumber));
    errors.collect(ros.propertyValidator('text', ros.validateString)(properties.text));
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: [0,1,2,3,4],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateNumber)(properties.source));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Source': ros.numberToRosTemplate(properties.source),
      'Algorithm': ros.stringToRosTemplate(properties.algorithm),
      'Column': ros.stringToRosTemplate(properties.column),
      'Filter': ros.stringToRosTemplate(properties.filter),
      'InferenceJobId': ros.stringToRosTemplate(properties.inferenceJobId),
      'PhoneNumber': ros.stringToRosTemplate(properties.phoneNumber),
      'Project': ros.stringToRosTemplate(properties.project),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'Table': ros.stringToRosTemplate(properties.table),
      'Text': ros.stringToRosTemplate(properties.text),
      'Uri': ros.stringToRosTemplate(properties.uri),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Group";

    /**
     * @Attribute Amount: The number of the user group.
     */
    public readonly attrAmount: ros.IResolvable;

    /**
     * @Attribute CreatedTime: The creation time of the user group.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * @Attribute Id: The ID of the user group.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the user group.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the user group.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property source: Crowd source. Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    public source: number | ros.IResolvable;

    /**
     * @Property algorithm: Association algorithm. This must be specified when Source is 4(Algorithm).
     */
    public algorithm: string | ros.IResolvable | undefined;

    /**
     * @Property column: Mobile phone number column name. The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    public column: string | ros.IResolvable | undefined;

    /**
     * @Property filter: Filter condition. This condition can be specified when Source is 3(MaxCompute Table).
     */
    public filter: string | ros.IResolvable | undefined;

    /**
     * @Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    public inferenceJobId: string | ros.IResolvable | undefined;

    /**
     * @Property phoneNumber: Whether to include mobile phone numbers. People with mobile phone numbers can be used for reach plans.
     */
    public phoneNumber: string | ros.IResolvable | undefined;

    /**
     * @Property project: MaxCompute (ODPS) project name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    public project: string | ros.IResolvable | undefined;

    /**
     * @Property remark: The notes of the user group.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property table: MaxCompute (ODPS) table name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    public table: string | ros.IResolvable | undefined;

    /**
     * @Property text: The text of the phone number. This must be specified when Source is 0(Enter phone numbers).
     */
    public text: string | ros.IResolvable | undefined;

    /**
     * @Property uri: File address. It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    public uri: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAmount = this.getAtt('Amount');
        this.attrCreatedTime = this.getAtt('CreatedTime');
        this.attrId = this.getAtt('Id');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.source = props.source;
        this.algorithm = props.algorithm;
        this.column = props.column;
        this.filter = props.filter;
        this.inferenceJobId = props.inferenceJobId;
        this.phoneNumber = props.phoneNumber;
        this.project = props.project;
        this.remark = props.remark;
        this.table = props.table;
        this.text = props.text;
        this.uri = props.uri;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            source: this.source,
            algorithm: this.algorithm,
            column: this.column,
            filter: this.filter,
            inferenceJobId: this.inferenceJobId,
            phoneNumber: this.phoneNumber,
            project: this.project,
            remark: this.remark,
            table: this.table,
            text: this.text,
            uri: this.uri,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::InferenceJob`, which is used to create a prediction job.
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
 * Properties for defining a `RosSignature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export interface RosSignatureProps {

    /**
     * @Property name: The name of the Signature.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: Application instructions.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSignatureProps`
 *
 * @param properties - the TypeScript properties of a `RosSignatureProps`
 *
 * @returns the result of the validation.
 */
function RosSignaturePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosSignatureProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Signature` resource
 *
 * @param properties - the TypeScript properties of a `RosSignatureProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Signature` resource.
 */
// @ts-ignore TS6133
function rosSignaturePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSignaturePropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Signature`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Signature` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export class RosSignature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Signature";

    /**
     * @Attribute CreatedTime: The creation time of the Signature.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * @Attribute Description: Application instructions.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Id: The ID of the Signature.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the Signature.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Reason: Review recommendations.
     */
    public readonly attrReason: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the Signature.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: Application instructions.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSignature.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreatedTime = this.getAtt('CreatedTime');
        this.attrDescription = this.getAtt('Description');
        this.attrId = this.getAtt('Id');
        this.attrName = this.getAtt('Name');
        this.attrReason = this.getAtt('Reason');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSignaturePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export interface RosTemplateProps {

    /**
     * @Property content: The content of the template.
     */
    readonly content: string | ros.IResolvable;

    /**
     * @Property description: For the template content, please keep the total word count within 70 words. The excess will be charged as long text messages. Each text message is recorded as 67 words.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property name: The name of the template.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The type of the template. The following values are supported:
     * 0: Verification code.
     * 1: SMS notification.
     * 2: Promotional SMS.
     */
    readonly type: number | ros.IResolvable;

    /**
     * @Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signature?: string | ros.IResolvable;

    /**
     * @Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signatureId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('signatureId', ros.validateString)(properties.signatureId));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateNumber)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('signature', ros.validateString)(properties.signature));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIPlugin::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'Content': ros.stringToRosTemplate(properties.content),
      'Description': ros.stringToRosTemplate(properties.description),
      'Name': ros.stringToRosTemplate(properties.name),
      'Type': ros.numberToRosTemplate(properties.type),
      'Signature': ros.stringToRosTemplate(properties.signature),
      'SignatureId': ros.stringToRosTemplate(properties.signatureId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Template";

    /**
     * @Attribute CreatedTime: The creation time of the Signature.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * @Attribute Description: Application instructions.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Id: The ID of the Signature.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the Signature.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Reason: Review recommendations.
     */
    public readonly attrReason: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property content: The content of the template.
     */
    public content: string | ros.IResolvable;

    /**
     * @Property description: For the template content, please keep the total word count within 70 words. The excess will be charged as long text messages. Each text message is recorded as 67 words.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property name: The name of the template.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The type of the template. The following values are supported:
     * 0: Verification code.
     * 1: SMS notification.
     * 2: Promotional SMS.
     */
    public type: number | ros.IResolvable;

    /**
     * @Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
     */
    public signature: string | ros.IResolvable | undefined;

    /**
     * @Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
     */
    public signatureId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreatedTime = this.getAtt('CreatedTime');
        this.attrDescription = this.getAtt('Description');
        this.attrId = this.getAtt('Id');
        this.attrName = this.getAtt('Name');
        this.attrReason = this.getAtt('Reason');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.description = props.description;
        this.name = props.name;
        this.type = props.type;
        this.signature = props.signature;
        this.signatureId = props.signatureId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            content: this.content,
            description: this.description,
            name: this.name,
            type: this.type,
            signature: this.signature,
            signatureId: this.signatureId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`, which is used to create a training job.
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
