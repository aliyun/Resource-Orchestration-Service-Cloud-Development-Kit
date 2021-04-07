"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteMonitor = exports.SiteMonitorProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "SiteMonitorProperty", { enumerable: true, get: function () { return cms_generated_1.RosSiteMonitor; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::SiteMonitor`
 */
class SiteMonitor extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSiteMonitor = new cms_generated_1.RosSiteMonitor(this, id, {
            address: props.address,
            optionsJson: props.optionsJson,
            taskName: props.taskName,
            taskType: props.taskType,
            ispCities: props.ispCities,
            interval: props.interval,
            alertIds: props.alertIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSiteMonitor;
        this.attrTaskId = rosSiteMonitor.attrTaskId;
    }
}
exports.SiteMonitor = SiteMonitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZW1vbml0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaXRlbW9uaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQW9EOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQWxDRCxrQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTaXRlTW9uaXRvciB9IGZyb20gJy4vY21zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NpdGVNb25pdG9yIGFzIFNpdGVNb25pdG9yUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6U2l0ZU1vbml0b3JgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2l0ZU1vbml0b3JQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRyZXNzOiBUaGUgVVJMIG9yIElQIGFkZHJlc3MgbW9uaXRvcmVkIGJ5IHRoZSBtb25pdG9yaW5nIHRhc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFza05hbWU6IFRoZSBuYW1lIG9mIHRoZSBzaXRlIG1vbml0b3JpbmcgdGFzay4gVGhlIG5hbWUgbXVzdCBiZSA0IHRvIDEwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJdCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFza05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhc2tUeXBlOiBUaGUgcHJvdG9jb2wgdXNlZCBieSB0aGUgc2l0ZSBtb25pdG9yaW5nIHRhc2suIFZhbGlkIHZhbHVlczogSFRUUCwgSFRUUFMsIFBJTkcsIFRDUCxcbiAgICAgKiBVRFAsIEROUywgU01UUCwgUE9QMywgYW5kIEZUUC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXNrVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWxlcnRJZHM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxlcnRJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJ2YWw6IFRoZSBpbnRlcnZhbCBhdCB3aGljaCBkZXRlY3Rpb24gcmVxdWVzdHMgYXJlIHNlbnQuIFZhbGlkIHZhbHVlczogMSwgNSwgYW5kIDE1LiBVbml0OlxuICAgICAqIG1pbnV0ZXMuIERlZmF1bHQgdmFsdWU6IDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJ2YWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc3BDaXRpZXM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCBkZXRlY3Rpb24gcG9pbnRzLCB3aGljaCBpcyBzcGVjaWZpZWQgaW4gYSBKU09OIGFycmF5LiBFeGFtcGxlOlxuICAgICAqIFt7XCJjaXR5XCI6XCI1NDZcIixcImlzcFwiOlwiNDY1XCJ9LHtcImNpdHlcIjpcIjU3MlwiLFwiaXNwXCI6XCI0NjVcIn0se1wiY2l0eVwiOlwiNzM4XCIsXCJpc3BcIjpcIjQ2NVwifV0uIFRoZSB0aHJlZSBjaXR5IGNvZGVzIHJlcHJlc2VudCBCZWlqaW5nLCBIYW5nemhvdSwgYW5kIFFpbmdkYW8uXG4gICAgICogTm90ZSBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlU2l0ZU1vbml0b3JJU1BDaXR5TGlzdCBBUEkgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBkZXRlY3Rpb25cbiAgICAgKiBwb2ludHMgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgc2l0ZSBtb25pdG9yaW5nIHRhc2tzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4gICAgICogRGVzY3JpYmVTaXRlTW9uaXRvcklTUENpdHlMaXN0IC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgdGhlIHN5c3RlbSByYW5kb21seSBzZWxlY3RzIHRocmVlIGRldGVjdGlvblxuICAgICAqIHBvaW50cyBmb3Igc2l0ZSBtb25pdG9yaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcENpdGllcz86IEFycmF5PFJvc1NpdGVNb25pdG9yLklzcENpdGllc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wdGlvbnNKc29uOiBUaGUgZXh0ZW5kZWQgb3B0aW9ucyBvZiB0aGUgcHJvdG9jb2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBzaXRlIG1vbml0b3JpbmcgdGFzay4gVGhlXG4gICAgICogb3B0aW9ucyB2YXJ5IGJhc2VkIG9uIHRoZSBwcm90b2NvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHRpb25zSnNvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpTaXRlTW9uaXRvcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFNpdGVNb25pdG9yIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYXNrSWQ6IFRoZSBJRCBvZiB0aGUgc2l0ZSBtb25pdG9yaW5nIHRhc2suXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXNrSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OlNpdGVNb25pdG9yYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTaXRlTW9uaXRvclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NpdGVNb25pdG9yID0gbmV3IFJvc1NpdGVNb25pdG9yKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICAgIG9wdGlvbnNKc29uOiBwcm9wcy5vcHRpb25zSnNvbixcbiAgICAgICAgICAgIHRhc2tOYW1lOiBwcm9wcy50YXNrTmFtZSxcbiAgICAgICAgICAgIHRhc2tUeXBlOiBwcm9wcy50YXNrVHlwZSxcbiAgICAgICAgICAgIGlzcENpdGllczogcHJvcHMuaXNwQ2l0aWVzLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgYWxlcnRJZHM6IHByb3BzLmFsZXJ0SWRzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NpdGVNb25pdG9yO1xuICAgICAgICB0aGlzLmF0dHJUYXNrSWQgPSByb3NTaXRlTW9uaXRvci5hdHRyVGFza0lkO1xuICAgIH1cbn1cbiJdfQ==