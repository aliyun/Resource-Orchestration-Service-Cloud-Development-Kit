import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::OTS::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string;
    /**
     * @Property clusterType: Cluster type, the default is SSD.
     */
    readonly clusterType?: string;
    /**
     * @Property description: Instance description.
     */
    readonly description?: string;
    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string;
    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
}
/**
 * A ROS template type:  `ALIYUN::OTS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: any;
    /**
     * @Attribute PrivateEndpoint: Private endpoint
     */
    readonly attrPrivateEndpoint: any;
    /**
     * @Attribute PublicEndpoint: Public endpoint
     */
    readonly attrPublicEndpoint: any;
    /**
     * @Attribute VpcEndpoint: Vpc endpoint
     */
    readonly attrVpcEndpoint: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance.
     */
    instanceName: string;
    /**
     * @Property clusterType: Cluster type, the default is SSD.
     */
    clusterType: string | undefined;
    /**
     * @Property description: Instance description.
     */
    description: string | undefined;
    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    network: string | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * Create a new `ALIYUN::OTS::Instance`.
     *
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
/**
 * Properties for defining a `ALIYUN::OTS::SearchIndex`
 */
export interface RosSearchIndexProps {
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
 * A ROS template type:  `ALIYUN::OTS::SearchIndex`
 */
export declare class RosSearchIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::SearchIndex";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute IndexName: Index name.
     */
    readonly attrIndexName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fieldSchemas: list of field_schema.
     */
    fieldSchemas: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property indexName: The index name.
     */
    indexName: string;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    instanceName: string;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    tableName: string;
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
     * Create a new `ALIYUN::OTS::SearchIndex`.
     *
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
    interface FieldSortProperty {
        /**
         * @Property sortMode: Sorting method when there are multiple values in the field.
         */
        readonly sortMode?: string;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
         */
        readonly sortOrder?: string;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string;
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
        readonly sortMode?: string;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order
         */
        readonly sortOrder?: string;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string;
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
        readonly sortOrder?: string;
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
        readonly sortOrder?: string;
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
/**
 * Properties for defining a `ALIYUN::OTS::Table`
 */
export interface RosTableProps {
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string;
    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    readonly primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string;
    /**
     * @Property columns: Attribute column for table store.
     */
    readonly columns?: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    readonly deviationCellVersionInSec?: number;
    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    readonly maxVersions?: number;
    /**
     * @Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    readonly reservedThroughput?: RosTable.ReservedThroughputProperty | ros.IResolvable;
    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    readonly secondaryIndices?: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    readonly timeToLive?: number;
}
/**
 * A ROS template type:  `ALIYUN::OTS::Table`
 */
export declare class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Table";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TableName: Table name
     */
    readonly attrTableName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    instanceName: string;
    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tableName: The table name of the OTS instance.
     */
    tableName: string;
    /**
     * @Property columns: Attribute column for table store.
     */
    columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    deviationCellVersionInSec: number | undefined;
    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    maxVersions: number | undefined;
    /**
     * @Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    reservedThroughput: RosTable.ReservedThroughputProperty | ros.IResolvable | undefined;
    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    secondaryIndices: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    timeToLive: number | undefined;
    /**
     * Create a new `ALIYUN::OTS::Table`.
     *
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
        readonly type: string;
        /**
         * @Property name: The column name of the column.
         */
        readonly name: string;
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
        readonly type: string;
        /**
         * @Property name: Name for primary key.
         */
        readonly name: string;
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
        readonly read: number;
        /**
         * @Property write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
         */
        readonly write: number;
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
        readonly indexName: string;
        /**
         * @Property columns: The columns of the index.
         */
        readonly columns: string[];
        /**
         * @Property primaryKeys: The primary keys of the index.
         */
        readonly primaryKeys: string[];
        /**
         * @Property indexType: The index type
         */
        readonly indexType?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::OTS::VpcBinder`
 */
export interface RosVpcBinderProps {
    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName: string;
    /**
     * @Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OTS::VpcBinder`
 */
export declare class RosVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::VpcBinder";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    readonly attrDomains: any;
    /**
     * @Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    readonly attrEndpoints: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: Instance name
     */
    instanceName: string;
    /**
     * @Property vpcs: Vpc binding configuration.
     */
    vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::OTS::VpcBinder`.
     *
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
        readonly vpcId: string;
        /**
         * @Property instanceVpcName: Custom name, need to be unique under the OTS instance.
         */
        readonly instanceVpcName: string;
        /**
         * @Property network: Instance network type. The values are as follows:
     * 1, the NORMAL instance does not limit the source of the request. (Defaults)
     * 2. A VPC instance only allows requests from all VPCs it is bound to.
     * 3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
         */
        readonly network: string;
        /**
         * @Property virtualSwitchId: vSwitch Id.
         */
        readonly virtualSwitchId: string;
    }
}
