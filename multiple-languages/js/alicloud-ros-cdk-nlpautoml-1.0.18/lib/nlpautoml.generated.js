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
        DatasetName: ros.stringToRosTemplate(properties.datasetName),
        ProjectId: ros.numberToRosTemplate(properties.projectId),
        DatasetRecord: ros.listMapper(ros.stringToRosTemplate)(properties.datasetRecord),
    };
}
/**
 * A ROS template type:  `ALIYUN::NLPAUTOML::Dataset`
 */
class RosDataset extends ros.RosResource {
    /**
     * Create a new `ALIYUN::NLPAUTOML::Dataset`.
     *
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
class RosModel extends ros.RosResource {
    /**
     * Create a new `ALIYUN::NLPAUTOML::Model`.
     *
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
        ProjectDescription: ros.stringToRosTemplate(properties.projectDescription),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
        ProjectType: ros.stringToRosTemplate(properties.projectType),
    };
}
/**
 * A ROS template type:  `ALIYUN::NLPAUTOML::Project`
 */
class RosProject extends ros.RosResource {
    /**
     * Create a new `ALIYUN::NLPAUTOML::Project`.
     *
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmxwYXV0b21sLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5scGF1dG9tbC5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixHQUFHLEVBQUUsK0JBQStCO1NBQ3JDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FB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O1FBQ3ZCLE9BQU87WUFDSCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDRCQUE0QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQTdETCxnQ0E4REM7QUE3REc7O0dBRUc7QUFDb0IsaUNBQXNCLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TkxQQVVUT01MOjpEYXRhc2V0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RhdGFzZXRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGF0YXNldE5hbWU6IFRoZSBuYW1lIG9mIGRhdGFzZXQuIENhbm5vdCBzdGFydCB3aXRoIG51bWJlcnMgYW5kIHN5bWJvbHMsIGFuZCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gMzIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhc2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3RJZDogVGhlIElEIG9mIHByb2plY3QuIFRvIGNyZWF0ZSBhIGRhdGFzZXQgdW5kZXIgYSBjZXJ0YWluIHByb2plY3QsIGZpbGwgaW4gdGhlIHRhcmdldCBwcm9qZWN0IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3RJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRhdGFzZXRSZWNvcmQ6IFVwbG9hZCBsYWJlbGVkIGRhdGEgdG8gdGhlIGRhdGFzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YXNldFJlY29yZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGF0YXNldFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYXRhc2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGF0YXNldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGF0YXNldE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRhdGFzZXROYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5kYXRhc2V0TmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldE5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGF0YXNldE5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVpdWy1fYS16QS1aMC05XXsxLDMyfSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYXRhc2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2plY3RJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdElkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnByb2plY3RJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGF0YXNldFJlY29yZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRhdGFzZXRSZWNvcmQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kYXRhc2V0UmVjb3JkKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldFJlY29yZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kYXRhc2V0UmVjb3JkLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0UmVjb3JkJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5kYXRhc2V0UmVjb3JkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RhdGFzZXRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TkxQQVVUT01MOjpEYXRhc2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYXRhc2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6RGF0YXNldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEYXRhc2V0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEYXRhc2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGF0YXNldE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF0YXNldE5hbWUpLFxuICAgICAgUHJvamVjdElkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3RJZCksXG4gICAgICBEYXRhc2V0UmVjb3JkOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRhc2V0UmVjb3JkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpOTFBBVVRPTUw6OkRhdGFzZXRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEYXRhc2V0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpOTFBBVVRPTUw6OkRhdGFzZXRcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYXRhc2V0SWQ6IFRoZSBkYXRhc2V0IElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YXNldElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0TmFtZTogVGhlIG5hbWUgb2YgZGF0YXNldC4gQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhc2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3RJZDogVGhlIElEIG9mIHByb2plY3QuIFRvIGNyZWF0ZSBhIGRhdGFzZXQgdW5kZXIgYSBjZXJ0YWluIHByb2plY3QsIGZpbGwgaW4gdGhlIHRhcmdldCBwcm9qZWN0IElELlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0SWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0UmVjb3JkOiBVcGxvYWQgbGFiZWxlZCBkYXRhIHRvIHRoZSBkYXRhc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhc2V0UmVjb3JkOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok5MUEFVVE9NTDo6RGF0YXNldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGF0YXNldFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGF0YXNldC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGF0YXNldElkID0gdGhpcy5nZXRBdHQoJ0RhdGFzZXRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kYXRhc2V0TmFtZSA9IHByb3BzLmRhdGFzZXROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb3BzLnByb2plY3RJZDtcbiAgICAgICAgdGhpcy5kYXRhc2V0UmVjb3JkID0gcHJvcHMuZGF0YXNldFJlY29yZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhc2V0TmFtZTogdGhpcy5kYXRhc2V0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5wcm9qZWN0SWQsXG4gICAgICAgICAgICBkYXRhc2V0UmVjb3JkOiB0aGlzLmRhdGFzZXRSZWNvcmQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RhdGFzZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok5MUEFVVE9NTDo6TW9kZWxgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTW9kZWxQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGF0YXNldElkTGlzdDogVGhlIHVwbG9hZGVkIGRhdGFzZXQgbXVzdCBiZSB1bmRlciB0aGUgc2FtZSBwcm9qZWN0LCBhbmQgdGhlIHRvdGFsIG51bWJlciBvZiBtYXJrZWQgZGF0YSBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gNC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhc2V0SWRMaXN0OiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGVsTmFtZTogVGhlIG5hbWUgb2YgbW9kZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZWxUeXBlOiBUaGUgdHlwZSBvZiBtb2RlbC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgcGFyYW1ldGVyIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIGRpZmZlcmVudCB0eXBlcyBvZiBtb2RlbHMuXG4gICAgICogVXNpbmcgdGhlIHNwZWNpZmllZCBtb2RlbCB0eXBlIHVuZGVyIGRpZmZlcmVudCBwcm9qZWN0LCBhbmQgdGhlIGJhY2tlbmQgd2lsbCBkbyB0aGUgdmVyaWZpY2F0aW9uLiBJZiB0aGUgbW9kZWwgdHlwZSBkb2VzIG5vdCBleGlzdCB1bmRlciB0aGUgcHJvamVjdCwgaXQgd2lsbCBwcm9tcHQgdGhhdCB0aGUgYmFzZSBtb2RlbCBpcyBub3QgZm91bmRcbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RlbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0SWQ6IFRoZSBwcm9qZWN0IGlkIHRvIHdoaWNoIHRoZSBtb2RlbCBiZWxvbmdzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbHI6IExlYXJuaW5nIHJhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbHI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmVwb2NoczogTnVtYmVyIG9mIHRyYWluaW5nIGRhdGFzZXQgaXRlcmF0aW9uc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5lcG9jaHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVzdERhdGFzZXRJZExpc3Q6IFRlc3Qgc2V0IElEIGxpc3QuIFNvbWUgbW9kZWxzIHVuZGVyIHRleHQgY2xhc3NpZmljYXRpb24gc3VwcG9ydCBhZGRpbmcgdGVzdCBzZXQgZGF0YS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZXN0RGF0YXNldElkTGlzdD86IEFycmF5PG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTW9kZWxQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9kZWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb2RlbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldElkTGlzdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kYXRhc2V0SWRMaXN0KSk7XG4gICAgaWYocHJvcGVydGllcy5kYXRhc2V0SWRMaXN0ICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGF0YXNldElkTGlzdCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRhdGFzZXRJZExpc3QpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0SWRMaXN0Jywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRhdGFzZXRJZExpc3QubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0YXNldElkTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZU51bWJlcikpKHByb3BlcnRpZXMuZGF0YXNldElkTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZWxOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1vZGVsTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZWxOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGVsTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGVzdERhdGFzZXRJZExpc3QgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50ZXN0RGF0YXNldElkTGlzdCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlc3REYXRhc2V0SWRMaXN0KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVzdERhdGFzZXRJZExpc3QnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVzdERhdGFzZXRJZExpc3QubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVzdERhdGFzZXRJZExpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVOdW1iZXIpKShwcm9wZXJ0aWVzLnRlc3REYXRhc2V0SWRMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXBvY2hzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5lcG9jaHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0SWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucHJvamVjdElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubW9kZWxUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5tb2RlbFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vZGVsVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZWxUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW9kZWxUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk5MUC1ORVItQ2hpbmVzZVwiLFwiTkxQLU5FUi1CRVJUXCIsXCJOTFAtTkVSLUVuZ2xpc2hcIixcIk5MUC1UZXh0Q2F0ZWdvcnktZW5zZW1ibGVcIixcIk5MUC1UZXh0Q2F0ZWdvcnktQ05OMlwiLFwiTkxQLVRleHRDYXRlZ29yeS1GVFwiLFwiTkxQLVRleHRDYXRlZ29yeS1TQVwiLFwiTkxQLVRleHRDYXRlZ29yeS1TVENcIixcImNsYXNzaWZpY2F0aW9uX2JlcnRcIixcIk5MUC1LZXlwaHJhc2UtdGV4dHJhbmtcIixcIk5MUC1SRS1QQ05OXCIsXCJOTFAtUmVsYXRpb25DbGFzc2ZpY2lhdGlvbi1CRVJUXCIsXCJOTFAtUkUtQkVSVC1OT0lTRVwiLFwic3RydWN0YmVydF9tYXRjaGluZ1wiLFwiIE5MUC1UZXh0Q2F0ZWdvcnktQ05OMlwiLFwiY2xhc3NpZmljYXRpb25fY25uXCIsXCJOTFAtUmVzdW1lLUNoaW5lc2VcIixcIk5MUC1SZXN1bWUtUHJldHJhaW4tQ2hpbmVzZVwiLFwiTkxQLVJlc3VtZS1QcmV0cmFpbi1FbmdsaXNoXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZWxUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGVsVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NNb2RlbFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpOTFBBVVRPTUw6Ok1vZGVsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb2RlbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpOTFBBVVRPTUw6Ok1vZGVsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01vZGVsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb2RlbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERhdGFzZXRJZExpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmRhdGFzZXRJZExpc3QpLFxuICAgICAgTW9kZWxOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGVsTmFtZSksXG4gICAgICBNb2RlbFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9kZWxUeXBlKSxcbiAgICAgIFByb2plY3RJZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0SWQpLFxuICAgICAgTHI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubHIpLFxuICAgICAgTmVwb2Noczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXBvY2hzKSxcbiAgICAgIFRlc3REYXRhc2V0SWRMaXN0OiByb3MubGlzdE1hcHBlcihyb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50ZXN0RGF0YXNldElkTGlzdCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6TkxQQVVUT01MOjpNb2RlbGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc01vZGVsIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpOTFBBVVRPTUw6Ok1vZGVsXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTW9kZWxJZDogVGhlIElEIG9mIG1vZGVsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW9kZWxJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNb2RlbFZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIG1vZGVsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW9kZWxWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0SWRMaXN0OiBUaGUgdXBsb2FkZWQgZGF0YXNldCBtdXN0IGJlIHVuZGVyIHRoZSBzYW1lIHByb2plY3QsIGFuZCB0aGUgdG90YWwgbnVtYmVyIG9mIG1hcmtlZCBkYXRhIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byA0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhc2V0SWRMaXN0OiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGVsTmFtZTogVGhlIG5hbWUgb2YgbW9kZWwuXG4gICAgICovXG4gICAgcHVibGljIG1vZGVsTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGVsVHlwZTogVGhlIHR5cGUgb2YgbW9kZWwuIFBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIHBhcmFtZXRlciB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byBkaWZmZXJlbnQgdHlwZXMgb2YgbW9kZWxzLlxuICAgICAqIFVzaW5nIHRoZSBzcGVjaWZpZWQgbW9kZWwgdHlwZSB1bmRlciBkaWZmZXJlbnQgcHJvamVjdCwgYW5kIHRoZSBiYWNrZW5kIHdpbGwgZG8gdGhlIHZlcmlmaWNhdGlvbi4gSWYgdGhlIG1vZGVsIHR5cGUgZG9lcyBub3QgZXhpc3QgdW5kZXIgdGhlIHByb2plY3QsIGl0IHdpbGwgcHJvbXB0IHRoYXQgdGhlIGJhc2UgbW9kZWwgaXMgbm90IGZvdW5kXG4gICAgICovXG4gICAgcHVibGljIG1vZGVsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3RJZDogVGhlIHByb2plY3QgaWQgdG8gd2hpY2ggdGhlIG1vZGVsIGJlbG9uZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvamVjdElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbHI6IExlYXJuaW5nIHJhdGUuXG4gICAgICovXG4gICAgcHVibGljIGxyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmVwb2NoczogTnVtYmVyIG9mIHRyYWluaW5nIGRhdGFzZXQgaXRlcmF0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBuZXBvY2hzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVzdERhdGFzZXRJZExpc3Q6IFRlc3Qgc2V0IElEIGxpc3QuIFNvbWUgbW9kZWxzIHVuZGVyIHRleHQgY2xhc3NpZmljYXRpb24gc3VwcG9ydCBhZGRpbmcgdGVzdCBzZXQgZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVzdERhdGFzZXRJZExpc3Q6IEFycmF5PG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TkxQQVVUT01MOjpNb2RlbGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTW9kZWxQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc01vZGVsLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJNb2RlbElkID0gdGhpcy5nZXRBdHQoJ01vZGVsSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTW9kZWxWZXJzaW9uID0gdGhpcy5nZXRBdHQoJ01vZGVsVmVyc2lvbicpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kYXRhc2V0SWRMaXN0ID0gcHJvcHMuZGF0YXNldElkTGlzdDtcbiAgICAgICAgdGhpcy5tb2RlbE5hbWUgPSBwcm9wcy5tb2RlbE5hbWU7XG4gICAgICAgIHRoaXMubW9kZWxUeXBlID0gcHJvcHMubW9kZWxUeXBlO1xuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb3BzLnByb2plY3RJZDtcbiAgICAgICAgdGhpcy5sciA9IHByb3BzLmxyO1xuICAgICAgICB0aGlzLm5lcG9jaHMgPSBwcm9wcy5uZXBvY2hzO1xuICAgICAgICB0aGlzLnRlc3REYXRhc2V0SWRMaXN0ID0gcHJvcHMudGVzdERhdGFzZXRJZExpc3Q7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YXNldElkTGlzdDogdGhpcy5kYXRhc2V0SWRMaXN0LFxuICAgICAgICAgICAgbW9kZWxOYW1lOiB0aGlzLm1vZGVsTmFtZSxcbiAgICAgICAgICAgIG1vZGVsVHlwZTogdGhpcy5tb2RlbFR5cGUsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkLFxuICAgICAgICAgICAgbHI6IHRoaXMubHIsXG4gICAgICAgICAgICBuZXBvY2hzOiB0aGlzLm5lcG9jaHMsXG4gICAgICAgICAgICB0ZXN0RGF0YXNldElkTGlzdDogdGhpcy50ZXN0RGF0YXNldElkTGlzdCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9kZWxQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok5MUEFVVE9NTDo6UHJvamVjdGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQcm9qZWN0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3REZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHByb2plY3QuQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAyNTYgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0RGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgcHJvamVjdC4gQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdFR5cGU6IFRoZSB0eXBlIG9mIG5scCBwcm9qZWN0LiBUaGUgZm9sbG93aW5nIHZhbHVlIGlzIGFsbG93ZWQ6IG5lciwgdGV4dENhdGVnb3J5YmFzZVJlbGF0aW9uLCB0ZXh0TWF0Y2hpbmcsIHNlbnRpbWVudEFuYWx5c2lzLCByZXN1bWVFeHRyYWN0LCByZXZpZXdBbmFseXNpc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3RUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUHJvamVjdFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm9qZWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUHJvamVjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb2plY3ROYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm9qZWN0TmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVpdWy1fYS16QS1aMC05XXsxLDMyfSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb2plY3RUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm9qZWN0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJuZXJcIixcInRleHRDYXRlZ29yeVwiLFwiYmFzZVJlbGF0aW9uXCIsXCJ0ZXh0TWF0Y2hpbmdcIixcInNlbnRpbWVudEFuYWx5c2lzXCIsXCJyZXN1bWVFeHRyYWN0XCIsXCJyZXZpZXdBbmFseXNpc1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3RUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3RUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0RGVzY3JpcHRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdERlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0RGVzY3JpcHRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3REZXNjcmlwdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdERlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICByZWc6IC9eW2EtekEtWl1bLV9hLXpBLVowLTldezEsMjU2fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0RGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdERlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Byb2plY3RQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm9qZWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok5MUEFVVE9NTDo6UHJvamVjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcm9qZWN0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUHJvamVjdERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3REZXNjcmlwdGlvbiksXG4gICAgICBQcm9qZWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0TmFtZSksXG4gICAgICBQcm9qZWN0VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0VHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zUHJvamVjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TkxQQVVUT01MOjpQcm9qZWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJvamVjdElkOiBUaGUgcHJvamVjdCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJvamVjdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0RGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiBwcm9qZWN0LkNhbm5vdCBzdGFydCB3aXRoIG51bWJlcnMgYW5kIHN5bWJvbHMsIGFuZCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gMjU2IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3REZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiBwcm9qZWN0LiBDYW5ub3Qgc3RhcnQgd2l0aCBudW1iZXJzIGFuZCBzeW1ib2xzLCBhbmQgdGhlIGxlbmd0aCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDMyIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdFR5cGU6IFRoZSB0eXBlIG9mIG5scCBwcm9qZWN0LiBUaGUgZm9sbG93aW5nIHZhbHVlIGlzIGFsbG93ZWQ6IG5lciwgdGV4dENhdGVnb3J5YmFzZVJlbGF0aW9uLCB0ZXh0TWF0Y2hpbmcsIHNlbnRpbWVudEFuYWx5c2lzLCByZXN1bWVFeHRyYWN0LCByZXZpZXdBbmFseXNpc1xuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok5MUEFVVE9NTDo6UHJvamVjdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUHJvamVjdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUHJvamVjdC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUHJvamVjdElkID0gdGhpcy5nZXRBdHQoJ1Byb2plY3RJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9wcy5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9wcy5wcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VHlwZSA9IHByb3BzLnByb2plY3RUeXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbjogdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3RUeXBlOiB0aGlzLnByb2plY3RUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=