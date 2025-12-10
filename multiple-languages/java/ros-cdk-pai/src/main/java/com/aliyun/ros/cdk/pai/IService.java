package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.726Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IService")
@software.amazon.jsii.Jsii.Proxy(IService.Jsii$Proxy.class)
public interface IService extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccessToken: Service Request authentication token.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken();

    /**
     * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid();

    /**
     * Attribute Cpu: Number of service CPU cores.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute CreateTime: Creation time of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CurrentVersion: Current running version of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion();

    /**
     * Attribute ExtraData: Service Extra Information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData();

    /**
     * Attribute Gpu: Number of service GPU cards.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu();

    /**
     * Attribute Image: Service Deployment Mirroring.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage();

    /**
     * Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint();

    /**
     * Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint();

    /**
     * Attribute Labels: Service Tag.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersion();

    /**
     * Attribute Memory: Memory of service (MB).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory();

    /**
     * Attribute Message: Latest information on services.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage();

    /**
     * Attribute Namespace: The namespace to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace();

    /**
     * Attribute ParentUid: Primary account ID of the creator.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid();

    /**
     * Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance();

    /**
     * Attribute Reason: Service deployment failure reason.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason();

    /**
     * Attribute Resource: The ID of the resource group to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource();

    /**
     * Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias();

    /**
     * Attribute Role: Grouping Service Role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole();

    /**
     * Attribute RoleAttrs: Grouping Service Role Properties.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs();

    /**
     * Attribute RunningInstance: Number of instances in service running.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance();

    /**
     * Attribute SafetyLock: Service Security Lock Status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock();

    /**
     * Attribute ServiceConfig: Service configuration information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig();

    /**
     * Attribute ServiceGroup: Group to which the service belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup();

    /**
     * Attribute ServiceName: Service Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName();

    /**
     * Attribute ServiceUid: Unique Service ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid();

    /**
     * Attribute TotalInstance: Total number of instances required by the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance();

    /**
     * Attribute UpdateTime: Service Last Updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute Weight: Packet Service Traffic Weight.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IService.Jsii$Default {
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
         * Attribute AccessToken: Service Request authentication token.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
            return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: Number of service CPU cores.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: Current running version of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraData: Service Extra Information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Gpu: Number of service GPU cards.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: Service Deployment Mirroring.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEndpoint: Public network Endpoint of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The intranet Endpoint of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Service Tag.
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
         * Attribute Memory: Memory of service (MB).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Message: Latest information on services.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: Primary account ID of the creator.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PendingInstance: Number of instances where the service is not currently ready.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Reason: Service deployment failure reason.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resource: The ID of the resource group to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
            return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceAlias: Name of the resource group where the service resides.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: Grouping Service Role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleAttrs: Grouping Service Role Properties.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningInstance: Number of instances in service running.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SafetyLock: Service Security Lock Status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
            return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConfig: Service configuration information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceGroup: Group to which the service belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: Service Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceUid: Unique Service ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalInstance: Total number of instances required by the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Service Last Updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Weight: Packet Service Traffic Weight.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
            return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ServiceProps.class));
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
         * Attribute AccessToken: Service Request authentication token.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
            return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: Number of service CPU cores.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: Current running version of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraData: Service Extra Information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Gpu: Number of service GPU cards.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: Service Deployment Mirroring.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEndpoint: Public network Endpoint of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The intranet Endpoint of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Service Tag.
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
         * Attribute Memory: Memory of service (MB).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Message: Latest information on services.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: Primary account ID of the creator.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PendingInstance: Number of instances where the service is not currently ready.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Reason: Service deployment failure reason.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resource: The ID of the resource group to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
            return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceAlias: Name of the resource group where the service resides.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: Grouping Service Role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleAttrs: Grouping Service Role Properties.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningInstance: Number of instances in service running.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SafetyLock: Service Security Lock Status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
            return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConfig: Service configuration information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceGroup: Group to which the service belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: Service Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceUid: Unique Service ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalInstance: Total number of instances required by the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Service Last Updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Weight: Packet Service Traffic Weight.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
            return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ServiceProps.class));
        }
    }
}
