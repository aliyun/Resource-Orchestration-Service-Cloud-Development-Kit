"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneDefensePolicy = exports.SceneDefensePolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ddospro_generated_1 = require("./ddospro.generated");
Object.defineProperty(exports, "SceneDefensePolicyProperty", { enumerable: true, get: function () { return ddospro_generated_1.RosSceneDefensePolicy; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::SceneDefensePolicy`, which is used to create a scenario-specific custom policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSceneDefensePolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
class SceneDefensePolicy extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosSceneDefensePolicy = new ddospro_generated_1.RosSceneDefensePolicy(this, id, {
            endTime: props.endTime,
            startTime: props.startTime,
            name: props.name,
            template: props.template,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSceneDefensePolicy;
        this.attrName = rosSceneDefensePolicy.attrName;
    }
}
exports.SceneDefensePolicy = SceneDefensePolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmVkZWZlbnNlcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NlbmVkZWZlbnNlcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyREFBNEQ7QUFFMUIsMkdBRnpCLHlDQUFxQixPQUU4QjtBQStCNUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXaEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0scUJBQXFCLEdBQUcsSUFBSSx5Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQWhDRCxnREFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTY2VuZURlZmVuc2VQb2xpY3kgfSBmcm9tICcuL2Rkb3Nwcm8uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2NlbmVEZWZlbnNlUG9saWN5IGFzIFNjZW5lRGVmZW5zZVBvbGljeVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU2NlbmVEZWZlbnNlUG9saWN5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRkb3Nwcm8tc2NlbmVkZWZlbnNlcG9saWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVEZWZlbnNlUG9saWN5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5kVGltZTogVGhlIGVuZCB0aW1lIG9mIHRoZSBwb2xpY3kuIFRoaXMgdmFsdWUgaXMgYSBVTklYIHRpbWVzdGFtcC4gVW5pdHM6IG1pbGxpc2Vjb25kcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRUaW1lOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcG9saWN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0YXJ0VGltZTogVGhlIHN0YXJ0IHRpbWUgb2YgdGhlIHBvbGljeS4gVGhpcyB2YWx1ZSBpcyBhIFVOSVggdGltZXN0YW1wLiBVbml0czogbWlsbGlzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YXJ0VGltZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGU6IFRoZSB0ZW1wbGF0ZSBvZiB0aGUgcG9saWN5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogcHJvbW90aW9uOiBpbXBvcnRhbnQgYWN0aXZpdHlcbiAgICAgKiBieXBhc3M6IGFsbCB0cmFmZmljIGZvcndhcmRlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkREb1NQcm86OlNjZW5lRGVmZW5zZVBvbGljeWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgc2NlbmFyaW8tc3BlY2lmaWMgY3VzdG9tIHBvbGljeS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1NjZW5lRGVmZW5zZVBvbGljeWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRkb3Nwcm8tc2NlbmVkZWZlbnNlcG9saWN5XG4gKi9cbmV4cG9ydCBjbGFzcyBTY2VuZURlZmVuc2VQb2xpY3kgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFNjZW5lRGVmZW5zZVBvbGljeVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjZW5lRGVmZW5zZVBvbGljeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2NlbmVEZWZlbnNlUG9saWN5ID0gbmV3IFJvc1NjZW5lRGVmZW5zZVBvbGljeSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuZFRpbWU6IHByb3BzLmVuZFRpbWUsXG4gICAgICAgICAgICBzdGFydFRpbWU6IHByb3BzLnN0YXJ0VGltZSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcHJvcHMudGVtcGxhdGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2NlbmVEZWZlbnNlUG9saWN5O1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zU2NlbmVEZWZlbnNlUG9saWN5LmF0dHJOYW1lO1xuICAgIH1cbn1cbiJdfQ==