import * as ros from '@alicloud/ros-cdk-core';
import { RosSearchIndex } from './ots.generated';
export { RosSearchIndex as SearchIndexProperty };
/**
 * Properties for defining a `ALIYUN::OTS::SearchIndex`
 */
export interface SearchIndexProps {
    /**
     * @Property fieldSchemas: list of field_schema.
     */
    readonly fieldSchemas: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property indexName: The index name.
     */
    readonly indexName: string;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string;
    /**
     * @Property indexSetting: Index settings
     */
    readonly indexSetting?: RosSearchIndex.IndexSettingProperty | ros.IResolvable;
    /**
     * @Property indexSort: This parameter specifies how data is sorted.
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
     * @Attribute IndexName: Index name.
     */
    readonly attrIndexName: any;
    /**
     * Create a new `ALIYUN::OTS::SearchIndex`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SearchIndexProps, enableResourcePropertyConstraint?: boolean);
}
