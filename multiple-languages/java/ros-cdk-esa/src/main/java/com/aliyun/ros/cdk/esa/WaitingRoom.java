package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::WaitingRoom</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoom")
public class WaitingRoom extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IWaitingRoom {

    protected WaitingRoom(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitingRoom(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WaitingRoom(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WaitingRoom(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CookieName: Custom Cookie name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieName() {
        return software.amazon.jsii.Kernel.get(this, "attrCookieName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute HostNameAndPath: Host name and path.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNameAndPath() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNameAndPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JsonResponseEnable: The JSON response.
     * <p>
     * If the accept request header contains "application/json", JSON data is returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJsonResponseEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrJsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Language: The language of the waiting room page.
     * <p>
     * When the waiting room type is the default type, it needs to be passed in.
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
     * Attribute QueueAllEnable: All in line.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueAllEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueAllEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute SessionDuration: Session duration in minutes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalActiveUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomId: The waiting room ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomName: The name of the waiting room.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomName() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomType: Waiting room type, support:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomType() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.WaitingRoom}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.WaitingRoom> {
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
        private final com.aliyun.ros.cdk.esa.WaitingRoomProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.WaitingRoomProps.Builder();
        }

        /**
         * Property cookieName: The name of the custom cookie.
         * <p>
         * @return {@code this}
         * @param cookieName Property cookieName: The name of the custom cookie. This parameter is required.
         */
        public Builder cookieName(final java.lang.String cookieName) {
            this.props.cookieName(cookieName);
            return this;
        }
        /**
         * Property cookieName: The name of the custom cookie.
         * <p>
         * @return {@code this}
         * @param cookieName Property cookieName: The name of the custom cookie. This parameter is required.
         */
        public Builder cookieName(final com.aliyun.ros.cdk.core.IResolvable cookieName) {
            this.props.cookieName(cookieName);
            return this;
        }

        /**
         * Property hostNameAndPath: The hostname and path.
         * <p>
         * @return {@code this}
         * @param hostNameAndPath Property hostNameAndPath: The hostname and path. This parameter is required.
         */
        public Builder hostNameAndPath(final com.aliyun.ros.cdk.core.IResolvable hostNameAndPath) {
            this.props.hostNameAndPath(hostNameAndPath);
            return this;
        }
        /**
         * Property hostNameAndPath: The hostname and path.
         * <p>
         * @return {@code this}
         * @param hostNameAndPath Property hostNameAndPath: The hostname and path. This parameter is required.
         */
        public Builder hostNameAndPath(final java.util.List<? extends java.lang.Object> hostNameAndPath) {
            this.props.hostNameAndPath(hostNameAndPath);
            return this;
        }

        /**
         * Property newUsersPerMinute: The maximum number of new users per minute.
         * <p>
         * @return {@code this}
         * @param newUsersPerMinute Property newUsersPerMinute: The maximum number of new users per minute. This parameter is required.
         */
        public Builder newUsersPerMinute(final java.lang.Number newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }
        /**
         * Property newUsersPerMinute: The maximum number of new users per minute.
         * <p>
         * @return {@code this}
         * @param newUsersPerMinute Property newUsersPerMinute: The maximum number of new users per minute. This parameter is required.
         */
        public Builder newUsersPerMinute(final com.aliyun.ros.cdk.core.IResolvable newUsersPerMinute) {
            this.props.newUsersPerMinute(newUsersPerMinute);
            return this;
        }

        /**
         * Property queuingMethod: The queuing method.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>random</code>: Users gain access to the origin randomly, regardless of the arrival time.</li>
         * <li><code>fifo</code>: Users gain access to the origin in order of arrival.</li>
         * <li><code>Passthrough</code>: Users pass through the waiting room and go straight to the origin.</li>
         * <li><code>Reject-all</code>: Users are blocked from reaching the origin.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingMethod Property queuingMethod: The queuing method. This parameter is required.
         */
        public Builder queuingMethod(final java.lang.String queuingMethod) {
            this.props.queuingMethod(queuingMethod);
            return this;
        }
        /**
         * Property queuingMethod: The queuing method.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>random</code>: Users gain access to the origin randomly, regardless of the arrival time.</li>
         * <li><code>fifo</code>: Users gain access to the origin in order of arrival.</li>
         * <li><code>Passthrough</code>: Users pass through the waiting room and go straight to the origin.</li>
         * <li><code>Reject-all</code>: Users are blocked from reaching the origin.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queuingMethod Property queuingMethod: The queuing method. This parameter is required.
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
        public Builder queuingStatusCode(final java.lang.Number queuingStatusCode) {
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
         * Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.
         * <p>
         * Unit: minutes.
         * <p>
         * @return {@code this}
         * @param sessionDuration Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. This parameter is required.
         */
        public Builder sessionDuration(final java.lang.Number sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }
        /**
         * Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.
         * <p>
         * Unit: minutes.
         * <p>
         * @return {@code this}
         * @param sessionDuration Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. This parameter is required.
         */
        public Builder sessionDuration(final com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.props.sessionDuration(sessionDuration);
            return this;
        }

        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property status: Waiting room enabled status.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>'on': Enable waiting room</li>
         * <li>'off': Disabled waiting room</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: Waiting room enabled status. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: Waiting room enabled status.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>'on': Enable waiting room</li>
         * <li>'off': Disabled waiting room</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: Waiting room enabled status. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property totalActiveUsers: The maximum number of active users.
         * <p>
         * @return {@code this}
         * @param totalActiveUsers Property totalActiveUsers: The maximum number of active users. This parameter is required.
         */
        public Builder totalActiveUsers(final java.lang.String totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }
        /**
         * Property totalActiveUsers: The maximum number of active users.
         * <p>
         * @return {@code this}
         * @param totalActiveUsers Property totalActiveUsers: The maximum number of active users. This parameter is required.
         */
        public Builder totalActiveUsers(final com.aliyun.ros.cdk.core.IResolvable totalActiveUsers) {
            this.props.totalActiveUsers(totalActiveUsers);
            return this;
        }

        /**
         * Property waitingRoomName: The name of the waiting room.
         * <p>
         * @return {@code this}
         * @param waitingRoomName Property waitingRoomName: The name of the waiting room. This parameter is required.
         */
        public Builder waitingRoomName(final java.lang.String waitingRoomName) {
            this.props.waitingRoomName(waitingRoomName);
            return this;
        }
        /**
         * Property waitingRoomName: The name of the waiting room.
         * <p>
         * @return {@code this}
         * @param waitingRoomName Property waitingRoomName: The name of the waiting room. This parameter is required.
         */
        public Builder waitingRoomName(final com.aliyun.ros.cdk.core.IResolvable waitingRoomName) {
            this.props.waitingRoomName(waitingRoomName);
            return this;
        }

        /**
         * Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type.
         * <p>
         * <ul>
         * <li><code>custom</code>: indicates a custom type.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param waitingRoomType Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type. This parameter is required.
         */
        public Builder waitingRoomType(final java.lang.String waitingRoomType) {
            this.props.waitingRoomType(waitingRoomType);
            return this;
        }
        /**
         * Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type.
         * <p>
         * <ul>
         * <li><code>custom</code>: indicates a custom type.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param waitingRoomType Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type. This parameter is required.
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
         * Property disableSessionRenewalEnable: Specifies whether to disable session renewal.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Specifies whether to disable session renewal. This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final java.lang.String disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }
        /**
         * Property disableSessionRenewalEnable: Specifies whether to disable session renewal.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Specifies whether to disable session renewal. This parameter is required.
         */
        public Builder disableSessionRenewalEnable(final com.aliyun.ros.cdk.core.IResolvable disableSessionRenewalEnable) {
            this.props.disableSessionRenewalEnable(disableSessionRenewalEnable);
            return this;
        }

        /**
         * Property jsonResponseEnable: The JSON response.
         * <p>
         * If the accept request header contains "application/json", JSON data is returned. Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param jsonResponseEnable Property jsonResponseEnable: The JSON response. This parameter is required.
         */
        public Builder jsonResponseEnable(final java.lang.String jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }
        /**
         * Property jsonResponseEnable: The JSON response.
         * <p>
         * If the accept request header contains "application/json", JSON data is returned. Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param jsonResponseEnable Property jsonResponseEnable: The JSON response. This parameter is required.
         */
        public Builder jsonResponseEnable(final com.aliyun.ros.cdk.core.IResolvable jsonResponseEnable) {
            this.props.jsonResponseEnable(jsonResponseEnable);
            return this;
        }

        /**
         * Property language: The language of the waiting room page.
         * <p>
         * When the waiting room type is the default type, it needs to be passed in. The following types are supported:
         * <p>
         * <ul>
         * <li><code>enus</code>: English.</li>
         * <li><code>zhcn</code>: Simplified Chinese.</li>
         * <li><code>zhhk</code>: Traditional Chinese.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param language Property language: The language of the waiting room page. This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * Property language: The language of the waiting room page.
         * <p>
         * When the waiting room type is the default type, it needs to be passed in. The following types are supported:
         * <p>
         * <ul>
         * <li><code>enus</code>: English.</li>
         * <li><code>zhcn</code>: Simplified Chinese.</li>
         * <li><code>zhhk</code>: Traditional Chinese.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param language Property language: The language of the waiting room page. This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * Property queueAllEnable: Specifies whether to queue all requests.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queueAllEnable Property queueAllEnable: Specifies whether to queue all requests. This parameter is required.
         */
        public Builder queueAllEnable(final java.lang.String queueAllEnable) {
            this.props.queueAllEnable(queueAllEnable);
            return this;
        }
        /**
         * Property queueAllEnable: Specifies whether to queue all requests.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param queueAllEnable Property queueAllEnable: Specifies whether to queue all requests. This parameter is required.
         */
        public Builder queueAllEnable(final com.aliyun.ros.cdk.core.IResolvable queueAllEnable) {
            this.props.queueAllEnable(queueAllEnable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.WaitingRoom}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.WaitingRoom build() {
            return new com.aliyun.ros.cdk.esa.WaitingRoom(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
