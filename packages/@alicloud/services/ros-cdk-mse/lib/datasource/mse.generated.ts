// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export interface RosClustersProps {

    /**
     * @Property clusterAliasName: The alias name of cluster.
     */
    readonly clusterAliasName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosClustersProps`
 *
 * @returns the result of the validation.
 */
function RosClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterAliasName', ros.validateString)(properties.clusterAliasName));
    return errors.wrap('supplied properties not correct for "RosClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MSE::Clusters` resource
 *
 * @param properties - the TypeScript properties of a `RosClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MSE::Clusters` resource.
 */
// @ts-ignore TS6133
function rosClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClustersPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterAliasName: ros.stringToRosTemplate(properties.clusterAliasName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MSE::Clusters`, which is used to query the clusters of Microservices Registry.
 * @Note This class does not contain additional functions, so it is recommended to use the `Clusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export class RosClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MSE::Clusters";

    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Clusters: The list of clusters.
     */
    public readonly attrClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterAliasName: The alias name of cluster.
     */
    public clusterAliasName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrClusters = this.getAtt('Clusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterAliasName = props.clusterAliasName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterAliasName: this.clusterAliasName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
export interface RosGatewaysProps {

    /**
     * @Property gatewayId: The ID of gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;

    /**
     * @Property gatewayType: The type of gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;

    /**
     * @Property instanceId: The instance ID of gateway.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property name: The name of gateway.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property vpc: The vpc ID of gateway.
     */
    readonly vpc?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosGatewaysPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('vpc', ros.validateString)(properties.vpc));
    errors.collect(ros.propertyValidator('gatewayType', ros.validateString)(properties.gatewayType));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGatewaysProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MSE::Gateways` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewaysProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MSE::Gateways` resource.
 */
// @ts-ignore TS6133
function rosGatewaysPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewaysPropsValidator(properties).assertSuccess();
    }
    return {
      GatewayId: ros.stringToRosTemplate(properties.gatewayId),
      GatewayType: ros.stringToRosTemplate(properties.gatewayType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Name: ros.stringToRosTemplate(properties.name),
      Vpc: ros.stringToRosTemplate(properties.vpc),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MSE::Gateways`, which is used to query gateways.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
export class RosGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MSE::Gateways";

    /**
     * @Attribute GatewayIds: The list of gateway IDs.
     */
    public readonly attrGatewayIds: ros.IResolvable;

    /**
     * @Attribute Gateways: The list of gateways.
     */
    public readonly attrGateways: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of gateway.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property gatewayType: The type of gateway.
     */
    public gatewayType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The instance ID of gateway.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of gateway.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property vpc: The vpc ID of gateway.
     */
    public vpc: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewaysProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayIds = this.getAtt('GatewayIds');
        this.attrGateways = this.getAtt('Gateways');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.gatewayType = props.gatewayType;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.vpc = props.vpc;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            gatewayType: this.gatewayType,
            instanceId: this.instanceId,
            name: this.name,
            vpc: this.vpc,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
