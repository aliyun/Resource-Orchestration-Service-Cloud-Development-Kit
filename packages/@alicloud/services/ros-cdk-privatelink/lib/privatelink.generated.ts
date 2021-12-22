// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`
 */
export interface RosVpcEndpointProps {

    /**
     * @Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
     */
    readonly securityGroupId: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcId: The VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property endpointDescription: The description of the endpoint.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly endpointDescription?: string | ros.IResolvable;

    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    readonly endpointName?: string | ros.IResolvable;

    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceId?: string | ros.IResolvable;

    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceName?: string | ros.IResolvable;

    /**
     * @Property zone:
     */
    readonly zone?: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosVpcEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.endpointName && (Array.isArray(properties.endpointName) || (typeof properties.endpointName) === 'string')) {
        errors.collect(ros.propertyValidator('endpointName', ros.validateLength)({
            data: properties.endpointName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('endpointName', ros.validateString)(properties.endpointName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if(properties.zone && (Array.isArray(properties.zone) || (typeof properties.zone) === 'string')) {
        errors.collect(ros.propertyValidator('zone', ros.validateLength)({
            data: properties.zone.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('zone', ros.listValidator(RosVpcEndpoint_ZonePropertyValidator))(properties.zone));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    if(properties.securityGroupId && (Array.isArray(properties.securityGroupId) || (typeof properties.securityGroupId) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupId', ros.validateLength)({
            data: properties.securityGroupId.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupId', ros.listValidator(ros.validateString))(properties.securityGroupId));
    if(properties.endpointDescription && (Array.isArray(properties.endpointDescription) || (typeof properties.endpointDescription) === 'string')) {
        errors.collect(ros.propertyValidator('endpointDescription', ros.validateLength)({
            data: properties.endpointDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('endpointDescription', ros.validateString)(properties.endpointDescription));
    errors.collect(ros.propertyValidator('serviceId', ros.validateString)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "RosVpcEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpoint` resource.
 */
// @ts-ignore TS6133
function rosVpcEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      SecurityGroupId: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      EndpointDescription: ros.stringToRosTemplate(properties.endpointDescription),
      EndpointName: ros.stringToRosTemplate(properties.endpointName),
      ServiceId: ros.stringToRosTemplate(properties.serviceId),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Zone: ros.listMapper(rosVpcEndpointZonePropertyToRosTemplate)(properties.zone),
    };
}

/**
 * A ROS template type:  `ALIYUN::PrivateLink::VpcEndpoint`
 */
export class RosVpcEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpoint";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Bandwidth: The bandwidth of the endpoint.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute EndpointDomain: The domain name of the endpoint.
     */
    public readonly attrEndpointDomain: ros.IResolvable;

    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * @Attribute EndpointName: The name of the endpoint.
     */
    public readonly attrEndpointName: ros.IResolvable;

    /**
     * @Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute VpcId: The vpc ID of endpoint.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneDomains: The zone domains.
     */
    public readonly attrZoneDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
     */
    public securityGroupId: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcId: The VPC to which the endpoint belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property endpointDescription: The description of the endpoint.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    public endpointDescription: string | ros.IResolvable | undefined;

    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    public endpointName: string | ros.IResolvable | undefined;

    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    public serviceId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    public serviceName: string | ros.IResolvable | undefined;

    /**
     * @Property zone:
     */
    public zone: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrEndpointDomain = this.getAtt('EndpointDomain');
        this.attrEndpointId = this.getAtt('EndpointId');
        this.attrEndpointName = this.getAtt('EndpointName');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneDomains = this.getAtt('ZoneDomains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.securityGroupId = props.securityGroupId;
        this.vpcId = props.vpcId;
        this.endpointDescription = props.endpointDescription;
        this.endpointName = props.endpointName;
        this.serviceId = props.serviceId;
        this.serviceName = props.serviceName;
        this.zone = props.zone;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            securityGroupId: this.securityGroupId,
            vpcId: this.vpcId,
            endpointDescription: this.endpointDescription,
            endpointName: this.endpointName,
            serviceId: this.serviceId,
            serviceName: this.serviceName,
            zone: this.zone,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpcEndpoint {
    /**
     * @stability external
     */
    export interface ZoneProperty {
        /**
         * @Property zoneId: The zone of the associated endpoint service.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The switch of the endpoint network interface in the given zone.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneProperty`
 *
 * @returns the result of the validation.
 */
function RosVpcEndpoint_ZonePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "ZoneProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpoint.Zone` resource
 *
 * @param properties - the TypeScript properties of a `ZoneProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpoint.Zone` resource.
 */
// @ts-ignore TS6133
function rosVpcEndpointZonePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpcEndpoint_ZonePropertyValidator(properties).assertSuccess();
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`
 */
export interface RosVpcEndpointServiceProps {

    /**
     * @Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    readonly autoAcceptEnabled?: boolean | ros.IResolvable;

    /**
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
     */
    readonly connectBandwidth?: number | ros.IResolvable;

    /**
     * @Property payer: The payer of the endpoint service. Valid values: 
     * Endpoint: the service consumer. 
     * EndpointService: the service provider.
     */
    readonly payer?: string | ros.IResolvable;

    /**
     * @Property resource:
     */
    readonly resource?: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    readonly serviceDescription?: string | ros.IResolvable;

    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    readonly user?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * true: yes. 
     * false (default): no
     */
    readonly zoneAffinityEnabled?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcEndpointServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointServiceProps`
 *
 * @returns the result of the validation.
 */
function RosVpcEndpointServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.payer && (typeof properties.payer) !== 'object') {
        errors.collect(ros.propertyValidator('payer', ros.validateAllowedValues)({
          data: properties.payer,
          allowedValues: ["Endpoint","EndpointService"],
        }));
    }
    errors.collect(ros.propertyValidator('payer', ros.validateString)(properties.payer));
    if(properties.user && (Array.isArray(properties.user) || (typeof properties.user) === 'string')) {
        errors.collect(ros.propertyValidator('user', ros.validateLength)({
            data: properties.user.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('user', ros.listValidator(ros.validateString))(properties.user));
    if(properties.serviceDescription && (Array.isArray(properties.serviceDescription) || (typeof properties.serviceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('serviceDescription', ros.validateLength)({
            data: properties.serviceDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('serviceDescription', ros.validateString)(properties.serviceDescription));
    if(properties.resource && (Array.isArray(properties.resource) || (typeof properties.resource) === 'string')) {
        errors.collect(ros.propertyValidator('resource', ros.validateLength)({
            data: properties.resource.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('resource', ros.listValidator(RosVpcEndpointService_ResourcePropertyValidator))(properties.resource));
    if(properties.connectBandwidth && (typeof properties.connectBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('connectBandwidth', ros.validateRange)({
            data: properties.connectBandwidth,
            min: 100,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('connectBandwidth', ros.validateNumber)(properties.connectBandwidth));
    errors.collect(ros.propertyValidator('zoneAffinityEnabled', ros.validateBoolean)(properties.zoneAffinityEnabled));
    errors.collect(ros.propertyValidator('autoAcceptEnabled', ros.validateBoolean)(properties.autoAcceptEnabled));
    return errors.wrap('supplied properties not correct for "RosVpcEndpointServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointService` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointService` resource.
 */
// @ts-ignore TS6133
function rosVpcEndpointServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcEndpointServicePropsValidator(properties).assertSuccess();
    }
    return {
      AutoAcceptEnabled: ros.booleanToRosTemplate(properties.autoAcceptEnabled),
      ConnectBandwidth: ros.numberToRosTemplate(properties.connectBandwidth),
      Payer: ros.stringToRosTemplate(properties.payer),
      Resource: ros.listMapper(rosVpcEndpointServiceResourcePropertyToRosTemplate)(properties.resource),
      ServiceDescription: ros.stringToRosTemplate(properties.serviceDescription),
      User: ros.listMapper(ros.stringToRosTemplate)(properties.user),
      ZoneAffinityEnabled: ros.booleanToRosTemplate(properties.zoneAffinityEnabled),
    };
}

/**
 * A ROS template type:  `ALIYUN::PrivateLink::VpcEndpointService`
 */
export class RosVpcEndpointService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpointService";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    public readonly attrMaxBandwidth: ros.IResolvable;

    /**
     * @Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    public readonly attrMinBandwidth: ros.IResolvable;

    /**
     * @Attribute ServiceDescription: The description of the endpoint service.
     */
    public readonly attrServiceDescription: ros.IResolvable;

    /**
     * @Attribute ServiceDomain: The domain name of the endpoint service.
     */
    public readonly attrServiceDomain: ros.IResolvable;

    /**
     * @Attribute ServiceId: The ID of the endpoint service.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: The name of the endpoint service.
     */
    public readonly attrServiceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    public autoAcceptEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
     */
    public connectBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property payer: The payer of the endpoint service. Valid values: 
     * Endpoint: the service consumer. 
     * EndpointService: the service provider.
     */
    public payer: string | ros.IResolvable | undefined;

    /**
     * @Property resource:
     */
    public resource: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    public serviceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    public user: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * true: yes. 
     * false (default): no
     */
    public zoneAffinityEnabled: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcEndpointService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMaxBandwidth = this.getAtt('MaxBandwidth');
        this.attrMinBandwidth = this.getAtt('MinBandwidth');
        this.attrServiceDescription = this.getAtt('ServiceDescription');
        this.attrServiceDomain = this.getAtt('ServiceDomain');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoAcceptEnabled = props.autoAcceptEnabled;
        this.connectBandwidth = props.connectBandwidth;
        this.payer = props.payer;
        this.resource = props.resource;
        this.serviceDescription = props.serviceDescription;
        this.user = props.user;
        this.zoneAffinityEnabled = props.zoneAffinityEnabled;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoAcceptEnabled: this.autoAcceptEnabled,
            connectBandwidth: this.connectBandwidth,
            payer: this.payer,
            resource: this.resource,
            serviceDescription: this.serviceDescription,
            user: this.user,
            zoneAffinityEnabled: this.zoneAffinityEnabled,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcEndpointServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpcEndpointService {
    /**
     * @stability external
     */
    export interface ResourceProperty {
        /**
         * @Property zoneId: The zone to which the service resource belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property resourceId: Service resources added to the endpoint service.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of service resource. Set the value to slb (SLB instances that support PrivateLink and are deployed in a VPC).
     * Note Only Server Load Balancer (SLB) instances that support PrivateLink can serve as service
     * resources for endpoint services.
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the result of the validation.
 */
function RosVpcEndpointService_ResourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "ResourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointService.Resource` resource
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointService.Resource` resource.
 */
// @ts-ignore TS6133
function rosVpcEndpointServiceResourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpcEndpointService_ResourcePropertyValidator(properties).assertSuccess();
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
    };
}

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`
 */
export interface RosVpcEndpointServiceAttachmentProps {

    /**
     * @Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint.
     */
    readonly serviceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcEndpointServiceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointServiceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosVpcEndpointServiceAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('serviceId', ros.requiredValidator)(properties.serviceId));
    errors.collect(ros.propertyValidator('serviceId', ros.validateString)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "RosVpcEndpointServiceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointServiceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcEndpointServiceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PrivateLink::VpcEndpointServiceAttachment` resource.
 */
// @ts-ignore TS6133
function rosVpcEndpointServiceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcEndpointServiceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
      ServiceId: ros.stringToRosTemplate(properties.serviceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`
 */
export class RosVpcEndpointServiceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpointServiceAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * @Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceId: The resource id.
     */
    public resourceId: string | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    public resourceType: string | ros.IResolvable;

    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint.
     */
    public serviceId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointServiceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcEndpointServiceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrServiceId = this.getAtt('ServiceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.serviceId = props.serviceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            serviceId: this.serviceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcEndpointServiceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
