package com.aliyun.ros.cdk.pai.datasource;

/**
 * Represents a <code>Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.073Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.IService")
@software.amazon.jsii.Jsii.Proxy(IService.Jsii$Proxy.class)
public interface IService extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccessToken: The request token of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken();

    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid();

    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute CreateTime: The time when the service was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion();

    /**
     * Attribute ExtraData: The additional information about the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData();

    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu();

    /**
     * Attribute Image: The data image of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage();

    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint();

    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint();

    /**
     * Attribute Labels: The tags of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersion();

    /**
     * Attribute Memory: The memory that you applied for each instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory();

    /**
     * Attribute Message: The summary of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage();

    /**
     * Attribute Namespace: The namespace of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace();

    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid();

    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance();

    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason();

    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource();

    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias();

    /**
     * Attribute Role: The role of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole();

    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs();

    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance();

    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock();

    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig();

    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup();

    /**
     * Attribute ServiceName: The name of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName();

    /**
     * Attribute ServiceUid: The ID of the service.
     * <p>
     * The value of this property is the same as the value of ServiceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid();

    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance();

    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.datasource.IService.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccessToken: The request token of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallerUid: The user ID of the account that is used to create the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
            return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The CPU that you applied for each instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the service was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: The current version of the model.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraData: The additional information about the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Gpu: The GPU that you applied for each instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: The data image of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEndpoint: The public endpoint of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The private endpoint of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: The tags of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestVersion: The latest version of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: The memory that you applied for each instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Message: The summary of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PendingInstance: The number of instances for the suspended service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Reason: The reason why the service is in the current state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resource: The resource group to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
            return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: The role of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleAttrs: The additional attributes of the service role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningInstance: The number of instances for the running service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SafetyLock: The security lock of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
            return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConfig: The configurations of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceGroup: The group to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The name of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceUid: The ID of the service.
         * <p>
         * The value of this property is the same as the value of ServiceId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalInstance: The total number of instances of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the service was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Weight: The weight of the canary release for the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
            return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.datasource.ServiceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IService}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IService, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccessToken: The request token of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallerUid: The user ID of the account that is used to create the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
            return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The CPU that you applied for each instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the service was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: The current version of the model.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraData: The additional information about the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Gpu: The GPU that you applied for each instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: The data image of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEndpoint: The public endpoint of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The private endpoint of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: The tags of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestVersion: The latest version of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: The memory that you applied for each instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Message: The summary of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PendingInstance: The number of instances for the suspended service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Reason: The reason why the service is in the current state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resource: The resource group to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
            return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: The role of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleAttrs: The additional attributes of the service role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningInstance: The number of instances for the running service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SafetyLock: The security lock of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
            return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConfig: The configurations of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceGroup: The group to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The name of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceUid: The ID of the service.
         * <p>
         * The value of this property is the same as the value of ServiceId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalInstance: The total number of instances of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the service was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Weight: The weight of the canary release for the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
            return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.datasource.ServiceProps.class));
        }
    }
}
