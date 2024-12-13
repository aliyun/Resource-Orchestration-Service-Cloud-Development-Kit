import * as ros from '@alicloud/ros-cdk-core';
import { RosDataset } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDataset as DatasetProperty };

/**
 * Properties for defining a `Dataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export interface DatasetProps {

    /**
     * Property datasetId: The first ID of the resource.
     */
    readonly datasetId: string | ros.IResolvable;

    /**
     * Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Dataset`, which is used to query a dataset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export class Dataset extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DatasetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accessibility: Workspace visibility.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DataSourceType: The data source type.
     */
    public readonly attrDataSourceType: ros.IResolvable;

    /**
     * Attribute DataType: The dataset type. The default value is COMMON.
     */
    public readonly attrDataType: ros.IResolvable;

    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    public readonly attrDatasetId: ros.IResolvable;

    /**
     * Attribute DatasetName: The name of the dataset.
     */
    public readonly attrDatasetName: ros.IResolvable;

    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute GmtModifiedTime: Update time.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable;

    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * Attribute Property: The properties of the dataset.
     */
    public readonly attrProperty: ros.IResolvable;

    /**
     * Attribute SourceId: The data source ID.
     */
    public readonly attrSourceId: ros.IResolvable;

    /**
     * Attribute SourceType: The data source type. The default value is USER.
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    public readonly attrUri: ros.IResolvable;

    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

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
            workspaceId: props.workspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            datasetId: props.datasetId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataset;
        this.attrAccessibility = rosDataset.attrAccessibility;
        this.attrCreateTime = rosDataset.attrCreateTime;
        this.attrDataSourceType = rosDataset.attrDataSourceType;
        this.attrDataType = rosDataset.attrDataType;
        this.attrDatasetId = rosDataset.attrDatasetId;
        this.attrDatasetName = rosDataset.attrDatasetName;
        this.attrDescription = rosDataset.attrDescription;
        this.attrGmtModifiedTime = rosDataset.attrGmtModifiedTime;
        this.attrOptions = rosDataset.attrOptions;
        this.attrOwnerId = rosDataset.attrOwnerId;
        this.attrProperty = rosDataset.attrProperty;
        this.attrSourceId = rosDataset.attrSourceId;
        this.attrSourceType = rosDataset.attrSourceType;
        this.attrUri = rosDataset.attrUri;
        this.attrUserId = rosDataset.attrUserId;
        this.attrWorkspaceId = rosDataset.attrWorkspaceId;
    }
}
