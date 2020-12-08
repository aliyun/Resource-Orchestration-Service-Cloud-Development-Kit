"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosResourceGroup = exports.RosResourceDirectory = exports.RosHandshake = exports.RosFolder = exports.RosAccount = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payerAccountId', ros.validateString)(properties.payerAccountId));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('folderId', ros.validateString)(properties.folderId));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
        DisplayName: ros.stringToRosTemplate(properties.displayName),
        FolderId: ros.stringToRosTemplate(properties.folderId),
        PayerAccountId: ros.stringToRosTemplate(properties.payerAccountId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::Account`
 */
class RosAccount extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ResourceManager::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = ros.Token.asString(this.getAtt('AccountId'));
        this.attrDisplayName = ros.Token.asString(this.getAtt('DisplayName'));
        this.attrFolderId = ros.Token.asString(this.getAtt('FolderId'));
        this.attrJoinMethod = ros.Token.asString(this.getAtt('JoinMethod'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrType = ros.Token.asString(this.getAtt('Type'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.folderId = props.folderId;
        this.payerAccountId = props.payerAccountId;
    }
    get rosProperties() {
        return {
            displayName: this.displayName,
            folderId: this.folderId,
            payerAccountId: this.payerAccountId,
        };
    }
    renderProperties(props) {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccount = RosAccount;
/**
 * The resource type name for this resource class.
 */
RosAccount.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";
/**
 * Determine whether the given properties match those of a `RosFolderProps`
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the result of the validation.
 */
function RosFolderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('folderName', ros.requiredValidator)(properties.folderName));
    errors.collect(ros.propertyValidator('folderName', ros.validateString)(properties.folderName));
    errors.collect(ros.propertyValidator('parentFolderId', ros.validateString)(properties.parentFolderId));
    return errors.wrap('supplied properties not correct for "RosFolderProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource.
 */
// @ts-ignore TS6133
function rosFolderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFolderPropsValidator(properties).assertSuccess();
    }
    return {
        FolderName: ros.stringToRosTemplate(properties.folderName),
        ParentFolderId: ros.stringToRosTemplate(properties.parentFolderId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::Folder`
 */
class RosFolder extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFolder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFolderId = ros.Token.asString(this.getAtt('FolderId'));
        this.attrFolderName = ros.Token.asString(this.getAtt('FolderName'));
        this.attrParentFolderId = ros.Token.asString(this.getAtt('ParentFolderId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.folderName = props.folderName;
        this.parentFolderId = props.parentFolderId;
    }
    get rosProperties() {
        return {
            folderName: this.folderName,
            parentFolderId: this.parentFolderId,
        };
    }
    renderProperties(props) {
        return rosFolderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFolder = RosFolder;
/**
 * The resource type name for this resource class.
 */
RosFolder.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";
/**
 * Determine whether the given properties match those of a `RosHandshakeProps`
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the result of the validation.
 */
function RosHandshakePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('note', ros.validateString)(properties.note));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('targetEntity', ros.requiredValidator)(properties.targetEntity));
    errors.collect(ros.propertyValidator('targetEntity', ros.validateString)(properties.targetEntity));
    return errors.wrap('supplied properties not correct for "RosHandshakeProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource.
 */
// @ts-ignore TS6133
function rosHandshakePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosHandshakePropsValidator(properties).assertSuccess();
    }
    return {
        TargetEntity: ros.stringToRosTemplate(properties.targetEntity),
        TargetType: ros.stringToRosTemplate(properties.targetType),
        Note: ros.stringToRosTemplate(properties.note),
    };
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::Handshake`
 */
class RosHandshake extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosHandshake.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHandshakeId = ros.Token.asString(this.getAtt('HandshakeId'));
        this.attrMasterAccountId = ros.Token.asString(this.getAtt('MasterAccountId'));
        this.attrMasterAccountName = ros.Token.asString(this.getAtt('MasterAccountName'));
        this.attrNote = ros.Token.asString(this.getAtt('Note'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrTargetEntity = ros.Token.asString(this.getAtt('TargetEntity'));
        this.attrTargetType = ros.Token.asString(this.getAtt('TargetType'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.targetEntity = props.targetEntity;
        this.targetType = props.targetType;
        this.note = props.note;
    }
    get rosProperties() {
        return {
            targetEntity: this.targetEntity,
            targetType: this.targetType,
            note: this.note,
        };
    }
    renderProperties(props) {
        return rosHandshakePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHandshake = RosHandshake;
/**
 * The resource type name for this resource class.
 */
RosHandshake.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";
/**
 * Determine whether the given properties match those of a `RosResourceDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosResourceDirectoryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosResourceDirectoryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource.
 */
// @ts-ignore TS6133
function rosResourceDirectoryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosResourceDirectoryPropsValidator(properties).assertSuccess();
    }
    return {};
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceDirectory`
 */
class RosResourceDirectory extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosResourceDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterAccountId = ros.Token.asString(this.getAtt('MasterAccountId'));
        this.attrMasterAccountName = ros.Token.asString(this.getAtt('MasterAccountName'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrRootFolderId = ros.Token.asString(this.getAtt('RootFolderId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }
    get rosProperties() {
        return {};
    }
    renderProperties(props) {
        return rosResourceDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceDirectory = RosResourceDirectory;
/**
 * The resource type name for this resource class.
 */
RosResourceDirectory.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";
/**
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
        DisplayName: ros.stringToRosTemplate(properties.displayName),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceGroup`
 */
class RosResourceGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ResourceManager::ResourceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = ros.Token.asString(this.getAtt('AccountId'));
        this.attrCreateDate = ros.Token.asString(this.getAtt('CreateDate'));
        this.attrDisplayName = ros.Token.asString(this.getAtt('DisplayName'));
        this.attrId = ros.Token.asString(this.getAtt('Id'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.attrRegionStatuses = ros.Token.asString(this.getAtt('RegionStatuses'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            displayName: this.displayName,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceGroup = RosResourceGroup;
/**
 * The resource type name for this resource class.
 */
RosResourceGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VtYW5hZ2VyLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc291cmNlbWFuYWdlci5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyw0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LENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLGtDQUFrQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM1RixDQUFDOztBQXBGTCw0Q0FxRkM7QUFwRkc7O0dBRUc7QUFDb0IsdUNBQXNCLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FjY291bnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IE1lbWJlciBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgZm9sZGVySWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5ZXJBY2NvdW50SWQ6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5ZXJBY2NvdW50SWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWNjb3VudFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2NvdW50UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWNjb3VudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF5ZXJBY2NvdW50SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF5ZXJBY2NvdW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXNwbGF5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXNwbGF5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZm9sZGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZm9sZGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWNjb3VudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkFjY291bnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY291bnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY291bnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FjY291bnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEaXNwbGF5TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXNwbGF5TmFtZSksXG4gICAgICBGb2xkZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mb2xkZXJJZCksXG4gICAgICBQYXllckFjY291bnRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXllckFjY291bnRJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQWNjb3VudCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNjb3VudElkOiBUaGlzIElEIG9mIFJlc291cmNlIE1hbmFnZXIgQWNjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERpc3BsYXlOYW1lOiBNZW1iZXIgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlzcGxheU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRm9sZGVySWQ6IFRoZSBJRCBvZiB0aGUgcGFyZW50IGZvbGRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRm9sZGVySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSm9pbk1ldGhvZDogV2F5cyBmb3IgbWVtYmVycyB0byBqb2luIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuIFZhbGlkIHZhbHVlczogaW52aXRlZCwgY3JlYXRlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySm9pbk1ldGhvZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZURpcmVjdG9yeUlkOiBSZXNvdXJjZSBkaXJlY3RvcnkgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlRGlyZWN0b3J5SWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHlwZTogTWVtYmVyIHR5cGUuIFRoZSB2YWx1ZSBvZiBSZXNvdXJjZUFjY291bnQgaW5kaWNhdGVzIHRoZSByZXNvdXJjZSBhY2NvdW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUeXBlOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogTWVtYmVyIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5ZXJBY2NvdW50SWQ6XG4gICAgICovXG4gICAgcHVibGljIHBheWVyQWNjb3VudElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2NvdW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2NvdW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2NvdW50SWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0FjY291bnRJZCcpKTtcbiAgICAgICAgdGhpcy5hdHRyRGlzcGxheU5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0Rpc3BsYXlOYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJGb2xkZXJJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRm9sZGVySWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ckpvaW5NZXRob2QgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0pvaW5NZXRob2QnKSk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlRGlyZWN0b3J5SWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1Jlc291cmNlRGlyZWN0b3J5SWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clR5cGUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1R5cGUnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWU7XG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBwcm9wcy5mb2xkZXJJZDtcbiAgICAgICAgdGhpcy5wYXllckFjY291bnRJZCA9IHByb3BzLnBheWVyQWNjb3VudElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZm9sZGVySWQ6IHRoaXMuZm9sZGVySWQsXG4gICAgICAgICAgICBwYXllckFjY291bnRJZDogdGhpcy5wYXllckFjY291bnRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWNjb3VudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRm9sZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZvbGRlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmb2xkZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBmb2xkZXJOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyZW50Rm9sZGVySWQ6IFRoZSBJRCBvZiB0aGUgcGFyZW50IGZvbGRlci4gSWYgbm90IHNldCwgdGhlIHN5c3RlbSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmVudEZvbGRlcklkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0ZvbGRlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGb2xkZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGb2xkZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZvbGRlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZm9sZGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZm9sZGVyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mb2xkZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJlbnRGb2xkZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXJlbnRGb2xkZXJJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGb2xkZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0ZvbGRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkZvbGRlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGb2xkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0ZvbGRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEZvbGRlck5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZm9sZGVyTmFtZSksXG4gICAgICBQYXJlbnRGb2xkZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJlbnRGb2xkZXJJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGb2xkZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Rm9sZGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRm9sZGVySWQ6IFRoZSBJRCBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb2xkZXJJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGb2xkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb2xkZXJOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBhcmVudEZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXIuIElmIG5vdCBzZXQsIHRoZSBzeXN0ZW0gZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhcmVudEZvbGRlcklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb2xkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIGZvbGRlck5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJlbnRGb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyLiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkXG4gICAgICovXG4gICAgcHVibGljIHBhcmVudEZvbGRlcklkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0ZvbGRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRm9sZGVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJGb2xkZXJJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRm9sZGVySWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ckZvbGRlck5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0ZvbGRlck5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clBhcmVudEZvbGRlcklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdQYXJlbnRGb2xkZXJJZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZm9sZGVyTmFtZSA9IHByb3BzLmZvbGRlck5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50Rm9sZGVySWQgPSBwcm9wcy5wYXJlbnRGb2xkZXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb2xkZXJOYW1lOiB0aGlzLmZvbGRlck5hbWUsXG4gICAgICAgICAgICBwYXJlbnRGb2xkZXJJZDogdGhpcy5wYXJlbnRGb2xkZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRm9sZGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkhhbmRzaGFrZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NIYW5kc2hha2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0RW50aXR5OiBJbnZpdGVkIGFjY291bnQgSUQgb3IgbG9naW4gZW1haWxcbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRFbnRpdHk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUeXBlIG9mIGFjY291bnQgYmVpbmcgaW52aXRlZC4gVmFsaWQgdmFsdWVzOiBBY2NvdW50LCBFbWFpbFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RlOiBSZW1hcmtzXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm90ZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NIYW5kc2hha2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSGFuZHNoYWtlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSGFuZHNoYWtlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdub3RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5vdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRFbnRpdHknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0RW50aXR5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRFbnRpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0RW50aXR5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0hhbmRzaGFrZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkhhbmRzaGFrZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSGFuZHNoYWtlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6SGFuZHNoYWtlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0hhbmRzaGFrZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSGFuZHNoYWtlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgVGFyZ2V0RW50aXR5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldEVudGl0eSksXG4gICAgICBUYXJnZXRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgICAgTm90ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub3RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkhhbmRzaGFrZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0hhbmRzaGFrZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpIYW5kc2hha2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBIYW5kc2hha2VJZDogVGhpcyBJRCBvZiBSZXNvdXJjZSBNYW5hZ2VyIGhhbmRzaGFrZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGFuZHNoYWtlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTWFzdGVyQWNjb3VudElkOiBSZXNvdXJjZSBhY2NvdW50IG1hc3RlciBhY2NvdW50IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJBY2NvdW50SWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTWFzdGVyQWNjb3VudE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtYWluIGFjY291bnQgb2YgdGhlIHJlc291cmNlIGRpcmVjdG9yeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFzdGVyQWNjb3VudE5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTm90ZTogUmVtYXJrc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTm90ZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZURpcmVjdG9yeUlkOiBSZXNvdXJjZSBkaXJlY3RvcnkgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlRGlyZWN0b3J5SWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFyZ2V0RW50aXR5OiBJbnZpdGVkIGFjY291bnQgSUQgb3IgbG9naW4gZW1haWxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhcmdldEVudGl0eTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYXJnZXRUeXBlOiBUeXBlIG9mIGFjY291bnQgYmVpbmcgaW52aXRlZC4gVmFsaWQgdmFsdWVzOiBBY2NvdW50LCBFbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFyZ2V0VHlwZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0RW50aXR5OiBJbnZpdGVkIGFjY291bnQgSUQgb3IgbG9naW4gZW1haWxcbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0RW50aXR5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0VHlwZTogVHlwZSBvZiBhY2NvdW50IGJlaW5nIGludml0ZWQuIFZhbGlkIHZhbHVlczogQWNjb3VudCwgRW1haWxcbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0VHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGU6IFJlbWFya3NcbiAgICAgKi9cbiAgICBwdWJsaWMgbm90ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6SGFuZHNoYWtlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NIYW5kc2hha2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0hhbmRzaGFrZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySGFuZHNoYWtlSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0hhbmRzaGFrZUlkJykpO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJBY2NvdW50SWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ01hc3RlckFjY291bnRJZCcpKTtcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyQWNjb3VudE5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ01hc3RlckFjY291bnROYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJOb3RlID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdOb3RlJykpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZURpcmVjdG9yeUlkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdSZXNvdXJjZURpcmVjdG9yeUlkJykpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRFbnRpdHkgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1RhcmdldEVudGl0eScpKTtcbiAgICAgICAgdGhpcy5hdHRyVGFyZ2V0VHlwZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVGFyZ2V0VHlwZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudGFyZ2V0RW50aXR5ID0gcHJvcHMudGFyZ2V0RW50aXR5O1xuICAgICAgICB0aGlzLnRhcmdldFR5cGUgPSBwcm9wcy50YXJnZXRUeXBlO1xuICAgICAgICB0aGlzLm5vdGUgPSBwcm9wcy5ub3RlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldEVudGl0eTogdGhpcy50YXJnZXRFbnRpdHksXG4gICAgICAgICAgICB0YXJnZXRUeXBlOiB0aGlzLnRhcmdldFR5cGUsXG4gICAgICAgICAgICBub3RlOiB0aGlzLm5vdGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0hhbmRzaGFrZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZURpcmVjdG9yeWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzIHtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzb3VyY2VEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSZXNvdXJjZURpcmVjdG9yeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZURpcmVjdG9yeVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1hc3RlckFjY291bnRJZDogVGhlIElEIG9mIHRoZSBtYXN0ZXIgYWNjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFzdGVyQWNjb3VudElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1hc3RlckFjY291bnROYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWFzdGVyIGFjY291bnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlckFjY291bnROYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlRGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZURpcmVjdG9yeUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvb3RGb2xkZXJJZDogVGhlIElEIG9mIHRoZSByb290IGZvbGRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9vdEZvbGRlcklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlRGlyZWN0b3J5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUmVzb3VyY2VEaXJlY3RvcnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck1hc3RlckFjY291bnRJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTWFzdGVyQWNjb3VudElkJykpO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJBY2NvdW50TmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTWFzdGVyQWNjb3VudE5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlRGlyZWN0b3J5SWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1Jlc291cmNlRGlyZWN0b3J5SWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clJvb3RGb2xkZXJJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUm9vdEZvbGRlcklkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUmVzb3VyY2VHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgcmVzb3VyY2UgZ3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgcmVzb3VyY2UgZ3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUmVzb3VyY2VHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUmVzb3VyY2VHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NSZXNvdXJjZUdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmVzb3VyY2VHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlR3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzb3VyY2VHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUmVzb3VyY2VHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpc3BsYXlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUmVzb3VyY2VHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZUdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNjb3VudElkOiBUaGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCB0byB3aGljaCB0aGUgcmVzb3VyY2UgZ3JvdXAgYmVsb25nc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZURhdGU6IFRoZSB0aW1lIHdoZW4gdGhlIHJlc291cmNlIGdyb3VwIHdhcyBjcmVhdGVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVEYXRlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERpc3BsYXlOYW1lOiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSByZXNvdXJjZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlzcGxheU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgcmVzb3VyY2UgZ3JvdXBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVnaW9uU3RhdHVzZXM6IFRoZSBzdGF0dXMgb2YgdGhlIHJlc291cmNlIGdyb3VwIGluIGFsbCByZWdpb25zXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25TdGF0dXNlczogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHJlc291cmNlIGdyb3VwXG4gICAgICovXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSByZXNvdXJjZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXNvdXJjZUdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSZXNvdXJjZUdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2NvdW50SWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0FjY291bnRJZCcpKTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlRGF0ZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ3JlYXRlRGF0ZScpKTtcbiAgICAgICAgdGhpcy5hdHRyRGlzcGxheU5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0Rpc3BsYXlOYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ05hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clJlZ2lvblN0YXR1c2VzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdSZWdpb25TdGF0dXNlcycpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUmVzb3VyY2VHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19