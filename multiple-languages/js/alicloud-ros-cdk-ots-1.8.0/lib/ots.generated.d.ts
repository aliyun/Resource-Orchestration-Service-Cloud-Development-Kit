import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type, the default is SSD.
     * This parameter specifies the specification of the ots instance.
     *  When the value is SSD, the ots instance is a high-performance instance.
     *  When the value is Hybid, the ots instance is a capacity instance
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * @Property description: Instance description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::Instance`, which is used to create a Tablestore instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Instance";
    /**
     * @Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute PrivateEndpoint: Private endpoint
     */
    readonly attrPrivateEndpoint: ros.IResolvable;
    /**
     * @Attribute PublicEndpoint: Public endpoint
     */
    readonly attrPublicEndpoint: ros.IResolvable;
    /**
     * @Attribute VpcEndpoint: Vpc endpoint
     */
    readonly attrVpcEndpoint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type, the default is SSD.
     * This parameter specifies the specification of the ots instance.
     *  When the value is SSD, the ots instance is a high-performance instance.
     *  When the value is Hybid, the ots instance is a capacity instance
     */
    clusterType: string | ros.IResolvable | undefined;
    /**
     * @Property description: Instance description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    network: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSearchIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export interface RosSearchIndexProps {
    /**
     * @Property fieldSchemas: list of field_schema.
     */
    readonly fieldSchemas: Array<RosSearchIndex.FieldSchemasProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property indexName: The index name.
     */
    readonly indexName: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::SearchIndex`, which is used to create a search index for a data table. You can create multiple search indexes for a data table.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchIndex` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export declare class RosSearchIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::SearchIndex";
    /**
     * @Attribute IndexName: Index name.
     */
    readonly attrIndexName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fieldSchemas: list of field_schema.
     */
    fieldSchemas: Array<RosSearchIndex.FieldSchemasProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property indexName: The index name.
     */
    indexName: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    tableName: string | ros.IResolvable;
    /**
     * @Property indexSetting: Index settings
     */
    indexSetting: RosSearchIndex.IndexSettingProperty | ros.IResolvable | undefined;
    /**
     * @Property indexSort: This parameter specifies how data is sorted.
     * By default, the data is sorted in the same way as the primary key of the table.
     * If the search index contains NESTED fields, data is not sorted by default.
     */
    indexSort: RosSearchIndex.IndexSortProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchIndexProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface FieldSchemasProperty {
        /**
         * @Property isArray: This parameter specifies whether the column is an array.
     * A value of true indicates that the column is an array. Data written to the column must be a JSON array.
     * Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
         */
        readonly isArray?: boolean | ros.IResolvable;
        /**
         * @Property enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
         */
        readonly enableSortAndAgg?: boolean | ros.IResolvable;
        /**
         * @Property store: This parameter specifies whether to store the values of the field in the search index.
     * A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
     * This configuration optimizes query performance.
         */
        readonly store?: boolean | ros.IResolvable;
        /**
         * @Property index: This parameter specifies whether to index the column.
     * The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
         */
        readonly index?: boolean | ros.IResolvable;
        /**
         * @Property analyzer: This parameter specifies the tokenizer.
     * You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
         */
        readonly analyzer?: string | ros.IResolvable;
        /**
         * @Property subFieldSchemas: This parameter specifies the list of field schemas for subfields.
     * If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
         */
        readonly subFieldSchemas?: Array<RosSearchIndex.SubFieldSchemasProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fieldName: This parameter specifies the name of the field (column) to index.
     * The field can be a primary key column or an attribute column.
         */
        readonly fieldName: string | ros.IResolvable;
        /**
         * @Property fieldType: This parameter specifies the type of the field. Type: FieldType.
     * For more information, see the description of field types for a search index.
         */
        readonly fieldType: string | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface FieldSortProperty {
        /**
         * @Property sortMode: Sorting method when there are multiple values in the field.
         */
        readonly sortMode?: string | ros.IResolvable;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
         */
        readonly sortOrder?: string | ros.IResolvable;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface GeoDistanceSortProperty {
        /**
         * @Property points: The parameter of GeoDistanceSort
         */
        readonly points: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sortMode: Sorting method when there are multiple values in the field.
         */
        readonly sortMode?: string | ros.IResolvable;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order
         */
        readonly sortOrder?: string | ros.IResolvable;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface IndexSettingProperty {
        /**
         * @Property routingFields: You can use this advanced feature to customize routing fields.
     * You can specify some primary key columns as routing fields.
     * Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
     * The data with the same routing field values is distributed to the same data partition.
         */
        readonly routingFields?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface IndexSortProperty {
        /**
         * @Property sorters: This parameter specifies the sorting methods.  Valid values:
     * - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
     * - FieldSort: The index is sorted by a specified column in ascending or descending order.
         */
        readonly sorters: Array<RosSearchIndex.SortersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface PrimaryKeySortProperty {
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
         */
        readonly sortOrder?: string | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface ScoreSortProperty {
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order
         */
        readonly sortOrder?: string | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface SortersProperty {
        /**
         * @Property fieldSort: Sort by field value.
     * Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
         */
        readonly fieldSort?: RosSearchIndex.FieldSortProperty | ros.IResolvable;
        /**
         * @Property primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
         */
        readonly primaryKeySort?: RosSearchIndex.PrimaryKeySortProperty | ros.IResolvable;
        /**
         * @Property scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
     * ScoreSort is applicable to scenarios such as full-text indexing.
     * Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
         */
        readonly scoreSort?: RosSearchIndex.ScoreSortProperty | ros.IResolvable;
        /**
         * @Property geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
         */
        readonly geoDistanceSort?: RosSearchIndex.GeoDistanceSortProperty | ros.IResolvable;
    }
}
export declare namespace RosSearchIndex {
    /**
     * @stability external
     */
    interface SubFieldSchemasProperty {
        /**
         * @Property isArray: This parameter specifies whether the column is an array.
     * A value of true indicates that the column is an array. Data written to the column must be a JSON array.
     * Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
         */
        readonly isArray?: boolean | ros.IResolvable;
        /**
         * @Property enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
         */
        readonly enableSortAndAgg?: boolean | ros.IResolvable;
        /**
         * @Property store: This parameter specifies whether to store the values of the field in the search index.
     * A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
     * This configuration optimizes query performance.
         */
        readonly store?: boolean | ros.IResolvable;
        /**
         * @Property index: This parameter specifies whether to index the column.
     * The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
         */
        readonly index?: boolean | ros.IResolvable;
        /**
         * @Property analyzer: This parameter specifies the tokenizer.
     * You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
         */
        readonly analyzer?: string | ros.IResolvable;
        /**
         * @Property fieldName: This parameter specifies the name of the field (column) to index.
     * The field can be a primary key column or an attribute column.
         */
        readonly fieldName: string | ros.IResolvable;
        /**
         * @Property fieldType: This parameter specifies the type of the field. Type: FieldType.
     * For more information, see the description of field types for a search index.
         */
        readonly fieldType: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export interface RosTableProps {
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    readonly primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;
    /**
     * @Property columns: Attribute column for table store.
     */
    readonly columns?: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    readonly deviationCellVersionInSec?: number | ros.IResolvable;
    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    readonly maxVersions?: number | ros.IResolvable;
    /**
     * @Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    readonly reservedThroughput?: RosTable.ReservedThroughputProperty | ros.IResolvable;
    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    readonly secondaryIndices?: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    readonly timeToLive?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::Table`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Table` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export declare class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Table";
    /**
     * @Attribute TableName: Table name
     */
    readonly attrTableName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    tableName: string | ros.IResolvable;
    /**
     * @Property columns: Attribute column for table store.
     */
    columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    deviationCellVersionInSec: number | ros.IResolvable | undefined;
    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    maxVersions: number | ros.IResolvable | undefined;
    /**
     * @Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    reservedThroughput: RosTable.ReservedThroughputProperty | ros.IResolvable | undefined;
    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    secondaryIndices: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    timeToLive: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface ColumnsProperty {
        /**
         * @Property type: The type of the column.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: The column name of the column.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface PrimaryKeyProperty {
        /**
         * @Property type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Name for primary key.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface ReservedThroughputProperty {
        /**
         * @Property read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
         */
        readonly read: number | ros.IResolvable;
        /**
         * @Property write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
         */
        readonly write: number | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface SecondaryIndicesProperty {
        /**
         * @Property indexName: The index name.
         */
        readonly indexName: string | ros.IResolvable;
        /**
         * @Property columns: The columns of the index.
         */
        readonly columns: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property primaryKeys: The primary keys of the index.
         */
        readonly primaryKeys: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property indexType: The index type
         */
        readonly indexType?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export interface RosVpcBinderProps {
    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::VpcBinder`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcBinder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export declare class RosVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::VpcBinder";
    /**
     * @Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * @Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    readonly attrEndpoints: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: Instance name
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property vpcs: Vpc binding configuration.
     */
    vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcBinderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpcBinder {
    /**
     * @stability external
     */
    interface VpcsProperty {
        /**
         * @Property vpcId: Vpc Id.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property instanceVpcName: Custom name, need to be unique under the OTS instance.
         */
        readonly instanceVpcName: string | ros.IResolvable;
        /**
         * @Property network: Instance network type. The values are as follows:
     * 1, the NORMAL instance does not limit the source of the request. (Defaults)
     * 2. A VPC instance only allows requests from all VPCs it is bound to.
     * 3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
         */
        readonly network: string | ros.IResolvable;
        /**
         * @Property virtualSwitchId: vSwitch Id.
         */
        readonly virtualSwitchId: string | ros.IResolvable;
    }
}
