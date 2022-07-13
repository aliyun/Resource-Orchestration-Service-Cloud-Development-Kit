"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = exports.DashboardProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "DashboardProperty", { enumerable: true, get: function () { return sls_generated_1.RosDashboard; } });
/**
 * A ROS resource type:  `ALIYUN::SLS::Dashboard`
 */
class Dashboard extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLS::Dashboard`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDashboard = new sls_generated_1.RosDashboard(this, id, {
            dashboardName: props.dashboardName,
            description: props.description,
            projectName: props.projectName,
            displayName: props.displayName,
            charts: props.charts,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDashboard;
        this.attrDashboardName = rosDashboard.attrDashboardName;
        this.attrDisplayName = rosDashboard.attrDisplayName;
    }
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBb0MxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQXRDRCw4QkFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEYXNoYm9hcmQgfSBmcm9tICcuL3Nscy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEYXNoYm9hcmQgYXMgRGFzaGJvYXJkUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMUzo6RGFzaGJvYXJkYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoYXJ0czogQ2hhcnQgbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFydHM6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGFzaGJvYXJkTmFtZTogRGFzaGJvYXJkIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGFzaGJvYXJkTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvamVjdE5hbWU6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEYXNoYm9hcmQgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogRGFzaGJvYXJkIGRpc3BsYXkgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0xTOjpEYXNoYm9hcmRgXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERhc2hib2FyZE5hbWU6IERhc2hib2FyZCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGFzaGJvYXJkTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERpc3BsYXlOYW1lOiBEaXNwbGF5IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXNwbGF5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMUzo6RGFzaGJvYXJkYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEYXNoYm9hcmRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEYXNoYm9hcmQgPSBuZXcgUm9zRGFzaGJvYXJkKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGFzaGJvYXJkTmFtZTogcHJvcHMuZGFzaGJvYXJkTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9wcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9wcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGNoYXJ0czogcHJvcHMuY2hhcnRzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0Rhc2hib2FyZDtcbiAgICAgICAgdGhpcy5hdHRyRGFzaGJvYXJkTmFtZSA9IHJvc0Rhc2hib2FyZC5hdHRyRGFzaGJvYXJkTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyRGlzcGxheU5hbWUgPSByb3NEYXNoYm9hcmQuYXR0ckRpc3BsYXlOYW1lO1xuICAgIH1cbn1cbiJdfQ==