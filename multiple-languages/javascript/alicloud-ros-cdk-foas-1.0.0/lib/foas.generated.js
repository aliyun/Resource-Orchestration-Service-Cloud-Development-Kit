"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosProject = exports.RosCluster = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('order', RosCluster_OrderPropertyValidator)(properties.order));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    if (properties.vSwitchId && (Array.isArray(properties.vSwitchId) || (typeof properties.vSwitchId) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchId', ros.validateLength)({
            data: properties.vSwitchId.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('ossBucket', ros.requiredValidator)(properties.ossBucket));
    if (properties.ossBucket && (Array.isArray(properties.ossBucket) || (typeof properties.ossBucket) === 'string')) {
        errors.collect(ros.propertyValidator('ossBucket', ros.validateLength)({
            data: properties.ossBucket.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('ossBucket', ros.validateString)(properties.ossBucket));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    if (properties.clusterName && (typeof properties.clusterName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterName', ros.validateAllowedPattern)({
            data: properties.clusterName,
            reg: /[a-z][a-z0-9_]{2,63}/
        }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    if (properties.orderId && (Array.isArray(properties.orderId) || (typeof properties.orderId) === 'string')) {
        errors.collect(ros.propertyValidator('orderId', ros.validateLength)({
            data: properties.orderId.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('orderId', ros.validateString)(properties.orderId));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
        ClusterName: ros.stringToRosTemplate(properties.clusterName),
        Description: ros.stringToRosTemplate(properties.description),
        OssBucket: ros.stringToRosTemplate(properties.ossBucket),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        Order: rosClusterOrderPropertyToRosTemplate(properties.order),
        OrderId: ros.stringToRosTemplate(properties.orderId),
    };
}
/**
 * A ROS template type:  `ALIYUN::FOAS::Cluster`
 */
class RosCluster extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FOAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = ros.Token.asString(this.getAtt('ClusterId'));
        this.attrEngineVersions = ros.Token.asString(this.getAtt('EngineVersions'));
        this.attrMasterInstanceInfos = ros.Token.asString(this.getAtt('MasterInstanceInfos'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrSecurityGroupId = ros.Token.asString(this.getAtt('SecurityGroupId'));
        this.attrSlaveInstanceInfos = ros.Token.asString(this.getAtt('SlaveInstanceInfos'));
        this.attrState = ros.Token.asString(this.getAtt('State'));
        this.attrVSwitchIds = ros.Token.asString(this.getAtt('VSwitchIds'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.description = props.description;
        this.ossBucket = props.ossBucket;
        this.vSwitchId = props.vSwitchId;
        this.order = props.order;
        this.orderId = props.orderId;
    }
    get rosProperties() {
        return {
            clusterName: this.clusterName,
            description: this.description,
            ossBucket: this.ossBucket,
            vSwitchId: this.vSwitchId,
            order: this.order,
            orderId: this.orderId,
        };
    }
    renderProperties(props) {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCluster = RosCluster;
/**
 * The resource type name for this resource class.
 */
RosCluster.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Cluster";
/**
 * Determine whether the given properties match those of a `OrderProperty`
 *
 * @param properties - the TypeScript properties of a `OrderProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_OrderPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.payModel && (typeof properties.payModel) !== 'object') {
        errors.collect(ros.propertyValidator('payModel', ros.validateAllowedValues)({
            data: properties.payModel,
            allowedValues: ["pre", "post"],
        }));
    }
    errors.collect(ros.propertyValidator('payModel', ros.validateString)(properties.payModel));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if (properties.masterNumber && (typeof properties.masterNumber) !== 'object') {
        errors.collect(ros.propertyValidator('masterNumber', ros.validateAllowedValues)({
            data: properties.masterNumber,
            allowedValues: [1, 3],
        }));
    }
    errors.collect(ros.propertyValidator('masterNumber', ros.validateNumber)(properties.masterNumber));
    errors.collect(ros.propertyValidator('masterSpec', ros.requiredValidator)(properties.masterSpec));
    if (properties.masterSpec && (typeof properties.masterSpec) !== 'object') {
        errors.collect(ros.propertyValidator('masterSpec', ros.validateAllowedPattern)({
            data: properties.masterSpec,
            reg: /^Ecs_\d+c\d+g$/
        }));
    }
    errors.collect(ros.propertyValidator('masterSpec', ros.validateString)(properties.masterSpec));
    if (properties.slaveNumber && (typeof properties.slaveNumber) !== 'object') {
        errors.collect(ros.propertyValidator('slaveNumber', ros.validateRange)({
            data: properties.slaveNumber,
            min: 2,
            max: 1000,
        }));
    }
    errors.collect(ros.propertyValidator('slaveNumber', ros.validateNumber)(properties.slaveNumber));
    errors.collect(ros.propertyValidator('slaveSpec', ros.requiredValidator)(properties.slaveSpec));
    if (properties.slaveSpec && (typeof properties.slaveSpec) !== 'object') {
        errors.collect(ros.propertyValidator('slaveSpec', ros.validateAllowedPattern)({
            data: properties.slaveSpec,
            reg: /^Ecs_\d+c\d+g$/
        }));
    }
    errors.collect(ros.propertyValidator('slaveSpec', ros.validateString)(properties.slaveSpec));
    return errors.wrap('supplied properties not correct for "OrderProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster.Order` resource
 *
 * @param properties - the TypeScript properties of a `OrderProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Cluster.Order` resource.
 */
// @ts-ignore TS6133
function rosClusterOrderPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCluster_OrderPropertyValidator(properties).assertSuccess();
    return {
        PayModel: ros.stringToRosTemplate(properties.payModel),
        Period: ros.numberToRosTemplate(properties.period),
        MasterNumber: ros.numberToRosTemplate(properties.masterNumber),
        MasterSpec: ros.stringToRosTemplate(properties.masterSpec),
        SlaveNumber: ros.numberToRosTemplate(properties.slaveNumber),
        SlaveSpec: ros.stringToRosTemplate(properties.slaveSpec),
    };
}
/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deployType', ros.requiredValidator)(properties.deployType));
    if (properties.deployType && (typeof properties.deployType) !== 'object') {
        errors.collect(ros.propertyValidator('deployType', ros.validateAllowedValues)({
            data: properties.deployType,
            allowedValues: ["cell", "public"],
        }));
    }
    errors.collect(ros.propertyValidator('deployType', ros.validateString)(properties.deployType));
    errors.collect(ros.propertyValidator('managerIds', ros.requiredValidator)(properties.managerIds));
    if (properties.managerIds && (Array.isArray(properties.managerIds) || (typeof properties.managerIds) === 'string')) {
        errors.collect(ros.propertyValidator('managerIds', ros.validateLength)({
            data: properties.managerIds.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('managerIds', ros.validateString)(properties.managerIds));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.clusterId && (Array.isArray(properties.clusterId) || (typeof properties.clusterId) === 'string')) {
        errors.collect(ros.propertyValidator('clusterId', ros.validateLength)({
            data: properties.clusterId.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if (properties.orderId && (Array.isArray(properties.orderId) || (typeof properties.orderId) === 'string')) {
        errors.collect(ros.propertyValidator('orderId', ros.validateLength)({
            data: properties.orderId.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('orderId', ros.validateString)(properties.orderId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if (properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
            data: properties.name,
            reg: /[a-z][a-z0-9_]{2,63}/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FOAS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
        DeployType: ros.stringToRosTemplate(properties.deployType),
        ManagerIds: ros.stringToRosTemplate(properties.managerIds),
        Name: ros.stringToRosTemplate(properties.name),
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        Description: ros.stringToRosTemplate(properties.description),
        OrderId: ros.stringToRosTemplate(properties.orderId),
    };
}
/**
 * A ROS template type:  `ALIYUN::FOAS::Project`
 */
class RosProject extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FOAS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrState = ros.Token.asString(this.getAtt('State'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deployType = props.deployType;
        this.managerIds = props.managerIds;
        this.name = props.name;
        this.clusterId = props.clusterId;
        this.description = props.description;
        this.orderId = props.orderId;
    }
    get rosProperties() {
        return {
            deployType: this.deployType,
            managerIds: this.managerIds,
            name: this.name,
            clusterId: this.clusterId,
            description: this.description,
            orderId: this.orderId,
        };
    }
    renderProperties(props) {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosProject = RosProject;
/**
 * The resource type name for this resource class.
 */
RosProject.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Project";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9hcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2FzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBMEM5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLHdCQUF3QixDQUFDLFVBQWU7SUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMs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VUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDRCQUE0QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQXBGTCxnQ0FxRkM7QUFwRkc7O0dBRUc7QUFDb0IsaUNBQXNCLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Rk9BUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWUuIEl0IGJlZ2lucyB3aXRoIGEgbGV0dGVyLCBhbmQgY29udGFpbnMgb25seSBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBpcyBsaW1pdGVkIHRvIDMtNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBDbHVzdGVyIGRlc2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3NzQnVja2V0OiBCdWNrZXQgbmFtZSBpbiB5b3VyIE9TUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvc3NCdWNrZXQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFZTd2l0Y2ggSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3JkZXI6IE9yZGVyIGRldGFpbC4gT25seSBvbmUgb2YgcHJvcGVydHkgT3JkZXIgb3IgT3JkZXJJZCBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAqIE9yZGVyIGlzIG5vdCBzdWdnZXN0ZWQuXG4gICAgICogUG9saWN5IEFsaXl1bkJTU0Z1bGxBY2Nlc3MgbXVzdCBiZSBncmFudGVkIHRvIFN0cmVhbURlZmF1bHRSb2xlIGluIFJBTSBjb25zb2xlLlxuICAgICAqIFRoZSBvcmRlciBjYW4gbm90IGJlIGNhbmNlbGxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcmRlcj86IFJvc0NsdXN0ZXIuT3JkZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcmRlcklkOiBPcmRlciBJZC4gT25seSBvbmUgb2YgcHJvcGVydHkgT3JkZXIgb3IgT3JkZXJJZCBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAqIE9yZGVySWQgaXMgc3VnZ2VzdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9yZGVySWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2x1c3RlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbHVzdGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2x1c3RlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JkZXInLCBSb3NDbHVzdGVyX09yZGVyUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMub3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZTd2l0Y2hJZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnZTd2l0Y2hJZCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnZTd2l0Y2hJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy52U3dpdGNoSWQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc0J1Y2tldCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5vc3NCdWNrZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm9zc0J1Y2tldCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm9zc0J1Y2tldCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm9zc0J1Y2tldCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc0J1Y2tldCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5vc3NCdWNrZXQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc0J1Y2tldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NCdWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5jbHVzdGVyTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lLFxuICAgICAgICAgIHJlZzogL1thLXpdW2EtejAtOV9dezIsNjN9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3Rlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm9yZGVySWQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5vcmRlcklkKSB8fCAodHlwZW9mIHByb3BlcnRpZXMub3JkZXJJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZGVySWQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMub3JkZXJJZC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JkZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmRlcklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0NsdXN0ZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Rk9BUzo6Q2x1c3RlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2x1c3RlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGT0FTOjpDbHVzdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NsdXN0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NsdXN0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDbHVzdGVyTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVyTmFtZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBPc3NCdWNrZXQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzQnVja2V0KSxcbiAgICAgIFZTd2l0Y2hJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52U3dpdGNoSWQpLFxuICAgICAgT3JkZXI6IHJvc0NsdXN0ZXJPcmRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yZGVyKSxcbiAgICAgIE9yZGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JkZXJJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Rk9BUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NsdXN0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZPQVM6OkNsdXN0ZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW5naW5lVmVyc2lvbnM6IEVuZ2luZSBWZXJzaW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZ2luZVZlcnNpb25zOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1hc3Rlckluc3RhbmNlSW5mb3M6IE1hc3RlciBpbnN0YW5jZSBpbmZvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3Rlckluc3RhbmNlSW5mb3M6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3JkZXJJZDogT3JkZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgSWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUdyb3VwSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2xhdmVJbnN0YW5jZUluZm9zOiBTbGF2ZSBpbnN0YW5jZSBpbmZvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNsYXZlSW5zdGFuY2VJbmZvczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdGF0ZTogQ2x1c3RlciBzdGF0dXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGF0ZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU3dpdGNoSWRzOiBWU3dpdGNoIElkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZHM6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWUuIEl0IGJlZ2lucyB3aXRoIGEgbGV0dGVyLCBhbmQgY29udGFpbnMgb25seSBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBpcyBsaW1pdGVkIHRvIDMtNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3Rlck5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogQ2x1c3RlciBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvc3NCdWNrZXQ6IEJ1Y2tldCBuYW1lIGluIHlvdXIgT1NTLlxuICAgICAqL1xuICAgIHB1YmxpYyBvc3NCdWNrZXQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFZTd2l0Y2ggSUQuXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZGVyOiBPcmRlciBkZXRhaWwuIE9ubHkgb25lIG9mIHByb3BlcnR5IE9yZGVyIG9yIE9yZGVySWQgY2FuIGJlIHNwZWNpZmllZC5cbiAgICAgKiBPcmRlciBpcyBub3Qgc3VnZ2VzdGVkLlxuICAgICAqIFBvbGljeSBBbGl5dW5CU1NGdWxsQWNjZXNzIG11c3QgYmUgZ3JhbnRlZCB0byBTdHJlYW1EZWZhdWx0Um9sZSBpbiBSQU0gY29uc29sZS5cbiAgICAgKiBUaGUgb3JkZXIgY2FuIG5vdCBiZSBjYW5jZWxsZWQuXG4gICAgICovXG4gICAgcHVibGljIG9yZGVyOiBSb3NDbHVzdGVyLk9yZGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3JkZXJJZDogT3JkZXIgSWQuIE9ubHkgb25lIG9mIHByb3BlcnR5IE9yZGVyIG9yIE9yZGVySWQgY2FuIGJlIHNwZWNpZmllZC5cbiAgICAgKiBPcmRlcklkIGlzIHN1Z2dlc3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3JkZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkZPQVM6OkNsdXN0ZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NsdXN0ZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ2x1c3RlcklkJykpO1xuICAgICAgICB0aGlzLmF0dHJFbmdpbmVWZXJzaW9ucyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRW5naW5lVmVyc2lvbnMnKSk7XG4gICAgICAgIHRoaXMuYXR0ck1hc3Rlckluc3RhbmNlSW5mb3MgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ01hc3Rlckluc3RhbmNlSW5mb3MnKSk7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ09yZGVySWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clNlY3VyaXR5R3JvdXBJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU2VjdXJpdHlHcm91cElkJykpO1xuICAgICAgICB0aGlzLmF0dHJTbGF2ZUluc3RhbmNlSW5mb3MgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1NsYXZlSW5zdGFuY2VJbmZvcycpKTtcbiAgICAgICAgdGhpcy5hdHRyU3RhdGUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1N0YXRlJykpO1xuICAgICAgICB0aGlzLmF0dHJWU3dpdGNoSWRzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdWU3dpdGNoSWRzJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbHVzdGVyTmFtZSA9IHByb3BzLmNsdXN0ZXJOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMub3NzQnVja2V0ID0gcHJvcHMub3NzQnVja2V0O1xuICAgICAgICB0aGlzLnZTd2l0Y2hJZCA9IHByb3BzLnZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5vcmRlciA9IHByb3BzLm9yZGVyO1xuICAgICAgICB0aGlzLm9yZGVySWQgPSBwcm9wcy5vcmRlcklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJOYW1lOiB0aGlzLmNsdXN0ZXJOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvc3NCdWNrZXQ6IHRoaXMub3NzQnVja2V0LFxuICAgICAgICAgICAgdlN3aXRjaElkOiB0aGlzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICAgICAgb3JkZXJJZDogdGhpcy5vcmRlcklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ2x1c3RlciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF5TW9kZWw6IFBheSBtb2RlbC4gVmFsaWQgdmFsdWVzOiBwcmUsIHBvc3QuIERlZmF1bHQgdG8gcG9zdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBheU1vZGVsPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBlcmlvZDogUHJlIHBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGguIERlZmF1bHQgdG8gMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJOdW1iZXI6IE51bWJlciBvZiBtYXN0ZXJzLiBWYWxpZCB2YWx1ZXM6IDEsIDMuIERlZmF1bHQgdG8gMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1hc3Rlck51bWJlcj86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJTcGVjOiBNYXN0ZXIgc3BlYywgc3VjaCBhcyBFY3NfNGMxNmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXN0ZXJTcGVjOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2xhdmVOdW1iZXI6IE51bWJlciBvZiBtYXN0ZXJzLiBWYWxpZCB2YWx1ZXM6IDItMTAwMC4gRGVmYXVsdCB0byAyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2xhdmVOdW1iZXI/OiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2xhdmVTcGVjOiBNYXN0ZXIgc3BlYywgc3VjaCBhcyBFY3NfNGMxNmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzbGF2ZVNwZWM6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE9yZGVyUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9yZGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2x1c3Rlcl9PcmRlclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMucGF5TW9kZWwgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBheU1vZGVsKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXlNb2RlbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBheU1vZGVsLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcInByZVwiLFwicG9zdFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BheU1vZGVsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBheU1vZGVsKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2QgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1hc3Rlck51bWJlciAmJiAodHlwZW9mIHByb3BlcnRpZXMubWFzdGVyTnVtYmVyKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXN0ZXJOdW1iZXInLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXN0ZXJOdW1iZXIsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzEsM10sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXN0ZXJOdW1iZXInLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWFzdGVyTnVtYmVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXN0ZXJTcGVjJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1hc3RlclNwZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1hc3RlclNwZWMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1hc3RlclNwZWMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hc3RlclNwZWMnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWFzdGVyU3BlYyxcbiAgICAgICAgICByZWc6IC9eRWNzX1xcZCtjXFxkK2ckL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyU3BlYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tYXN0ZXJTcGVjKSk7XG4gICAgaWYocHJvcGVydGllcy5zbGF2ZU51bWJlciAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2xhdmVOdW1iZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NsYXZlTnVtYmVyJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2xhdmVOdW1iZXIsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDEwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NsYXZlTnVtYmVyJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnNsYXZlTnVtYmVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbGF2ZVNwZWMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2xhdmVTcGVjKSk7XG4gICAgaWYocHJvcGVydGllcy5zbGF2ZVNwZWMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNsYXZlU3BlYykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xhdmVTcGVjJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNsYXZlU3BlYyxcbiAgICAgICAgICByZWc6IC9eRWNzX1xcZCtjXFxkK2ckL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xhdmVTcGVjJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNsYXZlU3BlYykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJPcmRlclByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGT0FTOjpDbHVzdGVyLk9yZGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPcmRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGT0FTOjpDbHVzdGVyLk9yZGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NsdXN0ZXJPcmRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDbHVzdGVyX09yZGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXlNb2RlbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXlNb2RlbCksXG4gICAgICBQZXJpb2Q6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kKSxcbiAgICAgIE1hc3Rlck51bWJlcjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXN0ZXJOdW1iZXIpLFxuICAgICAgTWFzdGVyU3BlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXN0ZXJTcGVjKSxcbiAgICAgIFNsYXZlTnVtYmVyOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNsYXZlTnVtYmVyKSxcbiAgICAgIFNsYXZlU3BlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbGF2ZVNwZWMpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpGT0FTOjpQcm9qZWN0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1Byb2plY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95VHlwZTogQ2x1c3RlciB0eXBlOlxuICAgICAqIEV4Y2x1c2l2ZSBjbHVzdGVyOiBjZWxsXG4gICAgICogU2hhcmVkIGNsdXN0ZXI6IHB1YmxpY1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveVR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYW5hZ2VySWRzOiBDb21tYSBkZWxpbWl0ZWQgYWNjb3VudCBJZCBsaXN0IG9mIG1hbmFnZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hbmFnZXJJZHM6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBQcm9qZWN0IG5hbWUuIEl0IGJlZ2lucyB3aXRoIGEgbGV0dGVyLCBhbmQgY29udGFpbnMgb25seSBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBpcyBsaW1pdGVkIHRvIDMtNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogUHJvamVjdCBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcmRlcklkOiBPcmRlciBJZCBvZiBTaGFyZWQgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcmRlcklkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1Byb2plY3RQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJvamVjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Byb2plY3RQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlcGxveVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVwbG95VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVwbG95VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVwbG95VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVwbG95VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlcGxveVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiY2VsbFwiLFwicHVibGljXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVwbG95VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXBsb3lUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYW5hZ2VySWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1hbmFnZXJJZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1hbmFnZXJJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5tYW5hZ2VySWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubWFuYWdlcklkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hbmFnZXJJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWFuYWdlcklkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFuYWdlcklkcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tYW5hZ2VySWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNsdXN0ZXJJZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jbHVzdGVySWQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm9yZGVySWQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5vcmRlcklkKSB8fCAodHlwZW9mIHByb3BlcnRpZXMub3JkZXJJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZGVySWQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMub3JkZXJJZC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JkZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16XVthLXowLTlfXXsyLDYzfS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQcm9qZWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZPQVM6OlByb2plY3RgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Byb2plY3RQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Rk9BUzo6UHJvamVjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcm9qZWN0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGVwbG95VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXBsb3lUeXBlKSxcbiAgICAgIE1hbmFnZXJJZHM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWFuYWdlcklkcyksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgQ2x1c3RlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBPcmRlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yZGVySWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkZPQVM6OlByb2plY3RgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQcm9qZWN0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGT0FTOjpQcm9qZWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3RhdGU6IFByb2plY3Qgc3RhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGF0ZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95VHlwZTogQ2x1c3RlciB0eXBlOlxuICAgICAqIEV4Y2x1c2l2ZSBjbHVzdGVyOiBjZWxsXG4gICAgICogU2hhcmVkIGNsdXN0ZXI6IHB1YmxpY1xuICAgICAqL1xuICAgIHB1YmxpYyBkZXBsb3lUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFuYWdlcklkczogQ29tbWEgZGVsaW1pdGVkIGFjY291bnQgSWQgbGlzdCBvZiBtYW5hZ2Vycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFuYWdlcklkczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFByb2plY3QgbmFtZS4gSXQgYmVnaW5zIHdpdGggYSBsZXR0ZXIsIGFuZCBjb250YWlucyBvbmx5IGxvd2VyY2FzZSBFbmdsaXNoIGxldHRlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSwgYW5kIGlzIGxpbWl0ZWQgdG8gMy02NCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogUHJvamVjdCBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcmRlcklkOiBPcmRlciBJZCBvZiBTaGFyZWQgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3JkZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkZPQVM6OlByb2plY3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Byb2plY3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1Byb2plY3QuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clN0YXRlID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTdGF0ZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGVwbG95VHlwZSA9IHByb3BzLmRlcGxveVR5cGU7XG4gICAgICAgIHRoaXMubWFuYWdlcklkcyA9IHByb3BzLm1hbmFnZXJJZHM7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlcklkID0gcHJvcHMuY2x1c3RlcklkO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMub3JkZXJJZCA9IHByb3BzLm9yZGVySWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwbG95VHlwZTogdGhpcy5kZXBsb3lUeXBlLFxuICAgICAgICAgICAgbWFuYWdlcklkczogdGhpcy5tYW5hZ2VySWRzLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2x1c3RlcklkOiB0aGlzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3JkZXJJZDogdGhpcy5vcmRlcklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=