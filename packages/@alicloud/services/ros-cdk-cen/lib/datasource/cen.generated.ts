// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCenBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
export interface RosCenBandwidthPackagesProps {

    /**
     * @Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenBandwidthPackages.FilterProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property includeReservationData: Specifies whether to include renewal data.
     */
    readonly includeReservationData?: boolean | ros.IResolvable;

    /**
     * @Property isOrKey: The logical operator between the filter conditions.
     */
    readonly isOrKey?: boolean | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackagesProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackagesProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackagesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isOrKey', ros.validateBoolean)(properties.isOrKey));
    errors.collect(ros.propertyValidator('filter', ros.listValidator(RosCenBandwidthPackages_FilterPropertyValidator))(properties.filter));
    errors.collect(ros.propertyValidator('includeReservationData', ros.validateBoolean)(properties.includeReservationData));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthPackagesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenBandwidthPackages` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackagesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenBandwidthPackages` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackagesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenBandwidthPackagesPropsValidator(properties).assertSuccess();
    }
    return {
      Filter: ros.listMapper(rosCenBandwidthPackagesFilterPropertyToRosTemplate)(properties.filter),
      IncludeReservationData: ros.booleanToRosTemplate(properties.includeReservationData),
      IsOrKey: ros.booleanToRosTemplate(properties.isOrKey),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenBandwidthPackages`, which is used to query the details of Cloud Enterprise Network (CEN) bandwidth plans within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
export class RosCenBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenBandwidthPackages";

    /**
     * @Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
     */
    public readonly attrCenBandwidthPackageIds: ros.IResolvable;

    /**
     * @Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
     */
    public readonly attrCenBandwidthPackages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property filter: Filter value when querying resources
     */
    public filter: Array<RosCenBandwidthPackages.FilterProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property includeReservationData: Specifies whether to include renewal data.
     */
    public includeReservationData: boolean | ros.IResolvable | undefined;

    /**
     * @Property isOrKey: The logical operator between the filter conditions.
     */
    public isOrKey: boolean | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackagesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthPackages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenBandwidthPackageIds = this.getAtt('CenBandwidthPackageIds');
        this.attrCenBandwidthPackages = this.getAtt('CenBandwidthPackages');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.filter = props.filter;
        this.includeReservationData = props.includeReservationData;
        this.isOrKey = props.isOrKey;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            filter: this.filter,
            includeReservationData: this.includeReservationData,
            isOrKey: this.isOrKey,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCenBandwidthPackages {
    /**
     * @stability external
     */
    export interface FilterProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackages_FilterPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.listValidator(ros.validateAny))(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "FilterProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenBandwidthPackages.Filter` resource
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenBandwidthPackages.Filter` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackagesFilterPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCenBandwidthPackages_FilterPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.listMapper(ros.objectToRosTemplate)(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosCenInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export interface RosCenInstancesProps {

    /**
     * @Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('filter', ros.listValidator(RosCenInstances_FilterPropertyValidator))(properties.filter));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCenInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosCenInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenInstances` resource.
 */
// @ts-ignore TS6133
function rosCenInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      Filter: ros.listMapper(rosCenInstancesFilterPropertyToRosTemplate)(properties.filter),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenInstances`, which is used to query the details of Cloud Enterprise Network (CEN) instances within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export class RosCenInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenInstances";

    /**
     * @Attribute CenIds: The list of The Cen instance ids.
     */
    public readonly attrCenIds: ros.IResolvable;

    /**
     * @Attribute Cens: The information about Cens.
     */
    public readonly attrCens: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property filter: Filter value when querying resources
     */
    public filter: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenIds = this.getAtt('CenIds');
        this.attrCens = this.getAtt('Cens');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.filter = props.filter;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            filter: this.filter,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCenInstances {
    /**
     * @stability external
     */
    export interface FilterProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosCenInstances_FilterPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.listValidator(ros.validateAny))(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "FilterProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenInstances.Filter` resource
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenInstances.Filter` resource.
 */
// @ts-ignore TS6133
function rosCenInstancesFilterPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCenInstances_FilterPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.listMapper(ros.objectToRosTemplate)(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosCenRouteMaps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
 */
export interface RosCenRouteMapsProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The ID of the region where the routing policy is applied.
     */
    readonly cenRegionId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property routeMapId: The ID of the routing policy.
     */
    readonly routeMapId?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
     */
    readonly transitRouterRouteTableId?: string | ros.IResolvable;

    /**
     * @Property transmitDirection: The direction in which the routing policy is applied.
     */
    readonly transmitDirection?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenRouteMapsProps`
 *
 * @param properties - the TypeScript properties of a `RosCenRouteMapsProps`
 *
 * @returns the result of the validation.
 */
function RosCenRouteMapsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.validateString)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    if(properties.transmitDirection && (typeof properties.transmitDirection) !== 'object') {
        errors.collect(ros.propertyValidator('transmitDirection', ros.validateAllowedValues)({
          data: properties.transmitDirection,
          allowedValues: ["RegionIn","RegionOut"],
        }));
    }
    errors.collect(ros.propertyValidator('transmitDirection', ros.validateString)(properties.transmitDirection));
    errors.collect(ros.propertyValidator('cenRegionId', ros.validateString)(properties.cenRegionId));
    errors.collect(ros.propertyValidator('routeMapId', ros.validateString)(properties.routeMapId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCenRouteMapsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenRouteMaps` resource
 *
 * @param properties - the TypeScript properties of a `RosCenRouteMapsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::CenRouteMaps` resource.
 */
// @ts-ignore TS6133
function rosCenRouteMapsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenRouteMapsPropsValidator(properties).assertSuccess();
    }
    return {
      CenId: ros.stringToRosTemplate(properties.cenId),
      CenRegionId: ros.stringToRosTemplate(properties.cenRegionId),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      RouteMapId: ros.stringToRosTemplate(properties.routeMapId),
      TransitRouterRouteTableId: ros.stringToRosTemplate(properties.transitRouterRouteTableId),
      TransmitDirection: ros.stringToRosTemplate(properties.transmitDirection),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenRouteMaps`, which is used to query the details of routing policies.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteMaps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
 */
export class RosCenRouteMaps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenRouteMaps";

    /**
     * @Attribute RouteMapIds: The list of The RouteMap ids.
     */
    public readonly attrRouteMapIds: ros.IResolvable;

    /**
     * @Attribute RouteMaps: The information about RouteMaps.
     */
    public readonly attrRouteMaps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The ID of the region where the routing policy is applied.
     */
    public cenRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property routeMapId: The ID of the routing policy.
     */
    public routeMapId: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
     */
    public transitRouterRouteTableId: string | ros.IResolvable | undefined;

    /**
     * @Property transmitDirection: The direction in which the routing policy is applied.
     */
    public transmitDirection: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteMapsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenRouteMaps.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteMapIds = this.getAtt('RouteMapIds');
        this.attrRouteMaps = this.getAtt('RouteMaps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.cenRegionId = props.cenRegionId;
        this.refreshOptions = props.refreshOptions;
        this.routeMapId = props.routeMapId;
        this.transitRouterRouteTableId = props.transitRouterRouteTableId;
        this.transmitDirection = props.transmitDirection;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            cenRegionId: this.cenRegionId,
            refreshOptions: this.refreshOptions,
            routeMapId: this.routeMapId,
            transitRouterRouteTableId: this.transitRouterRouteTableId,
            transmitDirection: this.transmitDirection,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenRouteMapsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export interface RosTransitRouterRouteTablesProps {

    /**
     * @Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableIds: The ID of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    readonly transitRouterRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableNames: The name of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    readonly transitRouterRouteTableNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableStatus: The state of the route table. Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    readonly transitRouterRouteTableStatus?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableType: The type of route table. Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    readonly transitRouterRouteTableType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteTablesProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTablesProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteTablesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.transitRouterRouteTableIds && (Array.isArray(properties.transitRouterRouteTableIds) || (typeof properties.transitRouterRouteTableIds) === 'string')) {
        errors.collect(ros.propertyValidator('transitRouterRouteTableIds', ros.validateLength)({
            data: properties.transitRouterRouteTableIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('transitRouterRouteTableIds', ros.listValidator(ros.validateString))(properties.transitRouterRouteTableIds));
    errors.collect(ros.propertyValidator('transitRouterRouteTableStatus', ros.validateString)(properties.transitRouterRouteTableStatus));
    if(properties.transitRouterRouteTableNames && (Array.isArray(properties.transitRouterRouteTableNames) || (typeof properties.transitRouterRouteTableNames) === 'string')) {
        errors.collect(ros.propertyValidator('transitRouterRouteTableNames', ros.validateLength)({
            data: properties.transitRouterRouteTableNames.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('transitRouterRouteTableNames', ros.listValidator(ros.validateString))(properties.transitRouterRouteTableNames));
    errors.collect(ros.propertyValidator('transitRouterRouteTableType', ros.validateString)(properties.transitRouterRouteTableType));
    errors.collect(ros.propertyValidator('transitRouterId', ros.requiredValidator)(properties.transitRouterId));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTransitRouterRouteTablesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::TransitRouterRouteTables` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTablesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::TransitRouterRouteTables` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterRouteTablesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterRouteTablesPropsValidator(properties).assertSuccess();
    }
    return {
      TransitRouterId: ros.stringToRosTemplate(properties.transitRouterId),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      TransitRouterRouteTableIds: ros.listMapper(ros.stringToRosTemplate)(properties.transitRouterRouteTableIds),
      TransitRouterRouteTableNames: ros.listMapper(ros.stringToRosTemplate)(properties.transitRouterRouteTableNames),
      TransitRouterRouteTableStatus: ros.stringToRosTemplate(properties.transitRouterRouteTableStatus),
      TransitRouterRouteTableType: ros.stringToRosTemplate(properties.transitRouterRouteTableType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::TransitRouterRouteTables`, which is used to query the route tables of an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTables` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export class RosTransitRouterRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouterRouteTables";

    /**
     * @Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
     */
    public readonly attrTransitRouterRouteTableIds: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
     */
    public readonly attrTransitRouterRouteTables: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    public transitRouterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableIds: The ID of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    public transitRouterRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableNames: The name of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    public transitRouterRouteTableNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableStatus: The state of the route table. Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    public transitRouterRouteTableStatus: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableType: The type of route table. Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    public transitRouterRouteTableType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTablesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterRouteTables.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterRouteTableIds = this.getAtt('TransitRouterRouteTableIds');
        this.attrTransitRouterRouteTables = this.getAtt('TransitRouterRouteTables');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.transitRouterId = props.transitRouterId;
        this.refreshOptions = props.refreshOptions;
        this.transitRouterRouteTableIds = props.transitRouterRouteTableIds;
        this.transitRouterRouteTableNames = props.transitRouterRouteTableNames;
        this.transitRouterRouteTableStatus = props.transitRouterRouteTableStatus;
        this.transitRouterRouteTableType = props.transitRouterRouteTableType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            transitRouterId: this.transitRouterId,
            refreshOptions: this.refreshOptions,
            transitRouterRouteTableIds: this.transitRouterRouteTableIds,
            transitRouterRouteTableNames: this.transitRouterRouteTableNames,
            transitRouterRouteTableStatus: this.transitRouterRouteTableStatus,
            transitRouterRouteTableType: this.transitRouterRouteTableType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterRouteTablesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export interface RosTransitRoutersProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property regionId: The ID of the region where the transit router is deployed. 
     * You can call the DescribeRegions operation to query region IDs.
     */
    readonly regionId?: string | ros.IResolvable;

    /**
     * @Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRoutersProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRoutersProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRoutersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTransitRoutersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CEN::TransitRouters` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRoutersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CEN::TransitRouters` resource.
 */
// @ts-ignore TS6133
function rosTransitRoutersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRoutersPropsValidator(properties).assertSuccess();
    }
    return {
      CenId: ros.stringToRosTemplate(properties.cenId),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      TransitRouterId: ros.stringToRosTemplate(properties.transitRouterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::TransitRouters`, which is used to query the transit routers of a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export class RosTransitRouters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouters";

    /**
     * @Attribute TransitRouterIds: The list of TransitRouter IDs.
     */
    public readonly attrTransitRouterIds: ros.IResolvable;

    /**
     * @Attribute TransitRouters: The list of TransitRouters.
     */
    public readonly attrTransitRouters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: The ID of the region where the transit router is deployed. 
     * You can call the DescribeRegions operation to query region IDs.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterId: The ID of the transit router.
     */
    public transitRouterId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRoutersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterIds = this.getAtt('TransitRouterIds');
        this.attrTransitRouters = this.getAtt('TransitRouters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.refreshOptions = props.refreshOptions;
        this.regionId = props.regionId;
        this.transitRouterId = props.transitRouterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            refreshOptions: this.refreshOptions,
            regionId: this.regionId,
            transitRouterId: this.transitRouterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRoutersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
