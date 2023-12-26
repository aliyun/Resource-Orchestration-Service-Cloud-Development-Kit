import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainConfig } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property functions: function list, please refer to the CDN documentation for details.
     */
    readonly functions: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::DomainConfig`, which is used to add multiple domain name settings.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export class DomainConfig extends ros.Resource {

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomainConfig = new RosDomainConfig(this, id,  {
            functions: props.functions,
            domainNames: props.domainNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainConfig;
    }
}
