"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = exports.DownloadProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dbs_generated_1 = require("./dbs.generated");
Object.defineProperty(exports, "DownloadProperty", { enumerable: true, get: function () { return dbs_generated_1.RosDownload; } });
/**
 * A ROS resource type:  `ALIYUN::DBS::Download`
 */
class Download extends ros.Resource {
    /**
     * Create a new `ALIYUN::DBS::Download`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDownload = new dbs_generated_1.RosDownload(this, id, {
            bakSetId: props.bakSetId,
            instanceName: props.instanceName,
            downloadPointInTime: props.downloadPointInTime,
            bakSetType: props.bakSetType,
            bakSetSize: props.bakSetSize,
            targetPath: props.targetPath,
            targetType: props.targetType,
            targetOssRegion: props.targetOssRegion,
            deleteBackupSetInOss: props.deleteBackupSetInOss === undefined || props.deleteBackupSetInOss === null ? true : props.deleteBackupSetInOss,
            targetBucket: props.targetBucket,
            formatType: props.formatType,
            downloadAddressDuration: props.downloadAddressDuration === undefined || props.downloadAddressDuration === null ? 2700 : props.downloadAddressDuration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDownload;
        this.attrBakSetId = rosDownload.attrBakSetId;
        this.attrDownloadAddressInfo = rosDownload.attrDownloadAddressInfo;
        this.attrInstanceName = rosDownload.attrInstanceName;
        this.attrTaskId = rosDownload.attrTaskId;
    }
}
exports.Download = Download;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3dubG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBcUZ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMkJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtZQUN6SSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLHVCQUF1QixFQUFFLEtBQUssQ0FBQyx1QkFBdUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLHVCQUF1QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCO1NBQ3hKLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1FBQ25FLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXpERCw0QkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEb3dubG9hZCB9IGZyb20gJy4vZGJzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0Rvd25sb2FkIGFzIERvd25sb2FkUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkRCUzo6RG93bmxvYWRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmb3JtYXRUeXBlOiBUaGUgZm9ybWF0IHRvIHdoaWNoIHRoZSBkb3dubG9hZGVkIGJhY2t1cCBzZXQgaXMgY29udmVydGVkLiBcbiAgICAgKiBWYWxpZCB2YWx1ZXM6IENTVnxTUUx8UGFycXVldFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZvcm1hdFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJha1NldElkOiBUaGUgSUQgb2YgdGhlIGJhY2t1cCBzZXQuIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVCYWNrdXBzIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgSUQgb2YgdGhlIGJhY2t1cCBzZXQuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgaWYgdGhlIEJha1NldFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBmdWxsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJha1NldElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFrU2V0U2l6ZTogVGhlIHNpemUgb2YgdGhlIGZ1bGwgYmFja3VwIHNldC4gVW5pdDogYnl0ZXMuIFxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVCYWNrdXBzIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgc2l6ZSBvZiB0aGUgZnVsbCBiYWNrdXAgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJha1NldFNpemU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYWtTZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZG93bmxvYWQgdGFzay4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGZ1bGw6IGRvd25sb2FkcyBhIGZ1bGwgYmFja3VwIHNldFxuICAgICAqIHBpdHI6IGRvd25sb2FkcyBhIGJhY2t1cCBzZXQgYXQgYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJha1NldFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGVCYWNrdXBTZXRJbk9zczogV2hldGhlciB0byBkZWxldGUgdGhlIGJhY2t1cCBzZXQgaW4gT1NTIHdoZW4gZGVsZXRpbmcgdGhlIHN0YWNrLlxuICAgICAqIFZhbGlkIHZhbHVlczogdHJ1ZXxmYWxzZSwgZGVmYXVsdCBpcyB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0ZUJhY2t1cFNldEluT3NzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRvd25sb2FkQWRkcmVzc0R1cmF0aW9uOiBXaGVuIHRoZSBkb3dubG9hZCB0YXJnZXQgaXMgYSBVUkwsIHNldCB0aGUgbGluayB2YWxpZGl0eSBwZXJpb2QuIFxuICAgICAqIFRoZSBkZWZhdWx0IFVSTCB2YWxpZGl0eSBwZXJpb2QgaXMgNzIwMCBzZWNvbmRzLiBcbiAgICAgKiBUaGUgZWZmZWN0aXZlIGR1cmF0aW9uIHJhbmdlIGNhbiBiZSBzZXQgZnJvbSAzMDAgc2Vjb25kcyB0byA4NjQwMCBzZWNvbmRzXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG93bmxvYWRBZGRyZXNzRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkb3dubG9hZFBvaW50SW5UaW1lOiBUaGUgcG9pbnQgaW4gdGltZSBhdCB3aGljaCB0aGUgYmFja3VwIHNldCBpcyBkb3dubG9hZGVkLiBcbiAgICAgKiBTcGVjaWZ5IGEgVU5JWCB0aW1lc3RhbXAgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIEphbnVhcnkgMSwgMTk3MCwgMDA6MDA6MDAgVVRDLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGlmIHRoZSBCYWtTZXRUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gcGl0ci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb3dubG9hZFBvaW50SW5UaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFyZ2V0QnVja2V0OiBUaGUgbmFtZSBvZiB0aGUgT1NTIGJ1Y2tldCB0aGF0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIGJhY2t1cCBzZXQuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgaWYgdGhlIFRhcmdldFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBPU1MuXG4gICAgICogTWFrZSBzdXJlIHRoYXQgeW91ciBhY2NvdW50IGlzIGdyYW50ZWQgdGhlIEFsaXl1bkRCU0RlZmF1bHRSb2xlIHBlcm1pc3Npb24uIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgVXNlIFJBTSBmb3IgcmVzb3VyY2UgYXV0aG9yaXphdGlvbi4gXG4gICAgICogWW91IGNhbiBhbHNvIGdyYW50IHBlcm1pc3Npb25zIGJhc2VkIG9uIHRoZSBvcGVyYXRpb24gaW5zdHJ1Y3Rpb25zIGluIHRoZSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBjb25zb2xlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldEJ1Y2tldD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhcmdldE9zc1JlZ2lvbjogVGhlIHJlZ2lvbiBpbiB3aGljaCB0aGUgT1NTIGJ1Y2tldCByZXNpZGVzLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGlmIHRoZSBUYXJnZXRUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gT1NTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldE9zc1JlZ2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhcmdldFBhdGg6IFRoZSBkZXN0aW5hdGlvbiBwYXRoIHRvIHdoaWNoIHRoZSBiYWNrdXAgc2V0IGlzIGRvd25sb2FkZWQuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgaWYgdGhlIFRhcmdldFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBPU1MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0UGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhcmdldFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXN0aW5hdGlvbiB0byB3aGljaCB0aGUgYmFja3VwIHNldCBpcyBkb3dubG9hZGVkLiBcbiAgICAgKiBWYWxpZCB2YWx1ZXM6IE9TU3xVUkxcbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpEQlM6OkRvd25sb2FkYFxuICovXG5leHBvcnQgY2xhc3MgRG93bmxvYWQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJha1NldElkOiBUaGUgSUQgb2YgdGhlIGJhY2t1cCBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYWtTZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERvd25sb2FkQWRkcmVzc0luZm86IFRoZSBkb3dubG9hZCBhZGRyZXNzIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG93bmxvYWRBZGRyZXNzSW5mbzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlTmFtZTogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhc2tJZDogVGhlIElEIG9mIHRoZSBkb3dubG9hZCB0YXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6REJTOjpEb3dubG9hZGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG93bmxvYWRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEb3dubG9hZCA9IG5ldyBSb3NEb3dubG9hZCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJha1NldElkOiBwcm9wcy5iYWtTZXRJZCxcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgZG93bmxvYWRQb2ludEluVGltZTogcHJvcHMuZG93bmxvYWRQb2ludEluVGltZSxcbiAgICAgICAgICAgIGJha1NldFR5cGU6IHByb3BzLmJha1NldFR5cGUsXG4gICAgICAgICAgICBiYWtTZXRTaXplOiBwcm9wcy5iYWtTZXRTaXplLFxuICAgICAgICAgICAgdGFyZ2V0UGF0aDogcHJvcHMudGFyZ2V0UGF0aCxcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHByb3BzLnRhcmdldFR5cGUsXG4gICAgICAgICAgICB0YXJnZXRPc3NSZWdpb246IHByb3BzLnRhcmdldE9zc1JlZ2lvbixcbiAgICAgICAgICAgIGRlbGV0ZUJhY2t1cFNldEluT3NzOiBwcm9wcy5kZWxldGVCYWNrdXBTZXRJbk9zcyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0ZUJhY2t1cFNldEluT3NzID09PSBudWxsID8gdHJ1ZSA6IHByb3BzLmRlbGV0ZUJhY2t1cFNldEluT3NzLFxuICAgICAgICAgICAgdGFyZ2V0QnVja2V0OiBwcm9wcy50YXJnZXRCdWNrZXQsXG4gICAgICAgICAgICBmb3JtYXRUeXBlOiBwcm9wcy5mb3JtYXRUeXBlLFxuICAgICAgICAgICAgZG93bmxvYWRBZGRyZXNzRHVyYXRpb246IHByb3BzLmRvd25sb2FkQWRkcmVzc0R1cmF0aW9uID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZG93bmxvYWRBZGRyZXNzRHVyYXRpb24gPT09IG51bGwgPyAyNzAwIDogcHJvcHMuZG93bmxvYWRBZGRyZXNzRHVyYXRpb24sXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRG93bmxvYWQ7XG4gICAgICAgIHRoaXMuYXR0ckJha1NldElkID0gcm9zRG93bmxvYWQuYXR0ckJha1NldElkO1xuICAgICAgICB0aGlzLmF0dHJEb3dubG9hZEFkZHJlc3NJbmZvID0gcm9zRG93bmxvYWQuYXR0ckRvd25sb2FkQWRkcmVzc0luZm87XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlTmFtZSA9IHJvc0Rvd25sb2FkLmF0dHJJbnN0YW5jZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHJvc0Rvd25sb2FkLmF0dHJUYXNrSWQ7XG4gICAgfVxufVxuIl19