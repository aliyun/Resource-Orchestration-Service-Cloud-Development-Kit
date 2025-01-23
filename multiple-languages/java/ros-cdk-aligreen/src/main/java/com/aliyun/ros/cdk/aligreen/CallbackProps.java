package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>Callback</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.307Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.CallbackProps")
@software.amazon.jsii.Jsii.Proxy(CallbackProps.Jsii$Proxy.class)
public interface CallbackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property callbackName: The Callback name defined by the customer.
     * <p>
     * It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCallbackName();

    /**
     * Property callbackSuggestions: List of audit results supported by message notification.
     * <p>
     * Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCallbackSuggestions();

    /**
     * Property callbackTypes: A list of Callback types.
     * <p>
     * Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCallbackTypes();

    /**
     * Property callbackUrl: The detection result will be called back to the url.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCallbackUrl();

    /**
     * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
     * <p>
     * Value: 0:SHA256,1: SM3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCryptType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CallbackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CallbackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CallbackProps> {
        java.lang.Object callbackName;
        java.lang.Object callbackSuggestions;
        java.lang.Object callbackTypes;
        java.lang.Object callbackUrl;
        java.lang.Object cryptType;

        /**
         * Sets the value of {@link CallbackProps#getCallbackName}
         * @param callbackName Property callbackName: The Callback name defined by the customer. This parameter is required.
         *                     It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * @return {@code this}
         */
        public Builder callbackName(java.lang.String callbackName) {
            this.callbackName = callbackName;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackName}
         * @param callbackName Property callbackName: The Callback name defined by the customer. This parameter is required.
         *                     It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * @return {@code this}
         */
        public Builder callbackName(com.aliyun.ros.cdk.core.IResolvable callbackName) {
            this.callbackName = callbackName;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackSuggestions}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         *                            Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * @return {@code this}
         */
        public Builder callbackSuggestions(com.aliyun.ros.cdk.core.IResolvable callbackSuggestions) {
            this.callbackSuggestions = callbackSuggestions;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackSuggestions}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         *                            Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * @return {@code this}
         */
        public Builder callbackSuggestions(java.util.List<? extends java.lang.Object> callbackSuggestions) {
            this.callbackSuggestions = callbackSuggestions;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackTypes}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         *                      Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * @return {@code this}
         */
        public Builder callbackTypes(com.aliyun.ros.cdk.core.IResolvable callbackTypes) {
            this.callbackTypes = callbackTypes;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackTypes}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         *                      Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * @return {@code this}
         */
        public Builder callbackTypes(java.util.List<? extends java.lang.Object> callbackTypes) {
            this.callbackTypes = callbackTypes;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackUrl}
         * @param callbackUrl Property callbackUrl: The detection result will be called back to the url. This parameter is required.
         * @return {@code this}
         */
        public Builder callbackUrl(java.lang.String callbackUrl) {
            this.callbackUrl = callbackUrl;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCallbackUrl}
         * @param callbackUrl Property callbackUrl: The detection result will be called back to the url. This parameter is required.
         * @return {@code this}
         */
        public Builder callbackUrl(com.aliyun.ros.cdk.core.IResolvable callbackUrl) {
            this.callbackUrl = callbackUrl;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCryptType}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
         *                  Value: 0:SHA256,1: SM3.
         * @return {@code this}
         */
        public Builder cryptType(java.lang.Number cryptType) {
            this.cryptType = cryptType;
            return this;
        }

        /**
         * Sets the value of {@link CallbackProps#getCryptType}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
         *                  Value: 0:SHA256,1: SM3.
         * @return {@code this}
         */
        public Builder cryptType(com.aliyun.ros.cdk.core.IResolvable cryptType) {
            this.cryptType = cryptType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CallbackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CallbackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CallbackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CallbackProps {
        private final java.lang.Object callbackName;
        private final java.lang.Object callbackSuggestions;
        private final java.lang.Object callbackTypes;
        private final java.lang.Object callbackUrl;
        private final java.lang.Object cryptType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.callbackName = software.amazon.jsii.Kernel.get(this, "callbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackSuggestions = software.amazon.jsii.Kernel.get(this, "callbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackTypes = software.amazon.jsii.Kernel.get(this, "callbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackUrl = software.amazon.jsii.Kernel.get(this, "callbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cryptType = software.amazon.jsii.Kernel.get(this, "cryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.callbackName = java.util.Objects.requireNonNull(builder.callbackName, "callbackName is required");
            this.callbackSuggestions = java.util.Objects.requireNonNull(builder.callbackSuggestions, "callbackSuggestions is required");
            this.callbackTypes = java.util.Objects.requireNonNull(builder.callbackTypes, "callbackTypes is required");
            this.callbackUrl = java.util.Objects.requireNonNull(builder.callbackUrl, "callbackUrl is required");
            this.cryptType = builder.cryptType;
        }

        @Override
        public final java.lang.Object getCallbackName() {
            return this.callbackName;
        }

        @Override
        public final java.lang.Object getCallbackSuggestions() {
            return this.callbackSuggestions;
        }

        @Override
        public final java.lang.Object getCallbackTypes() {
            return this.callbackTypes;
        }

        @Override
        public final java.lang.Object getCallbackUrl() {
            return this.callbackUrl;
        }

        @Override
        public final java.lang.Object getCryptType() {
            return this.cryptType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("callbackName", om.valueToTree(this.getCallbackName()));
            data.set("callbackSuggestions", om.valueToTree(this.getCallbackSuggestions()));
            data.set("callbackTypes", om.valueToTree(this.getCallbackTypes()));
            data.set("callbackUrl", om.valueToTree(this.getCallbackUrl()));
            if (this.getCryptType() != null) {
                data.set("cryptType", om.valueToTree(this.getCryptType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.CallbackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CallbackProps.Jsii$Proxy that = (CallbackProps.Jsii$Proxy) o;

            if (!callbackName.equals(that.callbackName)) return false;
            if (!callbackSuggestions.equals(that.callbackSuggestions)) return false;
            if (!callbackTypes.equals(that.callbackTypes)) return false;
            if (!callbackUrl.equals(that.callbackUrl)) return false;
            return this.cryptType != null ? this.cryptType.equals(that.cryptType) : that.cryptType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.callbackName.hashCode();
            result = 31 * result + (this.callbackSuggestions.hashCode());
            result = 31 * result + (this.callbackTypes.hashCode());
            result = 31 * result + (this.callbackUrl.hashCode());
            result = 31 * result + (this.cryptType != null ? this.cryptType.hashCode() : 0);
            return result;
        }
    }
}
