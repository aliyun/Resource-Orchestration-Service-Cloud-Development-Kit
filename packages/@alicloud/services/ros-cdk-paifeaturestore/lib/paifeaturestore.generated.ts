// Generated from the AliCloud ROS Resource Specification

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
    readonly config?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasourceProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasourceProps`
 *
 * @returns the result of the validation.
 */
function RosDatasourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Hologres","GraphCompute","FeatureDB","MaxCompute"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('datasourceName', ros.requiredValidator)(properties.datasourceName));
    errors.collect(ros.propertyValidator('datasourceName', ros.validateString)(properties.datasourceName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('config', ros.hashValidator(ros.validateAny))(properties.config));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('uri', ros.requiredValidator)(properties.uri));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    return errors.wrap('supplied properties not correct for "RosDatasourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PaiFeatureStore::Datasource` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PaiFeatureStore::Datasource` resource.
 */
// @ts-ignore TS6133
function rosDatasourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasourcePropsValidator(properties).assertSuccess();
    }
    return {
      'DatasourceName': ros.stringToRosTemplate(properties.datasourceName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Type': ros.stringToRosTemplate(properties.type),
      'Uri': ros.stringToRosTemplate(properties.uri),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'Config': ros.hashMapper(ros.objectToRosTemplate)(properties.config),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PaiFeatureStore::Datasource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Datasource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
export class RosDatasource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PaiFeatureStore::Datasource";

    /**
     * @Attribute Config: Resource configuration information. The string format is json.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DatasourceId: The first ID of the resource.
     */
    public readonly attrDatasourceId: ros.IResolvable;

    /**
     * @Attribute DatasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    public readonly attrDatasourceName: ros.IResolvable;

    /**
     * @Attribute Type: Data source type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute Uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    public readonly attrUri: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasourceName: The datasource name. Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    public datasourceName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property type: Data source type. The value is as follows:
     * *  Hologres
     * *  GraphCompute
     * *  FeatureDB
     * *  MaxCompute.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property uri: The resource address of the datasource. The maximum length cannot exceed 64.
     */
    public uri: string | ros.IResolvable;

    /**
     * @Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property config: Resource configuration information. The string format is json.
     */
    public config: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatasource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfig = this.getAtt('Config');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDatasourceId = this.getAtt('DatasourceId');
        this.attrDatasourceName = this.getAtt('DatasourceName');
        this.attrType = this.getAtt('Type');
        this.attrUri = this.getAtt('Uri');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasourceName = props.datasourceName;
        this.instanceId = props.instanceId;
        this.type = props.type;
        this.uri = props.uri;
        this.workspaceId = props.workspaceId;
        this.config = props.config;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasourceName: this.datasourceName,
            instanceId: this.instanceId,
            type: this.type,
            uri: this.uri,
            workspaceId: this.workspaceId,
            config: this.config,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
