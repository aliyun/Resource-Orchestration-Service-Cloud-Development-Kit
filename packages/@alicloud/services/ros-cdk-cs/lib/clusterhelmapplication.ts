import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterHelmApplication } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterHelmApplication as ClusterHelmApplicationProperty };

/**
 * Properties for defining a `ALIYUN::CS::ClusterHelmApplication`
 */
export interface ClusterHelmApplicationProps {

    /**
     * Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    readonly chartUrl: string | ros.IResolvable;

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property name: The name for helm release.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property chartValues: Chart custom values.
     */
    readonly chartValues?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property namespace: Namespace to use with helm. Default is default
     */
    readonly namespace?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CS::ClusterHelmApplication`
 */
export class ClusterHelmApplication extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::ClusterHelmApplication`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterHelmApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterHelmApplication = new RosClusterHelmApplication(this, id,  {
            chartValues: props.chartValues,
            clusterId: props.clusterId,
            chartUrl: props.chartUrl,
            namespace: props.namespace === undefined || props.namespace === null ? 'default' : props.namespace,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterHelmApplication;
        this.attrClusterId = rosClusterHelmApplication.attrClusterId;
    }
}
