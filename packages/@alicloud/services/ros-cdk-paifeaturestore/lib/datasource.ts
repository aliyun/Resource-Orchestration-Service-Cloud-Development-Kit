import * as ros from '@alicloud/ros-cdk-core';
import { RosDatasource } from './paifeaturestore.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatasource as DatasourceProperty };

/**
 * Properties for defining a `Datasource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
export interface DatasourceProps {

    /**
     * Property datasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    readonly datasourceName: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property type: Data source type. The value is as follows:
     * *  Hologres
     * *  GraphCompute
     * *  FeatureDB
     * *  MaxCompute.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    readonly uri: string | ros.IResolvable;

    /**
     * Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property config: Resource configuration information. The string format is json.
     */
    readonly config?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `Datasource`.
 */
export interface IDatasource extends ros.IResource {
    readonly props: DatasourceProps;

    /**
     * Attribute Config: Resource configuration information. The string format is json.
     */
    readonly attrConfig: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DatasourceId: The first ID of the resource.
     */
    readonly attrDatasourceId: ros.IResolvable | string;

    /**
     * Attribute DatasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    readonly attrDatasourceName: ros.IResolvable | string;

    /**
     * Attribute Type: Data source type.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute Uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    readonly attrUri: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PaiFeatureStore::Datasource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatasource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
export class Datasource extends ros.Resource implements IDatasource {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DatasourceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Config: Resource configuration information. The string format is json.
     */
    public readonly attrConfig: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DatasourceId: The first ID of the resource.
     */
    public readonly attrDatasourceId: ros.IResolvable | string;

    /**
     * Attribute DatasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    public readonly attrDatasourceName: ros.IResolvable | string;

    /**
     * Attribute Type: Data source type.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute Uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    public readonly attrUri: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    public readonly attrWorkspaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDatasource = new RosDatasource(this, id,  {
            type: props.type,
            datasourceName: props.datasourceName,
            instanceId: props.instanceId,
            config: props.config,
            workspaceId: props.workspaceId,
            uri: props.uri,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatasource;
        this.attrConfig = rosDatasource.attrConfig;
        this.attrCreateTime = rosDatasource.attrCreateTime;
        this.attrDatasourceId = rosDatasource.attrDatasourceId;
        this.attrDatasourceName = rosDatasource.attrDatasourceName;
        this.attrType = rosDatasource.attrType;
        this.attrUri = rosDatasource.attrUri;
        this.attrWorkspaceId = rosDatasource.attrWorkspaceId;
    }
}
