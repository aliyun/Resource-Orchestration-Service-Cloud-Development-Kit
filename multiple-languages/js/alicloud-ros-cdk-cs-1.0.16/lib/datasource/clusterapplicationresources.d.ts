import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplicationResources } from './cs.generated';
export { RosClusterApplicationResources as ClusterApplicationResourcesProperty };
/**
 * Properties for defining a `DATASOURCE::CS::ClusterApplicationResources`
 */
export interface ClusterApplicationResourcesProps {
    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property kind: The kind of kubernetes resources to query.
     */
    readonly kind: string | ros.IResolvable;
    /**
     * Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
     */
    readonly firstMatch?: boolean | ros.IResolvable;
    /**
     * Property jsonPath: Json path expression to filter the output.
     */
    readonly jsonPath?: string | ros.IResolvable;
    /**
     * Property name: The name of the kubernetes resource to query.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property namespace: The namespace of kubernetes containing the resource. Default value is default
     */
    readonly namespace?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CS::ClusterApplicationResources`
 */
export declare class ClusterApplicationResources extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Response: Query result of kubernetes resource(s).
     */
    readonly attrResponse: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CS::ClusterApplicationResources`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationResourcesProps, enableResourcePropertyConstraint?: boolean);
}
