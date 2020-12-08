import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './fc.generated';
export { RosCustomDomain as CustomDomainProperty };
/**
 * Properties for defining a `ALIYUN::FC::CustomDomain`
 */
export interface CustomDomainProps {
    /**
     * @Property domainName: domain name
     */
    readonly domainName: string;
    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string;
    /**
     * @Property apiVersion: api version
     */
    readonly apiVersion?: string;
    /**
     * @Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;
    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
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
     * @Attribute Domain: The domain with protocol.
     */
    readonly attrDomain: any;
    /**
     * @Attribute DomainName: The domain name
     */
    readonly attrDomainName: any;
    /**
     * Create a new `ALIYUN::FC::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint?: boolean);
}
