import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkPackageAssociation } from './ecd.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkPackageAssociation as NetworkPackageAssociationProperty };

/**
 * Properties for defining a `NetworkPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export interface NetworkPackageAssociationProps {

    /**
     * Property networkPackageId: The ID of the Internet access package.
     */
    readonly networkPackageId: string | ros.IResolvable;

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::NetworkPackageAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkPackageAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export class NetworkPackageAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NetworkPackageAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkPackageId: The ID of the Internet access package.
     */
    public readonly attrNetworkPackageId: ros.IResolvable;

    /**
     * Attribute OfficeSiteId: The ID of the workspace.
     */
    public readonly attrOfficeSiteId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkPackageAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkPackageAssociation = new RosNetworkPackageAssociation(this, id,  {
            officeSiteId: props.officeSiteId,
            networkPackageId: props.networkPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkPackageAssociation;
        this.attrNetworkPackageId = rosNetworkPackageAssociation.attrNetworkPackageId;
        this.attrOfficeSiteId = rosNetworkPackageAssociation.attrOfficeSiteId;
    }
}
