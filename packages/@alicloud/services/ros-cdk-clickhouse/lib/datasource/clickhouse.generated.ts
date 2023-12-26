// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export interface RosDBClustersProps {

    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId?: string | ros.IResolvable;

    /**
     * @Property dbClusterName: The cluster description information.
     */
    readonly dbClusterName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDBClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbClusterName', ros.validateString)(properties.dbClusterName));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    return errors.wrap('supplied properties not correct for "RosDBClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBClusters` resource.
 */
// @ts-ignore TS6133
function rosDBClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClustersPropsValidator(properties).assertSuccess();
    }
    return {
      DBClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      DBClusterName: ros.stringToRosTemplate(properties.dbClusterName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBClusters`, which is used to query the information about ApsaraDB for ClickHouse clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBClusters";

    /**
     * @Attribute DBClusterIds: The list of db cluster IDs.
     */
    public readonly attrDbClusterIds: ros.IResolvable;

    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    public readonly attrDbClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: Instance ID.
     */
    public dbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterName: The cluster description information.
     */
    public dbClusterName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterIds = this.getAtt('DBClusterIds');
        this.attrDbClusters = this.getAtt('DBClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbClusterName = props.dbClusterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbClusterName: this.dbClusterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
