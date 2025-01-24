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
 * Represents a `Dataset`.
 */
export interface IDataset extends ros.IResource {
    readonly props: DatasetProps;
    /**
     * Attribute Accessibility: Workspace visibility.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DataSourceType: The data source type.
     */
    readonly attrDataSourceType: ros.IResolvable | string;
    /**
     * Attribute DataType: The dataset type. The default value is COMMON.
     */
    readonly attrDataType: ros.IResolvable | string;
    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    readonly attrDatasetId: ros.IResolvable | string;
    /**
     * Attribute DatasetName: The name of the dataset.
     */
    readonly attrDatasetName: ros.IResolvable | string;
    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GmtModifiedTime: Update time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    readonly attrOwnerId: ros.IResolvable | string;
    /**
     * Attribute Property: The properties of the dataset.
     */
    readonly attrProperty: ros.IResolvable | string;
    /**
     * Attribute SourceId: The data source ID.
     */
    readonly attrSourceId: ros.IResolvable | string;
    /**
     * Attribute SourceType: The data source type. The default value is USER.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    readonly attrUri: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Dataset`, which is used to query a dataset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export declare class Dataset extends ros.Resource implements IDataset {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DatasetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accessibility: Workspace visibility.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DataSourceType: The data source type.
     */
    readonly attrDataSourceType: ros.IResolvable | string;
    /**
     * Attribute DataType: The dataset type. The default value is COMMON.
     */
    readonly attrDataType: ros.IResolvable | string;
    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    readonly attrDatasetId: ros.IResolvable | string;
    /**
     * Attribute DatasetName: The name of the dataset.
     */
    readonly attrDatasetName: ros.IResolvable | string;
    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GmtModifiedTime: Update time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    readonly attrOwnerId: ros.IResolvable | string;
    /**
     * Attribute Property: The properties of the dataset.
     */
    readonly attrProperty: ros.IResolvable | string;
    /**
     * Attribute SourceId: The data source ID.
     */
    readonly attrSourceId: ros.IResolvable | string;
    /**
     * Attribute SourceType: The data source type. The default value is USER.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    readonly attrUri: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetProps, enableResourcePropertyConstraint?: boolean);
}
