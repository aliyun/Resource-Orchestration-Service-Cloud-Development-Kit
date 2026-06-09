package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::WaitingRoomEvent</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoomEvent")
public class WaitingRoomEvent extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IWaitingRoomEvent {

    protected WaitingRoomEvent(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitingRoomEvent(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public WaitingRoomEvent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public WaitingRoomEvent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
     * <p>
     * The incoming content needs to be base64 encoded.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPageHtml() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Waiting room description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableSessionRenewalEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrDisableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndTime: The timestamp of the end time of the event.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JsonResponseEnable: JSON response switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Language: Default language setting.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNewUsersPerMinute() {
        return software.amazon.jsii.Kernel.get(this, "attrNewUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreQueueEnable: Pre-queue switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreQueueStartTime: Pre-queue start time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreQueueStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrPreQueueStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrQueuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueuingStatusCode() {
        return software.amazon.jsii.Kernel.get(this, "attrQueuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RandomPreQueueEnable: Random queue switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRandomPreQueueEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRandomPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SessionDuration: User session duration in minutes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StartTime: The timestamp of the event start time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">ListWaitingRoomEvents</a> operation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomEventName: Event name, custom event description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomEventName() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.
     * <p>
     * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomType: Waiting room type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomEventProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomEventProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.WaitingRoomEvent}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.WaitingRoomEvent> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.WaitingRoomEventProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.WaitingRoomEventProps.Builder();
        }

        /**
         * Property endTime: The timestamp of the end time of the event.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The timestamp of the end time of the event. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The timestamp of the end time of the event.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The timestamp of the end time of the event. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property newUsersPerMinute: Number of new users per minute.
         * <p>
         * @return {@code this}
         * @param newUsersPerMinute Property newUsersPerMinute: Number of new users per minute. This parameter is required.
         */
        public Builder newUsersPerMinute(final java.lang.Number newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }
        /**
         * Property newUsersPerMinute: Number of new users per minute.
         * <p>
         * @return {@code this}
         * @param newUsersPerMinute Property newUsersPerMinute: Number of new users per minute. This parameter is required.
         */
        public Builder newUsersPerMinute(final com.aliyun.ros.cdk.core.IResolvable newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }

        /**
         * Property queuingMethod: Way of queuing.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>random</code>: random.</li>
         * <li><code>fifo</code>: first in, first out.</li>
         * <li><code>passthrough</code>: through.</li>
         * <li><code>reject-all</code>: reject all.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingMethod Property queuingMethod: Way of queuing. This parameter is required.
         */
        public Builder queuingMethod(final java.lang.String queuingMethod) {
            this.props.queuingMethod(queuingMethod);
            return this;
        }
        /**
         * Property queuingMethod: Way of queuing.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>random</code>: random.</li>
         * <li><code>fifo</code>: first in, first out.</li>
         * <li><code>passthrough</code>: through.</li>
         * <li><code>reject-all</code>: reject all.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingMethod Property queuingMethod: Way of queuing. This parameter is required.
         */
        public Builder queuingMethod(final com.aliyun.ros.cdk.core.IResolvable queuingMethod) {
            this.props.queuingMethod(queuingMethod);
            return this;
        }

        /**
         * Property queuingStatusCode: Waiting room status code.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>200</code></li>
         * <li><code>202</code></li>
         * <li><code>429</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingStatusCode Property queuingStatusCode: Waiting room status code. This parameter is required.
         */
        public Builder queuingStatusCode(final java.lang.String queuingStatusCode) {
            this.props.queuingStatusCode(queuingStatusCode);
            return this;
        }
        /**
         * Property queuingStatusCode: Waiting room status code.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>200</code></li>
         * <li><code>202</code></li>
         * <li><code>429</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingStatusCode Property queuingStatusCode: Waiting room status code. This parameter is required.
         */
        public Builder queuingStatusCode(final com.aliyun.ros.cdk.core.IResolvable queuingStatusCode) {
            this.props.queuingStatusCode(queuingStatusCode);
            return this;
        }

        /**
         * Property sessionDuration: User session duration in minutes.
         * <p>
         * @return {@code this}
         * @param sessionDuration Property sessionDuration: User session duration in minutes. This parameter is required.
         */
        public Builder sessionDuration(final java.lang.Number sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }
        /**
         * Property sessionDuration: User session duration in minutes.
         * <p>
         * @return {@code this}
         * @param sessionDuration Property sessionDuration: User session duration in minutes. This parameter is required.
         */
        public Builder sessionDuration(final com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property startTime: The timestamp of the event start time.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The timestamp of the event start time. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The timestamp of the event start time.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The timestamp of the event start time. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * Property totalActiveUsers: Total number of active users.
         * <p>
         * @return {@code this}
         * @param totalActiveUsers Property totalActiveUsers: Total number of active users. This parameter is required.
         */
        public Builder totalActiveUsers(final java.lang.Number totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }
        /**
         * Property totalActiveUsers: Total number of active users.
         * <p>
         * @return {@code this}
         * @param totalActiveUsers Property totalActiveUsers: Total number of active users. This parameter is required.
         */
        public Builder totalActiveUsers(final com.aliyun.ros.cdk.core.IResolvable totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }

        /**
         * Property waitingRoomEventName: Event name, custom event description.
         * <p>
         * @return {@code this}
         * @param waitingRoomEventName Property waitingRoomEventName: Event name, custom event description. This parameter is required.
         */
        public Builder waitingRoomEventName(final java.lang.String waitingRoomEventName) {
            this.props.waitingRoomEventName(waitingRoomEventName);
            return this;
        }
        /**
         * Property waitingRoomEventName: Event name, custom event description.
         * <p>
         * @return {@code this}
         * @param waitingRoomEventName Property waitingRoomEventName: Event name, custom event description. This parameter is required.
         */
        public Builder waitingRoomEventName(final com.aliyun.ros.cdk.core.IResolvable waitingRoomEventName) {
            this.props.waitingRoomEventName(waitingRoomEventName);
            return this;
        }

        /**
         * Property waitingRoomType: Waiting room type.
         * <p>
         * The following types are supported:
         * <p>
         * <ul>
         * <li><code>default</code>: the default type.</li>
         * <li><code>custom</code>: custom type.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param waitingRoomType Property waitingRoomType: Waiting room type. This parameter is required.
         */
        public Builder waitingRoomType(final java.lang.String waitingRoomType) {
            this.props.waitingRoomType(waitingRoomType);
            return this;
        }
        /**
         * Property waitingRoomType: Waiting room type.
         * <p>
         * The following types are supported:
         * <p>
         * <ul>
         * <li><code>default</code>: the default type.</li>
         * <li><code>custom</code>: custom type.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param waitingRoomType Property waitingRoomType: Waiting room type. This parameter is required.
         */
        public Builder waitingRoomType(final com.aliyun.ros.cdk.core.IResolvable waitingRoomType) {
            this.props.waitingRoomType(waitingRoomType);
            return this;
        }

        /**
         * Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         * <p>
         * The incoming content needs to be base64 encoded.
         * <p>
         * @return {@code this}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. This parameter is required.
         */
        public Builder customPageHtml(final java.lang.String customPageHtml) {
            this.props.customPageHtml(customPageHtml);
            return this;
        }
        /**
         * Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         * <p>
         * The incoming content needs to be base64 encoded.
         * <p>
         * @return {@code this}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. This parameter is required.
         */
        public Builder customPageHtml(final com.aliyun.ros.cdk.core.IResolvable customPageHtml) {
            this.props.customPageHtml(customPageHtml);
            return this;
        }

        /**
         * Property description: Waiting room description.
         * <p>
         * @return {@code this}
         * @param description Property description: Waiting room description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Waiting room description.
         * <p>
         * @return {@code this}
         * @param description Property description: Waiting room description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property disableSessionRenewalEnable: Disable session renewal.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Disable session renewal. This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final java.lang.String disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }
        /**
         * Property disableSessionRenewalEnable: Disable session renewal.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Disable session renewal. This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final com.aliyun.ros.cdk.core.IResolvable disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }

        /**
         * Property jsonResponseEnable: JSON response switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param jsonResponseEnable Property jsonResponseEnable: JSON response switch. This parameter is required.
         */
        public Builder jsonResponseEnable(final java.lang.String jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }
        /**
         * Property jsonResponseEnable: JSON response switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param jsonResponseEnable Property jsonResponseEnable: JSON response switch. This parameter is required.
         */
        public Builder jsonResponseEnable(final com.aliyun.ros.cdk.core.IResolvable jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }

        /**
         * Property language: Default language setting.
         * <p>
         * Values include:
         * <p>
         * <ul>
         * <li><code>enus</code>: English.</li>
         * <li><code>zhcn</code>: Simplified Chinese.</li>
         * <li><code>zhhk</code>: Traditional Chinese.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param language Property language: Default language setting. This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * Property language: Default language setting.
         * <p>
         * Values include:
         * <p>
         * <ul>
         * <li><code>enus</code>: English.</li>
         * <li><code>zhcn</code>: Simplified Chinese.</li>
         * <li><code>zhhk</code>: Traditional Chinese.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param language Property language: Default language setting. This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * Property preQueueEnable: Pre-queue switch.
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param preQueueEnable Property preQueueEnable: Pre-queue switch. This parameter is required.
         */
        public Builder preQueueEnable(final java.lang.String preQueueEnable) {
            this.props.preQueueEnable(preQueueEnable);
            return this;
        }
        /**
         * Property preQueueEnable: Pre-queue switch.
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param preQueueEnable Property preQueueEnable: Pre-queue switch. This parameter is required.
         */
        public Builder preQueueEnable(final com.aliyun.ros.cdk.core.IResolvable preQueueEnable) {
            this.props.preQueueEnable(preQueueEnable);
            return this;
        }

        /**
         * Property preQueueStartTime: Pre-queue start time.
         * <p>
         * @return {@code this}
         * @param preQueueStartTime Property preQueueStartTime: Pre-queue start time. This parameter is required.
         */
        public Builder preQueueStartTime(final java.lang.String preQueueStartTime) {
            this.props.preQueueStartTime(preQueueStartTime);
            return this;
        }
        /**
         * Property preQueueStartTime: Pre-queue start time.
         * <p>
         * @return {@code this}
         * @param preQueueStartTime Property preQueueStartTime: Pre-queue start time. This parameter is required.
         */
        public Builder preQueueStartTime(final com.aliyun.ros.cdk.core.IResolvable preQueueStartTime) {
            this.props.preQueueStartTime(preQueueStartTime);
            return this;
        }

        /**
         * Property randomPreQueueEnable: Random queue switch.
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param randomPreQueueEnable Property randomPreQueueEnable: Random queue switch. This parameter is required.
         */
        public Builder randomPreQueueEnable(final java.lang.String randomPreQueueEnable) {
            this.props.randomPreQueueEnable(randomPreQueueEnable);
            return this;
        }
        /**
         * Property randomPreQueueEnable: Random queue switch.
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param randomPreQueueEnable Property randomPreQueueEnable: Random queue switch. This parameter is required.
         */
        public Builder randomPreQueueEnable(final com.aliyun.ros.cdk.core.IResolvable randomPreQueueEnable) {
            this.props.randomPreQueueEnable(randomPreQueueEnable);
            return this;
        }

        /**
         * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * <p>
         * @return {@code this}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         */
        public Builder waitingRoomId(final java.lang.String waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }
        /**
         * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * <p>
         * @return {@code this}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         */
        public Builder waitingRoomId(final com.aliyun.ros.cdk.core.IResolvable waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.WaitingRoomEvent}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.WaitingRoomEvent build() {
            return new com.aliyun.ros.cdk.esa.WaitingRoomEvent(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
