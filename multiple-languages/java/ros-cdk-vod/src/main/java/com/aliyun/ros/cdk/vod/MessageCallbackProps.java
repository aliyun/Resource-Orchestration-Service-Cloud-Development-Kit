package com.aliyun.ros.cdk.vod;

/**
 * Properties for defining a <code>MessageCallback</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.080Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.MessageCallbackProps")
@software.amazon.jsii.Jsii.Proxy(MessageCallbackProps.Jsii$Proxy.class)
public interface MessageCallbackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property callbackType: Callback method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCallbackType();

    /**
     * Property appId: App ID.
     * <p>
     * If it is not passed, it is the ID of the default
     * application of the system, with a fixed value: app-1000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppId() {
        return null;
    }

    /**
     * Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
     * <p>
     * This parameter can be set when the callback method is HTTP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthKey() {
        return null;
    }

    /**
     * Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthSwitch() {
        return null;
    }

    /**
     * Property callbackUrl: Callback address.
     * <p>
     * When the callback method is HTTP,
     * this parameter needs to be set. The length of the callback address
     * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCallbackUrl() {
        return null;
    }

    /**
     * Property eventTypeList: Callback event type.
     * <p>
     * When the value is empty, all message notifications are turned off,
     * and when the value is ALL, all message notifications are turned on.
     * You can also specify to enable certain message notifications,
     * and use a comma (,) to separate multiple event types.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventTypeList() {
        return null;
    }

    /**
     * Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
     * <p>
     * You can log in to the message service
     * console and click the Get Endpoint button in the upper right corner to get it.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMnsEndpoint() {
        return null;
    }

    /**
     * Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
     * <p>
     * When the callback method is MNS, this parameter needs to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMnsQueueName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MessageCallbackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MessageCallbackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MessageCallbackProps> {
        java.lang.Object callbackType;
        java.lang.Object appId;
        java.lang.Object authKey;
        java.lang.Object authSwitch;
        java.lang.Object callbackUrl;
        java.lang.Object eventTypeList;
        java.lang.Object mnsEndpoint;
        java.lang.Object mnsQueueName;

        /**
         * Sets the value of {@link MessageCallbackProps#getCallbackType}
         * @param callbackType Property callbackType: Callback method. This parameter is required.
         * @return {@code this}
         */
        public Builder callbackType(java.lang.String callbackType) {
            this.callbackType = callbackType;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getCallbackType}
         * @param callbackType Property callbackType: Callback method. This parameter is required.
         * @return {@code this}
         */
        public Builder callbackType(com.aliyun.ros.cdk.core.IResolvable callbackType) {
            this.callbackType = callbackType;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAppId}
         * @param appId Property appId: App ID.
         *              If it is not passed, it is the ID of the default
         *              application of the system, with a fixed value: app-1000000.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAppId}
         * @param appId Property appId: App ID.
         *              If it is not passed, it is the ID of the default
         *              application of the system, with a fixed value: app-1000000.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAuthKey}
         * @param authKey Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
         *                This parameter can be set when the callback method is HTTP.
         * @return {@code this}
         */
        public Builder authKey(java.lang.String authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAuthKey}
         * @param authKey Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
         *                This parameter can be set when the callback method is HTTP.
         * @return {@code this}
         */
        public Builder authKey(com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAuthSwitch}
         * @param authSwitch Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
         * @return {@code this}
         */
        public Builder authSwitch(java.lang.String authSwitch) {
            this.authSwitch = authSwitch;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getAuthSwitch}
         * @param authSwitch Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
         * @return {@code this}
         */
        public Builder authSwitch(com.aliyun.ros.cdk.core.IResolvable authSwitch) {
            this.authSwitch = authSwitch;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getCallbackUrl}
         * @param callbackUrl Property callbackUrl: Callback address.
         *                    When the callback method is HTTP,
         *                    this parameter needs to be set. The length of the callback address
         *                    URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
         * @return {@code this}
         */
        public Builder callbackUrl(java.lang.String callbackUrl) {
            this.callbackUrl = callbackUrl;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getCallbackUrl}
         * @param callbackUrl Property callbackUrl: Callback address.
         *                    When the callback method is HTTP,
         *                    this parameter needs to be set. The length of the callback address
         *                    URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
         * @return {@code this}
         */
        public Builder callbackUrl(com.aliyun.ros.cdk.core.IResolvable callbackUrl) {
            this.callbackUrl = callbackUrl;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getEventTypeList}
         * @param eventTypeList Property eventTypeList: Callback event type.
         *                      When the value is empty, all message notifications are turned off,
         *                      and when the value is ALL, all message notifications are turned on.
         *                      You can also specify to enable certain message notifications,
         *                      and use a comma (,) to separate multiple event types.
         * @return {@code this}
         */
        public Builder eventTypeList(java.lang.String eventTypeList) {
            this.eventTypeList = eventTypeList;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getEventTypeList}
         * @param eventTypeList Property eventTypeList: Callback event type.
         *                      When the value is empty, all message notifications are turned off,
         *                      and when the value is ALL, all message notifications are turned on.
         *                      You can also specify to enable certain message notifications,
         *                      and use a comma (,) to separate multiple event types.
         * @return {@code this}
         */
        public Builder eventTypeList(com.aliyun.ros.cdk.core.IResolvable eventTypeList) {
            this.eventTypeList = eventTypeList;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getMnsEndpoint}
         * @param mnsEndpoint Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
         *                    You can log in to the message service
         *                    console and click the Get Endpoint button in the upper right corner to get it.
         * @return {@code this}
         */
        public Builder mnsEndpoint(java.lang.String mnsEndpoint) {
            this.mnsEndpoint = mnsEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getMnsEndpoint}
         * @param mnsEndpoint Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
         *                    You can log in to the message service
         *                    console and click the Get Endpoint button in the upper right corner to get it.
         * @return {@code this}
         */
        public Builder mnsEndpoint(com.aliyun.ros.cdk.core.IResolvable mnsEndpoint) {
            this.mnsEndpoint = mnsEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getMnsQueueName}
         * @param mnsQueueName Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
         *                     When the callback method is MNS, this parameter needs to be set.
         * @return {@code this}
         */
        public Builder mnsQueueName(java.lang.String mnsQueueName) {
            this.mnsQueueName = mnsQueueName;
            return this;
        }

        /**
         * Sets the value of {@link MessageCallbackProps#getMnsQueueName}
         * @param mnsQueueName Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
         *                     When the callback method is MNS, this parameter needs to be set.
         * @return {@code this}
         */
        public Builder mnsQueueName(com.aliyun.ros.cdk.core.IResolvable mnsQueueName) {
            this.mnsQueueName = mnsQueueName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MessageCallbackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MessageCallbackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MessageCallbackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MessageCallbackProps {
        private final java.lang.Object callbackType;
        private final java.lang.Object appId;
        private final java.lang.Object authKey;
        private final java.lang.Object authSwitch;
        private final java.lang.Object callbackUrl;
        private final java.lang.Object eventTypeList;
        private final java.lang.Object mnsEndpoint;
        private final java.lang.Object mnsQueueName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.callbackType = software.amazon.jsii.Kernel.get(this, "callbackType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authKey = software.amazon.jsii.Kernel.get(this, "authKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authSwitch = software.amazon.jsii.Kernel.get(this, "authSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackUrl = software.amazon.jsii.Kernel.get(this, "callbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventTypeList = software.amazon.jsii.Kernel.get(this, "eventTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mnsEndpoint = software.amazon.jsii.Kernel.get(this, "mnsEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mnsQueueName = software.amazon.jsii.Kernel.get(this, "mnsQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.callbackType = java.util.Objects.requireNonNull(builder.callbackType, "callbackType is required");
            this.appId = builder.appId;
            this.authKey = builder.authKey;
            this.authSwitch = builder.authSwitch;
            this.callbackUrl = builder.callbackUrl;
            this.eventTypeList = builder.eventTypeList;
            this.mnsEndpoint = builder.mnsEndpoint;
            this.mnsQueueName = builder.mnsQueueName;
        }

        @Override
        public final java.lang.Object getCallbackType() {
            return this.callbackType;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getAuthKey() {
            return this.authKey;
        }

        @Override
        public final java.lang.Object getAuthSwitch() {
            return this.authSwitch;
        }

        @Override
        public final java.lang.Object getCallbackUrl() {
            return this.callbackUrl;
        }

        @Override
        public final java.lang.Object getEventTypeList() {
            return this.eventTypeList;
        }

        @Override
        public final java.lang.Object getMnsEndpoint() {
            return this.mnsEndpoint;
        }

        @Override
        public final java.lang.Object getMnsQueueName() {
            return this.mnsQueueName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("callbackType", om.valueToTree(this.getCallbackType()));
            if (this.getAppId() != null) {
                data.set("appId", om.valueToTree(this.getAppId()));
            }
            if (this.getAuthKey() != null) {
                data.set("authKey", om.valueToTree(this.getAuthKey()));
            }
            if (this.getAuthSwitch() != null) {
                data.set("authSwitch", om.valueToTree(this.getAuthSwitch()));
            }
            if (this.getCallbackUrl() != null) {
                data.set("callbackUrl", om.valueToTree(this.getCallbackUrl()));
            }
            if (this.getEventTypeList() != null) {
                data.set("eventTypeList", om.valueToTree(this.getEventTypeList()));
            }
            if (this.getMnsEndpoint() != null) {
                data.set("mnsEndpoint", om.valueToTree(this.getMnsEndpoint()));
            }
            if (this.getMnsQueueName() != null) {
                data.set("mnsQueueName", om.valueToTree(this.getMnsQueueName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vod.MessageCallbackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MessageCallbackProps.Jsii$Proxy that = (MessageCallbackProps.Jsii$Proxy) o;

            if (!callbackType.equals(that.callbackType)) return false;
            if (this.appId != null ? !this.appId.equals(that.appId) : that.appId != null) return false;
            if (this.authKey != null ? !this.authKey.equals(that.authKey) : that.authKey != null) return false;
            if (this.authSwitch != null ? !this.authSwitch.equals(that.authSwitch) : that.authSwitch != null) return false;
            if (this.callbackUrl != null ? !this.callbackUrl.equals(that.callbackUrl) : that.callbackUrl != null) return false;
            if (this.eventTypeList != null ? !this.eventTypeList.equals(that.eventTypeList) : that.eventTypeList != null) return false;
            if (this.mnsEndpoint != null ? !this.mnsEndpoint.equals(that.mnsEndpoint) : that.mnsEndpoint != null) return false;
            return this.mnsQueueName != null ? this.mnsQueueName.equals(that.mnsQueueName) : that.mnsQueueName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.callbackType.hashCode();
            result = 31 * result + (this.appId != null ? this.appId.hashCode() : 0);
            result = 31 * result + (this.authKey != null ? this.authKey.hashCode() : 0);
            result = 31 * result + (this.authSwitch != null ? this.authSwitch.hashCode() : 0);
            result = 31 * result + (this.callbackUrl != null ? this.callbackUrl.hashCode() : 0);
            result = 31 * result + (this.eventTypeList != null ? this.eventTypeList.hashCode() : 0);
            result = 31 * result + (this.mnsEndpoint != null ? this.mnsEndpoint.hashCode() : 0);
            result = 31 * result + (this.mnsQueueName != null ? this.mnsQueueName.hashCode() : 0);
            return result;
        }
    }
}
