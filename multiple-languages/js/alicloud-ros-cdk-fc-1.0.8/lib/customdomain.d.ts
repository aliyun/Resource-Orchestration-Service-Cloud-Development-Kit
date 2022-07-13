import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './fc.generated';
export { RosCustomDomain as CustomDomainProperty };
/**
 * Properties for defining a `ALIYUN::FC::CustomDomain`
 */
export interface CustomDomainProps {
    /**
     * Property domainName: domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * Property apiVersion: api version
     */
    readonly apiVersion?: string | ros.IResolvable;
    /**
     * Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;
    /**
     * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::FC::CustomDomain`
 */
export declare class CustomDomain extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Domain: The domain with protocol.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * Attribute DomainName: The domain name
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::CustomDomain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint?: boolean);
}
