import * as ros from '@alicloud/ros-cdk-core';
import { RosDataset } from './pai.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Dataset`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export declare class Dataset extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DatasetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accessibility: Workspace visibility.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DataSourceType: The data source type.
     */
    readonly attrDataSourceType: ros.IResolvable;
    /**
     * Attribute DataType: The dataset type. The default value is COMMON.
     */
    readonly attrDataType: ros.IResolvable;
    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    readonly attrDatasetId: ros.IResolvable;
    /**
     * Attribute DatasetName: The name of the dataset.
     */
    readonly attrDatasetName: ros.IResolvable;
    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute GmtModifiedTime: Update time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable;
    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    readonly attrOptions: ros.IResolvable;
    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * Attribute Property: The properties of the dataset.
     */
    readonly attrProperty: ros.IResolvable;
    /**
     * Attribute SourceId: The data source ID.
     */
    readonly attrSourceId: ros.IResolvable;
    /**
     * Attribute SourceType: The data source type. The default value is USER.
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    readonly attrUri: ros.IResolvable;
    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetProps, enableResourcePropertyConstraint?: boolean);
}
