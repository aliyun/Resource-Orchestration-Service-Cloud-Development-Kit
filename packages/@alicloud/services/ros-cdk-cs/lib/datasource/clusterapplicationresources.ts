import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplicationResources } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterApplicationResources as ClusterApplicationResourcesProperty };

/**
 * Properties for defining a `ClusterApplicationResources`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::ClusterApplicationResources`, which is used to query the details of specified types of resources in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplicationResources`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
export class ClusterApplicationResources extends ros.Resource {

    /**
     * Attribute Response: Query result of kubernetes resource(s).
     */
    public readonly attrResponse: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationResourcesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterApplicationResources = new RosClusterApplicationResources(this, id,  {
            firstMatch: props.firstMatch === undefined || props.firstMatch === null ? false : props.firstMatch,
            clusterId: props.clusterId,
            kind: props.kind,
            jsonPath: props.jsonPath,
            namespace: props.namespace === undefined || props.namespace === null ? 'default' : props.namespace,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplicationResources;
        this.attrResponse = rosClusterApplicationResources.attrResponse;
    }
}
