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
    }
    get rosProperties() {
        return {
            filter: this.filter,
            includeReservationData: this.includeReservationData,
            isOrKey: this.isOrKey,
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
    }
    get rosProperties() {
        return {
            filter: this.filter,
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
    if (properties.transmitDirection && (typeof properties.transmitDirection) !== 'object') {
        errors.collect(ros.propertyValidator('transmitDirection', ros.validateAllowedValues)({
            data: properties.transmitDirection,
            allowedValues: ["RegionIn", "RegionOut"],
        }));
    }
    errors.collect(ros.propertyValidator('transmitDirection', ros.validateString)(properties.transmitDirection));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('cenRegionId', ros.validateString)(properties.cenRegionId));
    errors.collect(ros.propertyValidator('routeMapId', ros.validateString)(properties.routeMapId));
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
        this.routeMapId = props.routeMapId;
        this.transitRouterRouteTableId = props.transitRouterRouteTableId;
        this.transmitDirection = props.transmitDirection;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
            cenRegionId: this.cenRegionId,
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
        this.transitRouterRouteTableIds = props.transitRouterRouteTableIds;
        this.transitRouterRouteTableNames = props.transitRouterRouteTableNames;
        this.transitRouterRouteTableStatus = props.transitRouterRouteTableStatus;
        this.transitRouterRouteTableType = props.transitRouterRouteTableType;
    }
    get rosProperties() {
        return {
            transitRouterId: this.transitRouterId,
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
        this.regionId = props.regionId;
        this.transitRouterId = props.transitRouterId;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNlbi5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXdCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0FBQzdGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyx5Q0FBeUMsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3pHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFn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QUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sbUNBQW1DLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdGLENBQUM7O0FBN0RMLDhDQThEQztBQTdERzs7R0FFRztBQUNvQix3Q0FBc0IsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi1jZW5iYW5kd2lkdGhwYWNrYWdlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbHRlcjogRmlsdGVyIHZhbHVlIHdoZW4gcXVlcnlpbmcgcmVzb3VyY2VzXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsdGVyPzogQXJyYXk8Um9zQ2VuQmFuZHdpZHRoUGFja2FnZXMuRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluY2x1ZGVSZXNlcnZhdGlvbkRhdGE6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGluY2x1ZGUgcmVuZXdhbCBkYXRhLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluY2x1ZGVSZXNlcnZhdGlvbkRhdGE/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzT3JLZXk6IFRoZSBsb2dpY2FsIG9wZXJhdG9yIGJldHdlZW4gdGhlIGZpbHRlciBjb25kaXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzT3JLZXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzT3JLZXknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzT3JLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbHRlcicsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzX0ZpbHRlclByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5maWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luY2x1ZGVSZXNlcnZhdGlvbkRhdGEnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmluY2x1ZGVSZXNlcnZhdGlvbkRhdGEpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEZpbHRlcjogcm9zLmxpc3RNYXBwZXIocm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNGaWx0ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZmlsdGVyKSxcbiAgICAgIEluY2x1ZGVSZXNlcnZhdGlvbkRhdGE6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluY2x1ZGVSZXNlcnZhdGlvbkRhdGEpLFxuICAgICAgSXNPcktleTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNPcktleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBkZXRhaWxzIG9mIENsb3VkIEVudGVycHJpc2UgTmV0d29yayAoQ0VOKSBiYW5kd2lkdGggcGxhbnMgd2l0aGluIHRoZSBjdXJyZW50IEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQ2VuQmFuZHdpZHRoUGFja2FnZXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tY2VuYmFuZHdpZHRocGFja2FnZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5CYW5kd2lkdGhQYWNrYWdlSWRzOiBUaGUgbGlzdCBvZiBUaGUgQ2VuIGJhbmR3aWR0aCBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5CYW5kd2lkdGhQYWNrYWdlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENlbkJhbmR3aWR0aFBhY2thZ2VzOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgQ2VuQmFuZHdpZHRoUGFja2FnZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5CYW5kd2lkdGhQYWNrYWdlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsdGVyOiBGaWx0ZXIgdmFsdWUgd2hlbiBxdWVyeWluZyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyOiBBcnJheTxSb3NDZW5CYW5kd2lkdGhQYWNrYWdlcy5GaWx0ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5jbHVkZVJlc2VydmF0aW9uRGF0YTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gaW5jbHVkZSByZW5ld2FsIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIGluY2x1ZGVSZXNlcnZhdGlvbkRhdGE6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNPcktleTogVGhlIGxvZ2ljYWwgb3BlcmF0b3IgYmV0d2VlbiB0aGUgZmlsdGVyIGNvbmRpdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIGlzT3JLZXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDZW5CYW5kd2lkdGhQYWNrYWdlSWRzID0gdGhpcy5nZXRBdHQoJ0NlbkJhbmR3aWR0aFBhY2thZ2VJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2VuQmFuZHdpZHRoUGFja2FnZXMgPSB0aGlzLmdldEF0dCgnQ2VuQmFuZHdpZHRoUGFja2FnZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gcHJvcHMuZmlsdGVyO1xuICAgICAgICB0aGlzLmluY2x1ZGVSZXNlcnZhdGlvbkRhdGEgPSBwcm9wcy5pbmNsdWRlUmVzZXJ2YXRpb25EYXRhO1xuICAgICAgICB0aGlzLmlzT3JLZXkgPSBwcm9wcy5pc09yS2V5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgICAgICBpbmNsdWRlUmVzZXJ2YXRpb25EYXRhOiB0aGlzLmluY2x1ZGVSZXNlcnZhdGlvbkRhdGEsXG4gICAgICAgICAgICBpc09yS2V5OiB0aGlzLmlzT3JLZXksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEZpbHRlclByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VzX0ZpbHRlclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkZpbHRlclByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlcy5GaWx0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlcy5GaWx0ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNGaWx0ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDZW5JbnN0YW5jZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi1jZW5pbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5JbnN0YW5jZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsdGVyOiBGaWx0ZXIgdmFsdWUgd2hlbiBxdWVyeWluZyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICByZWFkb25seSBmaWx0ZXI/OiBBcnJheTxSb3NDZW5JbnN0YW5jZXMuRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Nlbkluc3RhbmNlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5JbnN0YW5jZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDZW5JbnN0YW5jZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbHRlcicsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0Nlbkluc3RhbmNlc19GaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuZmlsdGVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0Nlbkluc3RhbmNlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5JbnN0YW5jZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Nlbkluc3RhbmNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5JbnN0YW5jZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2VuSW5zdGFuY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDZW5JbnN0YW5jZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBGaWx0ZXI6IHJvcy5saXN0TWFwcGVyKHJvc0Nlbkluc3RhbmNlc0ZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5maWx0ZXIpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGRldGFpbHMgb2YgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlcyB3aXRoaW4gdGhlIGN1cnJlbnQgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDZW5JbnN0YW5jZXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tY2VuaW5zdGFuY2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5JbnN0YW5jZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5JZHM6IFRoZSBsaXN0IG9mIFRoZSBDZW4gaW5zdGFuY2UgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENlbnM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCBDZW5zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2Vuczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsdGVyOiBGaWx0ZXIgdmFsdWUgd2hlbiBxdWVyeWluZyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyOiBBcnJheTxSb3NDZW5JbnN0YW5jZXMuRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Nlbkluc3RhbmNlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2VuSW5zdGFuY2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDZW5JZHMgPSB0aGlzLmdldEF0dCgnQ2VuSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckNlbnMgPSB0aGlzLmdldEF0dCgnQ2VucycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBwcm9wcy5maWx0ZXI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuSW5zdGFuY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ2VuSW5zdGFuY2VzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDZW5JbnN0YW5jZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmlsdGVyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OkNlbkluc3RhbmNlcy5GaWx0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q0VOOjpDZW5JbnN0YW5jZXMuRmlsdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Nlbkluc3RhbmNlc0ZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDZW5JbnN0YW5jZXNfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDZW5Sb3V0ZU1hcHNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi1jZW5yb3V0ZW1hcHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5Sb3V0ZU1hcHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSByb3V0aW5nIHBvbGljeSBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlblJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlTWFwSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGluZyBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVNYXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiBUaGUgcm91dGUgdGFibGUgSUQgb2YgdGhlIHRyYW5zaXQgcm91dGVyIHdpdGggd2hpY2ggdGhlIHJvdXRpbmcgcG9saWN5IGlzIGFzc29jaWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc21pdERpcmVjdGlvbjogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgcm91dGluZyBwb2xpY3kgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc21pdERpcmVjdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZW5Sb3V0ZU1hcHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuUm91dGVNYXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuUm91dGVNYXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRyYW5zbWl0RGlyZWN0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy50cmFuc21pdERpcmVjdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNtaXREaXJlY3Rpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50cmFuc21pdERpcmVjdGlvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJSZWdpb25JblwiLFwiUmVnaW9uT3V0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNtaXREaXJlY3Rpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhbnNtaXREaXJlY3Rpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VuUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlTWFwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVNYXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDZW5Sb3V0ZU1hcHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5Sb3V0ZU1hcHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NlblJvdXRlTWFwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VuUm91dGVNYXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2VuSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuSWQpLFxuICAgICAgQ2VuUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuUmVnaW9uSWQpLFxuICAgICAgUm91dGVNYXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZU1hcElkKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZCksXG4gICAgICBUcmFuc21pdERpcmVjdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFuc21pdERpcmVjdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6Q2VuUm91dGVNYXBzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiByb3V0aW5nIHBvbGljaWVzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDZW5Sb3V0ZU1hcHNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tY2Vucm91dGVtYXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5Sb3V0ZU1hcHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDRU46OkNlblJvdXRlTWFwc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZU1hcElkczogVGhlIGxpc3Qgb2YgVGhlIFJvdXRlTWFwIGlkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlTWFwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlTWFwczogVGhlIGluZm9ybWF0aW9uIGFib3V0IFJvdXRlTWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlTWFwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlblJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgcm91dGluZyBwb2xpY3kgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VuUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZU1hcElkOiBUaGUgSUQgb2YgdGhlIHJvdXRpbmcgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZU1hcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZDogVGhlIHJvdXRlIHRhYmxlIElEIG9mIHRoZSB0cmFuc2l0IHJvdXRlciB3aXRoIHdoaWNoIHRoZSByb3V0aW5nIHBvbGljeSBpcyBhc3NvY2lhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNtaXREaXJlY3Rpb246IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHJvdXRpbmcgcG9saWN5IGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zbWl0RGlyZWN0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2VuUm91dGVNYXBzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDZW5Sb3V0ZU1hcHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlTWFwSWRzID0gdGhpcy5nZXRBdHQoJ1JvdXRlTWFwSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlTWFwcyA9IHRoaXMuZ2V0QXR0KCdSb3V0ZU1hcHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICAgICAgdGhpcy5jZW5SZWdpb25JZCA9IHByb3BzLmNlblJlZ2lvbklkO1xuICAgICAgICB0aGlzLnJvdXRlTWFwSWQgPSBwcm9wcy5yb3V0ZU1hcElkO1xuICAgICAgICB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQgPSBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkO1xuICAgICAgICB0aGlzLnRyYW5zbWl0RGlyZWN0aW9uID0gcHJvcHMudHJhbnNtaXREaXJlY3Rpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VuSWQ6IHRoaXMuY2VuSWQsXG4gICAgICAgICAgICBjZW5SZWdpb25JZDogdGhpcy5jZW5SZWdpb25JZCxcbiAgICAgICAgICAgIHJvdXRlTWFwSWQ6IHRoaXMucm91dGVNYXBJZCxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZCxcbiAgICAgICAgICAgIHRyYW5zbWl0RGlyZWN0aW9uOiB0aGlzLnRyYW5zbWl0RGlyZWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDZW5Sb3V0ZU1hcHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi10cmFuc2l0cm91dGVycm91dGV0YWJsZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIEVudGVycHJpc2UgRWRpdGlvbiB0cmFuc2l0IHJvdXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkczogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBZb3UgY2FuIHF1ZXJ5IG11bHRpcGxlIHJvdXRlIHRhYmxlcyBpbiBlYWNoIGNhbGwuIE1heGltdW0gdmFsdWUgb2YgTjogMjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM6IFRoZSBuYW1lIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBZb3UgY2FuIHF1ZXJ5IG11bHRpcGxlIHJvdXRlIHRhYmxlcyBpbiBlYWNoIGNhbGwuIE1heGltdW0gdmFsdWUgb2YgTjogMjAuXG4gICAgICogTm90ZSBJZiB5b3Ugc3BlY2lmeSBib3RoIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMuTiBhbmQgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMuTiwgbWFrZSBzdXJlIHRoYXQgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBJRCBiZWxvbmcgdG8gdGhlIHNhbWUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXM6IFRoZSBzdGF0ZSBvZiB0aGUgcm91dGUgdGFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGluZzogVGhlIHJvdXRlIHRhYmxlIGlzIGJlaW5nIGNyZWF0ZWQuXG4gICAgICogRGVsZXRpbmc6IFRoZSByb3V0ZSB0YWJsZSBpcyBiZWluZyBkZWxldGVkLlxuICAgICAqIEFjdGl2ZTogVGhlIHJvdXRlIHRhYmxlIGlzIGF2YWlsYWJsZSBmb3IgdXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTogVGhlIHR5cGUgb2Ygcm91dGUgdGFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDdXN0b206IGEgY3VzdG9tIHJvdXRlIHRhYmxlXG4gICAgICogU3lzdGVtOiB0aGUgZGVmYXVsdCByb3V0ZSB0YWJsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmFuc2l0Um91dGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFuc2l0Um91dGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFRyYW5zaXRSb3V0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFuc2l0Um91dGVySWQpLFxuICAgICAgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMpLFxuICAgICAgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXMpLFxuICAgICAgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlclJvdXRlVGFibGVzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgcm91dGUgdGFibGVzIG9mIGFuIEVudGVycHJpc2UgRWRpdGlvbiB0cmFuc2l0IHJvdXRlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2VuLXRyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlc1xuICovXG5leHBvcnQgY2xhc3MgUm9zVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6Q0VOOjpUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM6IFRoZSBsaXN0IG9mIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlczogVGhlIGxpc3Qgb2YgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVySWQ6IFRoZSBJRCBvZiB0aGUgRW50ZXJwcmlzZSBFZGl0aW9uIHRyYW5zaXQgcm91dGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkczogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBZb3UgY2FuIHF1ZXJ5IG11bHRpcGxlIHJvdXRlIHRhYmxlcyBpbiBlYWNoIGNhbGwuIE1heGltdW0gdmFsdWUgb2YgTjogMjAuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM6IFRoZSBuYW1lIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBZb3UgY2FuIHF1ZXJ5IG11bHRpcGxlIHJvdXRlIHRhYmxlcyBpbiBlYWNoIGNhbGwuIE1heGltdW0gdmFsdWUgb2YgTjogMjAuXG4gICAgICogTm90ZSBJZiB5b3Ugc3BlY2lmeSBib3RoIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMuTiBhbmQgVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMuTiwgbWFrZSBzdXJlIHRoYXQgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBJRCBiZWxvbmcgdG8gdGhlIHNhbWUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVTdGF0dXM6IFRoZSBzdGF0ZSBvZiB0aGUgcm91dGUgdGFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGluZzogVGhlIHJvdXRlIHRhYmxlIGlzIGJlaW5nIGNyZWF0ZWQuXG4gICAgICogRGVsZXRpbmc6IFRoZSByb3V0ZSB0YWJsZSBpcyBiZWluZyBkZWxldGVkLlxuICAgICAqIEFjdGl2ZTogVGhlIHJvdXRlIHRhYmxlIGlzIGF2YWlsYWJsZSBmb3IgdXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTogVGhlIHR5cGUgb2Ygcm91dGUgdGFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDdXN0b206IGEgY3VzdG9tIHJvdXRlIHRhYmxlXG4gICAgICogU3lzdGVtOiB0aGUgZGVmYXVsdCByb3V0ZSB0YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NUcmFuc2l0Um91dGVyUm91dGVUYWJsZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMgPSB0aGlzLmdldEF0dCgnVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlclJvdXRlVGFibGVzID0gdGhpcy5nZXRBdHQoJ1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVySWQgPSBwcm9wcy50cmFuc2l0Um91dGVySWQ7XG4gICAgICAgIHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMgPSBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkcztcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzID0gcHJvcHMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVOYW1lcztcbiAgICAgICAgdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1cyA9IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlU3RhdHVzO1xuICAgICAgICB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZSA9IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2l0Um91dGVySWQ6IHRoaXMudHJhbnNpdFJvdXRlcklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHM6IHRoaXMudHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZHMsXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVUYWJsZU5hbWVzOiB0aGlzLnRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlTmFtZXMsXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1czogdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVN0YXR1cyxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlVHlwZTogdGhpcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZVR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1RyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1RyYW5zaXRSb3V0ZXJzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZW4tdHJhbnNpdHJvdXRlcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUcmFuc2l0Um91dGVyc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWdpb25JZDogVGhlIElEIG9mIHRoZSByZWdpb24gd2hlcmUgdGhlIHRyYW5zaXQgcm91dGVyIGlzIGRlcGxveWVkLiBcbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlUmVnaW9ucyBvcGVyYXRpb24gdG8gcXVlcnkgcmVnaW9uIElEcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFuc2l0Um91dGVySWQ6IFRoZSBJRCBvZiB0aGUgdHJhbnNpdCByb3V0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RyYW5zaXRSb3V0ZXJzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYW5zaXRSb3V0ZXJzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVHJhbnNpdFJvdXRlcnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRSb3V0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFuc2l0Um91dGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVHJhbnNpdFJvdXRlcnNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNFTjo6VHJhbnNpdFJvdXRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYW5zaXRSb3V0ZXJzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RyYW5zaXRSb3V0ZXJzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUcmFuc2l0Um91dGVyc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENlbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlbklkKSxcbiAgICAgIFJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbklkKSxcbiAgICAgIFRyYW5zaXRSb3V0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFuc2l0Um91dGVySWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgdHJhbnNpdCByb3V0ZXJzIG9mIGEgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBUcmFuc2l0Um91dGVyc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNlbi10cmFuc2l0cm91dGVyc1xuICovXG5leHBvcnQgY2xhc3MgUm9zVHJhbnNpdFJvdXRlcnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDRU46OlRyYW5zaXRSb3V0ZXJzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJJZHM6IFRoZSBsaXN0IG9mIFRyYW5zaXRSb3V0ZXIgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyczogVGhlIGxpc3Qgb2YgVHJhbnNpdFJvdXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgdHJhbnNpdCByb3V0ZXIgaXMgZGVwbG95ZWQuIFxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSByZWdpb24gSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJJZDogVGhlIElEIG9mIHRoZSB0cmFuc2l0IHJvdXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNpdFJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJhbnNpdFJvdXRlcnNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyYW5zaXRSb3V0ZXJzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVySWRzID0gdGhpcy5nZXRBdHQoJ1RyYW5zaXRSb3V0ZXJJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlcnMgPSB0aGlzLmdldEF0dCgnVHJhbnNpdFJvdXRlcnMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICAgICAgdGhpcy5yZWdpb25JZCA9IHByb3BzLnJlZ2lvbklkO1xuICAgICAgICB0aGlzLnRyYW5zaXRSb3V0ZXJJZCA9IHByb3BzLnRyYW5zaXRSb3V0ZXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW5JZDogdGhpcy5jZW5JZCxcbiAgICAgICAgICAgIHJlZ2lvbklkOiB0aGlzLnJlZ2lvbklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlcklkOiB0aGlzLnRyYW5zaXRSb3V0ZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVHJhbnNpdFJvdXRlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==