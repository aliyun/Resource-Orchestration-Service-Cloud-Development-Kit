import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceEndpointAclPolicy } from './cr.generated';
export { RosInstanceEndpointAclPolicy as InstanceEndpointAclPolicyProperty };
/**
 * Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export interface InstanceEndpointAclPolicyProps {
    /**
     * Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property comment: The description of the entry.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
    /**
     * Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export declare class InstanceEndpointAclPolicy extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Entry: The IP address range that is allowed to access the instance.
     */
    readonly attrEntry: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::InstanceEndpointAclPolicy`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceEndpointAclPolicyProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=instanceendpointaclpolicy.d.ts.map