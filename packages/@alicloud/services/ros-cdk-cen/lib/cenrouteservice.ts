import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteService } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenRouteService as CenRouteServiceProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenRouteService`
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
     * Property description: The description of the cloud service.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteService`
 */
export class CenRouteService extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CEN::CenRouteService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenRouteService = new RosCenRouteService(this, id,  {
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
