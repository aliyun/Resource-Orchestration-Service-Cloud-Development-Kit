package com.aliyun.ros.cdk.computenest.datasource;

/**
 * Represents a <code>ServiceInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.datasource.IServiceInstance")
@software.amazon.jsii.Jsii.Proxy(IServiceInstance.Jsii$Proxy.class)
public interface IServiceInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Components: Cloud Marketplace additional billing items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents();

    /**
     * Attribute CreateTime: The time when the serviceInstance was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps();

    /**
     * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus();

    /**
     * Attribute IsOperated: Indicates whether the hosted O&amp;M feature is enabled for the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated();

    /**
     * Attribute LicenseEndTime: The expiration time of licence.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime();

    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMarketInstanceId();

    /**
     * Attribute NetworkConfig: The network configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig();

    /**
     * Attribute Outputs: The outputs returned from creating the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs();

    /**
     * Attribute Parameters: The parameters configured for the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters();

    /**
     * Attribute PredefinedParameterName: The name of the package .
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName();

    /**
     * Attribute Progress: The deployment progress of the service instance.
     * <p>
     * Unit: percentage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress();

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Service: The information about the service to which the service instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrService();

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceId();

    /**
     * Attribute ServiceInstanceName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceName();

    /**
     * Attribute ServiceType: The type of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceType();

    /**
     * Attribute Source: The source of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource();

    /**
     * Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail();

    /**
     * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid();

    /**
     * Attribute Tags: The tags of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TemplateName: The name of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName();

    /**
     * Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute UserId: The AliUid of the user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.computenest.datasource.IServiceInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Components: Cloud Marketplace additional billing items.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
            return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the serviceInstance was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsOperated: Indicates whether the hosted O&amp;M feature is enabled for the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
            return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LicenseEndTime: The expiration time of licence.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMarketInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMarketInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkConfig: The network configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: The outputs returned from creating the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The parameters configured for the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredefinedParameterName: The name of the package .
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The deployment progress of the service instance.
         * <p>
         * Unit: percentage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Service: The information about the service to which the service instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrService() {
            return software.amazon.jsii.Kernel.get(this, "attrService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceInstanceId: The ID of the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceInstanceName: The name of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceType: The type of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceType() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Source: The source of the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
            return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusDetail: The description of the deployment state of the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
            return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: The name of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the serviceInstance was last updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The AliUid of the user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IServiceInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IServiceInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Components: Cloud Marketplace additional billing items.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
            return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the serviceInstance was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsOperated: Indicates whether the hosted O&amp;M feature is enabled for the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
            return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LicenseEndTime: The expiration time of licence.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMarketInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMarketInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkConfig: The network configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: The outputs returned from creating the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The parameters configured for the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredefinedParameterName: The name of the package .
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The deployment progress of the service instance.
         * <p>
         * Unit: percentage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Service: The information about the service to which the service instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrService() {
            return software.amazon.jsii.Kernel.get(this, "attrService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceInstanceId: The ID of the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceInstanceName: The name of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceType: The type of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceType() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Source: The source of the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
            return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusDetail: The description of the deployment state of the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
            return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: The name of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the serviceInstance was last updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The AliUid of the user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps.class));
        }
    }
}
