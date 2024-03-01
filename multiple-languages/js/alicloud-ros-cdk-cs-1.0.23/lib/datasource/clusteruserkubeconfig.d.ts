import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterUserKubeconfig } from './cs.generated';
export { RosClusterUserKubeconfig as ClusterUserKubeconfigProperty };
/**
 * Properties for defining a `ClusterUserKubeconfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
 */
export interface ClusterUserKubeconfigProps {
    /**
     * Property clusterId: The ID of the ACK cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
     * true: obtains the credential that is used to connect to the cluster over the internal network.
     * false: obtains the credential that is used to connect to the cluster over the Internet.
     * Default value: false.
     */
    readonly privateIpAddress?: boolean | ros.IResolvable;
    /**
     * Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    readonly temporaryDurationMinutes?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::ClusterUserKubeconfig`, which is used to query the kubeconfig configurations of a Container Service for Kubernetes (ACK) cluster by cluster ID.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterUserKubeconfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
 */
export declare class ClusterUserKubeconfig extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterUserKubeconfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: The ID of the ACK cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute Config: The content of the kubeconfig file.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * Attribute Expiration: The expiration time of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
     */
    readonly attrExpiration: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterUserKubeconfigProps, enableResourcePropertyConstraint?: boolean);
}
