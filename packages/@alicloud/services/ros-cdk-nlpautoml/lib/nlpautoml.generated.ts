// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Dataset`
 */
export interface RosDatasetProps {

    /**
     * @Property datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    readonly datasetName: string | ros.IResolvable;

    /**
     * @Property projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
     */
    readonly projectId: number | ros.IResolvable;

    /**
     * @Property datasetRecord: Upload labeled data to the dataset.
     */
    readonly datasetRecord?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('datasetName', ros.requiredValidator)(properties.datasetName));
    if(properties.datasetName && (typeof properties.datasetName) !== 'object') {
        errors.collect(ros.propertyValidator('datasetName', ros.validateAllowedPattern)({
          data: properties.datasetName,
          reg: /^[a-zA-Z][-_a-zA-Z0-9]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('datasetName', ros.validateString)(properties.datasetName));
    errors.collect(ros.propertyValidator('projectId', ros.requiredValidator)(properties.projectId));
    errors.collect(ros.propertyValidator('projectId', ros.validateNumber)(properties.projectId));
    if(properties.datasetRecord && (Array.isArray(properties.datasetRecord) || (typeof properties.datasetRecord) === 'string')) {
        errors.collect(ros.propertyValidator('datasetRecord', ros.validateLength)({
            data: properties.datasetRecord.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('datasetRecord', ros.listValidator(ros.validateString))(properties.datasetRecord));
    return errors.wrap('supplied properties not correct for "RosDatasetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Dataset` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Dataset` resource.
 */
// @ts-ignore TS6133
function rosDatasetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
      DatasetName: ros.stringToRosTemplate(properties.datasetName),
      ProjectId: ros.numberToRosTemplate(properties.projectId),
      DatasetRecord: ros.listMapper(ros.stringToRosTemplate)(properties.datasetRecord),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLPAUTOML::Dataset`
 */
export class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Dataset";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DatasetId: The dataset ID.
     */
    public readonly attrDatasetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    public datasetName: string | ros.IResolvable;

    /**
     * @Property projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
     */
    public projectId: number | ros.IResolvable;

    /**
     * @Property datasetRecord: Upload labeled data to the dataset.
     */
    public datasetRecord: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::NLPAUTOML::Dataset`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDataset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatasetId = this.getAtt('DatasetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetName = props.datasetName;
        this.projectId = props.projectId;
        this.datasetRecord = props.datasetRecord;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetName: this.datasetName,
            projectId: this.projectId,
            datasetRecord: this.datasetRecord,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Model`
 */
export interface RosModelProps {

    /**
     * @Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
     */
    readonly datasetIdList: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property modelName: The name of model.
     */
    readonly modelName: string | ros.IResolvable;

    /**
     * @Property modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
     * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
     */
    readonly modelType: string | ros.IResolvable;

    /**
     * @Property projectId: The project id to which the model belongs
     */
    readonly projectId: number | ros.IResolvable;

    /**
     * @Property lr: Learning rate.
     */
    readonly lr?: string | ros.IResolvable;

    /**
     * @Property nepochs: Number of training dataset iterations
     */
    readonly nepochs?: string | ros.IResolvable;

    /**
     * @Property testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
     */
    readonly testDatasetIdList?: Array<number | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosModelProps`
 *
 * @param properties - the TypeScript properties of a `RosModelProps`
 *
 * @returns the result of the validation.
 */
function RosModelPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('datasetIdList', ros.requiredValidator)(properties.datasetIdList));
    if(properties.datasetIdList && (Array.isArray(properties.datasetIdList) || (typeof properties.datasetIdList) === 'string')) {
        errors.collect(ros.propertyValidator('datasetIdList', ros.validateLength)({
            data: properties.datasetIdList.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('datasetIdList', ros.listValidator(ros.validateNumber))(properties.datasetIdList));
    errors.collect(ros.propertyValidator('modelName', ros.requiredValidator)(properties.modelName));
    errors.collect(ros.propertyValidator('modelName', ros.validateString)(properties.modelName));
    if(properties.testDatasetIdList && (Array.isArray(properties.testDatasetIdList) || (typeof properties.testDatasetIdList) === 'string')) {
        errors.collect(ros.propertyValidator('testDatasetIdList', ros.validateLength)({
            data: properties.testDatasetIdList.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('testDatasetIdList', ros.listValidator(ros.validateNumber))(properties.testDatasetIdList));
    errors.collect(ros.propertyValidator('nepochs', ros.validateString)(properties.nepochs));
    errors.collect(ros.propertyValidator('lr', ros.validateString)(properties.lr));
    errors.collect(ros.propertyValidator('projectId', ros.requiredValidator)(properties.projectId));
    errors.collect(ros.propertyValidator('projectId', ros.validateNumber)(properties.projectId));
    errors.collect(ros.propertyValidator('modelType', ros.requiredValidator)(properties.modelType));
    if(properties.modelType && (typeof properties.modelType) !== 'object') {
        errors.collect(ros.propertyValidator('modelType', ros.validateAllowedValues)({
          data: properties.modelType,
          allowedValues: ["NLP-NER-Chinese","NLP-NER-BERT","NLP-NER-English","NLP-TextCategory-ensemble","NLP-TextCategory-CNN2","NLP-TextCategory-FT","NLP-TextCategory-SA","NLP-TextCategory-STC","classification_bert","NLP-Keyphrase-textrank","NLP-RE-PCNN","NLP-RelationClassficiation-BERT","NLP-RE-BERT-NOISE","structbert_matching"," NLP-TextCategory-CNN2","classification_cnn","NLP-Resume-Chinese","NLP-Resume-Pretrain-Chinese","NLP-Resume-Pretrain-English"],
        }));
    }
    errors.collect(ros.propertyValidator('modelType', ros.validateString)(properties.modelType));
    return errors.wrap('supplied properties not correct for "RosModelProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Model` resource
 *
 * @param properties - the TypeScript properties of a `RosModelProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Model` resource.
 */
// @ts-ignore TS6133
function rosModelPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosModelPropsValidator(properties).assertSuccess();
    }
    return {
      DatasetIdList: ros.listMapper(ros.numberToRosTemplate)(properties.datasetIdList),
      ModelName: ros.stringToRosTemplate(properties.modelName),
      ModelType: ros.stringToRosTemplate(properties.modelType),
      ProjectId: ros.numberToRosTemplate(properties.projectId),
      Lr: ros.stringToRosTemplate(properties.lr),
      Nepochs: ros.stringToRosTemplate(properties.nepochs),
      TestDatasetIdList: ros.listMapper(ros.numberToRosTemplate)(properties.testDatasetIdList),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLPAUTOML::Model`
 */
export class RosModel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Model";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ModelId: The ID of model.
     */
    public readonly attrModelId: ros.IResolvable;

    /**
     * @Attribute ModelVersion: The version of model.
     */
    public readonly attrModelVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
     */
    public datasetIdList: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property modelName: The name of model.
     */
    public modelName: string | ros.IResolvable;

    /**
     * @Property modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
     * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
     */
    public modelType: string | ros.IResolvable;

    /**
     * @Property projectId: The project id to which the model belongs
     */
    public projectId: number | ros.IResolvable;

    /**
     * @Property lr: Learning rate.
     */
    public lr: string | ros.IResolvable | undefined;

    /**
     * @Property nepochs: Number of training dataset iterations
     */
    public nepochs: string | ros.IResolvable | undefined;

    /**
     * @Property testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
     */
    public testDatasetIdList: Array<number | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::NLPAUTOML::Model`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosModelProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosModel.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrModelId = this.getAtt('ModelId');
        this.attrModelVersion = this.getAtt('ModelVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetIdList = props.datasetIdList;
        this.modelName = props.modelName;
        this.modelType = props.modelType;
        this.projectId = props.projectId;
        this.lr = props.lr;
        this.nepochs = props.nepochs;
        this.testDatasetIdList = props.testDatasetIdList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetIdList: this.datasetIdList,
            modelName: this.modelName,
            modelType: this.modelType,
            projectId: this.projectId,
            lr: this.lr,
            nepochs: this.nepochs,
            testDatasetIdList: this.testDatasetIdList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosModelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Project`
 */
export interface RosProjectProps {

    /**
     * @Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    readonly projectDescription: string | ros.IResolvable;

    /**
     * @Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    readonly projectType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z][-_a-zA-Z0-9]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('projectType', ros.requiredValidator)(properties.projectType));
    if(properties.projectType && (typeof properties.projectType) !== 'object') {
        errors.collect(ros.propertyValidator('projectType', ros.validateAllowedValues)({
          data: properties.projectType,
          allowedValues: ["ner","textCategory","baseRelation","textMatching","sentimentAnalysis","resumeExtract","reviewAnalysis"],
        }));
    }
    errors.collect(ros.propertyValidator('projectType', ros.validateString)(properties.projectType));
    errors.collect(ros.propertyValidator('projectDescription', ros.requiredValidator)(properties.projectDescription));
    if(properties.projectDescription && (typeof properties.projectDescription) !== 'object') {
        errors.collect(ros.propertyValidator('projectDescription', ros.validateAllowedPattern)({
          data: properties.projectDescription,
          reg: /^[a-zA-Z][-_a-zA-Z0-9]{1,256}$/
        }));
    }
    errors.collect(ros.propertyValidator('projectDescription', ros.validateString)(properties.projectDescription));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLPAUTOML::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      ProjectDescription: ros.stringToRosTemplate(properties.projectDescription),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      ProjectType: ros.stringToRosTemplate(properties.projectType),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLPAUTOML::Project`
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Project";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ProjectId: The project ID
     */
    public readonly attrProjectId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    public projectDescription: string | ros.IResolvable;

    /**
     * @Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    public projectType: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::NLPAUTOML::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectId = this.getAtt('ProjectId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectDescription = props.projectDescription;
        this.projectName = props.projectName;
        this.projectType = props.projectType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectDescription: this.projectDescription,
            projectName: this.projectName,
            projectType: this.projectType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
