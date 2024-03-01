import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Dataset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
 */
export declare class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Dataset";
    /**
     * @Attribute DatasetId: The dataset ID.
     */
    readonly attrDatasetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    datasetName: string | ros.IResolvable;
    /**
     * @Property projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
     */
    projectId: number | ros.IResolvable;
    /**
     * @Property datasetRecord: Upload labeled data to the dataset.
     */
    datasetRecord: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosModel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Model`, which is used to create a model.
 * @Note This class does not contain additional functions, so it is recommended to use the `Model` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
 */
export declare class RosModel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Model";
    /**
     * @Attribute ModelId: The ID of model.
     */
    readonly attrModelId: ros.IResolvable;
    /**
     * @Attribute ModelVersion: The version of model.
     */
    readonly attrModelVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
     */
    datasetIdList: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property modelName: The name of model.
     */
    modelName: string | ros.IResolvable;
    /**
     * @Property modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
     * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
     */
    modelType: string | ros.IResolvable;
    /**
     * @Property projectId: The project id to which the model belongs
     */
    projectId: number | ros.IResolvable;
    /**
     * @Property lr: Learning rate.
     */
    lr: string | ros.IResolvable | undefined;
    /**
     * @Property nepochs: Number of training dataset iterations
     */
    nepochs: string | ros.IResolvable | undefined;
    /**
     * @Property testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
     */
    testDatasetIdList: Array<number | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosModelProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLPAUTOML::Project`, which is used to create a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLPAUTOML::Project";
    /**
     * @Attribute ProjectId: The project ID
     */
    readonly attrProjectId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    projectDescription: string | ros.IResolvable;
    /**
     * @Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    projectType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
