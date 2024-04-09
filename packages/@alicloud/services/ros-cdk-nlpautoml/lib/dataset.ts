import * as ros from '@alicloud/ros-cdk-core';
import { RosDataset } from './nlpautoml.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDataset as DatasetProperty };

/**
 * Properties for defining a `Dataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLPAUTOML::Dataset`, which is used to create a dataset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
 */
export class Dataset extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DatasetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DatasetId: The dataset ID.
     */
    public readonly attrDatasetId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDataset = new RosDataset(this, id,  {
            datasetName: props.datasetName,
            projectId: props.projectId,
            datasetRecord: props.datasetRecord,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataset;
        this.attrDatasetId = rosDataset.attrDatasetId;
    }
}
