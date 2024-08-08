"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTransitRouters = exports.RosTransitRouterRouteTables = exports.RosCenRouteMaps = exports.RosCenInstances = exports.RosCenBandwidthPackages = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackagesProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackagesProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackagesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isOrKey', ros.validateBoolean)(properties.isOrKey));
    errors.collect(ros.propertyValidator('filter', ros.listValidator(RosCenBandwidthPackages_FilterPropertyValidator))(properties.filter));
    errors.collect(ros.propertyValidator('includeReservationData', ros.validateBoolean)(properties.includeReservationData));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosCenBandwidthPackagesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCenBandwidthPackages extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenBandwidthPackages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenBandwidthPackageIds = this.getAtt('CenBandwidthPackageIds');
        this.attrCenBandwidthPackages = this.getAtt('CenBandwidthPackages');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.filter = props.filter;
        this.includeReservationData = props.includeReservationData;
        this.isOrKey = props.isOrKey;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            filter: this.filter,
            includeReservationData: this.includeReservationData,
            isOrKey: this.isOrKey,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosCenBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenBandwidthPackages = RosCenBandwidthPackages;
/**
 * The resource type name for this resource class.
 */
RosCenBandwidthPackages.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenBandwidthPackages";
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackages_FilterPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCenBandwidthPackagesFilterPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCenBandwidthPackages_FilterPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.listMapper(ros.objectToRosTemplate)(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosCenInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstancesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('filter', ros.listValidator(RosCenInstances_FilterPropertyValidator))(properties.filter));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosCenInstancesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCenInstances extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenIds = this.getAtt('CenIds');
        this.attrCens = this.getAtt('Cens');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.filter = props.filter;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            filter: this.filter,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosCenInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenInstances = RosCenInstances;
/**
 * The resource type name for this resource class.
 */
