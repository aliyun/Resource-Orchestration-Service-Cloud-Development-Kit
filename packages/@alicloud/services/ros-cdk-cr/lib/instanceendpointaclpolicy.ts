import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceEndpointAclPolicy } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceEndpointAclPolicy as InstanceEndpointAclPolicyProperty };

/**
 * Properties for defining a `InstanceEndpointAclPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::InstanceEndpointAclPolicy`, which is used to create a whitelist for the access port of a public-facing instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceEndpointAclPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
export class InstanceEndpointAclPolicy extends ros.Resource {

    /**
     * Attribute Entry: The IP address range that is allowed to access the instance.
     */
    public readonly attrEntry: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceEndpointAclPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstanceEndpointAclPolicy = new RosInstanceEndpointAclPolicy(this, id,  {
            comment: props.comment,
            entry: props.entry,
            instanceId: props.instanceId,
            moduleName: props.moduleName === undefined || props.moduleName === null ? 'Registry' : props.moduleName,
            endpointType: props.endpointType === undefined || props.endpointType === null ? 'internet' : props.endpointType,
            regionId: props.regionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceEndpointAclPolicy;
        this.attrEntry = rosInstanceEndpointAclPolicy.attrEntry;
        this.attrInstanceId = rosInstanceEndpointAclPolicy.attrInstanceId;
    }
}
