"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynchronizationJob = exports.SynchronizationJobProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dts_generated_1 = require("./dts.generated");
Object.defineProperty(exports, "SynchronizationJobProperty", { enumerable: true, get: function () { return dts_generated_1.RosSynchronizationJob; } });
/**
 * A ROS resource type:  `ALIYUN::DTS::SynchronizationJob`
 */
class SynchronizationJob extends ros.Resource {
    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSynchronizationJob = new dts_generated_1.RosSynchronizationJob(this, id, {
            synchronizationObjects: props.synchronizationObjects,
            period: props.period,
            payType: props.payType ? props.payType : 'Postpaid',
            topology: props.topology,
            sourceRegion: props.sourceRegion,
            dataInitialization: props.dataInitialization ? props.dataInitialization : true,
            destinationEndpoint: props.destinationEndpoint,
            networkType: props.networkType,
            sourceEndpoint: props.sourceEndpoint,
            usedTime: props.usedTime,
            structureInitialization: props.structureInitialization ? props.structureInitialization : true,
            synchronizationJobClass: props.synchronizationJobClass,
            destRegion: props.destRegion,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSynchronizationJob;
        this.attrSynchronizationJobId = rosSynchronizationJob.attrSynchronizationJobId;
    }
}
exports.SynchronizationJob = SynchronizationJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY2hyb25pemF0aW9uam9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3luY2hyb25pemF0aW9uam9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQWdGNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWWhEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxxQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ25ELFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4Qix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM3Rix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUNuRixDQUFDO0NBQ0o7QUF4Q0QsZ0RBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU3luY2hyb25pemF0aW9uSm9iIH0gZnJvbSAnLi9kdHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU3luY2hyb25pemF0aW9uSm9iIGFzIFN5bmNocm9uaXphdGlvbkpvYlByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpEVFM6OlN5bmNocm9uaXphdGlvbkpvYmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTeW5jaHJvbml6YXRpb25Kb2JQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvbkVuZHBvaW50OiBNaWdyYXRpb24gdGFyZ2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkVuZHBvaW50OiBSb3NTeW5jaHJvbml6YXRpb25Kb2IuRGVzdGluYXRpb25FbmRwb2ludFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdFJlZ2lvbjogUmVnaW9uIHdoZXJlIHRoZSBzeW5jaHJvbml6YXRpb24gdGFyZ2V0IGluc3RhbmNlIGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdFJlZ2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlRW5kcG9pbnQ6IE1pZ3JhdGlvbiBzb3VyY2UgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUVuZHBvaW50OiBSb3NTeW5jaHJvbml6YXRpb25Kb2IuU291cmNlRW5kcG9pbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZVJlZ2lvbjogUmVnaW9uIHdoZXJlIHRoZSBzeW5jaHJvbml6YXRpb24gc291cmNlIGluc3RhbmNlIGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlUmVnaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeW5jaHJvbml6YXRpb25Kb2JDbGFzczogU3luY2hyb25vdXMgaW5zdGFuY2Ugc3BlY2lmaWNhdGlvbnMsIHdoaWNoIGNhbiBiZTpcbiAgICAgKiBtaWNybywgc21hbGwsIG1lZGl1bSwgbGFyZ2UgYW5kIHNvIG9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpczogc21hbGxcbiAgICAgKi9cbiAgICByZWFkb25seSBzeW5jaHJvbml6YXRpb25Kb2JDbGFzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YUluaXRpYWxpemF0aW9uOiBXaGV0aGVyIHRvIHBlcmZvcm0gZnVsbCBkYXRhIGluaXRpYWxpemF0aW9uIGJlZm9yZSBzeW5jaHJvbml6YXRpb24uIFRoZSB2YWx1ZXMgaW5jbHVkZTp0cnVlOiBtZWFucyBmdWxsIGRhdGEgaW5pdGlhbGl6YXRpb25cbiAgICAgKiBmYWxzZTogbm8gZnVsbCBkYXRhIGluaXRpYWxpemF0aW9uXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXM6IHRydWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhSW5pdGlhbGl6YXRpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0d29ya1R5cGU6IFdoZW4gc3luY2hyb25pemF0aW9uIGdlb2dyYXBoaWVzLCB0aGUgdHlwZSBvZiBkYXRhIHRyYW5zbWlzc2lvbiBuZXR3b3JrIHVzZWQuIFZhbHVlIGluY2x1ZGU6IEludGVybmV0LCBJbnRyYW5ldC4gVGhlIGRlZmF1bHQgdmFsdWUgaXM6IEludGVybmV0XG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXlUeXBlOiBQYXltZW50IHR5cGUsIHdoaWNoIGluY2x1ZGU6XG4gICAgICogUG9zdHBhaWQ6IHBvc3RwYWlkIHR5cGUsIFByZXBhaWQ6IFByZXBhaWQgdHlwZS4gRGVmYXVsdCBpcyBQb3N0cGFpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IElmIHByZXBhaWQgcGF5bWVudCB0eXBlLCB0aGVuIHRoZSBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0aGUgcHVyY2hhc2UgcGFja2FnZSBpbnN0YW5jZSBvciBpbnN0YW5jZXMgYXMgZXhhbXBsZXMgb2YgYSBtb250aGx5IHN1YnNjcmlwdGlvbiwgd2hpY2ggY2FuIGJlOlxuICAgICAqIFllYXI6IEFubnVhbCwgTW9udGg6IG1vbnRobHlcbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdHJ1Y3R1cmVJbml0aWFsaXphdGlvbjogV2hldGhlciB0byBpbml0aWFsaXplIHRoZSBzdHJ1Y3R1cmUgb2JqZWN0IGJlZm9yZSBzeW5jaHJvbml6YXRpb24uIFRoZSB2YWx1ZXMgaW5jbHVkZTp0cnVlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgc3RydWN0dXJlIG9iamVjdCBpcyBpbml0aWFsaXplZFxuICAgICAqIGZhbHNlOiBubyByZXN1bHQgb2JqZWN0IGluaXRpYWxpemF0aW9uXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXM6IHRydWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzdHJ1Y3R1cmVJbml0aWFsaXphdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeW5jaHJvbml6YXRpb25PYmplY3RzOiBPYmplY3RzIHRoYXQgbmVlZCB0byBiZSBzeW5jaHJvbml6ZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBzeW5jaHJvbml6YXRpb25PYmplY3RzPzogQXJyYXk8Um9zU3luY2hyb25pemF0aW9uSm9iLlN5bmNocm9uaXphdGlvbk9iamVjdHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0b3BvbG9neTogU3luY2hyb25vdXMgdG9wb2xvZ3ksIHRoZSB2YWx1ZSBpbmNsdWRlczogb25ld2F5LCBiaWRpcmVjdGlvbmFsLnRoZSBkZWZhdWx0IHZhbHVlIGlzOiBvbmV3YXksIG9ubHkgTXlTUUwtPiBNeVNRTCBzeW5jaHJvbml6YXRpb24sIHRoaXMgcGFyYW1ldGVyIGNhbiByZWNlaXZlIHRoZSB2YWx1ZSBiaWRpcmVjdGlvbmFsXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9wb2xvZ3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VkVGltZTogZiB0aGUgcGF5bWVudCB0eXBlIGlzIHByZXBhaWQsIHRoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgdGhlIGxlbmd0aCBvZiB0aGUgcHVyY2hhc2UsIGFuZCBwYXJhbWV0ZXJzIHN1Y2ggYXMgMSwgMiwgMyBjYW4gYmUgcGFzc2VkIGluIGFzIG5lZWRlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZWRUaW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpEVFM6OlN5bmNocm9uaXphdGlvbkpvYmBcbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmNocm9uaXphdGlvbkpvYiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3luY2hyb25pemF0aW9uSm9iSWQ6IFN5bmNocm9uaXphdGlvbiBpbnN0YW5jZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3luY2hyb25pemF0aW9uSm9iSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpEVFM6OlN5bmNocm9uaXphdGlvbkpvYmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU3luY2hyb25pemF0aW9uSm9iUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU3luY2hyb25pemF0aW9uSm9iID0gbmV3IFJvc1N5bmNocm9uaXphdGlvbkpvYih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHN5bmNocm9uaXphdGlvbk9iamVjdHM6IHByb3BzLnN5bmNocm9uaXphdGlvbk9iamVjdHMsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHBheVR5cGU6IHByb3BzLnBheVR5cGUgPyBwcm9wcy5wYXlUeXBlIDogJ1Bvc3RwYWlkJyxcbiAgICAgICAgICAgIHRvcG9sb2d5OiBwcm9wcy50b3BvbG9neSxcbiAgICAgICAgICAgIHNvdXJjZVJlZ2lvbjogcHJvcHMuc291cmNlUmVnaW9uLFxuICAgICAgICAgICAgZGF0YUluaXRpYWxpemF0aW9uOiBwcm9wcy5kYXRhSW5pdGlhbGl6YXRpb24gPyBwcm9wcy5kYXRhSW5pdGlhbGl6YXRpb24gOiB0cnVlLFxuICAgICAgICAgICAgZGVzdGluYXRpb25FbmRwb2ludDogcHJvcHMuZGVzdGluYXRpb25FbmRwb2ludCxcbiAgICAgICAgICAgIG5ldHdvcmtUeXBlOiBwcm9wcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIHNvdXJjZUVuZHBvaW50OiBwcm9wcy5zb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgIHVzZWRUaW1lOiBwcm9wcy51c2VkVGltZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZUluaXRpYWxpemF0aW9uOiBwcm9wcy5zdHJ1Y3R1cmVJbml0aWFsaXphdGlvbiA/IHByb3BzLnN0cnVjdHVyZUluaXRpYWxpemF0aW9uIDogdHJ1ZSxcbiAgICAgICAgICAgIHN5bmNocm9uaXphdGlvbkpvYkNsYXNzOiBwcm9wcy5zeW5jaHJvbml6YXRpb25Kb2JDbGFzcyxcbiAgICAgICAgICAgIGRlc3RSZWdpb246IHByb3BzLmRlc3RSZWdpb24sXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU3luY2hyb25pemF0aW9uSm9iO1xuICAgICAgICB0aGlzLmF0dHJTeW5jaHJvbml6YXRpb25Kb2JJZCA9IHJvc1N5bmNocm9uaXphdGlvbkpvYi5hdHRyU3luY2hyb25pemF0aW9uSm9iSWQ7XG4gICAgfVxufVxuIl19