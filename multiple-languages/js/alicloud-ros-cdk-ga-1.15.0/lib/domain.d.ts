import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './ga.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export interface DomainProps {
    /**
     * Property acceleratorIds: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
     */
    readonly acceleratorIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property domain: The accelerated domain name to be disassociated.
     */
    readonly domain: string | ros.IResolvable;
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute AcceleratorIds: The IDs of GA instances.
     */
    readonly attrAcceleratorIds: ros.IResolvable | string;
    /**
     * Attribute Domain: The accelerated domain name.
     */
    readonly attrDomain: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::Domain`, which is used to create a domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AcceleratorIds: The IDs of GA instances.
     */
    readonly attrAcceleratorIds: ros.IResolvable | string;
    /**
     * Attribute Domain: The accelerated domain name.
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
