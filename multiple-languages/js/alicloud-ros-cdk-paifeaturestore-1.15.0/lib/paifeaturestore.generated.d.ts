import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDatasource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
export interface RosDatasourceProps {
    /**
     * @Property datasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    readonly datasourceName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property type: Data source type. The value is as follows:
     * *  Hologres
     * *  GraphCompute
     * *  FeatureDB
     * *  MaxCompute.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    readonly uri: string | ros.IResolvable;
    /**
     * @Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property config: Resource configuration information. The string format is json.
     */
    readonly config?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PaiFeatureStore::Datasource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Datasource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
export declare class RosDatasource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PaiFeatureStore::Datasource";
    /**
     * @Attribute Config: Resource configuration information. The string format is json.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DatasourceId: The first ID of the resource.
     */
    readonly attrDatasourceId: ros.IResolvable;
    /**
     * @Attribute DatasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    readonly attrDatasourceName: ros.IResolvable;
    /**
     * @Attribute Type: Data source type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute Uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    readonly attrUri: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property datasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    datasourceName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property type: Data source type. The value is as follows:
     * *  Hologres
     * *  GraphCompute
     * *  FeatureDB
     * *  MaxCompute.
     */
    type: string | ros.IResolvable;
    /**
     * @Property uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    uri: string | ros.IResolvable;
    /**
     * @Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property config: Resource configuration information. The string format is json.
     */
    config: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasourceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