RosCenInstances.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenInstances";
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosCenInstances_FilterPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCenInstancesFilterPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCenInstances_FilterPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.listMapper(ros.objectToRosTemplate)(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosCenRouteMapsProps`
 *
 * @param properties - the TypeScript properties of a `RosCenRouteMapsProps`
 *
 * @returns the result of the validation.
 */
function RosCenRouteMapsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.validateString)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    if (properties.transmitDirection && (typeof properties.transmitDirection) !== 'object') {
        errors.collect(ros.propertyValidator('transmitDirection', ros.validateAllowedValues)({
            data: properties.transmitDirection,
            allowedValues: ["RegionIn", "RegionOut"],
        }));
    }
    errors.collect(ros.propertyValidator('transmitDirection', ros.validateString)(properties.transmitDirection));
    errors.collect(ros.propertyValidator('cenRegionId', ros.validateString)(properties.cenRegionId));
    errors.collect(ros.propertyValidator('routeMapId', ros.validateString)(properties.routeMapId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosCenRouteMapsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCenRouteMaps extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            cenId: this.cenId,
            cenRegionId: this.cenRegionId,
            refreshOptions: this.refreshOptions,
            routeMapId: this.routeMapId,
            transitRouterRouteTableId: this.transitRouterRouteTableId,
            transmitDirection: this.transmitDirection,
        };
    }
    renderProperties(props) {
        return rosCenRouteMapsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenRouteMaps = RosCenRouteMaps;
/**
 * The resource type name for this resource class.
 */
RosCenRouteMaps.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenRouteMaps";
/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteTablesProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTablesProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteTablesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.transitRouterRouteTableIds && (Array.isArray(properties.transitRouterRouteTableIds) || (typeof properties.transitRouterRouteTableIds) === 'string')) {
        errors.collect(ros.propertyValidator('transitRouterRouteTableIds', ros.validateLength)({
            data: properties.transitRouterRouteTableIds.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('transitRouterRouteTableIds', ros.listValidator(ros.validateString))(properties.transitRouterRouteTableIds));
    errors.collect(ros.propertyValidator('transitRouterRouteTableStatus', ros.validateString)(properties.transitRouterRouteTableStatus));
    if (properties.transitRouterRouteTableNames && (Array.isArray(properties.transitRouterRouteTableNames) || (typeof properties.transitRouterRouteTableNames) === 'string')) {
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
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosTransitRouterRouteTablesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosTransitRouterRouteTables extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            transitRouterId: this.transitRouterId,
            refreshOptions: this.refreshOptions,
            transitRouterRouteTableIds: this.transitRouterRouteTableIds,
            transitRouterRouteTableNames: this.transitRouterRouteTableNames,
            transitRouterRouteTableStatus: this.transitRouterRouteTableStatus,
            transitRouterRouteTableType: this.transitRouterRouteTableType,
        };
    }
    renderProperties(props) {
        return rosTransitRouterRouteTablesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTransitRouterRouteTables = RosTransitRouterRouteTables;
/**
 * The resource type name for this resource class.
 */
RosTransitRouterRouteTables.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouterRouteTables";
/**
 * Determine whether the given properties match those of a `RosTransitRoutersProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRoutersProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRoutersPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosTransitRoutersPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosTransitRouters extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTransitRouters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterIds = this.getAtt('TransitRouterIds');
        this.attrTransitRouters = this.getAtt('TransitRouters');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.refreshOptions = props.refreshOptions;
        this.regionId = props.regionId;
        this.transitRouterId = props.transitRouterId;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
            refreshOptions: this.refreshOptions,
            regionId: this.regionId,
            transitRouterId: this.transitRouterId,
        };
    }
    renderProperties(props) {
        return rosTransitRoutersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTransitRouters = RosTransitRouters;
/**
 * The resource type name for this resource class.
 */
RosTransitRouters.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouters";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNlbi5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWdDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hILElBQUcsVUFBVSxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoRixJQUFJLEVBQUUsVUFBVSxDQUFDLGNBQWM7WUFDL0IsYUFBYSxFQUFFLENBQUMsUUFB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Q0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM3RixDQUFDOztBQXZFTCw4Q0F3RUM7QUF2RUc7O0dBRUc7QUFDb0Isd0NBQXNCLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tY2VuYmFuZHdpZHRocGFja2FnZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXI6IEZpbHRlciB2YWx1ZSB3aGVuIHF1ZXJ5aW5nIHJlc291cmNlc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpbHRlcj86IEFycmF5PFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzLkZpbHRlclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmNsdWRlUmVzZXJ2YXRpb25EYXRhOiBTcGVjaWZpZXMgd2hldGhlciB0byBpbmNsdWRlIHJlbmV3YWwgZGF0YS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmNsdWRlUmVzZXJ2YXRpb25EYXRhPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc09yS2V5OiBUaGUgbG9naWNhbCBvcGVyYXRvciBiZXR3ZWVuIHRoZSBmaWx0ZXIgY29uZGl0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc09yS2V5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc09yS2V5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc09yS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWx0ZXInLCByb3MubGlzdFZhbGlkYXRvcihSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc19GaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuZmlsdGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmNsdWRlUmVzZXJ2YXRpb25EYXRhJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pbmNsdWRlUmVzZXJ2YXRpb25EYXRhKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBGaWx0ZXI6IHJvcy5saXN0TWFwcGVyKHJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzRmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmZpbHRlciksXG4gICAgICBJbmNsdWRlUmVzZXJ2YXRpb25EYXRhOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmNsdWRlUmVzZXJ2YXRpb25EYXRhKSxcbiAgICAgIElzT3JLZXk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzT3JLZXkpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiBDbG91ZCBFbnRlcnByaXNlIE5ldHdvcmsgKENFTikgYmFuZHdpZHRoIHBsYW5zIHdpdGhpbiB0aGUgY3VycmVudCBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYENlbkJhbmR3aWR0aFBhY2thZ2VzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2VuLWNlbmJhbmR3aWR0aHBhY2thZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VuQmFuZHdpZHRoUGFja2FnZUlkczogVGhlIGxpc3Qgb2YgVGhlIENlbiBiYW5kd2lkdGggaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuQmFuZHdpZHRoUGFja2FnZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5CYW5kd2lkdGhQYWNrYWdlczogVGhlIGluZm9ybWF0aW9uIGFib3V0IENlbkJhbmR3aWR0aFBhY2thZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuQmFuZHdpZHRoUGFja2FnZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbHRlcjogRmlsdGVyIHZhbHVlIHdoZW4gcXVlcnlpbmcgcmVzb3VyY2VzXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcjogQXJyYXk8Um9zQ2VuQmFuZHdpZHRoUGFja2FnZXMuRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluY2x1ZGVSZXNlcnZhdGlvbkRhdGE6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGluY2x1ZGUgcmVuZXdhbCBkYXRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbmNsdWRlUmVzZXJ2YXRpb25EYXRhOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzT3JLZXk6IFRoZSBsb2dpY2FsIG9wZXJhdG9yIGJldHdlZW4gdGhlIGZpbHRlciBjb25kaXRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc09yS2V5OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2VuQmFuZHdpZHRoUGFja2FnZUlkcyA9IHRoaXMuZ2V0QXR0KCdDZW5CYW5kd2lkdGhQYWNrYWdlSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckNlbkJhbmR3aWR0aFBhY2thZ2VzID0gdGhpcy5nZXRBdHQoJ0NlbkJhbmR3aWR0aFBhY2thZ2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZpbHRlciA9IHByb3BzLmZpbHRlcjtcbiAgICAgICAgdGhpcy5pbmNsdWRlUmVzZXJ2YXRpb25EYXRhID0gcHJvcHMuaW5jbHVkZVJlc2VydmF0aW9uRGF0YTtcbiAgICAgICAgdGhpcy5pc09yS2V5ID0gcHJvcHMuaXNPcktleTtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgICAgICBpbmNsdWRlUmVzZXJ2YXRpb25EYXRhOiB0aGlzLmluY2x1ZGVSZXNlcnZhdGlvbkRhdGEsXG4gICAgICAgICAgICBpc09yS2V5OiB0aGlzLmlzT3JLZXksXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlcyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmlsdGVyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VzLkZpbHRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VzLkZpbHRlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZW5CYW5kd2lkdGhQYWNrYWdlc0ZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc19GaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0Nlbkluc3RhbmNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2VuLWNlbmluc3RhbmNlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Nlbkluc3RhbmNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXI6IEZpbHRlciB2YWx1ZSB3aGVuIHF1ZXJ5aW5nIHJlc291cmNlc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpbHRlcj86IEFycmF5PFJvc0Nlbkluc3RhbmNlcy5GaWx0ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2VuSW5zdGFuY2VzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Nlbkluc3RhbmNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Nlbkluc3RhbmNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlsdGVyJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQ2VuSW5zdGFuY2VzX0ZpbHRlclByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5maWx0ZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuSW5zdGFuY2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuSW5zdGFuY2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZW5JbnN0YW5jZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0Nlbkluc3RhbmNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEZpbHRlcjogcm9zLmxpc3RNYXBwZXIocm9zQ2VuSW5zdGFuY2VzRmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmZpbHRlciksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6Q2VuSW5zdGFuY2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiBDbG91ZCBFbnRlcnByaXNlIE5ldHdvcmsgKENFTikgaW5zdGFuY2VzIHdpdGhpbiB0aGUgY3VycmVudCBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYENlbkluc3RhbmNlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi1jZW5pbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0Nlbkluc3RhbmNlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNFTjo6Q2VuSW5zdGFuY2VzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENlbklkczogVGhlIGxpc3Qgb2YgVGhlIENlbiBpbnN0YW5jZSBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5JZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VuczogVGhlIGluZm9ybWF0aW9uIGFib3V0IENlbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXI6IEZpbHRlciB2YWx1ZSB3aGVuIHF1ZXJ5aW5nIHJlc291cmNlc1xuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXI6IEFycmF5PFJvc0Nlbkluc3RhbmNlcy5GaWx0ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2VuSW5zdGFuY2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDZW5JbnN0YW5jZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNlbklkcyA9IHRoaXMuZ2V0QXR0KCdDZW5JZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2VucyA9IHRoaXMuZ2V0QXR0KCdDZW5zJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZpbHRlciA9IHByb3BzLmZpbHRlcjtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuSW5zdGFuY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ2VuSW5zdGFuY2VzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDZW5JbnN0YW5jZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmlsdGVyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlcy5GaWx0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5JbnN0YW5jZXMuRmlsdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Nlbkluc3RhbmNlc0ZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDZW5JbnN0YW5jZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDZW5Sb3V0ZU1hcHNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi1jZW5yb3V0ZW1hcHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5Sb3V0ZU1hcHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSByb3V0aW5nIHBvbGljeSBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlblJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlTWFwSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGluZyBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVNYXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiBUaGUgcm91dGUgdGFibGUgSUQgb2YgdGhlIHRyYW5zaXQgcm91dGVyIHdpdGggd2hpY2ggdGhlIHJvdXRpbmcgcG9saWN5IGlzIGFzc29jaWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc21pdERpcmVjdGlvbjogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgcm91dGluZyBwb2xpY3kgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc21pdERpcmVjdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZW5Sb3V0ZU1hcHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuUm91dGVNYXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuUm91dGVNYXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGlmKHByb3BlcnRpZXMudHJhbnNtaXREaXJlY3Rpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRyYW5zbWl0RGlyZWN0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc21pdERpcmVjdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRyYW5zbWl0RGlyZWN0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlJlZ2lvbkluXCIsXCJSZWdpb25PdXRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc21pdERpcmVjdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFuc21pdERpcmVjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VuUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlTWFwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVNYXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFsd2F5c1wiLFwiTmV2ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDZW5Sb3V0ZU1hcHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5Sb3V0ZU1hcHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NlblJvdXRlTWFwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VuUm91dGVNYXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2VuSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuSWQpLFxuICAgICAgQ2VuUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuUmVnaW9uSWQpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgICAgUm91dGVNYXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZU1hcElkKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZCksXG4gICAgICBUcmFuc21pdERpcmVjdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFuc21pdERpcmVjdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiByb3V0aW5nIHBvbGljaWVzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDZW5Sb3V0ZU1hcHNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tY2Vucm91dGVtYXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5Sb3V0ZU1hcHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDRU46OkNlblJvdXRlTWFwc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZU1hcElkczogVGhlIGxpc3Qgb2YgVGhlIFJvdXRlTWFwIGlkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlTWFwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlTWFwczogVGhlIGluZm9ybWF0aW9uIGFib3V0IFJvdXRlTWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlTWFwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlblJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgcm91dGluZyBwb2xpY3kgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VuUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZU1hcElkOiBUaGUgSUQgb2YgdGhlIHJvdXRpbmcgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZU1hcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZDogVGhlIHJvdXRlIHRhYmxlIElEIG9mIHRoZSB0cmFuc2l0IHJvdXRlciB3aXRoIHdoaWNoIHRoZSByb3V0aW5nIHBvbGljeSBpcyBhc3NvY2lhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNtaXREaXJlY3Rpb246IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHJvdXRpbmcgcG9saWN5IGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zbWl0RGlyZWN0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2VuUm91dGVNYXBzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDZW5Sb3V0ZU1hcHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlTWFwSWRzID0gdGhpcy5nZXRBdHQoJ1JvdXRlTWFwSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlTWFwcyA9IHRoaXMuZ2V0QXR0KCdSb3V0ZU1hcHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICAgICAgdGhpcy5jZW5SZWdpb25JZCA9IHByb3BzLmNlblJlZ2lvbklkO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgICAgIHRoaXMucm91dGVNYXBJZCA9IHByb3BzLnJvdXRlTWFwSWQ7XG4gICAgICAgIHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZCA9IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ7XG4gICAgICAgIHRoaXMudHJhbnNtaXREaXJlY3Rpb24gPSBwcm9wcy50cmFuc21pdERpcmVjdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW5JZDogdGhpcy5jZW5JZCxcbiAgICAgICAgICAgIGNlblJlZ2lvbklkOiB0aGlzLmNlblJlZ2lvbklkLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgICByb3V0ZU1hcElkOiB0aGlzLnJvdXRlTWFwSWQsXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICB0cmFuc21pdERpcmVjdGlvbjogdGhpcy50cmFuc21pdERpcmVjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuUm91dGVNYXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tdHJhbnNpdHJvdXRlcnJvdXRldGFibGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJJZDogVGhlIElEIG9mIHRoZSBFbnRlcnByaXNlIEVkaXRpb24gdHJhbnNpdCByb3V0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogWW91IGNhbiBxdWVyeSBtdWx0aXBsZSByb3V0ZSB0YWJsZXMgaW4gZWFjaCBjYWxsLiBNYXhpbXVtIHZhbHVlIG9mIE46IDIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzOiBUaGUgbmFtZSBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogWW91IGNhbiBxdWVyeSBtdWx0aXBsZSByb3V0ZSB0YWJsZXMgaW4gZWFjaCBjYWxsLiBNYXhpbXVtIHZhbHVlIG9mIE46IDIwLlxuICAgICAqIE5vdGUgSWYgeW91IHNwZWNpZnkgYm90aCBUcmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzLk4gYW5kIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzLk4sIG1ha2Ugc3VyZSB0aGF0IHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgSUQgYmVsb25nIHRvIHRoZSBzYW1lIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzOiBUaGUgc3RhdGUgb2YgdGhlIHJvdXRlIHRhYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQ3JlYXRpbmc6IFRoZSByb3V0ZSB0YWJsZSBpcyBiZWluZyBjcmVhdGVkLlxuICAgICAqIERlbGV0aW5nOiBUaGUgcm91dGUgdGFibGUgaXMgYmVpbmcgZGVsZXRlZC5cbiAgICAgKiBBY3RpdmU6IFRoZSByb3V0ZSB0YWJsZSBpcyBhdmFpbGFibGUgZm9yIHVzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGU6IFRoZSB0eXBlIG9mIHJvdXRlIHRhYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQ3VzdG9tOiBhIGN1c3RvbSByb3V0ZSB0YWJsZVxuICAgICAqIFN5c3RlbTogdGhlIGRlZmF1bHQgcm91dGUgdGFibGVcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzKSk7XG4gICAgaWYocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlcklkKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBUcmFuc2l0Um91dGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlcklkKSxcbiAgICAgIFJlZnJlc2hPcHRpb25zOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcyksXG4gICAgICBUcmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIHJvdXRlIHRhYmxlcyBvZiBhbiBFbnRlcnByaXNlIEVkaXRpb24gdHJhbnNpdCByb3V0ZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi10cmFuc2l0cm91dGVycm91dGV0YWJsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlclJvdXRlVGFibGVzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzOiBUaGUgbGlzdCBvZiBUcmFuc2l0Um91dGVyUm91dGVUYWJsZSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyUm91dGVUYWJsZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyUm91dGVUYWJsZXM6IFRoZSBsaXN0IG9mIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIEVudGVycHJpc2UgRWRpdGlvbiB0cmFuc2l0IHJvdXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNpdFJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogWW91IGNhbiBxdWVyeSBtdWx0aXBsZSByb3V0ZSB0YWJsZXMgaW4gZWFjaCBjYWxsLiBNYXhpbXVtIHZhbHVlIG9mIE46IDIwLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzOiBUaGUgbmFtZSBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogWW91IGNhbiBxdWVyeSBtdWx0aXBsZSByb3V0ZSB0YWJsZXMgaW4gZWFjaCBjYWxsLiBNYXhpbXVtIHZhbHVlIG9mIE46IDIwLlxuICAgICAqIE5vdGUgSWYgeW91IHNwZWNpZnkgYm90aCBUcmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzLk4gYW5kIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzLk4sIG1ha2Ugc3VyZSB0aGF0IHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgSUQgYmVsb25nIHRvIHRoZSBzYW1lIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzOiBUaGUgc3RhdGUgb2YgdGhlIHJvdXRlIHRhYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQ3JlYXRpbmc6IFRoZSByb3V0ZSB0YWJsZSBpcyBiZWluZyBjcmVhdGVkLlxuICAgICAqIERlbGV0aW5nOiBUaGUgcm91dGUgdGFibGUgaXMgYmVpbmcgZGVsZXRlZC5cbiAgICAgKiBBY3RpdmU6IFRoZSByb3V0ZSB0YWJsZSBpcyBhdmFpbGFibGUgZm9yIHVzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGU6IFRoZSB0eXBlIG9mIHJvdXRlIHRhYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQ3VzdG9tOiBhIGN1c3RvbSByb3V0ZSB0YWJsZVxuICAgICAqIFN5c3RlbTogdGhlIGRlZmF1bHQgcm91dGUgdGFibGVcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzID0gdGhpcy5nZXRBdHQoJ1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlcyA9IHRoaXMuZ2V0QXR0KCdUcmFuc2l0Um91dGVyUm91dGVUYWJsZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudHJhbnNpdFJvdXRlcklkID0gcHJvcHMudHJhbnNpdFJvdXRlcklkO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgICAgIHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMgPSBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcztcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzID0gcHJvcHMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcztcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1cyA9IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzO1xuICAgICAgICB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZSA9IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2l0Um91dGVySWQ6IHRoaXMudHJhbnNpdFJvdXRlcklkLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkczogdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcyxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM6IHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcyxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzOiB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVUeXBlOiB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVHJhbnNpdFJvdXRlcnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi10cmFuc2l0cm91dGVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RyYW5zaXRSb3V0ZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbklkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgdHJhbnNpdCByb3V0ZXIgaXMgZGVwbG95ZWQuIFxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSByZWdpb24gSURzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJJZDogVGhlIElEIG9mIHRoZSB0cmFuc2l0IHJvdXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVHJhbnNpdFJvdXRlcnNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJhbnNpdFJvdXRlcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUcmFuc2l0Um91dGVyc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VuSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNpdFJvdXRlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFsd2F5c1wiLFwiTmV2ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUcmFuc2l0Um91dGVyc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpUcmFuc2l0Um91dGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJhbnNpdFJvdXRlcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJhbnNpdFJvdXRlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RyYW5zaXRSb3V0ZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2VuSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuSWQpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgICAgUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uSWQpLFxuICAgICAgVHJhbnNpdFJvdXRlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlcnNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSB0cmFuc2l0IHJvdXRlcnMgb2YgYSBDbG91ZCBFbnRlcnByaXNlIE5ldHdvcmsgKENFTikgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFRyYW5zaXRSb3V0ZXJzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2VuLXRyYW5zaXRyb3V0ZXJzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmFuc2l0Um91dGVycyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlcnNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlcklkczogVGhlIGxpc3Qgb2YgVHJhbnNpdFJvdXRlciBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVySWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJzOiBUaGUgbGlzdCBvZiBUcmFuc2l0Um91dGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGNlbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSB0cmFuc2l0IHJvdXRlciBpcyBkZXBsb3llZC4gXG4gICAgICogWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZVJlZ2lvbnMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHJlZ2lvbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIHRyYW5zaXQgcm91dGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NUcmFuc2l0Um91dGVyc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVHJhbnNpdFJvdXRlcnMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJJZHMgPSB0aGlzLmdldEF0dCgnVHJhbnNpdFJvdXRlcklkcycpO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVycyA9IHRoaXMuZ2V0QXR0KCdUcmFuc2l0Um91dGVycycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jZW5JZCA9IHByb3BzLmNlbklkO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgICAgIHRoaXMucmVnaW9uSWQgPSBwcm9wcy5yZWdpb25JZDtcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVySWQgPSBwcm9wcy50cmFuc2l0Um91dGVySWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VuSWQ6IHRoaXMuY2VuSWQsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICAgIHJlZ2lvbklkOiB0aGlzLnJlZ2lvbklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlcklkOiB0aGlzLnRyYW5zaXRSb3V0ZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVHJhbnNpdFJvdXRlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==