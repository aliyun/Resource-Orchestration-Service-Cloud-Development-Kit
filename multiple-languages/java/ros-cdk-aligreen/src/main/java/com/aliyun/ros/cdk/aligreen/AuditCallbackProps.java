package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>AuditCallback</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.AuditCallbackProps")
@software.amazon.jsii.Jsii.Proxy(AuditCallbackProps.Jsii$Proxy.class)
public interface AuditCallbackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property auditCallbackName: The AuditCallback name defined by the customer.
     * <p>
     * It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuditCallbackName();

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
     * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     * <p>
     * The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCryptType();

    /**
     * Property url: The detection result will be called back to the url.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUrl();

    /**
     * @return a {@link Builder} of {@link AuditCallbackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AuditCallbackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AuditCallbackProps> {
        java.lang.Object auditCallbackName;
        java.lang.Object callbackSuggestions;
        java.lang.Object callbackTypes;
        java.lang.Object cryptType;
        java.lang.Object url;

        /**
         * Sets the value of {@link AuditCallbackProps#getAuditCallbackName}
         * @param auditCallbackName Property auditCallbackName: The AuditCallback name defined by the customer. This parameter is required.
         *                          It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * @return {@code this}
         */
        public Builder auditCallbackName(java.lang.String auditCallbackName) {
            this.auditCallbackName = auditCallbackName;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getAuditCallbackName}
         * @param auditCallbackName Property auditCallbackName: The AuditCallback name defined by the customer. This parameter is required.
         *                          It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * @return {@code this}
         */
        public Builder auditCallbackName(com.aliyun.ros.cdk.core.IResolvable auditCallbackName) {
            this.auditCallbackName = auditCallbackName;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCallbackSuggestions}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         *                            Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * @return {@code this}
         */
        public Builder callbackSuggestions(com.aliyun.ros.cdk.core.IResolvable callbackSuggestions) {
            this.callbackSuggestions = callbackSuggestions;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCallbackSuggestions}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         *                            Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * @return {@code this}
         */
        public Builder callbackSuggestions(java.util.List<? extends java.lang.Object> callbackSuggestions) {
            this.callbackSuggestions = callbackSuggestions;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCallbackTypes}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         *                      Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * @return {@code this}
         */
        public Builder callbackTypes(com.aliyun.ros.cdk.core.IResolvable callbackTypes) {
            this.callbackTypes = callbackTypes;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCallbackTypes}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         *                      Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * @return {@code this}
         */
        public Builder callbackTypes(java.util.List<? extends java.lang.Object> callbackTypes) {
            this.callbackTypes = callbackTypes;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCryptType}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. This parameter is required.
         *                  The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
         * @return {@code this}
         */
        public Builder cryptType(java.lang.String cryptType) {
            this.cryptType = cryptType;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getCryptType}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. This parameter is required.
         *                  The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
         * @return {@code this}
         */
        public Builder cryptType(com.aliyun.ros.cdk.core.IResolvable cryptType) {
            this.cryptType = cryptType;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getUrl}
         * @param url Property url: The detection result will be called back to the url. This parameter is required.
         * @return {@code this}
         */
        public Builder url(java.lang.String url) {
            this.url = url;
            return this;
        }

        /**
         * Sets the value of {@link AuditCallbackProps#getUrl}
         * @param url Property url: The detection result will be called back to the url. This parameter is required.
         * @return {@code this}
         */
        public Builder url(com.aliyun.ros.cdk.core.IResolvable url) {
            this.url = url;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AuditCallbackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AuditCallbackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AuditCallbackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuditCallbackProps {
        private final java.lang.Object auditCallbackName;
        private final java.lang.Object callbackSuggestions;
        private final java.lang.Object callbackTypes;
        private final java.lang.Object cryptType;
        private final java.lang.Object url;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.auditCallbackName = software.amazon.jsii.Kernel.get(this, "auditCallbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackSuggestions = software.amazon.jsii.Kernel.get(this, "callbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackTypes = software.amazon.jsii.Kernel.get(this, "callbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cryptType = software.amazon.jsii.Kernel.get(this, "cryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.auditCallbackName = java.util.Objects.requireNonNull(builder.auditCallbackName, "auditCallbackName is required");
            this.callbackSuggestions = java.util.Objects.requireNonNull(builder.callbackSuggestions, "callbackSuggestions is required");
            this.callbackTypes = java.util.Objects.requireNonNull(builder.callbackTypes, "callbackTypes is required");
            this.cryptType = java.util.Objects.requireNonNull(builder.cryptType, "cryptType is required");
            this.url = java.util.Objects.requireNonNull(builder.url, "url is required");
        }

        @Override
        public final java.lang.Object getAuditCallbackName() {
            return this.auditCallbackName;
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
        public final java.lang.Object getCryptType() {
            return this.cryptType;
        }

        @Override
        public final java.lang.Object getUrl() {
            return this.url;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("auditCallbackName", om.valueToTree(this.getAuditCallbackName()));
            data.set("callbackSuggestions", om.valueToTree(this.getCallbackSuggestions()));
            data.set("callbackTypes", om.valueToTree(this.getCallbackTypes()));
            data.set("cryptType", om.valueToTree(this.getCryptType()));
            data.set("url", om.valueToTree(this.getUrl()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.AuditCallbackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AuditCallbackProps.Jsii$Proxy that = (AuditCallbackProps.Jsii$Proxy) o;

            if (!auditCallbackName.equals(that.auditCallbackName)) return false;
            if (!callbackSuggestions.equals(that.callbackSuggestions)) return false;
            if (!callbackTypes.equals(that.callbackTypes)) return false;
            if (!cryptType.equals(that.cryptType)) return false;
            return this.url.equals(that.url);
        }

        @Override
        public final int hashCode() {
            int result = this.auditCallbackName.hashCode();
            result = 31 * result + (this.callbackSuggestions.hashCode());
            result = 31 * result + (this.callbackTypes.hashCode());
            result = 31 * result + (this.cryptType.hashCode());
            result = 31 * result + (this.url.hashCode());
            return result;
        }
    }
}
