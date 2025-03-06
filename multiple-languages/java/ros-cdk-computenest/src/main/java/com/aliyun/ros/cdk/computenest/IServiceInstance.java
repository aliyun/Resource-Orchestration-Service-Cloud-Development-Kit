package com.aliyun.ros.cdk.computenest;

/**
 * Represents a <code>ServiceInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.171Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.IServiceInstance")
@software.amazon.jsii.Jsii.Proxy(IServiceInstance.Jsii$Proxy.class)
public interface IServiceInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Components: Additional billing items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps();

    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus();

    /**
     * Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated();

    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime();

    /**
     * Attribute Name: The name of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig();

    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs();

    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters();

    /**
     * Attribute PredefinedParameterName: Package name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName();

    /**
     * Attribute Progress: The deployment progress of the service instance.
     * <p>
     * Unit:%.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Service: Service details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrService();

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceId();

    /**
     * Attribute ServiceType: Service type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceType();

    /**
     * Attribute Source: The source of the service instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource();

    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail();

    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid();

    /**
     * Attribute Tags: User-defined labels.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TemplateName: Template name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName();

    /**
     * Attribute UpdateTime: Update time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute UserId: AliUid of the user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.computenest.IServiceInstance.Jsii$Default {
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
         * Attribute Components: Additional billing items.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
            return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
            return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LicenseEndTime: License expiration time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkConfig: Network configuration information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: Create the output Field returned by the service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The parameters entered by the deployment service instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredefinedParameterName: Package name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The deployment progress of the service instance.
         * <p>
         * Unit:%.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Service: Service details.
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
         * Attribute ServiceType: Service type.
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
         * Attribute StatusDetail: The status description of the deployment instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupplierUid: Service provider AliUid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
            return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: User-defined labels.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: Template name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: AliUid of the user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.ServiceInstanceProps.class));
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
         * Attribute Components: Additional billing items.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
            return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
            return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LicenseEndTime: License expiration time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkConfig: Network configuration information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: Create the output Field returned by the service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The parameters entered by the deployment service instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredefinedParameterName: Package name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The deployment progress of the service instance.
         * <p>
         * Unit:%.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Service: Service details.
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
         * Attribute ServiceType: Service type.
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
         * Attribute StatusDetail: The status description of the deployment instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupplierUid: Service provider AliUid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
            return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: User-defined labels.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: Template name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: AliUid of the user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.ServiceInstanceProps.class));
        }
    }
}
