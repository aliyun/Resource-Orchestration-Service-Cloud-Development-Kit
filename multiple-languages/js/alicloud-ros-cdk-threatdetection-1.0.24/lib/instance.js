"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const threatdetection_generated_1 = require("./threatdetection.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return threatdetection_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::Instance`, which is used to purchase Security Center (SAS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
class Instance extends ros.Resource {
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
        const rosInstance = new threatdetection_generated_1.RosInstance(this, id, {
            threatAnalysis: props.threatAnalysis,
            sasSlsStorage: props.sasSlsStorage,
            containerImageScan: props.containerImageScan,
            threatAnalysisSwitch: props.threatAnalysisSwitch,
            vCore: props.vCore,
            renewPeriod: props.renewPeriod,
            sasSc: props.sasSc,
            sasCspmSwitch: props.sasCspmSwitch,
            buyNumber: props.buyNumber,
            sasWebguardBoolean: props.sasWebguardBoolean,
            honeypotSwitch: props.honeypotSwitch,
            paymentType: props.paymentType,
            sasSdk: props.sasSdk,
            sasAntiRansomware: props.sasAntiRansomware,
            sasWebguardOrderNum: props.sasWebguardOrderNum,
            renewalStatus: props.renewalStatus,
            productType: props.productType,
            vulSwitch: props.vulSwitch,
            period: props.period,
            raspCount: props.raspCount,
            vulCount: props.vulCount,
            versionCode: props.versionCode,
            modifyType: props.modifyType,
            sasCspm: props.sasCspm,
            sasSdkSwitch: props.sasSdkSwitch,
            renewalPeriodUnit: props.renewalPeriodUnit,
            containerImageScanNew: props.containerImageScanNew,
            honeypot: props.honeypot,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrBuyNumber = rosInstance.attrBuyNumber;
        this.attrContainerImageScan = rosInstance.attrContainerImageScan;
        this.attrContainerImageScanNew = rosInstance.attrContainerImageScanNew;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrHoneypot = rosInstance.attrHoneypot;
        this.attrHoneypotSwitch = rosInstance.attrHoneypotSwitch;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrRaspCount = rosInstance.attrRaspCount;
        this.attrRenewPeriod = rosInstance.attrRenewPeriod;
        this.attrRenewalPeriodUnit = rosInstance.attrRenewalPeriodUnit;
        this.attrRenewalStatus = rosInstance.attrRenewalStatus;
        this.attrSasAntiRansomware = rosInstance.attrSasAntiRansomware;
        this.attrSasCspm = rosInstance.attrSasCspm;
        this.attrSasCspmSwitch = rosInstance.attrSasCspmSwitch;
        this.attrSasSc = rosInstance.attrSasSc;
        this.attrSasSdk = rosInstance.attrSasSdk;
        this.attrSasSdkSwitch = rosInstance.attrSasSdkSwitch;
        this.attrSasSlsStorage = rosInstance.attrSasSlsStorage;
        this.attrSasWebguardBoolean = rosInstance.attrSasWebguardBoolean;
        this.attrSasWebguardOrderNum = rosInstance.attrSasWebguardOrderNum;
        this.attrThreatAnalysis = rosInstance.attrThreatAnalysis;
        this.attrThreatAnalysisSwitch = rosInstance.attrThreatAnalysisSwitch;
        this.attrVCore = rosInstance.attrVCore;
        this.attrVersionCode = rosInstance.attrVersionCode;
        this.attrVulCount = rosInstance.attrVulCount;
        this.attrVulSwitch = rosInstance.attrVulSwitch;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkVBQTBEO0FBRWxDLGlHQUZmLHVDQUFXLE9BRW9CO0FBNEx4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUE2SXRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLHVDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZ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QUFlLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUFwTkQsNEJBb05DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL3RocmVhdGRldGVjdGlvbi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZSBhcyBJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdGhyZWF0ZGV0ZWN0aW9uLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXltZW50VHlwZTogVGhlIHBheW1lbnQgdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5bWVudFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZlcnNpb25Db2RlOiBTZWxlY3QgdGhlIHNlY3VyaXR5IGNlbnRlciB2ZXJzaW9uLiBWYWx1ZTpcbiAgICAgKiAtIGxldmVsNzogQW50aXZpcnVzIEVkaXRpb24uXG4gICAgICogLSBsZXZlbDM6IFByZW1pdW0gdmVyc2lvbi5cbiAgICAgKiAtIGxldmVsMjogRW50ZXJwcmlzZSBFZGl0aW9uLlxuICAgICAqIC0gbGV2ZWw4OiBVbHRpbWF0ZS5cbiAgICAgKiAtIGxldmVsMTA6IFB1cmNoYXNlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG9ubHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbkNvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJ1eU51bWJlcjogTnVtYmVyIG9mIHNlcnZlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnV5TnVtYmVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFpbmVySW1hZ2VTY2FuOiBDb250YWluZXIgSW1hZ2Ugc2VjdXJpdHkgc2Nhbi4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzAsMjAwMDAwXS5cbiAgICAgKiA+IFRoZSBzdGVwIHNpemUgaXMgMjAsIHRoYXQgaXMsIG9ubHkgbXVsdGlwbGVzIG9mIDIwIGNhbiBiZSBmaWxsZWQgaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVySW1hZ2VTY2FuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFpbmVySW1hZ2VTY2FuTmV3OiBDb250YWluZXIgSW1hZ2Ugc2VjdXJpdHkgc2Nhbi4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzAsMjAwMDAwXS5cbiAgICAgKiA+IFRoZSBzdGVwIHNpemUgaXMgMjAsIHRoYXQgaXMsIG9ubHkgbXVsdGlwbGVzIG9mIDIwIGNhbiBiZSBmaWxsZWQgaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVySW1hZ2VTY2FuTmV3Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9uZXlwb3Q6IE51bWJlciBvZiBjbG91ZCBob25leXBvdCBsaWNlbnNlcy4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzIwLDUwMF0uXG4gICAgICogPiBUaGlzIG1vZHVsZSBjYW4gb25seSBiZSBwdXJjaGFzZWQgd2hlbiBob25leXBvdF9zd2l0Y2ggPSAxLCBzdGFydGluZyB3aXRoIDIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvbmV5cG90Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9uZXlwb3RTd2l0Y2g6IENsb3VkIGhvbmV5cG90LiBWYWx1ZTpcbiAgICAgKiAtIDE6IFllcy5cbiAgICAgKiAtIDI6IE5vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvbmV5cG90U3dpdGNoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW9kaWZ5VHlwZTogQ2hhbmdlIGNvbmZpZ3VyYXRpb24gdHlwZSwgdmFsdWVcbiAgICAgKiAtIFVwZ3JhZGU6IFVwZ3JhZGUuXG4gICAgICogLSBEb3duZ3JhZGU6IERvd25ncmFkZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RpZnlUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIGN5Y2xlLiBUaGUgdW5pdCBpcyBNb250aGx5LCBwbGVhc2UgZW50ZXIgYW4gaW50ZWdlciBtdWx0aXBsZSBvZiAxMiBmb3IgYW5udWFsIHBhaWQgcHJvZHVjdHMuXG4gICAgICogPiBtdXN0IGJlIHNldCB3aGVuIGNyZWF0aW5nIGEgcHJlcGFpZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9kdWN0VHlwZTogUHJvZHVjdCB0eXBlLCBvbmx5IENoaW5hIHN0YXRpb24gbmVlZHMgdG8gYmUgc2V0IHRvIHNhcywgaW50ZXJuYXRpb25hbCBzdGF0aW9uIGRvZXMgbm90IG5lZWQgdG8gc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2R1Y3RUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmFzcENvdW50OiBOdW1iZXIgb2YgYXBwbGljYXRpb24gcHJvdGVjdGlvbiBsaWNlbnNlcy4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzEsMTAwMDAwMDAwXS5cbiAgICAgKi9cbiAgICByZWFkb25seSByYXNwQ291bnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZW5ld2FsUGVyaW9kVW5pdDogQXV0b21hdGljIHJlbmV3YWwgcGVyaW9kIHVuaXQsIHZhbHVlOlxuICAgICAqIC0gTTogbW9udGguXG4gICAgICogLSBZOiB5ZWFycy5cbiAgICAgKiA+IE11c3QgYmUgc2V0IHdoZW4gUmVuZXdhbFN0YXR1cyA9IEF1dG9SZW5ld2FsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbmV3YWxQZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVuZXdhbFN0YXR1czogQXV0b21hdGljIHJlbmV3YWwgc3RhdHVzLCB2YWx1ZTpcbiAgICAgKiAtIEF1dG9SZW5ld2FsOiBhdXRvbWF0aWMgcmVuZXdhbC5cbiAgICAgKiAtIE1hbnVhbFJlbmV3YWw6IG1hbnVhbCByZW5ld2FsLlxuICAgICAqIERlZmF1bHQgTWFudWFsUmVuZXdhbC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW5ld2FsU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVuZXdQZXJpb2Q6IEF1dG9tYXRpYyByZW5ld2FsIGN5Y2xlLCBpbiBtb250aHMuXG4gICAgICogPiBXaGVuICoqUmVuZXdhbFN0YXR1cyoqIGlzIHNldCB0byAqKkF1dG9SZW5ld2FsKiosIGl0IG11c3QgYmUgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2FzQW50aVJhbnNvbXdhcmU6IEFudGktcmFuc29td2FyZSBjYXBhY2l0eS4gVW5pdDogR0IuIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlswLDk5OTk5OTk5OTldLlxuICAgICAqID4gVGhlIHN0ZXAgc2l6ZSBpcyAxMCwgdGhhdCBpcywgb25seSBtdWx0aXBsZXMgb2YgMTAgY2FuIGJlIGZpbGxlZCBpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNBbnRpUmFuc29td2FyZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNhc0NzcG06IENsb3VkIHBsYXRmb3JtIGNvbmZpZ3VyYXRpb24gY2hlY2sgc2NhbiB0aW1lcywgaW50ZXJ2YWwgdHlwZSwgdmFsdWUgcmFuZ2U6WzEwMDAsOTk5OTk5OTk5OV0uXG4gICAgICogPiBZb3UgbXVzdCBoYXZlIHNhc19jc3BtX3N3aXRjaCA9IDEgdG8gcHVyY2hhc2UgdGhpcyBtb2R1bGUuIFRoZSBzdGVwIHNpemUgaXMgMTAwLCB0aGF0IGlzLCBvbmx5IG11bHRpcGxlcyBvZiAxMCBjYW4gYmUgZmlsbGVkIGluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNhc0NzcG0/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzYXNDc3BtU3dpdGNoOiBDbG91ZCBwbGF0Zm9ybSBjb25maWd1cmF0aW9uIGNoZWNrIHN3aXRjaC4gVmFsdWU6XG4gICAgICogLSAwOiBOby5cbiAgICAgKiAtIDE6IFllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNDc3BtU3dpdGNoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2FzU2M6IFNlY3VyaXR5IHNjcmVlbi4gVmFsdWU6XG4gICAgICogLSB0cnVlOiBZZXMuXG4gICAgICogLSBmYWxzZTogTm8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2FzU2M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzYXNTZGs6IE51bWJlciBvZiBtYWxpY2lvdXMgZmlsZSBkZXRlY3Rpb25zLiBVbml0OiAxMCwwMDAgdGltZXMuIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlsxMCw5OTk5OTk5OTk5XS5cbiAgICAgKiA+IFRoaXMgbW9kdWxlIGNhbiBvbmx5IGJlIHB1cmNoYXNlZCB3aGVuIHNhc19zZGtfc3dpdGNoID0gMS4gVGhlIHN0ZXAgc2l6ZSBpcyAxMCwgdGhhdCBpcywgb25seSBtdWx0aXBsZXMgb2YgMTAgY2FuIGJlIGZpbGxlZCBpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNTZGs/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzYXNTZGtTd2l0Y2g6IE1hbGljaW91cyBmaWxlIGRldGVjdGlvbiBTREsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2FzU2RrU3dpdGNoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2FzU2xzU3RvcmFnZTogTG9nIGFuYWx5c2lzIHN0b3JhZ2UgY2FwYWNpdHkuIFVuaXQ6IEdCLiBJbnRlcnZhbCB0eXBlLCB2YWx1ZSBpbnRlcnZhbDpbMCw2MDAwMDBdLlxuICAgICAqID4gVGhlIHN0ZXAgc2l6ZSBpcyAxMCwgdGhhdCBpcywgb25seSBtdWx0aXBsZXMgb2YgMTAgY2FuIGJlIGZpbGxlZCBpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNTbHNTdG9yYWdlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2FzV2ViZ3VhcmRCb29sZWFuOiBXZWIgdGFtcGVyLXByb29mIHN3aXRjaC4gVmFsdWU6XG4gICAgICogLSAwOiBOby5cbiAgICAgKiAtIDE6IFllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNXZWJndWFyZEJvb2xlYW4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzYXNXZWJndWFyZE9yZGVyTnVtOiBUYW1wZXItcHJvb2YgYXV0aG9yaXphdGlvbiBudW1iZXIuIFZhbHVlOlxuICAgICAqIC0gMDogTm9cbiAgICAgKiAtIDE6IFllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYXNXZWJndWFyZE9yZGVyTnVtPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGhyZWF0QW5hbHlzaXM6IFRocmVhdCBBbmFseXNpcyBsb2cgc3RvcmFnZSBjYXBhY2l0eS4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzAsOTk5OTk5OTk5OV0uXG4gICAgICogPiBUaGlzIG1vZHVsZSBjYW4gb25seSBiZSBwdXJjaGFzZWQgd2hlbiBUaHJlYXRfYW5hbHlzaXNfc3dpdGNoID0gMS4gVGhlIHN0ZXAgc2l6ZSBpcyAxMCwgdGhhdCBpcywgb25seSBtdWx0aXBsZXMgb2YgMTAgY2FuIGJlIGZpbGxlZCBpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aHJlYXRBbmFseXNpcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRocmVhdEFuYWx5c2lzU3dpdGNoOiBUaHJlYXQgYW5hbHlzaXMuIFZhbHVlOlxuICAgICAqIC0gMDogTm8uXG4gICAgICogLSAxOiBZZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGhyZWF0QW5hbHlzaXNTd2l0Y2g/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2Q29yZTogTnVtYmVyIG9mIGNvcmVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZDb3JlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnVsQ291bnQ6IFZ1bG5lcmFiaWxpdHkgcmVwYWlyIHRpbWVzLCBpbnRlcnZhbCB0eXBlLCB2YWx1ZSByYW5nZTpbMjAsMTAwMDAwMDAwXS5cbiAgICAgKiA+IFRoaXMgbW9kdWxlIGNhbiBvbmx5IGJlIHB1cmNoYXNlZCB3aGVuIHZ1bF9zd2l0Y2ggPSAxLiBPbmx5IHdoZW4gdGhlIHZlcnNpb25fY29kZSB2YWx1ZSBpcyBsZXZlbDcgb3IgbGV2ZWwxMC4gb3RoZXIgdmVyc2lvbnMgZG8gbm90IG5lZWQgdG8gYmUgcHVyY2hhc2VkIHNlcGFyYXRlbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnVsQ291bnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2dWxTd2l0Y2g6IFZ1bG5lcmFiaWxpdHkgZml4IHN3aXRjaC4gVmFsdWU6XG4gICAgICogLSAwOiBOby5cbiAgICAgKiAtIDE6IFllcy5cbiAgICAgKiA+IFdoZW4gdGhlIHZhbHVlIG9mIHZlcnNpb25fY29kZSBpcyBsZXZlbDcgb3IgbGV2ZWwxMCwgdGhlIHB1cmNoYXNlIGlzIGFsbG93ZWQuIE90aGVyIHZlcnNpb25zIGRvIG5vdCBuZWVkIHRvIGJlIHB1cmNoYXNlZCBzZXBhcmF0ZWx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZ1bFN3aXRjaD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6VGhyZWF0RGV0ZWN0aW9uOjpJbnN0YW5jZWAsIHdoaWNoIGlzIHVzZWQgdG8gcHVyY2hhc2UgU2VjdXJpdHkgQ2VudGVyIChTQVMpLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zSW5zdGFuY2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi10aHJlYXRkZXRlY3Rpb24taW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBCdXlOdW1iZXI6IE51bWJlciBvZiBzZXJ2ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQnV5TnVtYmVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29udGFpbmVySW1hZ2VTY2FuOiBDb250YWluZXIgSW1hZ2Ugc2VjdXJpdHkgc2Nhbi4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzAsMjAwMDAwXS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbnRhaW5lckltYWdlU2Nhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbnRhaW5lckltYWdlU2Nhbk5ldzogQ29udGFpbmVyIEltYWdlIHNlY3VyaXR5IHNjYW4uIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlswLDIwMDAwMF0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250YWluZXJJbWFnZVNjYW5OZXc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9uZXlwb3Q6IE51bWJlciBvZiBjbG91ZCBob25leXBvdCBsaWNlbnNlcy4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzIwLDUwMF0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb25leXBvdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvbmV5cG90U3dpdGNoOiBDbG91ZCBob25leXBvdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvbmV5cG90U3dpdGNoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIGZpcnN0IElEIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXltZW50VHlwZTogVGhlIHBheW1lbnQgdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXltZW50VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJhc3BDb3VudDogTnVtYmVyIG9mIGFwcGxpY2F0aW9uIHByb3RlY3Rpb24gbGljZW5zZXMuIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlsxLDEwMDAwMDAwMF0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSYXNwQ291bnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZW5ld1BlcmlvZDogQXV0b21hdGljIHJlbmV3YWwgY3ljbGUsIGluIG1vbnRocy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlbmV3UGVyaW9kOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVuZXdhbFBlcmlvZFVuaXQ6IEF1dG9tYXRpYyByZW5ld2FsIHBlcmlvZCB1bml0LCB2YWx1ZTouXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZW5ld2FsUGVyaW9kVW5pdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlbmV3YWxTdGF0dXM6IEF1dG9tYXRpYyByZW5ld2FsIHN0YXR1cywgdmFsdWU6LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVuZXdhbFN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNhc0FudGlSYW5zb213YXJlOiBBbnRpLXJhbnNvbXdhcmUgY2FwYWNpdHkuIFVuaXQ6IEdCLiBJbnRlcnZhbCB0eXBlLCB2YWx1ZSBpbnRlcnZhbDpbMCw5OTk5OTk5OTk5XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc0FudGlSYW5zb213YXJlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2FzQ3NwbTogQ2xvdWQgcGxhdGZvcm0gY29uZmlndXJhdGlvbiBjaGVjayBzY2FuIHRpbWVzLCBpbnRlcnZhbCB0eXBlLCB2YWx1ZSByYW5nZTpbMTAwMCw5OTk5OTk5OTk5XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc0NzcG06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTYXNDc3BtU3dpdGNoOiBDbG91ZCBwbGF0Zm9ybSBjb25maWd1cmF0aW9uIGNoZWNrIHN3aXRjaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc0NzcG1Td2l0Y2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTYXNTYzogU2VjdXJpdHkgc2NyZWVuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2FzU2M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTYXNTZGs6IE51bWJlciBvZiBtYWxpY2lvdXMgZmlsZSBkZXRlY3Rpb25zLiBVbml0OiAxMCwwMDAgdGltZXMuIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlsxMCw5OTk5OTk5OTk5XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc1Nkazogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNhc1Nka1N3aXRjaDogTWFsaWNpb3VzIGZpbGUgZGV0ZWN0aW9uIFNESy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc1Nka1N3aXRjaDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNhc1Nsc1N0b3JhZ2U6IExvZyBhbmFseXNpcyBzdG9yYWdlIGNhcGFjaXR5LiBVbml0OiBHQi4gSW50ZXJ2YWwgdHlwZSwgdmFsdWUgaW50ZXJ2YWw6WzAsNjAwMDAwXS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhc1Nsc1N0b3JhZ2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTYXNXZWJndWFyZEJvb2xlYW46IFdlYiB0YW1wZXItcHJvb2Ygc3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2FzV2ViZ3VhcmRCb29sZWFuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2FzV2ViZ3VhcmRPcmRlck51bTogVGFtcGVyLXByb29mIGF1dGhvcml6YXRpb24gbnVtYmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2FzV2ViZ3VhcmRPcmRlck51bTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRocmVhdEFuYWx5c2lzOiBUaHJlYXQgQW5hbHlzaXMgbG9nIHN0b3JhZ2UgY2FwYWNpdHkuIEludGVydmFsIHR5cGUsIHZhbHVlIGludGVydmFsOlswLDk5OTk5OTk5OTldLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGhyZWF0QW5hbHlzaXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUaHJlYXRBbmFseXNpc1N3aXRjaDogVGhyZWF0IGFuYWx5c2lzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGhyZWF0QW5hbHlzaXNTd2l0Y2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWQ29yZTogTnVtYmVyIG9mIGNvcmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVkNvcmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWZXJzaW9uQ29kZTogU2VsZWN0IHRoZSBzZWN1cml0eSBjZW50ZXIgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZlcnNpb25Db2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnVsQ291bnQ6IFZ1bG5lcmFiaWxpdHkgcmVwYWlyIHRpbWVzLCBpbnRlcnZhbCB0eXBlLCB2YWx1ZSByYW5nZTpbMjAsMTAwMDAwMDAwXS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZ1bENvdW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnVsU3dpdGNoOiBWdWxuZXJhYmlsaXR5IGZpeCBzd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWdWxTd2l0Y2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICB0aHJlYXRBbmFseXNpczogcHJvcHMudGhyZWF0QW5hbHlzaXMsXG4gICAgICAgICAgICBzYXNTbHNTdG9yYWdlOiBwcm9wcy5zYXNTbHNTdG9yYWdlLFxuICAgICAgICAgICAgY29udGFpbmVySW1hZ2VTY2FuOiBwcm9wcy5jb250YWluZXJJbWFnZVNjYW4sXG4gICAgICAgICAgICB0aHJlYXRBbmFseXNpc1N3aXRjaDogcHJvcHMudGhyZWF0QW5hbHlzaXNTd2l0Y2gsXG4gICAgICAgICAgICB2Q29yZTogcHJvcHMudkNvcmUsXG4gICAgICAgICAgICByZW5ld1BlcmlvZDogcHJvcHMucmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBzYXNTYzogcHJvcHMuc2FzU2MsXG4gICAgICAgICAgICBzYXNDc3BtU3dpdGNoOiBwcm9wcy5zYXNDc3BtU3dpdGNoLFxuICAgICAgICAgICAgYnV5TnVtYmVyOiBwcm9wcy5idXlOdW1iZXIsXG4gICAgICAgICAgICBzYXNXZWJndWFyZEJvb2xlYW46IHByb3BzLnNhc1dlYmd1YXJkQm9vbGVhbixcbiAgICAgICAgICAgIGhvbmV5cG90U3dpdGNoOiBwcm9wcy5ob25leXBvdFN3aXRjaCxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlOiBwcm9wcy5wYXltZW50VHlwZSxcbiAgICAgICAgICAgIHNhc1NkazogcHJvcHMuc2FzU2RrLFxuICAgICAgICAgICAgc2FzQW50aVJhbnNvbXdhcmU6IHByb3BzLnNhc0FudGlSYW5zb213YXJlLFxuICAgICAgICAgICAgc2FzV2ViZ3VhcmRPcmRlck51bTogcHJvcHMuc2FzV2ViZ3VhcmRPcmRlck51bSxcbiAgICAgICAgICAgIHJlbmV3YWxTdGF0dXM6IHByb3BzLnJlbmV3YWxTdGF0dXMsXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogcHJvcHMucHJvZHVjdFR5cGUsXG4gICAgICAgICAgICB2dWxTd2l0Y2g6IHByb3BzLnZ1bFN3aXRjaCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgcmFzcENvdW50OiBwcm9wcy5yYXNwQ291bnQsXG4gICAgICAgICAgICB2dWxDb3VudDogcHJvcHMudnVsQ291bnQsXG4gICAgICAgICAgICB2ZXJzaW9uQ29kZTogcHJvcHMudmVyc2lvbkNvZGUsXG4gICAgICAgICAgICBtb2RpZnlUeXBlOiBwcm9wcy5tb2RpZnlUeXBlLFxuICAgICAgICAgICAgc2FzQ3NwbTogcHJvcHMuc2FzQ3NwbSxcbiAgICAgICAgICAgIHNhc1Nka1N3aXRjaDogcHJvcHMuc2FzU2RrU3dpdGNoLFxuICAgICAgICAgICAgcmVuZXdhbFBlcmlvZFVuaXQ6IHByb3BzLnJlbmV3YWxQZXJpb2RVbml0LFxuICAgICAgICAgICAgY29udGFpbmVySW1hZ2VTY2FuTmV3OiBwcm9wcy5jb250YWluZXJJbWFnZVNjYW5OZXcsXG4gICAgICAgICAgICBob25leXBvdDogcHJvcHMuaG9uZXlwb3QsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckJ1eU51bWJlciA9IHJvc0luc3RhbmNlLmF0dHJCdXlOdW1iZXI7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhaW5lckltYWdlU2NhbiA9IHJvc0luc3RhbmNlLmF0dHJDb250YWluZXJJbWFnZVNjYW47XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhaW5lckltYWdlU2Nhbk5ldyA9IHJvc0luc3RhbmNlLmF0dHJDb250YWluZXJJbWFnZVNjYW5OZXc7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSByb3NJbnN0YW5jZS5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRySG9uZXlwb3QgPSByb3NJbnN0YW5jZS5hdHRySG9uZXlwb3Q7XG4gICAgICAgIHRoaXMuYXR0ckhvbmV5cG90U3dpdGNoID0gcm9zSW5zdGFuY2UuYXR0ckhvbmV5cG90U3dpdGNoO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zSW5zdGFuY2UuYXR0clBheW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJSYXNwQ291bnQgPSByb3NJbnN0YW5jZS5hdHRyUmFzcENvdW50O1xuICAgICAgICB0aGlzLmF0dHJSZW5ld1BlcmlvZCA9IHJvc0luc3RhbmNlLmF0dHJSZW5ld1BlcmlvZDtcbiAgICAgICAgdGhpcy5hdHRyUmVuZXdhbFBlcmlvZFVuaXQgPSByb3NJbnN0YW5jZS5hdHRyUmVuZXdhbFBlcmlvZFVuaXQ7XG4gICAgICAgIHRoaXMuYXR0clJlbmV3YWxTdGF0dXMgPSByb3NJbnN0YW5jZS5hdHRyUmVuZXdhbFN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRyU2FzQW50aVJhbnNvbXdhcmUgPSByb3NJbnN0YW5jZS5hdHRyU2FzQW50aVJhbnNvbXdhcmU7XG4gICAgICAgIHRoaXMuYXR0clNhc0NzcG0gPSByb3NJbnN0YW5jZS5hdHRyU2FzQ3NwbTtcbiAgICAgICAgdGhpcy5hdHRyU2FzQ3NwbVN3aXRjaCA9IHJvc0luc3RhbmNlLmF0dHJTYXNDc3BtU3dpdGNoO1xuICAgICAgICB0aGlzLmF0dHJTYXNTYyA9IHJvc0luc3RhbmNlLmF0dHJTYXNTYztcbiAgICAgICAgdGhpcy5hdHRyU2FzU2RrID0gcm9zSW5zdGFuY2UuYXR0clNhc1NkaztcbiAgICAgICAgdGhpcy5hdHRyU2FzU2RrU3dpdGNoID0gcm9zSW5zdGFuY2UuYXR0clNhc1Nka1N3aXRjaDtcbiAgICAgICAgdGhpcy5hdHRyU2FzU2xzU3RvcmFnZSA9IHJvc0luc3RhbmNlLmF0dHJTYXNTbHNTdG9yYWdlO1xuICAgICAgICB0aGlzLmF0dHJTYXNXZWJndWFyZEJvb2xlYW4gPSByb3NJbnN0YW5jZS5hdHRyU2FzV2ViZ3VhcmRCb29sZWFuO1xuICAgICAgICB0aGlzLmF0dHJTYXNXZWJndWFyZE9yZGVyTnVtID0gcm9zSW5zdGFuY2UuYXR0clNhc1dlYmd1YXJkT3JkZXJOdW07XG4gICAgICAgIHRoaXMuYXR0clRocmVhdEFuYWx5c2lzID0gcm9zSW5zdGFuY2UuYXR0clRocmVhdEFuYWx5c2lzO1xuICAgICAgICB0aGlzLmF0dHJUaHJlYXRBbmFseXNpc1N3aXRjaCA9IHJvc0luc3RhbmNlLmF0dHJUaHJlYXRBbmFseXNpc1N3aXRjaDtcbiAgICAgICAgdGhpcy5hdHRyVkNvcmUgPSByb3NJbnN0YW5jZS5hdHRyVkNvcmU7XG4gICAgICAgIHRoaXMuYXR0clZlcnNpb25Db2RlID0gcm9zSW5zdGFuY2UuYXR0clZlcnNpb25Db2RlO1xuICAgICAgICB0aGlzLmF0dHJWdWxDb3VudCA9IHJvc0luc3RhbmNlLmF0dHJWdWxDb3VudDtcbiAgICAgICAgdGhpcy5hdHRyVnVsU3dpdGNoID0gcm9zSW5zdGFuY2UuYXR0clZ1bFN3aXRjaDtcbiAgICB9XG59XG4iXX0=