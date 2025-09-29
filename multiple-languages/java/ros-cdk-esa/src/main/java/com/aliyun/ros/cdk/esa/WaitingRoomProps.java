package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>WaitingRoom</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoomProps")
@software.amazon.jsii.Jsii.Proxy(WaitingRoomProps.Jsii$Proxy.class)
public interface WaitingRoomProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cookieName: The name of the custom cookie.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCookieName();

    /**
     * Property hostNameAndPath: The hostname and path.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostNameAndPath();

    /**
     * Property newUsersPerMinute: The maximum number of new users per minute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewUsersPerMinute();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueuingMethod();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueuingStatusCode();

    /**
     * Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.
     * <p>
     * Unit: minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSessionDuration();

    /**
     * Property siteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property status: Waiting room enabled status.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>'on': Enable waiting room</li>
     * <li>'off': Disabled waiting room</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

    /**
     * Property totalActiveUsers: The maximum number of active users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTotalActiveUsers();

    /**
     * Property waitingRoomName: The name of the waiting room.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomName();

    /**
     * Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type.
     * <p>
     * <ul>
     * <li><code>custom</code>: indicates a custom type.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomType();

    /**
     * Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
     * <p>
     * The incoming content needs to be base64 encoded.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomPageHtml() {
        return null;
    }

    /**
     * Property description: Waiting room description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableSessionRenewalEnable() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJsonResponseEnable() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueAllEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WaitingRoomProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WaitingRoomProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WaitingRoomProps> {
        java.lang.Object cookieName;
        java.lang.Object hostNameAndPath;
        java.lang.Object newUsersPerMinute;
        java.lang.Object queuingMethod;
        java.lang.Object queuingStatusCode;
        java.lang.Object sessionDuration;
        java.lang.Object siteId;
        java.lang.Object status;
        java.lang.Object totalActiveUsers;
        java.lang.Object waitingRoomName;
        java.lang.Object waitingRoomType;
        java.lang.Object customPageHtml;
        java.lang.Object description;
        java.lang.Object disableSessionRenewalEnable;
        java.lang.Object jsonResponseEnable;
        java.lang.Object language;
        java.lang.Object queueAllEnable;

        /**
         * Sets the value of {@link WaitingRoomProps#getCookieName}
         * @param cookieName Property cookieName: The name of the custom cookie. This parameter is required.
         * @return {@code this}
         */
        public Builder cookieName(java.lang.String cookieName) {
            this.cookieName = cookieName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getCookieName}
         * @param cookieName Property cookieName: The name of the custom cookie. This parameter is required.
         * @return {@code this}
         */
        public Builder cookieName(com.aliyun.ros.cdk.core.IResolvable cookieName) {
            this.cookieName = cookieName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getHostNameAndPath}
         * @param hostNameAndPath Property hostNameAndPath: The hostname and path. This parameter is required.
         * @return {@code this}
         */
        public Builder hostNameAndPath(com.aliyun.ros.cdk.core.IResolvable hostNameAndPath) {
            this.hostNameAndPath = hostNameAndPath;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getHostNameAndPath}
         * @param hostNameAndPath Property hostNameAndPath: The hostname and path. This parameter is required.
         * @return {@code this}
         */
        public Builder hostNameAndPath(java.util.List<? extends java.lang.Object> hostNameAndPath) {
            this.hostNameAndPath = hostNameAndPath;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getNewUsersPerMinute}
         * @param newUsersPerMinute Property newUsersPerMinute: The maximum number of new users per minute. This parameter is required.
         * @return {@code this}
         */
        public Builder newUsersPerMinute(java.lang.Number newUsersPerMinute) {
            this.newUsersPerMinute = newUsersPerMinute;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getNewUsersPerMinute}
         * @param newUsersPerMinute Property newUsersPerMinute: The maximum number of new users per minute. This parameter is required.
         * @return {@code this}
         */
        public Builder newUsersPerMinute(com.aliyun.ros.cdk.core.IResolvable newUsersPerMinute) {
            this.newUsersPerMinute = newUsersPerMinute;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueuingMethod}
         * @param queuingMethod Property queuingMethod: The queuing method. This parameter is required.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li><code>random</code>: Users gain access to the origin randomly, regardless of the arrival time.</li>
         *                      <li><code>fifo</code>: Users gain access to the origin in order of arrival.</li>
         *                      <li><code>Passthrough</code>: Users pass through the waiting room and go straight to the origin.</li>
         *                      <li><code>Reject-all</code>: Users are blocked from reaching the origin.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder queuingMethod(java.lang.String queuingMethod) {
            this.queuingMethod = queuingMethod;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueuingMethod}
         * @param queuingMethod Property queuingMethod: The queuing method. This parameter is required.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li><code>random</code>: Users gain access to the origin randomly, regardless of the arrival time.</li>
         *                      <li><code>fifo</code>: Users gain access to the origin in order of arrival.</li>
         *                      <li><code>Passthrough</code>: Users pass through the waiting room and go straight to the origin.</li>
         *                      <li><code>Reject-all</code>: Users are blocked from reaching the origin.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder queuingMethod(com.aliyun.ros.cdk.core.IResolvable queuingMethod) {
            this.queuingMethod = queuingMethod;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueuingStatusCode}
         * @param queuingStatusCode Property queuingStatusCode: Waiting room status code. This parameter is required.
         *                          Value:
         *                          <p>
         *                          <ul>
         *                          <li><code>200</code></li>
         *                          <li><code>202</code></li>
         *                          <li><code>429</code>.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder queuingStatusCode(java.lang.Number queuingStatusCode) {
            this.queuingStatusCode = queuingStatusCode;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueuingStatusCode}
         * @param queuingStatusCode Property queuingStatusCode: Waiting room status code. This parameter is required.
         *                          Value:
         *                          <p>
         *                          <ul>
         *                          <li><code>200</code></li>
         *                          <li><code>202</code></li>
         *                          <li><code>429</code>.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder queuingStatusCode(com.aliyun.ros.cdk.core.IResolvable queuingStatusCode) {
            this.queuingStatusCode = queuingStatusCode;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getSessionDuration}
         * @param sessionDuration Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. This parameter is required.
         *                        Unit: minutes.
         * @return {@code this}
         */
        public Builder sessionDuration(java.lang.Number sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getSessionDuration}
         * @param sessionDuration Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. This parameter is required.
         *                        Unit: minutes.
         * @return {@code this}
         */
        public Builder sessionDuration(com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getStatus}
         * @param status Property status: Waiting room enabled status. This parameter is required.
         *               Value:
         *               <p>
         *               <ul>
         *               <li>'on': Enable waiting room</li>
         *               <li>'off': Disabled waiting room</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getStatus}
         * @param status Property status: Waiting room enabled status. This parameter is required.
         *               Value:
         *               <p>
         *               <ul>
         *               <li>'on': Enable waiting room</li>
         *               <li>'off': Disabled waiting room</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getTotalActiveUsers}
         * @param totalActiveUsers Property totalActiveUsers: The maximum number of active users. This parameter is required.
         * @return {@code this}
         */
        public Builder totalActiveUsers(java.lang.String totalActiveUsers) {
            this.totalActiveUsers = totalActiveUsers;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getTotalActiveUsers}
         * @param totalActiveUsers Property totalActiveUsers: The maximum number of active users. This parameter is required.
         * @return {@code this}
         */
        public Builder totalActiveUsers(com.aliyun.ros.cdk.core.IResolvable totalActiveUsers) {
            this.totalActiveUsers = totalActiveUsers;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getWaitingRoomName}
         * @param waitingRoomName Property waitingRoomName: The name of the waiting room. This parameter is required.
         * @return {@code this}
         */
        public Builder waitingRoomName(java.lang.String waitingRoomName) {
            this.waitingRoomName = waitingRoomName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getWaitingRoomName}
         * @param waitingRoomName Property waitingRoomName: The name of the waiting room. This parameter is required.
         * @return {@code this}
         */
        public Builder waitingRoomName(com.aliyun.ros.cdk.core.IResolvable waitingRoomName) {
            this.waitingRoomName = waitingRoomName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getWaitingRoomType}
         * @param waitingRoomType Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type. This parameter is required.
         *                        <ul>
         *                        <li><code>custom</code>: indicates a custom type.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder waitingRoomType(java.lang.String waitingRoomType) {
            this.waitingRoomType = waitingRoomType;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getWaitingRoomType}
         * @param waitingRoomType Property waitingRoomType: The type of the waiting room, support: - <code>default</code>: Indicates the default type. This parameter is required.
         *                        <ul>
         *                        <li><code>custom</code>: indicates a custom type.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder waitingRoomType(com.aliyun.ros.cdk.core.IResolvable waitingRoomType) {
            this.waitingRoomType = waitingRoomType;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getCustomPageHtml}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         *                       The incoming content needs to be base64 encoded.
         * @return {@code this}
         */
        public Builder customPageHtml(java.lang.String customPageHtml) {
            this.customPageHtml = customPageHtml;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getCustomPageHtml}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         *                       The incoming content needs to be base64 encoded.
         * @return {@code this}
         */
        public Builder customPageHtml(com.aliyun.ros.cdk.core.IResolvable customPageHtml) {
            this.customPageHtml = customPageHtml;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getDescription}
         * @param description Property description: Waiting room description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getDescription}
         * @param description Property description: Waiting room description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getDisableSessionRenewalEnable}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Specifies whether to disable session renewal.
         *                                    Value:
         *                                    <p>
         *                                    <ul>
         *                                    <li><code>on</code>: open.</li>
         *                                    <li><code>off</code>: closed.</li>
         *                                    </ul>
         * @return {@code this}
         */
        public Builder disableSessionRenewalEnable(java.lang.String disableSessionRenewalEnable) {
            this.disableSessionRenewalEnable = disableSessionRenewalEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getDisableSessionRenewalEnable}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Specifies whether to disable session renewal.
         *                                    Value:
         *                                    <p>
         *                                    <ul>
         *                                    <li><code>on</code>: open.</li>
         *                                    <li><code>off</code>: closed.</li>
         *                                    </ul>
         * @return {@code this}
         */
        public Builder disableSessionRenewalEnable(com.aliyun.ros.cdk.core.IResolvable disableSessionRenewalEnable) {
            this.disableSessionRenewalEnable = disableSessionRenewalEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getJsonResponseEnable}
         * @param jsonResponseEnable Property jsonResponseEnable: The JSON response.
         *                           If the accept request header contains "application/json", JSON data is returned. Value:
         *                           <p>
         *                           <ul>
         *                           <li><code>on</code>: open.</li>
         *                           <li><code>off</code>: closed.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder jsonResponseEnable(java.lang.String jsonResponseEnable) {
            this.jsonResponseEnable = jsonResponseEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getJsonResponseEnable}
         * @param jsonResponseEnable Property jsonResponseEnable: The JSON response.
         *                           If the accept request header contains "application/json", JSON data is returned. Value:
         *                           <p>
         *                           <ul>
         *                           <li><code>on</code>: open.</li>
         *                           <li><code>off</code>: closed.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder jsonResponseEnable(com.aliyun.ros.cdk.core.IResolvable jsonResponseEnable) {
            this.jsonResponseEnable = jsonResponseEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getLanguage}
         * @param language Property language: The language of the waiting room page.
         *                 When the waiting room type is the default type, it needs to be passed in. The following types are supported:
         *                 <p>
         *                 <ul>
         *                 <li><code>enus</code>: English.</li>
         *                 <li><code>zhcn</code>: Simplified Chinese.</li>
         *                 <li><code>zhhk</code>: Traditional Chinese.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder language(java.lang.String language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getLanguage}
         * @param language Property language: The language of the waiting room page.
         *                 When the waiting room type is the default type, it needs to be passed in. The following types are supported:
         *                 <p>
         *                 <ul>
         *                 <li><code>enus</code>: English.</li>
         *                 <li><code>zhcn</code>: Simplified Chinese.</li>
         *                 <li><code>zhhk</code>: Traditional Chinese.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder language(com.aliyun.ros.cdk.core.IResolvable language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueueAllEnable}
         * @param queueAllEnable Property queueAllEnable: Specifies whether to queue all requests.
         *                       Value:
         *                       <p>
         *                       <ul>
         *                       <li><code>on</code>: open.</li>
         *                       <li><code>off</code>: closed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder queueAllEnable(java.lang.String queueAllEnable) {
            this.queueAllEnable = queueAllEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomProps#getQueueAllEnable}
         * @param queueAllEnable Property queueAllEnable: Specifies whether to queue all requests.
         *                       Value:
         *                       <p>
         *                       <ul>
         *                       <li><code>on</code>: open.</li>
         *                       <li><code>off</code>: closed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder queueAllEnable(com.aliyun.ros.cdk.core.IResolvable queueAllEnable) {
            this.queueAllEnable = queueAllEnable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WaitingRoomProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WaitingRoomProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WaitingRoomProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitingRoomProps {
        private final java.lang.Object cookieName;
        private final java.lang.Object hostNameAndPath;
        private final java.lang.Object newUsersPerMinute;
        private final java.lang.Object queuingMethod;
        private final java.lang.Object queuingStatusCode;
        private final java.lang.Object sessionDuration;
        private final java.lang.Object siteId;
        private final java.lang.Object status;
        private final java.lang.Object totalActiveUsers;
        private final java.lang.Object waitingRoomName;
        private final java.lang.Object waitingRoomType;
        private final java.lang.Object customPageHtml;
        private final java.lang.Object description;
        private final java.lang.Object disableSessionRenewalEnable;
        private final java.lang.Object jsonResponseEnable;
        private final java.lang.Object language;
        private final java.lang.Object queueAllEnable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cookieName = software.amazon.jsii.Kernel.get(this, "cookieName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostNameAndPath = software.amazon.jsii.Kernel.get(this, "hostNameAndPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.newUsersPerMinute = software.amazon.jsii.Kernel.get(this, "newUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queuingMethod = software.amazon.jsii.Kernel.get(this, "queuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queuingStatusCode = software.amazon.jsii.Kernel.get(this, "queuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sessionDuration = software.amazon.jsii.Kernel.get(this, "sessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.totalActiveUsers = software.amazon.jsii.Kernel.get(this, "totalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomName = software.amazon.jsii.Kernel.get(this, "waitingRoomName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomType = software.amazon.jsii.Kernel.get(this, "waitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customPageHtml = software.amazon.jsii.Kernel.get(this, "customPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableSessionRenewalEnable = software.amazon.jsii.Kernel.get(this, "disableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jsonResponseEnable = software.amazon.jsii.Kernel.get(this, "jsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueAllEnable = software.amazon.jsii.Kernel.get(this, "queueAllEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cookieName = java.util.Objects.requireNonNull(builder.cookieName, "cookieName is required");
            this.hostNameAndPath = java.util.Objects.requireNonNull(builder.hostNameAndPath, "hostNameAndPath is required");
            this.newUsersPerMinute = java.util.Objects.requireNonNull(builder.newUsersPerMinute, "newUsersPerMinute is required");
            this.queuingMethod = java.util.Objects.requireNonNull(builder.queuingMethod, "queuingMethod is required");
            this.queuingStatusCode = java.util.Objects.requireNonNull(builder.queuingStatusCode, "queuingStatusCode is required");
            this.sessionDuration = java.util.Objects.requireNonNull(builder.sessionDuration, "sessionDuration is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
            this.totalActiveUsers = java.util.Objects.requireNonNull(builder.totalActiveUsers, "totalActiveUsers is required");
            this.waitingRoomName = java.util.Objects.requireNonNull(builder.waitingRoomName, "waitingRoomName is required");
            this.waitingRoomType = java.util.Objects.requireNonNull(builder.waitingRoomType, "waitingRoomType is required");
            this.customPageHtml = builder.customPageHtml;
            this.description = builder.description;
            this.disableSessionRenewalEnable = builder.disableSessionRenewalEnable;
            this.jsonResponseEnable = builder.jsonResponseEnable;
            this.language = builder.language;
            this.queueAllEnable = builder.queueAllEnable;
        }

        @Override
        public final java.lang.Object getCookieName() {
            return this.cookieName;
        }

        @Override
        public final java.lang.Object getHostNameAndPath() {
            return this.hostNameAndPath;
        }

        @Override
        public final java.lang.Object getNewUsersPerMinute() {
            return this.newUsersPerMinute;
        }

        @Override
        public final java.lang.Object getQueuingMethod() {
            return this.queuingMethod;
        }

        @Override
        public final java.lang.Object getQueuingStatusCode() {
            return this.queuingStatusCode;
        }

        @Override
        public final java.lang.Object getSessionDuration() {
            return this.sessionDuration;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getTotalActiveUsers() {
            return this.totalActiveUsers;
        }

        @Override
        public final java.lang.Object getWaitingRoomName() {
            return this.waitingRoomName;
        }

        @Override
        public final java.lang.Object getWaitingRoomType() {
            return this.waitingRoomType;
        }

        @Override
        public final java.lang.Object getCustomPageHtml() {
            return this.customPageHtml;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisableSessionRenewalEnable() {
            return this.disableSessionRenewalEnable;
        }

        @Override
        public final java.lang.Object getJsonResponseEnable() {
            return this.jsonResponseEnable;
        }

        @Override
        public final java.lang.Object getLanguage() {
            return this.language;
        }

        @Override
        public final java.lang.Object getQueueAllEnable() {
            return this.queueAllEnable;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cookieName", om.valueToTree(this.getCookieName()));
            data.set("hostNameAndPath", om.valueToTree(this.getHostNameAndPath()));
            data.set("newUsersPerMinute", om.valueToTree(this.getNewUsersPerMinute()));
            data.set("queuingMethod", om.valueToTree(this.getQueuingMethod()));
            data.set("queuingStatusCode", om.valueToTree(this.getQueuingStatusCode()));
            data.set("sessionDuration", om.valueToTree(this.getSessionDuration()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("status", om.valueToTree(this.getStatus()));
            data.set("totalActiveUsers", om.valueToTree(this.getTotalActiveUsers()));
            data.set("waitingRoomName", om.valueToTree(this.getWaitingRoomName()));
            data.set("waitingRoomType", om.valueToTree(this.getWaitingRoomType()));
            if (this.getCustomPageHtml() != null) {
                data.set("customPageHtml", om.valueToTree(this.getCustomPageHtml()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisableSessionRenewalEnable() != null) {
                data.set("disableSessionRenewalEnable", om.valueToTree(this.getDisableSessionRenewalEnable()));
            }
            if (this.getJsonResponseEnable() != null) {
                data.set("jsonResponseEnable", om.valueToTree(this.getJsonResponseEnable()));
            }
            if (this.getLanguage() != null) {
                data.set("language", om.valueToTree(this.getLanguage()));
            }
            if (this.getQueueAllEnable() != null) {
                data.set("queueAllEnable", om.valueToTree(this.getQueueAllEnable()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.WaitingRoomProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WaitingRoomProps.Jsii$Proxy that = (WaitingRoomProps.Jsii$Proxy) o;

            if (!cookieName.equals(that.cookieName)) return false;
            if (!hostNameAndPath.equals(that.hostNameAndPath)) return false;
            if (!newUsersPerMinute.equals(that.newUsersPerMinute)) return false;
            if (!queuingMethod.equals(that.queuingMethod)) return false;
            if (!queuingStatusCode.equals(that.queuingStatusCode)) return false;
            if (!sessionDuration.equals(that.sessionDuration)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (!status.equals(that.status)) return false;
            if (!totalActiveUsers.equals(that.totalActiveUsers)) return false;
            if (!waitingRoomName.equals(that.waitingRoomName)) return false;
            if (!waitingRoomType.equals(that.waitingRoomType)) return false;
            if (this.customPageHtml != null ? !this.customPageHtml.equals(that.customPageHtml) : that.customPageHtml != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.disableSessionRenewalEnable != null ? !this.disableSessionRenewalEnable.equals(that.disableSessionRenewalEnable) : that.disableSessionRenewalEnable != null) return false;
            if (this.jsonResponseEnable != null ? !this.jsonResponseEnable.equals(that.jsonResponseEnable) : that.jsonResponseEnable != null) return false;
            if (this.language != null ? !this.language.equals(that.language) : that.language != null) return false;
            return this.queueAllEnable != null ? this.queueAllEnable.equals(that.queueAllEnable) : that.queueAllEnable == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cookieName.hashCode();
            result = 31 * result + (this.hostNameAndPath.hashCode());
            result = 31 * result + (this.newUsersPerMinute.hashCode());
            result = 31 * result + (this.queuingMethod.hashCode());
            result = 31 * result + (this.queuingStatusCode.hashCode());
            result = 31 * result + (this.sessionDuration.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.status.hashCode());
            result = 31 * result + (this.totalActiveUsers.hashCode());
            result = 31 * result + (this.waitingRoomName.hashCode());
            result = 31 * result + (this.waitingRoomType.hashCode());
            result = 31 * result + (this.customPageHtml != null ? this.customPageHtml.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.disableSessionRenewalEnable != null ? this.disableSessionRenewalEnable.hashCode() : 0);
            result = 31 * result + (this.jsonResponseEnable != null ? this.jsonResponseEnable.hashCode() : 0);
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            result = 31 * result + (this.queueAllEnable != null ? this.queueAllEnable.hashCode() : 0);
            return result;
        }
    }
}
