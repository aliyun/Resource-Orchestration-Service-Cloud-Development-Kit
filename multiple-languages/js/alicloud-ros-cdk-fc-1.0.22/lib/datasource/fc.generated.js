"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTriggers = exports.RosServices = exports.RosFunctions = exports.RosCustomDomains = exports.RosAliases = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAliasesProps`
 *
 * @param properties - the TypeScript properties of a `RosAliasesProps`
 *
 * @returns the result of the validation.
 */
function RosAliasesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosAliasesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Aliases` resource
 *
 * @param properties - the TypeScript properties of a `RosAliasesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Aliases` resource.
 */
// @ts-ignore TS6133
function rosAliasesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAliasesPropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Aliases`, which is used to query the aliases of a Function Compute service.
 * @Note This class does not contain additional functions, so it is recommended to use the `Aliases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
class RosAliases extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAliases.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliasNames = this.getAtt('AliasNames');
        this.attrAliases = this.getAtt('Aliases');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
    }
    get rosProperties() {
        return {
            serviceName: this.serviceName,
            prefix: this.prefix,
        };
    }
    renderProperties(props) {
        return rosAliasesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAliases = RosAliases;
/**
 * The resource type name for this resource class.
 */
RosAliases.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Aliases";
/**
 * Determine whether the given properties match those of a `RosCustomDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosCustomDomainsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosCustomDomainsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::CustomDomains` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::CustomDomains` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomDomainsPropsValidator(properties).assertSuccess();
    }
    return {
        Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::CustomDomains`, which is used to query custom domain names in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
class RosCustomDomains extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomDomains = this.getAtt('CustomDomains');
        this.attrDomainNames = this.getAtt('DomainNames');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefix = props.prefix;
    }
    get rosProperties() {
        return {
            prefix: this.prefix,
        };
    }
    renderProperties(props) {
        return rosCustomDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomDomains = RosCustomDomains;
/**
 * The resource type name for this resource class.
 */
RosCustomDomains.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::CustomDomains";
/**
 * Determine whether the given properties match those of a `RosFunctionsProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionsProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosFunctionsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Functions` resource
 *
 * @param properties - the TypeScript properties of a `RosFunctionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Functions` resource.
 */
// @ts-ignore TS6133
function rosFunctionsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFunctionsPropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Prefix: ros.stringToRosTemplate(properties.prefix),
        Qualifier: ros.stringToRosTemplate(properties.qualifier),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Functions`, which is used to query functions.
 * @Note This class does not contain additional functions, so it is recommended to use the `Functions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
class RosFunctions extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFunctions.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionNames = this.getAtt('FunctionNames');
        this.attrFunctions = this.getAtt('Functions');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
        this.qualifier = props.qualifier;
    }
    get rosProperties() {
        return {
            serviceName: this.serviceName,
            prefix: this.prefix,
            qualifier: this.qualifier,
        };
    }
    renderProperties(props) {
        return rosFunctionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFunctions = RosFunctions;
/**
 * The resource type name for this resource class.
 */
RosFunctions.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Functions";
/**
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosServicesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Services` resource
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Services` resource.
 */
// @ts-ignore TS6133
function rosServicesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
        Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Services`, which is used to query services.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
 */
class RosServices extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceNames = this.getAtt('ServiceNames');
        this.attrServices = this.getAtt('Services');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefix = props.prefix;
    }
    get rosProperties() {
        return {
            prefix: this.prefix,
        };
    }
    renderProperties(props) {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosServices = RosServices;
/**
 * The resource type name for this resource class.
 */
RosServices.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Services";
/**
 * Determine whether the given properties match those of a `RosTriggersProps`
 *
 * @param properties - the TypeScript properties of a `RosTriggersProps`
 *
 * @returns the result of the validation.
 */
function RosTriggersPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosTriggersProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Triggers` resource
 *
 * @param properties - the TypeScript properties of a `RosTriggersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Triggers` resource.
 */
// @ts-ignore TS6133
function rosTriggersPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTriggersPropsValidator(properties).assertSuccess();
    }
    return {
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Triggers`, which is used to query triggers.
 * @Note This class does not contain additional functions, so it is recommended to use the `Triggers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
class RosTriggers extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTriggers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTriggerNames = this.getAtt('TriggerNames');
        this.attrTriggers = this.getAtt('Triggers');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            serviceName: this.serviceName,
            prefix: this.prefix,
        };
    }
    renderProperties(props) {
        return rosTriggersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTriggers = RosTriggers;
/**
 * The resource type name for this resource class.
 */
RosTriggers.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Triggers";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmMuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUFtQjlDOzs7Ozs7R0FNRztBQUNILFNBQVMsd0JBQXdCLENBQUMsVUFBZTtJQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyw0QkFBNEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzVGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHdCQUF3QixD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LFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sNkJBQTZCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O0FBNURMLGtDQTZEQztBQTVERzs7R0FFRztBQUNvQixrQ0FBc0IsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWxpYXNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZmMtYWxpYXNlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FsaWFzZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWZpeDogUXVhbGlmaWVkIHJldHVybmVkIGFsaWFzIG5hbWVzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBQcmVmaXguIEZvciBleGFtcGxlLCBpZiB0aGUgUHJlZml4IGlzIFwiYVwiLCB0aGUgcmV0dXJuZWQgYWxpYXMgbmFtZXMgc2hvdWxkIGJlIHN0YXJ0ZWQgd2l0aCBcImFcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWxpYXNlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGlhc2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWxpYXNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FsaWFzZXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkZDOjpBbGlhc2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGlhc2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpGQzo6QWxpYXNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGlhc2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBbGlhc2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU2VydmljZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgUHJlZml4OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZWZpeCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkZDOjpBbGlhc2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgYWxpYXNlcyBvZiBhIEZ1bmN0aW9uIENvbXB1dGUgc2VydmljZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQWxpYXNlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWZjLWFsaWFzZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FsaWFzZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpGQzo6QWxpYXNlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGlhc05hbWVzOiBUaGUgbGlzdCBvZiBhbGlhcyBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaWFzTmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWxpYXNlczogVGhlIGxpc3Qgb2YgYWxpYXNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaWFzZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBRdWFsaWZpZWQgcmV0dXJuZWQgYWxpYXMgbmFtZXMgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFByZWZpeC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBQcmVmaXggaXMgXCJhXCIsIHRoZSByZXR1cm5lZCBhbGlhcyBuYW1lcyBzaG91bGQgYmUgc3RhcnRlZCB3aXRoIFwiYVwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBbGlhc2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBbGlhc2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGlhc05hbWVzID0gdGhpcy5nZXRBdHQoJ0FsaWFzTmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyQWxpYXNlcyA9IHRoaXMuZ2V0QXR0KCdBbGlhc2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJvcHMucHJlZml4O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgcHJlZml4OiB0aGlzLnByZWZpeCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWxpYXNlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0N1c3RvbURvbWFpbnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWZjLWN1c3RvbWRvbWFpbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDdXN0b21Eb21haW5zUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWZpeDogUXVhbGlmaWVkIHJldHVybmVkIGN1c3RvbSBkb21haW4gbmFtZXMgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFByZWZpeC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBQcmVmaXggaXMgXCJhXCIsIHRoZSByZXR1cm5lZCBjdXN0b20gZG9tYWluIG5hbWVzIHNob3VsZCBiZSBzdGFydGVkIHdpdGggXCJhXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0N1c3RvbURvbWFpbnNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZWZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmVmaXgpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tRG9tYWluc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RkM6OkN1c3RvbURvbWFpbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0N1c3RvbURvbWFpbnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkZDOjpDdXN0b21Eb21haW5zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0N1c3RvbURvbWFpbnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBQcmVmaXg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlZml4KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RkM6OkN1c3RvbURvbWFpbnNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGN1c3RvbSBkb21haW4gbmFtZXMgaW4gRnVuY3Rpb24gQ29tcHV0ZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQ3VzdG9tRG9tYWluc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWZjLWN1c3RvbWRvbWFpbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0N1c3RvbURvbWFpbnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpGQzo6Q3VzdG9tRG9tYWluc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDdXN0b21Eb21haW5zOiBUaGUgbGlzdCBvZiBjdXN0b21fZG9tYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VzdG9tRG9tYWluczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lczogVGhlIGxpc3Qgb2YgY3VzdG9tX2RvbWFpbiBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbk5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVmaXg6IFF1YWxpZmllZCByZXR1cm5lZCBjdXN0b20gZG9tYWluIG5hbWVzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBQcmVmaXguIEZvciBleGFtcGxlLCBpZiB0aGUgUHJlZml4IGlzIFwiYVwiLCB0aGUgcmV0dXJuZWQgY3VzdG9tIGRvbWFpbiBuYW1lcyBzaG91bGQgYmUgc3RhcnRlZCB3aXRoIFwiYVwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21Eb21haW5zUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21Eb21haW5zLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDdXN0b21Eb21haW5zID0gdGhpcy5nZXRBdHQoJ0N1c3RvbURvbWFpbnMnKTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZXMgPSB0aGlzLmdldEF0dCgnRG9tYWluTmFtZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJvcHMucHJlZml4O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZpeDogdGhpcy5wcmVmaXgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0N1c3RvbURvbWFpbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NGdW5jdGlvbnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWZjLWZ1bmN0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Z1bmN0aW9uc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBRdWFsaWZpZWQgcmV0dXJuZWQgZnVuY3Rpb24gbmFtZXMgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFByZWZpeC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBQcmVmaXggaXMgXCJhXCIsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBuYW1lcyBzaG91bGQgYmUgc3RhcnRlZCB3aXRoIFwiYVwiLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IFRoZSBzZXJ2aWNlIHZlcnNpb24sIHdoaWNoIGNhbiBiZSB2ZXJzaW9uIElEIG9yIGFsaWFzIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Z1bmN0aW9uc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGdW5jdGlvbnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByZWZpeCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGdW5jdGlvbnNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkZDOjpGdW5jdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Z1bmN0aW9uc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RkM6OkZ1bmN0aW9uc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0Z1bmN0aW9uc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFNlcnZpY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgIFByZWZpeDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmVmaXgpLFxuICAgICAgUXVhbGlmaWVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1YWxpZmllciksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkZDOjpGdW5jdGlvbnNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGZ1bmN0aW9ucy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRnVuY3Rpb25zYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZmMtZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGdW5jdGlvbnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpGQzo6RnVuY3Rpb25zXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uTmFtZXM6IFRoZSBsaXN0IG9mIGZ1bmN0aW9uIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbnM6IFRoZSBsaXN0IG9mIGZ1bmN0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVmaXg6IFF1YWxpZmllZCByZXR1cm5lZCBmdW5jdGlvbiBuYW1lcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggUHJlZml4LiBGb3IgZXhhbXBsZSwgaWYgdGhlIFByZWZpeCBpcyBcImFcIiwgdGhlIHJldHVybmVkIGZ1bmN0aW9uIG5hbWVzIHNob3VsZCBiZSBzdGFydGVkIHdpdGggXCJhXCIuXG4gICAgICovXG4gICAgcHVibGljIHByZWZpeDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogVGhlIHNlcnZpY2UgdmVyc2lvbiwgd2hpY2ggY2FuIGJlIHZlcnNpb24gSUQgb3IgYWxpYXMgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcXVhbGlmaWVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRnVuY3Rpb25zUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbnMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZXMgPSB0aGlzLmdldEF0dCgnRnVuY3Rpb25OYW1lcycpO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbnMgPSB0aGlzLmdldEF0dCgnRnVuY3Rpb25zJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJvcHMucHJlZml4O1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IHByb3BzLnF1YWxpZmllcjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHByZWZpeDogdGhpcy5wcmVmaXgsXG4gICAgICAgICAgICBxdWFsaWZpZXI6IHRoaXMucXVhbGlmaWVyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGdW5jdGlvbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTZXJ2aWNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZmMtc2VydmljZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTZXJ2aWNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVmaXg6IFF1YWxpZmllZCByZXR1cm5lZCBzZXJ2aWNlIG5hbWVzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBQcmVmaXguIEZvciBleGFtcGxlLCBpZiB0aGUgUHJlZml4IGlzIFwiYVwiLCB0aGUgcmV0dXJuZWQgc2VydmljZSBuYW1lcyBzaG91bGQgYmUgc3RhcnRlZCB3aXRoIFwiYVwiLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTZXJ2aWNlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTZXJ2aWNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlcnZpY2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpGQzo6U2VydmljZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlcnZpY2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpGQzo6U2VydmljZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlcnZpY2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUHJlZml4OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZWZpeCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkZDOjpTZXJ2aWNlc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgc2VydmljZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFNlcnZpY2VzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZmMtc2VydmljZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NlcnZpY2VzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6RkM6OlNlcnZpY2VzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lczogVGhlIGxpc3Qgb2Ygc2VydmljZSBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlczogVGhlIGxpc3Qgb2Ygc2VydmljZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBRdWFsaWZpZWQgcmV0dXJuZWQgc2VydmljZSBuYW1lcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggUHJlZml4LiBGb3IgZXhhbXBsZSwgaWYgdGhlIFByZWZpeCBpcyBcImFcIiwgdGhlIHJldHVybmVkIHNlcnZpY2UgbmFtZXMgc2hvdWxkIGJlIHN0YXJ0ZWQgd2l0aCBcImFcIi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2VydmljZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NlcnZpY2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZXMgPSB0aGlzLmdldEF0dCgnU2VydmljZU5hbWVzJyk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VzID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByb3BzLnByZWZpeDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmVmaXg6IHRoaXMucHJlZml4LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTZXJ2aWNlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1RyaWdnZXJzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1mYy10cmlnZ2Vyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RyaWdnZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBRdWFsaWZpZWQgcmV0dXJuZWQgdHJpZ2dlciBuYW1lcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggUHJlZml4LiBGb3IgZXhhbXBsZSwgaWYgdGhlIFByZWZpeCBpcyBcImFcIiwgdGhlIHJldHVybmVkIHRyaWdnZXIgbmFtZXMgc2hvdWxkIGJlIHN0YXJ0ZWQgd2l0aCBcImFcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVHJpZ2dlcnNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJpZ2dlcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUcmlnZ2Vyc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1RyaWdnZXJzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpGQzo6VHJpZ2dlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyaWdnZXJzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpGQzo6VHJpZ2dlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJpZ2dlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RyaWdnZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRnVuY3Rpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBQcmVmaXg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlZml4KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RkM6OlRyaWdnZXJzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0cmlnZ2Vycy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVHJpZ2dlcnNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1mYy10cmlnZ2Vyc1xuICovXG5leHBvcnQgY2xhc3MgUm9zVHJpZ2dlcnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpGQzo6VHJpZ2dlcnNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJpZ2dlck5hbWVzOiBUaGUgbGlzdCBvZiB0cmlnZ2VyIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJpZ2dlck5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyaWdnZXJzOiBUaGUgbGlzdCBvZiB0cmlnZ2Vycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyaWdnZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBRdWFsaWZpZWQgcmV0dXJuZWQgdHJpZ2dlciBuYW1lcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggUHJlZml4LiBGb3IgZXhhbXBsZSwgaWYgdGhlIFByZWZpeCBpcyBcImFcIiwgdGhlIHJldHVybmVkIHRyaWdnZXIgbmFtZXMgc2hvdWxkIGJlIHN0YXJ0ZWQgd2l0aCBcImFcIi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJpZ2dlcnNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyaWdnZXJzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJUcmlnZ2VyTmFtZXMgPSB0aGlzLmdldEF0dCgnVHJpZ2dlck5hbWVzJyk7XG4gICAgICAgIHRoaXMuYXR0clRyaWdnZXJzID0gdGhpcy5nZXRBdHQoJ1RyaWdnZXJzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByb3BzLnByZWZpeDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICBwcmVmaXg6IHRoaXMucHJlZml4LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NUcmlnZ2Vyc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19