// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export interface RosBandwidthPackageAcceleratorAdditionProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackageAcceleratorAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageAcceleratorAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackageAcceleratorAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export class RosBandwidthPackageAcceleratorAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackageAcceleratorAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    public readonly attrAcceleratorId: any;

    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    public readonly attrBandwidthPackageId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    public acceleratorId: string;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    public bandwidthPackageId: string;

    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackageAcceleratorAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = ros.Token.asString(this.getAtt('AcceleratorId'));
        this.attrBandwidthPackageId = ros.Token.asString(this.getAtt('BandwidthPackageId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.bandwidthPackageId = props.bandwidthPackageId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            bandwidthPackageId: this.bandwidthPackageId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`
 */
export interface RosEndpointGroupProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string;

    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string;

    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string;

    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string;

    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    readonly thresholdCount?: number;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number;
}

/**
 * Determine whether the given properties match those of a `RosEndpointGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckIntervalSeconds', ros.validateNumber)(properties.healthCheckIntervalSeconds));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.requiredValidator)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.validateString)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('trafficPercentage', ros.validateNumber)(properties.trafficPercentage));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["tcp","http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    errors.collect(ros.propertyValidator('thresholdCount', ros.validateNumber)(properties.thresholdCount));
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.requiredValidator)(properties.endpointConfigurations));
    if(properties.endpointConfigurations && (Array.isArray(properties.endpointConfigurations) || (typeof properties.endpointConfigurations) === 'string')) {
        errors.collect(ros.propertyValidator('endpointConfigurations', ros.validateLength)({
            data: properties.endpointConfigurations.length,
            min: 1,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.listValidator(RosEndpointGroup_EndpointConfigurationsPropertyValidator))(properties.endpointConfigurations));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosEndpointGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointGroupPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      EndpointConfigurations: ros.listMapper(rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate)(properties.endpointConfigurations),
      EndpointGroupRegion: ros.stringToRosTemplate(properties.endpointGroupRegion),
      ListenerId: ros.stringToRosTemplate(properties.listenerId),
      Description: ros.stringToRosTemplate(properties.description),
      HealthCheckIntervalSeconds: ros.numberToRosTemplate(properties.healthCheckIntervalSeconds),
      HealthCheckPath: ros.stringToRosTemplate(properties.healthCheckPath),
      HealthCheckPort: ros.numberToRosTemplate(properties.healthCheckPort),
      HealthCheckProtocol: ros.stringToRosTemplate(properties.healthCheckProtocol),
      Name: ros.stringToRosTemplate(properties.name),
      ThresholdCount: ros.numberToRosTemplate(properties.thresholdCount),
      TrafficPercentage: ros.numberToRosTemplate(properties.trafficPercentage),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::EndpointGroup`
 */
export class RosEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public readonly attrEndpointGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    public acceleratorId: string;

    /**
     * @Property endpointConfigurations:
     */
    public endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    public endpointGroupRegion: string;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    public listenerId: string;

    /**
     * @Property description: The description of the endpoint group.
     */
    public description: string | undefined;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    public healthCheckIntervalSeconds: number | undefined;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    public healthCheckPath: string | undefined;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    public healthCheckPort: number | undefined;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    public healthCheckProtocol: string | undefined;

    /**
     * @Property name: The name of the endpoint group.
     */
    public name: string | undefined;

    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    public thresholdCount: number | undefined;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    public trafficPercentage: number | undefined;

    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpointGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointGroupId = ros.Token.asString(this.getAtt('EndpointGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointConfigurations = props.endpointConfigurations;
        this.endpointGroupRegion = props.endpointGroupRegion;
        this.listenerId = props.listenerId;
        this.description = props.description;
        this.healthCheckIntervalSeconds = props.healthCheckIntervalSeconds;
        this.healthCheckPath = props.healthCheckPath;
        this.healthCheckPort = props.healthCheckPort;
        this.healthCheckProtocol = props.healthCheckProtocol;
        this.name = props.name;
        this.thresholdCount = props.thresholdCount;
        this.trafficPercentage = props.trafficPercentage;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointConfigurations: this.endpointConfigurations,
            endpointGroupRegion: this.endpointGroupRegion,
            listenerId: this.listenerId,
            description: this.description,
            healthCheckIntervalSeconds: this.healthCheckIntervalSeconds,
            healthCheckPath: this.healthCheckPath,
            healthCheckPort: this.healthCheckPort,
            healthCheckProtocol: this.healthCheckProtocol,
            name: this.name,
            thresholdCount: this.thresholdCount,
            trafficPercentage: this.trafficPercentage,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEndpointGroup {
    /**
     * @stability external
     */
    export interface EndpointConfigurationsProperty {
        /**
         * @Property type: The type of endpoint in the endpoint group. Valid values:
     * EIP: eip address
     * PublicIp: public IP address
     * Ip: custom IP address
     * Domain: custom domain name
     *
         */
        readonly type: string;
        /**
         * @Property endpoint: The IP address or domain name of endpoint in the endpoint group.
         */
        readonly endpoint: string;
        /**
         * @Property weight: The weight of endpoint N in the endpoint group.
         */
        readonly weight: number;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "EndpointConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::GA::IpSets`
 */
export interface RosIpSetsProps {

    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string;
}

/**
 * Determine whether the given properties match those of a `RosIpSetsProps`
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the result of the validation.
 */
function RosIpSetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accelerateRegion', ros.requiredValidator)(properties.accelerateRegion));
    if(properties.accelerateRegion && (Array.isArray(properties.accelerateRegion) || (typeof properties.accelerateRegion) === 'string')) {
        errors.collect(ros.propertyValidator('accelerateRegion', ros.validateLength)({
            data: properties.accelerateRegion.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('accelerateRegion', ros.listValidator(RosIpSets_AccelerateRegionPropertyValidator))(properties.accelerateRegion));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosIpSetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource.
 */
// @ts-ignore TS6133
function rosIpSetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpSetsPropsValidator(properties).assertSuccess();
    }
    return {
      AccelerateRegion: ros.listMapper(rosIpSetsAccelerateRegionPropertyToRosTemplate)(properties.accelerateRegion),
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::IpSets`
 */
export class RosIpSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::IpSets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    public readonly attrAccelerateRegionIds: any;

    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    public readonly attrIpSetIds: any;

    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    public readonly attrIpVersions: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accelerateRegion:
     */
    public accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    public acceleratorId: string;

    /**
     * Create a new `ALIYUN::GA::IpSets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpSetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpSets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccelerateRegionIds = ros.Token.asString(this.getAtt('AccelerateRegionIds'));
        this.attrIpSetIds = ros.Token.asString(this.getAtt('IpSetIds'));
        this.attrIpVersions = ros.Token.asString(this.getAtt('IpVersions'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accelerateRegion = props.accelerateRegion;
        this.acceleratorId = props.acceleratorId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accelerateRegion: this.accelerateRegion,
            acceleratorId: this.acceleratorId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpSetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpSets {
    /**
     * @stability external
     */
    export interface AccelerateRegionProperty {
        /**
         * @Property ipVersion: IP version. Valid values: IPv4, IPv6
         */
        readonly ipVersion?: string;
        /**
         * @Property bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
     * Note
     * The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
     * The total bandwidth for all regions must not exceed the amount included in your basic
     * bandwidth plan.
         */
        readonly bandwidth: number;
        /**
         * @Property accelerateRegionId: The ID of the region where traffic is to be accelerated.
         */
        readonly accelerateRegionId: string;
    }
}
/**
 * Determine whether the given properties match those of a `AccelerateRegionProperty`
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the result of the validation.
 */
function RosIpSets_AccelerateRegionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipVersion && (typeof properties.ipVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ipVersion', ros.validateAllowedValues)({
          data: properties.ipVersion,
          allowedValues: ["IPv4","IPv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.requiredValidator)(properties.accelerateRegionId));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.validateString)(properties.accelerateRegionId));
    return errors.wrap('supplied properties not correct for "AccelerateRegionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource.
 */
// @ts-ignore TS6133
function rosIpSetsAccelerateRegionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpSets_AccelerateRegionPropertyValidator(properties).assertSuccess();
    return {
      IpVersion: ros.stringToRosTemplate(properties.ipVersion),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      AccelerateRegionId: ros.stringToRosTemplate(properties.accelerateRegionId),
    };
}

/**
 * Properties for defining a `ALIYUN::GA::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string;

    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    readonly protocol: string;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string;

    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('portRanges', ros.requiredValidator)(properties.portRanges));
    if(properties.portRanges && (Array.isArray(properties.portRanges) || (typeof properties.portRanges) === 'string')) {
        errors.collect(ros.propertyValidator('portRanges', ros.validateLength)({
            data: properties.portRanges.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('portRanges', ros.listValidator(RosListener_PortRangesPropertyValidator))(properties.portRanges));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.clientAffinity && (typeof properties.clientAffinity) !== 'object') {
        errors.collect(ros.propertyValidator('clientAffinity', ros.validateAllowedValues)({
          data: properties.clientAffinity,
          allowedValues: ["NONE","SOURCE_IP"],
        }));
    }
    errors.collect(ros.propertyValidator('clientAffinity', ros.validateString)(properties.clientAffinity));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      PortRanges: ros.listMapper(rosListenerPortRangesPropertyToRosTemplate)(properties.portRanges),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      ClientAffinity: ros.stringToRosTemplate(properties.clientAffinity),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    public acceleratorId: string;

    /**
     * @Property portRanges:
     */
    public portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    public protocol: string;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    public clientAffinity: string | undefined;

    /**
     * @Property description: The description of the listener.
     */
    public description: string | undefined;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    public name: string | undefined;

    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = ros.Token.asString(this.getAtt('ListenerId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.portRanges = props.portRanges;
        this.protocol = props.protocol;
        this.clientAffinity = props.clientAffinity;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            portRanges: this.portRanges,
            protocol: this.protocol,
            clientAffinity: this.clientAffinity,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PortRangesProperty {
        /**
         * @Property fromPort: The first listening port of the port range specified for receiving and forwarding
     * requests to endpoints.
         */
        readonly fromPort: number;
        /**
         * @Property toPort: The last listening port of the port range specified for receiving and forwarding requests
     * to endpoints.
         */
        readonly toPort: number;
    }
}
/**
 * Determine whether the given properties match those of a `PortRangesProperty`
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PortRangesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fromPort', ros.requiredValidator)(properties.fromPort));
    errors.collect(ros.propertyValidator('fromPort', ros.validateNumber)(properties.fromPort));
    errors.collect(ros.propertyValidator('toPort', ros.requiredValidator)(properties.toPort));
    errors.collect(ros.propertyValidator('toPort', ros.validateNumber)(properties.toPort));
    return errors.wrap('supplied properties not correct for "PortRangesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource.
 */
// @ts-ignore TS6133
function rosListenerPortRangesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PortRangesPropertyValidator(properties).assertSuccess();
    return {
      FromPort: ros.numberToRosTemplate(properties.fromPort),
      ToPort: ros.numberToRosTemplate(properties.toPort),
    };
}
