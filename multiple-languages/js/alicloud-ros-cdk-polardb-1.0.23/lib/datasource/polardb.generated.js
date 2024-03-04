"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosParameterGroups = exports.RosGlobalDatabaseNetworks = exports.RosDBNodeClasses = exports.RosDBClusters = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosDBClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDBClustersPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.dbVersion && (typeof properties.dbVersion) !== 'object') {
        errors.collect(ros.propertyValidator('dbVersion', ros.validateAllowedValues)({
            data: properties.dbVersion,
            allowedValues: ["8.0", "5.7", "5.6", "11", "14"],
        }));
    }
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if (properties.expired && (typeof properties.expired) !== 'object') {
        errors.collect(ros.propertyValidator('expired', ros.validateAllowedValues)({
            data: properties.expired,
            allowedValues: ["true", "false"],
        }));
    }
    errors.collect(ros.propertyValidator('expired', ros.validateString)(properties.expired));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    return errors.wrap('supplied properties not correct for "RosDBClustersProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBClusters` resource.
 */
// @ts-ignore TS6133
function rosDBClustersPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDBClustersPropsValidator(properties).assertSuccess();
    }
    return {
        DbClusterId: ros.stringToRosTemplate(properties.dbClusterId),
        DbType: ros.stringToRosTemplate(properties.dbType),
        DbVersion: ros.stringToRosTemplate(properties.dbVersion),
        Description: ros.stringToRosTemplate(properties.description),
        Expired: ros.stringToRosTemplate(properties.expired),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
 */
class RosDBClusters extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDBClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusters = this.getAtt('DBClusters');
        this.attrDbClusterIds = this.getAtt('DbClusterIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.description = props.description;
        this.expired = props.expired;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            dbClusterId: this.dbClusterId,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            description: this.description,
            expired: this.expired,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosDBClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDBClusters = RosDBClusters;
/**
 * The resource type name for this resource class.
 */
RosDBClusters.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBClusters";
/**
 * Determine whether the given properties match those of a `RosDBNodeClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBNodeClassesProps`
 *
 * @returns the result of the validation.
 */
function RosDBNodeClassesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    return errors.wrap('supplied properties not correct for "RosDBNodeClassesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBNodeClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosDBNodeClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBNodeClasses` resource.
 */
// @ts-ignore TS6133
function rosDBNodeClassesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDBNodeClassesPropsValidator(properties).assertSuccess();
    }
    return {
        PayType: ros.stringToRosTemplate(properties.payType),
        DBNodeClass: ros.stringToRosTemplate(properties.dbNodeClass),
        DBType: ros.stringToRosTemplate(properties.dbType),
        DBVersion: ros.stringToRosTemplate(properties.dbVersion),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBNodeClasses`, which is used to query the available resources of a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBNodeClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
class RosDBNodeClasses extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDBNodeClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNodeClassIds = this.getAtt('DBNodeClassIds');
        this.attrDbNodeClasses = this.getAtt('DBNodeClasses');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.payType = props.payType;
        this.dbNodeClass = props.dbNodeClass;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.zoneId = props.zoneId;
    }
    get rosProperties() {
        return {
            payType: this.payType,
            dbNodeClass: this.dbNodeClass,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            zoneId: this.zoneId,
        };
    }
    renderProperties(props) {
        return rosDBNodeClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDBNodeClasses = RosDBNodeClasses;
/**
 * The resource type name for this resource class.
 */
RosDBNodeClasses.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBNodeClasses";
/**
 * Determine whether the given properties match those of a `RosGlobalDatabaseNetworksProps`
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworksProps`
 *
 * @returns the result of the validation.
 */
function RosGlobalDatabaseNetworksPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('gdnId', ros.validateString)(properties.gdnId));
    return errors.wrap('supplied properties not correct for "RosGlobalDatabaseNetworksProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetworks` resource
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetworks` resource.
 */
// @ts-ignore TS6133
function rosGlobalDatabaseNetworksPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosGlobalDatabaseNetworksPropsValidator(properties).assertSuccess();
    }
    return {
        DbClusterId: ros.stringToRosTemplate(properties.dbClusterId),
        GdnId: ros.stringToRosTemplate(properties.gdnId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetworks`, which is used to query all global database networks (GDNs) within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetworks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
 */
class RosGlobalDatabaseNetworks extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGlobalDatabaseNetworks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGdnIds = this.getAtt('GdnIds');
        this.attrGlobalDatabaseNetworks = this.getAtt('GlobalDatabaseNetworks');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.gdnId = props.gdnId;
    }
    get rosProperties() {
        return {
            dbClusterId: this.dbClusterId,
            gdnId: this.gdnId,
        };
    }
    renderProperties(props) {
        return rosGlobalDatabaseNetworksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGlobalDatabaseNetworks = RosGlobalDatabaseNetworks;
/**
 * The resource type name for this resource class.
 */
RosGlobalDatabaseNetworks.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetworks";
/**
 * Determine whether the given properties match those of a `RosParameterGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosParameterGroupsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    return errors.wrap('supplied properties not correct for "RosParameterGroupsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroups` resource.
 */
// @ts-ignore TS6133
function rosParameterGroupsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosParameterGroupsPropsValidator(properties).assertSuccess();
    }
    return {
        DbType: ros.stringToRosTemplate(properties.dbType),
        DbVersion: ros.stringToRosTemplate(properties.dbVersion),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`, which is used to query parameter templates in a specific region.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
class RosParameterGroups extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosParameterGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrParameterGroupIds = this.getAtt('ParameterGroupIds');
        this.attrParameterGroups = this.getAtt('ParameterGroups');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
    }
    get rosProperties() {
        return {
            dbType: this.dbType,
            dbVersion: this.dbVersion,
        };
    }
    renderProperties(props) {
        return rosParameterGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosParameterGroups = RosParameterGroups;
/**
 * The resource type name for this resource class.
 */
RosParameterGroups.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroups";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sYXJkYi5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xhcmRiLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBa0Q5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDJCQUEyQixDQUFDLFVBQWU7SUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxJQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNFLElBQUksRUFBRSxVQUFVLENBQUMsU0FBUztZQUMxQixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDO1NBQzdDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixF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O0tBQ3pELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE2Qm5EOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsZ0NBQXlDO1FBQ25ILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxvQ0FBb0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7QUFyREwsZ0RBc0RDO0FBckRHOztHQUVHO0FBQ29CLHlDQUFzQixHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEQkNsdXN0ZXJzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wb2xhcmRiLWRiY2x1c3RlcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEQkNsdXN0ZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJDbHVzdGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJUeXBlOiBUaGUgZGF0YWJhc2UgZW5naW5lIHRoYXQgdGhlIGNsdXN0ZXIgcnVucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYlR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgZW5naW5lIHRoYXQgdGhlIGNsdXN0ZXIgcnVucy5cbiAgICAgKiBUaGUgcmFuZ2Ugb2YgdGhlIE15U1FMIHZlcnNpb24gbnVtYmVyIGlzIGFzIGZvbGxvd3M6XG4gICAgICogKioqIDUuNiAqICogKlxuICAgICAqICoqKiA1LjcgKiAqICpcbiAgICAgKiAqKiogOC4wICogKiAqXG4gICAgICogVGhlIHZhbHVlIHJhbmdlIG9mIFBvc3RncmVTUUwgdmVyc2lvbiBudW1iZXIgaXMgYXMgZm9sbG93czpcbiAgICAgKiAqKiogMTEgKiAqICpcbiAgICAgKiAqKiogMTQgKiAqICpcbiAgICAgKiBUaGUgT3JhY2xlIHZlcnNpb24gbnVtYmVyIGlzIDExLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV4cGlyZWQ6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBjbHVzdGVyIGhhcyBleHBpcmVkLlxuICAgICAqIFZhbGlkIHZhbHVlczogXG4gICAgICogdHJ1ZSBcbiAgICAgKiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV4cGlyZWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEQkNsdXN0ZXJzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RCQ2x1c3RlcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEQkNsdXN0ZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuZGJWZXJzaW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5kYlZlcnNpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVmVyc2lvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRiVmVyc2lvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCI4LjBcIixcIjUuN1wiLFwiNS42XCIsXCIxMVwiLFwiMTRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYlZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGJWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYkNsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYkNsdXN0ZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZXhwaXJlZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZXhwaXJlZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhwaXJlZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmV4cGlyZWQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1widHJ1ZVwiLFwiZmFsc2VcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBpcmVkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmV4cGlyZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYlR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zREJDbHVzdGVyc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UE9MQVJEQjo6REJDbHVzdGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zREJDbHVzdGVyc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UE9MQVJEQjo6REJDbHVzdGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEQkNsdXN0ZXJzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEQkNsdXN0ZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGJDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGJDbHVzdGVySWQpLFxuICAgICAgRGJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRiVHlwZSksXG4gICAgICBEYlZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGJWZXJzaW9uKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEV4cGlyZWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhwaXJlZCksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6UE9MQVJEQjo6REJDbHVzdGVyc2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYERCQ2x1c3RlcnNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wb2xhcmRiLWRiY2x1c3RlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RCQ2x1c3RlcnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQT0xBUkRCOjpEQkNsdXN0ZXJzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERCQ2x1c3RlcnM6IFRoZSBsaXN0IG9mIGRiIGNsdXN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJDbHVzdGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYkNsdXN0ZXJJZHM6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiQ2x1c3Rlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGJDbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYlR5cGU6IFRoZSBkYXRhYmFzZSBlbmdpbmUgdGhhdCB0aGUgY2x1c3RlciBydW5zLlxuICAgICAqL1xuICAgIHB1YmxpYyBkYlR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYlZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBlbmdpbmUgdGhhdCB0aGUgY2x1c3RlciBydW5zLlxuICAgICAqIFRoZSByYW5nZSBvZiB0aGUgTXlTUUwgdmVyc2lvbiBudW1iZXIgaXMgYXMgZm9sbG93czpcbiAgICAgKiAqKiogNS42ICogKiAqXG4gICAgICogKioqIDUuNyAqICogKlxuICAgICAqICoqKiA4LjAgKiAqICpcbiAgICAgKiBUaGUgdmFsdWUgcmFuZ2Ugb2YgUG9zdGdyZVNRTCB2ZXJzaW9uIG51bWJlciBpcyBhcyBmb2xsb3dzOlxuICAgICAqICoqKiAxMSAqICogKlxuICAgICAqICoqKiAxNCAqICogKlxuICAgICAqIFRoZSBPcmFjbGUgdmVyc2lvbiBudW1iZXIgaXMgMTEuXG4gICAgICovXG4gICAgcHVibGljIGRiVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhwaXJlZDogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNsdXN0ZXIgaGFzIGV4cGlyZWQuXG4gICAgICogVmFsaWQgdmFsdWVzOiBcbiAgICAgKiB0cnVlIFxuICAgICAqIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGV4cGlyZWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RCQ2x1c3RlcnNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RCQ2x1c3RlcnMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3RlcnMgPSB0aGlzLmdldEF0dCgnREJDbHVzdGVycycpO1xuICAgICAgICB0aGlzLmF0dHJEYkNsdXN0ZXJJZHMgPSB0aGlzLmdldEF0dCgnRGJDbHVzdGVySWRzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRiQ2x1c3RlcklkID0gcHJvcHMuZGJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuZGJUeXBlID0gcHJvcHMuZGJUeXBlO1xuICAgICAgICB0aGlzLmRiVmVyc2lvbiA9IHByb3BzLmRiVmVyc2lvbjtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmV4cGlyZWQgPSBwcm9wcy5leHBpcmVkO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYkNsdXN0ZXJJZDogdGhpcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGRiVHlwZTogdGhpcy5kYlR5cGUsXG4gICAgICAgICAgICBkYlZlcnNpb246IHRoaXMuZGJWZXJzaW9uLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBleHBpcmVkOiB0aGlzLmV4cGlyZWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEQkNsdXN0ZXJzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zREJOb2RlQ2xhc3Nlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcG9sYXJkYi1kYm5vZGVjbGFzc2VzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zREJOb2RlQ2xhc3Nlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXlUeXBlOiBUaGUgYmlsbGluZyBtZXRob2QuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBQb3N0cGFpZDogdGhlIHBheS1hcy15b3UtZ28gYmlsbGluZyBtZXRob2RcbiAgICAgKiBQcmVwYWlkOiB0aGUgc3Vic2NyaXB0aW9uIGJpbGxpbmcgbWV0aG9kXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiTm9kZUNsYXNzOiBUaGUgbm9kZSB0eXBlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFNwZWNpZmljYXRpb25zIG9mIGNvbXB1dGUgbm9kZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJUeXBlOiBUaGUgZGF0YWJhc2UgZW5naW5lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTXlTUUxcbiAgICAgKiBQb3N0Z3JlU1FMXG4gICAgICogT3JhY2xlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiVmVyc2lvbjogVGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBkYXRhYmFzZSBlbmdpbmVcbiAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBNeVNRTCBkYXRhYmFzZSBlbmdpbmU6XG4gICAgICogNS42XG4gICAgICogNS43XG4gICAgICogOFxuICAgICAqIFZhbGlkIHZhbHVlIGZvciB0aGUgUG9zdGdyZVNRTCBkYXRhYmFzZSBlbmdpbmU6IDExXG4gICAgICogVmFsaWQgdmFsdWUgZm9yIHRoZSBPcmFjbGUgZGF0YWJhc2UgZW5naW5lOiAxMVxuICAgICAqIE5vdGUgSWYgeW91IHNwZWNpZnkgdGhlIERCVHlwZSBwYXJhbWV0ZXIsIHlvdSBtdXN0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBkYlZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgem9uZUlkOiBUaGUgSUQgb2YgdGhlIHpvbmUgd2hlcmUgUG9sYXJEQiByZXNvdXJjZXMgdGhhdCB5b3Ugd2FudCB0byBxdWVyeSByZXNpZGUuXG4gICAgICogTm90ZSBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlUmVnaW9ucyBvcGVyYXRpb24gdG8gcXVlcnkgaW5mb3JtYXRpb24gYWJvdXQgem9uZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RCTm9kZUNsYXNzZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zREJOb2RlQ2xhc3Nlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RCTm9kZUNsYXNzZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYlZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYlR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BheVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGF5VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXlUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYk5vZGVDbGFzcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYk5vZGVDbGFzcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEQk5vZGVDbGFzc2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpEQk5vZGVDbGFzc2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEQk5vZGVDbGFzc2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpEQk5vZGVDbGFzc2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RCTm9kZUNsYXNzZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RCTm9kZUNsYXNzZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBQYXlUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBheVR5cGUpLFxuICAgICAgREJOb2RlQ2xhc3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGJOb2RlQ2xhc3MpLFxuICAgICAgREJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRiVHlwZSksXG4gICAgICBEQlZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGJWZXJzaW9uKSxcbiAgICAgIFpvbmVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56b25lSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpEQk5vZGVDbGFzc2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgYXZhaWxhYmxlIHJlc291cmNlcyBvZiBhIFBvbGFyREIgY2x1c3Rlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgREJOb2RlQ2xhc3Nlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBvbGFyZGItZGJub2RlY2xhc3Nlc1xuICovXG5leHBvcnQgY2xhc3MgUm9zREJOb2RlQ2xhc3NlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlBPTEFSREI6OkRCTm9kZUNsYXNzZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgREJOb2RlQ2xhc3NJZHM6IFRoZSBsaXN0IG9mIGRiIG5vZGUgY2xhc3MgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJOb2RlQ2xhc3NJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgREJOb2RlQ2xhc3NlczogVGhlIGxpc3Qgb2YgZGIgbm9kZSBjbGFzc2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJOb2RlQ2xhc3Nlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUG9zdHBhaWQ6IHRoZSBwYXktYXMteW91LWdvIGJpbGxpbmcgbWV0aG9kXG4gICAgICogUHJlcGFpZDogdGhlIHN1YnNjcmlwdGlvbiBiaWxsaW5nIG1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBwYXlUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJOb2RlQ2xhc3M6IFRoZSBub2RlIHR5cGUuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgU3BlY2lmaWNhdGlvbnMgb2YgY29tcHV0ZSBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGJOb2RlQ2xhc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYlR5cGU6IFRoZSBkYXRhYmFzZSBlbmdpbmUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBNeVNRTFxuICAgICAqIFBvc3RncmVTUUxcbiAgICAgKiBPcmFjbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZGJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJWZXJzaW9uOiBUaGUgdmVyc2lvbiBudW1iZXIgb2YgdGhlIGRhdGFiYXNlIGVuZ2luZVxuICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIE15U1FMIGRhdGFiYXNlIGVuZ2luZTpcbiAgICAgKiA1LjZcbiAgICAgKiA1LjdcbiAgICAgKiA4XG4gICAgICogVmFsaWQgdmFsdWUgZm9yIHRoZSBQb3N0Z3JlU1FMIGRhdGFiYXNlIGVuZ2luZTogMTFcbiAgICAgKiBWYWxpZCB2YWx1ZSBmb3IgdGhlIE9yYWNsZSBkYXRhYmFzZSBlbmdpbmU6IDExXG4gICAgICogTm90ZSBJZiB5b3Ugc3BlY2lmeSB0aGUgREJUeXBlIHBhcmFtZXRlciwgeW91IG11c3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlclxuICAgICAqL1xuICAgIHB1YmxpYyBkYlZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB3aGVyZSBQb2xhckRCIHJlc291cmNlcyB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5IHJlc2lkZS5cbiAgICAgKiBOb3RlIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSBpbmZvcm1hdGlvbiBhYm91dCB6b25lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgem9uZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zREJOb2RlQ2xhc3Nlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zREJOb2RlQ2xhc3Nlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGJOb2RlQ2xhc3NJZHMgPSB0aGlzLmdldEF0dCgnREJOb2RlQ2xhc3NJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyRGJOb2RlQ2xhc3NlcyA9IHRoaXMuZ2V0QXR0KCdEQk5vZGVDbGFzc2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnBheVR5cGUgPSBwcm9wcy5wYXlUeXBlO1xuICAgICAgICB0aGlzLmRiTm9kZUNsYXNzID0gcHJvcHMuZGJOb2RlQ2xhc3M7XG4gICAgICAgIHRoaXMuZGJUeXBlID0gcHJvcHMuZGJUeXBlO1xuICAgICAgICB0aGlzLmRiVmVyc2lvbiA9IHByb3BzLmRiVmVyc2lvbjtcbiAgICAgICAgdGhpcy56b25lSWQgPSBwcm9wcy56b25lSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF5VHlwZTogdGhpcy5wYXlUeXBlLFxuICAgICAgICAgICAgZGJOb2RlQ2xhc3M6IHRoaXMuZGJOb2RlQ2xhc3MsXG4gICAgICAgICAgICBkYlR5cGU6IHRoaXMuZGJUeXBlLFxuICAgICAgICAgICAgZGJWZXJzaW9uOiB0aGlzLmRiVmVyc2lvbixcbiAgICAgICAgICAgIHpvbmVJZDogdGhpcy56b25lSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RCTm9kZUNsYXNzZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wb2xhcmRiLWdsb2JhbGRhdGFiYXNlbmV0d29ya3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJDbHVzdGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ2RuSWQ6IFRoZSBJRCBvZiB0aGUgR0ROLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdkbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR2xvYmFsRGF0YWJhc2VOZXR3b3Jrc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiQ2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRiQ2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZG5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5nZG5JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpHbG9iYWxEYXRhYmFzZU5ldHdvcmtzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpHbG9iYWxEYXRhYmFzZU5ldHdvcmtzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEYkNsdXN0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kYkNsdXN0ZXJJZCksXG4gICAgICBHZG5JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5nZG5JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBPTEFSREI6Okdsb2JhbERhdGFiYXNlTmV0d29ya3NgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGFsbCBnbG9iYWwgZGF0YWJhc2UgbmV0d29ya3MgKEdETnMpIHdpdGhpbiB0aGUgY3VycmVudCBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEdsb2JhbERhdGFiYXNlTmV0d29ya3NgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wb2xhcmRiLWdsb2JhbGRhdGFiYXNlbmV0d29ya3NcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3MgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQT0xBUkRCOjpHbG9iYWxEYXRhYmFzZU5ldHdvcmtzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdkbklkczogVGhlIGxpc3Qgb2YgZ2RuIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdkbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHbG9iYWxEYXRhYmFzZU5ldHdvcmtzOiBUaGUgbGlzdCBvZiBnbG9iYWwgZGF0YWJhc2UgbmV0d29ya3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHbG9iYWxEYXRhYmFzZU5ldHdvcmtzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYkNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBkYkNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdkbklkOiBUaGUgSUQgb2YgdGhlIEdETi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2RuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJHZG5JZHMgPSB0aGlzLmdldEF0dCgnR2RuSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckdsb2JhbERhdGFiYXNlTmV0d29ya3MgPSB0aGlzLmdldEF0dCgnR2xvYmFsRGF0YWJhc2VOZXR3b3JrcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kYkNsdXN0ZXJJZCA9IHByb3BzLmRiQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmdkbklkID0gcHJvcHMuZ2RuSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGJDbHVzdGVySWQ6IHRoaXMuZGJDbHVzdGVySWQsXG4gICAgICAgICAgICBnZG5JZDogdGhpcy5nZG5JZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zR2xvYmFsRGF0YWJhc2VOZXR3b3Jrc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1BhcmFtZXRlckdyb3Vwc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcG9sYXJkYi1wYXJhbWV0ZXJncm91cHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQYXJhbWV0ZXJHcm91cHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZGF0YWJhc2UgZW5naW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYlZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBlbmdpbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1BhcmFtZXRlckdyb3Vwc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQYXJhbWV0ZXJHcm91cHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQYXJhbWV0ZXJHcm91cHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYlZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RiVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYlR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUGFyYW1ldGVyR3JvdXBzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQT0xBUkRCOjpQYXJhbWV0ZXJHcm91cHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1BhcmFtZXRlckdyb3Vwc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UE9MQVJEQjo6UGFyYW1ldGVyR3JvdXBzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BhcmFtZXRlckdyb3Vwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUGFyYW1ldGVyR3JvdXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRiVHlwZSksXG4gICAgICBEYlZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGJWZXJzaW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6UE9MQVJEQjo6UGFyYW1ldGVyR3JvdXBzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSBwYXJhbWV0ZXIgdGVtcGxhdGVzIGluIGEgc3BlY2lmaWMgcmVnaW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBQYXJhbWV0ZXJHcm91cHNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wb2xhcmRiLXBhcmFtZXRlcmdyb3Vwc1xuICovXG5leHBvcnQgY2xhc3MgUm9zUGFyYW1ldGVyR3JvdXBzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6UE9MQVJEQjo6UGFyYW1ldGVyR3JvdXBzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBhcmFtZXRlckdyb3VwSWRzOiBUaGUgbGlzdCBvZiBwYXJhbWV0ZXIgZ3JvdXAgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFyYW1ldGVyR3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGFyYW1ldGVyR3JvdXBzOiBUaGUgbGlzdCBvZiBwYXJhbWV0ZXIgZ3JvdXBzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFyYW1ldGVyR3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYlR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkYXRhYmFzZSBlbmdpbmUuXG4gICAgICovXG4gICAgcHVibGljIGRiVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGJWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUGFyYW1ldGVyR3JvdXBzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQYXJhbWV0ZXJHcm91cHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clBhcmFtZXRlckdyb3VwSWRzID0gdGhpcy5nZXRBdHQoJ1BhcmFtZXRlckdyb3VwSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clBhcmFtZXRlckdyb3VwcyA9IHRoaXMuZ2V0QXR0KCdQYXJhbWV0ZXJHcm91cHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGJUeXBlID0gcHJvcHMuZGJUeXBlO1xuICAgICAgICB0aGlzLmRiVmVyc2lvbiA9IHByb3BzLmRiVmVyc2lvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYlR5cGU6IHRoaXMuZGJUeXBlLFxuICAgICAgICAgICAgZGJWZXJzaW9uOiB0aGlzLmRiVmVyc2lvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUGFyYW1ldGVyR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=