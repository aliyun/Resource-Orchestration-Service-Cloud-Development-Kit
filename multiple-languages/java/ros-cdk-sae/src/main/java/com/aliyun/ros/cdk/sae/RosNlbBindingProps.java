package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>RosNlbBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:53.915Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosNlbBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosNlbBindingProps.Jsii$Proxy.class)
public interface RosNlbBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListeners();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNlbId();

    /**
     * @return a {@link Builder} of {@link RosNlbBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNlbBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNlbBindingProps> {
        java.lang.Object appId;
        java.lang.Object listeners;
        java.lang.Object nlbId;

        /**
         * Sets the value of {@link RosNlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosNlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosNlbBindingProps#getListeners}
         * @param listeners the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listeners(com.aliyun.ros.cdk.core.IResolvable listeners) {
            this.listeners = listeners;
            return this;
        }

        /**
         * Sets the value of {@link RosNlbBindingProps#getListeners}
         * @param listeners the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listeners(java.util.List<? extends java.lang.Object> listeners) {
            this.listeners = listeners;
            return this;
        }

        /**
         * Sets the value of {@link RosNlbBindingProps#getNlbId}
         * @param nlbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nlbId(java.lang.String nlbId) {
            this.nlbId = nlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosNlbBindingProps#getNlbId}
         * @param nlbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nlbId(com.aliyun.ros.cdk.core.IResolvable nlbId) {
            this.nlbId = nlbId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNlbBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNlbBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNlbBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNlbBindingProps {
        private final java.lang.Object appId;
        private final java.lang.Object listeners;
        private final java.lang.Object nlbId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listeners = software.amazon.jsii.Kernel.get(this, "listeners", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nlbId = software.amazon.jsii.Kernel.get(this, "nlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.listeners = java.util.Objects.requireNonNull(builder.listeners, "listeners is required");
            this.nlbId = java.util.Objects.requireNonNull(builder.nlbId, "nlbId is required");
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getListeners() {
            return this.listeners;
        }

        @Override
        public final java.lang.Object getNlbId() {
            return this.nlbId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            data.set("listeners", om.valueToTree(this.getListeners()));
            data.set("nlbId", om.valueToTree(this.getNlbId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosNlbBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNlbBindingProps.Jsii$Proxy that = (RosNlbBindingProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            if (!listeners.equals(that.listeners)) return false;
            return this.nlbId.equals(that.nlbId);
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.listeners.hashCode());
            result = 31 * result + (this.nlbId.hashCode());
            return result;
        }
    }
}
