package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>WaitingRoomEvent</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.043Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IWaitingRoomEvent")
@software.amazon.jsii.Jsii.Proxy(IWaitingRoomEvent.Jsii$Proxy.class)
public interface IWaitingRoomEvent extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

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
     * Attribute EndTime: The timestamp of the end time of the event.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute JsonResponseEnable: JSON response switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable();

    /**
     * Attribute Language: Default language setting.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage();

    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNewUsersPerMinute();

    /**
     * Attribute PreQueueEnable: Pre-queue switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueEnable();

    /**
     * Attribute PreQueueStartTime: Pre-queue start time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueStartTime();

    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingMethod();

    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingStatusCode();

    /**
     * Attribute RandomPreQueueEnable: Random queue switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRandomPreQueueEnable();

    /**
     * Attribute SessionDuration: User session duration in minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration();

    /**
     * Attribute StartTime: The timestamp of the event start time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime();

    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers();

    /**
     * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">ListWaitingRoomEvents</a> operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventId();

    /**
     * Attribute WaitingRoomEventName: Event name, custom event description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventName();

    /**
     * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.
     * <p>
     * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId();

    /**
     * Attribute WaitingRoomType: Waiting room type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IWaitingRoomEvent.Jsii$Default {
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
         * Attribute EndTime: The timestamp of the end time of the event.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JsonResponseEnable: JSON response switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: Default language setting.
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
         * Attribute PreQueueEnable: Pre-queue switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PreQueueStartTime: Pre-queue start time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPreQueueStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute RandomPreQueueEnable: Random queue switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRandomPreQueueEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRandomPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SessionDuration: User session duration in minutes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The timestamp of the event start time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalActiveUsers: Total number of active users.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">ListWaitingRoomEvents</a> operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomEventName: Event name, custom event description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventName() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomType: Waiting room type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomEventProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWaitingRoomEvent}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWaitingRoomEvent, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EndTime: The timestamp of the end time of the event.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JsonResponseEnable: JSON response switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: Default language setting.
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
         * Attribute PreQueueEnable: Pre-queue switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PreQueueStartTime: Pre-queue start time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPreQueueStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute RandomPreQueueEnable: Random queue switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRandomPreQueueEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRandomPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SessionDuration: User session duration in minutes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The timestamp of the event start time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalActiveUsers: Total number of active users.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">ListWaitingRoomEvents</a> operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomEventName: Event name, custom event description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventName() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomType: Waiting room type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomEventProps.class));
        }
    }
}
