import * as ros from '@alicloud/ros-cdk-core';
import { RosSearchIndex } from './ots.generated';
export { RosSearchIndex as SearchIndexProperty };
/**
 * Properties for defining a `ALIYUN::OTS::SearchIndex`
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
 * A ROS resource type:  `ALIYUN::OTS::SearchIndex`
 */
export declare class SearchIndex extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute IndexName: Index name.
     */
    readonly attrIndexName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OTS::SearchIndex`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SearchIndexProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=searchindex.d.ts.map