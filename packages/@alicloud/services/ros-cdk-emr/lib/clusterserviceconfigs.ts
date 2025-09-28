import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterServiceConfigs } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterServiceConfigs as ClusterServiceConfigsProperty };

/**
 * Properties for defining a `ClusterServiceConfigs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
export interface ClusterServiceConfigsProps {

    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property serviceConfigs: Server configs
     */
    readonly serviceConfigs: Array<RosClusterServiceConfigs.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `ClusterServiceConfigs`.
 */
export interface IClusterServiceConfigs extends ros.IResource {
    readonly props: ClusterServiceConfigsProps;

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::ClusterServiceConfigs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterServiceConfigs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
export class ClusterServiceConfigs extends ros.Resource implements IClusterServiceConfigs {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClusterServiceConfigsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterServiceConfigsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusterServiceConfigs = new RosClusterServiceConfigs(this, id,  {
            clusterId: props.clusterId,
            serviceConfigs: props.serviceConfigs,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterServiceConfigs;
        this.attrClusterId = rosClusterServiceConfigs.attrClusterId;
    }
}
