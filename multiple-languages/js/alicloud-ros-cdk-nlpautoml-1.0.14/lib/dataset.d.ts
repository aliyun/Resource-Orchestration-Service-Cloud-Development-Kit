import * as ros from '@alicloud/ros-cdk-core';
import { RosDataset } from './nlpautoml.generated';
export { RosDataset as DatasetProperty };
/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Dataset`
 */
export interface DatasetProps {
    /**
     * Property datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    readonly datasetName: string | ros.IResolvable;
    /**
     * Property projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
     */
    readonly projectId: number | ros.IResolvable;
    /**
     * Property datasetRecord: Upload labeled data to the dataset.
     */
    readonly datasetRecord?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::NLPAUTOML::Dataset`
 */
export declare class Dataset extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DatasetId: The dataset ID.
     */
    readonly attrDatasetId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::NLPAUTOML::Dataset`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetProps, enableResourcePropertyConstraint?: boolean);
}
