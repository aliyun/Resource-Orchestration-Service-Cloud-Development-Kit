import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainConfig } from './cdn.generated';
export { RosDomainConfig as DomainConfigProperty };
/**
 * Properties for defining a `DomainConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export interface DomainConfigProps {
    /**
     * Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string | ros.IResolvable;
    /**
     * Property functionList: Function list. This property is required.
     */
    readonly functionList?: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `DomainConfig`.
 */
export interface IDomainConfig extends ros.IResource {
    readonly props: DomainConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::DomainConfig`, which is used to configure multiple domain names at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export declare class DomainConfig extends ros.Resource implements IDomainConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainConfigProps, enableResourcePropertyConstraint?: boolean);
}
