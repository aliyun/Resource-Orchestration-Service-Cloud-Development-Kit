import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceEndpointAclPolicy } from './cr.generated';
export { RosInstanceEndpointAclPolicy as InstanceEndpointAclPolicyProperty };
/**
 * Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export interface InstanceEndpointAclPolicyProps {
    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property comment: The description of the entry.
     */
    readonly comment?: string;
    /**
     * @Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string;
    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string;
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
     * @Attribute Entry: The IP address range that is allowed to access the instance.
     */
    readonly attrEntry: any;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: any;
    /**
     * Create a new `ALIYUN::CR::InstanceEndpointAclPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceEndpointAclPolicyProps, enableResourcePropertyConstraint?: boolean);
}
