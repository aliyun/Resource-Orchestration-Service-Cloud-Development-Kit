import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainConfig } from './cdn.generated';
export { RosDomainConfig as DomainConfigProperty };
/**
 * Properties for defining a `ALIYUN::CDN::DomainConfig`
 */
export interface DomainConfigProps {
    /**
     * Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string | ros.IResolvable;
    /**
     * Property functions: function list, please refer to the CDN documentation for details.
     */
    readonly functions: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CDN::DomainConfig`
 */
export declare class DomainConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainConfigProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=domainconfig.d.ts.map