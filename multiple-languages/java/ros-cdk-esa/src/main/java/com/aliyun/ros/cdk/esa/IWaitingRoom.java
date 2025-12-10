package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>WaitingRoom</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.578Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IWaitingRoom")
@software.amazon.jsii.Jsii.Proxy(IWaitingRoom.Jsii$Proxy.class)
public interface IWaitingRoom extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CookieName: Custom Cookie name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieName();

    /**
     * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
     * <p>
     * The incoming content needs to be base64 encoded.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPageHtml();

    /**
     * Attribute Description: Waiting room description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableSessionRenewalEnable();

    /**
     * Attribute HostNameAndPath: Host name and path.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNameAndPath();

    /**
     * Attribute JsonResponseEnable: The JSON response.
     * <p>
     * If the accept request header contains "application/json", JSON data is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable();

    /**
     * Attribute Language: The language of the waiting room page.
     * <p>
     * When the waiting room type is the default type, it needs to be passed in.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage();

    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNewUsersPerMinute();

    /**
     * Attribute QueueAllEnable: All in line.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueAllEnable();

    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingMethod();

    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingStatusCode();

    /**
     * Attribute SessionDuration: Session duration in minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration();

    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers();

    /**
     * Attribute WaitingRoomId: The waiting room ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId();

    /**
     * Attribute WaitingRoomName: The name of the waiting room.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomName();

    /**
     * Attribute WaitingRoomType: Waiting room type, support:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IWaitingRoom.Jsii$Default {
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
         * Attribute CookieName: Custom Cookie name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieName() {
            return software.amazon.jsii.Kernel.get(this, "attrCookieName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         * <p>
         * The incoming content needs to be base64 encoded.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPageHtml() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Waiting room description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableSessionRenewalEnable: Disable session renewal.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableSessionRenewalEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostNameAndPath: Host name and path.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNameAndPath() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNameAndPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JsonResponseEnable: The JSON response.
         * <p>
         * If the accept request header contains "application/json", JSON data is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: The language of the waiting room page.
         * <p>
         * When the waiting room type is the default type, it needs to be passed in.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NewUsersPerMinute: Number of new users per minute.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNewUsersPerMinute() {
            return software.amazon.jsii.Kernel.get(this, "attrNewUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueAllEnable: All in line.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueAllEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueAllEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueuingMethod: Way of queuing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrQueuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueuingStatusCode: Waiting room status code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingStatusCode() {
            return software.amazon.jsii.Kernel.get(this, "attrQueuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SessionDuration: Session duration in minutes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalActiveUsers: Total number of active users.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomId: The waiting room ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomName: The name of the waiting room.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomName() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomType: Waiting room type, support:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWaitingRoom}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWaitingRoom, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CookieName: Custom Cookie name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieName() {
            return software.amazon.jsii.Kernel.get(this, "attrCookieName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         * <p>
         * The incoming content needs to be base64 encoded.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPageHtml() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Waiting room description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableSessionRenewalEnable: Disable session renewal.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableSessionRenewalEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostNameAndPath: Host name and path.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNameAndPath() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNameAndPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JsonResponseEnable: The JSON response.
         * <p>
         * If the accept request header contains "application/json", JSON data is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: The language of the waiting room page.
         * <p>
         * When the waiting room type is the default type, it needs to be passed in.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NewUsersPerMinute: Number of new users per minute.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNewUsersPerMinute() {
            return software.amazon.jsii.Kernel.get(this, "attrNewUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueAllEnable: All in line.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueAllEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueAllEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueuingMethod: Way of queuing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrQueuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueuingStatusCode: Waiting room status code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingStatusCode() {
            return software.amazon.jsii.Kernel.get(this, "attrQueuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SessionDuration: Session duration in minutes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalActiveUsers: Total number of active users.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomId: The waiting room ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomName: The name of the waiting room.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomName() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomType: Waiting room type, support:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomProps.class));
        }
    }
}
