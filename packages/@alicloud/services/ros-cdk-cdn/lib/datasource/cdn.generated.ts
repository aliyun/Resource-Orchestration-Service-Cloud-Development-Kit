// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export interface RosDomainsProps {

    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    return errors.wrap('supplied properties not correct for "RosDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      DomainName: ros.stringToRosTemplate(properties.domainName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDN::Domains`, which is used to query information about Content Delivery Network (CDN) domain names.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDN::Domains";

    /**
     * @Attribute DomainNames: The list of domain names.
     */
    public readonly attrDomainNames: ros.IResolvable;

    /**
     * @Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainNames = this.getAtt('DomainNames');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
