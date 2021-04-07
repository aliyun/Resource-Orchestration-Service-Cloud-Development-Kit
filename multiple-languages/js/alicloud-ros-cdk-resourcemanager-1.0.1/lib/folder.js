"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = exports.FolderProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const resourcemanager_generated_1 = require("./resourcemanager.generated");
Object.defineProperty(exports, "FolderProperty", { enumerable: true, get: function () { return resourcemanager_generated_1.RosFolder; } });
/**
 * A ROS resource type:  `ALIYUN::ResourceManager::Folder`
 */
class Folder extends ros.Resource {
    /**
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosFolder = new resourcemanager_generated_1.RosFolder(this, id, {
            folderName: props.folderName,
            parentFolderId: props.parentFolderId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFolder;
        this.attrFolderId = rosFolder.attrFolderId;
        this.attrFolderName = rosFolder.attrFolderName;
        this.attrParentFolderId = rosFolder.attrParentFolderId;
    }
}
exports.Folder = Folder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyRUFBd0Q7QUFFbEMsK0ZBRmIscUNBQVMsT0FFa0I7QUFrQnBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQnBDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUkscUNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDO0lBQzNELENBQUM7Q0FDSjtBQXpDRCx3QkF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NGb2xkZXIgfSBmcm9tICcuL3Jlc291cmNlbWFuYWdlci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NGb2xkZXIgYXMgRm9sZGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Rm9sZGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvbGRlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZvbGRlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmb2xkZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBmb2xkZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXJlbnRGb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyLiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyZW50Rm9sZGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Rm9sZGVyYFxuICovXG5leHBvcnQgY2xhc3MgRm9sZGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBGb2xkZXJJZDogVGhlIElEIG9mIHRoZSBmb2xkZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZvbGRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRm9sZGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGZvbGRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRm9sZGVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBhcmVudEZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXIuIElmIG5vdCBzZXQsIHRoZSBzeXN0ZW0gZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhcmVudEZvbGRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEZvbGRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0ZvbGRlciA9IG5ldyBSb3NGb2xkZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBmb2xkZXJOYW1lOiBwcm9wcy5mb2xkZXJOYW1lLFxuICAgICAgICAgICAgcGFyZW50Rm9sZGVySWQ6IHByb3BzLnBhcmVudEZvbGRlcklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0ZvbGRlcjtcbiAgICAgICAgdGhpcy5hdHRyRm9sZGVySWQgPSByb3NGb2xkZXIuYXR0ckZvbGRlcklkO1xuICAgICAgICB0aGlzLmF0dHJGb2xkZXJOYW1lID0gcm9zRm9sZGVyLmF0dHJGb2xkZXJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJQYXJlbnRGb2xkZXJJZCA9IHJvc0ZvbGRlci5hdHRyUGFyZW50Rm9sZGVySWQ7XG4gICAgfVxufVxuIl19