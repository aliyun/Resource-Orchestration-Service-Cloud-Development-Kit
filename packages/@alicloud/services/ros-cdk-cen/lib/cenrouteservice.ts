import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteService } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenRouteService as CenRouteServiceProperty };

/**
 * Properties for defining a `CenRouteService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export interface CenRouteServiceProps {

    /**
     * Property accessRegionId: The region where the cloud service is deployed.
     */
    readonly accessRegionId: string | ros.IResolvable;

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * Property host: The domain or IP address of the cloud service.
     */
    readonly host: string | ros.IResolvable;

    /**
     * Property hostRegionId: The region where the cloud service is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    readonly hostRegionId: string | ros.IResolvable;

    /**
     * Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    readonly hostVpcId: string | ros.IResolvable;

    /**
     * Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    readonly conflictIgnore?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the cloud service.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenRouteService`, which is used to access an Alibaba Cloud service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenRouteService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export class CenRouteService extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CenRouteServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCenRouteService = new RosCenRouteService(this, id,  {
            conflictIgnore: props.conflictIgnore === undefined || props.conflictIgnore === null ? false : props.conflictIgnore,
            description: props.description,
            hostRegionId: props.hostRegionId,
            cenId: props.cenId,
            accessRegionId: props.accessRegionId,
            host: props.host,
            hostVpcId: props.hostVpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteService;
        this.attrId = rosCenRouteService.attrId;
    }
}
