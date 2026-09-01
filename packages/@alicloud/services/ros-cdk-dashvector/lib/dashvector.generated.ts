// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export interface RosClusterProps {

    /**
     * @Property clusterName: The name of cluster.
     */
    readonly clusterName: string | ros.IResolvable;

    /**
     * @Property clusterType: The type of cluster.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property replicaCount: The number of replicas.
     */
    readonly replicaCount: number | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing dash vector cluster
     * False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
     * If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    errors.collect(ros.propertyValidator('replicaCount', ros.requiredValidator)(properties.replicaCount));
    if(properties.replicaCount && (typeof properties.replicaCount) !== 'object') {
        errors.collect(ros.propertyValidator('replicaCount', ros.validateRange)({
            data: properties.replicaCount,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('replicaCount', ros.validateNumber)(properties.replicaCount));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    if(properties.clusterName && (typeof properties.clusterName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterName', ros.validateAllowedPattern)({
          data: properties.clusterName,
          reg: /^[-a-zA-Z0-9_]{3,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["Serverless","S.small","S.large","S.xlarge","S.2xlarge","S.4xlarge","S.8xlarge","S.16xlarge","P.small","P.large","P.xlarge","P.2xlarge","P.4xlarge","P.8xlarge","P.16xlarge"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DashVector::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DashVector::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'ReplicaCount': ros.numberToRosTemplate(properties.replicaCount),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DashVector::Cluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DashVector::Cluster";

    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute Endpoint: The endpoint of the cluster.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the cluster.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterName: The name of cluster.
     */
    public clusterName: string | ros.IResolvable;

    /**
     * @Property clusterType: The type of cluster.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property replicaCount: The number of replicas.
     */
    public replicaCount: number | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing dash vector cluster
     * False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
     * If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.clusterType = props.clusterType;
        this.replicaCount = props.replicaCount;
        this.ignoreExisting = props.ignoreExisting;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterName: this.clusterName,
            clusterType: this.clusterType,
            replicaCount: this.replicaCount,
            ignoreExisting: this.ignoreExisting,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
