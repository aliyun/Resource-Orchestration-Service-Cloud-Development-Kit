package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>Flowlog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.IFlowlog")
@software.amazon.jsii.Jsii.Proxy(IFlowlog.Jsii$Proxy.class)
public interface IFlowlog extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId();

    /**
     * Attribute CreateTime: The time when the flow log was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the flow log.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute FlowLogId: The ID of the flow log.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogId();

    /**
     * Attribute FlowLogName: The flow log name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogName();

    /**
     * Attribute FlowLogVersion: The flow log version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogVersion();

    /**
     * Attribute Interval: The time window for collecting log data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval();

    /**
     * Attribute LogFormatString: The strings that define the fields in the flow log.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogFormatString();

    /**
     * Attribute LogStoreName: The Logstore that stores the captured traffic data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogStoreName();

    /**
     * Attribute ProjectName: The project that stores the captured traffic data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName();

    /**
     * Attribute Tags: The tag of the flow log.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId();

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.IFlowlog.Jsii$Default {
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
         * Attribute CenId: The ID of the CEN instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the flow log was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the flow log.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogId: The ID of the flow log.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogName: The flow log name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogName() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogVersion: The flow log version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Interval: The time window for collecting log data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogFormatString: The strings that define the fields in the flow log.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogFormatString() {
            return software.amazon.jsii.Kernel.get(this, "attrLogFormatString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogStoreName: The Logstore that stores the captured traffic data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogStoreName() {
            return software.amazon.jsii.Kernel.get(this, "attrLogStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectName: The project that stores the captured traffic data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the flow log.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.FlowlogProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IFlowlog}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFlowlog, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CenId: The ID of the CEN instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the flow log was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the flow log.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogId: The ID of the flow log.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogName: The flow log name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogName() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowLogVersion: The flow log version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowLogVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Interval: The time window for collecting log data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogFormatString: The strings that define the fields in the flow log.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogFormatString() {
            return software.amazon.jsii.Kernel.get(this, "attrLogFormatString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogStoreName: The Logstore that stores the captured traffic data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogStoreName() {
            return software.amazon.jsii.Kernel.get(this, "attrLogStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectName: The project that stores the captured traffic data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the flow log.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.FlowlogProps.class));
        }
    }
}
