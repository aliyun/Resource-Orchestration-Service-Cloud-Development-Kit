import * as ros from '@alicloud/ros-cdk-core';
import { RosDatasets } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatasets as DatasetsProperty };

/**
 * Properties for defining a `Datasets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export interface DatasetsProps {

    /**
     * Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
}

/**
 * Represents a `Datasets`.
 */
export interface IDatasets extends ros.IResource {
    readonly props: DatasetsProps;

    /**
     * Attribute DatasetIds: The list of dataset IDs.
     */
    readonly attrDatasetIds: ros.IResolvable | string;

    /**
     * Attribute Datasets: The list of datasets.
     */
    readonly attrDatasets: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Datasets`, which is used to query the basic information about datasets.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatasets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export class Datasets extends ros.Resource implements IDatasets {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DatasetsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DatasetIds: The list of dataset IDs.
     */
    public readonly attrDatasetIds: ros.IResolvable | string;

    /**
     * Attribute Datasets: The list of datasets.
     */
    public readonly attrDatasets: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDatasets = new RosDatasets(this, id,  {
            sourceId: props.sourceId,
            workspaceId: props.workspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatasets;
        this.attrDatasetIds = rosDatasets.attrDatasetIds;
        this.attrDatasets = rosDatasets.attrDatasets;
    }
}
