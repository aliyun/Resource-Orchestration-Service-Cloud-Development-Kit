import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAclAssociation } from './ens.generated';
export { RosNetworkAclAssociation as NetworkAclAssociationProperty };
/**
 * Properties for defining a `NetworkAclAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
export interface NetworkAclAssociationProps {
    /**
     * Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId: string | ros.IResolvable;
    /**
     * Property networkIds: The network id which you want to associate the network ACL.
     */
    readonly networkIds: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `NetworkAclAssociation`.
 */
export interface INetworkAclAssociation extends ros.IResource {
    readonly props: NetworkAclAssociationProps;
    /**
     * Attribute NetworkAclId: The network acl id to associate.
     */
    readonly attrNetworkAclId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::NetworkAclAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAclAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
export declare class NetworkAclAssociation extends ros.Resource implements INetworkAclAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkAclAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkAclId: The network acl id to associate.
     */
    readonly attrNetworkAclId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkAclAssociationProps, enableResourcePropertyConstraint?: boolean);
}
