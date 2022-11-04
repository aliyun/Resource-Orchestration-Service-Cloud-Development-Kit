import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplication } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterApplication as ClusterApplicationProperty };

/**
 * Properties for defining a `ALIYUN::CS::ClusterApplication`
 */
export interface ClusterApplicationProps {

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property yamlContent: The yaml content of application.
     */
    readonly yamlContent: string | ros.IResolvable;

    /**
     * Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     */
    readonly defaultNamespace?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CS::ClusterApplication`
 */
export class ClusterApplication extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::ClusterApplication`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterApplication = new RosClusterApplication(this, id,  {
            yamlContent: props.yamlContent,
            clusterId: props.clusterId,
            defaultNamespace: props.defaultNamespace === undefined || props.defaultNamespace === null ? 'default' : props.defaultNamespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplication;
        this.attrClusterId = rosClusterApplication.attrClusterId;
    }
}
