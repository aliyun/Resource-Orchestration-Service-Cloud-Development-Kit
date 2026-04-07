package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>WaitingRoomEvent</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.348Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoomEventProps")
@software.amazon.jsii.Jsii.Proxy(WaitingRoomEventProps.Jsii$Proxy.class)
public interface WaitingRoomEventProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endTime: The timestamp of the end time of the event.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndTime();

    /**
     * Property newUsersPerMinute: Number of new users per minute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewUsersPerMinute();

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
     * Property sessionDuration: User session duration in minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSessionDuration();

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property startTime: The timestamp of the event start time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartTime();

    /**
     * Property totalActiveUsers: Total number of active users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTotalActiveUsers();

    /**
     * Property waitingRoomEventName: Event name, custom event description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomEventName();

    /**
     * Property waitingRoomType: Waiting room type.
     * <p>
     * The following types are supported:
     * <p>
     * <ul>
     * <li><code>default</code>: the default type.</li>
     * <li><code>custom</code>: custom type.</li>
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
     * Property disableSessionRenewalEnable: Disable session renewal.
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
     * Property jsonResponseEnable: JSON response switch.
     * <p>
     * Value:
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
     * Property language: Default language setting.
     * <p>
     * Values include:
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
     * Property preQueueEnable: Pre-queue switch.
     * <p>
     * <ul>
     * <li><code>on</code>: open.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreQueueEnable() {
        return null;
    }

    /**
     * Property preQueueStartTime: Pre-queue start time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreQueueStartTime() {
        return null;
    }

    /**
     * Property randomPreQueueEnable: Random queue switch.
     * <p>
     * <ul>
     * <li><code>on</code>: open.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRandomPreQueueEnable() {
        return null;
    }

    /**
     * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
     * <p>
     * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWaitingRoomId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WaitingRoomEventProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WaitingRoomEventProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WaitingRoomEventProps> {
        java.lang.Object endTime;
        java.lang.Object newUsersPerMinute;
        java.lang.Object queuingMethod;
        java.lang.Object queuingStatusCode;
        java.lang.Object sessionDuration;
        java.lang.Object siteId;
        java.lang.Object startTime;
        java.lang.Object totalActiveUsers;
        java.lang.Object waitingRoomEventName;
        java.lang.Object waitingRoomType;
        java.lang.Object customPageHtml;
        java.lang.Object description;
        java.lang.Object disableSessionRenewalEnable;
        java.lang.Object jsonResponseEnable;
        java.lang.Object language;
        java.lang.Object preQueueEnable;
        java.lang.Object preQueueStartTime;
        java.lang.Object randomPreQueueEnable;
        java.lang.Object waitingRoomId;

        /**
         * Sets the value of {@link WaitingRoomEventProps#getEndTime}
         * @param endTime Property endTime: The timestamp of the end time of the event. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getEndTime}
         * @param endTime Property endTime: The timestamp of the end time of the event. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getNewUsersPerMinute}
         * @param newUsersPerMinute Property newUsersPerMinute: Number of new users per minute. This parameter is required.
         * @return {@code this}
         */
        public Builder newUsersPerMinute(java.lang.Number newUsersPerMinute) {
            this.newUsersPerMinute = newUsersPerMinute;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getNewUsersPerMinute}
         * @param newUsersPerMinute Property newUsersPerMinute: Number of new users per minute. This parameter is required.
         * @return {@code this}
         */
        public Builder newUsersPerMinute(com.aliyun.ros.cdk.core.IResolvable newUsersPerMinute) {
            this.newUsersPerMinute = newUsersPerMinute;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getQueuingMethod}
         * @param queuingMethod Property queuingMethod: Way of queuing. This parameter is required.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li><code>random</code>: random.</li>
         *                      <li><code>fifo</code>: first in, first out.</li>
         *                      <li><code>passthrough</code>: through.</li>
         *                      <li><code>reject-all</code>: reject all.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder queuingMethod(java.lang.String queuingMethod) {
            this.queuingMethod = queuingMethod;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getQueuingMethod}
         * @param queuingMethod Property queuingMethod: Way of queuing. This parameter is required.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li><code>random</code>: random.</li>
         *                      <li><code>fifo</code>: first in, first out.</li>
         *                      <li><code>passthrough</code>: through.</li>
         *                      <li><code>reject-all</code>: reject all.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder queuingMethod(com.aliyun.ros.cdk.core.IResolvable queuingMethod) {
            this.queuingMethod = queuingMethod;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getQueuingStatusCode}
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
        public Builder queuingStatusCode(java.lang.String queuingStatusCode) {
            this.queuingStatusCode = queuingStatusCode;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getQueuingStatusCode}
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
         * Sets the value of {@link WaitingRoomEventProps#getSessionDuration}
         * @param sessionDuration Property sessionDuration: User session duration in minutes. This parameter is required.
         * @return {@code this}
         */
        public Builder sessionDuration(java.lang.Number sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getSessionDuration}
         * @param sessionDuration Property sessionDuration: User session duration in minutes. This parameter is required.
         * @return {@code this}
         */
        public Builder sessionDuration(com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getStartTime}
         * @param startTime Property startTime: The timestamp of the event start time. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getStartTime}
         * @param startTime Property startTime: The timestamp of the event start time. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getTotalActiveUsers}
         * @param totalActiveUsers Property totalActiveUsers: Total number of active users. This parameter is required.
         * @return {@code this}
         */
        public Builder totalActiveUsers(java.lang.Number totalActiveUsers) {
            this.totalActiveUsers = totalActiveUsers;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getTotalActiveUsers}
         * @param totalActiveUsers Property totalActiveUsers: Total number of active users. This parameter is required.
         * @return {@code this}
         */
        public Builder totalActiveUsers(com.aliyun.ros.cdk.core.IResolvable totalActiveUsers) {
            this.totalActiveUsers = totalActiveUsers;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomEventName}
         * @param waitingRoomEventName Property waitingRoomEventName: Event name, custom event description. This parameter is required.
         * @return {@code this}
         */
        public Builder waitingRoomEventName(java.lang.String waitingRoomEventName) {
            this.waitingRoomEventName = waitingRoomEventName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomEventName}
         * @param waitingRoomEventName Property waitingRoomEventName: Event name, custom event description. This parameter is required.
         * @return {@code this}
         */
        public Builder waitingRoomEventName(com.aliyun.ros.cdk.core.IResolvable waitingRoomEventName) {
            this.waitingRoomEventName = waitingRoomEventName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomType}
         * @param waitingRoomType Property waitingRoomType: Waiting room type. This parameter is required.
         *                        The following types are supported:
         *                        <p>
         *                        <ul>
         *                        <li><code>default</code>: the default type.</li>
         *                        <li><code>custom</code>: custom type.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder waitingRoomType(java.lang.String waitingRoomType) {
            this.waitingRoomType = waitingRoomType;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomType}
         * @param waitingRoomType Property waitingRoomType: Waiting room type. This parameter is required.
         *                        The following types are supported:
         *                        <p>
         *                        <ul>
         *                        <li><code>default</code>: the default type.</li>
         *                        <li><code>custom</code>: custom type.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder waitingRoomType(com.aliyun.ros.cdk.core.IResolvable waitingRoomType) {
            this.waitingRoomType = waitingRoomType;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getCustomPageHtml}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         *                       The incoming content needs to be base64 encoded.
         * @return {@code this}
         */
        public Builder customPageHtml(java.lang.String customPageHtml) {
            this.customPageHtml = customPageHtml;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getCustomPageHtml}
         * @param customPageHtml Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
         *                       The incoming content needs to be base64 encoded.
         * @return {@code this}
         */
        public Builder customPageHtml(com.aliyun.ros.cdk.core.IResolvable customPageHtml) {
            this.customPageHtml = customPageHtml;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getDescription}
         * @param description Property description: Waiting room description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getDescription}
         * @param description Property description: Waiting room description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getDisableSessionRenewalEnable}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Disable session renewal.
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
         * Sets the value of {@link WaitingRoomEventProps#getDisableSessionRenewalEnable}
         * @param disableSessionRenewalEnable Property disableSessionRenewalEnable: Disable session renewal.
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
         * Sets the value of {@link WaitingRoomEventProps#getJsonResponseEnable}
         * @param jsonResponseEnable Property jsonResponseEnable: JSON response switch.
         *                           Value:
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
         * Sets the value of {@link WaitingRoomEventProps#getJsonResponseEnable}
         * @param jsonResponseEnable Property jsonResponseEnable: JSON response switch.
         *                           Value:
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
         * Sets the value of {@link WaitingRoomEventProps#getLanguage}
         * @param language Property language: Default language setting.
         *                 Values include:
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
         * Sets the value of {@link WaitingRoomEventProps#getLanguage}
         * @param language Property language: Default language setting.
         *                 Values include:
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
         * Sets the value of {@link WaitingRoomEventProps#getPreQueueEnable}
         * @param preQueueEnable Property preQueueEnable: Pre-queue switch.
         *                       <ul>
         *                       <li><code>on</code>: open.</li>
         *                       <li><code>off</code>: closed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder preQueueEnable(java.lang.String preQueueEnable) {
            this.preQueueEnable = preQueueEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getPreQueueEnable}
         * @param preQueueEnable Property preQueueEnable: Pre-queue switch.
         *                       <ul>
         *                       <li><code>on</code>: open.</li>
         *                       <li><code>off</code>: closed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder preQueueEnable(com.aliyun.ros.cdk.core.IResolvable preQueueEnable) {
            this.preQueueEnable = preQueueEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getPreQueueStartTime}
         * @param preQueueStartTime Property preQueueStartTime: Pre-queue start time.
         * @return {@code this}
         */
        public Builder preQueueStartTime(java.lang.String preQueueStartTime) {
            this.preQueueStartTime = preQueueStartTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getPreQueueStartTime}
         * @param preQueueStartTime Property preQueueStartTime: Pre-queue start time.
         * @return {@code this}
         */
        public Builder preQueueStartTime(com.aliyun.ros.cdk.core.IResolvable preQueueStartTime) {
            this.preQueueStartTime = preQueueStartTime;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getRandomPreQueueEnable}
         * @param randomPreQueueEnable Property randomPreQueueEnable: Random queue switch.
         *                             <ul>
         *                             <li><code>on</code>: open.</li>
         *                             <li><code>off</code>: closed.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder randomPreQueueEnable(java.lang.String randomPreQueueEnable) {
            this.randomPreQueueEnable = randomPreQueueEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getRandomPreQueueEnable}
         * @param randomPreQueueEnable Property randomPreQueueEnable: Random queue switch.
         *                             <ul>
         *                             <li><code>on</code>: open.</li>
         *                             <li><code>off</code>: closed.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder randomPreQueueEnable(com.aliyun.ros.cdk.core.IResolvable randomPreQueueEnable) {
            this.randomPreQueueEnable = randomPreQueueEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomId}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         *                      It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * @return {@code this}
         */
        public Builder waitingRoomId(java.lang.String waitingRoomId) {
            this.waitingRoomId = waitingRoomId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomEventProps#getWaitingRoomId}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         *                      It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * @return {@code this}
         */
        public Builder waitingRoomId(com.aliyun.ros.cdk.core.IResolvable waitingRoomId) {
            this.waitingRoomId = waitingRoomId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WaitingRoomEventProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WaitingRoomEventProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WaitingRoomEventProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitingRoomEventProps {
        private final java.lang.Object endTime;
        private final java.lang.Object newUsersPerMinute;
        private final java.lang.Object queuingMethod;
        private final java.lang.Object queuingStatusCode;
        private final java.lang.Object sessionDuration;
        private final java.lang.Object siteId;
        private final java.lang.Object startTime;
        private final java.lang.Object totalActiveUsers;
        private final java.lang.Object waitingRoomEventName;
        private final java.lang.Object waitingRoomType;
        private final java.lang.Object customPageHtml;
        private final java.lang.Object description;
        private final java.lang.Object disableSessionRenewalEnable;
        private final java.lang.Object jsonResponseEnable;
        private final java.lang.Object language;
        private final java.lang.Object preQueueEnable;
        private final java.lang.Object preQueueStartTime;
        private final java.lang.Object randomPreQueueEnable;
        private final java.lang.Object waitingRoomId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.newUsersPerMinute = software.amazon.jsii.Kernel.get(this, "newUsersPerMinute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queuingMethod = software.amazon.jsii.Kernel.get(this, "queuingMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queuingStatusCode = software.amazon.jsii.Kernel.get(this, "queuingStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sessionDuration = software.amazon.jsii.Kernel.get(this, "sessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.totalActiveUsers = software.amazon.jsii.Kernel.get(this, "totalActiveUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomEventName = software.amazon.jsii.Kernel.get(this, "waitingRoomEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomType = software.amazon.jsii.Kernel.get(this, "waitingRoomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customPageHtml = software.amazon.jsii.Kernel.get(this, "customPageHtml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableSessionRenewalEnable = software.amazon.jsii.Kernel.get(this, "disableSessionRenewalEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jsonResponseEnable = software.amazon.jsii.Kernel.get(this, "jsonResponseEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preQueueEnable = software.amazon.jsii.Kernel.get(this, "preQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preQueueStartTime = software.amazon.jsii.Kernel.get(this, "preQueueStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.randomPreQueueEnable = software.amazon.jsii.Kernel.get(this, "randomPreQueueEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomId = software.amazon.jsii.Kernel.get(this, "waitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endTime = java.util.Objects.requireNonNull(builder.endTime, "endTime is required");
            this.newUsersPerMinute = java.util.Objects.requireNonNull(builder.newUsersPerMinute, "newUsersPerMinute is required");
            this.queuingMethod = java.util.Objects.requireNonNull(builder.queuingMethod, "queuingMethod is required");
            this.queuingStatusCode = java.util.Objects.requireNonNull(builder.queuingStatusCode, "queuingStatusCode is required");
            this.sessionDuration = java.util.Objects.requireNonNull(builder.sessionDuration, "sessionDuration is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.startTime = java.util.Objects.requireNonNull(builder.startTime, "startTime is required");
            this.totalActiveUsers = java.util.Objects.requireNonNull(builder.totalActiveUsers, "totalActiveUsers is required");
            this.waitingRoomEventName = java.util.Objects.requireNonNull(builder.waitingRoomEventName, "waitingRoomEventName is required");
            this.waitingRoomType = java.util.Objects.requireNonNull(builder.waitingRoomType, "waitingRoomType is required");
            this.customPageHtml = builder.customPageHtml;
            this.description = builder.description;
            this.disableSessionRenewalEnable = builder.disableSessionRenewalEnable;
            this.jsonResponseEnable = builder.jsonResponseEnable;
            this.language = builder.language;
            this.preQueueEnable = builder.preQueueEnable;
            this.preQueueStartTime = builder.preQueueStartTime;
            this.randomPreQueueEnable = builder.randomPreQueueEnable;
            this.waitingRoomId = builder.waitingRoomId;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
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
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        public final java.lang.Object getTotalActiveUsers() {
            return this.totalActiveUsers;
        }

        @Override
        public final java.lang.Object getWaitingRoomEventName() {
            return this.waitingRoomEventName;
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
        public final java.lang.Object getPreQueueEnable() {
            return this.preQueueEnable;
        }

        @Override
        public final java.lang.Object getPreQueueStartTime() {
            return this.preQueueStartTime;
        }

        @Override
        public final java.lang.Object getRandomPreQueueEnable() {
            return this.randomPreQueueEnable;
        }

        @Override
        public final java.lang.Object getWaitingRoomId() {
            return this.waitingRoomId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endTime", om.valueToTree(this.getEndTime()));
            data.set("newUsersPerMinute", om.valueToTree(this.getNewUsersPerMinute()));
            data.set("queuingMethod", om.valueToTree(this.getQueuingMethod()));
            data.set("queuingStatusCode", om.valueToTree(this.getQueuingStatusCode()));
            data.set("sessionDuration", om.valueToTree(this.getSessionDuration()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("startTime", om.valueToTree(this.getStartTime()));
            data.set("totalActiveUsers", om.valueToTree(this.getTotalActiveUsers()));
            data.set("waitingRoomEventName", om.valueToTree(this.getWaitingRoomEventName()));
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
            if (this.getPreQueueEnable() != null) {
                data.set("preQueueEnable", om.valueToTree(this.getPreQueueEnable()));
            }
            if (this.getPreQueueStartTime() != null) {
                data.set("preQueueStartTime", om.valueToTree(this.getPreQueueStartTime()));
            }
            if (this.getRandomPreQueueEnable() != null) {
                data.set("randomPreQueueEnable", om.valueToTree(this.getRandomPreQueueEnable()));
            }
            if (this.getWaitingRoomId() != null) {
                data.set("waitingRoomId", om.valueToTree(this.getWaitingRoomId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.WaitingRoomEventProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WaitingRoomEventProps.Jsii$Proxy that = (WaitingRoomEventProps.Jsii$Proxy) o;

            if (!endTime.equals(that.endTime)) return false;
            if (!newUsersPerMinute.equals(that.newUsersPerMinute)) return false;
            if (!queuingMethod.equals(that.queuingMethod)) return false;
            if (!queuingStatusCode.equals(that.queuingStatusCode)) return false;
            if (!sessionDuration.equals(that.sessionDuration)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (!startTime.equals(that.startTime)) return false;
            if (!totalActiveUsers.equals(that.totalActiveUsers)) return false;
            if (!waitingRoomEventName.equals(that.waitingRoomEventName)) return false;
            if (!waitingRoomType.equals(that.waitingRoomType)) return false;
            if (this.customPageHtml != null ? !this.customPageHtml.equals(that.customPageHtml) : that.customPageHtml != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.disableSessionRenewalEnable != null ? !this.disableSessionRenewalEnable.equals(that.disableSessionRenewalEnable) : that.disableSessionRenewalEnable != null) return false;
            if (this.jsonResponseEnable != null ? !this.jsonResponseEnable.equals(that.jsonResponseEnable) : that.jsonResponseEnable != null) return false;
            if (this.language != null ? !this.language.equals(that.language) : that.language != null) return false;
            if (this.preQueueEnable != null ? !this.preQueueEnable.equals(that.preQueueEnable) : that.preQueueEnable != null) return false;
            if (this.preQueueStartTime != null ? !this.preQueueStartTime.equals(that.preQueueStartTime) : that.preQueueStartTime != null) return false;
            if (this.randomPreQueueEnable != null ? !this.randomPreQueueEnable.equals(that.randomPreQueueEnable) : that.randomPreQueueEnable != null) return false;
            return this.waitingRoomId != null ? this.waitingRoomId.equals(that.waitingRoomId) : that.waitingRoomId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endTime.hashCode();
            result = 31 * result + (this.newUsersPerMinute.hashCode());
            result = 31 * result + (this.queuingMethod.hashCode());
            result = 31 * result + (this.queuingStatusCode.hashCode());
            result = 31 * result + (this.sessionDuration.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.startTime.hashCode());
            result = 31 * result + (this.totalActiveUsers.hashCode());
            result = 31 * result + (this.waitingRoomEventName.hashCode());
            result = 31 * result + (this.waitingRoomType.hashCode());
            result = 31 * result + (this.customPageHtml != null ? this.customPageHtml.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.disableSessionRenewalEnable != null ? this.disableSessionRenewalEnable.hashCode() : 0);
            result = 31 * result + (this.jsonResponseEnable != null ? this.jsonResponseEnable.hashCode() : 0);
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            result = 31 * result + (this.preQueueEnable != null ? this.preQueueEnable.hashCode() : 0);
            result = 31 * result + (this.preQueueStartTime != null ? this.preQueueStartTime.hashCode() : 0);
            result = 31 * result + (this.randomPreQueueEnable != null ? this.randomPreQueueEnable.hashCode() : 0);
            result = 31 * result + (this.waitingRoomId != null ? this.waitingRoomId.hashCode() : 0);
            return result;
        }
    }
}
