package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::WaitingRoomEvent</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.289Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWaitingRoomEvent")
public class RosWaitingRoomEvent extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWaitingRoomEvent(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWaitingRoomEvent(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosWaitingRoomEvent.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWaitingRoomEvent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosWaitingRoomEventProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomPageHtml() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomPageHtml", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisableSessionRenewalEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrDisableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJsonResponseEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNewUsersPerMinute() {
        return software.amazon.jsii.Kernel.get(this, "attrNewUsersPerMinute", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrPreQueueEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPreQueueStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrPreQueueStartTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueuingMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrQueuingMethod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueuingStatusCode() {
        return software.amazon.jsii.Kernel.get(this, "attrQueuingStatusCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRandomPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRandomPreQueueEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomEventId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomEventName() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomType() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndTime() {
        return software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endTime", java.util.Objects.requireNonNull(value, "endTime is required"));
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endTime", java.util.Objects.requireNonNull(value, "endTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNewUsersPerMinute() {
        return software.amazon.jsii.Kernel.get(this, "newUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNewUsersPerMinute(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "newUsersPerMinute", java.util.Objects.requireNonNull(value, "newUsersPerMinute is required"));
    }

    /**
     */
    public void setNewUsersPerMinute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "newUsersPerMinute", java.util.Objects.requireNonNull(value, "newUsersPerMinute is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueuingMethod() {
        return software.amazon.jsii.Kernel.get(this, "queuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueuingMethod(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queuingMethod", java.util.Objects.requireNonNull(value, "queuingMethod is required"));
    }

    /**
     */
    public void setQueuingMethod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queuingMethod", java.util.Objects.requireNonNull(value, "queuingMethod is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueuingStatusCode() {
        return software.amazon.jsii.Kernel.get(this, "queuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueuingStatusCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queuingStatusCode", java.util.Objects.requireNonNull(value, "queuingStatusCode is required"));
    }

    /**
     */
    public void setQueuingStatusCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queuingStatusCode", java.util.Objects.requireNonNull(value, "queuingStatusCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "sessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSessionDuration(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sessionDuration", java.util.Objects.requireNonNull(value, "sessionDuration is required"));
    }

    /**
     */
    public void setSessionDuration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sessionDuration", java.util.Objects.requireNonNull(value, "sessionDuration is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStartTime() {
        return software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "startTime", java.util.Objects.requireNonNull(value, "startTime is required"));
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startTime", java.util.Objects.requireNonNull(value, "startTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "totalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTotalActiveUsers(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "totalActiveUsers", java.util.Objects.requireNonNull(value, "totalActiveUsers is required"));
    }

    /**
     */
    public void setTotalActiveUsers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "totalActiveUsers", java.util.Objects.requireNonNull(value, "totalActiveUsers is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomEventName() {
        return software.amazon.jsii.Kernel.get(this, "waitingRoomEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitingRoomEventName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomEventName", java.util.Objects.requireNonNull(value, "waitingRoomEventName is required"));
    }

    /**
     */
    public void setWaitingRoomEventName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomEventName", java.util.Objects.requireNonNull(value, "waitingRoomEventName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomType() {
        return software.amazon.jsii.Kernel.get(this, "waitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitingRoomType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomType", java.util.Objects.requireNonNull(value, "waitingRoomType is required"));
    }

    /**
     */
    public void setWaitingRoomType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomType", java.util.Objects.requireNonNull(value, "waitingRoomType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomPageHtml() {
        return software.amazon.jsii.Kernel.get(this, "customPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomPageHtml(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customPageHtml", value);
    }

    /**
     */
    public void setCustomPageHtml(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customPageHtml", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisableSessionRenewalEnable() {
        return software.amazon.jsii.Kernel.get(this, "disableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisableSessionRenewalEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "disableSessionRenewalEnable", value);
    }

    /**
     */
    public void setDisableSessionRenewalEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disableSessionRenewalEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJsonResponseEnable() {
        return software.amazon.jsii.Kernel.get(this, "jsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJsonResponseEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jsonResponseEnable", value);
    }

    /**
     */
    public void setJsonResponseEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jsonResponseEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "language", value);
    }

    /**
     */
    public void setLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "language", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "preQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreQueueEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preQueueEnable", value);
    }

    /**
     */
    public void setPreQueueEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preQueueEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreQueueStartTime() {
        return software.amazon.jsii.Kernel.get(this, "preQueueStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreQueueStartTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preQueueStartTime", value);
    }

    /**
     */
    public void setPreQueueStartTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preQueueStartTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRandomPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "randomPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRandomPreQueueEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "randomPreQueueEnable", value);
    }

    /**
     */
    public void setRandomPreQueueEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "randomPreQueueEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWaitingRoomId() {
        return software.amazon.jsii.Kernel.get(this, "waitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitingRoomId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomId", value);
    }

    /**
     */
    public void setWaitingRoomId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosWaitingRoomEvent}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosWaitingRoomEvent> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.RosWaitingRoomEventProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosWaitingRoomEventProps.Builder();
        }

        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param newUsersPerMinute This parameter is required.
         */
        public Builder newUsersPerMinute(final java.lang.Number newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }
        /**
         * @return {@code this}
         * @param newUsersPerMinute This parameter is required.
         */
        public Builder newUsersPerMinute(final com.aliyun.ros.cdk.core.IResolvable newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }

        /**
         * @return {@code this}
         * @param queuingMethod This parameter is required.
         */
        public Builder queuingMethod(final java.lang.String queuingMethod) {
            this.props.queuingMethod(queuingMethod);
            return this;
        }
        /**
         * @return {@code this}
         * @param queuingMethod This parameter is required.
         */
        public Builder queuingMethod(final com.aliyun.ros.cdk.core.IResolvable queuingMethod) {
            this.props.queuingMethod(queuingMethod);
            return this;
        }

        /**
         * @return {@code this}
         * @param queuingStatusCode This parameter is required.
         */
        public Builder queuingStatusCode(final java.lang.String queuingStatusCode) {
            this.props.queuingStatusCode(queuingStatusCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param queuingStatusCode This parameter is required.
         */
        public Builder queuingStatusCode(final com.aliyun.ros.cdk.core.IResolvable queuingStatusCode) {
            this.props.queuingStatusCode(queuingStatusCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param sessionDuration This parameter is required.
         */
        public Builder sessionDuration(final java.lang.Number sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param sessionDuration This parameter is required.
         */
        public Builder sessionDuration(final com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param startTime This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param startTime This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param totalActiveUsers This parameter is required.
         */
        public Builder totalActiveUsers(final java.lang.Number totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }
        /**
         * @return {@code this}
         * @param totalActiveUsers This parameter is required.
         */
        public Builder totalActiveUsers(final com.aliyun.ros.cdk.core.IResolvable totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitingRoomEventName This parameter is required.
         */
        public Builder waitingRoomEventName(final java.lang.String waitingRoomEventName) {
            this.props.waitingRoomEventName(waitingRoomEventName);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitingRoomEventName This parameter is required.
         */
        public Builder waitingRoomEventName(final com.aliyun.ros.cdk.core.IResolvable waitingRoomEventName) {
            this.props.waitingRoomEventName(waitingRoomEventName);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitingRoomType This parameter is required.
         */
        public Builder waitingRoomType(final java.lang.String waitingRoomType) {
            this.props.waitingRoomType(waitingRoomType);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitingRoomType This parameter is required.
         */
        public Builder waitingRoomType(final com.aliyun.ros.cdk.core.IResolvable waitingRoomType) {
            this.props.waitingRoomType(waitingRoomType);
            return this;
        }

        /**
         * @return {@code this}
         * @param customPageHtml This parameter is required.
         */
        public Builder customPageHtml(final java.lang.String customPageHtml) {
            this.props.customPageHtml(customPageHtml);
            return this;
        }
        /**
         * @return {@code this}
         * @param customPageHtml This parameter is required.
         */
        public Builder customPageHtml(final com.aliyun.ros.cdk.core.IResolvable customPageHtml) {
            this.props.customPageHtml(customPageHtml);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param disableSessionRenewalEnable This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final java.lang.String disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param disableSessionRenewalEnable This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final com.aliyun.ros.cdk.core.IResolvable disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param jsonResponseEnable This parameter is required.
         */
        public Builder jsonResponseEnable(final java.lang.String jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param jsonResponseEnable This parameter is required.
         */
        public Builder jsonResponseEnable(final com.aliyun.ros.cdk.core.IResolvable jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param language This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * @return {@code this}
         * @param language This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * @return {@code this}
         * @param preQueueEnable This parameter is required.
         */
        public Builder preQueueEnable(final java.lang.String preQueueEnable) {
            this.props.preQueueEnable(preQueueEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param preQueueEnable This parameter is required.
         */
        public Builder preQueueEnable(final com.aliyun.ros.cdk.core.IResolvable preQueueEnable) {
            this.props.preQueueEnable(preQueueEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param preQueueStartTime This parameter is required.
         */
        public Builder preQueueStartTime(final java.lang.String preQueueStartTime) {
            this.props.preQueueStartTime(preQueueStartTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param preQueueStartTime This parameter is required.
         */
        public Builder preQueueStartTime(final com.aliyun.ros.cdk.core.IResolvable preQueueStartTime) {
            this.props.preQueueStartTime(preQueueStartTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param randomPreQueueEnable This parameter is required.
         */
        public Builder randomPreQueueEnable(final java.lang.String randomPreQueueEnable) {
            this.props.randomPreQueueEnable(randomPreQueueEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param randomPreQueueEnable This parameter is required.
         */
        public Builder randomPreQueueEnable(final com.aliyun.ros.cdk.core.IResolvable randomPreQueueEnable) {
            this.props.randomPreQueueEnable(randomPreQueueEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitingRoomId This parameter is required.
         */
        public Builder waitingRoomId(final java.lang.String waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitingRoomId This parameter is required.
         */
        public Builder waitingRoomId(final com.aliyun.ros.cdk.core.IResolvable waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosWaitingRoomEvent}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosWaitingRoomEvent build() {
            return new com.aliyun.ros.cdk.esa.RosWaitingRoomEvent(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
