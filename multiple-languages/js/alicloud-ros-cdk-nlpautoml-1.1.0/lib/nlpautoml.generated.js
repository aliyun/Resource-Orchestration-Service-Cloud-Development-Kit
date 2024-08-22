"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosProject = exports.RosModel = exports.RosDataset = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosDatasetProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('datasetName', ros.requiredValidator)(properties.datasetName));
    if (properties.datasetName && (typeof properties.datasetName) !== 'object') {
        errors.collect(ros.propertyValidator('datasetName', ros.validateAllowedPattern)({
            data: properties.datasetName,
            reg: /^[a-zA-Z][-_a-zA-Z0-9]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('datasetName', ros.validateString)(properties.datasetName));
    errors.collect(ros.propertyValidator('projectId', ros.requiredValidator)(properties.projectId));
    errors.collect(ros.propertyValidator('projectId', ros.validateNumber)(properties.projectId));
    if (properties.datasetRecord && (Array.isArray(properties.datasetRecord) || (typeof properties.datasetRecord) === 'string')) {
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
function rosDatasetPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
        'DatasetName': ros.stringToRosTemplate(properties.datasetName),
        'ProjectId': ros.numberToRosTemplate(properties.projectId),
        'DatasetRecord': ros.listMapper(ros.stringToRosTemplate)(properties.datasetRecord),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Dataset`, which is used to create a dataset.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
 */
class RosDataset extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDataset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatasetId = this.getAtt('DatasetId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetName = props.datasetName;
        this.projectId = props.projectId;
        this.datasetRecord = props.datasetRecord;
    }
    get rosProperties() {
        return {
            datasetName: this.datasetName,
            projectId: this.projectId,
            datasetRecord: this.datasetRecord,
        };
    }
    renderProperties(props) {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDataset = RosDataset;
/**
 * The resource type name for this resource class.
 */
RosDataset.ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Dataset";
/**
 * Determine whether the given properties match those of a `RosModelProps`
 *
 * @param properties - the TypeScript properties of a `RosModelProps`
 *
 * @returns the result of the validation.
 */
function RosModelPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('datasetIdList', ros.requiredValidator)(properties.datasetIdList));
    if (properties.datasetIdList && (Array.isArray(properties.datasetIdList) || (typeof properties.datasetIdList) === 'string')) {
        errors.collect(ros.propertyValidator('datasetIdList', ros.validateLength)({
            data: properties.datasetIdList.length,
            min: 1,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('datasetIdList', ros.listValidator(ros.validateNumber))(properties.datasetIdList));
    errors.collect(ros.propertyValidator('modelName', ros.requiredValidator)(properties.modelName));
    errors.collect(ros.propertyValidator('modelName', ros.validateString)(properties.modelName));
    if (properties.testDatasetIdList && (Array.isArray(properties.testDatasetIdList) || (typeof properties.testDatasetIdList) === 'string')) {
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
    if (properties.modelType && (typeof properties.modelType) !== 'object') {
        errors.collect(ros.propertyValidator('modelType', ros.validateAllowedValues)({
            data: properties.modelType,
            allowedValues: ["NLP-NER-Chinese", "NLP-NER-BERT", "NLP-NER-English", "NLP-TextCategory-ensemble", "NLP-TextCategory-CNN2", "NLP-TextCategory-FT", "NLP-TextCategory-SA", "NLP-TextCategory-STC", "classification_bert", "NLP-Keyphrase-textrank", "NLP-RE-PCNN", "NLP-RelationClassficiation-BERT", "NLP-RE-BERT-NOISE", "structbert_matching", " NLP-TextCategory-CNN2", "classification_cnn", "NLP-Resume-Chinese", "NLP-Resume-Pretrain-Chinese", "NLP-Resume-Pretrain-English"],
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
function rosModelPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosModelPropsValidator(properties).assertSuccess();
    }
    return {
        'DatasetIdList': ros.listMapper(ros.numberToRosTemplate)(properties.datasetIdList),
        'ModelName': ros.stringToRosTemplate(properties.modelName),
        'ModelType': ros.stringToRosTemplate(properties.modelType),
        'ProjectId': ros.numberToRosTemplate(properties.projectId),
        'Lr': ros.stringToRosTemplate(properties.lr),
        'Nepochs': ros.stringToRosTemplate(properties.nepochs),
        'TestDatasetIdList': ros.listMapper(ros.numberToRosTemplate)(properties.testDatasetIdList),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Model`, which is used to create a model.
 * @Note This class does not contain additional functions, so it is recommended to use the `Model` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
 */
class RosModel extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosModelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosModel = RosModel;
/**
 * The resource type name for this resource class.
 */
RosModel.ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Model";
/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if (properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
            data: properties.projectName,
            reg: /^[a-zA-Z][-_a-zA-Z0-9]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('projectType', ros.requiredValidator)(properties.projectType));
    if (properties.projectType && (typeof properties.projectType) !== 'object') {
        errors.collect(ros.propertyValidator('projectType', ros.validateAllowedValues)({
            data: properties.projectType,
            allowedValues: ["ner", "textCategory", "baseRelation", "textMatching", "sentimentAnalysis", "resumeExtract", "reviewAnalysis"],
        }));
    }
    errors.collect(ros.propertyValidator('projectType', ros.validateString)(properties.projectType));
    errors.collect(ros.propertyValidator('projectDescription', ros.requiredValidator)(properties.projectDescription));
    if (properties.projectDescription && (typeof properties.projectDescription) !== 'object') {
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
function rosProjectPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
        'ProjectDescription': ros.stringToRosTemplate(properties.projectDescription),
        'ProjectName': ros.stringToRosTemplate(properties.projectName),
        'ProjectType': ros.stringToRosTemplate(properties.projectType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Project`, which is used to create a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
 */
class RosProject extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectId = this.getAtt('ProjectId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectDescription = props.projectDescription;
        this.projectName = props.projectName;
        this.projectType = props.projectType;
    }
    get rosProperties() {
        return {
            projectDescription: this.projectDescription,
            projectName: this.projectName,
            projectType: this.projectType,
        };
    }
    renderProperties(props) {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosProject = RosProject;
/**
 * The resource type name for this resource class.
 */
RosProject.ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Project";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmxwYXV0b21sLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5scGF1dG9tbC5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXdCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixHQUFHLEVBQUUsK0JBQStCO1NBQ3JDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FB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O1FBQ3ZCLE9BQU87WUFDSCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDRCQUE0QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQXRETCxnQ0F1REM7QUF0REc7O0dBRUc7QUFDb0IsaUNBQXNCLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RhdGFzZXRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxwYXV0b21sLWRhdGFzZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEYXRhc2V0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRhdGFzZXROYW1lOiBUaGUgbmFtZSBvZiBkYXRhc2V0LiBDYW5ub3Qgc3RhcnQgd2l0aCBudW1iZXJzIGFuZCBzeW1ib2xzLCBhbmQgdGhlIGxlbmd0aCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDMyIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YXNldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0SWQ6IFRoZSBJRCBvZiBwcm9qZWN0LiBUbyBjcmVhdGUgYSBkYXRhc2V0IHVuZGVyIGEgY2VydGFpbiBwcm9qZWN0LCBmaWxsIGluIHRoZSB0YXJnZXQgcHJvamVjdCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0SWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0UmVjb3JkOiBVcGxvYWQgbGFiZWxlZCBkYXRhIHRvIHRoZSBkYXRhc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFzZXRSZWNvcmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RhdGFzZXRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGF0YXNldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RhdGFzZXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGFzZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRhdGFzZXROYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5kYXRhc2V0TmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGF0YXNldE5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGFzZXROYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRhdGFzZXROYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aXVstX2EtekEtWjAtOV17MSwzMn0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGF0YXNldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm9qZWN0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wcm9qZWN0SWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRhdGFzZXRSZWNvcmQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kYXRhc2V0UmVjb3JkKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGF0YXNldFJlY29yZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGFzZXRSZWNvcmQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGF0YXNldFJlY29yZC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldFJlY29yZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuZGF0YXNldFJlY29yZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEYXRhc2V0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6RGF0YXNldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGF0YXNldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpOTFBBVVRPTUw6OkRhdGFzZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGF0YXNldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGF0YXNldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEYXRhc2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF0YXNldE5hbWUpLFxuICAgICAgJ1Byb2plY3RJZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdElkKSxcbiAgICAgICdEYXRhc2V0UmVjb3JkJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZGF0YXNldFJlY29yZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TkxQQVVUT01MOjpEYXRhc2V0YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBkYXRhc2V0LlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBEYXRhc2V0YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1ubHBhdXRvbWwtZGF0YXNldFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGF0YXNldCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TkxQQVVUT01MOjpEYXRhc2V0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERhdGFzZXRJZDogVGhlIGRhdGFzZXQgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhc2V0SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRhdGFzZXROYW1lOiBUaGUgbmFtZSBvZiBkYXRhc2V0LiBDYW5ub3Qgc3RhcnQgd2l0aCBudW1iZXJzIGFuZCBzeW1ib2xzLCBhbmQgdGhlIGxlbmd0aCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDMyIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRhdGFzZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdElkOiBUaGUgSUQgb2YgcHJvamVjdC4gVG8gY3JlYXRlIGEgZGF0YXNldCB1bmRlciBhIGNlcnRhaW4gcHJvamVjdCwgZmlsbCBpbiB0aGUgdGFyZ2V0IHByb2plY3QgSUQuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3RJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRhdGFzZXRSZWNvcmQ6IFVwbG9hZCBsYWJlbGVkIGRhdGEgdG8gdGhlIGRhdGFzZXQuXG4gICAgICovXG4gICAgcHVibGljIGRhdGFzZXRSZWNvcmQ6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGF0YXNldFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGF0YXNldC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGF0YXNldElkID0gdGhpcy5nZXRBdHQoJ0RhdGFzZXRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kYXRhc2V0TmFtZSA9IHByb3BzLmRhdGFzZXROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb3BzLnByb2plY3RJZDtcbiAgICAgICAgdGhpcy5kYXRhc2V0UmVjb3JkID0gcHJvcHMuZGF0YXNldFJlY29yZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhc2V0TmFtZTogdGhpcy5kYXRhc2V0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5wcm9qZWN0SWQsXG4gICAgICAgICAgICBkYXRhc2V0UmVjb3JkOiB0aGlzLmRhdGFzZXRSZWNvcmQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RhdGFzZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NNb2RlbGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1ubHBhdXRvbWwtbW9kZWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNb2RlbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0SWRMaXN0OiBUaGUgdXBsb2FkZWQgZGF0YXNldCBtdXN0IGJlIHVuZGVyIHRoZSBzYW1lIHByb2plY3QsIGFuZCB0aGUgdG90YWwgbnVtYmVyIG9mIG1hcmtlZCBkYXRhIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byA0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFzZXRJZExpc3Q6IEFycmF5PG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZWxOYW1lOiBUaGUgbmFtZSBvZiBtb2RlbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RlbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2RlbFR5cGU6IFRoZSB0eXBlIG9mIG1vZGVsLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBwYXJhbWV0ZXIgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gZGlmZmVyZW50IHR5cGVzIG9mIG1vZGVscy5cbiAgICAgKiBVc2luZyB0aGUgc3BlY2lmaWVkIG1vZGVsIHR5cGUgdW5kZXIgZGlmZmVyZW50IHByb2plY3QsIGFuZCB0aGUgYmFja2VuZCB3aWxsIGRvIHRoZSB2ZXJpZmljYXRpb24uIElmIHRoZSBtb2RlbCB0eXBlIGRvZXMgbm90IGV4aXN0IHVuZGVyIHRoZSBwcm9qZWN0LCBpdCB3aWxsIHByb21wdCB0aGF0IHRoZSBiYXNlIG1vZGVsIGlzIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGVsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3RJZDogVGhlIHByb2plY3QgaWQgdG8gd2hpY2ggdGhlIG1vZGVsIGJlbG9uZ3NcbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0SWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBscjogTGVhcm5pbmcgcmF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBscj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXBvY2hzOiBOdW1iZXIgb2YgdHJhaW5pbmcgZGF0YXNldCBpdGVyYXRpb25zXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmVwb2Nocz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZXN0RGF0YXNldElkTGlzdDogVGVzdCBzZXQgSUQgbGlzdC4gU29tZSBtb2RlbHMgdW5kZXIgdGV4dCBjbGFzc2lmaWNhdGlvbiBzdXBwb3J0IGFkZGluZyB0ZXN0IHNldCBkYXRhLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlc3REYXRhc2V0SWRMaXN0PzogQXJyYXk8bnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb2RlbFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb2RlbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vZGVsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0SWRMaXN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRhdGFzZXRJZExpc3QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRhdGFzZXRJZExpc3QgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kYXRhc2V0SWRMaXN0KSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGF0YXNldElkTGlzdCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGFzZXRJZExpc3QnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGF0YXNldElkTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0SWRMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlTnVtYmVyKSkocHJvcGVydGllcy5kYXRhc2V0SWRMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlbE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubW9kZWxOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlbE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kZWxOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50ZXN0RGF0YXNldElkTGlzdCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRlc3REYXRhc2V0SWRMaXN0KSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGVzdERhdGFzZXRJZExpc3QpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZXN0RGF0YXNldElkTGlzdCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZXN0RGF0YXNldElkTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZXN0RGF0YXNldElkTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZU51bWJlcikpKHByb3BlcnRpZXMudGVzdERhdGFzZXRJZExpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25lcG9jaHMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmVwb2NocykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbHInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubHIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm9qZWN0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wcm9qZWN0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGVsVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb2RlbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vZGVsVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubW9kZWxUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb2RlbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTkxQLU5FUi1DaGluZXNlXCIsXCJOTFAtTkVSLUJFUlRcIixcIk5MUC1ORVItRW5nbGlzaFwiLFwiTkxQLVRleHRDYXRlZ29yeS1lbnNlbWJsZVwiLFwiTkxQLVRleHRDYXRlZ29yeS1DTk4yXCIsXCJOTFAtVGV4dENhdGVnb3J5LUZUXCIsXCJOTFAtVGV4dENhdGVnb3J5LVNBXCIsXCJOTFAtVGV4dENhdGVnb3J5LVNUQ1wiLFwiY2xhc3NpZmljYXRpb25fYmVydFwiLFwiTkxQLUtleXBocmFzZS10ZXh0cmFua1wiLFwiTkxQLVJFLVBDTk5cIixcIk5MUC1SZWxhdGlvbkNsYXNzZmljaWF0aW9uLUJFUlRcIixcIk5MUC1SRS1CRVJULU5PSVNFXCIsXCJzdHJ1Y3RiZXJ0X21hdGNoaW5nXCIsXCIgTkxQLVRleHRDYXRlZ29yeS1DTk4yXCIsXCJjbGFzc2lmaWNhdGlvbl9jbm5cIixcIk5MUC1SZXN1bWUtQ2hpbmVzZVwiLFwiTkxQLVJlc3VtZS1QcmV0cmFpbi1DaGluZXNlXCIsXCJOTFAtUmVzdW1lLVByZXRyYWluLUVuZ2xpc2hcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlbFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kZWxUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01vZGVsUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6TW9kZWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vZGVsUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6TW9kZWxgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTW9kZWxQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc01vZGVsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RhdGFzZXRJZExpc3QnOiByb3MubGlzdE1hcHBlcihyb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRhc2V0SWRMaXN0KSxcbiAgICAgICdNb2RlbE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGVsTmFtZSksXG4gICAgICAnTW9kZWxUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2RlbFR5cGUpLFxuICAgICAgJ1Byb2plY3RJZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdElkKSxcbiAgICAgICdMcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubHIpLFxuICAgICAgJ05lcG9jaHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5lcG9jaHMpLFxuICAgICAgJ1Rlc3REYXRhc2V0SWRMaXN0Jzogcm9zLmxpc3RNYXBwZXIocm9zLm51bWJlclRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGVzdERhdGFzZXRJZExpc3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok5MUEFVVE9NTDo6TW9kZWxgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIG1vZGVsLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBNb2RlbGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxwYXV0b21sLW1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb2RlbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TkxQQVVUT01MOjpNb2RlbFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNb2RlbElkOiBUaGUgSUQgb2YgbW9kZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb2RlbElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1vZGVsVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgbW9kZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb2RlbFZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRhdGFzZXRJZExpc3Q6IFRoZSB1cGxvYWRlZCBkYXRhc2V0IG11c3QgYmUgdW5kZXIgdGhlIHNhbWUgcHJvamVjdCwgYW5kIHRoZSB0b3RhbCBudW1iZXIgb2YgbWFya2VkIGRhdGEgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDQuXG4gICAgICovXG4gICAgcHVibGljIGRhdGFzZXRJZExpc3Q6IEFycmF5PG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZWxOYW1lOiBUaGUgbmFtZSBvZiBtb2RlbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kZWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZWxUeXBlOiBUaGUgdHlwZSBvZiBtb2RlbC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgcGFyYW1ldGVyIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIGRpZmZlcmVudCB0eXBlcyBvZiBtb2RlbHMuXG4gICAgICogVXNpbmcgdGhlIHNwZWNpZmllZCBtb2RlbCB0eXBlIHVuZGVyIGRpZmZlcmVudCBwcm9qZWN0LCBhbmQgdGhlIGJhY2tlbmQgd2lsbCBkbyB0aGUgdmVyaWZpY2F0aW9uLiBJZiB0aGUgbW9kZWwgdHlwZSBkb2VzIG5vdCBleGlzdCB1bmRlciB0aGUgcHJvamVjdCwgaXQgd2lsbCBwcm9tcHQgdGhhdCB0aGUgYmFzZSBtb2RlbCBpcyBub3QgZm91bmRcbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kZWxUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdElkOiBUaGUgcHJvamVjdCBpZCB0byB3aGljaCB0aGUgbW9kZWwgYmVsb25nc1xuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0SWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBscjogTGVhcm5pbmcgcmF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbHI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXBvY2hzOiBOdW1iZXIgb2YgdHJhaW5pbmcgZGF0YXNldCBpdGVyYXRpb25zXG4gICAgICovXG4gICAgcHVibGljIG5lcG9jaHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZXN0RGF0YXNldElkTGlzdDogVGVzdCBzZXQgSUQgbGlzdC4gU29tZSBtb2RlbHMgdW5kZXIgdGV4dCBjbGFzc2lmaWNhdGlvbiBzdXBwb3J0IGFkZGluZyB0ZXN0IHNldCBkYXRhLlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXN0RGF0YXNldElkTGlzdDogQXJyYXk8bnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNb2RlbFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTW9kZWwuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck1vZGVsSWQgPSB0aGlzLmdldEF0dCgnTW9kZWxJZCcpO1xuICAgICAgICB0aGlzLmF0dHJNb2RlbFZlcnNpb24gPSB0aGlzLmdldEF0dCgnTW9kZWxWZXJzaW9uJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRhdGFzZXRJZExpc3QgPSBwcm9wcy5kYXRhc2V0SWRMaXN0O1xuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IHByb3BzLm1vZGVsTmFtZTtcbiAgICAgICAgdGhpcy5tb2RlbFR5cGUgPSBwcm9wcy5tb2RlbFR5cGU7XG4gICAgICAgIHRoaXMucHJvamVjdElkID0gcHJvcHMucHJvamVjdElkO1xuICAgICAgICB0aGlzLmxyID0gcHJvcHMubHI7XG4gICAgICAgIHRoaXMubmVwb2NocyA9IHByb3BzLm5lcG9jaHM7XG4gICAgICAgIHRoaXMudGVzdERhdGFzZXRJZExpc3QgPSBwcm9wcy50ZXN0RGF0YXNldElkTGlzdDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhc2V0SWRMaXN0OiB0aGlzLmRhdGFzZXRJZExpc3QsXG4gICAgICAgICAgICBtb2RlbE5hbWU6IHRoaXMubW9kZWxOYW1lLFxuICAgICAgICAgICAgbW9kZWxUeXBlOiB0aGlzLm1vZGVsVHlwZSxcbiAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5wcm9qZWN0SWQsXG4gICAgICAgICAgICBscjogdGhpcy5scixcbiAgICAgICAgICAgIG5lcG9jaHM6IHRoaXMubmVwb2NocyxcbiAgICAgICAgICAgIHRlc3REYXRhc2V0SWRMaXN0OiB0aGlzLnRlc3REYXRhc2V0SWRMaXN0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNb2RlbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1Byb2plY3RgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxwYXV0b21sLXByb2plY3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQcm9qZWN0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3REZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHByb2plY3QuQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAyNTYgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0RGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgcHJvamVjdC4gQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdFR5cGU6IFRoZSB0eXBlIG9mIG5scCBwcm9qZWN0LiBUaGUgZm9sbG93aW5nIHZhbHVlIGlzIGFsbG93ZWQ6IG5lciwgdGV4dENhdGVnb3J5YmFzZVJlbGF0aW9uLCB0ZXh0TWF0Y2hpbmcsIHNlbnRpbWVudEFuYWx5c2lzLCByZXN1bWVFeHRyYWN0LCByZXZpZXdBbmFseXNpc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3RUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUHJvamVjdFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm9qZWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUHJvamVjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb2plY3ROYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm9qZWN0TmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVpdWy1fYS16QS1aMC05XXsxLDMyfSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb2plY3RUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm9qZWN0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJuZXJcIixcInRleHRDYXRlZ29yeVwiLFwiYmFzZVJlbGF0aW9uXCIsXCJ0ZXh0TWF0Y2hpbmdcIixcInNlbnRpbWVudEFuYWx5c2lzXCIsXCJyZXN1bWVFeHRyYWN0XCIsXCJyZXZpZXdBbmFseXNpc1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3RUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0RGVzY3JpcHRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdERlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0RGVzY3JpcHRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3REZXNjcmlwdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdERlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICByZWc6IC9eW2EtekEtWl1bLV9hLXpBLVowLTldezEsMjU2fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0RGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdERlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Byb2plY3RQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm9qZWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6UHJvamVjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcm9qZWN0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1Byb2plY3REZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdERlc2NyaXB0aW9uKSxcbiAgICAgICdQcm9qZWN0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdE5hbWUpLFxuICAgICAgJ1Byb2plY3RUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0VHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBwcm9qZWN0LlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBQcm9qZWN0YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1ubHBhdXRvbWwtcHJvamVjdFxuICovXG5leHBvcnQgY2xhc3MgUm9zUHJvamVjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByb2plY3RJZDogVGhlIHByb2plY3QgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb2plY3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgcHJvamVjdC5DYW5ub3Qgc3RhcnQgd2l0aCBudW1iZXJzIGFuZCBzeW1ib2xzLCBhbmQgdGhlIGxlbmd0aCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDI1NiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0RGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgcHJvamVjdC4gQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3RUeXBlOiBUaGUgdHlwZSBvZiBubHAgcHJvamVjdC4gVGhlIGZvbGxvd2luZyB2YWx1ZSBpcyBhbGxvd2VkOiBuZXIsIHRleHRDYXRlZ29yeWJhc2VSZWxhdGlvbiwgdGV4dE1hdGNoaW5nLCBzZW50aW1lbnRBbmFseXNpcywgcmVzdW1lRXh0cmFjdCwgcmV2aWV3QW5hbHlzaXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvamVjdFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQcm9qZWN0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQcm9qZWN0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQcm9qZWN0SWQgPSB0aGlzLmdldEF0dCgnUHJvamVjdElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnByb2plY3REZXNjcmlwdGlvbiA9IHByb3BzLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb3BzLnByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RUeXBlID0gcHJvcHMucHJvamVjdFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uOiB0aGlzLnByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiB0aGlzLnByb2plY3ROYW1lLFxuICAgICAgICAgICAgcHJvamVjdFR5cGU6IHRoaXMucHJvamVjdFR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Byb2plY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==