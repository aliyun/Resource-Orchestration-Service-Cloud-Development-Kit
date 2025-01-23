import * as ros from '@alicloud/ros-cdk-core';
import { RosSearchIndex } from './ots.generated';
export { RosSearchIndex as SearchIndexProperty };
/**
 * Properties for defining a `SearchIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export interface SearchIndexProps {
    /**
     * Property fieldSchemas: list of field_schema.
     */
    readonly fieldSchemas: Array<RosSearchIndex.FieldSchemasProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property indexName: The index name.
     */
    readonly indexName: string | ros.IResolvable;
    /**
     * Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;
    /**
     * Property indexSetting: Index settings
     */
    readonly indexSetting?: RosSearchIndex.IndexSettingProperty | ros.IResolvable;
    /**
     * Property indexSort: This parameter specifies how data is sorted.
     * By default, the data is sorted in the same way as the primary key of the table.
     * If the search index contains NESTED fields, data is not sorted by default.
     */
    readonly indexSort?: RosSearchIndex.IndexSortProperty | ros.IResolvable;
}
/**
 * Represents a `SearchIndex`.
 */
export interface ISearchIndex extends ros.IResource {
    readonly props: SearchIndexProps;
    /**
     * Attribute IndexName: Index name.
     */
    readonly attrIndexName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::SearchIndex`, which is used to create a search index for a data table. You can create multiple search indexes for a data table.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSearchIndex`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export declare class SearchIndex extends ros.Resource implements ISearchIndex {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SearchIndexProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute IndexName: Index name.
     */
    readonly attrIndexName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SearchIndexProps, enableResourcePropertyConstraint?: boolean);
}
