// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export interface RosDomainsProps {
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
    return errors.wrap('supplied properties not correct for "RosDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Domains`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domains";

    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * @Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainIds = this.getAtt('DomainIds');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosIpfilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export interface RosIpfiltersProps {
}

/**
 * Determine whether the given properties match those of a `RosIpfiltersProps`
 *
 * @param properties - the TypeScript properties of a `RosIpfiltersProps`
 *
 * @returns the result of the validation.
 */
function RosIpfiltersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosIpfiltersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilters` resource
 *
 * @param properties - the TypeScript properties of a `RosIpfiltersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilters` resource.
 */
// @ts-ignore TS6133
function rosIpfiltersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpfiltersPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Ipfilters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export class RosIpfilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilters";

    /**
     * @Attribute IpfilterIds: The list of ip filter IDs.
     */
    public readonly attrIpfilterIds: ros.IResolvable;

    /**
     * @Attribute Ipfilters: The list of ip filters.
     */
    public readonly attrIpfilters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfiltersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpfilters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpfilterIds = this.getAtt('IpfilterIds');
        this.attrIpfilters = this.getAtt('Ipfilters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpfiltersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
