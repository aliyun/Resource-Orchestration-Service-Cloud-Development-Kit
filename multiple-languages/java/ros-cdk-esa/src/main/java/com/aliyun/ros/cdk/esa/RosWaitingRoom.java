package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::WaitingRoom</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.600Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWaitingRoom")
public class RosWaitingRoom extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWaitingRoom(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWaitingRoom(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosWaitingRoom.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWaitingRoom(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosWaitingRoomProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCookieName() {
        return software.amazon.jsii.Kernel.get(this, "attrCookieName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNameAndPath() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNameAndPath", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueAllEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueAllEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitingRoomName() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCookieName() {
        return software.amazon.jsii.Kernel.get(this, "cookieName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCookieName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cookieName", java.util.Objects.requireNonNull(value, "cookieName is required"));
    }

    /**
     */
    public void setCookieName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cookieName", java.util.Objects.requireNonNull(value, "cookieName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHostNameAndPath() {
        return software.amazon.jsii.Kernel.get(this, "hostNameAndPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostNameAndPath(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostNameAndPath", java.util.Objects.requireNonNull(value, "hostNameAndPath is required"));
    }

    /**
     */
    public void setHostNameAndPath(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.esa.RosWaitingRoom.HostNameAndPathProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.esa.RosWaitingRoom.HostNameAndPathProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "hostNameAndPath", java.util.Objects.requireNonNull(value, "hostNameAndPath is required"));
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
    public void setQueuingStatusCode(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", java.util.Objects.requireNonNull(value, "status is required"));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", java.util.Objects.requireNonNull(value, "status is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "totalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTotalActiveUsers(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "totalActiveUsers", java.util.Objects.requireNonNull(value, "totalActiveUsers is required"));
    }

    /**
     */
    public void setTotalActiveUsers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "totalActiveUsers", java.util.Objects.requireNonNull(value, "totalActiveUsers is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomName() {
        return software.amazon.jsii.Kernel.get(this, "waitingRoomName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitingRoomName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomName", java.util.Objects.requireNonNull(value, "waitingRoomName is required"));
    }

    /**
     */
    public void setWaitingRoomName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitingRoomName", java.util.Objects.requireNonNull(value, "waitingRoomName is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueueAllEnable() {
        return software.amazon.jsii.Kernel.get(this, "queueAllEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueAllEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueAllEnable", value);
    }

    /**
     */
    public void setQueueAllEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueAllEnable", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty")
    @software.amazon.jsii.Jsii.Proxy(HostNameAndPathProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostNameAndPathProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSubdomain();

        /**
         * @return a {@link Builder} of {@link HostNameAndPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostNameAndPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostNameAndPathProperty> {
            java.lang.Object domain;
            java.lang.Object path;
            java.lang.Object subdomain;

            /**
             * Sets the value of {@link HostNameAndPathProperty#getDomain}
             * @param domain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.lang.String domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link HostNameAndPathProperty#getDomain}
             * @param domain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link HostNameAndPathProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link HostNameAndPathProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link HostNameAndPathProperty#getSubdomain}
             * @param subdomain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subdomain(java.lang.String subdomain) {
                this.subdomain = subdomain;
                return this;
            }

            /**
             * Sets the value of {@link HostNameAndPathProperty#getSubdomain}
             * @param subdomain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subdomain(com.aliyun.ros.cdk.core.IResolvable subdomain) {
                this.subdomain = subdomain;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostNameAndPathProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostNameAndPathProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostNameAndPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostNameAndPathProperty {
            private final java.lang.Object domain;
            private final java.lang.Object path;
            private final java.lang.Object subdomain;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subdomain = software.amazon.jsii.Kernel.get(this, "subdomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
                this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
                this.subdomain = java.util.Objects.requireNonNull(builder.subdomain, "subdomain is required");
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getSubdomain() {
                return this.subdomain;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("domain", om.valueToTree(this.getDomain()));
                data.set("path", om.valueToTree(this.getPath()));
                data.set("subdomain", om.valueToTree(this.getSubdomain()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostNameAndPathProperty.Jsii$Proxy that = (HostNameAndPathProperty.Jsii$Proxy) o;

                if (!domain.equals(that.domain)) return false;
                if (!path.equals(that.path)) return false;
                return this.subdomain.equals(that.subdomain);
            }

            @Override
            public final int hashCode() {
                int result = this.domain.hashCode();
                result = 31 * result + (this.path.hashCode());
                result = 31 * result + (this.subdomain.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosWaitingRoom}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosWaitingRoom> {
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
        private final com.aliyun.ros.cdk.esa.RosWaitingRoomProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosWaitingRoomProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cookieName This parameter is required.
         */
        public Builder cookieName(final java.lang.String cookieName) {
            this.props.cookieName(cookieName);
            return this;
        }
        /**
         * @return {@code this}
         * @param cookieName This parameter is required.
         */
        public Builder cookieName(final com.aliyun.ros.cdk.core.IResolvable cookieName) {
            this.props.cookieName(cookieName);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostNameAndPath This parameter is required.
         */
        public Builder hostNameAndPath(final com.aliyun.ros.cdk.core.IResolvable hostNameAndPath) {
            this.props.hostNameAndPath(hostNameAndPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostNameAndPath This parameter is required.
         */
        public Builder hostNameAndPath(final java.util.List<? extends java.lang.Object> hostNameAndPath) {
            this.props.hostNameAndPath(hostNameAndPath);
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
        public Builder queuingStatusCode(final java.lang.Number queuingStatusCode) {
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
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param totalActiveUsers This parameter is required.
         */
        public Builder totalActiveUsers(final java.lang.String totalActiveUsers) {
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
         * @param waitingRoomName This parameter is required.
         */
        public Builder waitingRoomName(final java.lang.String waitingRoomName) {
            this.props.waitingRoomName(waitingRoomName);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitingRoomName This parameter is required.
         */
        public Builder waitingRoomName(final com.aliyun.ros.cdk.core.IResolvable waitingRoomName) {
            this.props.waitingRoomName(waitingRoomName);
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
         * @param queueAllEnable This parameter is required.
         */
        public Builder queueAllEnable(final java.lang.String queueAllEnable) {
            this.props.queueAllEnable(queueAllEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueAllEnable This parameter is required.
         */
        public Builder queueAllEnable(final com.aliyun.ros.cdk.core.IResolvable queueAllEnable) {
            this.props.queueAllEnable(queueAllEnable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosWaitingRoom}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosWaitingRoom build() {
            return new com.aliyun.ros.cdk.esa.RosWaitingRoom(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
